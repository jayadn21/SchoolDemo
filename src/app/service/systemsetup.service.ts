import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemsetupService {
  private route = '/SystemSetup';
  private getsystemsetupApi = this.route + '/getsystemsetup';

  constructor(private serviceUitility: ServiceUitility) { }

  getSystemsetupService(systemsetupData: any) {
    return this.serviceUitility.postRequest(this.getsystemsetupApi, systemsetupData);
  }

}
