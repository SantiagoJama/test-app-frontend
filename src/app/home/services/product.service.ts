import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductDTO } from '../dtos/product.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private readonly http : HttpClient  ) { }


  public getProduct () : Observable<ProductDTO>{
    return this.http.get<ProductDTO>(`${environment.appTest.url}product`);
  }




  public saveProduct ( productBodyRequest : Product) : Observable<any>{
    return this.http.post<any>(`${environment.appTest.url}createProduct`, productBodyRequest);
  }



  public updateProduct( productBodyRequest : Product ) : Observable<ProductDTO>{
    return this.http.put<ProductDTO>(`${environment.appTest.url}updateProduct/${productBodyRequest.id}`, productBodyRequest);
  }




  public deleteProduct( productId : Product ) : Observable<ProductDTO> {
    return this.http.delete<ProductDTO>(`${environment.appTest.url}deleteProduct/${productId.id}`);
  }
}
