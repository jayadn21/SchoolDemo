import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticalClassesRoutingModule } from './practical-classes.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PracticalClassesComponent } from './practical-classes.component';

@NgModule({
  imports: [
    CommonModule,
    PracticalClassesRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
  ],
  declarations: [PracticalClassesComponent]
})
export class PracticalClassesModule { }
