import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './admin-home/home.component';
import { AboutUsComponent } from './admin-about-us/about-us.component';
import { PostComponent } from './admin-post/post.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EditItemComponent } from './edit-item/edit-item.component';

const routes: Routes = [
  {path: 'admin', component: HomeComponent},
  { path: 'admin-about-us-component', component: AboutUsComponent},
  { path: 'admin-post-component', component: PostComponent},
  { path: 'add-new-post', component: AddNewComponent},
  { path: 'edit-post', component: EditItemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
