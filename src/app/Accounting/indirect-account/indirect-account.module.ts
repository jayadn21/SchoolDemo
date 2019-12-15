import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndirectAccountRoutingModule } from './indirect-account.rounting.module';
import { IndirectAccountComponent } from './indirect-account.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IndirectAccountRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [IndirectAccountComponent]
})
export class IndirectAccountModule { }
