import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-piemant',
  templateUrl: './piemant.component.html',
  styleUrls: ['./piemant.component.css']
})
export class PiemantComponent implements OnInit {
  isSignedIn!:boolean;
  producers:any;
  producersid:any
  h:any;
  datep!: DatePipe;
  commande:any;
  dist:any;
  additon=0;
  categories:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  factoryForm=new FormGroup({
    distrubiteur_id:new FormControl('',[Validators.required] ),
    panier_id:new FormControl('',[Validators.required] ),
    prix_totale_orders:new FormControl('',[Validators.required] ),
      //  logo_path:new FormControl('',[Validators.required] ),
       
  });
  constructor(private dataService:DataService,public token:TokenStorageService,public router:Router,private http:HttpClient,public fb:FormBuilder) { }
  // ,private auth:AuthStateService,
  ngOnInit(): void {
    this.getpData();
    this.getcateg();
    this.getinfo();
    // this.auth.userAuthState.subscribe((val)=>{this.isSignedIn=val;});
    this.getdist();
    this.getinfoCommend();
    this.factoryForm=this.fb.group(
      {
        distrubiteur_id:[''],
        panier_id:[''],
        prix_totale_orders:[''],
        statu:'-1',
        

      });
  }
 
signout(){
  // this.auth.setAuthState(false);
  this.token.removeToken();
  this.router.navigate(['login/client']);
}
getinfoCommend(){
  this.http.get<any>('http://127.0.0.1:8000/api/commande').subscribe(res=>{
    // alert(res);
    
    
    this.commande=res;
    console.log(this.commande);
    this.add();
  });
   
}
 
add(){
  this.h=this.token.getidUser();
for(let c of this.commande)
{    console.log('****************');
    
console.log(c.prix_totale);
  if(c.client_id==this.h){
    this.additon+=c.prix_totale;

    
  }
}
  
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
 getdist(){

  // this.dataService.getcatega().subscribe(res=>{
  //  console.log(res);distributers
  this.http.get<any>('http://127.0.0.1:8000/api/distributers').subscribe(res=>{
  
    this.dist=res;
    console.log(this.dist);
  })
}
insertfacData(){
  const formData=new FormData();
  
  formData.append('distrubiteur_id',this.factoryForm.get('distrubiteur_id')?.value);
  formData.append('panier_id',this.factoryForm.get('panier_id')?.value);
  formData.append('prix_totale_orders',this.factoryForm.get('prix_totale_orders')?.value);
  formData.append('statu',this.factoryForm.get('statu')?.value);
  // alert(formData.get('email'));
  
  this.http.post<any>('http://127.0.0.1:8000/api/addcommandes', formData).subscribe(res=>{
    console.log(res);
 //  (err)=> console.log(err);
    
}
  );
}
inert(){
  for(let comm of this.commande){
    const formData=new FormData();
    //  var date=new Date();
     
    //  var v=this.datep.transform(date,'yyyy-MM-dd');
      // formData.append('date_orders',v);
    formData.append('distrubiteur_id',this.factoryForm.get('distrubiteur_id')?.value);
  formData.append('panier_id',comm.id);
  formData.append('prix_totale_orders',comm.prix_totale);
  formData.append('statu',this.factoryForm.get('statu')?.value);
  this.http.post<any>('http://127.0.0.1:8000/api/addcommandes', formData).subscribe(res=>{
    console.log(res);
 //  (err)=> console.log(err);commande/delete/
 this.http.delete<any>('http://127.0.0.1:8000/api/commande/delete/'+comm.id).subscribe(res=>{
  console.log('deleted');


  
}
);

 
this.router.navigate(['conn/client']);   
}
  );
  }
}

}
