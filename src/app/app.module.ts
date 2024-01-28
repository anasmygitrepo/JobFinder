import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { JobDetailsComponent } from './Pages/job-details/job-details.component';
import { CrtateJobComponent } from './Pages/crtate-job/crtate-job.component';
import { JobListingComponent } from './Pages/job-listing/job-listing.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import {
	NgxsIntlTelInputModule
} from 'projects/ngxs-intl-tel-input/src/lib/ngxs-intl-tel-input.module';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LandingComponent,
    JobsComponent,
    JobDetailsComponent,
    CrtateJobComponent,
    JobListingComponent,
    MyJobsComponent,


  ],
  imports: [
    
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsIntlTelInputModule,
    BrowserAnimationsModule,
    NgSelectModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
