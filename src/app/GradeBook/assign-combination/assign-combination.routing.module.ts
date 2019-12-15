import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssignCombinationComponent } from './assign-combination.component';

const routes: Routes = [
  {
    path: '',
    component: AssignCombinationComponent,
    data: {
      title: 'Assign Combination',
      status: true
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignCombinationRoutingModule {}
