import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private BASE_URL: string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  registerProduct( newProduct: any ) {
    console.log( 'SERVICIO', newProduct );

    return this.http.post( `${ this.BASE_URL }/products`, newProduct );
  }

  getProducts() {
    return this.http.get( `${ this.BASE_URL }/products` );
  }

  deleteProduct( id: string ) {
    // return this.http.delete( `${ this.BASE_URL }/products/` + id );
    return this.http.delete( `${ this.BASE_URL }/products/${ id }` );
  }
}
