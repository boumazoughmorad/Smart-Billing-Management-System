import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';

import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-commende',
  templateUrl: './commende.component.html',
  styleUrls: ['./commende.component.css']
})
export class CommendeComponent implements OnInit {
  categories:any;
  producersid:any;
  h:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  commande:any;
  product:any;
  data={
    'id':"",
    'client_id': "",
    'quantity':'',
    'products':'',
    'prix_totale':'',
    'name':'',
    'image_path':'',
    'description':'',

  } ;
  image:any;
 additon:any;
  prix_totale=0;
  producers:any;
 prix_totalea:any;
  constructor(private dataService:DataService,private http:HttpClient,private token:TokenStorageService) { }

  ngOnInit(): void {
    this.getpData();
    this.getcateg();
    this.getinfoCommend();
    this.getinfo();
     this.getinfoCommend();
    
    
    
  }
  getcateg(){

    this.dataService.getcatega().subscribe(res=>{
    //  console.log(res);
      this.categories=res;
    
    })
}
getinfoCommend(){
  this.http.get<any>('http://127.0.0.1:8000/api/commande').subscribe(res=>{
    // alert(res);
    
    
    this.commande=res;
    
    this.add();
  });
   
}
fun(data:any){
 
  // this.image=data.image_path;
  return data.image_path;
}
getpData(){
 
  this.dataService.getproData().subscribe(res=>{
    console.log(res);
    this.producers=res;
  })}
getinfo(){

  this.h=this.token.getidUser();
  this.dataService.getinfoclient(this.h).subscribe(res=>{
   //  console.log(res);
     this.producersid=res;
    
   })

}
getpDataid(id:any):any{

  this.dataService.getproDataid(id).subscribe(res=>{

    this.product=res;
    
    
    // console.log(res);
      // return this.product.producer_id;
      // return res;
 
  })
}
add(){
  this.additon=0;
  this.h=this.token.getidUser();
  console.log(this.additon);
for(let c of this.commande)
{
  if(c.client_id==this.h){
    this.additon=this.additon+c.prix_totale;
    console.log(c.prix_totale);
    
  }
}
  
}
f(id1:any,id2:any){

if(id1==id2 ){
  
  
return true;}
else{

return false;}
}




}
