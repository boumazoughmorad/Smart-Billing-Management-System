import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit {
  isSignedIn!:boolean;
  producers:any;
  producersid:any
  h:any;
  firstName:any;
  categories:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  constructor(private dataService:DataService,public token:TokenStorageService,public router:Router) { }
  // ,private auth:AuthStateService,
  ngOnInit(): void {
    this.getpData();
    this.getcateg();
    this.getinfo();
    // this.auth.userAuthState.subscribe((val)=>{this.isSignedIn=val;});
  }
 
signout(){
  // this.auth.setAuthState(false);
  this.token.removeToken();
  this.router.navigate(['login/client']);
}

 


  getpData(){
    console.log('liste des produits');
    this.dataService.getproData().subscribe(res=>{
      console.log(res);
      this.producers=res;
    })}
    getcateg(){

      this.dataService.getcatega().subscribe(res=>{
      //  console.log(res);
        this.categories=res;
        console.log('***************');
        
        console.log(this.categories.id);
      })
 }

 getinfo(){

   this.h=this.token.getidUser();
   this.dataService.getinfoclient(this.h).subscribe(res=>{
    //  console.log(res);
      this.producersid=res;
      console.log(this.producersid);
    })

 }

}