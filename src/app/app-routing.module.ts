import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuardService } from './login/auth-guard.service';
import { AuthGuardLoggedInService } from './login/guard-already-connected.service';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardLoggedInService],
  },
  { path: 'documentation', component: DocumentationComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
