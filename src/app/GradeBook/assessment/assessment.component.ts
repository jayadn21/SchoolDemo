import { Assessment } from './../../shared/Models/Assessment';
import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/service/assessment.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor(private _Assessment: AssessmentService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  Buttontext = 'Create';
  Headingtext = 'Add Assessment';
  Assessments: Assessment[] = Array();
  assessment = new Assessment();
  assessmentGrid: Assessment[] = Array();

  ngOnInit() {
    this.getassessments();
  }

  getassessments() {
    this.spinner.show();
    this._Assessment.getAssessmentBook()
      .subscribe(data => {
        if (data.success) {
          this.Assessments = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveAssessment() {
    this.spinner.show();
    this._Assessment.setAssessment(this.assessment)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getassessments();
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
    this._Assessment.setAssessment(this.assessment)
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
    this.assessment = new Assessment;
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.assessment = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Assessment';
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
