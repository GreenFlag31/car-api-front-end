import { Component, Input, OnInit } from '@angular/core';
import { Navigation } from '../shared/interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() navigation!: Navigation;
  constructor() {}

  ngOnInit(): void {}
}
