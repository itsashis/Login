import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 // firstName= '';
  userClaims: any;
  constructor(private _myService:MyserviceService  , private router:Router) 
    {/*
      this._myService.getUserDetails()
      .subscribe(
        //data => this.firstName= data.toString(),
       data=>{console.log(data)},
       // error => this.router.navigate(['/login'])
        
      )*/

     }

  ngOnInit() {
    this._myService.getUserClaims().subscribe(data =>{
      this.userClaims= data;
      console.log(this.userClaims);
    },
    error => this.router.navigate(['/login']),
    )
  }

  logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/login']);
  }

}
