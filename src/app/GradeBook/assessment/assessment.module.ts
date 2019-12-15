import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentRoutingModule } from './assessment.routing.module';
import { AssessmentComponent } from './assessment.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [AssessmentComponent]
})
export class AssessmentModule { }
