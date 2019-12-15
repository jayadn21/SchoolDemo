import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class InternalTransactionService {

  private route = '/InternalTransaction';
  private _getInternalTransactions = this.route + '/getInternalTransactions';
  private _getInternalTransaction = this.route + '/getInternalTransaction';
  private _setInternalTransaction = this.route + '/setInternalTransaction';
  private _delInternalTransaction = this.route + '/delInternalTransaction';

    constructor(private serviceUitility: ServiceUitility) { }

    getInternaltransactions() {
      return this.serviceUitility.postRequest(this._getInternalTransactions, '');
    }

    getInternalTransaction() {
      return this.serviceUitility.postRequest(this._getInternalTransaction, '');
    }

    setInternalTransaction(obj) {
      return this.serviceUitility.postRequest(this._setInternalTransaction, obj);
    }
    delInternalTransaction(obj) {
      return this.serviceUitility.postRequest(this._delInternalTransaction, obj);
    }

}
