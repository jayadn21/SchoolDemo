import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';
@Injectable({
  providedIn: 'root'
})

export class StudentQuotaService {

  private route = '/StudentQuota';
  private getStudentQuotasApi = this.route + '/getstudentquotas';
  private getStudentQuotaApi = this.route + '/getstudentquota';
  private setStudentQuotaApi = this.route + '/setstudentquota';
  constructor(private serviceUitility: ServiceUitility) { }

  getStudentQuotas() {
  return this.serviceUitility.postRequest(this.getStudentQuotasApi, '');
}

getStudentQuota(obj) {
  return this.serviceUitility.postRequest(this.getStudentQuotaApi, obj);
}

setStudentQuota(obj) {
  return this.serviceUitility.postRequest(this.setStudentQuotaApi, obj);
}
}
