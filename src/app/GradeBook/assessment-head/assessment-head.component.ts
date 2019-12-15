import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssessmentHeadService } from 'src/app/service/assessment-head.service';
import { AssessmentHead } from 'src/app/shared/Models/Assessmenthead';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assessment-head',
  templateUrl: './assessment-head.component.html',
  styleUrls: ['./assessment-head.component.scss']
})
export class AssessmentHeadComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService,
    private assessmentHeadAPI: AssessmentHeadService) { }

  Buttontext = 'Submit';
  Headingtext = 'Add AssessmentHead';
  AssessmentHeads: AssessmentHead[] = Array();
  assessmentHead = new AssessmentHead();
  assessmentHeadGrid: AssessmentHead[] = Array();

  ngOnInit() {
    this.getassessmentHeads();
  }

  getassessmentHeads() {
    this.spinner.show();
    this.assessmentHeadAPI.getAssessmentheads()
      .subscribe(data => {
        if (data.success) {
          this.AssessmentHeads = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveAssessmentHead() {
    this.spinner.show();
    this.assessmentHeadAPI.setAssessmentHead(this.assessmentHead)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getassessmentHeads();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
  }

  updateAssessment() {
    this.spinner.show();
    this.Buttontext = 'Update';
    this.assessmentHeadAPI.setAssessmentHead(this.assessmentHead)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('Successfully ' + 'Updated AssessmentHead', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  cleardata() {
    this.assessmentHead = new AssessmentHead;
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.assessmentHead = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update AssessmentHead';
    }
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
      // Id: {
      //   title: 'Id',
      // },
      Name: {
        title: 'Name',
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
