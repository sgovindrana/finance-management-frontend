import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Import MatInputModule
// import { DashboardComponent } from './features/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,  // Add MatCardModule here
    MatButtonModule,  // Add MatButtonModule here
    MatFormFieldModule,  // Add MatFormFieldModule here
    MatInputModule  // Add MatInputModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
