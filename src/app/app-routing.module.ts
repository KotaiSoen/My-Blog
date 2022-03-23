import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './PAGES/home/home.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ContactUsComponent } from './PAGES/contact-us/contact-us.component';
import { PostComponent } from './PAGES/post/post.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterComponent } from './login/register/register.component';
import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: 'home-component', component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'about-us-component', component: AboutUsComponent},
  { path: 'contact-us-component', component: ContactUsComponent},
  { path: 'post-component', component: PostComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/home-component', pathMatch: 'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
