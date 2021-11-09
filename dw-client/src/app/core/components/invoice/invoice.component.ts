import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  sub = 0;
  price=0;
  isv = 0;
  admin_commision = 0;
  delivery_commision = 0;
  total = 0;
  orders = [
    {order_name: 'Pizza mixta', amount: '2', price: 250},
    {order_name: 'Pizza mixta', amount: '2', price: 200},{order_name: 'Pizza mixta', amount: '2', price: 250}];
  
  

  constructor() { 
  
    this.subtotal();
    this.totalInvoice();

  }

  ngOnInit(): void {
    
  }


  subtotal(): void{
    
    for(let i=0;i<this.orders.length;i++){
        this.price = this.orders[i].price;
        this.sub += this.price;
        console.log(this.sub);
        
        
    }
  }

  totalInvoice(): void{
    this.isv = this.sub*0.15;
    this.admin_commision = this.sub*0.10;
    this.delivery_commision = this.sub*0.05;
    this.total = this.isv + this.admin_commision +this.delivery_commision + this.sub;
  }

}
