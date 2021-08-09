import { Component, OnInit } from '@angular/core';
import { Faculity } from 'src/app/book/faculity.model';
import { FaculityService } from 'src/app/book/faculity.service';

@Component({
  selector: 'quan-ly-khoa-va-chi-doan',
  templateUrl: './quan-ly-khoa-va-chi-doan.component.html',
  styleUrls: ['./quan-ly-khoa-va-chi-doan.component.css']
})
export class QuanLyKhoaVaChiDoan implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(
    public faculitiesService: FaculityService,
  ) { }

  username = '';
  typeAccount = '';
  faculities: Faculity[] = [];
}
