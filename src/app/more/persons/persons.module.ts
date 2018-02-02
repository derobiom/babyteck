import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons/persons.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule,
    SharedModule
  ],
  declarations: [PersonsComponent]
})
export class PersonsModule { }
