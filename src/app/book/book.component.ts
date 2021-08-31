import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BookService } from './book.service';
import { Class } from './class.model';
import { ClassService } from './class.service';
import { Faculity } from './faculity.model';
import { FaculityService } from './faculity.service';
import { Book } from './book.model';
import { Router } from '@angular/router';

const BACKEND_URL = environment.apiUrl + "/book/";

@Component({
  selector: 'app-add-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit, OnDestroy {
  constructor(
    public faculitiesService: FaculityService,
    public classesService: ClassService,
    public booksService: BookService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private http: HttpClient,
    private router: Router
  ) { }

  laDangVien = false;
  laCanBoLop = false;
  laCanBoDoan = false;

  faculities: Faculity[] = [];

  classes: Class[] = [];
  step: number = 1;
  captcha: string = '';
  ngOnInit() {
    this.getFaculities();
    this.step = 1;
  }
  getFaculities(): void {
    this.faculitiesService.getFaculities().subscribe(
      faculities => {
        this.faculities = faculities;
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
    this.addBook(book);
  }

  addBook(book: Book) {
    ($('#ThongBaoQuaTrinhThemSoDoan') as any).modal('show');
    this.recaptchaV3Service.execute('addBook')
      .subscribe((token) => {
        this.captcha = token;
        this.http.post<{ success: string, message: string }>(BACKEND_URL + 'verify', { captcha: this.captcha }).subscribe((respone) => {
          if (respone.success) {
            this.http.post(BACKEND_URL + 'create', book).subscribe((respone) => {
              if (respone)
                this.step = 2;
            });
          }
          else if (respone.message) {
            this.step = -1;
          }
        });
      });
  };

  closeForm() {
    ($('#ThongBaoQuaTrinhThemSoDoan') as any).modal('hide');
    this.step = 1;
    this.router.navigate(['/']);
  }
}
