import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { BookService } from './book-communist-youth-union.service';
import { Class } from './class.model';
import { ClassService } from './class.service';
import { Faculity } from './faculity.model';
import { FaculityService } from './faculity.service';

const BACKEND_URL = environment.apiUrl + "/faculity/";

@Component({
  selector: 'app-add-book',
  templateUrl: './book-communist-youth-union.component.html',
  styleUrls: ['./book-communist-youth-union.component.css']
})
export class BookCommunistYouthUnionComponent implements OnInit, OnDestroy {
  constructor(
    public faculitiesService: FaculityService,
    public classesService: ClassService,
    public booksService: BookService,
  ) { }

  gender = '';

  laDangVien = false;
  laCanBoLop = false;
  laCanBoDoan = false;

  faculities: Faculity[] = [];

  classes: Class[] = [];

  selectedFaculity = "Khoa";
  selectedClass = "Lớp";

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

  onSelectedClass(selectedClass: Class) {
    this.selectedClass = selectedClass.id;
    const class_menu = document.getElementById('class-menu');
    document.getElementById('class_value__text').innerText = selectedClass.id;
    class_menu.style.display = 'none';
  }

  onSelectedFaculity(faculity: Faculity) {
    this.selectedFaculity = faculity.name;
    this.classes = [];
    this.getClasses(this.selectedFaculity);
    const faculity_menu = document.getElementById('faculity-menu');
    document.getElementById('faculity_value__text').innerText = faculity.name;
    document.getElementById('class_value__text').innerText = "Lớp";
    this.selectedClass = "Lớp";
    faculity_menu.style.display = 'none';
  }

  ngOnDestroy() {
    this.faculities = [];
    this.classes = [];
    this.selectedClass = "";
    this.selectedFaculity = "";
  }

  onGender() {
    const gender_menu = document.getElementById('gender-menu');
    if (gender_menu.style.display == 'block') { gender_menu.style.display = 'none'; gender_menu.style.zIndex = '0'; }
    else { gender_menu.style.display = 'block'; gender_menu.style.zIndex = '3'; }
  }

  onItem1() {
    const gender_menu = document.getElementById('gender-menu');
    document.getElementById('value__text').innerText = 'Nam';
    gender_menu.style.display = 'none';
    this.gender = 'Nam';
  }

  onItem2() {
    const gender_menu = document.getElementById('gender-menu');
    document.getElementById('value__text').innerText = 'Nữ';
    gender_menu.style.display = 'none';
    this.gender = 'Nữ';
  }

  onItem3() {
    const gender_menu = document.getElementById('gender-menu');
    document.getElementById('value__text').innerText = 'Khác';
    gender_menu.style.display = 'none';
    this.gender = 'Khác';
  }

  onFaculity() {
    const faculity_menu = document.getElementById('faculity-menu');
    if (faculity_menu.style.display == 'block') { faculity_menu.style.display = 'none'; faculity_menu.style.zIndex = '0'; }
    else { faculity_menu.style.display = 'block'; faculity_menu.style.zIndex = '2'; }
  }

  onClass() {
    const class_menu = document.getElementById('class-menu');
    if (class_menu.style.display == 'block') { class_menu.style.display = 'none'; class_menu.style.zIndex = '0'; }
    else { class_menu.style.display = 'block'; class_menu.style.zIndex = '1'; }
  }

  onAddBook(form: NgForm){
    this.booksService.addBook(form.value.studentID, form.value.name, form.value.birthday, this.selectedClass, this.selectedFaculity, form.value.phonenumber, form.value.idcard, form.value.ngayVaoDoan, form.value.ngayVaoDang, form.value.chucVuCanBoDoan, form.value.chucVuCanBoLop, form.value.talent);
  }

}
