import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PartnerinfoComponent } from './partnerinfo/partnerinfo.component';
import { PartnerComponent } from './partner/partner.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './home-page/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RulesComponent } from './rules/rules.component';
import { AdminComponent } from './admin/admin.component';
import { BookCommunistYouthUnionComponent } from './book-communist-youth-union/book-communist-youth-union.component';
import { HiStudentComponent } from './hi-student/hi-student.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  //{ path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'homepage', component: HomepageComponent },
  //{ path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
  { path: '', component: PartnerinfoComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'partnerinfo', component: PartnerinfoComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'rule', component: RulesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addBook', component: BookCommunistYouthUnionComponent},
  { path: 'student', component: HiStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
