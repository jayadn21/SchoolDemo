import { FacilityService } from './../../service/facility.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Facility } from 'src/app/shared/Models/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss'],
  providers: [FacilityService]
})
export class FacilityComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Facility';
  facilities: Facility [] = Array();
  facility = new Facility();

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private facilityservice: FacilityService) { }

  ngOnInit() {
    this.getfacilitiesDetails();
  }

  getfacilitiesDetails(){
    console.log("This is Facility");
    this.spinner.show();
    this.facilityservice. getfacilitiesDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Facility!!');
        this.facilities = data.data[0];
        console.log(this.facilities);
        this.spinner.hide();
      }
      else {
        this.toastr.error(data.message, "Opps!");
      }
      }); 
  }

  savefacility() {
    console.log("facility" + this.facility.Id)
    this.spinner.show();
    this.facilityservice.setfacilityDetails(this.facility)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("NewFacility Added")
      this.getfacilitiesDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.facility = new Facility;
 }

 updatefacility() {
  this.spinner.show();
  console.log("Facility" + this.facility.Name);
  this.Buttontext = 'Update';
  this.facilityservice.setfacilityDetails(this.facility)
  .subscribe(data => {
    if(data.success) {
      console.log("Success");
      this.toastr.success('Successfully ' +  'Updated Facility!!', 'Success');
      this.spinner.hide();  
    }
    else {
      this.toastr.error(data.message, "Opps!");
    }
  })
}

onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.facility = event.data;
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
  console.log("Delete Event In Console")
  console.log(event);
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
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
