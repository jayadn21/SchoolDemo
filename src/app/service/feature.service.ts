import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private route = '/modules';
  private getmodulesApi = this.route + '/getmodules';
  private getmoduleApi = this.route + '/getmodule';
  private setmodulesApi = this.route + '/setmodule';

  constructor(private serviceUitility: ServiceUitility) { }
  getmodules() {
    return this.serviceUitility.postRequest(this.getmodulesApi, '');
  }
  getmodule(Obj) {
    return this.serviceUitility.postRequest(this.getmoduleApi, Obj);
  }
  setmodules(Obj) {
    return this.serviceUitility.postRequest(this.setmodulesApi, Obj);
  }
}
