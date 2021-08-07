import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FaculityService } from './admin.service';
import { Faculity } from './faculity.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(
    public faculitiesService: FaculityService,
  ) { }

  username = '';
  typeAccount = '';
  faculities: Faculity[] = [];
  screen : string = 'pheDuyetSoDoan';

  ngOnInit() {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    $(".footer-content").css("display", "none");
    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
      $("#logo").css("padding-left", "50px");
      $(".footer-content").css("display", "block");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
      $("#logo").css("padding-left", "230px");
      $(".footer-content").css("display", "none");
    });
    this.username = localStorage.getItem("username");
    this.typeAccount = localStorage.getItem("typeAccount");
    this.getFaculities();
    this.screen = 'pheDuyetSoDoan';
  }

  getFaculities(): void {
    this.faculitiesService.getFaculities().subscribe(
      faculities => {
        this.faculities = faculities;
      });
  }

  onPheDuyetSoDoan(){
    this.screen = 'pheDuyetSoDoan';
    //console.log(this.screen);
  }

  onQuanLyViTri(){
    this.screen = 'quanLyViTri';
    //console.log(this.screen);
  }
  onQuanLyKhoaVaChiDoan(){
    this.screen = 'quanLyKhoaVaChiDoan';
    //console.log(this.screen);
  }
  onQuanLyChuyenDoanVien(){
    this.screen = 'quanLyChuyenDoanVien';
    //console.log(this.screen);
  }
  onLichSuViTriSo(){
    this.screen = 'lichSuViTriSo';
    //console.log(this.screen);
  }
}
