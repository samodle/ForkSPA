import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { JobCardComponent } from './jobs/job-card/job-card.component';
import {JwtModule} from '@auth0/angular-jwt';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {JobDetailResolver} from './_resolvers/job-detail.resolver';
import {JobListResolver} from './_resolvers/job-list.resolver';

export function tokenGetter(){
  return localStorage.getItem('token')
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    JobListComponent,
    ListsComponent,
    MessagesComponent,
    JobCardComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    JobDetailResolver,
    JobListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
