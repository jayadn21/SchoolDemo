import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AdmissionTicketComponent } from './admission-ticket.component';

const routes: Routes = [

  {
    path: '',
    component: AdmissionTicketComponent,
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
export class AdmissionTicketRoutingModule {}
