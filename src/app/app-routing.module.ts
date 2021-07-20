import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';
import { PartnerinfoComponent } from './partnerinfo/partnerinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PartnerComponent } from './partner/partner.component';
import { ProductComponent } from './product/product.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './home-page/homepage.component';
import { BookingCompleteComponent } from './booking-complete/booking-complete.component';
import { BookingPayComponent } from './booking-pay/booking-pay.component';
import { BookingPayMomoComponent } from './booking-pay-momo/booking-pay-momo.component';
import { IntroComponent } from './intro/intro.component';

import { HiringComponent } from './hiring/hiring.component';
import { SecurityPayComponent } from './security-pay/security-pay.component';
import { SecurityInfoComponent } from './security-info/security-info.component';
import { ComplainResolveComponent } from './complain-resolve/complain-resolve.component';
import { RulesComponent } from './rules/rules.component';
import { AdminComponent } from './admin/admin.component';
import { BookCommunistYouthUnionComponent } from './book-communist-youth-union/book-communist-youth-union.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'homepage', component: HomepageComponent },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
  { path: '', component: PartnerinfoComponent },
  { path: 'userinside', component: UserinfoComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'partnerinfo', component: PartnerinfoComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'booking-complete', component: BookingCompleteComponent },
  { path: 'booking-pay', component: BookingPayComponent },
  { path: 'booking-pay-momo', component: BookingPayMomoComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'securityPay', component: SecurityPayComponent },
  { path: 'securityInfo', component: SecurityInfoComponent },
  { path: 'complainResole', component: ComplainResolveComponent },
  { path: 'rule', component: RulesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addBook', component: BookCommunistYouthUnionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
