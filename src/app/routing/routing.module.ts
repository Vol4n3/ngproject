import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../page/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../page/login/login.component';
import {ForgotComponent} from '../page/forgot/forgot.component';
import {ProjectsComponent} from '../page/projects/projects.component';
import {NotFoundComponent} from '../page/not-found/not-found.component';
import {ProjectComponent} from '../page/project/project.component';

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
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'project/:id', component: ProjectComponent, pathMatch: 'full'
  },

  {
    path: '404', component: NotFoundComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '404', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {
}
