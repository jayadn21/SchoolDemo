import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectPageRoutingModule } from './subject-page.routing.module';
import { SubjectPageComponent } from './subject-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    SubjectPageRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [SubjectPageComponent]
})
export class SubjectPageModule { }
