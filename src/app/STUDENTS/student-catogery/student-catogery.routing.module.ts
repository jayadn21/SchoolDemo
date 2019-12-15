import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StudentCatogeryComponent } from './student-catogery.component';

const routes: Routes = [

  {
    path: '',
    component: StudentCatogeryComponent,
    data: {
      title: 'Mark Attendance',
      status: true
    },
    },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCatogeryRoutingModule {}
