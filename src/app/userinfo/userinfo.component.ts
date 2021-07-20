
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent {
  constructor() { }
  items = [1,2,3,4]
  ngOnInit(): void {
    const manage_id = document.getElementById('manage-id');
    const add_btn = document.getElementById('address-add-btn');
    const add = document.getElementById('address-add');
    const tag1 = document.getElementById('address-tag-1');
    const tag2 = document.getElementById('address-tag-2');
    const sidebar_account = document.getElementById('sidebar-account');
    const sidebar_manage = document.getElementById('sidebar-manage');
    const sidebar_service = document.getElementById('sidebar-service');
    const sidebar_address = document.getElementById('sidebar-address');
    const userinfo_account = document.getElementById('userinfo-account');
    const userinfo_manage = document.getElementById('userinfo-manage');
    const userinfo_service = document.getElementById('userinfo-service');
    const userinfo_address = document.getElementById('userinfo-address');
    const userinfo_status = document.getElementById('userinfo-status');
    manage_id.addEventListener('click', () => {
      userinfo_status.style.display = 'block';
      sidebar_manage.style.backgroundColor = '#E5E5E5';
      sidebar_account.style.backgroundColor = 'transparent';
      sidebar_service.style.backgroundColor = 'transparent';
      sidebar_address.style.backgroundColor = 'transparent';
      userinfo_manage.style.display = 'none';
      userinfo_account.style.display = 'none';
      userinfo_service.style.display = 'none';
      userinfo_address.style.display = 'none';
    })
    sidebar_account.addEventListener('click', () => {
      sidebar_account.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_service.style.backgroundColor = 'transparent';
      sidebar_address.style.backgroundColor = 'transparent';
      userinfo_account.style.display = 'block';
      userinfo_status.style.display = 'none';
      userinfo_manage.style.display = 'none';
      userinfo_service.style.display = 'none';
      userinfo_address.style.display = 'none';
    })
    sidebar_manage.addEventListener('click', () => {
      sidebar_manage.style.backgroundColor = '#E5E5E5';
      sidebar_account.style.backgroundColor = 'transparent';
      sidebar_service.style.backgroundColor = 'transparent';
      sidebar_address.style.backgroundColor = 'transparent';
      userinfo_status.style.display = 'none';
      userinfo_manage.style.display = 'block';
      userinfo_account.style.display = 'none';
      userinfo_service.style.display = 'none';
      userinfo_address.style.display = 'none';
    })
    sidebar_service.addEventListener('click', () => {
      sidebar_service.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_account.style.backgroundColor = 'transparent';
      sidebar_address.style.backgroundColor = 'transparent';
      userinfo_service.style.display = 'block';
      userinfo_manage.style.display = 'none';
      userinfo_account.style.display = 'none';
      userinfo_status.style.display = 'none';
      userinfo_address.style.display = 'none';
    })
    sidebar_address.addEventListener('click', () => {
      sidebar_address.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_service.style.backgroundColor = 'transparent';
      sidebar_account.style.backgroundColor = 'transparent';
      userinfo_address.style.display = 'block';
      userinfo_manage.style.display = 'none';
      userinfo_status.style.display = 'none';
      userinfo_service.style.display = 'none';
      userinfo_account.style.display = 'none';
      add_btn.style.display = 'flex';
      add.style.display = 'none';
      tag1.style.display = 'block';
      tag2.style.display = 'block';
    })
  }
}
