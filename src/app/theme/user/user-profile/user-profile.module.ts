import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserProfileComponent } from './user-profile.component';
import {UserProfileRoutingModule} from './user-profile-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserProfileRoutingModule,
    SharedModule,
    NgxDatatableModule,
    NgxSpinnerModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
