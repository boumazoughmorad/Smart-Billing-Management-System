// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';

import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AuthStateService } from '../_services/auth-state.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
   dogs=['kkkk','dkdekek','llslksj','pppspp'];
  // username : string = "";
  // password : string = "";
   loginForm=FormGroup;
  // errorMessage: string = "";
  errors:any=null;
  constructor(private dataService:DataService, private router : Router,public fb:FormBuilder,public authService:AuthService,public token:TokenStorageService,private authState:AuthStateService) { 
    // this.loginForm=this.fb.group({
    //   email:[],
    //   password:[],
    // });
   
  }

  ngOnInit(): void {
  }
  // onSubmit(){
  //   this.authService.login(this.loginForm.value).subscribe((result)=>{
  //     this.responseHandler(result);
  //   },(error)=>{this.errors=error.error;},()=>{this.authState.setAuthState(true);
  //     this.loginForm.reset();
  //   this.router.navigate(['profile']);
  //   }
    
    
  //   );
  // }
  // responseHandler(data:any){
  //   this.token.handleData(data.access_token);

  // }
  // onLogin(){

  //   this.errorMessage = "";
  

  //   this.dataService.loguser(this.username,this.password).subscribe(
  //     user => {
        
  //       console.log(user);

  //       if(user){

  //         this.router.navigate(['/foods'])

  //       }

  //     }, 
  //     err => {
  //       this.errorMessage = err.message || "Unauthorized Action" ; 
  //     }
  //  )}

}
