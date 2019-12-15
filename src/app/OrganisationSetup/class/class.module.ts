import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClassComponent } from './class.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassRoutingModule } from './class-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';

@NgModule({
  imports: [
    CommonModule,
    ClassRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
    FormsModule,
    NgxSpinnerModule,
    ModalSharedModule


  ],
  declarations: [
    ClassComponent
  ]

})
export class ClassModule { }
