import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiapersComponent } from './diapers/diapers.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DiapersComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiapersRoutingModule { }
