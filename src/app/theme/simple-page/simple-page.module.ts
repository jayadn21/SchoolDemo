import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePageComponent } from './simple-page.component';
import {SimplePageRoutingModule} from './simple-page-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';
import { InstituteService } from 'src/app/service/institute.service';
import { SystemsetupService } from 'src/app/service/systemsetup.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    SimplePageRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    UiSwitchModule,
    HttpModule,
    Ng2SmartTableModule,
    NgxSpinnerModule


  ],

  declarations: [SimplePageComponent ],

  providers: [InstituteService, SystemsetupService],
})
export class SimplePageModule { }
