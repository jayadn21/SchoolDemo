import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SubjectPageComponent } from './subject-page.component';

const routes: Routes = [

  {
    path: '',
    component: SubjectPageComponent,
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
export class SubjectPageRoutingModule {}
