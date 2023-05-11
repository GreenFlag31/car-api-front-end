import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSubscription!: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = user !== null;
    });
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    console.log('desctruction');

    this.userSubscription.unsubscribe();
  }
}
