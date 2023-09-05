export interface ProductDTO{
    status : number;
    message ?: string;
    products : Product[]
}



export interface Product {
    id ? : number ;
    productname : string; 
    productdescription : string;
    productprice : number;
}

