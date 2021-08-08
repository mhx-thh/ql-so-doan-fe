import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Book } from './book-communist-youth-union.model.component';

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
}
