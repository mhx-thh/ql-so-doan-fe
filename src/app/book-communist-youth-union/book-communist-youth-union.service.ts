import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';
import { Book } from './book-communist-youth-union.model.component';

const BACKEND_URL = environment.apiUrl + "/book/";

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient, private router: Router) { }

  addBook(SID: string, Name: string, DOB: Date, YB: string, Faculity: string, Phone: string, IC: string, DJU: Date, DJCP: Date, PositionHSU: string, ClassOfficePosition: string, Talent: string) {
    const BookData: Book = { SID: SID, Name: Name, DOB: DOB, YB: YB, Faculity: Faculity, Phone: Phone, IC: IC, DJU: DJU, DJCP: DJCP, PositionHSU: PositionHSU, ClassOfficePosition: ClassOfficePosition, Talent: Talent, Approval: null };
    this.http.post(BACKEND_URL + 'addBook', BookData).subscribe((respone) => {
      if (respone)
        alert("Bạn đã thêm thành công và đang chờ xét duyệt!");
        this.router.navigate(['/']);
    });
  };
}
