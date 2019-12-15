import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCombinationMappComponent } from './subject-combination-mapp.component';
import { SubjectCombinationMappRoutingModule } from './subject-combination.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    SubjectCombinationMappRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    UiSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [SubjectCombinationMappComponent]
})
export class SubjectCombinationMappModule { }
