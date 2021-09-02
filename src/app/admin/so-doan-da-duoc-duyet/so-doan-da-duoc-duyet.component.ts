import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/book.service';
import { DatePipe } from '@angular/common';
import { AdminService } from '../admin.service';
import { FaculityService } from 'src/app/book/faculity.service';
import { ClassService } from 'src/app/book/class.service';
import { Faculity } from 'src/app/book/faculity.model';
import { Class } from 'src/app/book/class.model';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'so-doan-da-duoc-duyet',
  templateUrl: './so-doan-da-duoc-duyet.component.html',
  styleUrls: ['./so-doan-da-duoc-duyet.component.css']
})
export class SoDoanDaDuocDuyet implements OnInit {
  constructor(
    public booksService: BookService,
    public datepipe: DatePipe,
    public adminService: AdminService,
    public faculitiesService: FaculityService,
    public classesService: ClassService
  ) { }

  laDangVien = false;
  laCanBoLop = false;
  laCanBoDoan = false;

  faculities: Faculity[] = [];

  classes: Class[] = [];

  ngOnInit(): void {
    this.getApprovalBooks();
    this.getFaculities();
  }
  getFaculities(): void {
    this.faculitiesService.getFaculities().subscribe(
      faculities => {
        this.faculities = faculities;
      });
  }
  step: number = 1;
  books: Book[] = [];
  selectedBook: Book;
  getApprovalBooks(): void {
    this.booksService.getApprovalBooks().subscribe(
      Response => {
        this.books = Response;
      });
  }
  async getClasses(selectedFaculity: string) {
    this.classesService.getClasses(selectedFaculity).subscribe(
      classes => {
        if (classes)
          this.step = 2;
        this.classes = classes;
      });
  }
  onfacultySelectChange(facultyName: string) {
    this.getClasses(facultyName);
  };
  ngOnDestroy() {
    this.faculities = [];
    this.classes = [];
  }
  onAddBook(form: NgForm) {
    const formData = form.value;
    const book: Book = {
      SID: formData.studentID,
      Name: formData.name,
      DOB: formData.birthday,
      Gender: formData.gender,
      Class: formData.class,
      Faculty: formData.faculity,
      Phone: formData.phonenumber,
      Email: formData.email,
      IC: formData.idcard,
      DJU: formData.ngayVaoDoan,
      DJCP: formData.ngayVaoDang,
      PositionHSU: formData.chucVuCanBoDoan,
      ClassOfficePosition: formData.chucVuCanBoLop,
      Talent: formData.talent,
      Approval: null,
    }
    //this.booksService.addBook(book);
  }
  onChangeEditBook(book: Book) {
    this.step = 1;
    this.classesService.getClasses(book.Faculty).subscribe(
      classes => {
        this.classes = classes;
      });
    this.selectedBook = book;
    ($('#SuaSoDoan') as any).modal('show');
    console.log(this.selectedBook);
    $("#faculty").val(book.Faculty);
    //console.log(book.Class);
    $("#name").val(book.Name);
    //$("#studentID").val(book.SID);
    let ngayVaoDoan = moment(book.DJU).format('YYYY-MM-DD');
    let ngaySinh = moment(book.DOB).format('YYYY-MM-DD');
    $("#ngayVaoDoan").val(ngayVaoDoan);
    $('#birthday').val(ngaySinh);
    $("#gender").val(book.Gender);
    $("#phonenumber").val(book.Phone);
    $("#idcard").val(book.IC);
    $("#email").val(book.Email);
  }
}
