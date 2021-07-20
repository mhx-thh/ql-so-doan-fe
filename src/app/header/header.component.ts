import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string ='toan';
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private usernameListenerSubs: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });

    this.username = this.authService.getUsername();
    this.usernameListenerSubs = this.authService
      .getUsernameStatusListener()
      .subscribe((username) => {
        this.username = username;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/auth/signup', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
