import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseHeadersComponent } from './expense-headers.component';
import { ExpenseHeadersRoutingModule } from './expense-headers.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ExpenseHeadersRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [ExpenseHeadersComponent]
})
export class ExpenseHeadersModule { }
