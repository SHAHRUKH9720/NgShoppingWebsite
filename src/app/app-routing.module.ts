import { CartComponent } from './cart/cart.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'productList', component: ProductListComponent },
  { path: 'productItem/:id', component: ProductItemComponent},
  { path: 'login', component:LoginComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
