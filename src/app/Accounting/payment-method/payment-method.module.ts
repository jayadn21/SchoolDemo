import { PaymentMethodComponent } from './payment-method.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesManagementRoutingModule } from './payment-methos.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeesManagementRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule

  ],
  declarations: [PaymentMethodComponent]
})
export class PaymentMethodModule { }
