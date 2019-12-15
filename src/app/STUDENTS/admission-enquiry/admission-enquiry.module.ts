// import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdmissionEnquiryComponent } from './admission-enquiry.component';
import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionEnquiryRoutingModule } from './admission-enquiry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdmissionEnquiryRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UiSwitchModule,
    AngularMultiSelectModule,
    ModalSharedModule,
    NgxSpinnerModule,
    NgbModule,


  ],
  declarations: [AdmissionEnquiryComponent],

})


export class AdmissionEnquiryModule {}
