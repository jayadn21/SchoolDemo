import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class CustomFieldsService {
  private route = '/CustomField';
  private _getCustomFields = this.route + '/getCustomFields';
  private _getCustomField = this.route + '/getCustomField';
  private _setCustomField = this.route + '/setCustomField';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getCustomFields() {
    return this.ServiceUitility.postRequest(this._getCustomFields, '');
  }

  getCustomField() {
    return this.ServiceUitility.postRequest(this._getCustomField, '');
  }

  setCustomField(obj) {
    return this.ServiceUitility.postRequest(this._setCustomField, obj);
  }

}

