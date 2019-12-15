import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class SubjectCombinationMappService {

  private route = '/SubjectCombinationMapp';
  private _getSubjectCombinationMapps = this.route + '/getSubjectCombinationMappings';
  private _getSubjectCombinationMapp = this.route + '/getSubjectCombinationMapping';
  private _setSubjectCombinationMapp = this.route + '/setSubjectCombinationMapping';
  private _delSubjectCombinationMapp = this.route + '/delSubjectCombinationMapping';

    constructor(private serviceUitility: ServiceUitility) { }

    getSubjectcombinationMappings() {
      return this.serviceUitility.postRequest(this._getSubjectCombinationMapps, '');
    }
    getSubjectcombinationMapping() {
      return this.serviceUitility.postRequest(this._getSubjectCombinationMapp, '');
    }
    setSubjectcombinationMapping(obj) {
      return this.serviceUitility.postRequest(this._setSubjectCombinationMapp, obj);
    }
    delSubjectcombinationMapping(obj) {
      return this.serviceUitility.postRequest(this._delSubjectCombinationMapp, obj);
    }
  }





