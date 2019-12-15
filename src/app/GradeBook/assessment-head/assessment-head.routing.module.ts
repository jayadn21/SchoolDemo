import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AssessmentHeadComponent } from './assessment-head.component';

const routes: Routes = [

  {
    path: '',
    component: AssessmentHeadComponent,
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
export class AssessmentHeadRoutingModule {}
