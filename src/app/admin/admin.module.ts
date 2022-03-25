import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AboutUsComponent } from './admin-about-us/about-us.component';
import { HeaderComponent } from './admin-header/header.component';
import { HomeComponent } from './admin-home/home.component';
import { PostComponent } from './admin-post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { AddNewComponent } from './add-new/add-new.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    HeaderComponent,
    HomeComponent,
    PostComponent,
    AddNewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ],
})
export class AdminModule { }
