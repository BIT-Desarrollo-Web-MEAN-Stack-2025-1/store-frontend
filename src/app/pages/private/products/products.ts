import { Component } from '@angular/core';
import { Product } from '../../../services/product';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [ CurrencyPipe ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: any = [];

  constructor( private productService: Product ) {}

  ngOnInit() {
    // Detecta cuando el componente se a inicializado
    this.loadData();
  }

  loadData() {
    this.productService.getProducts().subscribe({
      next: ( data ) => {
        console.log( data );
        this.products = data;
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }

  onDelete( id: string  ) {
    console.log( id );
    this.productService.deleteProduct( id ).subscribe({
      next: ( data ) => {
        console.log( data );
        this.loadData();
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }
}
