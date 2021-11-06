import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/views/landing-page/landing-page.component';
import { CategoriesComponent } from './core/views/categories/categories.component';
import { CartComponent } from './core/views/cart/cart.component';
import {UserAccessComponent } from './core/views/user-access/user-access.component';
import {BusinessComponent } from './core/views/business/business.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrdersComponent } from './core/components/orders/orders.component';
import { OrderComponent } from './core/components/order/order.component';
import { CommercialInvoiceComponent } from './core/views/commercial-invoice/commercial-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'business/:id',
        component: BusinessComponent
      },
    ]
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path:'orders',
        component: OrdersComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'commercial-invoice',
        component: CommercialInvoiceComponent
      }
    ]
  },
  {
    path: 'access',
    component: UserAccessComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent
      },
      {
      path: 'login',
      component: LoginComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
