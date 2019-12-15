import { IndirectAccount } from './../../shared/Models/IndirectAccount';
import { Component, OnInit } from '@angular/core';
import { IndirectAccountService } from 'src/app/service/indirect-account.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-indirect-account',
  templateUrl: './indirect-account.component.html',
  styleUrls: ['./indirect-account.component.scss']
})
export class IndirectAccountComponent implements OnInit {

  constructor( private indirectIncomeAPI: IndirectAccountService, private spinner: NgxSpinnerService,
    private toastr: ToastrService ) { }
    indirectAccount: IndirectAccount[] = Array();
    Indirectaccount = new IndirectAccount();
    Headingtext = 'Indirect Income';
    Buttontext = 'Submit';

  ngOnInit() {
    this.getIndirectincomes();
  }

  getIndirectincomes() {
    this.spinner.show();
    this.indirectIncomeAPI.getIndirectIncomes()
      .subscribe(data => {
        if (data.success) {
          this.indirectAccount = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveindirectAccount() {
    this.spinner.show();
    this.indirectIncomeAPI.setIndirectIncome(this.Indirectaccount)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getIndirectincomes();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
  }

  updateindirectAccount() {
    this.spinner.show();
    // this.Buttontext = 'Update';
    this.indirectIncomeAPI.setIndirectIncome(this.Indirectaccount)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('Successfully ' + 'Updated IndirectAccount', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  cleardata() {
    this.Indirectaccount = new IndirectAccount;
  }
}
