import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class FeesHeadersService {
  private route = '/FeesHeaders';
  private getFeesHeadersAPI = this.route + '/getFeesHeaders';
  private getFeesHeaderAPI = this.route + '/getFeesHeader';
  private setFeesHeadersAPI = this.route + '/setFeesHeader';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getFeesHeaders() {
    return this.ServiceUitility.postRequest(this.getFeesHeadersAPI, '');
  }

  getFeesHeader() {
    return this.ServiceUitility.postRequest(this.getFeesHeaderAPI, '');
  }


  setFeesHeaders(obj) {
    return this.ServiceUitility.postRequest(this.setFeesHeadersAPI, obj);
  }

}
