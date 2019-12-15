import { Institute } from './../../layout/admin/institute';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ManageEmployeesService } from 'src/app/service/manage-employees.service';
import { Employee } from './Employee';
import set = Reflect.set;
import { Router } from '@angular/router';
import { ModalService } from 'src/app/service/modal.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { InstituteService } from 'src/app/service/institute.service';
import { Institution } from 'src/app/theme/simple-page/Institution';
import { ITreeOptions, IActionMapping } from 'angular-tree-component';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss'],
  providers: [ManageEmployeesService, ModalService]
})
export class ManageEmployeesComponent implements OnInit, AfterViewInit {
  @ViewChild('tree') tree;
  myForm: FormGroup;
  modalName = 'Create New Employee';
  modalButtonText = 'Create';
  bodyText: string;
  employees: Employee[] = Array();
  selectedEmployee = new Employee();
  male: boolean;
  female: boolean;
  formBusy: boolean;

  InstitutionList: Institution[] = Array();
  selectedInstitutions = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList = [];
  users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  data2 = [];
  selectedTreeList: string[];

  InstituteGroup = {
    Id: '',
    Name: '',
    Address: '',
    City: '',
    District: '',
    Pincode: '',
    UploadFile: '',
    State: '',
    Country: '',
    Contact: '',
    Phone1: '',
    Phone2: '',
  };
  paramData = {
    Id: '',
  };
  data: Institution[] = Array();

  constructor(private _router: Router,
    private modalService: ModalService,
    private _getEmployees: ManageEmployeesService, private _getEmployee: ManageEmployeesService,
    private _updateEmployee: ManageEmployeesService, private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private _institute: InstituteService) { }

  ngOnInit() {
    this.getallEmployeesDetails();
    this.getInstitutionGroupDetails();
    this.dropdownSettings = {
      text: 'Select Sub-Divisions',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: 'myclass custom-class',
      primaryKey: 'Id',
      labelKey: 'Name',
      enableSearchFilter: false,
      searchBy: ['Name']
    };
  }

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

  ExpandTree() {
    this.tree.treeModel.expandAll();
  }

  

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  openNewEmpModal(id: string) {
    this.modalName = 'Create New Employee';
    this.modalButtonText = 'Create';
    this.InitEmployeeModel();
    this.openModal(id);
  }

  getallEmployeesDetails() {
    console.log();
    this.spinner.show();
    this._getEmployees.getallEmployeesDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.employees = data.data[0];
          // console.log(this.employees);
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }

      });
  }

  getInstitutionGroupDetails() {
    this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this._institute.getInstitutionGroupdetailsService(this.paramData)
      .subscribe(data => {
        if (data.success) {
          this.InstitutionList = data.institutions;
          this.data = data.institutions;
          //this.data2 = data;
        }
      });
  }

  UpdateEmployee(event) {
    console.log('in Updateemployee');
    this.spinner.show();
    this._updateEmployee.updateEmployee(this.selectedEmployee)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.getallEmployeesDetails();
          this.toastr.success('Successfully ' + this.modalButtonText + 'd Employee!', 'Success');
          this.InitEmployeeModel();
          this.closeModal(event);
        } else {
          this.spinner.hide();
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  // Toggle the buttons
  // Update the title

  InitEmployeeModel() {
    this.selectedEmployee = new Employee();
    this.selectedEmployee.InstitutionBranchId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this.selectedEmployee.UserTypeId = 1;
  }


  onCustomAction(event) {
    if (event.action === 'editrecord') {
      this.selectedEmployee = event.data;
      this.modalName = 'Update Employee';
      this.modalButtonText = 'Update';
      this.openModal('custom-modal-2');
    }
  }


  // tslint:disable-next-line: member-ordering
  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
        // { name: 'viewrecord', title: '&nbsp;&nbsp;<i class="fa fa-minus"></i>' }
      ],
      // position: 'right'
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa  fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',
    },
    columns: {
      Name: {
        title: 'Name',
      },
      UserName: {
        title: 'User Name',
      },
      EmpCode: {
        title: 'Employee Code',
      },
    },
  };
}
