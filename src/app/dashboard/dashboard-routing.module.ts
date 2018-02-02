import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [
            RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
