import { ClasssectionService } from './../../service/classsection.service';
import { MediumService } from './../../service/medium.service';
import { Section } from '../../shared/Models/section';
import { SectionService } from './../../service/section.service';
import { Component } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import { Class } from '../../shared/Models/class';
import { FormGroup } from '@angular/forms';
import { Medium } from '../../shared/Models/medium';
import { Classsection } from '../../shared/Models/classsection';
import { ModalService } from 'src/app/service/modal.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-section',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  providers: [ClassService, SectionService, MediumService, ClasssectionService, ModalService]
})
export class ClassComponent {
  myForm = FormGroup;
  modalName = 'Add New';
  bodyText: string;

  

  modalButtonText = 'Add New';

  modaltitle: string;
  modalButtonTextClass = 'Add New Class';
  modalButtonTextSection = 'Add New Section';
  modalButtonTextMedium = 'Add New Medium';
  modalButtonTextClassSection = 'Add New Class, Section & Medium';


  classes: Class[] = Array();
  sections: Section[] = Array();
  mediums: Medium[] = Array();
  classessections: Classsection[] = Array();

  section = new Section();
  class = new Class();
  medium = new Medium();
  classsection = new Classsection();
  newclasssection = new Classsection();

  constructor(private _classService: ClassService, private _sectionService: SectionService, private _saveclasssection: ClasssectionService, private _savenewclasssection: ClassService, private _mediumService: MediumService, private _classessectionService: ClasssectionService,
    private modalService: ModalService,
    private _savesection: SectionService,
    private _savemedium: MediumService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
   // this.bodyText = 'This text can be updated in modal 1';
    this.getClassesDetails();
    this.getSectionDetails();
    this.getMediumsDetails();
    this.getClasssectionDetails();
  }

  OpenClassModal(id: string) {
    this.ClearclassModalData();
    this.modalService.open(id);
    this.modalButtonTextClass = 'Add New Class';
    this.modalButtonText = 'Add New';
  }

  closeModal1(id: string) {
    this.modalService.close(id);
  }

  OpenClassModal1(id: string){
    this.ClearsectionModalData();
    this.modalService.open(id);
    this.modalButtonTextSection = 'Add New Section';
    this.modalButtonText = 'Add New';
  }

  closeModal2(id: string) {
    this.modalService.close(id);
  }

  OpenClassModal2(id: string){
    this.ClearmediumModalData();
    this.modalService.open(id);
    this.modalButtonTextMedium = 'Add New Medium';
    this.modalButtonText = 'Add New';
  }

  closeModal3(id: string) {
    this.modalService.close(id);
  }

  OpenClassModal3(id: string){
    this.ClearModalData();
    this.modalService.open(id);
    this.modalButtonText = 'Add New';
    this.modalButtonTextClassSection = 'Add New Class, Section & Medium';
  }

  closeModal4(id: string) {
    this.modalService.close(id);
  }

  onsubmit() {

  }

  getClassesDetails() {
    console.log();
    this.spinner.show();
    this._classService.getClassesDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.classes = data.data[0];
          console.log(this.classes);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  onSaveConfirm(event) {
    console.log(event.newData.Name);

    this.class = event.newData;

    this.UpdateClass();
    event.confirm.resolve(event.newData);
  }

  UpdateClass() {
    console.log("class - " + this.class.Name);
    this._classService.setClassesDetails(this.class)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
        }
      });
  }

  onCreateConfirm(event) {
    console.log("class - " + event.newData.Name);
    event.newData.Id = '-1';
    this._classService.setClassesDetails(event.newData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          event.confirm.resolve(event.newData);
        }
      });


  }

  //Class section
  getClasssectionDetails() {
    console.log();
    this.spinner.show();
    this._classessectionService.getClasssectionDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.classessections = data.data[0];
          console.log(this.classessections);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  onSaveConfirmClassSection(event) {
    console.log(event.newData.Name);

    this.classsection = event.newData;

    this.UpdateClass();
    event.confirm.resolve(event.newData);
  }

  UpdateClassSection() {
    console.log("classsection - " + this.classsection.Name);
    this._classessectionService.setClasssectionDetails(this.classsection)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
        }
      });
  }

  onCreateConfirmClasssection(event) {
    console.log("class - " + event.newData.Name);
    event.newData.Id = '-1';
    this._classessectionService.setClasssectionDetails(event.newData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          event.confirm.resolve(event.newData);
        }
      });


  }


  //Medium starts//
  getMediumsDetails() {
    console.log();
    this.spinner.show();
    this._mediumService.getMediumsDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.mediums = data.data[0];
          console.log(this.mediums);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  onSaveConfirmMedium(event) {
    console.log(event.newData.MediumName);

    this.medium = event.newData;

    this.UpdateMedium();
    event.confirm.resolve(event.newData);
  }

  UpdateMedium() {
    console.log("medium - " + this.medium.MediumName);
    this._mediumService.setMediumDetails(this.medium)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
        }
      });
  }

  onCreateConfirmMedium(event) {
    console.log("medium - " + event.newData.MediumName);
    event.newData.Id = '-1';
    this._mediumService.setMediumDetails(event.newData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          event.confirm.resolve(event.newData);
        }
      });


  }

  //Section starts//
  getSectionDetails() {
    console.log();
    this.spinner.show();
    this._sectionService.getSectionDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.sections = data.data[0];
          console.log(this.sections);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  onSaveConfirmSection(event) {
    console.log(event.newData.SectionName);

    this.section = event.newData;

    this.UpdateSection();
    event.confirm.resolve(event.newData);
  }

  UpdateSection() {
    console.log("section - " + this.section.SectionName);
    this._sectionService.setSectionDetails(this.section)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
        }
      });
  }

  onCreateConfirmSection(event) {
    console.log("section - " + event.newData.SectionName);
    event.newData.Id = '-1';
    this._sectionService.setSectionDetails(event.newData)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          event.confirm.resolve(event.newData);
        }
      });


  }

  

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.classsection = event.data;
      this.modalService.open('custom-modal-5');
      this.modalButtonText = 'Update';
      this.modalButtonTextClassSection = 'Update Class, Section & Mediumm';

    }

  }

  SaveClassSection(event) {
    //this.classsection.Id = -1;
    console.log("classsection-" + this.classsection.Id);
    this.spinner.show();
    this._saveclasssection.setClasssectionDetails(this.classsection)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('Successfully ' + this.modalButtonTextClassSection + '!', 'Success');
          console.log("New Class section Added")
          this.getClasssectionDetails();
          this.ClearModalData();
          this.closeModal4(event);
        }
        else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  ClearModalData() {
    this.modalName = 'Add New ';
    this.classsection = new Classsection();
  }


  onsaveClassCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editclass') {
      this.class = event.data;
      this.modalService.open('custom-modal-2'); 
      this.modalButtonTextClass = 'Update Class';
      this.modalButtonText = 'Update';
    }

  }

  Saveclass(event) {
   // this.class.Id = -1;
    console.log("class-" + this.class.Id);
    this.spinner.show();
    this._savenewclasssection.setClassesDetails(this.class)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('Successfully ' + this.modalButtonTextClass + '!', 'Success');
          console.log("New Class Added")
          this.getClassesDetails();
          this.ClearclassModalData();
          this.closeModal1(event);
        }
        else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  ClearclassModalData() {
    this.class = new Class();
  }


 

 

  onsectionCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editsection') {
      this.section = event.data;
      this.modalService.open('custom-modal-3'); 
      this.modalButtonTextSection = 'Update Section';
      this.modalButtonText = 'Update';

    }

  }

  Savesection(event) {
   // this.section.Id = -1;
    console.log("section-" + this.section.Id);
    this.spinner.show();
    this._savesection.setSectionDetails(this.section)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('Successfully ' + this.modalButtonTextSection + '!', 'Success');
          console.log("New Section Added")
          this.getSectionDetails();
          this.ClearsectionModalData();
          this.closeModal2(event);
        }
        else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  ClearsectionModalData() {
    this.section = new Section()

  }

 

  

  onmediumCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editmedium') {
      this.medium = event.data;
      this.modalService.open('custom-modal-4'); 
      this.modalButtonTextMedium = 'Update Medium';
      this.modalButtonText = 'Update';

    }

  }

  Savemedium(event) {
   // this.medium.Id = -1;
    console.log("medium-" + this.medium.Id);
    this.spinner.show();
    this._savemedium.setMediumDetails(this.medium)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('Successfully ' + this.modalButtonTextMedium + '!', 'Success');
          console.log("New Medium Added")
          this.getMediumsDetails();
          this.ClearmediumModalData();
          this.closeModal3(event);
        }
        else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  ClearmediumModalData() {
    this.medium = new Medium();

  }

  Sectionsettings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    edit: {

      editButtonContent: '<i class= "fa fa-edit"></i>',
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
        { name: 'editsection', title: '<i class="fa fa-edit"></i>' },
      ],


    },

    columns: {
      //  Id: {
      //    title: 'Id',
      //  },
      SectionName: {
        title: 'Section',
      },

    },
  };


  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    edit: {

      editButtonContent: '<i class= "fa fa-edit"></i>',
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
        { name: 'editclass', title: '<i class="fa fa-edit"></i>' },
      ],


    },

    columns: {
      // Id: {
      //   title: 'Id',
      // },
      Name: {
        title: 'Class',
      },

    },
  };

  Mediumsettings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    edit: {

      editButtonContent: '<i class= "fa fa-edit"></i>',
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
        { name: 'editmedium', title: '<i class="fa fa-edit"></i>' },
      ],


    },

    columns: {
      // Id: {
      //   title: 'Id',
      // },
      MediumName: {
        title: 'Medium',
      },

    },
  };

  settingsGrid = {
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
        title: 'Class Section',
      },

    },
  };


}










