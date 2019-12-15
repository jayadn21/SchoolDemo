import { ServiceUitility } from './ServiceUitility';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmissionTicketService {

private route = '/AdmissionTicket';
private _getAdmissionTickets = this.route + '/getAdmissionTickets';
private _getAdmissionTicket = this.route + '/getAsgetAdmissionTicketsessmentHead';
private _setAdmissionTicket = this.route + '/setAdmissionTicket';
private _delAdmissionTicket = this.route + '/delAdmissionTicket';

  constructor(private serviceUitility: ServiceUitility) { }

  getAdmissiontickets() {
    return this.serviceUitility.postRequest(this._getAdmissionTickets, '');
  }
  getAdmissionTicket() {
    return this.serviceUitility.postRequest(this._getAdmissionTicket, '');
  }
  setAdmissionTicket(obj) {
    return this.serviceUitility.postRequest(this._setAdmissionTicket, obj);
  }
  delAdmissionTicket(obj) {
    return this.serviceUitility.postRequest(this._delAdmissionTicket, obj);
  }

}


