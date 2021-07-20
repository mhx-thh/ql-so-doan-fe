import { Component, OnInit} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-adminstatus',
  templateUrl: './admin-status.component.html',
  styleUrls: ['./admin-status.component.css']
})

export class AdminStatusComponent {
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
