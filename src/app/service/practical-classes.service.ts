import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class PracticalClassesService {

  private route = '/PracticalClasses';
  private _getpracticals = this.route + '/getpracticals';
  private _getpractical = this.route + '/getpractical';
  private _setpractical = this.route + '/setpractical';
  private _delpractical = this.route + '/delpractical';
  
    constructor(private serviceUitility: ServiceUitility) { }
  
    getpracticalsDetails(){
      return this.serviceUitility.postRequest(this._getpracticals,'');
    }
  
    getpracticalDetails(){
      return this.serviceUitility.postRequest(this._getpractical,'');
    }
  
    setpracticalDetails(obj){
      return this.serviceUitility.postRequest(this._setpractical, obj);
    }
    delpracticalDetails(obj){
      return this.serviceUitility.postRequest(this._delpractical, obj);
    }
  
}
