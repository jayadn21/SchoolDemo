import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private route = '/userprofile';
  private _getUserprofiles = this.route + '/userprofileSelectAll';
  private _setUserprofile = this.route + '/SetUserprofile';
  private _setuserprofilemodulemapping = this.route + '/setuserprofilemodulemapping';

  constructor(private ServiceUitility: ServiceUitility) { }

  getUserprofileDetails () {
    return this.ServiceUitility.postRequest(this._getUserprofiles, '');
  }

  setUserprofileDetails (obj) {
    return this.ServiceUitility.postRequest(this._setUserprofile, obj);
  }
}

