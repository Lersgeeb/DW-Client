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
    let route = this.router.url;
    if(route == "/")
      this.navStatus.homeActive = true;  
    else if(route.includes('/categories'))
      this.navStatus.categoriesActive = true;  
    else if(route.includes('/cart'))
      this.navStatus.cartActive = true; 
    else if(route.includes('/access'))
      this.navStatus.accessActive = true;   
  }

  
}
