import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ReportSetupService {

  private route = '/ReportSetup';
  private _getReports = this.route + '/getreports';
  private _getReport = this.route + '/getreport';
  private _setReport = this.route + '/setreport';
  private _setSingleReport = this.route + '/setsinglereport';
  private _delReport = this.route + '/delreport';
  
    constructor(private serviceUitility: ServiceUitility) { }
  
    getReportsDetails(){
      return this.serviceUitility.postRequest(this._getReports,'');
    }
  
    getReportDetails(){
      return this.serviceUitility.postRequest(this._getReport,'');
    }
  
    setReportDetails(obj){
      return this.serviceUitility.postRequest(this._setReport, obj);
    }
    setSingleReportDetails(obj){
      return this.serviceUitility.postRequest(this._setSingleReport, obj);
    }
    delReportDetails(obj){
      return this.serviceUitility.postRequest(this._delReport, obj);
    }
  
  }
  
