import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Cart } from './shared/Cart.model';
import { CartProduct } from './shared/cartProduct.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

ProductList():Observable<any>{
return this.http.get(`https://ecommercebyrk.herokuapp.com/products/getAllProducts`)
}

ProductItem(id:number):Observable<any>{
  return this.http.get(`https://ecommercebyrk.herokuapp.com/products/getProductById/${id}`)
  }

Login(data:any):Observable<any>{
  return this.http.post<any>(`https://ecommercebyrk.herokuapp.com/users/login`,data)
}

data:any=null;

setUserData(data:any){
   this.data= data
}

isLogin(){
  return this.data!==null
}

cart = new Cart()

getCart(){
  return this.cart
}

addToCart(cartItem:CartProduct){
  this.cart.products.push(cartItem);
  this.cart.totalCartValue+=cartItem.totalAmount
}

deleteItem(i:any){
  let cp= this.cart.products[i]
  this.cart.products.splice(i,1);
  this.cart.totalCartValue = this.cart.totalCartValue-cp.totalAmount
}






}
