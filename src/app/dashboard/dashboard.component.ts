import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AuthService } from '../login/auth.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  endPointClientIDandQuota =
    'https://historical-car-api.web.app/api/user/clientID_quota';
  testAccountApiKey = {
    api_key: '0eb71b40-6205-439b-a78b-da3c1fb9a9b7',
  };

  keyAvailabilityMessage =
    'Please store this key in a safe place because as soon as you navigate away from this page, I will not be able to retrieve this key. API keys are hashed in database and irretrievable.';
  isLoading = false;
  newKeyGenerated = false;
  refreshIsLoading = false;
  user$ = this.authService.user;

  constructor(
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.authService.user.subscribe();
    // refresh quota if not direct login
    if (!this.authService.comingFromLoginNoReloadQuota) {
      this.getCurrentQuota();
    }
    this.authService.comingFromLoginNoReloadQuota = false;
  }

  getCurrentQuota() {
    this.getCurQuotaOrGenNewKey(this.authService.endPoints.quota);
  }

  generateNewApiKey() {
    this.getCurQuotaOrGenNewKey(this.authService.endPoints.newApiKey);
  }

  getCurQuotaOrGenNewKey(endpoint: string) {
    if (endpoint.includes('quota')) {
      this.refreshIsLoading = true;
    } else {
      this.isLoading = true;
    }
    this.authService.getCurrentQuotaOrGenNewKey(endpoint)?.subscribe({
      next: () => {
        if (this.isLoading) this.newKeyGenerated = true;
        this.refreshIsLoading = false;
        this.isLoading = false;
        this.ref.markForCheck();
        this.authService.refreshJwtToken();
      },
    });
  }

  ngOnDestroy() {
    // if new registered user
    let user: User = JSON.parse(localStorage.getItem('user')!);
    if (!user?.api_key && !user?.new_api_key) return;

    delete user.api_key;
    delete user.new_api_key;
    this.authService.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
