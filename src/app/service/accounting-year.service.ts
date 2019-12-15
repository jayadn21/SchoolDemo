import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AccountingyearService {
  private route = '/academicyear';
  private _getaccountingyears = this.route + '/getacademicyears';
  private _getaccountingyear = this.route + '/getacademicyear';
  private _setaccountingyear = this.route + '/setacademicyear';

  constructor(private ServiceUitility: ServiceUitility) { }

  getaccountingyearsDetails () {
    return this.ServiceUitility.postRequest(this._getaccountingyears, '');
  }

  getaccountingyearDetails () {
    return this.ServiceUitility.postRequest(this._getaccountingyear, '');
  }


  setaccountingyearDetails (obj) {
    return this.ServiceUitility.postRequest(this._setaccountingyear, obj);
  }
}