import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsRoutingModule } from './ChartsRoutingModule';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [ChartsComponent]
})
export class ChartsModule { }
