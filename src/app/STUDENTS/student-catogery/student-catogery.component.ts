import { Component, OnInit } from '@angular/core';
import { StudentCatogery } from 'src/app/shared/Models/Studentcatogery';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentCatogeryService } from 'src/app/service/student-catogery.service';

@Component({
  selector: 'app-student-catogery',
  templateUrl: './student-catogery.component.html',
  styleUrls: ['./student-catogery.component.scss']
})
export class StudentCatogeryComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService,
    private studentCatogeryAPI: StudentCatogeryService) { }

  Buttontext = 'Submit';
  Headingtext = 'Add Student Catogery';
  studentCatogery: StudentCatogery[] = Array();
  Studentcatogery = new StudentCatogery();

  ngOnInit() {
    this.getadmissionCategorys();
  }
  getadmissionCategorys() {
    this.spinner.show();
    this.studentCatogeryAPI.getadmissionCategorys()
      .subscribe(data => {
        if (data.success) {
          this.studentCatogery = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }
  saveStudentCatogery() {
    this.spinner.show();
    this.studentCatogeryAPI.setAdmissionCategory(this.Studentcatogery)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getadmissionCategorys();
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
    this.studentCatogeryAPI.setAdmissionCategory(this.Studentcatogery)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('Successfully ' + 'Updated Student Catogery', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  cleardata() {
    this.Studentcatogery = new StudentCatogery;
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.Studentcatogery = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update StudentCatogery';
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
      Id: {
        title: 'Id',
      },
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
