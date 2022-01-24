import { HttpClient } from '@angular/common/http';
import { AppService } from './../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
     private appService:AppService,
     private router:Router,
     private ngZone:NgZone,
     private http:HttpClient
    )
     {
    this.loginForm = this.formBuilder.group({
      username:[""],
      password:[""]
    })
    console.log("login works")
  }

  ngOnInit(): void {

  }

login(){
  this.appService.Login(this.loginForm.value).subscribe(
    (data)=>{

      this.appService.setUserData(data);
      this.router.navigate(["/productList"])
    }
  )
}

}
