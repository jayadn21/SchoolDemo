import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewReportRoutingModule } from './view-report.routing.module';
import { ViewReportComponent } from './view-report.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    ViewReportRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    UiSwitchModule
  ],
  declarations: [ViewReportComponent]
})
export class ViewReportModule { }
