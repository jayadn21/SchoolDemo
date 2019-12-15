import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';


@Injectable({
  providedIn: 'root'
})
export class FeesAccountsService {
  private route = '/feesaccount';
  private _getfeesaccounts = this.route + '/getFeesAccounts';
  private _getfeesaccount = this.route + '/getFeesAccount';
  private _setfeesaccount = this.route + '/setFeesAccount';

  constructor(private ServiceUitility: ServiceUitility) { }

  getfeesaccountsDetails () {
    return this.ServiceUitility.postRequest(this._getfeesaccounts, '');
  }

  getfeesaccountDetails () {
    return this.ServiceUitility.postRequest(this._getfeesaccount, '');
  }


  setfeesaccountDetails (obj) {
    return this.ServiceUitility.postRequest(this._setfeesaccount, obj);
  }
}
