import { FacilityRoutingModule } from './facility-routingmodule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityComponent } from './facility.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    FacilityRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [FacilityComponent]
})
export class FacilityModule { }
