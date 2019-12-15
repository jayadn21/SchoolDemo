import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class StudentCatogeryService {

  private route = '/StudentCatogeries';
  private _getAdmissionCategorys = this.route + '/getAdmissionCategorys';
  private _getAdmissionCategory = this.route + '/getAdmissionCategory';
  private _setAdmissionCategory = this.route + '/setAdmissionCategory';
  private _delAdmissionCategory = this.route + '/delAdmissionCategory';

    constructor(private serviceUitility: ServiceUitility) { }

    getadmissionCategorys() {
      return this.serviceUitility.postRequest(this._getAdmissionCategorys, '');
    }
    getAdmissionCategory() {
      return this.serviceUitility.postRequest(this._getAdmissionCategory, '');
    }

    setAdmissionCategory(obj) {
      return this.serviceUitility.postRequest(this._setAdmissionCategory, obj);
    }
    delAdmissionCategory(obj) {
      return this.serviceUitility.postRequest(this._delAdmissionCategory, obj);
    }
  }


