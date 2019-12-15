import { Component, OnInit } from '@angular/core';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { ToastrService } from 'ngx-toastr';
import { AssessmentService } from 'src/app/service/assessment.service';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { Assessment } from 'src/app/shared/Models/Assessment';
import { Classsection } from 'src/app/shared/Models/classsection';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';

@Component({
  selector: 'app-indicative-grade',
  templateUrl: './indicative-grade.component.html',
  styleUrls: ['./indicative-grade.component.scss']
})
export class IndicativeGradeComponent implements OnInit {

  constructor( private _Assessment: AssessmentService,
    private toastr: ToastrService, private spinner: NgxSpinnerService, private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService) { }


  Assessments: Assessment[] = Array();
  newclasssection: Classsection[] = Array();
  accountingyear: AccountingYear[] = Array();

  ngOnInit() {
    this.getclassSectionMedium();
    this.getassessments();
    this.getacademicYear();

  }
  getacademicYear() {
    this._AcademicYear.getaccountingyearsDetails()
      .subscribe(data => {
        if (data.success) {
          this.accountingyear = data.data[0];
        }
      });
  }

  getassessments() {
    this._Assessment.getAssessmentBook()
      .subscribe(data => {
        if (data.success) {
          this.Assessments = data.data[0];
        }
      });
  }

  getclassSectionMedium() {
    this._ClassSectionMedium.getClasssectionDetails()
      .subscribe(data => {
        if (data.success) {
          this.newclasssection = data.data[0];
        }
      });
  }

    // tslint:disable-next-line: member-ordering
    settings = {
      delete: {
        confirmDelete: true,
        deleteButtonContent: '<i class="fa fa-trash"></i>',
        saveButtonContent: 'save',
        cancelButtonContent: 'cancel'
      },
      add: {
        confirmCreate: true,
      },
      actions: {
        add: false,
        edit: false,
        delete: true,
        custom: [
          { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
        ],
      },
      columns: {
        Batch: {
          title: 'batch',
        },
        Class: {
          title: 'Class',
        },
        Assessment: {
          title: 'Assessment',
        },
      },
    };

    onDeleteConfirm(event) {
      console.log('Delete Event In Console');
      console.log(event);
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }

    onCreateConfirm(event) {
      console.log('Create Event In Console');
      console.log(event);
    }

    onSaveConfirm(event) {
      console.log('Edit Event In Console');
      console.log(event);
    }
}
