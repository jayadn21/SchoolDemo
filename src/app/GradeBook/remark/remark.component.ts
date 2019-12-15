import { Component, OnInit } from '@angular/core';
import { RemarkService } from 'src/app/service/remark.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Remarks } from 'src/app/shared/Models/remark';

@Component({
  selector: 'app-remark',
  templateUrl: './remark.component.html',
  styleUrls: ['./remark.component.scss']
})
export class RemarkComponent implements OnInit {

  constructor(private _RemarkAPI: RemarkService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  Buttontext = 'Submit';
  Headingtext = 'Create Reamrks';
  remarks: Remarks[] = Array();
  remark = new Remarks();

  ngOnInit() {
    this.getremarks();
  }

  getremarks() {
    this.spinner.show();
    console.log('Success');
    this._RemarkAPI.getremarkSetups()
    .subscribe(data => {
      if (data.success) {
        console.log('Success');
        this.remarks = data.data[0];
        console.log(this.remarks);
        this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
      }
    });
  }

  saveRemark() {
    this.spinner.show();
    this._RemarkAPI.setRemarkSetup(this.remark)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getremarks();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
  }

  cleardata() {
    this.remark = new Remarks;
  }
  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.remark = event.data;
      this.Buttontext = 'Create';
      this.Headingtext = 'Update Remark';
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
      Description: {
        title: 'Description',
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
