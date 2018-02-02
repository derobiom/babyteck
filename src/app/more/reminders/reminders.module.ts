import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindersRoutingModule } from './reminders-routing.module';
import { RemindersComponent } from './reminders/reminders.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RemindersRoutingModule,
    SharedModule
  ],
  declarations: [RemindersComponent]
})
export class RemindersModule { }
