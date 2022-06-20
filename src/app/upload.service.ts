import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
 providedIn: 'root'
})
export class UploadService {
 
 constructor(
   private httpClient: HttpClient,
 ) { }
 
 public uploadfile(logo_path: File) {
   let formParams = new FormData();
   formParams.append('logo_path', logo_path,logo_path.name)
  //  formParams.set(data);
  // return formParams;
    this.httpClient.post('http://127.0.0.1:8000/api/addproducer', formParams).subscribe(res=>{
     console.log(res);
     
   });
 }
}