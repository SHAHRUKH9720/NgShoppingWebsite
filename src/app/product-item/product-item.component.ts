import { CartProduct } from './../shared/cartProduct.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,private appService:AppService) { }
  productId!:any;
  productItem:Product = new Product()
  ngOnInit(): void {
    this.productId  = this.activateRoute.snapshot.paramMap.get("id")
    console.log(this.productId)
    this.getProductItem()
  }

  getProductItem():any{
    this.appService.ProductItem(this.productId).subscribe(
      data=>{

        this.productItem = data[0];
        // console.log(this.productItem );
      }
    )
  }

  addCart(){
    let cp = new CartProduct(this.productItem,1);
    this.appService.addToCart(cp);
    alert("Item Added Successfully")
  }

}
