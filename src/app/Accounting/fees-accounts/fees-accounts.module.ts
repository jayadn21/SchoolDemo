import { FeesAccountsRoutingModule } from './fees-accounts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesAccountsComponent } from './fees-accounts.component';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    FeesAccountsRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [FeesAccountsComponent]
})
export class FeesAccountsModule { }
