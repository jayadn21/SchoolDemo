import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeesAccountsComponent } from "./fees-accounts.component";





const routes: Routes =[
    {
        path:'',
        component: FeesAccountsComponent,
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

export class FeesAccountsRoutingModule{

}