import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ClasssectionService {
  private route = '/ClassSectionMedium';
  private _getClasssection = this.route + '/getClassSectionMediums';
  private _setClasssection = this.route + '/setClassSectionMedium';

  constructor(private serviceUitility: ServiceUitility) { }

getClasssectionDetails() {
  return this.serviceUitility.postRequest(this._getClasssection, '');
}

setClasssectionDetails(obj) {
  return this.serviceUitility.postRequest(this._setClasssection, obj);
}


}
