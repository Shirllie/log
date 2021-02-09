import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './login/login.component';
import { UserComponent} from './user/user.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo:'login'},
  {path: 'login',component: LoginComponent},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
