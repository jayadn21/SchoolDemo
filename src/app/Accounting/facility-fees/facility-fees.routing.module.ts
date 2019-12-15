import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FacilityFeesComponent } from "./facility-fees.component";





const routes: Routes =[
    {
        path:'',
        component: FacilityFeesComponent,
        data: {
             title: 'Facility Fees',
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

export class FacilityFeesRoutingModule{

}