import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from './book';
import { Class } from './class.model';
import { ClassService } from './class.service';
import { Faculity } from './faculity.model';
import { FaculityService } from './faculity.service';
import { Book } from './book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit, OnDestroy {
  constructor(
    public faculitiesService: FaculityService,
    public classesService: ClassService,
    public booksService: BookService,
  ) { }

  laDangVien = false;
  laCanBoLop = false;
  laCanBoDoan = false;

  faculities: Faculity[] = [];

  classes: Class[] = [];

  ngOnInit() {
    this.getFaculities();
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
    this.booksService.addBook(book);
  }
}
