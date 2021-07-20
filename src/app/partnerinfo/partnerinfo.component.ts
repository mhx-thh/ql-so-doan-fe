import { Component, OnInit} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-partnerinfo',
  templateUrl: './partnerinfo.component.html',
  styleUrls: ['./partnerinfo.component.css']
})

export class PartnerinfoComponent {
  constructor() { }
  ngOnInit(): void {
    const post_btn = document.getElementById('post-btn');
    const manage_id = document.getElementById('manage-id');
    const account_btn = document.getElementById('account-btn');
    const sidebar_account = document.getElementById('sidebar-account');
    const sidebar_manage = document.getElementById('sidebar-manage');
    const sidebar_package = document.getElementById('sidebar-package');
    const sidebar_statistic = document.getElementById('sidebar-statistic');
    const partnerinfo_account = document.getElementById('partnerinfo-account');
    const partnerinfo_manage = document.getElementById('partnerinfo-manage');
    const partnerinfo_status = document.getElementById('partnerinfo-status');
    const partnerinfo_package = document.getElementById('partnerinfo-package');
    const partnerinfo_statistic = document.getElementById('partnerinfo-statistic');
    const partnerinfo_post = document.getElementById('partnerinfo-post');
    post_btn.addEventListener('click', () => {
      sidebar_account.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_package.style.backgroundColor = 'transparent';
      sidebar_statistic.style.backgroundColor = 'transparent';
      partnerinfo_account.style.display = 'block';
      partnerinfo_status.style.display = 'none';
      partnerinfo_manage.style.display = 'none';
      partnerinfo_package.style.display = 'none';
      partnerinfo_statistic.style.display = 'none';
      partnerinfo_post.style.display = 'none';
    })
    manage_id.addEventListener('click', () => {
      partnerinfo_status.style.display = 'block';
      sidebar_manage.style.backgroundColor = '#E5E5E5';
      sidebar_account.style.backgroundColor = 'transparent';
      sidebar_package.style.backgroundColor = 'transparent';
      sidebar_statistic.style.backgroundColor = 'transparent';
      partnerinfo_manage.style.display = 'none';
      partnerinfo_account.style.display = 'none';
      partnerinfo_package.style.display = 'none';
      partnerinfo_post.style.display = 'none';
      partnerinfo_statistic.style.display = 'none';
    })
    account_btn.addEventListener('click', () => {
      partnerinfo_post.style.display = 'block';
      sidebar_account.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_package.style.backgroundColor = 'transparent';
      sidebar_statistic.style.backgroundColor = 'transparent';
      partnerinfo_status.style.display = 'none';
      partnerinfo_account.style.display = 'none';
      partnerinfo_manage.style.display = 'none';
      partnerinfo_package.style.display = 'none';
      partnerinfo_statistic.style.display = 'none';
    })
    sidebar_account.addEventListener('click', () => {
      sidebar_account.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_package.style.backgroundColor = 'transparent';
      sidebar_statistic.style.backgroundColor = 'transparent';
      partnerinfo_account.style.display = 'block';
      partnerinfo_status.style.display = 'none';
      partnerinfo_manage.style.display = 'none';
      partnerinfo_package.style.display = 'none';
      partnerinfo_statistic.style.display = 'none';
      partnerinfo_post.style.display = 'none';
    })
    sidebar_manage.addEventListener('click', () => {
      sidebar_manage.style.backgroundColor = '#E5E5E5';
      sidebar_account.style.backgroundColor = 'transparent';
      sidebar_package.style.backgroundColor = 'transparent';
      sidebar_statistic.style.backgroundColor = 'transparent';
      partnerinfo_manage.style.display = 'block';
      partnerinfo_status.style.display = 'none';
      partnerinfo_account.style.display = 'none';
      partnerinfo_package.style.display = 'none';
      partnerinfo_post.style.display = 'none';
      partnerinfo_statistic.style.display = 'none';
    })
    sidebar_package.addEventListener('click', () => {
      sidebar_package.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_account.style.backgroundColor = 'transparent';
      sidebar_statistic.style.backgroundColor = 'transparent';
      partnerinfo_package.style.display = 'block';
      partnerinfo_status.style.display = 'none';
      partnerinfo_manage.style.display = 'none';
      partnerinfo_account.style.display = 'none';
      partnerinfo_statistic.style.display = 'none';
    })
    sidebar_statistic.addEventListener('click', () => {
      sidebar_statistic.style.backgroundColor = '#E5E5E5';
      sidebar_manage.style.backgroundColor = 'transparent';
      sidebar_package.style.backgroundColor = 'transparent';
      sidebar_account.style.backgroundColor = 'transparent';
      partnerinfo_statistic.style.display = 'block';
      partnerinfo_manage.style.display = 'none';
      partnerinfo_status.style.display = 'none';
      partnerinfo_package.style.display = 'none';
      partnerinfo_post.style.display = 'none';
      partnerinfo_account.style.display = 'none';
    })
  }
}
