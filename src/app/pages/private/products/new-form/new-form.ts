import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category-service';

@Component({
  selector: 'app-new-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new-form.html',
  styleUrl: './new-form.css'
})
export class ProductNewForm {
  formData!: FormGroup;  
  categories: any = [];

  constructor( private categoryService: CategoryService ) {
    this.formData = new FormGroup({
      name: new FormControl( '', [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 50 ) ] ),
      description: new FormControl( '', [] ),
      price: new FormControl( 0, [ Validators.required, Validators.min( 0 ) ] ),
      stock: new FormControl( 1, [ Validators.required, Validators.min( 1 ), Validators.max( 100 ) ] ),
      urlImage: new FormControl(),
      category: new FormControl(),  // TODO: Traer los datos antes de establecer las reglas
      state: new FormControl( true, [ Validators.required ] )
    });
  }

  onSubmit() {
    console.log(
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    );

    if( this.formData.valid ) {
      console.log( this.formData.value );
    }

    this.formData.reset();  // Limpiamos los campos del formulario
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: ( data ) => {
        console.log( data );
        this.categories = data;
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {
        console.log( 'complete' );
      }
    });
  }
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }
}
