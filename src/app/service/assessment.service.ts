import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

private route = '/Assessment';
private _getAssessments = this.route + '/getAssessments';
private _getAssessment = this.route + '/getAssessment';
private _setAssessment = this.route + '/setAssessment';
private _delAssessment = this.route + '/delAssessment';

  constructor(private serviceUitility: ServiceUitility) { }

  getAssessmentBook() {
    return this.serviceUitility.postRequest(this._getAssessments, '');
  }

  getAssessment() {
    return this.serviceUitility.postRequest(this._getAssessment, '');
  }

  setAssessment(obj) {
    return this.serviceUitility.postRequest(this._setAssessment, obj);
  }
  delAssessment(obj) {
    return this.serviceUitility.postRequest(this._delAssessment, obj);
  }

}

