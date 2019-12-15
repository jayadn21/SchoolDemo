import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubjectCombinationComponent } from './subject-combination.component';

const routes: Routes = [
    {
        path: '',
        component: SubjectCombinationComponent,
        data: {
            title: 'Subject Combination',
            status: true
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubjectCombinationRoutingModule {

}
