import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCatogeryRoutingModule } from './student-catogery.routing.module';
import { StudentCatogeryComponent } from './student-catogery.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StudentCatogeryRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [StudentCatogeryComponent]
})
export class StudentCatogeryModule { }
