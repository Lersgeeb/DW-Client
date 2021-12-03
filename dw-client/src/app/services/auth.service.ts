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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(error)
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
