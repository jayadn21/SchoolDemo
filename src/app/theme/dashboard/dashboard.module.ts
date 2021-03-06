import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: []
})
export class DashboardModule { }
