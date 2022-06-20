import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  n:any;
  producers:any;
  product:any;
  categories:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  idUser:any;
  idproduit:any;
  producersid:any;
  h:any;i:any;
  factoryid:any;
  factory:any;
  factoryForm=new FormGroup({
    client_id:new FormControl('',[Validators.required] ),
    quantity:new FormControl('',[Validators.required] ),
    products_id:new FormControl('',[Validators.required] ),
      //  date_orders:new FormControl('',[Validators.required] ),
      prix_totale:new FormControl('',[Validators.required] ),
      
        
  });
  milt=1;
  statu:boolean | undefined;
  constructor(private dataService:DataService,private route:ActivatedRoute,public token:TokenStorageService,private http:HttpClient,public fb:FormBuilder,public router:Router) { }

  ngOnInit(): void {
    this.idproduit = this.route.snapshot.params['id'];
    this.getpDataid(this.idproduit);
    this.getcateg();
    this.getinfo();
    // this.getinfofacto();
    // this.getinfofacto();
    this.h=this.token.getidUser();
   
    // this.factoryForm=this.fb.group(
    //   {
    //     client_id:this.h,
    //     quantity:[''],
    //     products_id:this.idproduit ,
    //        prix_totale:this.n,
    //       // prix_totale:this.product.prix,
     
    //   }
    // );
   
  }
  // getpData(){
  //   console.log('liste des produits');
  //   this.dataService.getproData().subscribe(res=>{
  //     console.log(res);
  //     this.producers=res;
  //   })}
    getcateg(){

      this.dataService.getcatega().subscribe(res=>{
      //  console.log(res);
        this.categories=res;
        console.log(this.categories);
      })
   

}
getpDataid(id:any){
  console.log();
  this.dataService.getproDataid(id).subscribe(res=>{
    console.log(res);
    this.product=res;
    
    this.factoryid=this.product.producer_id;
    console.log(this.product.prix);
    this.getinfofacto();
   // return this.product.producer_id;
  //  this.factory.prix_totale=this.product.prix;
  
   
 
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
  getinfofacto(){
   // this.factoryid=this.product.producer_id;
   console.log("lllllllll");
   
    console.log(this.product);
    console.log("lllllllll");
    this.dataService.getinfofacto(this.factoryid).subscribe(res=>{
      //  console.log(res);
        this.factory=res;
     //   console.log(this.producersid);
      })
  }
  insertfacData(){
    
    this.idproduit = this.route.snapshot.params['id'];
    console.log('***************');
    console.log(this.idproduit);
    
    this.getpDataid(this.idproduit);
    // this.factory.prix_totale=this.product.prix;
    console.log('*************');
    // for(this.i=0;this.i<this.factory.quantity;this.i++){
    //     this.milt+=this.producersid.prix;
    // }
  
    
    // console.log(this.milt);
   
   

    this.statu=true;
    this.http.post<any>('http://127.0.0.1:8000/api/addcommande', this.factoryForm.value).subscribe(res=>{
      console.log(res);
      alert('commander');
   //  (err)=> console.log(err);
   this.http.put<any>('http://127.0.0.1:8000/api/product/update/'+this.idproduit, this.statu);
   this.router.navigate(['client/panier']);
  }
    );
  }
  onKey(event:any){
    this.getpDataid(this.route.snapshot.params['id']);
    console.log(this.product.prix);
    this.n=this.product.prix * event.target.value;
    
    console.log(this.n);
     this.factoryForm=this.fb.group(
      {
        client_id:this.h,
        quantity:event.target.value,
        products_id:this.idproduit ,
           prix_totale:this.n,
          // prix_totale:this.product.prix,
     
      }
    );
}
}

