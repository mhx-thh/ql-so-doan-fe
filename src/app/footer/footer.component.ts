import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  headerFooter = null;

  ngOnInit(): void {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.headerFooter = (event.url !== '/admin')
      }
    });
  }

}
