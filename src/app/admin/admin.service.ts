import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
//import { PheDuyetSoDoan } from './phe-duyet-so-doan/phe-duyet-so-doan.component';
const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient, private router: Router) { }

  async approval(SID: string) {
    this.http.put<{message: string}>(BACKEND_URL + '/book/approval/' + SID, {})
      .subscribe(respone => {
        //this.pheDuyetSoDoan.step = 2;
        if(respone.message=="Sent mail successfull!"){};
          //this.pheDuyetSoDoan.step = 3;
      }, error => {
      });
  }
}
