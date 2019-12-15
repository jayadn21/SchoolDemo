import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GradesComponent } from './grades.component';


const routes: Routes = [

  {
    path: '',
    component: GradesComponent,
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
export class GradesRoutingModule {}
