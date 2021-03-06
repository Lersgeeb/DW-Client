import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {

  @Input() iconName = ''; 
  @Input() isActive = false; 

  constructor() {}

  ngOnInit(): void {}

}
