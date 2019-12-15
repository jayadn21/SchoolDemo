import { Component, OnInit } from '@angular/core';
import { CustomField } from 'src/app/shared/Models/CustomField';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CustomFieldsService } from 'src/app/service/custom-fields.service';

@Component({
  selector: 'app-custom-fields',
  templateUrl: './custom-fields.component.html',
  styleUrls: ['./custom-fields.component.scss']
})
export class CustomFieldsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private _customFieldAPI: CustomFieldsService ) { }

  Buttontext = 'Submit';
  Headingtext = 'Add Custom Field';
  customField: CustomField[] = Array();
  Customfield = new CustomField();

  ngOnInit() {
    this.getCustomFields();
  }

  getCustomFields() {
    this.spinner.show();
    this._customFieldAPI.getCustomFields()
      .subscribe(data => {
        if (data.success) {
          this.customField = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveCustomField() {
    this.spinner.show();
    this._customFieldAPI.setCustomField(this.Customfield)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getCustomFields();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
  }

  updateCustomField() {
    this.spinner.show();
    this.Buttontext = 'Update';
    this._customFieldAPI.setCustomField(this.Customfield)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('Successfully ' + 'Updated Custom field', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  cleardata() {
    this.Customfield = new CustomField;
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.Customfield = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Customfield';
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
