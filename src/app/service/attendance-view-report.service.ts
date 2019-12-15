import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class AttendanceViewReportService {
  private route = '/ViewReport';
  private _getAttendanceSelectByBatchClassMonthe = this.route + '/getAttendanceSelectByBatchClassMonthe';

  constructor(private serviceUitility: ServiceUitility) { }

  getAttendanceViewReport(obj) {
    return this.serviceUitility.postRequest(this._getAttendanceSelectByBatchClassMonthe, obj);
  }
}
