import { RouterModule, Routes } from '@angular/router';
import { SubModulesComponent } from './sub-modules.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path:'',
        component: SubModulesComponent,
        data: {
            title: 'Sub Module',
            status: true
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubModuleRoutingModule{

}