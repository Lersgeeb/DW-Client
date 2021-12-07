import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-data-invoice',
  templateUrl: './data-invoice.component.html',
  styleUrls: ['./data-invoice.component.scss']
})
export class DataInvoiceComponent implements OnInit {
  order_info = new FormGroup({
    latitude : new FormControl(''),
    longitude : new FormControl(''),
    card_number : new FormControl(''),
    expired_date : new FormControl(''),
    cvv : new FormControl(''),
  });
 
  constructor(
    private authService: AuthService,
    private ordersService: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.getProductsOfCart().subscribe(
      res => {
        console.log(res.body)
      }
    )
  }

  handlerOrder(){
    console.log(this.order_info.value)
    this.ordersService.createOrder(this.order_info.value).subscribe(
      res => {
        if(res.status == 200){
          console.log(res.body._id)
          this.router.navigate([`/state-invoice/${res.body._id}`]);
        }
      }
    )
  }

}
