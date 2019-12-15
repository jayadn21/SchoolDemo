import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SubjectCombinationMappComponent } from './subject-combination-mapp.component';

const routes: Routes = [

  {
    path: '',
    component: SubjectCombinationMappComponent,
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
export class SubjectCombinationMappRoutingModule {}
