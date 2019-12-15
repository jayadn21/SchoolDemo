import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense.component';

const routes: Routes = [
    {
        path: '',
        component: ExpenseComponent,
        data: {
             title: 'Charts',
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
export class ExpenseRoutingModule {
}
