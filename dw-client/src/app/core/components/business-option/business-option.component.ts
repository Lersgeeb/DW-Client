import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-option',
  templateUrl: './business-option.component.html',
  styleUrls: ['./business-option.component.scss']
})
export class BusinessOptionComponent implements OnInit {

  @Input () resource: string = '';
  @Input () name: string = '';
  routeLogo = '';
  routeBgImg = '';
  

  constructor() { }

  ngOnInit(): void {
    this.routeLogo = `assets/images/business/${this.resource}-logo.png`;
    this.routeBgImg = `assets/images/business/${this.resource}.png`;
  }

}
