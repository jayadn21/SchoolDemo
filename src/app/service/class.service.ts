import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private route = '/ClassAndSection';
  private _getClasses = this.route + '/getclasses';
  private _setClass = this.route + '/setclass';

constructor(private serviceUitility: ServiceUitility) { }

getClassesDetails() {
  return this.serviceUitility.postRequest(this._getClasses, '');
}

setClassesDetails(obj) {
  return this.serviceUitility.postRequest(this._setClass, obj);
}



}
