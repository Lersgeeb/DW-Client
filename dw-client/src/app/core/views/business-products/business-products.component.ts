import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-business-products',
  templateUrl: './business-products.component.html',
  styleUrls: ['./business-products.component.scss']
})
export class BusinessProductsComponent implements OnInit {
  faPlus = faPlus;
  category_id: (string | null) = "";
  business_id: (string | null) = "";
  business:any = {};
  showBusiness = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      this.category_id = params.get('category_id');
      this.business_id = params.get('business_id');

      if(
        typeof this.category_id === 'string' &&
        typeof this.business_id === 'string' 
      ){
        this.categoriesService.getAllProductsOfBusiness(this.category_id, this.business_id).subscribe(
          res => {
            this.business = res.business;
            this.showBusiness = true;
            console.log(res)
          }
        )
      }
    })
  }

  get backButton(){
    let cat_id = this.category_id
    if( ( cat_id != "") && ( cat_id != null) )
      return `/categories/cat_business/${cat_id}`
    else
      return `/categories`
  }


}
