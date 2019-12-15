import { CommonModule } from '@angular/common';
import { FeesTemplateComponent } from './fees-template.component';
import { FeesHeadersRoutingModule } from './fees-template.routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelloComponent } from './hello.component';

@NgModule({

  imports: [
    CommonModule,
    FeesHeadersRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SmartTableModule,
    // LocalDataSource
  ],
  declarations: [FeesTemplateComponent, HelloComponent]
})
export class FeesTemplateModule { }
