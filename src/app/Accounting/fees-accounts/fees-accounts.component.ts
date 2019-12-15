import { Component, OnInit } from '@angular/core';
import { FeesAccountsService } from 'src/app/service/fees-accounts.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FeesAccounts } from '../../shared/Models/fees-accounts';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-fees-accounts',
  templateUrl: './fees-accounts.component.html',
  styleUrls: ['./fees-accounts.component.scss'],
  providers: [FeesAccountsService]
})
export class FeesAccountsComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Fees Account';
  feesaccounts: FeesAccounts [] = Array();
  feesaccount = new FeesAccounts();
  accountingMenu: string[];


  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private feesaccountsservice: FeesAccountsService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.getfeesaccountsDetails();
    this.requestAccountsMenu();

  }

  getfeesaccountsDetails(){
    console.log("This is Fees Account");
    this.spinner.show();
    this.feesaccountsservice. getfeesaccountsDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Accounting year!!');
        this.feesaccounts = data.data[0];
        console.log(this.feesaccounts);
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
  
  savefeesaccount() {
    console.log("feesaccount" + this.feesaccount.Id)
    this.spinner.show();
    this.feesaccountsservice.setfeesaccountDetails(this.feesaccount)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("New Accounting Year Added")
      this.getfeesaccountsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.feesaccount = new FeesAccounts;
 }

 updatefeesaccount() {
  this.spinner.show();
  console.log("Feees Account" + this.feesaccount.AccountName);
  this.Buttontext = 'Update';
  this.feesaccountsservice.setfeesaccountDetails(this.feesaccount)
  .subscribe(data => {
    if(data.success) {
      console.log("Success");
      this.toastr.success('Successfully ' +  'Updated Fees Account!!', 'Success');
      this.spinner.hide();  
    }
    else {
      this.toastr.error(data.message, "Opps!");
    }
  })
}

onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.feesaccount = event.data;
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
    delete: true,
    custom: [
      { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
    ],


  },

  columns: {
    // Id: {
    //   title: 'Id',
    // },
    AccountName: {
      title: 'Account Name',
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
