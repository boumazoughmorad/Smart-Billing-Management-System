import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
private userState=new BehaviorSubject<boolean>(this.token.isLoggedIn()!);
userAuthState=this.userState.asObservable();
  constructor(public token:TokenStorageService) { }

  setAuthState(value:boolean){
    this.userState.next(value);
  }





}
