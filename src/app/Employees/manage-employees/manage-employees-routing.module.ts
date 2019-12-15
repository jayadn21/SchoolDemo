import { ManageEmployeesComponent } from './manage-employees.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ManageEmployeesComponent,
    data: {
      title: 'Manage Employees',
      status: true
    },
    },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEmployeesRoutingModule {}
