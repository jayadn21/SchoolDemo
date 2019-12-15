import { FeesHeadersService } from 'src/app/service/fees-headers.service';
import { FeesAccountsService } from 'src/app/service/fees-accounts.service';
import { AccountingyearService } from './../../service/accounting-year.service';
import { Component, OnInit } from '@angular/core';
import { FacilityFeesService } from 'src/app/service/facility-fees.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FacilityFee } from '../../shared/Models/facility-fees';
import { FacilityService } from 'src/app/service/facility.service';
import { Facility } from 'src/app/shared/Models/facility';
import { FeesAccounts } from 'src/app/shared/Models/fees-accounts';
import { FeesHeaders } from 'src/app/shared/Models/fees-headers';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-facility-fees',
  templateUrl: './facility-fees.component.html',
  styleUrls: ['./facility-fees.component.scss'],
  providers: [ FacilityFeesService]
})
export class FacilityFeesComponent implements OnInit {

// facilityFeeForList = [];
  facilityFeeForGrid: FacilityFee [] = Array();
  newFacilityFee = new FacilityFee();
// facilityFeeList: FacilityFee [] = Array();
  buttonText: string = 'Create';
  pageTitle: string = 'Create Add on Facility Fees';
  facilities: Facility [] = Array();
  feesaccounts: FeesAccounts [] = Array();
  feesheaders: FeesHeaders[] = Array();
  accountingyears: AccountingYear [] = Array();
  accountingMenu: string[];


  newFacility = {
    AddOnFacilityId: '',
  };

  addonfacilitylist: FacilityFee[] = Array();

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _facilityfeeservice: FacilityFeesService,
    private _academicyear: AccountingyearService,
    private _feesaccount: FeesAccountsService,
    private _feesheader: FeesHeadersService,
    private _facility: FacilityService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.getfacilityfeesDetails();
    this.getacademicyear();
    this.getfacility();
    this.getfeesaccount();
    this.getfeesheader();
    this.requestAccountsMenu();

  }

    getacademicyear() {
      this._academicyear.getaccountingyearsDetails()
      .subscribe(data => {
        if (data.success) {
          this.accountingyears = data.data[0];
        }
      });
    }

    getfeesaccount() {
      this._feesaccount.getfeesaccountsDetails()
      .subscribe(data => {
        if (data.success) {
          this.feesaccounts = data.data[0];
        }
      });
    }

    public requestAccountsMenu(): void {
      this.menuService.GetAccountsMenu()
        .subscribe(data => {
          //console.log('requestAccountsMenu ->');
          this.accountingMenu = data as string[];
          //console.log(this.accountingMenu);
        });
    }

    getfeesheader() {
      this._feesheader.getFeesHeaders()
      .subscribe(data => {
        if (data.success) {
          this.feesheaders = data.data[0];
        }
      });
    }

    getfacility() {
      this._facility.getfacilitiesDetails()
      .subscribe(data => {
        if (data.success) {
          this.facilities = data.data[0];
        }
      });
    }


    savefacilityfee() {
      console.log('Facility Fee' + this.newFacilityFee.Id);
      this.spinner.show();
      this._facilityfeeservice.setfacilityfeeDetails(this.newFacilityFee)
      .subscribe(data => {
        if  (data.success) {
        this.spinner.hide();
        this.toastr.success('successfully' + this.pageTitle + '!', 'Success');
        console.log('New Facility Fee Added');
        this.getfacilityfeesDetails();
        this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
          this.spinner.hide();
        }
      });
    }

    cleardata() {
      this.newFacilityFee = new FacilityFee;
   }

  getfacilityfeesDetails() {
    console.log('This is Facility Fees');
    this.spinner.show();
    this._facilityfeeservice.getfacilityfeesDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Facility Fee success');
        this.facilityFeeForGrid = data.data[0];
        console.log(this.facilityFeeForGrid);
        this.spinner.hide();
       } else {
        this.toastr.error(data.message, 'Opps!');
      }
    });
  }

   onCustomAction(event) {
     console.log(event.data);
    if (event.action === 'editrecord') {
      this.newFacilityFee = event.data;
       this.buttonText = 'Update';
         this.pageTitle = 'Update';
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
      AddOnFacilityId: {
        title: 'AddOn Facility',
      },
      FeesAccountId: {
        title: 'Fees Account',
      },
      FeesAmount: {
        title: 'Fees ',
      },
    },
  };




  onDeleteConfirm(event) {
    this.newFacilityFee = event.data;
    console.log("fees" + this.newFacilityFee.Id)
    this.spinner.show();
    this._facilityfeeservice.delfacilityfeeDetails(this.newFacilityFee)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("facility Deleted")
      this.getfacilityfeesDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }
  

  onCreateConfirm(event) {
    console.log('Create Event In Console');
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log('Edit Event In Console');
    console.log(event);
  }

}
