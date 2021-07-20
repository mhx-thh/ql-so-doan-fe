import { Component, OnInit} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-partnerstatus',
  templateUrl: './partnerinfo-status.component.html',
  styleUrls: ['./partnerinfo-status.component.css']
})

export class PartnerinfoStatusComponent {
  constructor() { }
  ngOnInit(): void {
    const status_btn = document.getElementById('status-btn');
    const status_add = document.getElementById('status-add');
    const status_add_btn = document.getElementById('status-add--btn');
    status_btn.addEventListener('click', () => {
      status_add.style.display = 'flex';
      status_btn.style.display = 'none';
      status_add_btn.addEventListener('click', () => {
        status_add.style.display = 'none';
        status_btn.style.display = 'flex';
      })
    })
    
  }
}
