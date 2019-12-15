import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class SubjectCombinationService {

  private route = '/SubjectCombination';
  private _getSubjectCombinations = this.route + '/getSubjectCombinations';
  private _getSubjectCombination = this.route + '/getSubjectCombination';
  private _setSubjectCombination = this.route + '/setSubjectCombination';
  private _ddelSubjectCombination = this.route + '/delSubjectCombination';

    constructor(private serviceUitility: ServiceUitility) { }

    getsubjectCombinations() {
      return this.serviceUitility.postRequest(this._getSubjectCombinations, '');
    }
    getsubjectCombination() {
      return this.serviceUitility.postRequest(this._getSubjectCombination, '');
    }
    setsubjectCombination(obj) {
      return this.serviceUitility.postRequest(this._setSubjectCombination, obj);
    }
    delsubjectCombination(obj) {
      return this.serviceUitility.postRequest(this._ddelSubjectCombination, obj);
    }
  }




