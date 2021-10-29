import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userIsAuth = true;
  homeActive = false;
  faCoffee = faCoffee;
  

  constructor(private router: Router) { }


  ngOnInit(): void {
    console.log(this.router.url)  
    if(this.router.url === '/'){
      this.homeActive = true;  
    }

  }

}
