import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  
  }
@Component({
 
  selector: 'app-page-factory',
  templateUrl: './page-factory.component.html',
  styleUrls: ['./page-factory.component.css']
})
export class PageFactoryComponent implements OnInit {
  categories:any;
  p=new Produit;
  file!: File;

  isSignedIn!:boolean;
  h:any;
  fact:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  factoryForm=new FormGroup({
    name:new FormControl('',[Validators.required] ),
    producer_id:new FormControl('',[Validators.required] ),
    categorie_id:new FormControl('',[Validators.required] ),
    // stock_id:new FormControl('',[Validators.required] ),
    description:new FormControl('',[Validators.required] ),
    quantite:new FormControl('',[Validators.required] ),
    prix:new FormControl('',[Validators.required] ),
       });
  constructor(private dataService:DataService,public fb:FormBuilder,private http:HttpClient,public router:Router,public token:TokenStorageService) { }

  ngOnInit(): void {
    this.getcateg();
    this.h=this.token.getidfact();
    this.factoryForm=this.fb.group(
      {
        name:[''],
        producer_id:this.h, 
        categorie_id:[''],
       // logo_path:[''],
      //  stock_id:[''],
       description:[''],
       quantite:[''],
       prix:[''],
  
      }
    );
    this.getinfo();
   
  }
  getinfo(){

    this.h=this.token.getidfact();
    // this.dataService.getinfoclient(this.h).subscribe(res=>{
    //  //  console.log(res);
    //    this.producersid=res;
    //    console.log(this.producersid);
    //  })
    this.http.get<any>('http://127.0.0.1:8000/api/producer/'+this.h).subscribe(res=>{
      this.fact=res;
  });
 
  }
  signout(){
    // this.auth.setAuthState(false);
    this.token.removeTokenfact();
    this.router.navigate(['login/factory']);
  }
  getcateg(){

this.dataService.getcatega().subscribe(res=>{
//  console.log(res);
  this.categories=res;
  console.log(this.categories);
})
// console.log(this.categories);
  }
  
  // insertfData(){
    
  // //  console.log(this.p);
   
  //  this.dataService.insertproData(this.p).subscribe(res=>{
  //    console.log(res);
  //    this.getcateg();
  //   })
  //    //this.stocks=res;
   

  //  }


  //  insertfacData(){
      
  //   console.log(this.f);
   
  //  this.dataService.insertfactData(this.f).subscribe(res=>{
  //    console.log(res);})
  //    // this.Clients=res;
  //    this.getfactData();

  //  }
  
///******************************************************************* */
onFileChange(event:any){
 
   this.file = event.target.files[0];

  
  console.log(event.target.files[0]);

}
insertfacData(){
  const formData=new FormData();
  formData.append('image_path',this.file,this.file.name);
  
  formData.append('name',this.factoryForm.get('name')?.value);
  formData.append('producer_id',this.factoryForm.get('producer_id')?.value);
  formData.append('categorie_id',this.factoryForm.get('categorie_id')?.value);
  // formData.append('stock_id',this.factoryForm.get('stock_id')?.value);
  formData.append('description',this.factoryForm.get('description')?.value);
  formData.append('quantite',this.factoryForm.get('quantite')?.value);
  
  formData.append('prix',this.factoryForm.get('prix')?.value);
  console.log(formData.get('logo_path'));
  
  this.http.post<any>('http://127.0.0.1:8000/api/product/add', formData).subscribe(res=>{
    console.log(res);
    this.router.navigate(['factory_supp']);
    
}
  );
}
//**************************************************************** */

}
