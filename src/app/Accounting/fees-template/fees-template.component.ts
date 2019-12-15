import { FeesHeadersService } from './../../service/fees-headers.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FeesTemplateService } from 'src/app/service/fees-template.service';
import { FeesTemplate } from './fees-template';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { Classsection } from 'src/app/shared/Models/classsection';
import { MenuService } from 'src/app/service/menu.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FeesTemplateFeesAccountMapping } from 'src/app/shared/Models/FeesTemplateFeesAccountMapping';
import { FeesTemplateFeesAccountMappingService } from 'src/app/service/fees-template-fees-account-mapping.service';

@Component({
  selector: 'app-fees-template',
  templateUrl: './fees-template.component.html',
  styleUrls: ['./fees-template.component.scss']
})
export class FeesTemplateComponent implements OnInit {
  data: any[];

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _feesTemplate: FeesTemplateService,
    private _FeesHeader: FeesHeadersService,
    private _AcademicYear: AccountingyearService,
    private _ClassSectionMedium: ClasssectionService,
    private menuService: MenuService,
    private _FeesTemplateFeesAccountMapping: FeesTemplateFeesAccountMappingService,
  ) {
     this.source = new LocalDataSource(this.data);
   }

  source: LocalDataSource;
  Buttontext = 'Create';
  Headingtext = 'Add Fees Template';
  feesTemplatesGrid: FeesTemplate[] = Array();
  feestemplate = new FeesTemplate();
  fessTemplateList: FeesTemplate[] = Array();
  accountingyear: AccountingYear[] = Array();
  newclasssection: Classsection[] = Array();
  DescriptionFeesTemp: FeesTemplate[] = Array();
  accountingMenu: string[];
  feestemplateMapp: FeesTemplateFeesAccountMapping[] = Array();

  // feestemplateMapp = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },

  //   // ... list of items

  //   {
  //     id: 11,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   }
  // ];

  ngOnInit() {
    this.getFeestemplates();
    this.getfeeHeaders();
    this.getacademicYear();
    this.getclassSectionMedium();
    this.requestAccountsMenu();
    this.getFeestemplateFeesAccountMappings();
  }

  getFeestemplateFeesAccountMappings() {
    this._FeesTemplateFeesAccountMapping.getFeestemplateFeesaccountMappings()
      .subscribe(data => {
        if (data.success) {
          this.feestemplateMapp = data.data[0];
        }
      });
  }

  getfeeHeaders() {
    this._FeesHeader.getFeesHeaders()
      .subscribe(data => {
        if (data.success) {
          this.fessTemplateList = data.data[0];
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

  public requestAccountsMenu(): void {
    this.menuService.GetAccountsMenu()
      .subscribe(data => {
        // console.log('requestAccountsMenu ->');
        this.accountingMenu = data as string[];
        // console.log(this.accountingMenu);
      });
  }

  getclassSectionMedium() {
    this._ClassSectionMedium.getClasssectionDetails()
      .subscribe(data => {
        if (data.success) {
          this.newclasssection = data.data[0];
        }
      });
  }

  getFeestemplates() {
    console.log('Fees Template');
    this.spinner.show();
    this._feesTemplate.getFeestemplates()
      .subscribe(data => {
        if (data.success) {
          console.log('Success from Fees Template');
          this.feesTemplatesGrid = data.data[0];
          console.log(this.feesTemplatesGrid);
          this.spinner.hide();
        }  else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  saveFeesTemplate() {
    console.log(' Fee template' + this.feestemplate.Id);
      this.spinner.show();
      this._feesTemplate.setFeestemplate(this.feestemplate)
      .subscribe(data => {
        if  (data.success) {
        this.spinner.hide();
        console.log('New Fee Template Added');
        this.getFeestemplates();
        this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
          this.spinner.hide();
      });
  }

  updateFeesHeader() {
    this.spinner.show();
    this.Buttontext = 'Update';
    this._feesTemplate.setFeestemplate(this.feestemplate)
      .subscribe(data => {
        if (data.success) {
          console.log('Success');
          this.toastr.success('Successfully ' + 'Updated FeeTemplate', 'Success');
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
  }

  delfeesTemplate() {
    this._feesTemplate.delFeestemplate()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Delete Template');
        this.DescriptionFeesTemp = data.data[0];
        console.log(this.DescriptionFeesTemp);
      }
    });
  }

  cleardata() {
    this.feestemplate = new FeesTemplate();
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.feestemplate = event.data;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Fees template';
    }
  }

  // tslint:disable-next-line: member-ordering
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
      ],
    },
    columns: {
      Name: {
        title: 'Name',
      },
      FeesHeaderId: {
        title: 'Header',
      },
      AcademicYear: {
        title: 'Academic Year',
      },
      DueDate: {
        title: 'TotalFees',
      },
    },
  };
  onDeleteConfirm(event) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event) {
    console.log('Create Event In Console');
    console.log(event);
  }
  onSaveConfirm(event) {
    console.log('Edit Event In Console');
    console.log(event);
  }
  // tslint:disable-next-line: member-ordering
  setting = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
      ],
    },
    columns: {
      Description: {
        title: 'Description',
      },
      FeesAcount: {
        title: 'Fees Acount',
      },
      Fees: {
        title: 'FeesAccountId',
      },
      Total: {
        title: 'fees',
      },
    },
  };

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'Id',
        search: query
      },
      {
        field: 'FeesTemplateId',
        search: query
      },
      {
        field: 'FeesAccountId',
        search: query
      },
      {
        field: 'Fees',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  // tslint:disable-next-line: member-ordering
  setting1 = {
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    actions: {
      add: true,
      edit: true,
      delete: true,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
      ],
    },
    columns:  {
      Description: {
        title: 'Description',
      },
      // FeesTemplateId: {
      //   title: 'FeesTemplateId',
      // },
      FeesAccountId: {
        title: 'list',
        config: {
          list : this.feestemplateMapp
        }
      },
      Fees: {
        title: 'Fees',
      },
    },



  onDeleteConfirm(event) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  },
  onCreateConfirm(event) {
    console.log('Create Event In Console');
    console.log(event);
  },
  onSaveConfirm(event) {
    console.log('Edit Event In Console');
    console.log(event);
  }
  };

  // fieldArray: Array<any> = [
  //   {
  //     'name': 'Default Name 1'
  //   },
  //   {
  //     'name': 'Default Name 2'
  //   }
  // ];
  // newAttribute: any = {};

  // firstField = true;
  // firstFieldName = 'First Item name';
  // isEditItems: boolean;

  // // candidates: any[] = [
  // //   {
  // //     'name': 'Default Name',
  // //     'title': 'Job Title',
  // //   },
  // //   {
  // //     'name': 'Default Name 2',
  // //     'title': 'Job Title',
  // //   }
  // // ];

  // addFieldValue(index) {
  //   if (this.fieldArray.length <= 2) {
  //     this.fieldArray.push(this.newAttribute);
  //     this.newAttribute = {};
  //   } else {

  //   }
  // }

  // deleteFieldValue(index) {
  //   this.fieldArray.splice(index, 1);
  // }

  // onEditCloseItems() {
  //   this.isEditItems = !this.isEditItems;
  // }

  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  addFieldValue(index) {
    if (this.fieldArray.length <= 5) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

}
