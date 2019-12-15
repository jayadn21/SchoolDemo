import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartsComponent } from "./charts.component";

const routes: Routes =[
    {
        path:'',
        component: ChartsComponent,
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
export class ChartsRoutingModule {
}
