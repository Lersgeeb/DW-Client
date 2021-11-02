import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  categories = [
    {
      name: 'Restaurante',
      icon: 'restaurant'
    },
    {
      name: 'Supermercado',
      icon: 'market'
    },
    {
      name: 'Farmacia',
      icon: 'drugStore'
    },
    {
      name: 'Fiesta',
      icon: 'party'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
