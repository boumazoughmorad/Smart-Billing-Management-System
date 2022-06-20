import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';

import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AuthStateService } from '../_services/auth-state.service';
@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.css']
})
export class SingninComponent implements OnInit {
  loginForm:FormGroup;
  // errorMessage: string = "";
  errors:any=null;
  constructor( private router : Router,public fb:FormBuilder,public authService:AuthService,public token:TokenStorageService,private authState:AuthStateService) { 
    this.loginForm=this.fb.group({
      email:[],
      password:[],
    });
   
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe((result)=>{
      this.responseHandler(result);
    },(error)=>{this.errors=error.error;},()=>{this.authState.setAuthState(true);
      this.loginForm.reset();
    this.router.navigate(['profile']);
    }
    
    
    );
  }
  responseHandler(data:any){
    this.token.handleData(data.access_token,0);

  }

}
