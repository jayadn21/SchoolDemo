import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { IndicativeGradeComponent } from './indicative-grade.component';


const routes: Routes = [

  {
    path: '',
    component: IndicativeGradeComponent,
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
export class IndicativeGradeRoutingModule {}
