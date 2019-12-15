import { Employee } from './../../../Employees/manage-employees/Employee';
import { Router } from '@angular/router';
import { AuthService } from './../../../service/auth.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CustomValidators } from 'ng2-validation';
import { UserprofileService } from 'src/app/service/userprofile.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ManageEmployeesService } from 'src/app/service/manage-employees.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [
    './user-profile.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class UserProfileComponent implements OnInit {

  employeename: string;

  // @ViewChild("file") fileInputVariable: any;
  public imagePath;
  imgURL: any;
  public message: string;
  isValidImage: boolean;

  mytooltipForm: FormGroup;
  myForm: FormGroup;

  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public editor;
  public editorContent: string;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  rowsContact = [];
  loadingIndicator = true;
  reorderable = true;

  User = {
    username: '',
    password: '',
    newpassword: ''
  };
  confirmpassword: '';

  employee = new Employee();
  EmpUserName = {
    UserName : ''
  };


  constructor(private _auth: AuthService, private _router: Router, private _employeeService: ManageEmployeesService,
    private _setemployeeService: ManageEmployeesService,
    private toastr: ToastrService,
        private spinner: NgxSpinnerService) {

    const password = new FormControl('', Validators.required);
    const rpassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.myForm = new FormGroup({
      password: password,
      rpassword: rpassword
    });

    /*this.fetchContactData((data) => {
      this.rowsContact = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });*/
  }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('UserName')));
    this.isValidImage = false;
    this.getUserdetails();
    //this.updateUserdetails();
  }

  onChange(files) {
    if (files.length === 0) {
      return;
    }

    // tslint:disable-next-line: prefer-const
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      this.isValidImage = false;
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.isValidImage = true;
    };
  }

  UpdatePassword() {
    this.User.username = JSON.parse(localStorage.getItem('UserName'));
    console.log('token is as follows:');
    console.log(localStorage.getItem('id_token'));

    this._auth.UpdatePassword(this.User)
      .subscribe(data => {
        if (data.success) {
          console.log('successfully changed password');
          this._router.navigate(['Userdetails/changepassword']);
        } else {
          console.log('error: ' + data.message);
        }
      });
  }
  getUserdetails() {
    this.spinner.show();
    console.log('UserName -> ' + JSON.parse(localStorage.getItem('UserName')));
    this.EmpUserName.UserName = JSON.parse(localStorage.getItem('UserName'));
    this._employeeService.getEmployeeByUserName(this.EmpUserName)
      .subscribe(data => {
        this.employee = data.data[0][0];
        this.employeename = this.employee.Name;
        console.log(this.employee.EmailId);
        // const UserProfile = require("./routes/UserProfile/UserProfile");
        this._router.navigate([]);
        if (data.success) {
          this.spinner.hide();
        }
      });
  }

  updateUserdetails() {
    this.spinner.show();
    console.log('update user details-' + this.employee);
    this._setemployeeService.UpdateEmployeeProfile(this.employee)
    .subscribe(data => {
      if (data.success) {
        this.spinner.hide();
        this.getUserdetails();
        this.toastr.success('Successfully ' +  'Updated User Profile!', 'Success');
      } else {
        this.spinner.hide();
        this.toastr.error(data.message, 'Opps!');
      }
    });

  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }
  UpdateProfile() {
    // Iddetails
  }

}

