import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartModule } from 'angular2-chartjs';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    ChartModule,
    Ng2GoogleChartsModule

  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
