import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { ClienterrorComponent } from './pages/clienterror/clienterror.component';
import { AddcircleComponent } from './pages/addcircle/addcircle.component';
import { ShowcircleComponent } from './pages/showcircle/showcircle.component';
import { AddUsersComponent } from './pages/showcircle/add-users/add-users.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ControlMessagesComponent,
    DashboardComponent,
    ShowErrorsComponent,
    NavbarComponent,
    PagesComponent,
    ClienterrorComponent,
    AddcircleComponent,
    ShowcircleComponent,
    AddUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
