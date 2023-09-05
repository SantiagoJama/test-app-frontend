import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequestDTO, LoginResponseDTO } from '../dtos/login.dto';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private readonly http : HttpClient ) { }


  public login ( bodyRequest : LoginRequestDTO ) : Observable<LoginResponseDTO>{
    return this.http.post<LoginResponseDTO>(`${environment.appTest.url}login`,bodyRequest);
  }

}
