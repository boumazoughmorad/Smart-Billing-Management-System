import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
private issuer={
  login:'http://127.0.0.1:8000/api/login',
  regester:'http://127.0.0.1:8000/api/signup',
};
  constructor() { }

handleData(token:any,idUser:any){
  localStorage.setItem('token',token);
  localStorage.setItem('idUser',idUser);

}
handleDataAdmin(tokenAdmin:any,idAdmin:any){
  localStorage.setItem('tokenadmin',tokenAdmin);
  localStorage.setItem('idadmin',idAdmin);

}
getTokenAdmin(){
  return localStorage.getItem('tokenadmin');
}
getidAdmin(){
  return localStorage.getItem('idadmin');
}
getToken(){
  return localStorage.getItem('token');
}
getidUser(){
  return localStorage.getItem('idUser');
}
getTokenfact(){
  return localStorage.getItem('tokenfact');
}
getidfact(){
  return localStorage.getItem('idfact');
}
isValidToken(){
  const token=this.getToken();
  if(token){
    const payload=this.payloat(token);
    if(payload){
      return Object.values(this.issuer).indexOf(payload.iss)>-1
      ?true:false;
    }else{
      return false;
    }
  }
}
payloat(token:any){
  const jwtPayloat=token.split('.')[1];
  return JSON.parse(atob(jwtPayloat));
}
isLoggedIn(){
  return this.isValidToken();
}
removeToken(){
  localStorage.removeItem('token');
  localStorage.removeItem('idUser');
}
removeTokenAdmin(){
  localStorage.removeItem('tokenadmin');
  localStorage.removeItem('idadmin');
}
payloatadmin(token:any){
  const jwtPayloat=token.split('.')[1];
  return JSON.parse(atob(jwtPayloat));
}
isValidTokenadmin(){
  const token=this.getTokenAdmin();
  if(token){
    const payload=this.payloatadmin(token);
    if(payload){
      return Object.values(this.issuer).indexOf(payload.iss)>-1
      ?true:false;
    }else{
      return false;
    }
  }
}
isLoggedInAdmin(){
  return this.isValidTokenadmin();
}
handleDatafact(tokenfact:any,idfact:any){
  localStorage.setItem('tokenfact',tokenfact);
  localStorage.setItem('idfact',idfact);

}
removeTokenfact(){
  localStorage.removeItem('tokenfact');
  localStorage.removeItem('idfact');
}
payloatfact(token:any){
  const jwtPayloat=token.split('.')[1];
  return JSON.parse(atob(jwtPayloat));
}
isValidTokenfact(){
  const token=this.getTokenfact();
  if(token){
    const payload=this.payloatfact(token);
    if(payload){
      return Object.values(this.issuer).indexOf(payload.iss)>-1
      ?true:false;
    }else{
      return false;
    }
  }
}
isLoggedInfact(){
  return this.isValidTokenfact();
}
//********************* */



handleDatadist(tokendist:any,idist:any){
  localStorage.setItem('tokendist',tokendist);
  localStorage.setItem('idist',idist);

}
removeTokendist(){
  localStorage.removeItem('tokendist');
  localStorage.removeItem('idist');
}
payloatdist(token:any){
  const jwtPayloat=token.split('.')[1];
  return JSON.parse(atob(jwtPayloat));
}
isValidTokendist(){
  const token=this.getTokendist();
  if(token){
    const payload=this.payloatdist(token);
    if(payload){
      return Object.values(this.issuer).indexOf(payload.iss)>-1
      ?true:false;
    }else{
      return false;
    }
  }
}
isLoggedIndist(){
  return this.isValidTokendist();
}
getTokendist(){
  return localStorage.getItem('tokendist');
}
getidist(){
  return localStorage.getItem('idist');
}
}