import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {LoginComponent} from './page/login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './page/home/home.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ForgotComponent} from './page/forgot/forgot.component';
import {RoutingModule} from './routing/routing.module';
import { AuthFormDirective } from './directive/auth-form.directive';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotComponent,
    AuthFormDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
