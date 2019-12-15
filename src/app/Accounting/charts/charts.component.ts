import { ChartsService } from './../../service/charts.service';
import { Charts } from './../../shared/Models/charts';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  providers: [ChartsService]
})
export class ChartsComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Chart';
  charts: Charts [] = Array();
  chart = new Charts();
  accountingMenu: string[];


  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _chartservice: ChartsService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.getchartsDetails();
    this.requestAccountsMenu();

  }

  getchartsDetails() {
    console.log("This is chart");
    this.spinner.show();
    this._chartservice.getchartsDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Charts!!');
        this.charts = data.data[0];
        console.log(this.charts);
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
  
  savechart() {
    console.log("chart" + this.chart.Id)
    this.spinner.show();
    this._chartservice.setchartDetails(this.chart)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("New Chart Added")
      this.getchartsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.chart = new Charts;
 }

 onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.chart = event.data;
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
    // Id: {
    //   title: 'Id',
    // },
    Name: {
      title: 'Name',
    },

  },
};



onDeleteConfirm(event) {
  this.chart = event.data;
    console.log("charts" + this.chart.Id)
    this.spinner.show();
    this._chartservice.delchartDetails(this.chart)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("Chart Deleted")
      this.getchartsDetails();
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

