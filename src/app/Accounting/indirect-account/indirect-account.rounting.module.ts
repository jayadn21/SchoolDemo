import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndirectAccountComponent } from './indirect-account.component';

const routes: Routes = [
  {
    path: '',
    component: IndirectAccountComponent,
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

export class IndirectAccountRoutingModule {

}
