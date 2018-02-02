import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feedings', loadChildren: './feedings/feedings.module#FeedingsModule'},
  { path: 'sleep', loadChildren: './sleep/sleep.module#SleepModule'},
  { path: 'weight', loadChildren: './weight/weight.module#WeightModule'},
  { path: 'more', loadChildren: './more/more.module#MoreModule'},
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
