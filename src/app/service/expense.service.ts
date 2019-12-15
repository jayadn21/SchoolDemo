import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private route = '/Expense';
  private getExpensesAPI = this.route + '/getExpenses';
  private getExpenseAPI = this.route + '/getExpense';
  private setExpenseAPI = this.route + '/setExpense';
  private delExpenseAPI = this.route + '/delExpense';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getexpenses() {
    return this.ServiceUitility.postRequest(this.getExpensesAPI, '');
  }

  getExpense() {
    return this.ServiceUitility.postRequest(this.getExpenseAPI, '');
  }

  setExpense(obj) {
    return this.ServiceUitility.postRequest(this.setExpenseAPI, obj);
  }

  delExpense(obj) {
    return this.ServiceUitility.postRequest(this.delExpenseAPI, obj);
  }


}
