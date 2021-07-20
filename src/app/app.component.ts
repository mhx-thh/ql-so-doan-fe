import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title: 'Safago';

  username: string ='toan';
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private usernameListenerSubs: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoAuthUser();

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
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
