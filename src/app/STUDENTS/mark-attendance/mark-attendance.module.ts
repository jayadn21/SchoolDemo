import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkAttendanceRoutingModule } from './mark-attendance.routing.module';
import { MarkAttendanceComponent } from './mark-attendance.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UiSwitchModule } from 'ng2-ui-switch';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MarkAttendanceRoutingModule,
    SharedModule,
    UiSwitchModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    ModalSharedModule,
    NgxSpinnerModule
  ],
  declarations: [MarkAttendanceComponent]
})
export class MarkAttendanceModule { }
