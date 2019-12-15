import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MarkAttendanceComponent } from './mark-attendance.component';

const routes: Routes = [

  {
    path: '',
    component: MarkAttendanceComponent,
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
export class MarkAttendanceRoutingModule {}
