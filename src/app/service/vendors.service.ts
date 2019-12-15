import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

private route = '/Vendors';
private _getVendors = this.route + '/getvendors';
private _getVendor = this.route + '/getvendor';
private _setVendor = this.route + '/setvendor';
private _delVendor = this.route + '/delvendor';

  constructor(private serviceUitility: ServiceUitility) { }

  getVendorsDetails(){
    return this.serviceUitility.postRequest(this._getVendors,'');
  }

  getVendorDetails(){
    return this.serviceUitility.postRequest(this._getVendor,'');
  }

  setVendorDetails(obj){
    return this.serviceUitility.postRequest(this._setVendor, obj);
  }
  delVendorDetails(obj){
    return this.serviceUitility.postRequest(this._delVendor, obj);
  }

}
