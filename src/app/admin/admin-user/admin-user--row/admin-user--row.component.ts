import { Component, OnInit, Input } from '@angular/core';
import {ManageRow} from './../../admin-statistic/admin-statistic.component'

@Component({
  selector: 'app-adminuser--row',
  templateUrl: './admin-user--row.component.html',
  styleUrls: ['./admin-user--row.component.css']
})
export class AdminUserRowComponent implements OnInit {
  @Input() userRow: ManageRow;
  constructor() { }

  ngOnInit(): void {
  }

}
