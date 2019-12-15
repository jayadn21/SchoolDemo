import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ExpenseHeadersService {
  private route = '/ExpenseHeader';
  private getExpenseHeadersAPI = this.route + '/getExpenseHeaders';
  private getExpenseHeaderAPI = this.route + '/getExpenseHeader';
  private setExpenseHeaderAPI = this.route + '/setExpenseHeader';
  private delExpenseHeaderAPI = this.route + '/delExpenseHeader';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getExpenseHeaders() {
    return this.ServiceUitility.postRequest(this.getExpenseHeadersAPI, '');
  }

  getExpenseHeader() {
    return this.ServiceUitility.postRequest(this.getExpenseHeaderAPI, '');
  }


  setExpenseHeader(obj) {
    return this.ServiceUitility.postRequest(this.setExpenseHeaderAPI, obj);
  }

  delExpenseHeader(obj) {
    return this.ServiceUitility.postRequest(this.delExpenseHeaderAPI, obj);
  }


}
