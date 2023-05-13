import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Navigation } from '../shared/interfaces';
import { Subscription } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() navigation!: Navigation;
  userSubscription!: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = user !== null;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
