import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NavbarItemComponent } from './core/components/navbar/navbar-item/navbar-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './core/views/landing-page/landing-page.component';
import { CategoriesComponent } from './core/views/categories/categories.component';
import { CartComponent } from './core/views/cart/cart.component';
import { UserAccessComponent } from './core/views/user-access/user-access.component';
import { CommercialInvoiceComponent } from './core/views/commercial-invoice/commercial-invoice.component';
import { DataInvoiceComponent } from './core/views/data-invoice/data-invoice.component';
import { BusinessComponent } from './core/views/business/business.component';
import { BusinessProductsComponent } from './core/views/business-products/business-products.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PopularBusinessComponent } from './core/components/popular-business/popular-business.component';
import { CategoryComponent } from './core/components/category/category.component';
import { StepsComponent } from './core/components/steps/steps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LandingPageComponent,
    CategoriesComponent,
    CartComponent,
    UserAccessComponent,
    CommercialInvoiceComponent,
    DataInvoiceComponent,
    BusinessComponent,
    BusinessProductsComponent,
    HeaderComponent,
    FooterComponent,
    PopularBusinessComponent,
    CategoryComponent,
    StepsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
