import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemarkRoutingModule } from './remark.routing.module';
import { RemarkComponent } from './remark.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RemarkRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [RemarkComponent]
})
export class RemarkModule { }
