import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginRequestDTO, LoginResponseDTO } from '../dtos/login.dto';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/global/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor( private readonly loginService : LoginService,
               private readonly router : Router,
              private readonly authService : AuthService
               ){}

  
  /**
   * Este método realiza el login hacía la página principal o home
   * @param loginForm : NgForm -> Contiene la credenciales ingresadas por el usuario
   */
  login( loginForm : NgForm ) : void {
    const loginBodyRequest : LoginRequestDTO = {
       userName : loginForm.value.userName,
       userPassword : loginForm.value.userPassword
    }

    console.log( loginBodyRequest)
    this.loginService.login( loginBodyRequest )
        .subscribe({
          next : ( successfullMsg : LoginResponseDTO) =>{


                console.log( successfullMsg );
                if( successfullMsg.status !=  0 ){
                  console.log( " ERRROR")
                  console.log(successfullMsg)
                  Swal.fire({
                    icon: 'error',
                    title: 'Error en las credenciales',
                    text: `${successfullMsg.message}`,
                  })
                }else{
               
                  this.authService.setUserLogged( loginForm.value.userName );

                 console.log(" INGRESO EXITOSO")
                 this.router.navigate(["/home"],{})
                }
          },
          error : ( e : LoginResponseDTO)=>{
              console.log( "entró por error")
              console.log( e )
          },
          complete: ()=>{
            console.log("Fin de la comunicación con el servicio");
          }
        })

  }
}
