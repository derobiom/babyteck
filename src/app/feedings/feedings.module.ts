import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedingsRoutingModule } from './feedings-routing.module';
import { FeedingsComponent } from './feedings/feedings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeedingsRoutingModule,
    SharedModule
  ],
  declarations: [FeedingsComponent]
})
export class FeedingsModule { }
