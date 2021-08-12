import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { Book } from './book.model';

const BACKEND_URL = environment.apiUrl + "/book/";

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient, private router: Router) { }

  addBook(book: Book) {
    this.http.post(BACKEND_URL + 'create', book).subscribe((respone) => {
      if (respone)
        alert("Bạn đã thêm thành công và đang chờ xét duyệt!");
      this.router.navigate(['/']);
    });
  };

  getNotApprovalBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BACKEND_URL + 'notApproval').pipe();
  }
}
