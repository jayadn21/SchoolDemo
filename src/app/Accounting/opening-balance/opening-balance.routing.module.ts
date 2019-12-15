import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningBalanceComponent } from './opening-balance.component';

const routes: Routes = [
  {
    path: '',
    component: OpeningBalanceComponent,
    data: {
      title: 'Opening Balance',
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

export class OpeningBalanceRoutingModule {

}
