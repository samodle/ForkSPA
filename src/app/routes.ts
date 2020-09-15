import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JobListComponent} from './jobs/job-list/job-list.component';
import {MessagesComponent} from './messages/messages.component';
import {ListsComponent} from './lists/lists.component';
import {AuthGuard} from './_guards/auth.guard';
import {JobDetailComponent} from './jobs/job-detail/job-detail.component';
import {JobDetailResolver} from './_resolvers/job-detail.resolver';
import {JobListResolver} from './_resolvers/job-list.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'jobs', component: JobListComponent, resolve: {users: JobListResolver}},
      {path: 'jobs/:id', component: JobDetailComponent, resolve: {job: JobDetailResolver}},
      {path: 'messages', component: MessagesComponent},
      {path: 'lists', component: ListsComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
  ];
