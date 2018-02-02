import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SleepRoutingModule } from './sleep-routing.module';
import { SleepComponent } from './sleep/sleep.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SleepRoutingModule,
    SharedModule
  ],
  declarations: [SleepComponent]
})
export class SleepModule { }
