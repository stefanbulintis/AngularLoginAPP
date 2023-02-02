import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService{
  verifyToken: string;
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    this.verifyToken = JSON.parse(localStorage.getItem('token'));
    return this.verifyToken;
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    if(confirm("Are you sure you want to log out?")) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }

  login({ email, password }: any)
  {
    if (email === 'admin@admin.com' && password === 'admin123') {
      this.setToken('admin');
      this.router.navigate(['/admin/admin-dashboard']);
    }
    else{
      this.setToken('user');
      localStorage.setItem('user', JSON.stringify({email, password}))
      this.router.navigate(['/user']);
    }
  }
  VerifyToken(){
    console.log(this.verifyToken);
  }
}
