import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-state',
  templateUrl: './invoice-state.component.html',
  styleUrls: ['./invoice-state.component.scss']
})
export class InvoiceStateComponent implements OnInit {
  state = "";
  order = {
    order_name: 'Pizza mixta', amount: '2', price: 250, state: "Entregado"
  }
  constructor() {
    this.invoiceState();
   }

  ngOnInit(): void {
  }

  invoiceState(): void{
    this.state = this.order.state;
  }
}
