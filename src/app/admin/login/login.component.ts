import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
export class Admin {
  name:any;
  email:any;
 
  password:any;
 
  }
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }
 
  // ngOnInit(): void {
  // }
  errors:any=null;
  c=new Admin;
  admins:any;
  //token:any;
  data={
    email:this.c.email,
    password:this.c.password

  }
  submitted=false;
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(''),
    passwoerd:new FormControl('')
  });
  constructor(private dataService:DataService,private router:Router,public fb:FormBuilder,public authService:AuthService,public token:TokenStorageService) {
    // ,private authState:AuthStateService
   }

  ngOnInit(): void {
   
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      
    });
  }
  









  get f():{
    [key:string]:AbstractControl}{
  return this.loginForm.controls;
  }
  onSubmit(){
    this.submitted=true;
      this.authService.loginadmin(this.loginForm.value).subscribe(result=>{
        console.log('llllllllll');
        this.responseHandler(result);
        
      },(error)=>{this.errors=error.error;
      console.log(this.errors?.password);
      
      },()=>{
        // this.authState.setAuthState(true);
        // console.log('llllllllll');
        this.loginForm.reset();
      this.router.navigate(['admin/page']);
  
      });
      if(this.loginForm.invalid){
        return;
      }
      console.log(JSON.stringify(this.loginForm.value,null,2));
    
    }
    onReset():void{
      this.submitted=false;
      this.loginForm.reset();
    }
      responseHandler(data:any){
        console.log(data);
  
          this.token.handleDataAdmin(data.tokenadmin,data.idAdmin);
  
      
        }

}
