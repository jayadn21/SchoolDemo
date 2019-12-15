import { ToastrService } from 'ngx-toastr';
import { SystemsetupService } from './../../service/systemsetup.service';
import { FormsModule } from './../forms/forms.module';
import { AuthService } from './../../service/auth.service';
import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import set = Reflect.set;
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InstituteService } from 'src/app/service/institute.service';
import { getLocaleDateFormat } from '@angular/common';
import { Institution } from './Institution';
import { HttpClient } from '@angular/common/http';
import { CustomValidators } from 'ng2-validation';
import { NgxSpinnerService } from 'ngx-spinner';
import { ITreeOptions, IActionMapping } from 'angular-tree-component';
import { SubmodulesService } from 'src/app/service/submodules.service';
import { SubModule } from 'src/app/shared/Models/submodule';
import { Modules } from 'src/app/shared/Models/modules';
import { ArrayHelper } from 'src/app/shared/HelperClasses/ArrayHelper';
import { Employee } from 'src/app/Employees/manage-employees/Employee';

// import { ModalService } from 'src/app/service/modal.service';



@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',

  styleUrls: ['./simple-page.component.scss'],
  providers: [InstituteService, SystemsetupService]
})

export class SimplePageComponent implements OnInit{
  myForm: FormGroup;



  // modalName1 = 'Add New';
  // bodyText: string;

  modalName = 'Add Institution';

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

  NewInstitution = {
    Id: '-1',
    InstitutionGroupId: '',
    Name: '',
    Address: '',
    City: '',
    District: '',
    State: '',
    Country: '',
    Pincode: '',
    TeachingMedium: '',
    Phone1: '',
    Phone2: '',
    EmailId: '',
    Fax: '',
    Logo: '',
    DiseNumber: '',
    IsReadOnlyMode: ''
  };

  data: Institution[] = Array();

  syetemSetup = {
    Id: '',
    InstitutionId: '',
    DefaultDateTimeZoneId: '',
    PaginationPerPage: '',
    PaginationNumberOfLinksToShow: '',
    DefaultApplicationFeesId: '',
    SignatureOfDdpi: '',
    SmsEnabled: '',
    ParentsLoginEnabled: '',
    MergePaymentReport: '',
    MannualAttandanceRollNumber: '',
  };

  systemsetupData = {
    InstitutionId: '',
  };

  paramData = {
    Id: '',
  };

  private isSaveSubOrganisationButtonVisible = true;
  public config: any;

  constructor(private _router: Router,
    // private modalService: ModalService,
    private _institute: InstituteService, private _saveorganisation: InstituteService,
    private _systemsetupURL: SystemsetupService, private toastr: ToastrService,
    private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {

  }


  ngOnInit(): void {
    // this.bodyText = 'This text can be updated in modal 1';
    this.getInstitutionGroupDetails();
    this.getSubDivisionGroupDetails();
    this.spinner.show();
    this.systemsetupData.InstitutionId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this._systemsetupURL.getSystemsetupService(this.systemsetupData)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.syetemSetup = data.data[0][0];
          console.log('Success: ' + this.syetemSetup.MergePaymentReport);
        } else {
          console.log('error: ' + data.message);
        }
      });

  }
  // openModal(id: string) {
  //   this.modalService.open(id);
  // }
  // closeModal(id: string) {
  //   this.modalService.close(id);
  // }
  // openModal1(id: string) {
  //   this.modalService.open(id);
  // }
  // closeModal1(id: string) {
  //   this.modalService.close(id);
  // }




  getInstitutionGroupDetails() {
    this.spinner.show();
    this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    // console.log(this.paramData);
    this._institute.getInstitutionGroupdetailsService(this.paramData)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.InstituteGroup = data.institutionGroup[0];
          console.log('institutionGroup: ' + this.InstituteGroup.Name);
        } else {
        }
      });
  }

  getSubDivisionGroupDetails() {
    // this.spinner.show();
    this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    // console.log(this.paramData);
    this._institute.getInstitutionGroupdetailsService(this.paramData)
      .subscribe(data => {
        if (data.success) {
          // this.spinner.hide();
          console.log(data.institutions);
          this.data = data.institutions;
        } else {
        }
      });
  }

  // For Add new
  addNewInstitutionModal(event) {
    this.ClearModalData();
    document.querySelector('#' + event).classList.add('md-show');
  }
  updateInstitutionModal(event) {
    this.modalName = 'Update Institution';
    document.querySelector('#' + event).classList.add('md-show');
    this.isSaveSubOrganisationButtonVisible = false;
  }

  closeInstitutionModal(event) {
    // ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    document.querySelector('#' + event).classList.remove('md-show');
  }

  SaveOrganisation() {
    this.spinner.show();
    this.InstituteGroup.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this._saveorganisation.SaveOrganizationService(this.InstituteGroup)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('Institution Group Details saved!', 'Save Success!', {
            timeOut: 2000
          });
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  SaveSubOrganisation() {
    this.spinner.show();
    this.NewInstitution.InstitutionGroupId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    // For new Institution, send Id as -1.
    this.NewInstitution.Id = '-1';
    this.NewInstitution.IsReadOnlyMode = '0';
    this._saveorganisation.SaveSubOrganisation(this.NewInstitution)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.getSubDivisionGroupDetails();
          document.getElementById('closesubdivisionpopUp').click();
          this.toastr.success('Institution Details saved!', 'Save Success!', {
            timeOut: 2000
          });
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  UpdateSubOrganisation() {
    this.spinner.show();
    this.NewInstitution.InstitutionGroupId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    // For new Institution, send Id as -1.
    // this.NewInstitution.Id = SubdivisionId;
    this.NewInstitution.IsReadOnlyMode = '0';
    this._saveorganisation.SaveSubOrganisation(this.NewInstitution)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.getSubDivisionGroupDetails();
          document.getElementById('closesubdivisionpopUp').click();
          this.toastr.success('Institution Details saved!', 'Save Success!', {
            timeOut: 2000
          });
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  /*Save(Id: any) {
    this.Id. = JSON.parse(localStorage.getItem('user'));
    console.log('token is as follows:');
    console.log(localStorage.getItem('id_token'));

     this._auth.Save(this.Id)
                        .subscribe(data => {
                           console.log(this.Id);
                             if (data.success)  {
                             console.log('successfully changed password');
                             this._router.navigate(['InstitutionDetails/institution']);
                           }
               });

           }
  Id(Id: any) {
    throw new Error("Method not implemented.");
  }*/


  // ng2-smart table start

  onCustomAction(event) {
    console.log(event.data);
    // this.onCustomAction(event.editrecord);
    if (event.action === 'editrecord') {
      // document.getElementById('addsubdivisionPopup').click();
      this.NewInstitution = event.data;
      this.updateInstitutionModal('addsubdivision');
      // this.UpdateSubOrganisation();
    }
  }

  ClearModalData() {
    this.modalName = 'Add Institution';
    this.isSaveSubOrganisationButtonVisible = true;
    this.NewInstitution.Id = '-1';
    // this.InstitutionGroupId= '';
    this.NewInstitution.Name = '';
    this.NewInstitution.Address = '';
    this.NewInstitution.City = '';
    this.NewInstitution.District = '';
    this.NewInstitution.State = '';
    this.NewInstitution.Country = '';
    this.NewInstitution.Pincode = '';
    this.NewInstitution.TeachingMedium = '';
    this.NewInstitution.Phone1 = '';
    this.NewInstitution.Phone2 = '';
    this.NewInstitution.EmailId = '';
    this.NewInstitution.Fax = '';
    this.NewInstitution.Logo = '';
    this.NewInstitution.DiseNumber = '';
    this.NewInstitution.IsReadOnlyMode = '';
  }



  // tslint:disable-next-line: member-ordering
  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-pencil"></i>' },
      ],
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa  fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
      customConfirm: true,
    },
    columns: {
      Name: {
        title: 'Name',
      },
      Address: {
        title: 'Address',
      },
      City: {
        title: 'City',
      },
      District: {
        title: 'District',
      },
      State: {
        title: 'State',
      },
      TeachingMedium: {
        title: 'Medium',
      },
      Pincode: {
        title: 'Pin-code',
      },
      // Country: {
      //   title: 'Country',
      // },
      // Phone1: {
      //   title: 'Phone',
      // },
      // Phone2: {
      //   title: 'Alternate Phone',
      // },
      // EmailId: {
      //   title: 'EmailId',
      // },
      // Fax: {
      //   title: 'Fax',
      // },
      // Logo: {
      //   title: 'Logo',
      // },
      // DiseNumber: {
      //   title: 'DiseNumber',
      // },
      // Data: {
      //   title: 'Data',
      // },
    },
  };


  // ng2-smart table End



}
