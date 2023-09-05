import { Component, OnInit } from '@angular/core';
import { User, userDTO } from '../dtos/user.dto';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/global/services/auth.service';


@Component({
  selector: 'app-current-users',
  templateUrl: './current-users.component.html',
  styleUrls: ['./current-users.component.css']
})
export class CurrentUsersComponent implements OnInit {

 public users : User [] = [];
 public isUserComponent : boolean = true;   
  constructor( private readonly userService: UserService,
    private readonly router : Router, private readonly authService : AuthService ){

  }
  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe({
          next : ( response : userDTO )=>{
            if( response.status == 200){
              console.log( response.user )
              this.users = response.user;
              console.log( this.users )
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Problemas con su consulta',
                text: `Hay inconvenientes en el servicio`,
              })
            }
            
          },
          error : ( e )=>{
            console.log( e )
          }
        })
  }

  public showProduct() :void {
    this.router.navigate(["/home"],{})
  }
  public showUser() : void{
    this.router.navigate(["/user"],{})
  }

  public logout() : void {
    this.authService.deleteUserLoggedSession();
    this.router.navigate(["/login"],{})
  }


 
}
