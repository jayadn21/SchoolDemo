import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SubjectCombinationMapping } from 'src/app/shared/Models/SubjectCombinationMapping';
import { SubjectCombinationMappService } from 'src/app/service/subject-combination-mapp.service';
import { SubjectPage } from 'src/app/shared/Models/SubjectPage';
import { SubjectPageService } from 'src/app/service/subject-page.service';

@Component({
  selector: 'app-subject-combination-mapp',
  templateUrl: './subject-combination-mapp.component.html',
  styleUrls: ['./subject-combination-mapp.component.scss']
})
export class SubjectCombinationMappComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private subjectCombMappAPI: SubjectCombinationMappService,
  private toastr: ToastrService, private subjectpageAPI: SubjectPageService) { }

  Buttontext = 'Submit';
  Headingtext = 'Add Subject Combination';
  subjectCombinationMapp: SubjectCombinationMapping[] = Array();
  subjectCombMapping = new SubjectCombinationMapping();
  subjectPageList: SubjectPage[] = Array();
  SubjectPage = new SubjectPage();

  arr1 = [
    { Id: 1, Name: 'SubjectPage', ModuleId: 0, checked: false },
    { Id: 2, Name: 'SubjectPage', ModuleId: 0, checked: true },
    { Id: 3, Name: 'hello3', ModuleId: 1, checked: false },
    { Id: 4, Name: 'hello4', ModuleId: 0, checked: true },
    { Id: 5, Name: 'hello5', ModuleId: 4, checked: false },
    { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
    { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
    { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
  ];


  ngOnInit() {
    this.getSubjectCombinationMappings();
    this.getSubjects();
  }

  getSubjectCombinationMappings() {
    console.log('Subject Combination Mapp');
    // this.spinner.show();
    this.subjectCombMappAPI.getSubjectcombinationMappings()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.subjectCombinationMapp = data.data[0];
          console.log(this.subjectCombinationMapp);
          // this.spinner.hide();
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
        this.subjectPageList = data.data[0];
        console.log(this.subjectPageList);
        this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
      }
    });
  }

  saveSubjectCombinationMapp() {
    this.spinner.show();
    console.log('Subject Combination Mapp');
    this.subjectCombMappAPI.setSubjectcombinationMapping(this.subjectCombMapping)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getSubjectCombinationMappings();
          console.log(this.subjectCombinationMapp);
          this.cleardata();
        } else {
            this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
  }

  updatesubjectCombMapp() {
    this.spinner.show();
    this.Buttontext = 'Update';
    this.subjectCombMappAPI.setSubjectcombinationMapping(this.subjectCombMapping)
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

  cleardata() {
    this.subjectCombMapping = new SubjectCombinationMapping;
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.subjectCombMapping = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Subject Combination';
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
        // SubjectIds: {
        //   title: 'Subject Ids',
        // },
        SubjectCombinationId: {
          title: 'SubjectCombinationId',
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
