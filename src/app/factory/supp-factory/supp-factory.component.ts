import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  selector: 'app-supp-factory',
  templateUrl: './supp-factory.component.html',
  styleUrls: ['./supp-factory.component.css']
})
export class SuppFactoryComponent implements OnInit {
  produit:any;
  p=new Produit;
  image_redi:any='http://127.0.0.1:8000/storage/';
  v='';
  fact:any;
  constructor(private dataService:DataService,public fb:FormBuilder,private http:HttpClient,public router:Router,private token:TokenStorageService) { }
  file!: File;
  h:any;

  factoryForm=new FormGroup({
    name:new FormControl('',[Validators.required] ),
    producer_id:new FormControl('',[Validators.required] ),
    categorie_id:new FormControl('',[Validators.required] ),
    stock_id:new FormControl('',[Validators.required] ),
    description:new FormControl('',[Validators.required] ),
    quantite:new FormControl('',[Validators.required] ),
    prix:new FormControl('',[Validators.required] ),
       });
  ngOnInit(): void { 
    this.getproData();
    this.factoryForm=this.fb.group(
      {
        name:[''],
        producer_id:[''],
        categorie_id:[''],
       image_path:[''],
       stock_id:[''],
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
  });}
  onFileChange(event:any){
 
    this.file = event.target.files[0];
 
   
   console.log(event.target.files[0]);
 
 }
  getproData(){
    console.log('liste des produits');
    this.dataService.getproData().subscribe(res=>{
      console.log(res);
      this.produit=res;
    })}
  deletp(id:any){
    console.log(id);
   
    //console.log(this.d);
   
   this.dataService.deletpData(id).subscribe(res=>{
    //  console.log(res);
    console.log('end');
    this.getproData();
    RouterLink:'factory_page';
    })}

    
    updatpro(id:any){
      // console.log('update'+id);
    
      // this.dataService.updatpro(id,this.p).subscribe(res=>{
      //   //  console.log(res);
       
      //   this.getproData();
      //   })
      const formData=new FormData();
      if(this.file)
      formData.append('image_path',this.file,this.file.name);
      
      // formData.append('name',this.factoryForm.get('name')?.value);
      // formData.append('producer_id',this.factoryForm.get('producer_id')?.value);
      // formData.append('categorie_id',this.factoryForm.get('categorie_id')?.value);
      // formData.append('stock_id',this.factoryForm.get('stock_id')?.value);
      // formData.append('description',this.factoryForm.get('description')?.value);
      // formData.append('quantite',this.factoryForm.get('quantite')?.value);
      
      // formData.append('prix',this.factoryForm.get('prix')?.value);
      // console.log(this.factoryForm.get('name')?.value);
      
      this.http.put<any>('http://127.0.0.1:8000/api/product/update/'+id, this.factoryForm.value).subscribe(res=>{
        console.log(res);
        this.router.navigate(['factory_supp']);
    });}
    func(id:any){
      console.log('dddddddddd');
      this.v=id;
      console.log(this.v);
    }
     f(id:any){
       if(id==this.h){
          return true;
       }else 
       return false;
     }
     signout(){
      // this.auth.setAuthState(false);
      this.token.removeTokenfact();
      this.router.navigate(['login/factory']);
    }
}
