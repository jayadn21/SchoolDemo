import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseAccountComponent } from './expense-account.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseAccountComponent,
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

export class ExpenseAccountRoutingModule {

}
