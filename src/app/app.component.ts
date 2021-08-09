import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  //@Input()
  //username: string;

  username: string ='';

  title: 'Safago';
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

    // ui
    $(document).ready(function() {

      // navbarDropdown
      if ($(window).width() < 992) {
        $('.main-nav .dropdown-toggle').on('click', function () {
          $(this).siblings('.dropdown-menu').animate({
            height: 'toggle'
          }, 300);
        });
      }
    });

  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
