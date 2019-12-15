import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userprofilemoduleMappingService {
  private route = '/UserProfileModuleMapping';
  private _getUserprofiles = this.route + '/getuserprofilemodulemappings';
  private _getUserprofile = this.route + '/getuserprofilemodulemapping';
  private _setuserprofilemodulemapping = this.route + '/setuserprofilemodulemapping';

  constructor(private ServiceUitility: ServiceUitility) { }

  getUserprofileDetails () {
    return this.ServiceUitility.postRequest(this._getUserprofiles, '');
  }

  getUserprofileDetail (obj) {
    return this.ServiceUitility.postRequest(this._getUserprofile, obj);
  }

  setuserprofilemodulemapping(user: any) {
    return this.ServiceUitility.postRequest(this._setuserprofilemodulemapping, user);
  }  
}

