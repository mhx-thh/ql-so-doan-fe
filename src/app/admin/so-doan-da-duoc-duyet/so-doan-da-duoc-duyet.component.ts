import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/book.service';
import { DatePipe } from '@angular/common';
import { AdminService } from '../admin.service';
import { FaculityService } from 'src/app/book/faculity.service';
import { ClassService } from 'src/app/book/class.service';
import { Faculity } from 'src/app/book/faculity.model';
import { Class } from 'src/app/book/class.model';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Component({
  selector: 'so-doan-da-duoc-duyet',
  templateUrl: './so-doan-da-duoc-duyet.component.html',
  styleUrls: ['./so-doan-da-duoc-duyet.component.css']
})
export class SoDoanDaDuocDuyet implements OnInit {
  cityName: any;
  constructor(
    public booksService: BookService,
    public datepipe: DatePipe,
    public adminService: AdminService,
    public faculitiesService: FaculityService,
    public classesService: ClassService,
    public fb: FormBuilder,
    private http: HttpClient,
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
  genders = [{ 'gender': 'Nam' }, { 'gender': 'Nữ' }, { 'gender': 'Khác' }];
  selectedBook: Book;
  changedBook: Book;
  getApprovalBooks(): void {
    this.booksService.getApprovalBooks().subscribe(
      Response => {
        this.books = Response;
      });
  }
  getClasses(selectedFaculity: string) {
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
  editBookForm = this.fb.group({
    sid: ['', [Validators.required]],
    name: ['', [Validators.required]],
    ngayVaoDoan: ['', [Validators.required]],
    birthday: [''],
    gender: this.genders,
    faculty: [''],
    class: this.classes,
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    idcard: ['', [Validators.required]],
    ngayVaoDang: ['', [Validators.required]],
    canBoLop: [''],
    canBoDoan: [''],
    talent: ['']
  })
  // changeCity(e) {
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }
  async onChangeEditBook(book: Book) {
    this.step = 1;
    this.selectedBook = book;
    await this.classesService.getClasses(book.Faculty).subscribe(
      classes => {
        this.classes = classes;
        this.editBookForm.patchValue({
          class: book.Class || this.selectedBook.Class || "Không"
        })
      });

    if(this.changedBook && book.SID==this.changedBook.SID){
      this.editBookForm.patchValue({
        sid: this.changedBook.SID,
        name: this.changedBook.Name,
        faculty: this.changedBook.Faculty,
        gender: this.changedBook.Gender,
        phone: this.changedBook.Phone,
        email: this.changedBook.Email,
        idcard: this.changedBook.IC,
        canBoLop: this.changedBook.ClassOfficePosition,
        canBoDoan: this.changedBook.PositionHSU,
        talent: this.changedBook.Talent
      });
    }
    else
    this.editBookForm.patchValue({
      sid: book.SID,
      name: book.Name,
      faculty: book.Faculty,
      class: book.Class || "Không",
      gender: book.Gender,
      phone: book.Phone,
      email: book.Email,
      idcard: book.IC,
      canBoLop: book.ClassOfficePosition,
      canBoDoan: book.PositionHSU,
      talent: book.Talent
    });
    this.editBookForm.get('birthday').patchValue(this.formatDate(book.DOB));
    if (book.DJCP) {
      this.editBookForm.get('ngayVaoDang').patchValue(this.formatDate(book.DJCP));
    }
    if (book.DJU) {
      this.editBookForm.get('ngayVaoDoan').patchValue(this.formatDate(book.DJU));
    }
  }
  onEditBook() {
    this.step = 2;
    const formData = this.editBookForm.value;
    const book: Book = {
      SID: formData.sid,
      Name: formData.name,
      DOB: formData.birthday,
      Gender: formData.gender,
      Class: formData.class,
      Faculty: formData.faculty,
      Phone: formData.phone,
      Email: formData.email,
      IC: formData.idcard,
      DJU: formData.ngayVaoDoan,
      DJCP: formData.ngayVaoDang,
      PositionHSU: formData.canBoDoan,
      ClassOfficePosition: formData.canBoLop,
      Talent: formData.talent,
      Approval: "Đã duyệt",
    }
    this.changedBook = book;

    this.http.put<{ status: string }>(BACKEND_URL + '/book/update/' + book.SID, book)
      .subscribe(respone => {
        if (respone.status == "success") {
          document.getElementById(book.SID+'_sid').innerHTML = book.SID;
          document.getElementById(book.SID+'_name').innerHTML = book.Name;
          document.getElementById(book.SID+'_birthday').innerHTML = this.formatDate(book.DOB);
          document.getElementById(book.SID+'_gender').innerHTML = book.Gender;
          document.getElementById(book.SID+'_class').innerHTML = book.Class;
          document.getElementById(book.SID+'_faculty').innerHTML = book.Faculty;
          document.getElementById(book.SID+'_phone').innerHTML = book.Phone;
          document.getElementById(book.SID+'_email').innerHTML = book.Email;
          document.getElementById(book.SID+'_talent').innerHTML = book.Talent;
          this.step = 3;
        }
      })
  }
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
