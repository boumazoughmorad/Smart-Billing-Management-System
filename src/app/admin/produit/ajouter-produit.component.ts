import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
export class Produit {
  name:any;
  producer_id:any;
  quantite:any;
  prix:any;
  categorie_id:any;
  
 
  description:any;

 
  stock_id:any;
  image_path:any;
  valid:any;
  }
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  p=new Produit;
  pro:any;
  h=new Produit;
  h1:any;
infoClientid:any;
image_redi:any='http://127.0.0.1:8000/storage/';
  constructor(private dataService:DataService,private http:HttpClient,private fb:FormBuilder,public router:Router,public token:TokenStorageService) { 
   
  }
  ngOnInit(): void {
    this.getpro();
    this.getinfo();
  }
  getpro(){

    this.dataService.getproData().subscribe(res=>{
    //  console.log(res);
      this.pro=res;
      console.log(this.pro);
    })

}
signout(){
  // this.auth.setAuthState(false);(click)="signout()"
  this.token.removeTokenAdmin();
  this.router.navigate(['login/client']);
}

  valide(id:any){
    
    // this.h=this.pro.find(id);
  this.h.valid=1;
  this.updatpro(id);
  
  }
  updatpro(id:any){
    console.log('update'+id);
    
    this.dataService.updatpro(id,this.h).subscribe(res=>{
        console.log(res);
     
      this.getpro();
      })


}

getinfo(){
      
  this.h1=this.token.getidAdmin();
  this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h1).subscribe(res=>{
        console.log(res);
        this.infoClientid=res;
        
        
         
    });


}
}
