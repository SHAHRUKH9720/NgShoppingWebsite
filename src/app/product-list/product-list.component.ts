import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductsList:Product[]=[];
  constructor(private appService:AppService) {
  }

  ngOnInit(): void {
    this.getProductsList()
  }


  getProductsList():any{
    this.appService.ProductList().subscribe
    (
      (data)=>{
        this.ProductsList=data;
      },
      (error)=>console.log(error)
    )
  }

}
