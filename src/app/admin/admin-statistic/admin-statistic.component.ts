import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminstatistic',
  templateUrl: './admin-statistic.component.html',
  styleUrls: ['./admin-statistic.component.css']
})
export class AdminStatisticComponent implements OnInit {

  constructor() { }
  manageRows: ManageRow[] = [
    {ID:'Grab Express',Date:'5/4/2021',Descrip:'70',Partner:'7512',Fee:'19.330.000đ',Status:'1.360.000đ'},
    {ID:'Lalamove',Date:'4/4/2021',Descrip:'80',Partner:'8502',Fee:'23.330.000đ',Status:'2.370.000đ'},
    {ID:'GHTK',Date:'3/4/2021',Descrip:'73',Partner:'6112',Fee:'12.330.000đ',Status:'1.380.000đ'},
    {ID:'Viettel Post',Date:'2/4/2021',Descrip:'71',Partner:'5512',Fee:'17.310.000đ',Status:'1.390.000đ'},
    {ID:'GHN',Date:'1/4/2021',Descrip:'87',Partner:'7317',Fee:'14.320.000đ',Status:'1.330.000đ'},

  ]
  ngOnInit(): void {

  }

}


export class ManageRow {
  ID: string;
  Date: string;
  Descrip: string;
  Partner: string;
  Fee: string;
  Status: string;
}