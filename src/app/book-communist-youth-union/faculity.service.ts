import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Faculity } from './faculity.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const BACKEND_URL = environment.apiUrl + "/faculty/";

@Injectable({ providedIn: 'root' })
export class FaculityService {
  constructor(private http: HttpClient, private router: Router) { }
  getFaculities(): Observable<Faculity[]> {
    return this.http.get<Faculity[]>(BACKEND_URL).pipe();
  }
}
