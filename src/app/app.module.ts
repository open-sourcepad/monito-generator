import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './session/register/register.component';
import { LoginComponent } from './session/login/login.component';
import { SessionComponent } from './session/session.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';

import { AppRoutingModule } from './app-routing.module';
import { SessionRoutingModule } from './session/session-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowErrorsComponent } from './session/show-errors/show-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SessionComponent,
    ControlMessagesComponent,
    DashboardComponent,
    ShowErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
