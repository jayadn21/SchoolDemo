import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';


@Injectable({
  providedIn: 'root'
})
export class AttendanceSetupService {

  private route = '/AttendanceSetup';
  private _getAttendances = this.route + '/getattendances';
  private _getAttendance = this.route + '/getattendance';
  private _setAttendance = this.route + '/setattendance';
  private _delAttendance = this.route + '/delattendance';
  
    constructor(private serviceUitility: ServiceUitility) { }
  
    getAttendancesDetails(){
      return this.serviceUitility.postRequest(this._getAttendances,'');
    }
  
    getAttendanceDetails(){
      return this.serviceUitility.postRequest(this._getAttendance,'');
    }
  
    setAttendanceDetails(obj){
      return this.serviceUitility.postRequest(this._setAttendance, obj);
    }
    delAttendanceDetails(obj){
      return this.serviceUitility.postRequest(this._delAttendance, obj);
    }
  
  }
  
