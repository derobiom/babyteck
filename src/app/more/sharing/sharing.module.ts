import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharingRoutingModule } from './sharing-routing.module';
import { SharingComponent } from './sharing/sharing.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharingRoutingModule,
    SharedModule
  ],
  declarations: [SharingComponent]
})
export class SharingModule { }
