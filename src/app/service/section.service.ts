import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private route = '/ClassAndSection';
  private _getSections = this.route + '/getsections';
  private _setSection = this.route + '/setsection';

// private _getSections = 'http://localhost:3005/ClassAndSection/getsections';
// private _setSection = 'http://localhost:3005/ClassAndSection/setsection';

  constructor(// private http: HttpClient,
    private serviceUitility: ServiceUitility) { }

  getSectionDetails() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'x-access-token': JSON.parse(localStorage.getItem('id_token'))

    //   })
    // };
    return this.serviceUitility.postRequest(this._getSections, '');
  }
  setSectionDetails(obj) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'x-access-token': JSON.parse(localStorage.getItem('id_token'))
    //   })
    // };
    return this.serviceUitility.postRequest(this._setSection, obj);
  }

}
