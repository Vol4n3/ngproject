import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../page/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../page/login/login.component';
import {ForgotComponent} from '../page/forgot/forgot.component';
const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'forgot', component: ForgotComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports : [RouterModule]
})
export class RoutingModule { }
