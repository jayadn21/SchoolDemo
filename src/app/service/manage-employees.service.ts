import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class ManageEmployeesService {
  private employeeRoute = '/Employee';
  private institutionGroupDetailsRoute = '/institutionGroupDetails';

  private _getEmployees = this.employeeRoute + '/getemployees';
  private _getEmployee = this.employeeRoute + '/getEmployee';
  private _getEmployeeByUserName = this.employeeRoute + '/getEmployeeByUserName';
  private _updateEmployee = this.employeeRoute + '/setemployeedetails';
  private _UpdateEmployeeProfile = this.employeeRoute + '/UpdateEmployeeProfile';
  
  private getinstitutionGroupApi = this.institutionGroupDetailsRoute + '/getinstitutiongroup';


  constructor(private serviceUitility: ServiceUitility ) { }

  getallEmployeesDetails() {
    return this.serviceUitility.postRequest(this._getEmployees, '');
  }

  getparticularEmployee(obj) {
  return this.serviceUitility.postRequest(this._getEmployee, obj);
}

getEmployeeByUserName(obj) {
  return this.serviceUitility.postRequest(this._getEmployeeByUserName, obj);
}

updateEmployee(obj) {
  return this.serviceUitility.postRequest(this._updateEmployee, obj);
}

UpdateEmployeeProfile(obj) {
  return this.serviceUitility.postRequest(this._UpdateEmployeeProfile, obj);
}

getInstitutionGroupdetailsService(paramData: any) {
  return this.serviceUitility.postRequest(this.getinstitutionGroupApi, 'paramData');
}
}

