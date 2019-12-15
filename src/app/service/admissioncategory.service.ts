import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';
@Injectable({
  providedIn: 'root'
})

export class AdmissioncategoryService {

  private route = '/AdmissionCategory';
  private getAdmissionCategoriesApi = this.route + '/getadmissioncategories';
  private getAdmissionCategoryApi = this.route + '/getadmissioncategory';
  private setAdmissionCategoryApi = this.route + '/setadmissioncategory';
  constructor(private serviceUitility: ServiceUitility) { }

  getAdmissionCategories() {
  return this.serviceUitility.postRequest(this.getAdmissionCategoriesApi, '');
}

getAdmissionCategory(obj) {
  return this.serviceUitility.postRequest(this.getAdmissionCategoryApi, obj);
}

setAdmissionCategory(obj) {
  return this.serviceUitility.postRequest(this.setAdmissionCategoryApi, obj);
}
}
