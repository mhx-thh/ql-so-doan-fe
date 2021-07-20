import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor() { }
    ngOnInit(): void {
        const enterprise_id = document.getElementById('enterprise-id');
        const user_id = document.getElementById('user-id');
        const account_btn_1 = document.getElementById('account-btn-1');
        const account_btn_2 = document.getElementById('account-btn-2');
        const account_btn_4 = document.getElementById('account-btn-4');
        const enterprise_title = document.getElementById('enterprise-title');
        const manage_btn_1 = document.getElementById('manage-btn-1');
        const manage_btn_2 = document.getElementById('manage-btn-2');
        const manage_btn_3 = document.getElementById('manage-btn-3');
        const statistic_id = document.getElementById('statistic-id');
        const packageadd_btn = document.getElementById('packageadd-btn');
        const package_btn = document.getElementById('package-btn');
        const sidebar_account = document.getElementById('sidebar-account');
        const sidebar_manage = document.getElementById('sidebar-manage');
        const sidebar_package = document.getElementById('sidebar-package');
        const sidebar_statistic = document.getElementById('sidebar-statistic');
        const admin_packageadd = document.getElementById('admin-packageadd');
        const admin_enterprise = document.getElementById('admin-enterprise');
        const admin_account = document.getElementById('admin-account');
        const admin_manage = document.getElementById('admin-manage');
        const admin_package = document.getElementById('admin-package');
        const admin_statistic = document.getElementById('admin-statistic');
        const admin_user = document.getElementById('admin-user');
        const admin_status = document.getElementById('admin-status');
        enterprise_id.addEventListener('click', () => {
            admin_status.style.display = 'block';
            admin_enterprise.style.display = 'none';
            admin_statistic.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
        })
        user_id.addEventListener('click', () => {
            admin_enterprise.style.display = 'block';
            sidebar_statistic.style.backgroundColor = 'transparent';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = '#E5E5E5';
            admin_statistic.style.display = 'none';
            admin_status.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
            enterprise_title.innerText = 'Quản lý người dùng';
        })
        account_btn_1.addEventListener('click', () => {
            admin_user.style.display = 'block';
            sidebar_account.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_account.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_status.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_enterprise.style.display = 'none';
            admin_package.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        account_btn_2.addEventListener('click', () => {
            admin_user.style.display = 'block';
            sidebar_account.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_account.style.display = 'none';
            admin_status.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_enterprise.style.display = 'none';
            admin_package.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        account_btn_4.addEventListener('click', () => {
            admin_user.style.display = 'block';
            sidebar_account.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_account.style.display = 'none';
            admin_status.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_enterprise.style.display = 'none';
            admin_package.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        manage_btn_1.addEventListener('click', () => {
            admin_enterprise.style.display = 'block';
            sidebar_statistic.style.backgroundColor = 'transparent';
            sidebar_manage.style.backgroundColor = '#E5E5E5';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            admin_statistic.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_status.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
            enterprise_title.innerText = 'Quản lý đơn hàng';
        })
        manage_btn_2.addEventListener('click', () => {
            admin_enterprise.style.display = 'block';
            sidebar_statistic.style.backgroundColor = 'transparent';
            sidebar_manage.style.backgroundColor = '#E5E5E5';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            admin_statistic.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_status.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
            enterprise_title.innerText = 'Quản lý đơn hàng';
        })
        manage_btn_3.addEventListener('click', () => {
            admin_enterprise.style.display = 'block';
            sidebar_statistic.style.backgroundColor = 'transparent';
            sidebar_manage.style.backgroundColor = '#E5E5E5';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            admin_statistic.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_status.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
            enterprise_title.innerText = 'Quản lý đơn hàng';
        })
        statistic_id.addEventListener('click', () => {
            admin_enterprise.style.display = 'block';
            sidebar_statistic.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            admin_statistic.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_status.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
            enterprise_title.innerText = 'Thống kê';
        })
        packageadd_btn.addEventListener('click', () => {
            sidebar_package.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_package.style.display = 'block';
            admin_enterprise.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_status.style.display = 'none';
            admin_account.style.display = 'none';
            admin_user.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        package_btn.addEventListener('click', () => {
            admin_packageadd.style.display = 'block';
            sidebar_package.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_package.style.display = 'none';
            admin_status.style.display = 'none';
            admin_enterprise.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_account.style.display = 'none';
            admin_user.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        sidebar_account.addEventListener('click', () => {
            sidebar_account.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_account.style.display = 'block';
            admin_packageadd.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_status.style.display = 'none';
            admin_enterprise.style.display = 'none';
            admin_package.style.display = 'none';
            admin_statistic.style.display = 'none';
            admin_user.style.display = 'none';
        })
        sidebar_manage.addEventListener('click', () => {
            sidebar_manage.style.backgroundColor = '#E5E5E5';
            sidebar_account.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_manage.style.display = 'block';
            admin_packageadd.style.display = 'none';
            admin_status.style.display = 'none';
            admin_account.style.display = 'none';
            admin_enterprise.style.display = 'none';
            admin_package.style.display = 'none';
            admin_user.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        sidebar_package.addEventListener('click', () => {
            sidebar_package.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            sidebar_statistic.style.backgroundColor = 'transparent';
            admin_package.style.display = 'block';
            admin_enterprise.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_status.style.display = 'none';
            admin_account.style.display = 'none';
            admin_user.style.display = 'none';
            admin_statistic.style.display = 'none';
        })
        sidebar_statistic.addEventListener('click', () => {
            sidebar_statistic.style.backgroundColor = '#E5E5E5';
            sidebar_manage.style.backgroundColor = 'transparent';
            sidebar_package.style.backgroundColor = 'transparent';
            sidebar_account.style.backgroundColor = 'transparent';
            admin_statistic.style.display = 'block';
            admin_enterprise.style.display = 'none';
            admin_manage.style.display = 'none';
            admin_packageadd.style.display = 'none';
            admin_package.style.display = 'none';
            admin_status.style.display = 'none';
            admin_user.style.display = 'none';
            admin_account.style.display = 'none';
        })
    }

}
