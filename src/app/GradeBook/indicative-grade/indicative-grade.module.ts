import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicativeGradeRoutingModule } from './indicative-grade.routing.module';
import { IndicativeGradeComponent } from './indicative-grade.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IndicativeGradeRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [IndicativeGradeComponent]
})
export class IndicativeGradeModule { }
