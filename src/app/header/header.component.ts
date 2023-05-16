import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  isHamburgerOpen = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = user !== null;
    });

    fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.isHamburgerOpen = false;
      });
  }

  logOut() {
    this.authService.logOut();
  }

  toggleHamburgerIcon() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  clickedOutsideHamburger() {
    this.isHamburgerOpen = false;
  }

  collapseNavigationMenu() {
    this.isHamburgerOpen = false;
  }
}
