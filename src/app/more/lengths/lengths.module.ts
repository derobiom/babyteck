import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LengthsRoutingModule } from './lengths-routing.module';
import { LengthsComponent } from './lengths/lengths.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LengthsRoutingModule,
    SharedModule
  ],
  declarations: [LengthsComponent]
})
export class LengthsModule { }
