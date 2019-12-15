import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AssessmentComponent } from './assessment.component';

const routes: Routes = [

  {
    path: '',
    component: AssessmentComponent,
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
export class AssessmentRoutingModule {}
