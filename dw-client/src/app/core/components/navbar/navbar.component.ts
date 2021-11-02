import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userIsAuth = false;

  templateStatus = {
    homeActive:false,
    categoriesActive: false,
    cartActive: false,
    accessActive: false,
  }
  navStatus = Object.create(this.templateStatus);
  

  

  constructor(private router: Router) {

    router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd){
        this.setActiveIcon()
      }
    })
   }


  ngOnInit(): void {
    
  }

  setActiveIcon(): void{
    console.log(this.router.url)  
    this.navStatus = Object.create(this.templateStatus);
    switch(this.router.url){
      case '/':
        this.navStatus.homeActive = true;  
        break;
      case '/categories':
        this.navStatus.categoriesActive = true;  
        break;
      case '/cart':
        this.navStatus.cartActive = true;  
        break;
      case '/access':
        this.navStatus.accessActive = true;  
        break;
    }
  }

  
}
