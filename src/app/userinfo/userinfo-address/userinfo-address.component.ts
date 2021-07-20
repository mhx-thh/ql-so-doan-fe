import { Component, OnInit} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-useraddress',
  templateUrl: './userinfo-address.component.html',
  styleUrls: ['./userinfo-address.component.css']
})

export class UserinfoAddressComponent {
  constructor() {}
  ngOnInit(): void {
    const add_button = document.getElementById('address-add-button');
    const tag_edit = document.getElementById('tag-edit');
    const tag_delete = document.getElementById('tag-delete');
    const add_btn = document.getElementById('address-add-btn');
    const add = document.getElementById('address-add');
    const tag1 = document.getElementById('address-tag-1');
    const tag2 = document.getElementById('address-tag-2');
    add_button.addEventListener('click', () => {
      add_btn.style.display = 'block';
      tag1.style.display = 'block';
      tag2.style.display = 'block';
      add.style.display = 'none';
    })
    add_btn.addEventListener('click', () => {
      add_btn.style.display = 'none';
      tag1.style.display = 'none';
      tag2.style.display = 'none';
      add.style.display = 'block';
    })
    tag_edit.addEventListener('click', () => {
      add_btn.style.display = 'none';
      tag1.style.display = 'none';
      tag2.style.display = 'none';
      add.style.display = 'block';
    })
  }
}
