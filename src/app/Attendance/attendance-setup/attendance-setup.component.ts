import { ClasssectionService } from './../../service/classsection.service';
import { AttendanceSetup } from './../../shared/Models/attendance-setup';
import { Component, OnInit } from '@angular/core';
import { AttendanceSetupService } from 'src/app/service/attendance-setup.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Classsection } from 'src/app/shared/Models/classsection';

@Component({
  selector: 'app-attendance-setup',
  templateUrl: './attendance-setup.component.html',
  styleUrls: ['./attendance-setup.component.scss'],
  providers: [ AttendanceSetupService]
})
export class AttendanceSetupComponent implements OnInit {

  attendances: AttendanceSetup [] = Array();
  attendance = new AttendanceSetup();
  buttonText: string = 'Create';
  pageTitle: string = 'Create Attendance';
  classessections: Classsection[] = Array();

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _classsection: ClasssectionService,
    private _attendanceService: AttendanceSetupService) { }

  ngOnInit() {
    this.getAttendancesDetails();
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

  
  getAttendancesDetails() {
    console.log('This is Attendance Fees');
    this.spinner.show();
    this._attendanceService.getAttendancesDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Attendance success');
        this.attendances = data.data[0];
        console.log(this.attendances);
        this.spinner.hide();
       } else {
        this.toastr.error(data.message, 'Opps!');
      }
    });
  }

  saveattendance() {
    console.log('Attendance ' + this.attendance.Id);
    this.spinner.show();
    this._attendanceService.setAttendanceDetails(this.attendance)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.pageTitle + '!', 'Success');
      console.log('New Attendance Added');
      this.getAttendancesDetails();
      this.cleardata();
      } else {
        this.toastr.error(data.message, 'server error!!');
        this.spinner.hide();
      }
    });
  }

  cleardata() {
    this.attendance = new AttendanceSetup;
 }

 onCustomAction(event) {
  console.log(event.data);
 if (event.action === 'editrecord') {
   this.attendance = event.data;
    this.buttonText = 'Update';
      this.pageTitle = 'Update';
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
  ClassSectionMediumId: {
     title: 'Class',
   },
   AttendanceType: {
     title: 'Type',
   },
 },
};




onDeleteConfirm(event) {
 this.attendance = event.data;
 console.log("fees" + this.attendance.Id)
 this.spinner.show();
 this._attendanceService.delAttendanceDetails(this.attendance)
 .subscribe(data => {
   if  (data.success) {
   this.spinner.hide();  
   this.toastr.success('successfully' +  'Deleted!', 'Success');
   console.log("Attendance Deleted")
   this.getAttendancesDetails();
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
