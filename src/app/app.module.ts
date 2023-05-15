import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './login/auth-guard.service';
import { AuthGuardLoggedInService } from './login/guard-already-connected.service';
import { ClickOutsideDirective } from './shared/click-outside.directive';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ClickOutsideDirective],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthGuardService, AuthGuardLoggedInService],
  bootstrap: [AppComponent],
})
export class AppModule {}
