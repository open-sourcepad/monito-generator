import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClienterrorComponent } from './pages/clienterror/clienterror.component';
import { AddcircleComponent } from './pages/addcircle/addcircle.component';
import { ShowcircleComponent } from './pages/showcircle/showcircle.component';
import { EditcircleComponent } from './pages/editcircle/editcircle.component';

import { AuthGuardService  } from './services/utility/auth-guard.service';
import { LoginGuardService } from './services/utility/login-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },
  { path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuardService]
   },
  { path: 'register/:circle_id',
    component: RegisterComponent
   },
  { path: 'register/:circle_id/:user_name',
    component: RegisterComponent,
   },
  { path: 'dashboard/:user',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
 { path: 'addcircle/:user',
    component: AddcircleComponent,
    canActivate: [AuthGuardService]
  },
 { path: ':user/showcircle/:circle',
    component: ShowcircleComponent,
    canActivate: [AuthGuardService]
  },
  { path: ':user/editcircle/:circle',
    component: EditcircleComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', component: ClienterrorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
