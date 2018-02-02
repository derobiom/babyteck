import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiapersRoutingModule } from './diapers-routing.module';
import { DiapersComponent } from './diapers/diapers.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DiapersRoutingModule,
    SharedModule
  ],
  declarations: [DiapersComponent]
})
export class DiapersModule { }
