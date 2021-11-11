import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/views/landing-page/landing-page.component';
import { CategoriesComponent } from './core/views/categories/categories.component';
import { CartComponent } from './core/views/cart/cart.component';
import {UserAccessComponent } from './core/views/user-access/user-access.component';
import {BusinessComponent } from './core/views/business/business.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { BusinessProductsComponent } from './core/views/business-products/business-products.component';

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
        path: 'business/:category',
        component: BusinessComponent
      },
      {
        path: 'business-details/:id',
        component: BusinessProductsComponent
      },
    ]
  },
  {
    path: 'cart',
    component: CartComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
