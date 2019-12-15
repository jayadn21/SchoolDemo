import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesHeadersComponent } from './fees-headers.component';
import { FeesHeadersRoutingModule } from './fees-headers.rounting.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeesHeadersRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [FeesHeadersComponent]
})
export class FeesHeadersModule { }
