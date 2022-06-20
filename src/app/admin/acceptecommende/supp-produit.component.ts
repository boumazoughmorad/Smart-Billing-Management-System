import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-supp-produit',
  templateUrl: './supp-produit.component.html',
  styleUrls: ['./supp-produit.component.css']
})
export class SuppProduitComponent implements OnInit {
  h:any;
  user:any;
  categories:any;
  infoClientid:any;
  additon:any;
  producers:any;
  commande:any;
  prix_totale:any;
  distributers:any;
  factory:any;
  product:any;
  commandes:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  constructor(private dataService:DataService,private http:HttpClient,private fb:FormBuilder,public router:Router,public token:TokenStorageService) { 
   
  }
  ngOnInit(): void {
    this.getinfo();
    this.getcateg();
    this.getinfoCommend();
    this.getpData();
    this.getdistData();
    this.getfactData();
    this.getinfoCommends();
    this.getinfouser();
   
  }
 
  getinfoCommends(){
    this.http.get<any>('http://127.0.0.1:8000/api/commandes').subscribe(res=>{
      // alert(res);
      
      console.log('commandes');
      
      this.commandes=res;
      console.log(this.commandes);
      
    });
     
  }
  getinfo(){
      
    this.h=this.token.getidAdmin();
    this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h).subscribe(res=>{
          console.log(res);
          this.infoClientid=res;
          
          
           
      });

 
  }
  getfactData(){
    console.log('liste des produits');
    this.dataService.getfactData().subscribe(res=>{
      console.log(res);
      this.factory=res;
     
    })}
  getdistData(){
    console.log('liste des produits');
    this.dataService.getdistData().subscribe(res=>{
      console.log(res);
      this.distributers=res;
    })}
  signout(){
    // this.auth.setAuthState(false);(click)="signout()"
    this.token.removeTokenAdmin();
    this.router.navigate(['login/admin']);
  }
  getcateg(){

    this.dataService.getcatega().subscribe(res=>{
    //  console.log(res);
      this.categories=res;
      console.log(this.categories);
    })
}

getinfoCommend(){
  this.http.get<any>('http://127.0.0.1:8000/api/allcommande').subscribe(res=>{
    // alert(res);
    
    
    this.commande=res;
    console.log(this.commande);
    this.add();
  });
   
}
fun(data:any){
  console.log("**********************");
  
  console.log(data);
  console.log("*********************");
  // this.image=data.image_path;
  return data.image_path;
}
getpData(){
  console.log('liste des produits');
  this.dataService.getproData().subscribe(res=>{
    console.log(res);
    this.producers=res;
  })}



getpDataid(id:any):any{
  console.log();
  this.dataService.getproDataid(id).subscribe(res=>{
    console.log(res);
    this.product=res;
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    
    // console.log(res);
      // return this.product.producer_id;
      // return res;
 
  })
}
add(){
  this.h=this.token.getidAdmin();
for(let c of this.commande)
{
  if(c.client_id==this.h){
    this.additon+=c.prix_totale;
  }
}
  
}
f(id1:any,id2:any){

  
  
if(id1==id2 ){
  
  
return true;}else{


return false;}
}

prix_total(){
  this.prix_totale=0;
  for(let com of this.commande){
    console.log(com.prix_total);
    
    this.prix_totale=com.prix_total+this.prix_totale;
  }

}
getinfouser(){
  this.http.get<any>('http://127.0.0.1:8000/api/users').subscribe(res=>{
    // alert(res);
    console.log(res);
    
    
    this.user=res;
  
  });
}

}
