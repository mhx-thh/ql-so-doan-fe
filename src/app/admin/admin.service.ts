import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient, private router: Router) { }

  approval(SID: string) {
    this.http.put<{message: string}>(BACKEND_URL + '/book/approval/' + SID, {})
      .subscribe(respone => {
        console.log(respone.message);
      }, error => {
      });
  }
}
