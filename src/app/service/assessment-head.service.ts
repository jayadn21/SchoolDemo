import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssessmentHeadService {

private route = '/AssessmentHeads';
private _getAssessmentHeads = this.route + '/getAssessmentHeads';
private _getAssessmentHead = this.route + '/getAssessmentHead';
private _setAssessmentHead = this.route + '/setAssessmentHead';
private _delAssessmentHead = this.route + '/delAssessmentHead';

  constructor(private serviceUitility: ServiceUitility) { }

  getAssessmentheads() {
    return this.serviceUitility.postRequest(this._getAssessmentHeads, '');
  }
  getAssessmentHead() {
    return this.serviceUitility.postRequest(this._getAssessmentHead, '');
  }
  setAssessmentHead(obj) {
    return this.serviceUitility.postRequest(this._setAssessmentHead, obj);
  }
  delAssessmentHead(obj) {
    return this.serviceUitility.postRequest(this._delAssessmentHead, obj);
  }

}


