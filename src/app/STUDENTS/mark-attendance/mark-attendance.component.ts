 import { Student } from './../students-database/student';
import { Component, OnInit } from '@angular/core';
import { MarkAttendanceService } from 'src/app/service/mark-attendance.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MarkAttendance } from 'src/app/shared/Models/mark-attendance';
import { Institution } from 'src/app/theme/simple-page/Institution';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { Classsection } from 'src/app/shared/Models/classsection';
import { Attendance } from 'src/app/shared/Models/Attendance';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent implements OnInit {

  constructor(private _CurrentClassSectionMedium: MarkAttendanceService,
    private spinner: NgxSpinnerService, private toastr: ToastrService,
    private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService,
    public parserFormatter: NgbDateParserFormatter) { }

  Buttontext = 'Submit';
  student: MarkAttendance[] = Array();
  markAttendanceGrid: MarkAttendance[] = Array();
  markAttendance = new MarkAttendance();
  accountingyear: AccountingYear[] = Array();
  newclasssection: Classsection[] = Array();
  paramData = {
    AcademicYearId: '',
    ClassSectionMediumId: '',
  };

  attendanceData = {
    IsHoliday: false,
    AttendanceDate: '',
    studentArray: Attendance[1] = Array(),
  };
  data: Institution[] = Array();
  items: MarkAttendance[] = Array();
  StudentAttendanceArr: Attendance[] = Array();
  selectedDate: NgbDateStruct;

  arr1 = [
    { Id: 1, Name: 'markAttendanceGrid', ModuleId: 0, checked: false },
    { Id: 2, Name: 'MarkattendenceList', ModuleId: 0, checked: true },
    { Id: 3, Name: 'hello3', ModuleId: 1, checked: false },
    { Id: 4, Name: 'hello4', ModuleId: 0, checked: true },
    { Id: 5, Name: 'hello5', ModuleId: 4, checked: false },
    { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
    { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
    { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
  ];

  ngOnInit() {
    this.getclassSectionMedium();
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

  getclassSectionMedium() {
    this._ClassSectionMedium.getClasssectionDetails()
      .subscribe(data => {
        if (data.success) {
          this.newclasssection = data.data[0];
        }
      });
  }
  getStudentSelectAttendance() {
    console.log('Attendance Mark');
    this.spinner.show();
    this._CurrentClassSectionMedium.getStudentSelectForAttendance(this.paramData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success from Attendance Mark!!');
          this.StudentAttendanceArr = data.data[0];
          console.log(this.StudentAttendanceArr);
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }


  saveMarkAttendance() {
    this.attendanceData.AttendanceDate = this.parserFormatter.format(this.selectedDate);
    this.attendanceData.studentArray = this.StudentAttendanceArr;
    // this.spinner.show();
    console.log('this.attendanceData -> ');
    console.log(this.attendanceData);
    this._CurrentClassSectionMedium.setAttendanceInsert(this.attendanceData)
    // this._CurrentClassSectionMedium.setApplicationform(this.attendanceData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success from Attendance Mark!!');
          this.StudentAttendanceArr = data.data[0];
          console.log(this.StudentAttendanceArr);
          this.getStudentSelectAttendance();
        //  this.spinner.hide();
        } else {
           this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  cleardata() {
    this.markAttendance = new MarkAttendance;
  }
  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.student = event.data;
      this.Buttontext = 'Submit';
    }
  }

}
