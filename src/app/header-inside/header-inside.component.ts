import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';


import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-inside',
  templateUrl: './header-inside.component.html',
  styleUrls: ['./header-inside.component.css']
})

export class HeaderInsideComponent implements OnInit{
  username: string = '';
  typeAccount: string = '';
  userIsAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}
  onLogout() {
    this.authService.logout();
  }
  ngOnInit() {
    this.username = this.authService.getUsername();
    this.authService
      .getUsernameStatusListener()
      .subscribe((username) => {
        this.username = username;
      });
    this.typeAccount = this.authService.getTypeAccount();
  }
}
