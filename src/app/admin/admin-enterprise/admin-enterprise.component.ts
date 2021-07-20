import { Component, OnInit } from '@angular/core';
import {ManageRow} from './../admin-statistic/admin-statistic.component'

@Component({
  selector: 'app-adminenterprise',
  templateUrl: './admin-enterprise.component.html',
  styleUrls: ['./admin-enterprise.component.css']
})
export class AdminEnterpriseComponent implements OnInit {

  constructor() { }
  manageRows: ManageRow[] = [
    {ID:'000000001',Date:'5/4/2021',Descrip:'Báo cáo',Partner:'000000001',Fee:'30.000đ',Status:'Đang vận chuyển'},
    {ID:'000000002',Date:'4/4/2021',Descrip:'Giấy tờ',Partner:'000000002',Fee:'50.000đ',Status:'Đang vận chuyển'},
    {ID:'000000003',Date:'3/4/2021',Descrip:'Báo cáo',Partner:'000000003',Fee:'40.000đ',Status:'Đang vận chuyển'},
    {ID:'000000004',Date:'2/4/2021',Descrip:'Gì đó',Partner:'000000004',Fee:'20.000đ',Status:'Đang vận chuyển'},
    {ID:'000000005',Date:'1/4/2021',Descrip:'Không biết',Partner:'000000005',Fee:'60.000đ',Status:'Đang vận chuyển'},
  ]
  ngOnInit(): void {

  }
  
}
