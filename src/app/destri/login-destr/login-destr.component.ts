import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login-destr',
  templateUrl: './login-destr.component.html',
  styleUrls: ['./login-destr.component.css']
})
export class LoginDestrComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(''),
    passwoerd:new FormControl('')
  });
  submitted!: boolean;
  errors: any;
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
      this.authService.logindist(this.loginForm.value).subscribe(result=>{
        console.log(result);
        this.responseHandler(result);
        
      },(error)=>{this.errors=error.error;
      console.log(this.errors?.password);
      
      },()=>{
        // this.authState.setAuthState(true);
        // console.log('llllllllll');
        this.loginForm.reset();
      this.router.navigate(['dest/page']);
  
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
        console.log(data.tokenfact);
  
          this.token.handleDatadist(data.tokendist,data.idist);
  
       
        }

}
