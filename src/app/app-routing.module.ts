import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomepageComponent } from './home-page/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RulesComponent } from './rules/rules.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { HiStudentComponent } from './hi-student/hi-student.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  //{ path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'homepage', component: HomepageComponent },
  //{ path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
  { path: 'intro', component: IntroComponent },
  { path: 'rule', component: RulesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addBook', component: BookComponent},
  { path: 'student', component: HiStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
