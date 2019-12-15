import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private route = '/Assets';
private _getAssets = this.route + '/getassets';
private _getAsset = this.route + '/getasset';
private _setAsset = this.route + '/setasset';
private _delAsset = this.route + '/delasset';

  constructor(private serviceUitility: ServiceUitility) { }

  getAssetsDetails(){
    return this.serviceUitility.postRequest(this._getAssets,'');
  }

  getAssetDetails(){
    return this.serviceUitility.postRequest(this._getAsset,'');
  }

  setAssetDetails(obj){
    return this.serviceUitility.postRequest(this._setAsset, obj);
  }
  delAssetDetails(obj){
    return this.serviceUitility.postRequest(this._delAsset, obj);
  }

}
