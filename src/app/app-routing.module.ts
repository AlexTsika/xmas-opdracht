import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenComponent } from './open/open.component';
import { DoneComponent } from './done/done.component';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: OpenComponent},
  {path: 'open', component: OpenComponent},
  {path: 'done', component: DoneComponent},
  {path: 'list-view', component: ListViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
