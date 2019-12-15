import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class GetinstituteuserService {
private route = '/InstitutionDetails';
private _getInstitutionUserMappings =  this.route + '/getInstitutionUserMappings';
private _setinstitution  = this.route + '/setinstitution';


  constructor(private serviceUitility: ServiceUitility) { }

  getInstitutionUserMappings(userLoginId) {
    return this.serviceUitility.postRequest(this._getInstitutionUserMappings, userLoginId);
  }

  setinstitution(obj) {
  return this.serviceUitility.postRequest(this._setinstitution, obj);
  }

}
