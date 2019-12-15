import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingYearRoutingModule } from './accounting-year-routing.module';
import { AccountingYearComponent } from './accounting-year.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';

@NgModule({
  imports: [
    CommonModule,
    AccountingYearRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [AccountingYearComponent]
})
export class AccountingYearModule { }
