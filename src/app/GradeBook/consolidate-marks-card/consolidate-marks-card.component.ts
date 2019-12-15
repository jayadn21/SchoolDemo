import { Component, OnInit } from '@angular/core';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { Classsection } from 'src/app/shared/Models/classsection';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { ToastrService } from 'ngx-toastr';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consolidate-marks-card',
  templateUrl: './consolidate-marks-card.component.html',
  styleUrls: ['./consolidate-marks-card.component.scss']
})
export class ConsolidateMarksCardComponent implements OnInit {

  accountingyear: AccountingYear[] = Array();
  newclasssection: Classsection[] = Array();
  subjectCombination: SubjectCombination[] = Array();

  constructor( private spinner: NgxSpinnerService,
    private toastr: ToastrService, private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService,
    private _Combination: SubjectCombinationService) { }

  ngOnInit() {
    this.getacademicYear();
    this.getclassSectionMedium();
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
