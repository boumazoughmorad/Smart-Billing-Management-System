import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
const AUTH_API='http://127.0.0.1:8000/api/';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
export class User{
  //name!:String;
email!:String;
password!:String;
address!:String;
name!:String;
     
      city!:String;
      country!:String;
//password_confirmation!:String;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
    login(user :any): Observable<any>{
      console.log(user);

      return  this.http.post(AUTH_API +'login',user);
    }
    // profileUser(): Observable<any>{
    //   return this.http.get(AUTH_API +'userprofile');}
    regester(user:any): Observable<any>{
      return this.http.post(AUTH_API +'signup',
      user);}
      loginadmin(admin :any): Observable<any>{
        console.log(admin);
  
        return  this.http.post(AUTH_API +'admin/login',admin);
      }
      loginfactory(f :any): Observable<any>{
        
  
        return  this.http.post(AUTH_API +'producer/login',f);
      }
      logindist(f :any): Observable<any>{
        
  
        return  this.http.post(AUTH_API +'distributer/login',f);
      }


 }

