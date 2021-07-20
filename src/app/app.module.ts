import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
 import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostModule } from './posts/post.module';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderInsideComponent } from './header-inside/header-inside.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerinfoAccountComponent } from './partnerinfo/partnerinfo-account/partnerinfo-account.component';
import { PartnerinfoComponent } from './partnerinfo/partnerinfo.component';
import { ProductComponent } from './product/product.component';
import { PartnerinfoSidebarComponent } from './partnerinfo/partnerinfo-sidebar/partnerinfo-sidebar.component';
import { UserinfoAccountComponent } from './userinfo/userinfo-account/userinfo-account.component';
import { UserinfoAddressAddComponent } from './userinfo/userinfo-address/userinfo-address--add/userinfo-address--add.component';
import { UserinfoAddressComponent } from './userinfo/userinfo-address/userinfo-address.component';
import { UserinfoAddressTagComponent } from './userinfo/userinfo-address/userinfo-address--tag/userinfo-address--tag.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserinfoSidebarComponent } from './userinfo/userinfo-sidebar/userinfo-sidebar.component';
import { HomepageComponent } from './home-page/homepage.component';
import { UserinfoManageComponent } from './userinfo/userinfo-manage/userinfo-manage.component';
import { UserinfoManageRowComponent } from './userinfo/userinfo-manage/userinfo-manage--row/userinfo-manage--row.component';
import { UserinfoServiceComponent } from './userinfo/userinfo-service/userinfo-service.component';
import { UserinfoStatusComponent } from './userinfo/userinfo-status/userinfo-status.component';
import { UserinfoServiceTagComponent } from './userinfo/userinfo-service/userinfo-service--tag/userinfo-service--tag.component';
import { UserinfoStatusDateComponent } from './userinfo/userinfo-status/userinfo-status--date/userinfo-status--date.component';
import { UserinfoStatusEventComponent } from './userinfo/userinfo-status/userinfo-status--event/userinfo-status--event.component';
import { PartnerinfoStatusDateComponent } from './partnerinfo/partnerinfo-status/partnerinfo-status--date/partnerinfo-status--date.component';
import { PartnerinfoStatusEventComponent } from './partnerinfo/partnerinfo-status/partnerinfo-status--event/partnerinfo-status--event.component';
import { PartnerinfoStatusComponent } from './partnerinfo/partnerinfo-status/partnerinfo-status.component';
import { PartnerinfoManageRowComponent } from './partnerinfo/partnerinfo-manage/partnerinfo-manage--row/partnerinfo-manage--row.component';
import { PartnerinfoManageComponent } from './partnerinfo/partnerinfo-manage/partnerinfo-manage.component';
import { PartnerinfoPackageComponent } from './partnerinfo/partnerinfo-package/partnerinfo-package.component';
import { PartnerinfoPostComponent } from './partnerinfo/partnerinfo-post/partnerinfo-post.component';
import { PartnerinfoStatisticComponent } from './partnerinfo/partnerinfo-statistic/partnerinfo-statistic.component';
import { PartnerinfoStatisticRowComponent } from './partnerinfo/partnerinfo-statistic/partnerinfo-statistic--row/partnerinfo-statistic--row.component';
//admin
import { AdminPackageTagComponent } from './admin/admin-package/admin-package--tag/admin-package--tag.component';

import { AdminStatusComponent } from './admin/admin-status/admin-status.component';

import { AdminStatusDateComponent } from './admin/admin-status/admin-status--date/admin-status--date.component';

import { AdminStatusEventComponent } from './admin/admin-status/admin-status--event/admin-status--event.component';

import { AdminStatisticRowComponent } from './admin/admin-statistic/admin-statistic--row/admin-statistic--row.component';

import { AdminEnterpriseRowComponent } from './admin/admin-enterprise/admin-enterprise--row/admin-enterprise--row.component';

import { AdminUserRowComponent } from './admin/admin-user/admin-user--row/admin-user--row.component';

import { AdminComponent } from './admin/admin.component';

import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';

import { AdminAccountComponent } from './admin/admin-account/admin-account.component';

import { AdminEnterpriseComponent } from './admin/admin-enterprise/admin-enterprise.component';

import { AdminUserComponent } from './admin/admin-user/admin-user.component';

import { AdminManageComponent } from './admin/admin-manage/admin-manage.component';

import { AdminStatisticComponent } from './admin/admin-statistic/admin-statistic.component';

import { AdminPackageComponent } from './admin/admin-package/admin-package.component';

import { AdminPackageAddComponent } from './admin/admin-packageadd/admin-packageadd.component';
import { BookCommunistYouthUnionComponent } from './book-communist-youth-union/book-communist-youth-union.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    FooterComponent,
    UserinfoComponent,
    UserinfoSidebarComponent,
    UserinfoAddressComponent,
    UserinfoManageComponent,
    UserinfoManageRowComponent,
    HeaderInsideComponent,
    UserinfoServiceComponent,
    UserinfoAddressTagComponent,
    UserinfoAddressAddComponent,
    UserinfoStatusComponent,
    UserinfoServiceTagComponent,
    UserinfoStatusDateComponent,
    UserinfoStatusEventComponent,
    PartnerComponent,
    ProductComponent,
    UserinfoAccountComponent,
    PartnerinfoComponent,
    PartnerinfoSidebarComponent,
    PartnerinfoAccountComponent,
    BookingComponent,
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
    AdminSidebarComponent,
    AdminAccountComponent,
    AdminManageComponent,
    AdminStatisticComponent,
    AdminPackageComponent,
    AdminPackageTagComponent,
    AdminPackageAddComponent,
    AdminStatisticRowComponent,
    AdminEnterpriseComponent,
    AdminEnterpriseRowComponent,
    AdminUserRowComponent,
    AdminUserComponent,
    AdminStatusComponent,
    AdminStatusDateComponent,
    AdminStatusEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    AngularMaterialModule,
    PostModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,

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
