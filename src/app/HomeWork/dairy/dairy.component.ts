import { DiaryService } from './../../service/diary.service';
import { Diary } from './../../shared/Models/diary';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { AccountingYear } from 'src/app/shared/Models/accounting-year';
import { AccountingyearService } from 'src/app/service/accounting-year.service';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { Classsection } from 'src/app/shared/Models/classsection';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.scss'],
  providers: [ ModalService, DiaryService ]
})
export class DairyComponent implements OnInit {
  @ViewChild('tree') tree;
  
  modalButtonText = 'Add New';
  modalButtonTextClass = 'Add New Entry';

  accountingyears: AccountingYear [] = Array();
  classessections: Classsection[] = Array();

  diary = new Diary(); 
  diarygrid: Diary[] = Array();
  selectedDate: NgbDateStruct;
  selectedDueDate: NgbDateStruct;
  dropdownSettings = {};
  multiselect: Classsection[] = Array();
  selectedclass = [];

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private modalService: ModalService,
    private _academicyear: AccountingyearService,
    private _classsection: ClasssectionService,
    private _diaryService: DiaryService,
    public parserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
    this.getacademicyear();
    this.getClassDetailsMulti();
   // this.getclassdetails();
    this.getDiarysDetails();
    this.dropdownSettings = {
      text: 'Select Classes',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: 'myclass custom-class',
      primaryKey: 'Id',
      labelKey: 'Name',
      enableSearchFilter: false,
      searchBy: ['Name']
    };
  }

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

  ExpandTree() {
    this.tree.treeModel.expandAll();
  }


  getacademicyear() {
    this._academicyear.getaccountingyearsDetails()
    .subscribe(data => {
      if (data.success) {
        this.accountingyears = data.data[0];
      }
    });
  }   

  getClassDetailsMulti() {
    this._classsection.getClasssectionDetails()
    .subscribe(data => {
      if(data.success) {
        this.multiselect = data.classmulti;
       // this.data = data.calssmulti;
      }  
    });

    

  }
  
  // getclassdetails() {
  //   this._classsection.getClasssectionDetails()
  //   .subscribe(data => {
  //     if (data.success) {
  //       this.classessections = data.data[0];
  //     }
  //   });
  // }

  OpenClassModal(id: string) {
    this.ClearData();
    this.modalService.open(id);
    this.modalButtonTextClass = 'Add New Entry';
    this.modalButtonText = 'Add New';
  }

  closeModal1(id: string) {
    this.modalService.close(id);
  }

  getDiarysDetails() {
    console.log('This is Diary');
    this.spinner.show();
    this._diaryService.getDiarysDetails()
    .subscribe(data => {
      if (data.success) {
        console.log('Diary success');
        this.diarygrid = data.data[0];
        console.log(this.diarygrid);
        this.spinner.hide();
       } else {
        this.toastr.error(data.message, 'Opps!');
      }
    });
  }

  saveDiary() {
    this.diary.DiaryDate = this.parserFormatter.format(this.selectedDate);
    this.diary.DueDate = this.parserFormatter.format(this.selectedDueDate);
    console.log('Diary Date' +this.diary.DiaryDate + ' --- ' + this.diary.DueDate);
    this.spinner.show();
    this._diaryService.setDiaryDetails(this.diary)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('successfully' + this.modalButtonText + '!', 'Success');
      console.log('New Diary Entry Added');
      this.getDiarysDetails();
      this.ClearData();
      } else {
        this.toastr.error(data.message, 'server error!!');
        this.spinner.hide();
      }
    });
  }

  ClearData() {
    this.diary = new Diary;
  }

  onDiaryCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.modalService.open('custom-modal-2'); 
      this.diary = event.data;
      this.modalButtonTextClass = 'Update Entry';
      this.modalButtonText = 'Update';
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
      
      DiaryDate: {
        title: 'Class',
      },
      DueDate: {
        title: 'DueDate',
      },
      Subject: {
        title: 'Subject',
      },
      ClassSectionMediumId: {
        title: 'Class',
      },
    },
   };
   

 

  onDeleteConfirm(event) {
    this.diary = event.data;
    console.log("Diary" + this.diary.Id)
    this.spinner.show();
    this._diaryService.delDiaryDetails(this.diary)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();  
      this.toastr.success('successfully' +  'Deleted!', 'Success');
      console.log("Diary Deleted")
      this.getDiarysDetails();
      this.ClearData();
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
