import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  successMessage = '';


  constructor(
    private _ser: MyserviceService,
    private _myRoute:HttpClient,
    private router:Router

    )
     {  this.loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  }); }

  ngOnInit() {
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    this._ser.submitData(this.loginForm.value)
    .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token' ,data.toString());
            //this._myRoute.navigate(['/']);
            this.router.navigate(['/dash'])
          },
          error => this.successMessage = 'Some Error'
    );
  }
}
