import { AssetsComponent } from './assets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './AssetsRoutingModule';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [AssetsComponent]
})
export class AssetsModule { }
