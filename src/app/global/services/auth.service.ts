import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_LOGGED : string = "USER_NAME";

  constructor() { }


  public setUserLogged( userName : string ): void{
    sessionStorage.setItem(this.USER_LOGGED, userName);
 }
 
 public deleteUserLoggedSession() : void{
  sessionStorage.removeItem(this.USER_LOGGED)
}

  public isLoggedIn(){
    if(sessionStorage.length){
      return true;
     }
     return false;
  }


}
