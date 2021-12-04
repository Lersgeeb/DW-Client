import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserSingUp } from 'src/app/core/interfaces/user-sing-up';
import { UserLogin } from 'src/app/core/interfaces/user-login';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `http://localhost:8888/customers`
  authUser:UserSingUp = {
    fullname: '',
    email: '',
    password: ''
  }
  auth= true;
  authChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient
  ) { 
    this.authChange.subscribe( (value) => {
      this.auth = value
    });
  }

  getAuth(){
      return this.auth;
  }

  signUp(client:UserSingUp): Observable<any>{  
    let $SignUpObs = this.httpClient.post<any>(`${this.url}/signup`, client, { observe: 'response' })
    $SignUpObs.subscribe( res => {
      if(res.status==200){
        localStorage.setItem('token', res.body.token);
        this.authChange.next(true)
      }
    })
    return $SignUpObs;
  }

  access(client:UserLogin): Observable<any>{
    let $loginObs =  this.httpClient.post<any>(`${this.url}/login`, client, { observe: 'response' })    
    $loginObs.subscribe(res => {
      if(res.status==200){
        localStorage.setItem('token', res.body.token);
        this.authChange.next(true)
      }
    })
    return $loginObs;
  }
  
  logout(){
    localStorage.removeItem('token');
    this.authChange.next(false)
  }
}
