import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http:HttpClient) { }


  submitData(body:any){
    console.log(body);
    return this._http.post('http://localhost/rest-api-authentication/login.php',body,{
      observe:'body' 
    });
  
  }
 /* getUserDetails(){
    return this._http.get('http://localhost/rest-api-authentication/validate_token.php',{
      observe:'body',
      params: new HttpParams().append('token:',localStorage.getItem('token'))
    });
  }*/

  getUserClaims(){
   return this._http.get('http://localhost/rest-api-authentication/validate_token.php',{observe:'body',
   params: new HttpParams().append('token' ,localStorage.getItem('token'))
  });
  }
}
