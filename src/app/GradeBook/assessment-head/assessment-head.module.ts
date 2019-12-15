import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentHeadRoutingModule } from './assessment-head.routing.module';
import { AssessmentHeadComponent } from './assessment-head.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AssessmentHeadRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [AssessmentHeadComponent]
})
export class AssessmentHeadModule { }
