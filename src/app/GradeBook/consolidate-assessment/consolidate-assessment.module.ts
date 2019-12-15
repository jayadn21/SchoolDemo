import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolidateAssessmentRoutingModule } from './consolidate-assessment.routing.module';
import { ConsolidateAssessmentComponent } from './consolidate-assessment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UiSwitchModule } from 'ng2-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    ConsolidateAssessmentRoutingModule,
    SharedModule, FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    UiSwitchModule,
  ],
  declarations: [ConsolidateAssessmentComponent]
})
export class ConsolidateAssessmentModule { }
