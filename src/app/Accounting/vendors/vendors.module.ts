import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsRoutingModule } from './vendors.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VendorsComponent } from './vendors.component';

@NgModule({
  imports: [
    CommonModule,
    VendorsRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [VendorsComponent]
})
export class VendorsModule { }
