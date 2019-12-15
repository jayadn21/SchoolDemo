import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class FacilityFeesService {

  private route = '/facilityfees';
  private _getfacilityfees = this.route + '/getfacilityfees';
  private _getfacilityfee = this.route + '/getfacilityfee';
  private _setfacilityfee = this.route + '/setfacilityfee';
  private _delfacilityfee = this.route + '/delfacilityfee';

  constructor(private ServiceUitility: ServiceUitility) { }

  getfacilityfeesDetails() {
    return this.ServiceUitility.postRequest(this._getfacilityfees, '');
  }

  getfacilityfeeDetails () {
    return this.ServiceUitility.postRequest(this._getfacilityfee, '');
  }


  setfacilityfeeDetails (obj) {
    return this.ServiceUitility.postRequest(this._setfacilityfee, obj);
  }

  delfacilityfeeDetails (obj) {
    return this.ServiceUitility.postRequest(this._delfacilityfee, obj);
  }

}
