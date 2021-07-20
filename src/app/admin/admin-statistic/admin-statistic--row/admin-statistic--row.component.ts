import { Component, OnInit, Input } from '@angular/core';
import {ManageRow} from './../admin-statistic.component'

@Component({
  selector: 'app-adminstatistic--row',
  templateUrl: './admin-statistic--row.component.html',
  styleUrls: ['./admin-statistic--row.component.css']
})
export class AdminStatisticRowComponent implements OnInit {
  @Input() manageRow: ManageRow;
  constructor() { }

  ngOnInit(): void {
  }

}
