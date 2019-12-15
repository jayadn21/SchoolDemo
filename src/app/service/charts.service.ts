import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private route = '/charts';
  private _getcharts = this.route + '/getcharts';
  private _getchart = this.route + '/getchart';
  private _setchart = this.route + '/setchart';
  private _delchart = this.route + '/delchart';

  constructor(private ServiceUitility: ServiceUitility) { }

  getchartsDetails() {
    return this.ServiceUitility.postRequest(this._getcharts, '');
  }

  getchartDetails() {
    return this.ServiceUitility.postRequest(this._getchart, '');
  }


  setchartDetails(obj) {
    return this.ServiceUitility.postRequest(this._setchart, obj);
  }


  delchartDetails(obj) {
    return this.ServiceUitility.postRequest(this._delchart, obj);
  }
}