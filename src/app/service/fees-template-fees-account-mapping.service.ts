import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeesTemplateFeesAccountMappingService {

private route = '/FeesTemplateFeesAccountMapping';
private _getFeesTemplateFeesAccountMappings = this.route + '/getFeesTemplateFeesAccountMappings';
private _getFeesTemplateFeesAccountMapping = this.route + '/getFeesTemplateFeesAccountMapping';
private _setFeesTemplateFeesAccountMapping = this.route + '/setFeesTemplateFeesAccountMapping';
private _delFeesTemplateFeesAccountMapping = this.route + '/delFeesTemplateFeesAccountMapping';
private _getFeesTemplateFeesAccountMapping_Totals = this.route + '/getFeesTemplateFeesAccountMapping_Totals';

  constructor(private serviceUitility: ServiceUitility) { }

  getFeestemplateFeesaccountMappings() {
    return this.serviceUitility.postRequest(this._getFeesTemplateFeesAccountMappings, '');
  }

  getFeesTemplateFeesAccountMapping() {
    return this.serviceUitility.postRequest(this._getFeesTemplateFeesAccountMapping, '');
  }

  setFeesTemplateFeesAccountMapping(obj) {
    return this.serviceUitility.postRequest(this._setFeesTemplateFeesAccountMapping, obj);
  }
  delFeesTemplateFeesAccountMapping(obj) {
    return this.serviceUitility.postRequest(this._delFeesTemplateFeesAccountMapping, obj);
  }
  getFeesTemplateFeesAccountMapping_Totals() {
    return this.serviceUitility.postRequest(this._getFeesTemplateFeesAccountMapping_Totals, '');
  }

}


