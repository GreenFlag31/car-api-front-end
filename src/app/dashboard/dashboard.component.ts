import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  endPointClientIDandQuota =
    'https://historical-car-api.web.app/api/user/clientID_quota';
  testAccountApiKey = {
    api_key: '0eb71b40-6205-439b-a78b-da3c1fb9a9b7',
  };

  keyAvailabilityMessage =
    'Please store this key in a safe place because as soon as you navigate away from this page, I will not be able to retrieve this key. API keys are hashed in database.';
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
      this.newKeyGenerated = true;
    }
    this.authService.getCurrentQuotaOrGenNewKey(endpoint)?.subscribe({
      next: () => {
        this.refreshIsLoading = false;
        this.isLoading = false;
        this.ref.markForCheck();
        this.authService.refreshJwtToken();
      },
    });
  }
}
