import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Class } from './class.model';

const BACKEND_URL = environment.apiUrl + "/class/";

@Injectable({ providedIn: 'root' })
export class ClassService {
  constructor(private http: HttpClient, private router: Router) { }

  getClasses(faculityName: string): Observable<Class[]> {
    return this.http.get<Class[]>(BACKEND_URL + 'getClass/' + faculityName).pipe();
  }
}
