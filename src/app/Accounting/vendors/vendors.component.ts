import { Component, OnInit } from '@angular/core';
import { VendorsService } from 'src/app/service/vendors.service';
import { Vendors } from 'src/app/shared/Models/vendors';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
  providers: [VendorsService]
})
export class VendorsComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Vendor';
  vendors: Vendors [] = Array();
  vendor = new Vendors();
  accountingMenu: string[];


  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _vendorservice: VendorsService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.getVendorsDetails();
    this.requestAccountsMenu();

  }

  getVendorsDetails() {
    console.log("This is Vendors")
    this.spinner.show();
    this._vendorservice.getVendorsDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Vendors!!');
        this.vendors = data.data[0];
        console.log(this.vendors);
        this.spinner.hide();
      }
      else {
        this.toastr.error(data.message, "Opps!");
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

  savevendor() {
    console.log("vendor" + this.vendor.Id)
    this.spinner.show();
    this._vendorservice.setVendorDetails(this.vendor)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("New Vendor Added")
      this.getVendorsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.vendor = new Vendors;
 }

 onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.vendor = event.data;
    this.Buttontext = 'Update';
    this.Headingtext = 'Update ';
  }
}

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
      
      ContactName: {
        title: 'Contact Name',
      },
      CompanyName: {
        title: 'Company',
      },
  
    },
  };
  
  
  
  onDeleteConfirm(event) {
    this.vendor = event.data;
    console.log("vendors" + this.vendor.Id)
    this.spinner.show();
    this._vendorservice.delVendorDetails(this.vendor)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("Vendor Deleted")
      this.getVendorsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }
  
  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);
  
  }
  
  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }
  
}
