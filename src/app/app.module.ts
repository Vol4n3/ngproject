import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import { LoginComponent } from './page/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './service/auth/auth.service';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
