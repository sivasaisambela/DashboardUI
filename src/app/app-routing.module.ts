import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes:Routes=[
   {path:"dashboard",component:DashboardComponent},
   {path:"about",component:AboutComponent},
   {path:"my-profile",component:MyProfileComponent},
   {path:"projects",component:ProjectsComponent},
   {path:"",redirectTo:"dashboard",pathMatch:"full"}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
