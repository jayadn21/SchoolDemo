import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningBalanceRoutingModule } from './opening-balance.routing.module';
import { OpeningBalanceComponent } from './opening-balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OpeningBalanceRoutingModule,
    SharedModule,
    ModalSharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OpeningBalanceComponent]
})
export class OpeningBalanceModule { }
