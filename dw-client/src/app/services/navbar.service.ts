import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  auth = false;
  constructor() { }

  login(){
    this.auth = true;
  
  }

  logout(): void{
    this.auth = false;
    
  }
}

