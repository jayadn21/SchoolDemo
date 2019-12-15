import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignCombinationService {

private route = '/AssignCombination';
private _setStudentSubjectCombination = this.route + '/setStudentSubjectCombination';

constructor(private serviceUitility: ServiceUitility) { }

setStudentSubjectcombination(obj) {
    return this.serviceUitility.postRequest(this._setStudentSubjectCombination, obj);
  }

}

