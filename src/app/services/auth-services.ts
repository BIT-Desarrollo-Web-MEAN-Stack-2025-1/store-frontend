import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  private BASE_URL: string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  loginUser ( credentials: any ) {    // credentials: {username: 'jcarlosj.dev@gmail.com', password: 'wqeqweqw'}
    return this.http.post( `${ this.BASE_URL }/auth/login`, credentials );
  }

  saveLocalStorage( key: string, value: any ) {
    localStorage.setItem( key, value );
  }

  // Eliminar cualquier key del LocalStorage
  deleteLocalStorage( key: string ) {
    localStorage.removeItem( key );
  }

  // Verificar el usuario autenticado
  verifyAuthenticateUser() {
    return this.http.get( `${ this.BASE_URL }/auth/re-new-token`, { headers: this.getHeaders() } )
  }


  getHeaders() {
    const token = localStorage.getItem( 'token' ) ?? '';    // Obtiene el token del localStorage
    return new HttpHeaders().set( 'X-Token', token );       // Envuelve el token en una Header tipo Http
  }
}
