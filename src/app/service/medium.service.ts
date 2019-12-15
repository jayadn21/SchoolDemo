import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';


@Injectable({
  providedIn: 'root'
})
export class MediumService {
  private route = '/Medium';
  private _getMedium = this.route + '/getmediums';
  private _setMedium = this.route + '/setmedium';

  constructor( private serviceUitility: ServiceUitility) { }

  getMediumsDetails() {
    return this.serviceUitility.postRequest(this._getMedium, '');
  }

  setMediumDetails(obj) {
    return this.serviceUitility.postRequest(this._setMedium, obj);
  }

}
