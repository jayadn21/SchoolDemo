import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PaymentMethodService } from 'src/app/service/payment-method.service';
import { PaymentMethod } from './payment-method';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private paymentMethod: PaymentMethodService,
    private menuService: MenuService) { }

    Buttontext = 'Create';
    Headingtext = 'Add Payment method';
    paymentmethods: PaymentMethod[] = Array();
    paymentmethod = new PaymentMethod();
    accountingMenu: string[];


  ngOnInit() {
    this.getpaymentMethods();
    this.requestAccountsMenu();

  }

  getpaymentMethods() {
    console.log('payment Method');
    this.spinner.show();
    this.paymentMethod.getPaymentMethods()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from payment Method!!');
        this.paymentmethods = data.data[0];
        console.log(this.paymentmethods);
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
  
  savePaymentmethod() {
    console.log('paymentmethod' + this.paymentmethod.Id);
    this.spinner.show();
    this.paymentMethod.setPaymentMethod(this.paymentmethod)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log('New payment Added');
      this.getpaymentMethods();
      this.cleardata();
      } else {
        this.toastr.error(data.message, 'server error!!');
      }
    });

  }
  cleardata() {
    this.paymentmethod = new PaymentMethod;
 }

 updatePaymentmethod() {
  this.spinner.show();
   console.log('payment method' + this.paymentmethod.Name);
  this.Buttontext = 'Update';
  this.paymentMethod.setPaymentMethod(this.paymentmethod)
  .subscribe(data => {
    if (data.success) {
      console.log('Success');
      this.toastr.success('Successfully ' +  'Updated User Profile!', 'Success');
      this.spinner.hide();
    } else {
      this.toastr.error(data.message, 'Opps!');
    }
  });
}
onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.paymentmethod = event.data;
    this.Buttontext = 'Update';
    this.Headingtext = 'Update Payment Method';
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
