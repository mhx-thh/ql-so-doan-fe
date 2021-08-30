import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/book.service';
import { DatePipe } from '@angular/common';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Component({
  selector: 'phe-duyet-so-doan',
  templateUrl: './phe-duyet-so-doan.component.html',
  styleUrls: ['./phe-duyet-so-doan.component.css']
})
export class PheDuyetSoDoan implements OnInit {

  constructor(
    private http: HttpClient,
    public booksService: BookService,
    public datepipe: DatePipe,
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getNotApprovalBooks();
  }

  step: number = 1;
  books: Book[] = [];
  SID: string;
  message: string;

  getNotApprovalBooks(): void {
    this.booksService.getNotApprovalBooks().subscribe(
      Response => {
        this.books = Response;
      });
  }

  async approval(SID: string) {
    this.step = 2;
    //await this.adminService.approval(SID);
    //document.getElementById(SID).style.display = "none";
    await this.http.put<{ message: string }>(BACKEND_URL + '/book/approval/' + SID, {})
      .subscribe(respone => {
        if (respone.message == "Sent mail successfull!") {
          this.step = 3;
          document.getElementById(SID).style.display = "none";
        }
      }, error => {
      });
  }

  async deleteBook(SID: string) {
    this.step = 2;
    await this.http.delete<{ message: string }>(BACKEND_URL + '/book/delete/' + SID, {})
      .subscribe(respone => {
        if (respone.message == "Successfull!") {
          this.step = 3;
          document.getElementById(SID).style.display = "none";
        }
      }, error => {
      });
  }

  onBookSelected(SID: string) {
    this.SID = SID;
    this.step = 1;
  }
}
