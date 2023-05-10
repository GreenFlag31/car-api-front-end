import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<any> {
  constructor(private authService: AuthService) {}

  resolve(): Observable<any> | any {
    if (!this.authService.user['_value']) {
      return this.authService.getCurrentQuotaOrGenNewKey(
        this.authService.endPoints.quota
      );
    }
    return this.authService.user.subscribe();
  }
}
