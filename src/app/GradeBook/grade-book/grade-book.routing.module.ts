import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GradeBookComponent } from './grade-book.component';

const routes: Routes = [

  {
    path: '',
    component: GradeBookComponent,
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
export class GradeBookRoutingModule {}
