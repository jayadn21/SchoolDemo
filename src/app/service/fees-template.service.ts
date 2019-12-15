import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class FeesTemplateService {
  private route = '/FeesTemplate';
  private getFeesTemplatesAPI = this.route + '/getFeesTemplates';
  private getFeesTemplateAPI = this.route + '/getFeesTemplate';
  private setFeesTemplateAPI = this.route + '/setFeesTemplate';
  private deltFeesTemplateAPI = this.route + '/delFeesTemplate';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceUitility: ServiceUitility) { }

  getFeestemplates() {
    return this.ServiceUitility.postRequest(this.getFeesTemplatesAPI, '');
  }

  getFeestemplate() {
    return this.ServiceUitility.postRequest(this.getFeesTemplateAPI, '');
  }

  setFeestemplate(obj) {
    return this.ServiceUitility.postRequest(this.setFeesTemplateAPI, obj);
  }

  delFeestemplate() {
    return this.ServiceUitility.postRequest(this.deltFeesTemplateAPI, '');
  }

}
