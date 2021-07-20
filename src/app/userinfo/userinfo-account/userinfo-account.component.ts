import { Component, OnInit} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-useraccount',
  templateUrl: './userinfo-account.component.html',
  styleUrls: ['./userinfo-account.component.css']
})

export class UserinfoAccountComponent {
  constructor() { }
  ngOnInit(): void {
    const gender = document.getElementById('account__gender');
    const gender_menu = document.getElementById('account__gender-menu');
    const gender_item1 = document.getElementById('account__gender-item-1');
    const gender_item2 = document.getElementById('account__gender-item-2');
    const gender_item3 = document.getElementById('account__gender-item-3');
    gender.addEventListener('click', () => {
      if (gender_menu.style.display == 'block'){gender_menu.style.display = 'none'} else {gender_menu.style.display = 'block'}
    })
    gender_item1.addEventListener('click', () => {
      document.getElementById('account-value__text').innerText = 'Nam';
      gender_menu.style.display = 'none';
    })
    gender_item2.addEventListener('click', () => {
      document.getElementById('account-value__text').innerText = 'Nữ';
      gender_menu.style.display = 'none';
    })
    gender_item3.addEventListener('click', () => {
      document.getElementById('account-value__text').innerText = 'Khác';
      gender_menu.style.display = 'none';
    })
  }
}
