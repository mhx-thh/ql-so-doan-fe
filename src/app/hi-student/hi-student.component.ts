import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';

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
  onSearchMSSV(MSSV: string) {
    this.getBook(MSSV);
  };
  getBook(MSSV: string): void {
    this.bookService.getBook(MSSV).subscribe(
      res => {
        this.book = res.data;
        console.log(res);
      });
  }
  ngOnInit() {
  }
}
