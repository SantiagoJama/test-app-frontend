import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/global/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @Input()
  public isProductComponent! : boolean;



  /*constructor( private readonly router : Router, private readonly sessionService : SessionServiceService){
    
  }*/

  constructor( private readonly router : Router, private readonly authService : AuthService){}
    
  

  public logout() : void {
    this.authService.deleteUserLoggedSession();
    this.router.navigate(['/login']);
  }


  public showProduct(){
    this.router.navigate(['/home']);
  }

  public showUser(){
    this.router.navigate(['/user']);
  }
}
