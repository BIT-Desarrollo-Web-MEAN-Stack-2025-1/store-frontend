import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_URL: string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getCategories() {
    return this.http.get( `${ this.BASE_URL }/categories` );
  }
}

// ng generate service services/category-service
