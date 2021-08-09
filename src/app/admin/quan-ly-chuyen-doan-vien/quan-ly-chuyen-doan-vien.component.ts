import { Component, OnInit } from '@angular/core';
import { Faculity } from 'src/app/book-communist-youth-union/faculity.model';
import { FaculityService } from 'src/app/book-communist-youth-union/faculity.service';

@Component({
  selector: 'quan-ly-chuyen-doan-vien',
  templateUrl: './quan-ly-chuyen-doan-vien.component.html',
  styleUrls: ['./quan-ly-chuyen-doan-vien.component.css']
})
export class QuanLyChuyenDoanVien implements OnInit {
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
