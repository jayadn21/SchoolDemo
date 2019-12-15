import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClassComponent } from './class.component';

const routes: Routes = [
    {
        path: '',
        component: ClassComponent,
        data: {
            title: 'class',
            status: true
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClassRoutingModule{

}
