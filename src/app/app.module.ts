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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatStepperModule, MatTableModule, MatTooltipModule
} from '@angular/material';
import {ProjectsComponent} from './page/projects/projects.component';
import {NavMenuComponent} from './component/nav-menu/nav-menu.component';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {MainDialogComponent} from './dialog/main-dialog/main-dialog.component';
import {FormsModule} from '@angular/forms';
import {ProjectFormComponent} from './component/form/project-form/project-form.component';
import {ProjectAlertComponent} from './component/project-alert/project-alert.component';
import {ProjectComponent} from './page/project/project.component';
import {ProjectsTableComponent} from './component/table/projects-table/projects-table.component';
import {LocationsTableComponent} from './component/table/locations-table/locations-table.component';

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
    ProjectsComponent,
    NavMenuComponent,
    NotFoundComponent,
    MainDialogComponent,
    ProjectFormComponent,
    ProjectAlertComponent,
    ProjectComponent,
    ProjectsTableComponent,
    LocationsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule,
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
  entryComponents: [MainDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
