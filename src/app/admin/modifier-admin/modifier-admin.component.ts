import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {
  adminForm=new FormGroup({
    name:new FormControl('',[Validators.required] ),
    email:new FormControl('',[Validators.required] ),
        password:new FormControl('',[Validators.required] ),
       image_path:new FormControl('',[Validators.required] ),
      });
  h:any;
  infoClientid:any;
  file!:File;
  image_redi:any='http://127.0.0.1:8000/storage/';
    constructor(public token:TokenStorageService,public router:Router,private http:HttpClient) { }
  
    ngOnInit(): void {
      this.getinfo();
    }
    serch(input:any){
     alert(input);
    } 
    getinfo(){
      
      this.h=this.token.getidAdmin();
      this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h).subscribe(res=>{
            console.log(res);
            this.infoClientid=res;
            
            
             
        });
  
   
    }
    onFileChange(event:any){
     
       this.file = event.target.files[0];
    
      
      console.log(event.target.files[0]);
   
    }
    updateadmin(){
      this.h=this.token.getidAdmin();
      console.log(this.adminForm.value);
      const formData=new FormData();
      formData.append('image_path',this.file,this.file.name);
      
      // formData.append('email',this.adminForm.get('email')?.value);
      // formData.append('password',this.adminForm.get('password')?.value);
      formData.append('name',this.adminForm.get('name')?.value);
  
      
      this.http.put<any>('http://127.0.0.1:8000/api/admin/update/'+this.h,formData).subscribe(res=>{
        console.log(res);
        // this.infoClientid=res;
        
  this.router.navigate(['/admin/page']);
         
    });
      // this.dataService.updatefac(this.h,this.info).subscribe(res=>{
      //   //  console.log(res);
       
        
      //   })

    }
    signout(){
      // this.auth.setAuthState(false);(click)="signout()"
      this.token.removeTokenAdmin();
      this.router.navigate(['login/client']);
    }
  }
