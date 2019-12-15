import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceSetupComponent } from './attendance-setup.component';
import { AttendanceSetupRoutingModule } from './attendance-setup.routing.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartModule } from 'angular2-chartjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';

@NgModule({
  imports: [
    CommonModule,
    AttendanceSetupRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    Ng2GoogleChartsModule,
    ChartModule

  ],
  declarations: [AttendanceSetupComponent]
})
export class AttendanceSetupModule { }
