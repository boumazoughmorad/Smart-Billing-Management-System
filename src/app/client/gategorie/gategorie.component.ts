import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/server/data.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-gategorie',
  templateUrl: './gategorie.component.html',
  styleUrls: ['./gategorie.component.css']
})
export class GategorieComponent implements OnInit {
  isSignedIn!:boolean;
  categories:any;
  idgategorie:any;
  producersid:any;
  h:any;
  producers:any;
  categoriesid:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  constructor(private dataService:DataService,private route:ActivatedRoute,public token:TokenStorageService,private http:HttpClient,public fb:FormBuilder,private router:Router) { }
  // private auth:AuthStateService,
  ngOnInit(): void {
    
    this.idgategorie = this.route.snapshot.params['id'];
    this.getcateg();
    this.getcategorieid(this.idgategorie);
    this.getinfo();
    this.getpData();
    // this.auth.userAuthState.subscribe((val)=>{this.isSignedIn=val;});
  }
 
signout(){
  // this.auth.setAuthState(false);
  this.token.removeToken();
  this.router.navigate(['login/client']);
}
getpData(){
  
  this.dataService.getproData().subscribe(res=>{
    console.log('**********************');
    console.log(res);
    console.log('**********************');
    this.producers=res;
  })}
fun(id:any){
  if(id==this.idgategorie){
  return true;}
  else{
  return false;}
}
  getcateg(){

    this.dataService.getcatega().subscribe(res=>{
    //  console.log(res);
      this.categories=res;
      console.log(this.categories);
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
    getcategorieid(id:any){
      console.log();
      // this.dataService.getgategid(id).subscribe(res=>{
        // console.log(res);
        // this.categoriesid=res;
        this.http.get<any>('http://127.0.0.1:8000/api/categorieid/'+id).subscribe(res=>{
          console.log(res);
          this.categoriesid=res;
       //  (err)=> console.log(err);
          
      });
       
       
      
      // })
    }





}
