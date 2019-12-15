import { SharedModule } from 'src/app/shared/shared.module';
import { FeesManagementComponent } from './fees-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesManagementRoutingModule } from './fees-management.routing.module';
import {ChartModule} from 'angular2-chartjs';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  imports: [
    CommonModule,
    FeesManagementRoutingModule,
    SharedModule,
    ChartModule,
    Ng2GoogleChartsModule
  ],
  declarations: [FeesManagementComponent]
})
export class FeesManagementModule { }
