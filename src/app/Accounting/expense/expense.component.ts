import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/service/expense.service';
import { Expense } from 'src/app/shared/Models/Expense';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  constructor(private expenseAPI: ExpenseService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  Headingtext = 'Add Expense';
  Buttontext = 'Submit';
  expenseArray: Expense[] = Array();
  Expensearray = new Expense();

  ngOnInit() {
    this.getExpense();
  }

  getExpense() {
    console.log('Success');
    this.spinner.show();
    this.expenseAPI.getexpenses()
      .subscribe(data => {
        if (data.success) {
          console.log('Success from Expense');
          this.expenseArray = data.data[0];
          console.log(this.expenseArray);
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveExpense() {
    this.spinner.show();
    this.expenseAPI.setExpense(this.Expensearray)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      this.getExpense();
      this.cleardata();
      } else {
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.Expensearray = new Expense;
 }

 onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.Expensearray = event.data;
    this.Buttontext = 'Update';
    this.Headingtext = 'Update';
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
      ExpenseDate: {
        title: 'Expense Date',
      },
      Description: {
        title: 'Description',
      },
      ExpenseAccountId: {
        title: 'Account',
      },
      PaymentMethodId: {
        title: 'Payment MethodId',
      },
    },
  };

  onCreateConfirm(event) {
    console.log('Create Event In Console');
    console.log(event);
  }

  onSaveConfirm(event) {
    console.log('Edit Event In Console');
    console.log(event);
  }
}
