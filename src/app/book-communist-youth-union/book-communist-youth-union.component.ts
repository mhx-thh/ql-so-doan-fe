import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from './book-communist-youth-union.service';
import { Class } from './class.model';
import { ClassService } from './class.service';
import { Faculity } from './faculity.model';
import { FaculityService } from './faculity.service';
import { Book } from './book-communist-youth-union.model.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './book-communist-youth-union.component.html',
})
export class BookCommunistYouthUnionComponent implements OnInit, OnDestroy {
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
    //ngOnInit là khi khởi tạo sẽ get ds khoa lun
    this.getFaculities();  //1
  }
  //2
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
