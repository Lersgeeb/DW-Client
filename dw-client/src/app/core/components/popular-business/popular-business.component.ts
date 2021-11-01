import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-business',
  templateUrl: './popular-business.component.html',
  styleUrls: ['./popular-business.component.scss']
})
export class PopularBusinessComponent implements OnInit {

  business = [
    {
      name: 'PIZZA HUT',
      logo: '../../../../assets/icons/landingpage/pizza-hut-logo.svg',
      img: '../../../../assets/icons/landingpage/pizza-hut.svg'
    },
    {
      name: 'BURGER KING',
      logo: '../../../../assets/icons/landingpage/burger-king-logo.svg',
      img: '../../../../assets/icons/landingpage/burger-king.svg'
    },
    {
      name: 'POPEYES',
      logo: '../../../../assets/icons/landingpage/logo-popeyes.svg',
      img: '../../../../assets/icons/landingpage/popeyes.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
