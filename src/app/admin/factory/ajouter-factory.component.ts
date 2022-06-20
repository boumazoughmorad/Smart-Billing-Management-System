import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/server/data.service';
import { UploadService } from 'src/app/upload.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
declare const $:any;
export class Factory{
  
  name:any;
  email:any;
 
  password:any;
  num_tele:any;
  num_accont_banque:any;
  logo_path:any;
  }
@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-factory.component.html',
  styleUrls: ['./ajouter-factory.component.css']
})
export class AjouterFactoryComponent implements OnInit {
  producers:any;
f=new Factory;
image_redi:any='http://127.0.0.1:8000/storage/';
v='';
  file!: File;
  h:any;
  infoClientid:any;
factoryForm=new FormGroup({
  name:new FormControl('',[Validators.required] ),
  email:new FormControl('',[Validators.required] ),
      password:new FormControl('',[Validators.required] ),
    //  logo_path:new FormControl('',[Validators.required] ),
      num_tele:new FormControl('',[Validators.required] ),
      num_accont_banque:new FormControl('',[Validators.required] ),
      address_stock:new FormControl('',[Validators.required] ),
      description:new FormControl('',[Validators.required] ),
});
// factoryForm=new FormGroup ;

  constructor(private dataService:DataService,public fb:FormBuilder,private http:HttpClient,private uploadService: UploadService,public token:TokenStorageService,private router:Router) { 
     
    // this.factoryForm=this.fb.group({
    //   name:[''],
    //   email:[''],
    //   password:[''],
    //   logo_path:[''],
    //   num_tele:[''],
    //   num_accont_banque:[''],
    // });
  }
  getinfo(){
      
    this.h=this.token.getidAdmin();
    this.http.get<any>('http://127.0.0.1:8000/api/admin/'+this.h).subscribe(res=>{
          console.log(res);
          this.infoClientid=res;
          
          
           
      });

 
  }
  
  
  ngOnInit(): void {
    this.getfactData();
    this.getinfo();
    this.factoryForm=this.fb.group(
      {
        name:[''],
        email:[''],
        password:[''],
        address_stock:[''],
        num_tele:[''],
        num_accont_banque:[''],
       
        description:[''],

      }
    );
  }
  signout(){
    // this.auth.setAuthState(false);(click)="signout()"
    this.token.removeTokenAdmin();
    this.router.navigate(['login/client']);
  }
  getfactData(){
    console.log('liste des produits');
    this.dataService.getfactData().subscribe(res=>{
      console.log(res);
      this.producers=res;
      
     
    })}
  // get fbbb(){
  //     return this.factoryForm.controls;
  //   }
    onFileChange(event:any){
      // if(event.traget.files.length>0){
      //   const file = event.traget.files[0];
      //   this.factoryForm.patchValue({
      //     fileSource:file
      //   });
      // }
       this.file = event.target.files[0];
     //  this.uploadService.uploadfile(this.file);

      
      console.log(event.target.files[0]);
   
    }
    insertfacData(){
      const formData=new FormData();
      formData.append('logo_path',this.file,this.file.name);
      formData.append('email',this.factoryForm.get('email')?.value);
      formData.append('password',this.factoryForm.get('password')?.value);
      formData.append('name',this.factoryForm.get('name')?.value);
      formData.append('num_tele',this.factoryForm.get('num_tele')?.value);
      formData.append('num_accont_banque',this.factoryForm.get('num_accont_banque')?.value);
      formData.append('description',this.factoryForm.get('description')?.value);
   
      formData.append('address_stock',this.factoryForm.get('address_stock')?.value);
      // alert(formData.get('email'));
      
      this.http.post<any>('http://127.0.0.1:8000/api/addproducer', formData).subscribe(res=>{
        console.log(res);
     //  (err)=> console.log(err);
        
    }
      );
    }
  //   insertfacData(){
  //     // if (file) {
 
 
        
  //     //  this.uploadService.uploadfile(this.file);
  // //       let formParams = new FormData();
  // //  formParams.append('logo_path', logo_path)
        
  //     }
      //   .subscribe(resp => {
      //     alert("Uploaded")
      //   })
      // } else {
      //   alert("Please select a file first")
      // }
    
     
      // // const formData=new FormData();
      //     console.log(this.factoryForm.value);
      //     console.log('******************');
          
          
      // // formData.append('logo_path',this.factoryForm.get('fileSource')?.value);
      // this.dataService.insertfactData(this.factoryForm.value).subscribe(res=>{
      //   console.log(res);})
      // //  this.Clients=res;
      //   this.getfactData();
   
     // }
      // public uploadfile(logo_path: File) {
      //   let formParams = new FormData();
      //   formParams.append('logo_path', logo_path)
      //  //  formParams.set(data);
      // //  return formParams;
      //   return this.http.post('http://127.0.0.1:8000/api/addproducer', formParams)
      // }
     

      deletfac(id:any){
        console.log(id);
      
        //console.log(this.d);
       
       this.dataService.deletfactData(id).subscribe(res=>{
        //  console.log(res);
        console.log('end');
        this.getfactData();
        })}
        updatefac(id:any){
          console.log('update'+id);
          
          this.dataService.updatefac(id,this.f).subscribe(res=>{
            //  console.log(res);
           
            this.getfactData();
            })
        }
        func(id:any){
          console.log('dddddddddd');
          this.v=id;
          console.log(this.v);
        }
    
}
