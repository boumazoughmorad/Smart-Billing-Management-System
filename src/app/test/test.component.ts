import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/server/data.service';
//import { Stock } from '../stock';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
export class Stock {
  name:any;
  producer_id:any;
  address:any;
  }
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  stocks:any;
  stock=new Stock;
  registerForm:FormGroup;
  errors:any=null;
  
  constructor(private dataService:DataService,public router:Router,public fb:FormBuilder,public authService:AuthService) { 

    this.registerForm=this.fb.group({
      name:[''],
      email:[''],
      password:[''],
      password_confirmation:[''],
    }); 
   
  }

  ngOnInit(): void {
   // this.getProductData();
  }
  getProductData(){
   console.log('liste des produits');
   this.dataService.getData().subscribe(res=>{
     console.log(res);
     this.stocks=res;
   })
    
  }

  insertData(){
    
    console.log(this.stock);
   
   this.dataService.insertData(this.stock).subscribe(res=>{
     console.log(res);})
     //this.stocks=res;


   }
onSubmit(){
  this.authService.regester(this.registerForm.value).subscribe((result)=>{
    console.log(result);
  },(error)=>{this.errors=error.error;},()=>{this.registerForm.reset();
  this.router.navigate(['login']);
  }
  
  
  );
}




}
// import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from '../app.component';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

// export class TestComponent { }
