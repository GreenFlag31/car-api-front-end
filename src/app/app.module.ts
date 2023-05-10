import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionRoutesComponent } from './accordion-routes/accordion-routes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './login/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DocumentationComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AccordionRoutesComponent,
    NavigationComponent,
    DashboardComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
