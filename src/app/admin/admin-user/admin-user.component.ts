import { Component, OnInit } from '@angular/core';
import {ManageRow} from './../admin-statistic/admin-statistic.component'

@Component({
  selector: 'app-adminuser',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userRows: ManageRow[] = [
    {ID:'000000001',Date:'Trần Văn A',Descrip:'tranvana@gmail.com',Partner:'Gói người dùng 1',Fee:'3',Status:'30.000đ'},
    {ID:'000000002',Date:'Trần Văn B',Descrip:'tranvanb@gmail.com',Partner:'Gói người dùng 2',Fee:'4',Status:'60.000đ'},
    {ID:'000000003',Date:'Trần Văn C',Descrip:'tranvanc@gmail.com',Partner:'Không có',Fee:'2',Status:'70.000đ'},
    {ID:'000000004',Date:'Trần Văn D',Descrip:'tranvand@gmail.com',Partner:'Gói người dùng 1',Fee:'6',Status:'120.000đ'},
    {ID:'000000005',Date:'Trần Văn E',Descrip:'tranvane@gmail.com',Partner:'Gói người dùng 2',Fee:'7',Status:'130.000đ'},
  ]
}