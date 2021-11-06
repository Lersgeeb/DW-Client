import { Component, OnInit } from '@angular/core';
export interface Orders {
  business: string;
  id: number;
  invoice_icon: string,
  state: string,
}

const MY_ORDERS: Orders[] = [
  {id: 1, business: 'PIZZA HUT', invoice_icon: 'assets/icons/commercial-invoice/invoice-icon.svg', state:'Entregado'},
  {id: 2, business: 'BURGER KING', invoice_icon: 'assets/icons/commercial-invoice/invoice-icon.svg',state:'En Proceso'},
  {id: 3, business: 'POPEYES', invoice_icon: 'assets/icons/commercial-invoice/invoice-icon.svg',state:'Pendiente'}
 
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

   
  displayedColumns: string[] = ['position', 'name', 'state','weight'];
  dataSource = MY_ORDERS;
  constructor() { }

  ngOnInit(): void {
  }

}
