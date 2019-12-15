import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class RemarkService {

  private route = '/Remark';
  private _getRemarkSetups = this.route + '/getRemarkSetups';
  private _getRemarkSetup = this.route + '/getRemarkSetup';
  private _setRemarkSetup = this.route + '/setRemarkSetup';
  private _delRemarkSetup = this.route + '/delRemarkSetup';

    constructor(private serviceUitility: ServiceUitility) { }

    getremarkSetups() {
      return this.serviceUitility.postRequest(this._getRemarkSetups, '');
    }

    getRemarkSetup() {
      return this.serviceUitility.postRequest(this._getRemarkSetup, '');
    }

    setRemarkSetup(obj) {
      return this.serviceUitility.postRequest(this._setRemarkSetup, obj);
    }
    delRemarkSetup(obj) {
      return this.serviceUitility.postRequest(this._delRemarkSetup, obj);
    }

}

