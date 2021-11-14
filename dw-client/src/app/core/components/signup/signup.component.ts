import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router, 
    private authService: AuthService   
  ) { }

  ngOnInit(): void {
  }

  handlerLogin(){
    this.authService.access();
    this.router.navigate(['/'])
  }

}
