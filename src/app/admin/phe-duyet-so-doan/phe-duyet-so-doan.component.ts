import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/book.service';
import { DatePipe } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'phe-duyet-so-doan',
  templateUrl: './phe-duyet-so-doan.component.html',
  styleUrls: ['./phe-duyet-so-doan.component.css']
})
export class PheDuyetSoDoan implements OnInit {

  constructor(
    public booksService: BookService,
    public datepipe: DatePipe,
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getNotApprovalBooks();
  }


  books: Book[] = [];
  getNotApprovalBooks(): void {
    this.booksService.getNotApprovalBooks().subscribe(
      Response => {
        this.books = Response;
      });
  }
  approval(MSSV: string){
    this.adminService.approval(MSSV);
    document.getElementById(MSSV).style.display = "none";
  }
}
