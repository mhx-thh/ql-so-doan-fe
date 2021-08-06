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
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerinfoAccountComponent } from './partnerinfo/partnerinfo-account/partnerinfo-account.component';
import { PartnerinfoComponent } from './partnerinfo/partnerinfo.component';
import { ProductComponent } from './product/product.component';
import { PartnerinfoSidebarComponent } from './partnerinfo/partnerinfo-sidebar/partnerinfo-sidebar.component';
import { PartnerinfoStatusDateComponent } from './partnerinfo/partnerinfo-status/partnerinfo-status--date/partnerinfo-status--date.component';
import { PartnerinfoStatusEventComponent } from './partnerinfo/partnerinfo-status/partnerinfo-status--event/partnerinfo-status--event.component';
import { PartnerinfoStatusComponent } from './partnerinfo/partnerinfo-status/partnerinfo-status.component';
import { PartnerinfoManageRowComponent } from './partnerinfo/partnerinfo-manage/partnerinfo-manage--row/partnerinfo-manage--row.component';
import { PartnerinfoManageComponent } from './partnerinfo/partnerinfo-manage/partnerinfo-manage.component';
import { PartnerinfoPackageComponent } from './partnerinfo/partnerinfo-package/partnerinfo-package.component';
import { PartnerinfoPostComponent } from './partnerinfo/partnerinfo-post/partnerinfo-post.component';
import { PartnerinfoStatisticComponent } from './partnerinfo/partnerinfo-statistic/partnerinfo-statistic.component';
import { PartnerinfoStatisticRowComponent } from './partnerinfo/partnerinfo-statistic/partnerinfo-statistic--row/partnerinfo-statistic--row.component';
import { BookCommunistYouthUnionComponent } from './book-communist-youth-union/book-communist-youth-union.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './home-page/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderInsideComponent } from './header-inside/header-inside.component';


@NgModule({
  declarations: [
    HeaderInsideComponent,
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    FooterComponent,
    PartnerComponent,
    ProductComponent,
    PartnerinfoComponent,
    PartnerinfoSidebarComponent,
    PartnerinfoAccountComponent,
    HomepageComponent,
    PartnerinfoStatusDateComponent,
    PartnerinfoStatusEventComponent,
    PartnerinfoStatusComponent,
    PartnerinfoManageRowComponent,
    PartnerinfoManageComponent,
    PartnerinfoPackageComponent,
    PartnerinfoPostComponent,
    PartnerinfoStatisticComponent,
    PartnerinfoStatisticRowComponent,
    BookCommunistYouthUnionComponent,
    //admin
    AdminComponent,
    IntroComponent,
    RulesComponent
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
    MatCheckboxModule,
    MatSidenavModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})

export class AppModule {

}
