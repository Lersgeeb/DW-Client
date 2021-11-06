import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
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
    {
      name: 'Ferretería',
      icon: 'tool'
    },
    {
      name: 'Joyería',
      icon: 'jewel'
    },
    {
      name: 'Café',
      icon: 'coffe'
    },
    {
      name: 'Fitness',
      icon: 'exercise'
    },

  ]

  newRoute = '';

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.newRoute = `${this.route.url}/business/1`;
  }

}
