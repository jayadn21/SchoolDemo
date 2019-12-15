import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportSetupComponent } from './report-setup.component';
import { ReportSetupRoutingModule } from './report-setup.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UiSwitchModule } from 'ng2-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    ReportSetupRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    UiSwitchModule
  ],
  declarations: [ReportSetupComponent]
})
export class ReportSetupModule { }
