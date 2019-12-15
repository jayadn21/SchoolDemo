import { ClasssectionService } from 'src/app/service/classsection.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { ReportSetupService } from 'src/app/service/report-setup.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Classsection } from 'src/app/shared/Models/classsection';
import { ReportSetup } from 'src/app/shared/Models/report-setup';

@Component({
  selector: 'app-report-setup',
  templateUrl: './report-setup.component.html',
  styleUrls: ['./report-setup.component.scss'],
  providers: [ ModalService, ReportSetupService ]
})
export class ReportSetupComponent implements OnInit {

  classessections: Classsection[] = Array();
  modalButtonText = 'Add New';
  modalButtonTextClass = 'Add New Report';
  report = new ReportSetup();
  reports: ReportSetup[] = Array();
  reportForGrid: ReportSetup[] = Array();


  paramData = {
    reportSetupArr: ReportSetup [1] =  Array(),
  }

  constructor(private _classessectionService:ClasssectionService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private modalService: ModalService,
    private _reportService: ReportSetupService) { }

  ngOnInit() {
    this.getClasssectionDetails();
    this.getReportsDetails();
  }

  saveReport() {
    
    this.reportForGrid.forEach((item) => {
      if (item.Selected) {
      item.ClassSectionMediumId=item.Id;
      item.ExecellentFrom = this.report.ExecellentFrom;
      item.ExcellecntTo = this.report.ExcellecntTo;
      item.GoodFrom = this.report.GoodFrom;
      item.GoodTo = this.report.GoodTo;
      item.SatisfactoryFrom = this.report.SatisfactoryFrom;
      item.SatisfactoryTo = this.report.SatisfactoryTo;
      item.PoorFrom = this.report.PoorFrom;
      item.PoorTo = this.report.PoorTo;
      item.NotEligibleFrom = this.report.NotEligibleFrom;
      item.NotEligibleTo = this.report.NotEligibleTo;      
      }
  });
    this.paramData.reportSetupArr = this.reportForGrid;
    console.log('ReportArr' + this.reportForGrid);
    this.spinner.show();
    this._reportService.setReportDetails(this.paramData)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.modalButtonText + '!', 'Success');
      console.log('New Report Added');
      this.getClasssectionDetails();
      this.ClearData();
      } else {
        this.toastr.error(data.message, 'server error!!');
        this.spinner.hide();
      }
    });
  }

  updateReport() {
    console.log('Report ' + this.report.Id);
    this.spinner.show();
    this._reportService.setSingleReportDetails(this.report)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.modalButtonText + '!', 'Success');
      console.log('Report Updated');
      this.getReportsDetails();
      this.ClearData();
      this.closeModal1('custom-modal-2');
      } else {
        this.toastr.error(data.message, 'server error!!');
        this.spinner.hide();
      }
    });
  }


  OpenClassModal(id: string) {
    this.ClearData();
    this.modalService.open(id);
  }

  closeModal1(id: string) {
    this.modalService.close(id);
  }

  getClasssectionDetails() {
    console.log();
    this.spinner.show();
    this._classessectionService.getClasssectionDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.classessections = data.data[0];
          this.reportForGrid  = Object.assign([], this.classessections);
          console.log(this.reportForGrid);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  getReportsDetails() {
    console.log("This is Right side grid reports");
    this.spinner.show();
    this._reportService.getReportsDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success from reports !!');
          this.reports = data.data[0];
          console.log(this.reports);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  ClearData() {
   this.report = new ReportSetup;
  }

  onReportCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.modalService.open('custom-modal-2'); 
      this.report = event.data;
      this.modalButtonTextClass = 'Edit Attendance Report';
      this.modalButtonText = 'Update';
    }

  }

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
      
      Name: {
        title: 'Class',
      },
    },
   };
   

 

  onDeleteConfirm(event) {
    this.report = event.data;
    console.log("report" + this.report.Id)
    this.spinner.show();
    this._reportService.delReportDetails(this.report)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("report Deleted")
      this.getClasssectionDetails();
      this.ClearData();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }


}
