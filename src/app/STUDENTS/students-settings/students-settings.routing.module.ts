import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StudentsSettingsComponent } from './students-settings.component';

const routes: Routes = [

  {
    path: '',
    component: StudentsSettingsComponent,
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
export class StudentsSettingsRoutingModule {}
