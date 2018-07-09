import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SampleComponent } from './sample/sample.component';
import { FireConnectService } from './services/fire-connect.service';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { routes } from './app.routes';
import { HomeComponent } from './workspace/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LayoutComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    NgxChartsModule
  ],
  providers: [FireConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
