import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CustomFieldsComponent } from './custom-fields.component';

const routes: Routes = [

  {
    path: '',
    component: CustomFieldsComponent,
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
export class CustomFieldsRoutingModule {}
