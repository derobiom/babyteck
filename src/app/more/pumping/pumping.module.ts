import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PumpingRoutingModule } from './pumping-routing.module';
import { PumpingComponent } from './pumping/pumping.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PumpingRoutingModule,
    SharedModule
  ],
  declarations: [PumpingComponent]
})
export class PumpingModule { }
