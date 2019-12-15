import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountingYearComponent} from "./accounting-year.component";





const routes: Routes =[
    {
        path:'',
        component: AccountingYearComponent,
        data: {
             title: 'Accounting Year',
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

export class AccountingYearRoutingModule{

}