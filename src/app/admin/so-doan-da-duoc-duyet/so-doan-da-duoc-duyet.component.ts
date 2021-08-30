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

  step : number = 1;
  books: Book[] = [];
  getApprovalBooks(): void {
    this.booksService.getApprovalBooks().subscribe(
      Response => {
        this.books = Response;
      });
  }
  getClasses(selectedFaculity: string): void {
    this.classesService.getClasses(selectedFaculity).subscribe(
      classes => {
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
  onAddBook(form: NgForm){
    const formData = form.value;
    const book: Book = {
      SID: formData.studentID,
      Name: formData.name,
      DOB: formData.birthday,
      Gender: formData.gender,
      YB: formData.class,
      Faculity: formData.faculity,
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

}
