import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'NgDemo';


  constructor(private appService:AppService,private router:Router,private http:HttpClient){
      console.log("app works")
  }

cart(){
  this.router.navigate(["/cart"]);
}


logout(){
  this.router.navigate(["/login"]);
  this.appService.setUserData(null);

}


varify(){
  return this.appService.isLogin()
}
  ngOnInit():void{

  }

}
