import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { ClienterrorComponent } from './pages/clienterror/clienterror.component';
import { AddcircleComponent } from './pages/addcircle/addcircle.component';
import { ShowcircleComponent } from './pages/showcircle/showcircle.component';
import { AddUsersComponent } from './pages/showcircle/add-users/add-users.component';
import { UpcomingComponent } from './pages/dashboard/upcoming/upcoming.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { EditcircleComponent } from './pages/editcircle/editcircle.component';

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
    UpcomingComponent,
    EditcircleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SweetAlert2Module.forRoot({
                buttonsStyling: false,
                customClass: 'modal-content',
                confirmButtonClass: 'btn btn-primary',
                cancelButtonClass: 'btn'}),
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
