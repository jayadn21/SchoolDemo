import { Component, OnInit } from '@angular/core';
import { InternalTransactionService } from 'src/app/service/internal-transaction.service';
import { InternalTransaction } from 'src/app/shared/Models/InternalTransaction';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-internal-transaction',
  templateUrl: './internal-transaction.component.html',
  styleUrls: ['./internal-transaction.component.scss']
})
export class InternalTransactionComponent implements OnInit {

  constructor(private InternalTransactionAPI: InternalTransactionService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  Internaltransaction: InternalTransaction[] = Array();
  internalTransaction = new InternalTransaction();
  Headingtext = 'Internal Transaction';
  Buttontext = 'Submit';

  ngOnInit() {
    this.getinternalTransactions();
  }

  getinternalTransactions() {
    this.spinner.show();
    this.InternalTransactionAPI.getInternaltransactions()
      .subscribe(data => {
        if (data.success) {
          this.Internaltransaction = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveInternaltransaction() {
    this.spinner.show();
    this.InternalTransactionAPI.setInternalTransaction(this.internalTransaction)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getinternalTransactions();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
  }

  updateinternalTransaction() {
    this.spinner.show();
    this.Buttontext = 'Update';
    this.InternalTransactionAPI.setInternalTransaction(this.internalTransaction)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('Successfully ' + 'Updated InternalTransaction', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  cleardata() {
    this.internalTransaction = new InternalTransaction;
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
      TransactionDate: {
        title: 'Date',
      },
      IncomeAccount1Id: {
        title: 'Account1',
      },
      IncomeAccount2Id: {
        title: 'Account2',
      },
      Amount: {
        title: 'Amount',
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


