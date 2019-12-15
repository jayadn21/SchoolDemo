import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsDatabaseComponent } from './students-database.component';
import { StudentsDatabaseRoutingModule } from './students-database-routing.module';
import { UiSwitchModule } from 'ng2-ui-switch';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSharedModule } from 'src/app/shared/modal/ModalShared.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StudentsDatabaseRoutingModule,
    SharedModule,
    UiSwitchModule,
    Ng2SmartTableModule,
    Ng2GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalSharedModule,
    NgxSpinnerModule
  ],
  declarations: [StudentsDatabaseComponent]

})
export class StudentsDatabaseModule { }
