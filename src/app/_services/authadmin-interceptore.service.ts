import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminInterceptoreService {

  constructor(private tokenService:TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken=this.tokenService.getTokenAdmin();
    req=req.clone({setHeaders:{
     Authorization:"Bearer"+accessToken

    }});
    return next.handle(req);
  }
}
