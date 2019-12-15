import { FeesHeadersComponent } from './fees-headers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FeesHeadersComponent,
    data: {
      title: 'Fees Headers',
      icon: 'ti-bar-chart-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeesHeadersRoutingModule {

}
