import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { JobDetailsComponent } from './Pages/job-details/job-details.component';
import { JobListingComponent } from './Pages/job-listing/job-listing.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { CrtateJobComponent } from './Pages/crtate-job/crtate-job.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
    path:"Home",
    component:LandingComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"Register",
    component:RegistrationComponent
  },
  {
    path:"Jobs",
    component:JobsComponent
  },
  {
    path:"Job_Details",
    component:JobDetailsComponent
  },
  {
    path:"Job_Listing",
    component:JobListingComponent
  },
  {
    path:"My_Job",
    component:MyJobsComponent
  },
  {
    path:"Create_Job",
    component:CrtateJobComponent
  },
  {
    path:"**",
    component:LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
