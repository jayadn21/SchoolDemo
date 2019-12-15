import { Component, OnInit } from '@angular/core';
import { GradesService } from 'src/app/service/grades.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  constructor(private _gradeSetups: GradesService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  Buttontext = 'Submit';
  Headingtext = 'Create Grading System';

  ngOnInit() {
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
