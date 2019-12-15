import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ConsolidateMarksCardComponent } from './consolidate-marks-card.component';


const routes: Routes = [

  {
    path: '',
    component: ConsolidateMarksCardComponent,
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
export class ConsolidateMarksCardRoutingModule {}
