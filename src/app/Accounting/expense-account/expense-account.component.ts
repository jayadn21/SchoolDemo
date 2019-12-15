import { Component, OnInit } from '@angular/core';
import { ExpenseAccount } from 'src/app/shared/Models/expense-account';
import { ExpenseAccountService } from 'src/app/service/expense-account.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-expense-account',
  templateUrl: './expense-account.component.html',
  styleUrls: ['./expense-account.component.scss']
})
export class ExpenseAccountComponent implements OnInit {

  constructor(private _expenseAccount: ExpenseAccountService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private menuService: MenuService) { }

  expenseAccountGrid: ExpenseAccount[] = Array();
  expenseAccountList: ExpenseAccount[] = Array();
  expenseaccount = new ExpenseAccount();
  Buttontext = 'Create';
  Headingtext = 'Add Expense Account';
  accountingMenu: string[];


  ngOnInit() {
    this.getexpenseAccount();
    this.getExpenseAccountId();
    this.requestAccountsMenu();

  }

  getExpenseAccountId() {
    this._expenseAccount.getExpenseAccounts()
      .subscribe(data => {
        if (data.success) {
          console.log('Show Expense Account');
          this.expenseAccountList = data.data[0];
        }
      });
  }

  getexpenseAccount() {
    console.log('Show Expense Account');
    this.spinner.show();
    this._expenseAccount.getExpenseAccounts()
      .subscribe(data => {
        if (data.success) {
          this.expenseAccountGrid = data.data[0];
          console.log(this.expenseAccountGrid);
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
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

  saveExpenseAccount() {
    console.log('ExpenseAccount' + this.expenseaccount.Id);
    this.spinner.show();
    this._expenseAccount.setExpenseAccount(this.expenseaccount)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          console.log('Expense Header Added');
          this.getexpenseAccount();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  cleardata() {
    this.expenseaccount = new ExpenseAccount;
  }


  updateExpenseAccount() {
    this.spinner.show();
    console.log('Expense Accountd' + this.expenseaccount.Name);
    this.Buttontext = 'Update';
    this._expenseAccount.setExpenseAccount(this.expenseaccount)
      .subscribe(data => {
        if (data.success) {
          console.log('Success');
          // this.toastr.success('Successfully ' +  'Updated User Profile!', 'Success');
          // this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }


  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.expenseaccount = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update ExpenseAccount';
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
