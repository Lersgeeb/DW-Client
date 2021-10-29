import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/views/landing-page/landing-page.component';
import { CategoriesComponent } from './core/views/categories/categories.component';
import { CartComponent } from './core/views/cart/cart.component';
import {UserAccessComponent } from './core/views/user-access/user-access.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'access',
    component: UserAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
