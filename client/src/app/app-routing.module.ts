import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'members', component: MemberListComponent,canActivate:[AuthGuard]},
  {path:'members/:id', component: MemberDetailComponent,canActivate:[AuthGuard]},
  {path:'lists', component: ListComponent,canActivate:[AuthGuard]},
  {path:'messages', component: MessagesComponent,canActivate:[AuthGuard]},
  {path:'**', component: HomeComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
