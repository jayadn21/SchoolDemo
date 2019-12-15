import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolidateMarksCardComponent } from './consolidate-marks-card.component';
import { ConsolidateMarksCardRoutingModule } from './consolidate-marks-card.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ConsolidateMarksCardRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [ConsolidateMarksCardComponent]
})
export class ConsolidateMarksCardModule { }
