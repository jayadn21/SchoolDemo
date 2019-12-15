import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportSetupComponent } from "./report-setup.component";





const routes: Routes =[
    {
        path:'',
        component: ReportSetupComponent,
        data: {
             title: 'ReportSetup',
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

export class ReportSetupRoutingModule{

}