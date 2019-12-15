import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private route = '/Student';
  private _getstudent = this.route + '/getstudent';

  constructor(private serviceUitility: ServiceUitility) { }

  getStudentDetails(obj) {
    return this.serviceUitility.postRequest(this._getstudent, obj);
  }
}
