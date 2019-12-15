import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserProfileComponent } from './create-user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserProfileRoutingModule } from './create-user-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'ng2-ui-switch';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    CreateUserProfileRoutingModule,
    SharedModule,
    FormsModule,
    Ng2SmartTableModule,
    RouterModule,
    ReactiveFormsModule,
    UiSwitchModule,
    ModalSharedModule,
    NgxSpinnerModule,
    AngularMultiSelectModule, TreeModule

    
    
  ],
  declarations: [
    CreateUserProfileComponent,
  ]
})
export class CreateUserProfileModule { }
