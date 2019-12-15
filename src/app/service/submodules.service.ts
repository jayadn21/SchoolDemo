import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmodulesService {
  getsubmodule() {
    throw new Error("Method not implemented.");
  }
private route = '/SubModules';
private _getSubmodules = this.route + '/getSubmodules';
private _getSubmodulesForGrid = this.route + '/getSubmodulesForGrid';
private _getSubmodule = this.route + '/getSubmodule';
private _setSubmodule = this.route + '/setSubmodule';
  constructor(private serviceUitility: ServiceUitility) { }

  getSubmodulesDetails(){
    return this.serviceUitility.postRequest(this._getSubmodules,'');
  }

  getSubModulesForGrid(){
    return this.serviceUitility.postRequest(this._getSubmodulesForGrid,'');
  }

  getSubmoduleDetails(obj){
    return this.serviceUitility.postRequest(this._getSubmodule, obj);
  }
  setSubmoduleDetails(obj){
    return this.serviceUitility.postRequest(this._setSubmodule, obj);
  }
}
