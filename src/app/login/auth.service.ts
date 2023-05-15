import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from '../shared/interfaces';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endPoints = {
    register: 'https://historical-car-api.web.app/api/user/register',
    login: 'https://historical-car-api.web.app/api/user/login',
    quota: 'https://historical-car-api.web.app/api/user/quota',
    newApiKey: 'https://historical-car-api.web.app/api/user/api-key/new',
    refreshJwt: 'https://historical-car-api.web.app/api/user/jwt/refresh',
  };
  ErrorResponseMessage!: string;
  comingFromLoginNoReloadQuota = false;
  timeOutID!: number;
  user = new BehaviorSubject<any>(null);
  inactivity = false;
  inactivitySubject = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}

  register(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.endPoints.register, {
        email,
        password,
      })
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response) => {
          this.handleAuthentification(
            response.clientID,
            response.quota,
            response.jwt,
            new Date(Date.now() + 1000 * 60 * 60).toString(),
            undefined, // no testAccount at register
            response.api_key
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.endPoints.login, {
        email,
        password,
      })
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response) => {
          this.handleAuthentification(
            response.clientID,
            response.quota,
            response.jwt,
            new Date(Date.now() + 1000 * 60 * 60).toString(),
            response.testAccount // no api key at login
          );
        })
      );
  }

  private handleAuthentification(
    clientID: string,
    quota: number,
    jwt: string,
    jwtExpirationTime: string,
    testAccount = false,
    api_key = ''
  ) {
    let user = new User(
      clientID,
      quota,
      jwt,
      jwtExpirationTime,
      testAccount ? testAccount : undefined,
      api_key ? api_key : undefined
    );

    this.comingFromLoginNoReloadQuota = true;

    this.user.next(user);
    this.logOutInactivity(3600 * 1000);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentQuotaOrGenNewKey(endpoint: string) {
    const user: User = JSON.parse(localStorage.getItem('user')!);
    if (!user) return;

    return this.http
      .post<any>(endpoint, {
        jwt: user.jwt,
      })
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response) => {
          let responseWithNewData = {
            ...user,
            ...(endpoint.includes('quota')
              ? { quota: response.quota }
              : { new_api_key: response.new_api_key }),
          };

          if (response.new_api_key) {
            localStorage.setItem('user', JSON.stringify(responseWithNewData));
          }
          this.user.next(responseWithNewData);
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    this.ErrorResponseMessage = errorRes.error.error;
    console.log(errorRes);

    return throwError(() => this.ErrorResponseMessage);
  }

  keepLogedIn() {
    const user: User = JSON.parse(localStorage.getItem('user')!);
    if (!user) return;

    const currentUser = new User(
      user.clientID,
      user.quota,
      user.jwt,
      user.jwtExpirationTime,
      user.testAccount,
      user.api_key
    );

    const expirationDuration =
      new Date(user.jwtExpirationTime).getTime() - new Date().getTime();

    this.logOutInactivity(expirationDuration);
    this.user.next(currentUser);
  }

  refreshJwtToken() {
    let user: User = JSON.parse(localStorage.getItem('user')!);

    // if request not 15 mins before expiration return
    if (
      !user ||
      !(
        new Date() < new Date(user.jwtExpirationTime) &&
        Date.now() > new Date(user.jwtExpirationTime).getTime() - 1000 * 60 * 15
      )
    ) {
      return;
    }

    return this.http
      .post<any>(this.endPoints.refreshJwt, { jwt: user.jwt })
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe({
        next: (response) => {
          const newExpirationTime = new Date(
            Date.now() + 1000 * 60 * 60
          ).toString();
          user = {
            ...user,
            jwt: response.jwt,
            jwtExpirationTime: newExpirationTime,
          };
          console.log(response);

          this.logOutInactivity(3600 * 1000);
          localStorage.setItem('user', JSON.stringify(user));
        },
      });
  }

  logOutInactivity(expirationDuration: number) {
    if (this.timeOutID) clearTimeout(this.timeOutID);

    this.timeOutID = window.setTimeout(() => {
      this.inactivity = true;
      this.logOut();
    }, expirationDuration);
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem('user');
    if (this.router.url.includes('dashboard')) {
      this.router.navigate(['/login']);
    }
  }
}
