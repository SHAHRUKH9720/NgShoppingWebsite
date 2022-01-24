import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private appSevice:AppService,private router:Router){}
  canActivate(){
    this.router.navigate(['/login']);
      let resul =  this.appSevice.isLogin();

      if(!resul)
        this.router.navigate(['/login']);


        return resul

  }

}
