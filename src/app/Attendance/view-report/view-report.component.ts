import { Component, OnInit } from '@angular/core';
import { AttendanceViewReportService } from 'src/app/service/attendance-view-report.service';
import { ViewReport } from 'src/app/shared/Models/view-report';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { Classsection } from 'src/app/shared/Models/classsection';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit {

  constructor(private _attendanceViewReport: AttendanceViewReportService,
    private spinner: NgxSpinnerService, private toastr: ToastrService,
    private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService) { }


  AttendanceviewReport: ViewReport[] = Array();
  viewreport = new ViewReport();
  accountingyear: AccountingYear[] = Array();
  newclasssection: Classsection[] = Array();
  paramData = {
    AcademicYearId: '',
    ClassSectionMediumId: '',
    AttendanceMonth: '',
    reportViewArr: ViewReport [1] =  Array(),
    IsPresent: '',
  };


  ngOnInit() {
    this.getclassSectionMedium();
    this.getacademicYear();
  }

  getviewReport() {
    this.AttendanceviewReport.forEach((item) => {
      if (item.Reported) {
      item.StudentId = item.StudentId;
      item.AcademicYearId = this.viewreport.AcademicYearId;
      item.ClassSectionMediumId = this.viewreport.ClassSectionMediumId;
      item.IsPresent = this.viewreport.IsPresent;
      item.IsHoliday = this.viewreport.IsHoliday;
      item.AttendanceDate = this.viewreport.AttendanceDate;
      item.StudentName = this.viewreport.StudentName;
      item.AttendanceMonth = this.viewreport.AttendanceMonth;
      }
  });
    console.log('This is View Reprot');
    this.paramData.reportViewArr = this.AttendanceviewReport;
    console.log('ViewArr' + this.AttendanceviewReport);
    this._attendanceViewReport.getAttendanceViewReport(this.paramData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success ');
          this.AttendanceviewReport = data.data[0];
          console.log(this.AttendanceviewReport);
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

  // onCustomAction(event) {
  //   console.log(event.data);
  //   if (event.action === 'editrecord') {
  //     this.viewreport = event.data;
  //   }
  // }

  // tslint:disable-next-line: member-ordering
  // settings = {
  //   actions: false,

  //   columns: {
  //     StudentName: {
  //       title: 'StudentName',
  //     },
  //     IsPresent: {
  //       title: 'IsPresent',
  //     },
  //   },
  // };



  // tslint:disable-next-line: member-ordering
  // settings = {
  //   add: {
  //     addButtonContent: '<i class="ion-ios-plus-outline"></i>',
  //     createButtonContent: '<i class="ion-checkmark"></i>',
  //     cancelButtonContent: '<i class="ion-close"></i>',
  //   },
  //   edit: {
  //     editButtonContent: '<i class="ion-edit"></i>',
  //     saveButtonContent: '<i class="ion-checkmark"></i>',
  //     cancelButtonContent: '<i class="ion-close"></i>',
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="ion-trash-a"></i>',
  //     confirmDelete: true
  //   },
  //   imageUrl: {
  //     title: 'image',
  //     filter: false,
  //     type: 'html',
  //     valuePrepareFunction: (imageUrl) => {
  //         return this._domSanitizer.bypassSecurityTrustHtml(`<img src="${imageUrl}" alt="Smiley face" height="50" width="50">`);
  //     },
  // },
  //   columns: {
  //     img: {
  //       title: 'img',
  //       type: 'html',
  //       valuePrepareFunction: (img) => { return `<img src="img" />` }
  //     },
  //     columns: {
  //           StudentName: {
  //             title: 'StudentName',
  //           },
  //           IsPresent: {
  //             title: 'IsPresent',
  //           },
  //         }
  //   }
  // };

}

