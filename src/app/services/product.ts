import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor( private http: HttpClient ) { }

  registerProduct( newProduct: any ) {
    console.log( 'SERVICIO', newProduct );

    return this.http.post( 'http://localhost:3000/api/products', newProduct );
  }

  getProducts() {
    return this.http.get( 'http://localhost:3000/api/products' );
  }

  deleteProduct( id: string ) {
    // return this.http.delete( 'http://localhost:3000/api/products/' + id );
    return this.http.delete( `http://localhost:3000/api/products/${ id }` );
  }
}
