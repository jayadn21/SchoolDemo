import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionTicketComponent } from './admission-ticket.component';
import { AdmissionTicketRoutingModule } from './admission-ticket.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    AdmissionTicketRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UiSwitchModule,
    NgxSpinnerModule,
    EditorModule
  ],
  declarations: [AdmissionTicketComponent]
})
export class AdmissionTicketModule { }
