import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Book, BookRes } from './book.model';
import { Observable } from 'rxjs';

const BACKEND_URL = environment.apiUrl + "/book/";

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient, private router: Router) { }
  getBook(MSSV: string): Observable<BookRes> {
    return this.http.get<BookRes>(BACKEND_URL + MSSV).pipe();
  }
  getHistory(MSSV: string): Observable<BookRes> {
    return this.http.get<BookRes>(BACKEND_URL + MSSV).pipe();
  }
}
