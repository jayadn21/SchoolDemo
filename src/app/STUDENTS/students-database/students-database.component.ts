import { StudentService } from './../../service/student.service';
import { v4 } from 'uuid';
import { ModalService } from './../../service/modal.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import * as c3 from 'c3';
import { NgxSpinnerService } from 'ngx-spinner';
import { Student } from './student';
@Component({
  selector: 'app-students-database',
  templateUrl: './students-database.component.html',
  styleUrls: ['./students-database.component.scss'],
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class StudentsDatabaseComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  isValidImage: boolean;

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

  modalName = 'certificate';
  optionSelected = '1';

  students: Student[] = Array();

  student = {
    Id: '1',
  };

  Newstudent = {
    Id: '-1',
    Name: '',
    InstitutionId: '',
    StudentCode: '',
    ApplicationNumber: '',
    FirstName: '',
    LastName: '',
    DateOfBirth: '',
    AdmissionNo: '',
    AdmissionDate: '',
    Gender: '',
    ReligionId:'',
    CasteId: '',
    SubCasteId: '',
    ReservationCategoryId: '',
    MediumId: '',
    PresentAddress: '',
    PermanentAddress: '',
    PhoneNumber: '',
    ParentId: '',
    BloodGroup: '',
    PhysicallyChallenged: '',
    PatternId: '',
    CurrentClassSectionMediumId: '',
    Active: '',
    UserName: '',
    AlternativePhoneNumber: '',
    AcademicYearId: '',
    ClassId: '',
  }

  areaChartData = {
    chartType: 'AreaChart',
    dataTable: [
      ['Year', 'Expenses'],
      ['FA1', 74],
      ['FA2', 78],
      ['SA1', 81],
      ['FA3', 84],
      ['FA4', 83],
    ],
    options: {
      vAxis: { minValue: 0 },
      colors: ['#01C0C8', '#FB9678'],
      height: 300
    },
  };

  donutChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Present', 40],
      ['Absent', 4],


    ],
    options: {
      height: 300,
      title: '',
      pieHole: 0.3,
      colors: ['#FB9678', '#5faee3', '#f4d03f']
    },
  };
  seletedValue: any;

  bodyText: string;
  BatchName = {

  };


  constructor(private modalService: ModalService,
    private _studentservice: StudentService,
    private spinner: NgxSpinnerService) { }


  ngOnInit() {
    this.getStudentDetails();
    this.isValidImage = false;


    const chart4 = c3.generate({
      bindto: '#chart4',
      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220],
          ['data5', 130, 120, 150, 140, 160, 150],
          ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        colors: {
          data1: '#00C292',
          data2: '#4C5667',
          data3: '#03A9F3',
          data4: '#AB8CE4',
          data5: '#a3aebd',
          data6: '#FEC107'
        },
        types: {
          data3: 'spline',
          data4: 'line',
          data6: 'area',
        },
        groups: [
          ['data1', 'data2']
        ]
      }
    });

  }


  getStudentDetails() {
    console.log();
    this._studentservice.getStudentDetails(this.student)
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Students');
        this.Newstudent = data.data[0][0];
        console.log(this.Newstudent);
      }
      else {
        console.log('Error');
      }
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  openModal1(id: string) {
    this.modalService.open(id);
  }
  closeModal1(id: string) {
    this.modalService.close(id);
  }
  openModal2(id: string) {
    this.modalService.open(id);
  }
  closeModal2(id: string) {
    this.modalService.close(id);
  }
  openModal3(id: string) {
    this.modalService.open(id);
  }
  closeModal3(id: string) {
    this.modalService.close(id);
  }
  openModal4(id: string) {
    this.modalService.open(id);
  }
  closeModal4(id: string) {
    this.modalService.close(id);
  }
  openModal5(id: string) {
    this.modalService.open(id);
  }
  closeModal5(id: string) {
    this.modalService.close(id);
  }
  openModal6(id: string) {
    this.modalService.open(id);
  }
  closeModal6(id: string) {
    this.modalService.close(id);
  }
  openModal7(id: string) {
    this.modalService.open(id);
  }
  closeModal7(id: string) {
    this.modalService.close(id);
  }
  v4openModal8(id: string) {
    this.modalService.open(id);
  }
  closeModal8(id: string) {
    this.modalService.close(id);
  }

  okButtonHandler(id: string) {
    if (this.optionSelected === '5') {
      this.modalService.close(id);
      this.modalService.open('custom-modal-2');
    }
  }


  OpenFeesModal(id: string) {
    this.modalService.open(id);
  }

  closeFeesModal(id: string) {
    this.modalService.close(id);
  }

  OpenAddPaymentModal(id: string) {
    this.modalService.open(id);
  }

  closeAddPaymentModal(id: string) {
    this.modalService.close(id);
  }

  onFeesCustomAction() {

      this.modalService.open('Feesmodal');

  }
  onChange(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
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

  UpdateProfile() {

      this.modalService.open('Feesmodal');



  }

  onsubmit() {

  }



  // tslint:disable-next-line: member-ordering
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-print" aria-hidden="true"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    edit: {

      editButtonContent: '<i class="fa fa-plus-square" aria-hidden="true"></i>',
      confirmSave: true,
    },
    add: {
      confirmCreate: true,
    },

    actions: {
      add: false,
      edit: false,
      delete: true,
      custom: [
        { name: 'editsection', title: '<i class="fa fa-plus-square" aria-hidden="true"></i>' },
      ],


    },
    columns: {
      InvoiceDate : {
        title: 'Invoice Date',
      },
      DueDate: {
        title: 'Due Date',
      },
      FeesAccount: {
        title: 'Fees Account',
      },
      FeesAmount: {
        title: 'Fees Amount',
      },
      AmountPaid: {
        title: 'Amount Paid'
      },
      AmountPending: {
        title: 'Amount Pending'
      },
    },
  };


  // tslint:disable-next-line: member-ordering
  // data = [
  //   {
  //     // InvoiceDate: 15-09-2016,
  //     // DueDate: 10-10-2016,
  //     FeesAccount: 'SCHOOL FEE',
  //     FeesAmount: 73000,
  //     AmountPaid: 10000,
  //     AmountPending: 63000
  //   },
  //   {
  //    // InvoiceDate: 25-09-2016,
  //     // DueDate: 15-10-2016,
  //     FeesAccount: 'SCHOOL FEE',
  //     FeesAmount: 36000,
  //     AmountPaid: 26000,
  //     AmountPending: 10000
  //   },


  // ];
  // tslint:disable-next-line: member-ordering
  data1 = [
    {
      // InvoiceDate: 15-09-2016,
      // DueDate: 10-10-2016,
      FeesAccount: 'SCHOOL FEE',
      FeesAmount: 73000,
      AmountPaid: 10000,
      AmountPending: 63000
    },
    {
     // InvoiceDate: 25-09-2016,
      // DueDate: 15-10-2016,
      FeesAccount: 'SCHOOL FEE',
      FeesAmount: 36000,
      AmountPaid: 26000,
      AmountPending: 10000
    },


  ];

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


  penMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  openBasicModal(event) {

  }

  closeBasicModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');

  }

  // closetransfer(event) {
  //   ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  //   document.querySelector('#' + event).classList.remove('md-show');
  // }

  onOptionsSelected(event) {
    console.log('===');
    // send selected value
    // this.seletedValue.emit('');

    document.querySelector('#' + event).classList.remove('md-show');
  }


}
