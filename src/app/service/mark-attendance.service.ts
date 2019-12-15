import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class MarkAttendanceService {

  private route = '/CurrentClassSectionMedium';
  private getCurrentClassSectionMediumAPI = this.route + '/getCurrentClassSectionMedium';
  private route1 = '/AttendanceInsert';
  private setAttendanceInsertAPI = this.route1 + '/setattendanceInsert';
  private route2 = '/AttendanceSelect';
  private getStudentSelectForAttendanceAPI = this.route2 + '/getStudentSelectForAttendance';
  private route3 = '/ApplicationForm';
  private setapplicationformAPI = this.route3 + '/setapplicationform';

  constructor(private serviceUitility: ServiceUitility) { }

  getCurrentClassSectionMedium(obj) {
    return this.serviceUitility.postRequest(this.getCurrentClassSectionMediumAPI, obj);
  }
  setAttendanceInsert(obj) {
    return this.serviceUitility.postRequest(this.setAttendanceInsertAPI, obj);
  }
  getStudentSelectForAttendance(obj) {
    return this.serviceUitility.postRequest(this.getStudentSelectForAttendanceAPI, obj);
  }
  setApplicationform(obj) {
    return this.serviceUitility.postRequest(this.setapplicationformAPI, obj);
  }
}
