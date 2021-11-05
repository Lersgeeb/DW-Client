import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Business {
  name: string;
  resource: string;
}

interface CategoryBusiness {
  name: string;
  list: Business [];
}

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  restaurants: Business [] =  [
    {
      name:'Pizza Hut',
      resource:'pizza-hut'
    },
    {
      name:'Burger King',
      resource:'burger-king'
    },
    {
      name:'Popeyes',
      resource:'popeyes'
    },
  ]

  listCategoryBusiness: CategoryBusiness[] = [
    {
      name: 'Restaurantes',
      list: this.restaurants
    },
  ]

  currentCategoryBusiness: CategoryBusiness = this.listCategoryBusiness[0]


  categoryId: string | null = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
    })
  }

}
