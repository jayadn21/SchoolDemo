import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private route = '/GradeSetup';
  private _getGradeSetups = this.route + '/getGradeSetups';
  private _getGradeSetup = this.route + '/getGradeSetup';
  private _setGradeSetup = this.route + '/setGradeSetup';
  private _delGradeSetup = this.route + '/delGradeSetup';

    constructor(private serviceUitility: ServiceUitility) { }

    getGradeSetups() {
      return this.serviceUitility.postRequest(this._getGradeSetups, '');
    }

    getGradeSetup() {
      return this.serviceUitility.postRequest(this._getGradeSetup, '');
    }

    setGradeSetup(obj) {
      return this.serviceUitility.postRequest(this._setGradeSetup, obj);
    }
    delGradeSetup(obj) {
      return this.serviceUitility.postRequest(this._delGradeSetup, obj);
    }

}
