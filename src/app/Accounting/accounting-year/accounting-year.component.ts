import { HttpClient } from '@angular/common/http';
import { AccountingyearService } from './../../service/accounting-year.service';
import { Component, OnInit } from '@angular/core';
import { AccountingYear } from '../../shared/Models/accounting-year';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-accounting-year',
  templateUrl: './accounting-year.component.html',
  styleUrls: ['./accounting-year.component.scss'],
  providers: [AccountingyearService]
})
export class AccountingYearComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Accounting year';
  accountingyears: AccountingYear [] = Array();
  accountingyear = new AccountingYear();
  accountingMenu: string[];

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private accountingyearservice: AccountingyearService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.getaccountingyearsDetails();
    this.requestAccountsMenu();
  }

  getaccountingyearsDetails() {
    console.log("This is Accounting Year");
    this.spinner.show();
    this.accountingyearservice. getaccountingyearsDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Accounting year!!');
        this.accountingyears = data.data[0];
        console.log(this.accountingyears);
        this.spinner.hide();
      }
      else {
        this.toastr.error(data.message, "Opps!");
      }
      });    
  }

  public requestAccountsMenu(): void {
    this.menuService.GetAccountsMenu()
      .subscribe(data => {
        //console.log('requestAccountsMenu ->');
        this.accountingMenu = data as string[];
        //console.log(this.accountingMenu);
      });
  }

  saveaccountingyear() {
    console.log("accountingyear" + this.accountingyear.Id)
    this.spinner.show();
    this.accountingyear.InstitutionId = JSON.parse(localStorage.getItem('InstitutionId'));
    this.accountingyearservice.setaccountingyearDetails(this.accountingyear)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("New Accounting Year Added")
      this.getaccountingyearsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
     this.accountingyear = new AccountingYear;
  } 

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.accountingyear = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update ';
    }
  }

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
      delete: false,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
      ],


    },

    columns: {
      // Id: {
      //   title: 'Id',
      // },
      AcademicYear: {
        title: 'Academic Year',
      },

    },
  };

 

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }
}
