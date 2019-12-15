import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/service/assessment.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Assessment } from 'src/app/shared/Models/Assessment';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { Classsection } from 'src/app/shared/Models/classsection';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grade-book',
  templateUrl: './grade-book.component.html',
  styleUrls: ['./grade-book.component.scss']
})
export class GradeBookComponent implements OnInit {

  constructor(private _Assessment: AssessmentService, private _Combination: SubjectCombinationService,
    private toastr: ToastrService, private spinner: NgxSpinnerService, private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService) { }

  Assessments: Assessment[] = Array();
  assessment = new Assessment();
  assessmentGrid: Assessment[] = Array();
  accountingyear: AccountingYear[] = Array();
  newclasssection: Classsection[] = Array();
  subjectCombination: SubjectCombination[] = Array();

  ngOnInit() {
    this.getacademicYear();
    this.getclassSectionMedium();
    this.getassessments();
    this.getsubjectCombinations();
  }

  getsubjectCombinations() {
    this._Combination.getsubjectCombinations()
      .subscribe(data => {
        if (data.success) {
          this.subjectCombination = data.data[0];
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

  getacademicYear() {
    this._AcademicYear.getaccountingyearsDetails()
      .subscribe(data => {
        if (data.success) {
          this.accountingyear = data.data[0];
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

}
