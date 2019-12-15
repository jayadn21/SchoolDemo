import { CreateUserProfileComponent } from './create-user-profile.component';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path:'',
        component: CreateUserProfileComponent,
        data: {
            title: 'User profile',
            status: true
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CreateUserProfileRoutingModule{

}