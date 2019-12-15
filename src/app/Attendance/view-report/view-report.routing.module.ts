import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewReportComponent } from './view-report.component';

const routes: Routes = [
    {
        path: '',
        component: ViewReportComponent,
        data: {
             title: 'Menu',
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

export class ViewReportRoutingModule {

}
