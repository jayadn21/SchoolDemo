import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignCombinationRoutingModule } from './assign-combination.routing.module';
import { AssignCombinationComponent } from './assign-combination.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    AssignCombinationRoutingModule,
    SharedModule, FormsModule,
    UiSwitchModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  declarations: [AssignCombinationComponent]
})
export class AssignCombinationModule { }
