import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',
    component: SessionComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent}
    ]
  },
  { path: 'dashboard/:user', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
