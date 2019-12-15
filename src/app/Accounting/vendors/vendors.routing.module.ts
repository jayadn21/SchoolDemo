import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendorsComponent } from "./vendors.component";





const routes: Routes =[
    {
        path:'',
        component: VendorsComponent,
        data: {
             title: 'Vendors',
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

export class VendorsRoutingModule{

}