import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';
@Injectable({
  providedIn: 'root'
})
export class AdmissionEnquiryService {
  private route = '/ApplicationForm';
  private getApplicationFormsApi = this.route + '/getapplicationforms';
  private getApplicationFormApi = this.route + '/getapplicationform';
  private deleteApplicationFormApi = this.route + '/deleteapplicationform';
  private setApplicationFormApi = this.route + '/setapplicationform';
  private makeAdmissionApi = this.route + '/makeadmission';
  private route1 = '/AcademicYear';
  private getacademicyearsApi = this.route1 + '/getacademicyears';
  private route2 = '/AddOnFacility';
  private getAddOnFacilitiesApi = this.route2 + '/getAddOnFacilities';
  private route3 = '/ApplicationFormAddOnFacilityMapping';
  private getApplicationFormAddOnFacilityMappingApi = this.route3 + '/getApplicationFormAddOnFacilityMapping';
  private route4 = '/Caste';
  private getcasteApi = this.route4 + '/getCastes';
  private route5 = '/Medium';
  private getmediumsApi = this.route5 + '/getmediums';
  private route6 = '/Pattern';
  private getpatternApi = this.route6 + '/getPatterns';
  private route12 = '/Religion';
  private getreligionApi = this.route12 + '/getReligions';
  private route11 = '/ReservationCategory';
  private getreservationCategoryApi = this.route11 + '/getReservationCategorys';
  private route7 = '/SubCaste';
  private getsubCasteApi = this.route7 + '/getSubCastes';
  private route8 = '/FeesAccount';
  private getFeesAccountsApi = this.route8 + '/getFeesAccounts';
  private route9 = '/IncomeAccount';
  private getIncomeAccountsApi = this.route9 + '/getIncomeAccounts';
  private route0 = '/PaymentMethod';
  private getPaymentMethodsApi = this.route0 + '/getPaymentMethods';

  constructor( private serviceUitility: ServiceUitility) { }
  getApplicationForms() {
    return this.serviceUitility.postRequest(this.getApplicationFormsApi, '');
  }

  getApplicationForm(obj) {
    return this.serviceUitility.postRequest(this.getApplicationFormApi, obj);
  }

  deleteApplicationForm(obj) {
    return this.serviceUitility.postRequest(this.deleteApplicationFormApi, obj);
  }

  setApplicatiomForms(obj) {
    return this.serviceUitility.postRequest(this.setApplicationFormApi, obj);
  }

  makeAdmission(obj) {
    return this.serviceUitility.postRequest(this.makeAdmissionApi, obj);
  }

  getAcademicYears() {
    return this.serviceUitility.postRequest(this.getacademicyearsApi, '');
  }

  getAddOnFacilities() {
    return this.serviceUitility.postRequest(this.getAddOnFacilitiesApi, '');
  }

  getApplicationFormAddOnFacilityMapping() {
    return this.serviceUitility.postRequest(this.getApplicationFormAddOnFacilityMappingApi, '');
  }

  getCaste() {
    return this.serviceUitility.postRequest(this.getcasteApi, '');
  }

  getMediums() {
    return this.serviceUitility.postRequest(this.getmediumsApi, '');
  }

  getPattern() {
    return this.serviceUitility.postRequest(this.getpatternApi, '');
  }

  getReligion() {
    return this.serviceUitility.postRequest(this.getreligionApi, '');
  }

  getReservationCategory() {
    return this.serviceUitility.postRequest(this.getreservationCategoryApi, '');
  }

  getSubCaste() {
    return this.serviceUitility.postRequest(this.getsubCasteApi, '');
  }

  getFeesAccounts() {
    return this.serviceUitility.postRequest(this.getFeesAccountsApi, '');
  }

  getIncomeAccounts() {
    return this.serviceUitility.postRequest(this.getIncomeAccountsApi, '');
  }

  getPaymentMethods() {
    return this.serviceUitility.postRequest(this.getPaymentMethodsApi, '');
  }

  }

