import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Book, BookRes, BookHistory, BookHistoryRes } from './book.model';
import { Observable } from 'rxjs';

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient, private router: Router) { }
  getBook(MSSV: string): Observable<BookRes> {
    return this.http.get<BookRes>(`${BACKEND_URL}/book/${MSSV}`).pipe();
  }
  getHistory(MSSV: string): Observable<BookHistoryRes> {
    return this.http.get<BookHistoryRes>(`${BACKEND_URL}/history/${MSSV}`).pipe();
  }
  sendBienNhan(MSSV: string, email: string) {
    this.http.post(`${BACKEND_URL}/sendMail/${MSSV}`, { email }).subscribe((respone) => {
      if (respone) return;
    });
  }
}
