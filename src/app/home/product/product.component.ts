import { Component, OnInit } from '@angular/core';
import { Product, ProductDTO } from '../dtos/product.dto';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  public products : Product[] = [];
  public showCreateNewProductModal : boolean = false;
  public showUpdateProductModal : boolean = false;

  constructor( private readonly productService : ProductService){

  }

  ngOnInit(): void {
    this.productService
        .getProduct()
        .subscribe({
          next : ( response : ProductDTO)=>{
            if( response.status == 200){
             this.products = response.products;
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Problemas con su consulta',
                text: `${response.message}`,
              })
            }
          },
          error : ( e ) =>{
            console.log(e)
          }
        })
  }

  

  public createNewProduct( newProduct : NgForm  ){
    console.log( newProduct.value.productName )
    const productBodyRequest : Product ={
      productname : newProduct.value.productName,
      productdescription : newProduct.value.productDescription,
      productprice : newProduct.value.productPrice
    }

    console.log( productBodyRequest )

    this.productService.saveProduct( productBodyRequest )
        .subscribe({
          next : ( response : any  ) =>{
            this.showCreateNewProductModal = false;
            console.log( response );
            if (response['status'] == 0){
              this.updateProductTable();
              Swal.fire({
                icon: 'success',
                title: 'Exitoso',
                text: 'Se guardó el producto',
              })
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Error al procesar',
                text: 'Ocurrió un error en el servicio',
              })
            }
            newProduct.resetForm();
          },
          error : ( e )=>{
            console.log( e );
            newProduct.resetForm();
          } 
        })


  }


  public updateSelectedProduct( product : Product, productFormToUpdate : NgForm){
    productFormToUpdate.controls['productId'].setValue(product.id);
    productFormToUpdate.controls['productName'].setValue(product.productname);
    productFormToUpdate.controls['productDescription'].setValue(product.productdescription);
    productFormToUpdate.controls['productPrice'].setValue(product.productprice);
    this.openModalToUpdateProduct();
  }

  public updateProduct( product : NgForm){

    const bodyResquest : Product = {
      id : product.value.productId,
      productname : product.value.productName,
      productdescription : product.value.productDescription,
      productprice : product.value.productPrice
    }
    this.productService.updateProduct( bodyResquest )
      .subscribe({
        next : ( response : ProductDTO)=>{
          if( response.status == 0){
            this.updateProductTable();
            this.showUpdateProductModal = false;
            Swal.fire({
              icon: 'success',
              title: 'Exitoso',
              text: 'Se actualizó el registro',
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Hubo un inconveniente',
              text: 'Se presentó un inconveniente al actualizar el producto',
            })
          }
        },
        error : ( e )=>{
          console.log( e )
        }
      })
  }

  public deleteProduct( product : Product ){
    this.productService.deleteProduct( product )
        .subscribe({
          next : ( response )=>{
              console.log( response )
              if( response.status == 0){
                this.updateProductTable();

                Swal.fire({
                  icon: 'success',
                  title: 'Exitoso',
                  text: 'Se eliminó el registro',
                })
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Hubo un inconveniente',
                  text: 'Se presentó un inconveniente al eliminar el producto',
                })
              }
          },  
          error : ( e )=>{
            console.log( e )
          }
        })
  }


  public closeCreateNewProductModal( newProduct : NgForm ){
    this.showCreateNewProductModal = false;
  }

  public openModalToCreateANewProduct(){
    this.showCreateNewProductModal = true;
  }

  public openModalToUpdateProduct(){
    this.showUpdateProductModal = true;
  }

  public closeModalToUpdateProduct( newProduct : NgForm){
    this.showUpdateProductModal = false;
  }



  private updateProductTable(){
    this.productService
        .getProduct()
        .subscribe({
          next : ( response : ProductDTO)=>{
            if( response.status == 200){
             this.products = response.products;
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Problemas con su consulta',
                text: `${response.message}`,
              })
            }
          },
          error : ( e ) =>{
            console.log(e)
          }
        })
  }
}
