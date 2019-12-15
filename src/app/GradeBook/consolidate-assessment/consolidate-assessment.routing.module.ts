import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ConsolidateAssessmentComponent } from './consolidate-assessment.component';

const routes: Routes = [

  {
    path: '',
    component: ConsolidateAssessmentComponent,
    data: {
      title: 'Grade Book',
      status: true
    },
    },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolidateAssessmentRoutingModule {}
