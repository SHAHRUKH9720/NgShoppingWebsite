import { Product } from './../shared/product.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private appService:AppService) { }
cart:Cart = new Cart()
CartInfo!:any[]
  ngOnInit(): void {
    this.cart =this.appService.getCart()
    this.CartInfo = this.cart.products
    console.log(this.cart.products)
  }

  inc(){
    this.cart.products
  }

  delete(index:any){
    this.appService.deleteItem(index)
  }

}
