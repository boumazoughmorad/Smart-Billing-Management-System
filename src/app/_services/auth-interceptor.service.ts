import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService:TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken=this.tokenService.getToken();
    req=req.clone({setHeaders:{
     Authorization:"Bearer"+accessToken

    }});
    return next.handle(req);
  }
}
