import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFieldsComponent } from './custom-fields.component';
import { CustomFieldsRoutingModule } from './custom-fields.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    CustomFieldsRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    UiSwitchModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [CustomFieldsComponent]
})
export class CustomFieldsModule { }
