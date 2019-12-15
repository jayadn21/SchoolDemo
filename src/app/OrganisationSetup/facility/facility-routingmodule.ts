import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FacilityComponent } from "./facility.component";





const routes: Routes =[
    {
        path:'',
        component: FacilityComponent,
        data: {
             title: 'Fees Accounts',
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

export class FacilityRoutingModule{

}