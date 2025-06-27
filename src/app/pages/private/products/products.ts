import { Component } from '@angular/core';
import { Product } from '../../../services/product';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  constructor( private productService: Product ) {}

  // Usamos este ciclo de vida para obtener los datos en momento en el inicializa el compomente   
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: ( data ) => {
        console.log( data );
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }

}
