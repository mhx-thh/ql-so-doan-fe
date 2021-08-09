import { Component, OnInit } from '@angular/core';
import { Faculity } from 'src/app/book-communist-youth-union/faculity.model';
import { FaculityService } from 'src/app/book-communist-youth-union/faculity.service';

@Component({
  selector: 'quan-ly-vi-tri',
  templateUrl: './quan-ly-vi-tri.component.html',
  styleUrls: ['./quan-ly-vi-tri.component.css']
})
export class QuanLyViTri implements OnInit {
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
