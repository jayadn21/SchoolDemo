import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DefaultRoutingModule} from './default-routing.module';
import { SharedModule} from '../../../shared/shared.module';
import { ChartModule} from 'angular2-chartjs';
// import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
    ChartModule,
    // DragAndDropModule,
    FormsModule


  ],
  exports: [
    // DragAndDropModule
  ],

  declarations: [DefaultComponent ],
})
export class DefaultModule { }
