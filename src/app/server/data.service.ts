import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../test/test.component'; 
import { Client } from '../client/register-client/register-client.component';
import { Distrubiteur } from '../admin/DIST/ajouter-distr.component';
import { Factory } from '../admin/factory/ajouter-factory.component';
import { Produit } from '../factory/page-factory/page-factory.component';
import { HttpHeaders } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient,private tokenstor: TokenStorageService) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/stocks');
  }
  insertData(data:Stock){
    return this.httpClient.post('http://127.0.0.1:8000/api/stock/add',data);
  }
  getcData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/login');
  }
  insertClientData(data:Client){
    return this.httpClient.post('http://127.0.0.1:8000/api/signup',data);
  }
  insertdistrData(data:Distrubiteur){
    return this.httpClient.post('http://127.0.0.1:8000/api/distributer',data);
  }
  deletdistData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/distributer/delete/'+id);
  }
  
  getdistData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/distributers');
  }
  updatedistr(id:any,data:Distrubiteur){
    return this.httpClient.put('http://127.0.0.1:8000/api/distributer/update/'+id,data);
  }
  getfactData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/producers');
  }
  insertfactData(data:Factory){
    return this.httpClient.post('http://127.0.0.1:8000/api/addproducer',data);
  }
  deletfactData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/producer/delete/'+id);
  }
  
  
  updatefac(id:any,data:Factory){
    return this.httpClient.put('http://127.0.0.1:8000/api/producer/update/'+id,data);
  }


  // getcatega(){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/categorie',{headers: new HttpHeaders().set('Authorization', this.tokenstor.getToken()!)});
  // }
  getcatega(){
    return this.httpClient.get('http://127.0.0.1:8000/api/categorie');
  }
  insertproData(data:Produit){
    return this.httpClient.post('http://127.0.0.1:8000/api/product/add',data);
  }
 

  // getproData(){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/products',{headers: new HttpHeaders().set('Authorization', this.tokenstor.getToken()!)});
  // }
  getproData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }
// getinfoclient(id:any){
//   return this.httpClient.get('http://127.0.0.1:8000/api/user/'+id,{headers: new HttpHeaders().set('Authorization', this.tokenstor.getToken()!)});
 
// }
getinfoclient(id:any){
  return this.httpClient.get('http://127.0.0.1:8000/api/user/'+id);
 
}
  deletpData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/product/delete/'+id);
  }
  
  updatpro(id:any,data:Produit){
    return this.httpClient.put('http://127.0.0.1:8000/api/product/update/'+id,data);
  }
  // loguser(data:Client){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/user/login',data);
  // }

  getproDataid(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/product/'+id);
  }
  login(daa:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/user/login',daa);
  }
  getinfofacto(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/producer/'+id);
  }
 
}
