import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalTransactionRoutingModule } from './internal-transaction.routing.module';
import { InternalTransactionComponent } from './internal-transaction.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InternalTransactionRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [InternalTransactionComponent]
})
export class InternalTransactionModule { }
