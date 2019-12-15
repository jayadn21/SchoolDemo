import { Component, OnInit } from '@angular/core';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';

@Component({
  selector: 'app-subject-combination',
  templateUrl: './subject-combination.component.html',
  styleUrls: ['./subject-combination.component.scss']
})
export class SubjectCombinationComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Subject Combination';
  subjectCombinationGrid: SubjectCombination [] = Array();
  SubjectCombination = new SubjectCombination();

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private subjectCombination: SubjectCombinationService) { }

  ngOnInit() {
    this.getsubjectCombination();
  }

  getsubjectCombination() {
    console.log('This is Subject');
    this.spinner.show();
    this.subjectCombination.getsubjectCombinations()
    .subscribe(data => {
      if (data.success) {
        console.log('Success Subject Combination!!');
        this.subjectCombinationGrid = data.data[0];
        console.log(this.subjectCombinationGrid);
        this.spinner.hide();
      } else {
        this.toastr.error(data.message, 'Opps!');
      }
      });
  }
  saveSubjectCombination() {
     this.spinner.show();
    this.subjectCombination.setsubjectCombination(this.SubjectCombination)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log('Subject Combination Added');
      this.getsubjectCombination();
      this.cleardata();
      } else {
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.SubjectCombination = new SubjectCombination;
 }

 updatefeesaccount() {
  this.spinner.show();
  console.log('Subject Combnation' + this.SubjectCombination.Name);
  this.Buttontext = 'Update';
  this.subjectCombination.setsubjectCombination(this.SubjectCombination)
  .subscribe(data => {
    if (data.success) {
     this.toastr.success('Successfully ' +  'Updated Fees Account!!', 'Success');
     this.spinner.hide();
    } else {
      this.toastr.error(data.message, 'Opps!');
    }
  });
}

onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.SubjectCombination = event.data;
    this.Buttontext = 'Update';
    this.Headingtext = 'Update ';
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
      title:  'Name',
    },

  },
};

onDeleteConfirm(event) {
  this.SubjectCombination = event.data;
    this.spinner.show();
    this.subjectCombination.delsubjectCombination(this.SubjectCombination)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      this.getsubjectCombination();
      this.cleardata();
      } else {
        this.toastr.error(data.message, 'server error!!');
      }
    });
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
