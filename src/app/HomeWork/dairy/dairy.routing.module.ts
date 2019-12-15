import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DairyComponent } from './dairy.component';




const routes: Routes = [
    {
        path: '',
        component: DairyComponent,
        data: {
             title: 'Dairy',
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

export class DairyRoutingModule {

}
