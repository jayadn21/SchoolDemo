import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetsComponent } from "./assets.component";





const routes: Routes =[
    {
        path:'',
        component: AssetsComponent,
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
export class AssetsRoutingModule {
}
