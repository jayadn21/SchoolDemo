import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ExpenseAccountService {
  private route = '/ExpenseAccount';
  private getExpenseAccountsAPI = this.route + '/getExpenseAccounts';
  private getExpenseAccountAPI = this.route + '//getExpenseAccount';
  private setExpenseAccountAPI = this.route + '/setExpenseAccount';
  private delExpenseAccountAPI = this.route + '/delExpenseAccount';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getExpenseAccounts() {
    return this.ServiceUitility.postRequest(this.getExpenseAccountsAPI, '');
  }

  getExpenseAccount() {
    return this.ServiceUitility.postRequest(this.getExpenseAccountAPI, '');
  }


  setExpenseAccount(obj) {
    return this.ServiceUitility.postRequest(this.setExpenseAccountAPI, obj);
  }

  delExpenseAccount() {
    return this.ServiceUitility.postRequest(this.delExpenseAccountAPI, '');
  }

}
