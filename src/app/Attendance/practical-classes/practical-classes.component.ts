import { Component, OnInit } from '@angular/core';
import { PracticalClassesService } from 'src/app/service/practical-classes.service';
import { PracticalClasses } from 'src/app/shared/Models/practical-classes';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Classsection } from 'src/app/shared/Models/classsection';
import { ClasssectionService } from 'src/app/service/classsection.service';

@Component({
  selector: 'app-practical-classes',
  templateUrl: './practical-classes.component.html',
  styleUrls: ['./practical-classes.component.scss'],
  providers: [PracticalClassesService]
})
export class PracticalClassesComponent implements OnInit {

  Buttontext = 'Create';
  Headingtext = 'Add Practical Batch';
  practicals: PracticalClasses [] = Array();
  practical = new PracticalClasses();

  classessections: Classsection[] = Array();


  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _classsection: ClasssectionService,
    private _practicalservice: PracticalClassesService,) { }

  ngOnInit() {
    this.getpracticalsDetails();
    this.getclassdetails();

  }

  getclassdetails() {
    this._classsection.getClasssectionDetails()
    .subscribe(data => {
      if (data.success) {
        this.classessections = data.data[0];
      }
    });
  }

  getpracticalsDetails() {
    console.log("This is Practical");
    this.spinner.show();
    this._practicalservice.getpracticalsDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Practicals!!');
        this.practicals = data.data[0];
        console.log(this.practicals);
        this.spinner.hide();
      }
      else {
        this.toastr.error(data.message, "Opps!");
      }
      }); 
  }

  savePractical() {
    console.log("Practical" + this.practical.Id)
    this.spinner.show();
    this._practicalservice.setpracticalDetails(this.practical)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
      console.log("New Practical Added")
      this.getpracticalsDetails();
      this.cleardata();
      }
      else{
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  cleardata() {
    this.practical = new PracticalClasses;
 }

 onCustomAction(event) {
  console.log(event.data);
  if (event.action === 'editrecord') {
    this.practical = event.data;
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
      title: 'Batch Name',
    },

  },
};



onDeleteConfirm(event) {
  this.practical = event.data;
    console.log("practical" + this.practical.Id)
    this.spinner.show();
    this._practicalservice.delpracticalDetails(this.practical)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("practical Deleted")
      this.getpracticalsDetails();
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
