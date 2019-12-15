import { AdmissionEnquiryComponent } from './admission-enquiry.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: AdmissionEnquiryComponent,
    data: {
      title: 'Admission Enquiry',
      status: true
    },
    },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionEnquiryRoutingModule {}
