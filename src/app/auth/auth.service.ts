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
  private gender: string = '';
  private token: string;
  private typeAccount: string;
  private phonenumber: string = '';
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

  getGender(){
    return this.gender;
  }

  getToken() {
    return this.token;
  }

  getPhonenumber() {
    return this.phonenumber;
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

  createUser(email: string, password: string) {
    const AuthData: AuthData = { email: email, password: password };
    this.http.post(BACKEND_URL + "signup", AuthData)
      .subscribe(() => {
        this.router.navigate(['/homepage']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  createCustomer(CEmail: string, CPassword: string, CName: string, CPhoneNumber: string, CGender: string) {
    const AuthCustomerData: AuthCustomerData = { CEmail: CEmail, CPassword: CPassword, CName: CName, CPhoneNumber: CPhoneNumber, CGender: CGender, CAddress: null, SPID: "1" };
    this.http.post(BACKEND_URL + "customerSignup", AuthCustomerData)
      .subscribe(() => {
        this.router.navigate(['/homepage']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  updateCustomer(CEmail: string, CName: string, CPhoneNumber: string, CGender: string) {
    this.http.post<{name: string, phonenumber: string, gender: string}>(BACKEND_URL + "updateCustomer", {email: CEmail, name: CName, phonenumber: CPhoneNumber, gender: CGender})
      .subscribe((respone) => {
        this.username = respone.name;
        this.phonenumber = respone.phonenumber;
        this.gender = respone.gender;
        this.updateAuthData(this.username, this.phonenumber, this.gender);
        alert("Cập nhật thành công! Quý khách vui lòng đăng nhập lại!");
        this.router.navigate(['/userinside']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  createDeliveryCompany(DCEmail: string, DCPassword: string, DCName: string, DCPhoneNumber: string) {
    const AuthDeliveryCompanyData: AuthDeliveryCompanyData = { DCEmail: DCEmail, DCPassword: DCPassword, DCName: DCName, DCPhoneNumber: DCPhoneNumber, DCAddress: null, SPID: "2", DCLicennses: null };
    this.http.post(BACKEND_URL + "deliveryCompanySignup", AuthDeliveryCompanyData)
      .subscribe(() => {
        this.router.navigate(['/homepage']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }



  login(email: string, password: string) {
    const AuthData: AuthData = { email: email, password: password };
    this.http.post<{ token: string, expiresIn: number , username: string, email: string, typeAccount: string, gender: string, phonenumber: string}>(BACKEND_URL + 'login', AuthData)
      .subscribe(respone => {
        const token = respone.token;
        this.token = token;
        if (token) {
          console.log(respone);
          const expiresInDuration = respone.expiresIn;
          this.username = respone.username;
          this.email = respone.email;
          this.typeAccount = respone.typeAccount;
          this.gender = respone.gender;
          this.phonenumber = respone.phonenumber;
          this.setAuthTimer(expiresInDuration);
          this.usernameStatusListener.next(this.username);
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate,this.username, this.email, this.typeAccount, this.gender, this.phonenumber);
          this.router.navigate(['/']);
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
      this.gender = authInformation.gender;
      this.phonenumber = authInformation.phonenumber;
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
    this.gender = '';
    this.typeAccount = '';
    this.phonenumber = '';
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

  private saveAuthData(token: string, expirationDate: Date,username: string, email: string, typeAccount: string, gender: string, phonenumber: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('email', email);
    localStorage.setItem('typeAccount', typeAccount);
    localStorage.setItem('gender', gender);
    localStorage.setItem('phonenumber', phonenumber);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('expiration');
    localStorage.removeItem('email');
    localStorage.removeItem('typeAccount');
    localStorage.removeItem('gender');
    localStorage.removeItem('phonenumber');
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
    localStorage.setItem('gender', gender);
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
