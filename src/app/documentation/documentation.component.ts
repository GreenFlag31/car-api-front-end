import { Component, OnInit } from '@angular/core';
import { Accordion, Navigation } from '../shared/interfaces';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
})
export class DocumentationComponent implements OnInit {
  accordionsData: Accordion[] = [
    {
      route: '/cars',
      description: 'Find all cars',
      arguments: [
        {
          name: 'sort',
          caracter: 'optional',
          definition: 'Sort by origin. Example: /cars?sort=USA',
        },
        {
          name: 'order',
          caracter: 'optional',
          definition:
            'Order by year of production with ascending or descending key. Example: /cars?order=asc. Valid keys: asc or desc.',
        },
      ],
    },
    {
      route: '/cars/make',
      description: 'Find cars belonging to a make',
      arguments: [
        {
          name: 'make',
          caracter: 'required',
          definition: 'Find a specific make. Example: cars/make/toyota',
        },
        {
          name: 'model',
          caracter: 'optional',
          definition:
            "Find a specific model of a car's make. Example: /cars/make/toyota?model=supra",
        },
      ],
    },
    {
      route: '/cars/year_of_production',
      description: 'Find cars according to a given period of time',
      arguments: [
        {
          name: 'year_min',
          caracter: 'required',
          definition:
            'Find cars from a starting year. Example: /cars/year_of_production?year_min=1950',
        },
        {
          name: 'year_max',
          caracter: 'optional',
          definition:
            'Find cars from a starting and ending period of time. Example: /cars/year_of_production?year_min=1950&year_max=1960. If not provided, defaulted to decade.',
        },
        {
          name: 'order',
          caracter: 'optional',
          definition:
            'Order by year of production with ascending or descending key. Example: /cars/year_of_production?year_min=1950&year_max=1960&order=asc. Valid keys: asc or desc.',
        },
      ],
    },
    {
      route: '/cars/engine',
      description: 'Find cars according to a specific engine power',
      arguments: [
        {
          name: 'power',
          caracter: 'required',
          definition:
            'Find cars given an engine power in horsepower per hundreds. Example: /cars/engine/320 will return all cars between 320 and 400 hp.',
        },
        {
          name: 'order',
          caracter: 'optional',
          definition:
            'Order by power with ascending or descending key. Example: /cars/engine/320&order=asc. Valid keys: asc or desc.',
        },
      ],
    },
    {
      route: '/cars/min_top_speed_kmh',
      description: 'Find cars according to a minimum top speed',
      arguments: [
        {
          name: 'speed',
          caracter: 'required',
          definition:
            'Find cars according to a minimum top speed in km/h. Example: /cars/min_top_speed_kmh/200 will return all cars with a minimum top speed of 200 km/h.',
        },
        {
          name: 'order',
          caracter: 'optional',
          definition:
            'Order by speed with ascending or descending key. Example: /cars/min_top_speed_kmh/200&order=asc. Valid keys: asc or desc.',
        },
      ],
    },
    {
      route: '/cars/weight',
      description: 'Find cars according to a specific weight',
      arguments: [
        {
          name: 'min_weight',
          caracter: 'required',
          definition:
            'Find cars given a minimum weight in kilograms per hundreds. Example: /cars/min_weight/1200 will return all cars whose weight are between 1200 and 1300 kg.',
        },
        {
          name: 'order',
          caracter: 'optional',
          definition:
            'Order by weight with ascending or descending key. Example: /cars/min_weight/1200&order=asc. Valid keys: asc or desc.',
        },
      ],
    },
  ];
  navigation: Navigation = {
    previous: {
      name: 'Home',
      link: '/',
    },
    next: {
      name: 'Login',
      link: '/login',
    },
  };

  constructor() {}

  ngOnInit() {}
}
