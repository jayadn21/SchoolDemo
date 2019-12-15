import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routning.module';
import { CalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,





  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }
