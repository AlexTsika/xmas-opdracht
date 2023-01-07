import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenComponent } from './open/open.component';
import { DoneComponent } from './done/done.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: OpenComponent},
  {path: 'open', component: OpenComponent},
  {path: 'done', component: DoneComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
