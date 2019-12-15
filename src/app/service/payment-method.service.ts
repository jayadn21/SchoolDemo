import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private route = '/PaymentMethod';
  private getPaymentMethodsAPI = this.route + '/getPaymentMethods';
  private getPaymentMethodAPI = this.route + '/getPaymentMethod';
  private setPaymentMethodAPI = this.route + '/setPaymentMethod';

  constructor(private ServiceUitility: ServiceUitility) { }

  getPaymentMethods() {
    return this.ServiceUitility.postRequest(this.getPaymentMethodsAPI, '');
  }

  getPaymentMethod() {
    return this.ServiceUitility.postRequest(this.getPaymentMethodAPI, '');
  }


  setPaymentMethod(obj) {
    return this.ServiceUitility.postRequest(this.setPaymentMethodAPI, obj);
  }

}
