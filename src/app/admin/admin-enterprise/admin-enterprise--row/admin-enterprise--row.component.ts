import { Component, OnInit, Input } from '@angular/core';
import {ManageRow} from './../../admin-statistic/admin-statistic.component';

@Component({
  selector: 'app-adminenterprise--row',
  templateUrl: './admin-enterprise--row.component.html',
  styleUrls: ['./admin-enterprise--row.component.css']
})
export class AdminEnterpriseRowComponent implements OnInit {

  constructor() { }
  @Input() manageRow: ManageRow;
  ngOnInit(): void {
  }

}
