import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/server/data.service';

import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
export class Client {
  name:any;
  email:any;
 
  password:any;
  address:any;
  //cpassword:any;
  country:any;
  city:any;
  }
@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})

export class RegisterClientComponent implements OnInit {
  stocks:any;
  registerForm:FormGroup; 
  errors:any=null;
  c=new Client;
  constructor(private dataService:DataService,public router:Router,public fb:FormBuilder,public authService:AuthService) { 
    this.registerForm=this.fb.group({
      name:[''],
      email:[''],
      password:[''],
      address:[''],
      city:[''],
      country:[''],
    });
  }
  insertData(){
    console.log('fffffffff');
     console.log(this.c);
    
    this.dataService.insertClientData(this.c).subscribe(res=>{
      console.log(res);})
      // this.Clients=res;
 
 
    }
  ngOnInit(): void {
  
  }
  onSubmit(){
    console.log(this.registerForm.value);
    this.authService.regester(this.registerForm.value).subscribe(result=>{
      console.log(result);
    },(error)=>{this.errors=error.error;},()=>{this.registerForm.reset();
    this.router.navigate(['login/client']);
    }
    
    
    );
  }
 
   

}
