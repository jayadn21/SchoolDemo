import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SubjectPageService } from 'src/app/service/subject-page.service';
import { SubjectPage } from 'src/app/shared/Models/SubjectPage';
import { SubjectType } from 'src/app/shared/Models/SubjectType';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService,
  private subjectpageAPI: SubjectPageService) { }

  Buttontext = 'Create';
  Headingtext = 'Add Subject';
  subjectPage: SubjectPage[] = Array();
  Subjectpage = new SubjectPage();
  subjectType: SubjectType[] = Array();
  SubjectType = new SubjectType();

  ngOnInit() {
    this.getSubjectType();
    this.getSubjects();
  }

  getSubjectType() {
    this.spinner.show();
    console.log('Success');
    this.subjectpageAPI.getSubjectTypes()
      .subscribe(data => {
        if (data.success) {
          console.log('Success');
          this.subjectType = data.data[0];
          console.log(this.subjectType);
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });

  }

  getSubjects() {
    this.spinner.show();
    console.log('Success');
    this.subjectpageAPI.getSubjects()
    .subscribe(data => {
      if (data.success) {
        console.log('Success');
        this.subjectPage = data.data[0];
        console.log(this.subjectPage);
        this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
      }
    });
  }

  savesubjectPage() {
    this.spinner.show();
    this.subjectpageAPI.setSubject(this.Subjectpage)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          console.log('New Subject Added');
          this.getSubjects();
          this.cleardata();
        } else {
            this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });

  }

  cleardata() {
    this.Subjectpage = new SubjectPage;
  }

  updateSubjectPage() {
    this.spinner.show();
    this.Buttontext = 'Update';
    this.subjectpageAPI.setSubject(this.Subjectpage)
      .subscribe(data => {
        if (data.success) {
          console.log('Success');
          this.toastr.success('Successfully ' + 'Updated Subject', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.Subjectpage = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Subject';
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
