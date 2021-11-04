import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
