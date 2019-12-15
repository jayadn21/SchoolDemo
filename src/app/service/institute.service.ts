import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})

export class InstituteService {
  // SaveorganisationService(InstituteGroup: {
  // Name: string; Address: string; City: string; District: string; Pincode: string; UploadFile: string;
  // State: string; Country: string; Contact: string; Phone1: string; Phone2: string;
  // }) {
  //   throw new Error('Method not implemented.');
  // }
  // private _serverURL = 'http://localhost:3005';

  private route = '/institutionGroupDetails';

  private getinstitutionGroupApi = this.route + '/getinstitutiongroup';
    // getinstitutiongroup

  private setinstitutiongroupApi = this.route + '/setinstitutiongroup';

  private route1 = '/InstitutionDetails';

  private getuserdefaultinstitutionApi = this.route1 + '/getuserdefaultinstitution';

  private saveInstitutionApi = this.route1 + '/setinstitution';

  constructor(private serviceUtility: ServiceUitility) { }

  getInstitutionGroupdetailsService(paramData: any) {
    return this.serviceUtility.postRequest(this.getinstitutionGroupApi, paramData);
  }

  getuserdefaultinstitutionService(paramData: any) {
    return this.serviceUtility.postRequest(this.getuserdefaultinstitutionApi, paramData);
  }
  SaveOrganizationService(Organization_obj: any) {
    return this.serviceUtility.postRequest(this.setinstitutiongroupApi, Organization_obj);
  }

  SaveSubOrganisation(SubOrganization_obj: any) {
    return this.serviceUtility.postRequest(this.saveInstitutionApi, SubOrganization_obj);
  }





}
