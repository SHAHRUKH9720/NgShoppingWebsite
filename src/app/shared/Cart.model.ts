import { CartProduct } from "./cartProduct.model";

export class Cart{
  products!:CartProduct[];
  totalCartValue!:number
  constructor(){
    this.products = [];
    this.totalCartValue=0
  }
}
