import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpeningBalanceService } from 'src/app/service/opening-balance.service';
import { OpeningBalance } from './opening-balance';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/service/menu.service';


@Component({
  selector: 'app-opening-balance',
  templateUrl: './opening-balance.component.html',
  styleUrls: ['./opening-balance.component.scss']
})
export class OpeningBalanceComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _openingBalance: OpeningBalanceService,
    public parserFormatter: NgbDateParserFormatter,
    private menuService: MenuService) { }

    Openingbalance: OpeningBalance[] = Array();
    openingbalance = new OpeningBalance();
    selectedDate: NgbDateStruct;
    accountingMenu: string[];


  ngOnInit() {
    this.getopeningBalances();
    this.requestAccountsMenu();

  }

  getopeningBalances() {
    this.spinner.show();
    console.log('Show Date');
    this._openingBalance.getOpeningBalances()
      .subscribe(data => {
        if (data.success) {
          console.log('Show Date');
          this.openingbalance = data.data[0];
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

    saveOpeningBalance() {
      this.spinner.show();
      this.openingbalance.OpeningBalanceDate = this.parserFormatter.format(this.selectedDate);
      console.log(this.openingbalance.OpeningBalanceDate);
      this._openingBalance.setOpeningBalance(this.openingbalance)
        .subscribe(data => {
          if (data.success) {
            console.log('Show Date');
            this.openingbalance = data.data[0];
            this.getopeningBalances();
            this.cleardata();
          } else {
            this.toastr.error(data.message, 'server error!!');
          }
          this.spinner.hide();
        });
      }

      cleardata() {
        this.openingbalance = new OpeningBalance;
      }

}
