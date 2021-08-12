import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/book.service';
import { DatePipe } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'so-doan-da-duoc-duyet',
  templateUrl: './so-doan-da-duoc-duyet.component.html',
  styleUrls: ['./so-doan-da-duoc-duyet.component.css']
})
export class SoDoanDaDuocDuyet implements OnInit {
  constructor(
    public booksService: BookService,
    public datepipe: DatePipe,
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getApprovalBooks();
  }

  books: Book[] = [];
  getApprovalBooks(): void {
    this.booksService.getApprovalBooks().subscribe(
      Response => {
        this.books = Response;
      });
  }
}
