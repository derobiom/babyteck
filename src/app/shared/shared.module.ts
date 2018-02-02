import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
  MatTooltipModule, MatExpansionModule, MatListModule, MatTableModule, 
  MatButtonToggleModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    NgbCarouselModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatButtonToggleModule,
    MatGridListModule
  ],
  declarations: [
            PageNotFoundComponent
  ],
  exports: [
            PageNotFoundComponent,
            MatIconModule,
            MatButtonModule,
            FlexLayoutModule,
            MatCardModule,
            NgbCarouselModule,
            MatMenuModule,
            MatToolbarModule,
            MatTooltipModule,
            MatExpansionModule,
            MatListModule,
            MatTableModule,
            MatButtonToggleModule,
            MatGridListModule
  ], 
})
export class SharedModule { }
