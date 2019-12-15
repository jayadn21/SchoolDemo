import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class OpeningBalanceService {
  private route = '/OpeningBalance';
  private getopeningBalanceAPI = this.route + '/getOpeningBalances';
  private setopeningBalanceAPI = this.route + '/setOpeningBalance';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getOpeningBalances() {
    return this.ServiceUitility.postRequest(this.getopeningBalanceAPI, '');
  }

  setOpeningBalance(obj) {
    return this.ServiceUitility.postRequest(this.setopeningBalanceAPI, obj);
  }
}
