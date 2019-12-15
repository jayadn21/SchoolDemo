import { Component, OnInit } from '@angular/core';
import { Assets } from './asset';
import { AssetsService } from 'src/app/service/assets.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
  providers: [AssetsService]
})
export class AssetsComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Asset';
  assets: Assets [] = Array();
  asset = new Assets();
  accountingMenu: string[];


  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private assetsservice: AssetsService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.getAssetsDetails();
    this.requestAccountsMenu();

  }

  getAssetsDetails(){
    console.log("This is Assets")
    this.spinner.show();
    this.assetsservice.getAssetsDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Assets!!');
        this.assets = data.data[0];
        console.log(this.assets);
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

  saveasset() {
    console.log("asset" + this.asset.Id)
    this.spinner.show();
    this.assetsservice.setAssetDetails(this.asset)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("New Asset Added")
      this.getAssetsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.asset = new Assets;
 }

 

onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.asset = event.data;
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
      
      Name: {
        title: 'Asset Name',
      },
      Type: {
        title: 'Asset Type',
      },
  
    },
  };
  
  
  
  onDeleteConfirm(event) {
    this.asset = event.data;
    console.log("assets" + this.asset.Id)
    this.spinner.show();
    this.assetsservice.delAssetDetails(this.asset)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("Asset Deleted")
      this.getAssetsDetails();
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
