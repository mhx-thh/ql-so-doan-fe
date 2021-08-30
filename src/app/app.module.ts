import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './home-page/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderInsideComponent } from './header-inside/header-inside.component';
import { HiStudentComponent } from './hi-student/hi-student.component';
import { PheDuyetSoDoan } from './admin/phe-duyet-so-doan/phe-duyet-so-doan.component';
import { LichSuViTriSo } from './admin/lich-su-vi-tri-so/lich-su-vi-tri-so.component';
import { QuanLyChuyenDoanVien } from './admin/quan-ly-chuyen-doan-vien/quan-ly-chuyen-doan-vien.component';
import { QuanLyKhoaVaChiDoan } from './admin/quan-ly-khoa-va-chi-doan/quan-ly-khoa-va-chi-doan.component';
import { QuanLyViTri } from './admin/quan-ly-vi-tri/quan-ly-vi-tri.component';
import { SoDoanDaDuocDuyet } from './admin/so-doan-da-duoc-duyet/so-doan-da-duoc-duyet.component';
import { BookComponent } from './book/book.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    HiStudentComponent,
    HeaderInsideComponent,
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    FooterComponent,
    HomepageComponent,
    BookComponent,
    //admin
    AdminComponent,
    IntroComponent,
    RulesComponent,
    PheDuyetSoDoan,
    LichSuViTriSo,
    QuanLyChuyenDoanVien,
    QuanLyKhoaVaChiDoan,
    QuanLyViTri,
    SoDoanDaDuocDuyet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    AngularMaterialModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LfhgigcAAAAAOVkZjMk6D2wnRuoYDyo3OPB1qe0" }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})

export class AppModule {

}
