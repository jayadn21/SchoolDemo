import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseRoutingModule } from './expense.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule, ReactiveFormsModule,
    Ng2SmartTableModule
  ],

  declarations: [ExpenseComponent]
})
export class ExpenseModule { }
