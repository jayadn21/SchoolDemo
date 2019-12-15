import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeesComponent } from './manage-employees.component';
import { ManageEmployeesRoutingModule } from './manage-employees-routing.module';
import { UiSwitchModule } from 'ng2-ui-switch';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TreeModule} from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ManageEmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    SharedModule,
    Ng2SmartTableModule,
    ModalSharedModule,
    NgxSpinnerModule,
    AngularMultiSelectModule, TreeModule


  ],
  declarations: [ManageEmployeesComponent  ]
})
export class ManageEmployeesModule { }
