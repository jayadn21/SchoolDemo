import { DairyComponent } from './dairy.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DairyRoutingModule } from './dairy.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    DairyRoutingModule,
    SharedModule,
    ChartModule,
    Ng2GoogleChartsModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    AngularMultiSelectModule,
    TreeModule


  ],
  declarations: [DairyComponent]
})
export class DairyModule { }
