import { Component, OnInit } from '@angular/core';

export interface Orders {
  amount: string;
  order_name: string;
  price: number,
  }

const MY_ORDERS: Orders[] = [
  {order_name: 'Pizza mixta', amount: 'PIZZA HUT', price: 250},
  {order_name: 'Pizza mixta', amount: 'BURGER KING', price: 200}
  
 
];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount', 'price'];
  dataSource = MY_ORDERS;

  constructor() { }

  ngOnInit(): void {
  }

}
