import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class SubjectPageService {
  private route = '/SubjectPage';
  private route1 =  '/SubjectType';

  private _getSubjectTypes = this.route1 + '/getSubjectTypes';
  private _getSubjectPages = this.route + '/getSubjects';
  private _getSubjectPage = this.route + '/getSubject';
  private _setSubjectPage = this.route + '/setSubject';
  private _delSubjectPage = this.route + '/delSubject';

  constructor(private serviceUitility: ServiceUitility) { }

  getSubjectTypes() {
    return this.serviceUitility.postRequest(this._getSubjectTypes, '');
  }

  getSubjects() {
    return this.serviceUitility.postRequest(this._getSubjectPages, '');
  }
  getSubject() {
    return this.serviceUitility.postRequest(this._getSubjectPage, '');
  }
  setSubject(obj) {
    return this.serviceUitility.postRequest(this._setSubjectPage, obj);
  }
  delSubject(obj) {
    return this.serviceUitility.postRequest(this._delSubjectPage, obj);
  }

}
