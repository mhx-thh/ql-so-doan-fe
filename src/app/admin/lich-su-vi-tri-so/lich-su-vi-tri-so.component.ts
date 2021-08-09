import { Component, OnInit } from '@angular/core';
import { Faculity } from 'src/app/book-communist-youth-union/faculity.model';
import { FaculityService } from 'src/app/book-communist-youth-union/faculity.service';

@Component({
  selector: 'lich-su-vi-tri-so',
  templateUrl: './lich-su-vi-tri-so.component.html',
  styleUrls: ['./lich-su-vi-tri-so.component.css']
})
export class LichSuViTriSo implements OnInit {
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
