import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminStateService {

  private adminState=new BehaviorSubject<boolean>(this.token.isLoggedInAdmin()!);
  adminAuthState=this.adminState.asObservable();
    constructor(public token:TokenStorageService) { }
  
    setAuthState(value:boolean){
      this.adminState.next(value);
    }
}
