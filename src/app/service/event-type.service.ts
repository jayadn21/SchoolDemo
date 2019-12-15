import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {
private route = '/EventType';
private _getEventTypes = this.route + '/getEventTypes';
private _getEventType = this.route + '/getEventType';
private _setEventType = this.route + '/setEventType';
private _delEventType = this.route + '/delEventType';

  constructor(private serviceUitility: ServiceUitility) { }

  getEventTypes() {
    return this.serviceUitility.postRequest(this._getEventTypes, '');
  }

  getEventType() {
    return this.serviceUitility.postRequest(this._getEventType, '');
  }

  setEventType(obj) {
    return this.serviceUitility.postRequest(this._setEventType, obj);
  }
  delEventType(obj) {
    return this.serviceUitility.postRequest(this._delEventType, obj);
  }

}
