import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
h:any;
infoClientid:any;
commandes:any;
infouser:any;
commande:any;
image_redi:any='http://127.0.0.1:8000/storage/';
  constructor(public token:TokenStorageService,public router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.getinfo();
    this.getinfoCommends();
    this.getifouser();
    this.getinfoCommend();
  }
  serch(input:any){
   alert(input);
  } 
  getinfoCommend(){
    this.http.get<any>('http://127.0.0.1:8000/api/allcommande').subscribe(res=>{
      // alert(res);
      
      
      this.commande=res;
      console.log(this.commande);
      
    });
      
  }
  getinfo(){
    
    this.h=this.token.getidAdmin();
    this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h).subscribe(res=>{
          console.log(res);
          this.infoClientid=res;
           
      });

 
  }
  getifouser(){
    
    this.h=this.token.getidAdmin();
    this.http.get<any>('http://127.0.0.1:8000/api/users').subscribe(res=>{
          console.log(res);
          this.infouser=res;
           
      });

 
  }
  signout(){
    // this.auth.setAuthState(false);(click)="signout()"
    this.token.removeTokenAdmin();
    this.router.navigate(['login/admin']);
  }
  getinfoCommends(){
    this.http.get<any>('http://127.0.0.1:8000/api/commandes').subscribe(res=>{
      // alert(res);
      
      console.log('commandes');
      
      this.commandes=res;
      console.log(this.commandes);
      
    });
     
  }
}
