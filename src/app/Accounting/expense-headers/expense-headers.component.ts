import { Component, OnInit } from '@angular/core';
import { ExpenseHeadersService } from 'src/app/service/expense-headers.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExpenseHeaders } from 'src/app/shared/Models/expense-headers';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-expense-headers',
  templateUrl: './expense-headers.component.html',
  styleUrls: ['./expense-headers.component.scss']
})
export class ExpenseHeadersComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _expenseHeader: ExpenseHeadersService,
    private menuService: MenuService) { }

  Buttontext = 'Create';
  Headingtext = 'Add Expense Headers';
  expenseHeaders: ExpenseHeaders[] = Array();
  expenseheader = new ExpenseHeaders();
  accountingMenu: string[];


  ngOnInit() {
    this.getExpenseheaders();
    this.requestAccountsMenu();

  }
  getExpenseheaders() {
    console.log('Show Expense Header');
    this.spinner.show();
    this._expenseHeader.getExpenseHeaders()
    .subscribe(data => {
      if (data.success) {
        this.expenseHeaders = data.data[0];
        console.log(this.expenseHeaders);
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
  
  saveExpenseheader() {
    console.log('ExpenseHeader' + this.expenseheader.Id);
    this.spinner.show();
    this._expenseHeader.setExpenseHeader(this.expenseheader)
    .subscribe(data => {
      if (data.success) {
        this.spinner.hide();
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          console.log('Expense Header Added');
          this.getExpenseheaders();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
      }
    });
  }
  cleardata() {
   this.expenseheader = new ExpenseHeaders ;
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.expenseheader = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update ExpenseHeader';
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
    this.expenseheader = event.data;
    console.log("expenseheader" + this.expenseheader.Id)
    this.spinner.show();
    this._expenseHeader.delExpenseHeader(this.expenseheader)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("Vendor Deleted")
      this.getExpenseheaders();
      this.cleardata();
      }
      else{
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
