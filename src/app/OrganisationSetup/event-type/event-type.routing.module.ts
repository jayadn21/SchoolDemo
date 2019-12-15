import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventTypeComponent } from './event-type.component';

const routes: Routes = [
    {
        path: '',
        component: EventTypeComponent,
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

export class EventTypeRoutingModule {

}
