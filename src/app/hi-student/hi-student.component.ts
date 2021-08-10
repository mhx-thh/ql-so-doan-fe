import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book, BookHistory } from './book.model';

@Component({
  selector: 'hi-student',
  templateUrl: './hi-student.component.html',
  styleUrls: ['./hi-student.component.css']
})

export class HiStudentComponent implements OnInit{
  constructor(
    public bookService: BookService,
  ) { }

  book: Book;
  histories: [BookHistory];

  onSearchMSSV(MSSV: string) {
    this.getBook(MSSV);
    this.getHistory(MSSV);
  };

  onXuatBienNhan(email: string) {
    if (!this.book.SID) return;
    console.log(email);
    // this.bookService.sendBienNhan(this.book.SID, email);
  }
  
  getBook(MSSV: string): void {
    this.bookService.getBook(MSSV).subscribe(
      res => {
        this.book = res.data;
        console.log(res);
      });
  }
  getHistory(MSSV: string): void {
    this.bookService.getHistory(MSSV).subscribe(
      res => {
        this.histories = res.data;
        console.log(res);
      });
  }
  ngOnInit() {
  }
}
