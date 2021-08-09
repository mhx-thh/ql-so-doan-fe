import { Component, OnInit } from '@angular/core';
import { Faculity } from 'src/app/book-communist-youth-union/faculity.model';
import { FaculityService } from 'src/app/book-communist-youth-union/faculity.service';

@Component({
  selector: 'phe-duyet-so-doan',
  templateUrl: './phe-duyet-so-doan.component.html',
  styleUrls: ['./phe-duyet-so-doan.component.css']
})
export class PheDuyetSoDoan implements OnInit {
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
