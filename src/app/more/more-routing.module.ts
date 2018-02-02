import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreComponent } from './more/more.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MoreComponent },
  { path: 'devices', loadChildren: './devices/devices.module#DevicesModule'},
  { path: 'diapers', loadChildren: './diapers/diapers.module#DiapersModule'},
  { path: 'lengths', loadChildren: './lengths/lengths.module#LengthsModule'},
  { path: 'persons', loadChildren: './persons/persons.module#PersonsModule'},
  { path: 'notes', loadChildren: './notes/notes.module#NotesModule'},
  { path: 'photos', loadChildren: './photos/photos.module#PhotosModule'},
  { path: 'pumping', loadChildren: './pumping/pumping.module#PumpingModule'},
  { path: 'reminders', loadChildren: './reminders/reminders.module#RemindersModule'},
  { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
  { path: 'sharing', loadChildren: './sharing/sharing.module#SharingModule'},
  { path: 'stats', loadChildren: './stats/stats.module#StatsModule'},
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class MoreRoutingModule { }
