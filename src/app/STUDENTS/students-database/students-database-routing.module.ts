import { StudentsDatabaseComponent } from './students-database.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: StudentsDatabaseComponent,
    data: {
      title: 'Students Database',
      status: true
    },
    },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsDatabaseRoutingModule {}
