import { Component, OnInit } from '@angular/core';
//import { readlink } from 'fs';
import { DataService } from 'src/app/server/data.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';



export class Distrubiteur {
  name:any;
  email:any;
 
  password:any;
  address:any;
  num_tele:any;
  image_path:any;
 
  }
@Component({
  selector: 'app-ajouter-distr',
  templateUrl: './ajouter-distr.component.html',
  styleUrls: ['./ajouter-distr.component.css']
})
export class AjouterDistrComponent implements OnInit {
  distributers:any;
d=new Distrubiteur();
v='';
h:any;
infoClientid:any;
image_redi:any='http://127.0.0.1:8000/storage/';
file!: File;

distForm=new FormGroup({
  name:new FormControl('',[Validators.required] ),
  email:new FormControl('',[Validators.required] ),
      password:new FormControl('',[Validators.required] ),
    //  logo_path:new FormControl('',[Validators.required] ),
      num_tele:new FormControl('',[Validators.required] ),
      address:new FormControl('',[Validators.required] ),
      description:new FormControl('',[Validators.required] ),
});
  constructor(private dataService:DataService,private http:HttpClient,private fb:FormBuilder,public router:Router,public token:TokenStorageService) { 
   
  }

  ngOnInit(): void {
    this.getdistData();
    this.getinfo();
    this.distForm=this.fb.group(
      {
        name:[''],
        email:[''],
        password:[''],
       
        num_tele:[''],
        address:[''],
        description:[''],

      }
    );
  }
  getdistData(){
    console.log('liste des produits');
    this.dataService.getdistData().subscribe(res=>{
      console.log(res);
      this.distributers=res;
    })}
    signout(){
      // this.auth.setAuthState(false);(click)="signout()"
      this.token.removeTokenAdmin();
      this.router.navigate(['login/client']);
    }
  // insertdistrData(){
  //   console.log('fffffffff');
  //    console.log(this.d);
    
  //   this.dataService.insertdistrData(this.d).subscribe(res=>{
  //     console.log(res);
  //     this.getdistData();
    
  //   }
  //     )
  //     // this.Clients=res;
      
 
  //   }
  onFileChange(event:any){
    this.file = event.target.files[0];
  
 
  }
  insertdistrData(){
    const formData=new FormData();
    formData.append('image_path',this.file,this.file.name);
    formData.append('email',this.distForm.get('email')?.value);
    formData.append('password',this.distForm.get('password')?.value);
    formData.append('name',this.distForm.get('name')?.value);
    formData.append('num_tele',this.distForm.get('num_tele')?.value);
    formData.append('address',this.distForm.get('address')?.value);
    
    // formData.append('address_stock',this.distForm.get('address_stock')?.value);
    // alert(formData.get('email'));
    
    this.http.post<any>('http://127.0.0.1:8000/api/distributer', formData).subscribe(res=>{
      console.log(res);
   //  (err)=> console.log(err);
      
  // this.router.navigate(['/admin/page']);
  // RouterLink='/admin/page';
  },()=>{
    alert('Distributeur n\'est pas enregestrer'); 
  }
    );
  }
  getinfo(){
      
    this.h=this.token.getidAdmin();
    this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h).subscribe(res=>{
          console.log(res);
          this.infoClientid=res;
          
          
           
      });

 
  }
    deletdit(id:any){
      console.log(id);
    
      //console.log(this.d);
     
     this.dataService.deletdistData(id).subscribe(res=>{
      //  console.log(res);
      console.log('end');
      this.getdistData();
      })
  }
  updatedest(id:any){
    console.log('update'+id);
    
    this.dataService.updatedistr(id,this.d).subscribe(res=>{
      //  console.log(res);
     
      this.getdistData();
      })
  }
  
  func(id:any){
    console.log('dddddddddd');
    this.v=id;
    console.log(this.v);
  }
   
}
