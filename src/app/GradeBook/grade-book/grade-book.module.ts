import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeBookComponent } from './grade-book.component';
import { GradeBookRoutingModule } from './grade-book.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    GradeBookRoutingModule,
    SharedModule, FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  declarations: [GradeBookComponent]
})
export class GradeBookModule { }
