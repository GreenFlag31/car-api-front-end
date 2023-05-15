import { Component } from '@angular/core';
import { Navigation } from '../shared/interfaces';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  navigation: Navigation = {
    previous: {
      name: 'Home',
      link: '/',
    },
    next: {
      name: 'Documentation',
      link: '/documentation',
    },
  };
}
