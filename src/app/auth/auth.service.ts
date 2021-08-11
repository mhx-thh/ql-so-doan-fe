import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { AuthCustomerData } from './auth-customer-data.model';
import { AuthDeliveryCompanyData } from './auth-deliverycompany-data.model';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({ providedIn: "root" })
export class AuthService {
  private username: string = '';
  private email: string = '';
  private token: string;
  private typeAccount: string;
  private authStatusListener = new Subject<boolean>();
  private usernameStatusListener = new Subject<string>();
  private tokenTimer: any;
  private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  getTypeAccount() {
    return this.typeAccount;
  }

  getToken() {
    return this.token;
  }

  getUsernameStatusListener() {
    return this.usernameStatusListener.asObservable();
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  login(email: string, password: string) {
    const AuthData: AuthData = { email: email, password: password };
    this.http.post<{ token: string, expiresIn: number , username: string, email: string, typeAccount: string}>(BACKEND_URL + 'login', AuthData)
      .subscribe(respone => {
        const token = respone.token;
        this.token = token;
        if (token) {
          console.log(respone);
          const expiresInDuration = respone.expiresIn;
          this.username = respone.username;
          this.email = respone.email;
          this.typeAccount = respone.typeAccount;
          this.setAuthTimer(expiresInDuration);
          this.usernameStatusListener.next(this.username);
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate,this.username, this.email, this.typeAccount);
          this.router.navigate(['/admin']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    const username = this.username;
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.username = authInformation.username;
      this.email = authInformation.email;
      this.typeAccount = authInformation.typeAccount;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
      this.usernameStatusListener.next(username);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.username = '';
    this.email = '';
    this.typeAccount = '';
    this.authStatusListener.next(false);
    this.router.navigate(['/homepage']);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date,username: string, email: string, typeAccount: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('email', email);
    localStorage.setItem('typeAccount', typeAccount);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('expiration');
    localStorage.removeItem('email');
    localStorage.removeItem('typeAccount');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const typeAccount = localStorage.getItem('typeAccount');
    const gender = localStorage.getItem('gender');
    const phonenumber = localStorage.getItem('phonenumber');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      username: username,
      email: email,
      typeAccount : typeAccount,
      gender: gender,
      phonenumber: phonenumber
    }
  }

  private updateAuthData(username: string, phonenumber: string, gender: string){
    localStorage.setItem('gender', gender);
    localStorage.setItem('phonenumber', phonenumber);
  }

  checkExistUserAndSendEmail(email: string) {
    this.http.post<{ message: string }>(BACKEND_URL + 'checkExistUser', { email: email })
      .subscribe((respone) => {
        if (!respone.message.localeCompare("Email can use!")) {
          document.getElementById("register__left").style.display = "none";
          document.getElementById("register__confirm").style.display = "flex";
        }
      })
  }
}
