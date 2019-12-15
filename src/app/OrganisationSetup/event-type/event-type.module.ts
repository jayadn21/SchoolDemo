import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTypeComponent } from './event-type.component';
import { EventTypeRoutingModule } from './event-type.routing.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    EventTypeRoutingModule,
    SharedModule,
    FormsModule,
    ColorPickerModule,
    Ng2SmartTableModule,
    NgxSpinnerModule,

  ],
  declarations: [EventTypeComponent,
  ]
})
export class EventTypeModule { }
