import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import { GradesRoutingModule } from './grades.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GradesRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [GradesComponent]
})
export class GradesModule { }
