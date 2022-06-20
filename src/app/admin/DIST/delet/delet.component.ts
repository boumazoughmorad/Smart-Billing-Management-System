import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router ,RouterLink } from '@angular/router';

import { DataService } from 'src/app/server/data.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Distrubiteur } from '../ajouter-distr.component';
@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.css']
})
export class DeletComponent implements OnInit {
  h:any;
  infoClientid:any;
  image_redi:any='http://127.0.0.1:8000/storage/';
 
  categories:any

    constructor(private dataService:DataService,private http:HttpClient,private fb:FormBuilder,public router:Router,public token:TokenStorageService) { 
     
    }
  
    ngOnInit(): void {
     this.getcateg();
      this.getinfo();
    
    }
 
      signout(){
        // this.auth.setAuthState(false);(click)="signout()"
        this.token.removeTokenAdmin();
        this.router.navigate(['login/client']);
      }

  
    getinfo(){
        
      this.h=this.token.getidAdmin();
      this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h).subscribe(res=>{
            console.log(res);
            this.infoClientid=res;
            
            
             
        });
  
   
    }
     
    
    
   
    getcateg(){

      this.dataService.getcatega().subscribe(res=>{
      console.log(res);
      
        this.categories=res;
    
      })
    
   
        }
     
  }