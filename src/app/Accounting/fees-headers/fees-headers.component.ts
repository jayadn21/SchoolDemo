import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FeesHeadersService } from 'src/app/service/fees-headers.service';
import { FeesHeaders } from '../../shared/Models/fees-headers';
import { MenuService } from 'src/app/service/menu.service';
import { InstituteService } from 'src/app/service/institute.service';
import { Institution } from 'src/app/theme/simple-page/Institution';

@Component({
  selector: 'app-fees-headers',
  templateUrl: './fees-headers.component.html',
  styleUrls: ['./fees-headers.component.scss']
})
export class FeesHeadersComponent implements OnInit {

  constructor( private _Institute: InstituteService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private feesHeaders: FeesHeadersService,
    private menuService: MenuService
  ) { }
  Buttontext = 'Create';
  Headingtext = 'Add Fees Headers';
  feesheaders: FeesHeaders[] = Array();
  feesheader = new FeesHeaders();
  accountingMenu: string[];
  institutes: Institution[] = Array();
  paramData = {
    Id: '',
  };


  ngOnInit() {
    this.getfeesHeaders();
    this.requestAccountsMenu();
    this.getInstituteDetails();
  }

  getInstituteDetails() {
    console.log('fees Institute');
    this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this._Institute.getInstitutionGroupdetailsService(this.paramData)
    .subscribe(data => {
      if (data.success) {
        console.log('fees Institute');
        this.institutes = data.institutions;
      }
    });
  }

  getfeesHeaders() {
    console.log('fees Headers');
    this.spinner.show();
    this.feesHeaders.getFeesHeaders()
      .subscribe(data => {
        if (data.success) {
          console.log('Success from payment Method!!');
          this.feesheaders = data.data[0];
          console.log(this.feesheaders);
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  public requestAccountsMenu(): void {
    this.menuService.GetAccountsMenu()
      .subscribe(data => {
        // console.log('requestAccountsMenu ->');
        this.accountingMenu = data as string[];
        // console.log(this.accountingMenu);
      });
  }


  saveFeesheader() {
    console.log('Feesheader' + this.feesheader.Id);
    this.spinner.show();
    this.feesHeaders.setFeesHeaders(this.feesheader)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          console.log('New payment Added');
          this.getfeesHeaders();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
      });

  }
  cleardata() {
    this.feesheader = new FeesHeaders;
  }

  updateFeesHeader() {
    this.spinner.show();
    console.log('Fees Header' + this.feesheader.Name);
    this.Buttontext = 'Update';
    this.feesHeaders.setFeesHeaders(this.feesheader)
      .subscribe(data => {
        if (data.success) {
          console.log('Success');
          this.toastr.success('Successfully ' + 'Updated Fees Headers', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }
  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.feesheader = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Fees Headers';
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
