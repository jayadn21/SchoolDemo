import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private route = '/modules';
  private _getModules = this.route + '/getmodules';
  private _getModule = this.route + '/getmodule'; 
  private _setModule = this.route + '/setmodule';

  constructor(private serviceUitility: ServiceUitility) { }

  getModulesDetails(){
    return this.serviceUitility.postRequest(this._getModules,'');
  }

  getModuleDetails(){
    return this.serviceUitility.postRequest(this._getModule,'');
  }

  setModuleDetails(obj){
    return this.serviceUitility.postRequest(this._setModule, obj);
  }
}
