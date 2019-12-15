import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { RemarkComponent } from './remark.component';


const routes: Routes = [

  {
    path: '',
    component: RemarkComponent,
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
export class RemarkRoutingModule {}
