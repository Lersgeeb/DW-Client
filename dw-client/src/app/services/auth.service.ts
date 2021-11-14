import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = true;
  constructor() { }

  getAuth(){
      return this.auth;
  }

  access(){
    this.auth = true;
  }
  
  logout(){
    this.auth = false;
  }
}
