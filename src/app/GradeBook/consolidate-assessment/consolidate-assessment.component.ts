import { Component, OnInit } from '@angular/core';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { Assessment } from 'src/app/shared/Models/Assessment';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { Classsection } from 'src/app/shared/Models/classsection';
import { AssessmentService } from 'src/app/service/assessment.service';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consolidate-assessment',
  templateUrl: './consolidate-assessment.component.html',
  styleUrls: ['./consolidate-assessment.component.scss']
})
export class ConsolidateAssessmentComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService, private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService, private _Assessment: AssessmentService,
    private _Combination: SubjectCombinationService) { }

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
          this.assessmentGrid = data.data[0];
          console.log(this.assessmentGrid);
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
