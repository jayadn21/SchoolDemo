import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class AdmincomponentService {
private route = '/InstitutionDetails';
private _getuserdefaultinstitution = this.route + '/getuserdefaultinstitution';
private _setinstitution = this.route + '/setinstitution';

  constructor( private serviceUitility: ServiceUitility) { }

  getuserdefaultinstitution(UserLoginId) {
    return this.serviceUitility.postRequest(this._getuserdefaultinstitution, UserLoginId);
  }

  setinstitution(obj) {
  return this.serviceUitility.postRequest(this._setinstitution, obj);
  }


}
