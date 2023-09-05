import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDTO } from '../dtos/user.dto';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http : HttpClient) { }


  public getUsers() : Observable<userDTO>{
      return this.http.get<userDTO>(`${environment.appTest.url}user`);
  }
}
