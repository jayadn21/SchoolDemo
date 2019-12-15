import { Title } from '@angular/platform-browser';
import { PaymentMethod } from './../../Accounting/payment-method/payment-method';
import { FeesAccounts } from './../../shared/Models/fees-accounts';
import { Component, } from '@angular/core';
import { AdmissionEnquiryService } from 'src/app/service/admission-enquiry.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmissionEnquiry } from './admission-enquiry';
import { ModalService } from 'src/app/service/modal.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/service/excel.service';
import jsPDF from 'jspdf';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ClassService } from 'src/app/service/class.service';
import { Class } from 'src/app/shared/Models/class';
import { IncomeAccount } from 'src/app/shared/Models/IncomeAccount';
import swal from 'sweetalert2';
import { AdmissioncategoryService } from 'src/app/service/admissioncategory.service';
import { StudentQuotaService } from 'src/app/service/student-quota.service';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { FeesTemplateFeesAccountMappingService } from 'src/app/service/fees-template-fees-account-mapping.service';
import { AssignFee } from 'src/app/shared/Models/AssignFees';
import { CustomFieldsService } from 'src/app/service/custom-fields.service';
import { CustomField } from 'src/app/shared/Models/CustomField';



@Component({
  selector: 'app-admission-enquiry',
  templateUrl: './admission-enquiry.component.html',
  styleUrls: ['./admission-enquiry.component.scss',
    './admission-enquiry.component.css'
  ],
  providers: [AdmissionEnquiryService, ModalService, ExcelService, DatePipe]

})
export class AdmissionEnquiryComponent {
  images = [{
    name: 'Image 1',
    // tslint:disable-next-line: max-line-length
    url: 'https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg'
  },
  {
    name: 'Image 2',
    url: 'https://akm-img-a-in.tosshub.com/indiatoday/559_102017023826.jpg?TZlWXro5W8Rj4VbO.MpENgo1F2MX93j'
  }];
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];

  myForm: FormGroup;
  modalName = 'Add New';
  bodyText: string;
  applicationFormsList: AdmissionEnquiry[] = Array();
  application = new AdmissionEnquiry();
  admission = new AdmissionEnquiry();
  deleteApplicationFormObj = {
    ApplicationNumber: '',
  };
  incomeAccountList: IncomeAccount[] = Array();
  feesAccountList: FeesAccounts[] = Array();
  paymentMethodList: PaymentMethod[] = Array();
  accountingyear: AccountingYear[] = Array();
  classList: Class[] = Array();
  isSaveAdmissionButtonVisible: boolean;
  itemList = [];
  selectedAddOns = [];
  settings2 = {};
  dropdownList = [];
  // selectedItems1: [];
  dropdownSettings = {};
  users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  ApplicationDate: NgbDateStruct;
  applicatoinDateVar: any;
  admissionCategories = {};
  classSectionMediums = {};
  studentQuotas = {};
  casteList = {};
  subjectCombination: SubjectCombination[] = Array();
  Assignfee: AssignFee[] = Array();
  customField: CustomField[] = Array();

  constructor(private _admissionEnquiryService: AdmissionEnquiryService,
    private _router: Router,
    private modalService: ModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private excelService: ExcelService,
    private _AcademicYear: AccountingyearService,
    private _ClassService: ClassService,
    public parserFormatter: NgbDateParserFormatter,
    private datePipe: DatePipe,
    private admissioncategoryService: AdmissioncategoryService,
    private studentQuotaService: StudentQuotaService,
    private classsectionService: ClasssectionService,
    private _Combination: SubjectCombinationService,
    private AssignFeesAPI: FeesTemplateFeesAccountMappingService,
    private _customFieldAPI: CustomFieldsService
  ) { }


  // Multi select example:
  // https://cuppalabs.github.io/angular2-multiselect-dropdown/#/remoteData
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    this.getApplicationForms();
    // this.exportAsXLSX();
    this.getacademicYear();
    this.getclass();

    // this.getAcademicYears();
    this.getAddOnFacilities();
    this.getIncomeAccounts();
    this.getFeesAccounts();
    this.getPaymentMethods();
    this.getAdmissionCategories();
    this.getStudentQuotas();
    this.getClassSectionMediums();
    this.getsubjectCombinations();
    this.getAssignFees();
    this.getCustomFields();
    this.settings2 = {
      text: '--Select Add Ons--',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: 'myclass custom-class',
      primaryKey: 'Id',
      labelKey: 'Name',
      enableSearchFilter: false,
      searchBy: ['Name']
    };
    // tslint:disable-next-line: no-unused-expression
    this.users;
  }
  getAssignFees() {
    this.AssignFeesAPI.getFeesTemplateFeesAccountMapping_Totals()
      .subscribe(data => {
        if (data.success) {
          console.log('Assignfee');
          this.Assignfee = data.data[0];
        }
      });
  }

  getCustomFields() {
    this._customFieldAPI.getCustomFields()
      .subscribe(data => {
        if (data.success) {
          this.customField = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  getsubjectCombinations() {
    this._Combination.getsubjectCombinations()
      .subscribe(data => {
        if (data.success) {
          console.log('SubjectCombinatioin');
          this.subjectCombination = data.data[0];
        }
      });
  }

  getClassSectionMediums() {
    this.classsectionService.getClasssectionDetails()
    .subscribe(data => {
      if (data.success) {
        this.classsectionService = data.data[0];
      }
    });
  }

  getAdmissionCategories() {
    this.admissioncategoryService.getAdmissionCategories()
    .subscribe(data => {
      if (data.success) {
        this.admissionCategories = data.data[0];
      }
    });
  }

  getStudentQuotas() {
    this.studentQuotaService.getStudentQuotas()
    .subscribe(data => {
      if (data.success) {
        this.studentQuotas = data.data[0];
      }
    });
  }

  getacademicYear() {
    this._AcademicYear.getaccountingyearsDetails()
      .subscribe(data => {
        if (data.success) {
          this.accountingyear = data.data[0];
        }
      });
  }

  getclass() {
    this._ClassService.getClassesDetails()
      .subscribe(data => {
        if (data.success) {
          this.classList = data.data[0];
        }
      });
  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  NewAdmissionForm(id: string) {
    this.clearAdmissionEnquiryObj();
    this.modalService.open(id);
  }

  closeModal1(id: string) {
    this.modalService.close(id);
  }

  onItemSelect(item: any) {
    console.log(this.selectedAddOns);
  }
  OnItemDeSelect(item: any) {
    console.log(this.selectedAddOns);
  }
  onSelectAll(items: any) {
    this.selectedAddOns = this.itemList;
    console.log(this.selectedAddOns);
  }
  onDeSelectAll(items: any) {
    this.selectedAddOns = [];
    console.log(this.selectedAddOns);
  }
  onSearch(evt: any) {
    console.log(evt.target.value);
  }

  getApplicationForms() {
    // this.spinner.show();
    this._admissionEnquiryService.getApplicationForms()
      .subscribe(data => {
        if (data.success) {
          console.log('ApplicationForm !!!');
          this.applicationFormsList = data.data[0];
          // this.spinner.hide();
          console.log(this.applicationFormsList[0].ApplicationNumber);
        } else {
          console.log('Failed !!!');
          this.applicationFormsList = data.data[0];
        }
      });
  }


  setApplicationForm() {
    this.spinner.show();
    // Set selected Add-ons to application object
    this.application.AddOnFacilityIds = '';
    if (this.selectedAddOns.length > 0) {
      this.selectedAddOns.forEach((item) => {
        if (!this.application.AddOnFacilityIds) {
          this.application.AddOnFacilityIds = item.Id;
        } else {
          this.application.AddOnFacilityIds = this.application.AddOnFacilityIds + ',' + item.Id;
        }
      });
    }
    // Set ApplicationDate
    this.application.ApplicationDate = this.ConvertDate(this.applicatoinDateVar);
    console.log(this.application);
    this.application.InstitutionId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this._admissionEnquiryService.setApplicatiomForms(this.application)
      .subscribe(data => {
        if (data.success) {
          console.log('Application Saved');
          this.application = data.data[0];
          this.closeModal1('custom-modal-2');
          this.clearAdmissionEnquiryObj();
          this.toastr.success('Admissing Enquiry added.', 'Success!');
          this.getApplicationForms();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
        this.spinner.hide();
      });
  }

  // makeadmission() {
  //   this._admissionEnquiryService.makeAdmission(this.admission)
  //   .subscribe(data => {
  //     if (data.success) {
  //       console.log('Application Saved');
  //       this.admission = data.data[0];
  //       this.getApplicationForms();
  //     }
  //     });
  // }

  ConvertDate(dateVal) {
    return dateVal.year + '-' + dateVal.month + '-' + dateVal.day;
  }

  submitApplication() {
    this.spinner.show();
    this.admission.ApplicationDate = this.ConvertDate(this.applicatoinDateVar);
    console.log(this.admission);
    this.admission.InstitutionId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
    this._admissionEnquiryService.makeAdmission(this.admission)
      .subscribe(data => {
        if (data.success) {
          console.log('admission Saved');
          this.admission = data.data[0];
          this.clearAndCloseMakeAdmissionForm();
          this.clearAdmissionEnquiryObj();
          this.toastr.success('admission Enquiry added.', 'Success!');
          this.getApplicationForms();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
        this.spinner.hide();
      });
      this.admission.AddOnFacilityIds = '';
    if (this.selectedAddOns.length > 0) {
      this.selectedAddOns.forEach((item) => {
        if (!this.admission.AddOnFacilityIds) {
          this.admission.AddOnFacilityIds = item.Id;
        } else {
          this.admission.AddOnFacilityIds = this.admission.AddOnFacilityIds + ',' + item.Id;
        }
      });
    }
  }


  AdmissionEnquiry(event) {
    console.log('in AdmissionEnquiry');
    // this.spinner.show();
    this._admissionEnquiryService.getApplicationForm(this.application)
      .subscribe(data => {
        if (data.success) {
          //  this.spinner.hide();
          console.log('UpdateAdmission Success');
          this.clearAdmissionEnquiryObj();
        }
      });

    document.querySelector('#' + event).classList.remove('md-show');

  }

  getAcademicYears() {
    this._admissionEnquiryService.getAcademicYears()
      .subscribe(data => {
        if (data.success) {
          // this.applicationForm = data.data[0];
        }
      });
  }

  getAddOnFacilities() {
    this._admissionEnquiryService.getAddOnFacilities()
      .subscribe(data => {
        if (data.success) {
          this.itemList = data.data[0];
        }
      });
  }

  // getApplicationFormAddOnFacilityMapping() {
  //   this._getApplicationFormAddOnFacilityMapping.getApplicationFormAddOnFacilityMapping()
  //     .subscribe(data => {
  //       if (data.success) {
  //         this.applicationForm = data.data[0];
  //       }
  //     });
  // }

  getCaste() {
    this._admissionEnquiryService.getCaste()
      .subscribe(data => {
        if (data.success) {
          this.casteList = data.data[0];
        }
      });
  }

  // getMediums() {
  //   this._getmediums.getMediums()
  //     .subscribe(data => {
  //       if (data.success) {
  //         this.applicationForm = data.data[0];
  //       }
  //     });
  // }

  // getPattern() {
  //   this._getpattern.getPattern()
  //     .subscribe(data => {
  //       if (data.success) {
  //         this.applicationForm = data.data[0];
  //       }
  //     });
  // }

  // getReligion() {
  //   this._getreligion.getReligion()
  //     .subscribe(data => {
  //       if (data.success) {
  //         this.applicationForm = data.data[0];
  //       }
  //     });
  // }

  // getReservationCategory() {
  //   this._getreservationCategory.getReservationCategory()
  //     .subscribe(data => {
  //       if (data.success) {
  //         this.applicationForm = data.data[0];
  //       }
  //     });
  // }

  // getSubCaste() {
  //   this._getsubCaste.getSubCaste()
  //     .subscribe(data => {
  //       if (data.success) {
  //         this.applicationForm = data.data[0];
  //       }
  //     });
  // }

  getFeesAccounts() {
    this._admissionEnquiryService.getFeesAccounts()
      .subscribe(data => {
        if (data.success) {
          this.feesAccountList = data.data[0];
        }
      });
  }

  getIncomeAccounts() {
    this._admissionEnquiryService.getIncomeAccounts()
      .subscribe(data => {
        if (data.success) {
          this.incomeAccountList = data.data[0];
        }
      });
  }

  getPaymentMethods() {
    this._admissionEnquiryService.getPaymentMethods()
      .subscribe(data => {
        if (data.success) {
          this.paymentMethodList = data.data[0];
        }
      });
  }
  // Modal() {}



  admissionEnquiryModal(event) {
    this.clearAdmissionEnquiryObj();
    document.querySelector('#' + event).classList.add('md-show');
  }
  updateAdmissionModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
    this.isSaveAdmissionButtonVisible = false;
  }
  closeAdmissionModal(event) {
    document.querySelector('#' + event).classList.remove('md-show');
  }
  AdmissionEnquiryButton(event) {
    document.querySelector('#' + event).classList.add('md-show');
    this.isSaveAdmissionButtonVisible = false;
  }

  clearAdmissionEnquiryObj() {
    this.modalName = 'Add New ';
    this.application = new AdmissionEnquiry();
    this.selectedAddOns = [];
  }

  openConfirmsSwal(applicationNumber: any) {
    swal({
      title: 'Are you sure?',
      text: 'You want to delete this Application Form?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.deleteApplicationFormObj.ApplicationNumber = applicationNumber;
        this.spinner.show();
        this._admissionEnquiryService.deleteApplicationForm(this.deleteApplicationFormObj)
          .subscribe(data => {
            if (data.success) {
              // console.log('Application deleted');
              // this.toastr.success("Admissing Enquiry deleted.", 'Success!');
              swal(
                'Deleted!',
                'The Application Form has been deleted.',
                'success'
              );
              this.getApplicationForms();
            } else {
              this.toastr.error(data.message, 'Opps!');
            }
            this.spinner.hide();
          });
      }
    });
  }

  onCustomAction(event) {
    switch (event.action) {
      case 'printRecord':
        console.log('printRecord !!!!');
        break;
      case 'admitStudent':
        {
          console.log('admitStudent !!!!');
          this.application = event.data;
          this.openModal('custom-modal-1');
        }
        break;
      case 'editRecord':
        this.editRecord(event.data);
        break;
      case 'deleteRecord':
        console.log('deleteRecord !!!!');
        this.openConfirmsSwal(event.data.ApplicationNumber);
        break;
    }
  }

  editRecord(appln: any) {
    this.application = appln;
    console.log(this.application);
    // Add-ons mapping
    // 1st clear the selected add-ons
    this.selectedAddOns = [];
    if (this.application.AddOnFacilityIds !== null) {
      let addon = this.application.AddOnFacilityIds.split(',');

      addon.forEach((item) => {
        let addOnTmp = this.itemList.find(ad => ad.Id.toString() === item);
        console.log(addOnTmp);
        if (addOnTmp !== null) {
          this.selectedAddOns.push(addOnTmp);
        }
      });
      console.log(this.selectedAddOns);
    }
    this.openModal('custom-modal-2');
  }

  // tslint:disable-next-line: member-ordering
  settings = {

    add: {
      confirmCreate: true,
    },

    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'printRecord', title: '<i class="fa fa-print ">&nbsp;</i>' },
        { name: 'admitStudent', title: '<i class="fa fa-plus-square-o">&nbsp;</i>' },
        { name: 'editRecord', title: '<i class="fa fa-edit">&nbsp;</i>' },
        { name: 'deleteRecord', title: '<i class="fa fa-trash">&nbsp;</i>' },
      ],
    },
    columns: {
      ApplicationNumber: {
        title: 'Application No.',
      },
      StudentName: {
        title: 'Full Name',
      },
      AcademicYear: {
        title: 'Batch',
      },
      Class: {
        title: 'Class',
      },
      GenderStr: {
        title: 'Gender',
      },
    }
  };
  //   exportAsXLSX(): void {
  //     this.excelService.exportAsExcelFile(this.data, 'sample');
  //  }
  //  getBase64Image(img) {
  //   const canvas = document.createElement('canvas');
  //   console.log('image');
  //   canvas.width = img.width;
  //   canvas.height = img.height;
  //   const ctx = canvas.getContext('2d');
  //   ctx.drawImage(img, 0, 0);
  //   const dataURL = canvas.toDataURL('image/png');
  //   return dataURL;
  // }

  // var base64 = (document.getElementById("imageid"));
  // download() {
  //   const doc = new jsPDF();
  //   for ( let i = 0; i < this.images.length; i++) {
  //    const imageData = this.getBase64Image(document.getElementById('img' + i));
  //    console.log(imageData);
  //      doc.addImage(imageData, 'JPG', 10, (i + 1) * 10, 180, 150);
  //      doc.addPage();
  //   }
  //   doc.save('Test.pdf');
  // }

  // Make and Admission part
    testDate() {
      console.log(this.parserFormatter.format(this.ApplicationDate));
    }

    clearAndCloseMakeAdmissionForm() {
      this.clearMakeAdmissionForm();
      this.closeModal('custom-modal-1');
    }

    clearMakeAdmissionForm() {
      this.ApplicationDate = null;
    }
}
