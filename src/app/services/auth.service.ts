import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticated = false;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'tasnim@web.de' && password === 'Aba14mah?') {
      this.isAuthenticated = true;
      return of(true);
    } else {
      return throwError('Invalid email or password');
    }
  }

  logout() {
    this.isAuthenticated = false;
    location.href = "/logout";
  }

  isLoggedIn(): boolean {
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }
}
