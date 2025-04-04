import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your landing page and other feature modules
import { LandingPageComponent } from './landing-page/landing-page.component'; // Update this if it's in another folder

const routes: Routes = [
  // Redirect the root path to /landing (Landing Page)
  { path: '', component: LandingPageComponent }, // Ensure the root path loads the landing page

  // Lazy-load other modules (Dashboard, Auth, etc.)
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },

  // Wildcard route to redirect to the landing page if no path is matched
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
