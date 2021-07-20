import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './book-communist-youth-union.component.html',
  styleUrls: ['./book-communist-youth-union.component.css']
})

export class BookCommunistYouthUnionComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }

  onGender() {
    const gender_menu = document.getElementById('account__gender-menu');
    if (gender_menu.style.display == 'block')
    { gender_menu.style.display = 'none'; gender_menu.style.zIndex = '0'; }
      else
     { gender_menu.style.display = 'block'; gender_menu.style.zIndex = '3'; }
  }

  onItem1() {
    const gender_menu = document.getElementById('account__gender-menu');
    document.getElementById('account-value__text').innerText = 'Nam';
    gender_menu.style.display = 'none';
  }

  onItem2() {
    const gender_menu = document.getElementById('account__gender-menu');
    document.getElementById('account-value__text').innerText = 'Nữ';
    gender_menu.style.display = 'none';
  }

  onItem3() {
    const gender_menu = document.getElementById('account__gender-menu');
    document.getElementById('account-value__text').innerText = 'Khác';
    gender_menu.style.display = 'none';
  }

  onFaculity(){

  }
}
