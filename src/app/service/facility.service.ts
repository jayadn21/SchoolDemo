import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private route = '/facility';
  private _getfacilities = this.route + '/getfacilities';
  private _getfacility = this.route + '/getfacility';
  private _setfacility = this.route + '/setfacility';

  constructor(private ServiceUitility: ServiceUitility) { }

  getfacilitiesDetails () {
    return this.ServiceUitility.postRequest(this._getfacilities, '');
  }

  getfacilityDetails () {
    return this.ServiceUitility.postRequest(this._getfacility, '');
  }


  setfacilityDetails (obj) {
    return this.ServiceUitility.postRequest(this._setfacility, obj);
  }
}
