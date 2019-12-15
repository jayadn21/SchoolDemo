import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class IndirectAccountService {

  private route = '/IndirectAccount';
  private _getIndirectIncomes = this.route + '/getIndirectIncomes';
  private _getIndirectIncome = this.route + '/getIndirectIncome';
  private _setIndirectIncome = this.route + '/setIndirectIncome';
  private _delIndirectIncome = this.route + '/delIndirectIncome';

    constructor(private serviceUitility: ServiceUitility) { }

    getIndirectIncomes() {
      return this.serviceUitility.postRequest(this._getIndirectIncomes, '');
    }

    getIndirectIncome() {
      return this.serviceUitility.postRequest(this._getIndirectIncome, '');
    }

    setIndirectIncome(obj) {
      return this.serviceUitility.postRequest(this._setIndirectIncome, obj);
    }
    delIndirectIncome(obj) {
      return this.serviceUitility.postRequest(this._delIndirectIncome, obj);
    }

}
