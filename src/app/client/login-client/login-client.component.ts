import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';


import { AuthService } from 'src/app/_services/auth.service'; 
import { TokenStorageService } from 'src/app/_services/token-storage.service'; 
import { AbstractControl, FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { AuthStateService } from 'src/app/_services/auth-state.service';

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
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {
  errors:any=null;
  c=new Client;
  users:any;
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
  constructor(private dataService:DataService,private router:Router,public fb:FormBuilder,public authService:AuthService,public token:TokenStorageService,private authState:AuthStateService) {
    
   }

  ngOnInit(): void {
    this.getClientData();
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      
    });
  }
  getClientData(){
    console.log('liste des produits');
    
    this.dataService.getcData().subscribe(res=>{
      console.log(res);
      
      this.users=res;
    })
     
   }
  //  log(){
  //        var message;
  //        const  fd=new Client;
  //        fd.append('email',$("#email").val())
  //  }
  //  logout(id:any){
  //   this.dataService.loguser(id,this.c).subscribe(res=>{
  //    var r:any;
  //    r=res;
  //    localStorage.removeItem('user');
  //    toastr.success('Success','Successfully logged');
  //   })
    
    // this.router.navigateByUrl('/');
  // }
 

// login(){
//   console.log('liste des produits');
    
//     this.dataService.login(this.data).subscribe(res=>{
//       console.log(res);
      
//       this.token=res;
//     })
// }
get f():{
  [key:string]:AbstractControl}{
return this.loginForm.controls;
}
onSubmit(){
  this.submitted=true;
    this.authService.login(this.loginForm.value).subscribe(result=>{
      console.log('llllllllll');
      this.responseHandler(result);
      
    },(error)=>{this.errors=error.error;
    console.log(this.errors?.password);
    
    },()=>{this.authState.setAuthState(true);
      // console.log('llllllllll');
      this.loginForm.reset();
    this.router.navigate(['page/client']);

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

        this.token.handleData(data.token,data.idUser);

    
      }
      // 
      
// login(): void {
//   const url = `http://pruebas.test/sanctum/csrf-cookie`;
//   this.http.get<any>(url).subscribe((res) => {
//     console.log(res);

//     // the response is correct but not set the cookies
//     // this.http.post<any>('http://pruebas.test/api/v1/login', { password: 'password', 'email': 'twatsica@example.com' }).subscribe(success => {
//     //   console.log(success);
//     //   this.http.get<any>('http://pruebas.test/api/v1/articles').subscribe(success => console.log(success));
//     // }
//     //   , error => console.log(error))
//   })
// }
  

}
