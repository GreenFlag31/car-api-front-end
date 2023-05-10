import { Component, Input, OnInit } from '@angular/core';
import { Accordion } from '../shared/interfaces';

@Component({
  selector: 'app-accordion-routes',
  templateUrl: './accordion-routes.component.html',
  styleUrls: ['./accordion-routes.component.css'],
})
export class AccordionRoutesComponent implements OnInit {
  @Input() accordionsData!: Accordion[];

  constructor() {}

  ngOnInit(): void {}
}
