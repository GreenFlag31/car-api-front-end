import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData, Quota } from '../shared/interfaces';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endPoints = {
    register: 'https://historical-car-api.web.app/api/user/register',
    login: 'https://historical-car-api.web.app/api/user/login',
    quota: 'https://historical-car-api.web.app/api/user/quota',
    newApiKey: 'https://historical-car-api.web.app/api/user/api-key/new',
  };
  ErrorResponseMessage!: string;
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.endPoints.register, {
        email,
        password,
      })
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response) => {
          this.handleAuthentication(
            response.clientID,
            response.quota,
            response.jwt,
            response.jwtExpirationTime,
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
          this.handleAuthentication(
            response.clientID,
            response.quota,
            response.jwt,
            response.jwtExpirationTime,
            response.testAccount // no api key at login
          );
        })
      );
  }

  private handleAuthentication(
    clientID: string,
    quota: number,
    jwt: string,
    jwtExpirationTime: Date,
    testAccount = false,
    api_key = ''
  ) {
    const user = new User(
      clientID,
      quota,
      jwt,
      jwtExpirationTime,
      testAccount ? testAccount : undefined,
      api_key === '' ? undefined : api_key
    );
    this.user.next(user);

    // this.logOutInactivity(expiresIn * 1000);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentQuotaOrGenNewKey(endpoint: string) {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (!user) return;

    return this.http
      .post<any>(endpoint, {
        jwt: user.jwt,
      })
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response) => {
          const responseWithNewData = {
            ...user,
            ...(endpoint.includes('quota')
              ? { quota: response.quota }
              : { new_api_key: response.new_api_key }),
          };
          this.user.next(responseWithNewData);
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    debugger;
    this.ErrorResponseMessage = errorRes.message;
    return throwError(() => this.ErrorResponseMessage);
  }
}
