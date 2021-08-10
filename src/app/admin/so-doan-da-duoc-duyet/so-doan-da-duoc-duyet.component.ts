import { Component, OnInit } from '@angular/core';
import { Faculity } from 'src/app/book/faculity.model';
import { FaculityService } from 'src/app/book/faculity.service';

@Component({
  selector: 'so-doan-da-duoc-duyet',
  templateUrl: './so-doan-da-duoc-duyet.component.html',
  styleUrls: ['./so-doan-da-duoc-duyet.component.css']
})
export class SoDoanDaDuocDuyet implements OnInit {
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
