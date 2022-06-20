import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
class course{
 id!:number;
 report!:string;  
 isselected!:boolean; 
}
@Component({
  selector: 'app-conntact',
  templateUrl: './conntact.component.html',
  styleUrls: ['./conntact.component.css']
})
export class ConntactComponent implements OnInit {
  
  categories:any;
  producersid:any;
  h:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  commande:any;
  commandes:any;
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
 additon=0;
  prix_totale=0;
  producers:any;
 prix_totalea:any;
 distributers:any;
 factory:any;
 report!:string;
 _course!:course[];
 form=new FormGroup({
  report:new FormControl('',[Validators.required] ),
 });

  constructor(private dataService:DataService,private http:HttpClient,private token:TokenStorageService,private router:Router,private fb:FormBuilder) {
  

   }
   onchanget(e:any){
    const checkArray:FormArray=this.form.get('checkArray') as FormArray;
    console.log(checkArray);
    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value));
      console.log(e.target.value);
      this.report=e.target.value;
    
      
    }
    
   }
   sub(){
    //  console.log( this.form.value);
    // console.log(this.form.get('report')?.value);
    const formData=new FormData();
    formData.append('report',this.form.get('report')?.value);
    console.log(formData);
    
  
   }
   getcoursure(){
     this._course=[
       {id:1,report:'n\'est pas la meme produit commander',isselected:false},
       {id:2,report:'je n\'est pas demandé au produit quand ce factory',isselected:false},
       {id:3,report:'je n\'est pas demandé à ce distributeur livraison',isselected:false},
     ]
   }
  ngOnInit(): void {
    this.getcoursure();
    this.getpData();
    this.getcateg();
    this.getinfoCommend();
    this.getinfo();
     this.getinfoCommends();
    this.getdistData();
    this.getfactData();
    this.form=this.fb.group(
      {
        report:[''],
        

      }
    );
    
  }
  onchange(){
    console.log(this._course);

    // this.report=;
    
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
getinfoCommends(){
  this.http.get<any>('http://127.0.0.1:8000/api/commandes').subscribe(res=>{
    // alert(res);
    
    console.log('commandes');
    
    this.commandes=res;
    console.log(this.commandes);
    
  });
   
}
valide(id:any){
    
  // this.h=this.pro.find(id);

// this.updatecommandess(id);

}
updatecommandess(id:any){
  console.log(this.form.get('report')?.value);
  // console.log(this.report);
  
  // this.http.put<any>('http://127.0.0.1:8000/api/update/commandess/'+id,this.report).subscribe(res=>{
    // alert(res);
  //   console.log('################');
    
  //   console.log(this.report);
    
  //   console.log('commandes');
    
  //  this.getinfoCommends();
  //  this.router.navigate(['conn/client']);
  
    
  // });
   
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
getinfo(){

  this.h=this.token.getidUser();
  this.dataService.getinfoclient(this.h).subscribe(res=>{
   //  console.log(res);
     this.producersid=res;
     console.log(this.producersid);
   })

}
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
  this.h=this.token.getidUser();
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

}