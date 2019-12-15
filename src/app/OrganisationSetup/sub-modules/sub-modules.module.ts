import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubModulesComponent } from './sub-modules.component';
import { SubModuleRoutingModule } from './sub-modules.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    SubModuleRoutingModule,
    SharedModule,
    FormsModule,
    Ng2SmartTableModule,
    NgxSpinnerModule,
  ],
  declarations: [
    SubModulesComponent
  ]
})
export class SubModulesModule { }
