import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PumpingComponent } from './pumping/pumping.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PumpingComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PumpingRoutingModule { }
