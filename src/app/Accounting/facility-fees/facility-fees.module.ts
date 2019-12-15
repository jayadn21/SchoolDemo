import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FacilityFeesComponent } from './facility-fees.component';
import { FacilityFeesRoutingModule } from './facility-fees.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FacilityFeesRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [FacilityFeesComponent]
})
export class FacilityFeesModule { }
