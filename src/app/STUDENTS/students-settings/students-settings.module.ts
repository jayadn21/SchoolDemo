import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsSettingsComponent } from './students-settings.component';
import { StudentsSettingsRoutingModule } from './students-settings.routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UiSwitchModule } from 'ng2-ui-switch';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    StudentsSettingsRoutingModule,
    RouterModule,
    SharedModule,
    UiSwitchModule,
    Ng2SmartTableModule,
    Ng2GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalSharedModule,
    NgxSpinnerModule,
    ChartModule,
  ],
  declarations: [StudentsSettingsComponent]
})
export class StudentsSettingsModule { }
