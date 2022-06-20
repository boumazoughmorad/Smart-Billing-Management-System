import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-page-dest',
  templateUrl: './page-dest.component.html',
  styleUrls: ['./page-dest.component.css']
})
export class PageDestComponent implements OnInit {
h:any;
  infoClientid:any;
  commande:any;
  commandes:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
  factory:any;
  distributers:any;
  producers:any;
  additon=0;
  statu:any;
  client:any;
  form=new FormGroup({
    transport:new FormControl('',[Validators.required] ),
   });
  constructor(private dataService:DataService,private http:HttpClient,private fb:FormBuilder,public router:Router,public token:TokenStorageService) { 
   
  }

  ngOnInit(): void {
    this.getinfo();
    this.getinfoCommend();
    this.getinfoCommends();
    this.getdistData();
    this.getfactData();
    this.getpData();

    this.getinfoclient();
  }
  signout(){
    // this.auth.setAuthState(false);(click)="signout()"
    this.token.removeTokendist();
    this.router.navigate(['login/dist']);
  }
  getinfoCommend(){
    this.http.get<any>('http://127.0.0.1:8000/api/allcommande').subscribe(res=>{
      // alert(res);
      
      
      this.commande=res;
      console.log(this.commande);
      this.add();
    });
     
  }
  updatecommandess(id:any){
    console.log(this.form.get('transport')?.value);
  alert(this.form.get('transport')?.value);
     
  }
  sub(){
  
    const formData=new FormData();
    formData.append('transport',this.form.get('transport')?.value);
    console.log(formData);
    
    alert(this.form.get('transport')?.value);
    this.router.navigate(['dest/page']);
   }
  getinfoclient(){
    this.http.get<any>('http://127.0.0.1:8000/api/users').subscribe(res=>{
      // alert(res);
      
      
      this.client=res;
      console.log(this.client);
      // this.add();
    });
     
  }
  Dilivry(id:any){
    this.statu=1;
    this.http.put<any>('http://127.0.0.1:8000/api/delivry/'+id,this.statu).subscribe(res=>{
      
  //  this.router.navigate(['dest/page']);
  });
  }
  shipping(id:any){
    this.statu=0;
    this.http.put<any>('http://127.0.0.1:8000/api/shipping/'+id,this.statu).subscribe(res=>{
      
   
  });
  this.router.navigate(['dest/page']);
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
  getinfoCommends(){
    this.http.get<any>('http://127.0.0.1:8000/api/commandes').subscribe(res=>{
      // alert(res);
      
      console.log('commandes');
      
      this.commandes=res;
      console.log(this.commandes);
      
    });
     
  }
  getpData(){
    console.log('liste des produits');
    this.dataService.getproData().subscribe(res=>{
      console.log(res);
      this.producers=res;
    })}
  getinfo(){
      
    this.h=this.token.getidist();
    
    this.http.get<any>('http://127.0.0.1:8000/api/distributer/'+this.h).subscribe(res=>{
          console.log(res);
          this.infoClientid=res;
          
          
           
      });

 
  }
}
