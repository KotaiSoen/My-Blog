import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { AdminRoutingModule } from './admin-routing.module';
import { AboutUsComponent } from './admin-about-us/about-us.component';
import { HeaderComponent } from './admin-header/header.component';
import { HomeComponent } from './admin-home/home.component';
import { PostComponent } from './admin-post/post.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AboutUsComponent,
    HeaderComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class AdminModule { }
