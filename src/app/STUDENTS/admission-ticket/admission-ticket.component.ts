import { Component, OnInit } from '@angular/core';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { Classsection } from 'src/app/shared/Models/classsection';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { AdmissionTicketService } from 'src/app/service/admission-ticket.service';
import { AdmissionTicket } from 'src/app/shared/Models/AdmissionTicket';

@Component({
  selector: 'app-admission-ticket',
  templateUrl: './admission-ticket.component.html',
  styleUrls: ['./admission-ticket.component.scss']
})
export class AdmissionTicketComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService, private _Combination: SubjectCombinationService,
    private _ClassSectionMedium: ClasssectionService, private admissionticketAPI: AdmissionTicketService) { }

    Buttontext = 'Submit';
    Headingtext = 'Admission Ticket Setting';
    subjectCombination: SubjectCombination[] = Array();
    newclasssection: Classsection[] = Array();
    newClasssection = new Classsection();
    admissionTicket: AdmissionTicket[] = Array();
    Admissionticket = new AdmissionTicket();

    arr1 = [
      { Id: 1, Name: 'newClasssection', ModuleId: 0, checked: false },

    ];

  ngOnInit() {
    this.getsubjectCombinations();
    this.getclassSectionMedium();
    this.getAdmissionTickets();
  }

  getsubjectCombinations() {
    this._Combination.getsubjectCombinations()
      .subscribe(data => {
        if (data.success) {
          this.subjectCombination = data.data[0];
        }
      });
    }

    getclassSectionMedium() {
      this._ClassSectionMedium.getClasssectionDetails()
        .subscribe(data => {
          if (data.success) {
            this.newclasssection = data.data[0];
          }
        });
    }

    getAdmissionTickets() {
      this.spinner.show();
    this.admissionticketAPI.getAdmissiontickets()
      .subscribe(data => {
        if (data.success) {
          this.admissionTicket = data.data[0];
          this.spinner.hide();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }
      });
    }

    saveAdmissionTicket() {
      this.spinner.show();
    this.admissionticketAPI.setAdmissionTicket(this.Admissionticket)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          this.getAdmissionTickets();
          this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
        this.spinner.hide();
      });
    }

    updateAssessment() {
      this.spinner.show();
      this.Buttontext = 'Update';
      this.admissionticketAPI.setAdmissionTicket(this.Admissionticket)
        .subscribe(data => {
          if (data.success) {
            this.toastr.success('Successfully ' + 'Updated AssessmentHead', 'Success');
            this.spinner.hide();
          } else {
            this.toastr.error(data.message, 'Opps!');
          }
        });
    }

    cleardata() {
      this.Admissionticket = new AdmissionTicket;
    }

    onCustomAction(event) {
      console.log(event.data);
      if (event.action === 'editrecord') {
        this.Admissionticket = event.data;
        this.Buttontext = 'Update';
        this.Headingtext = 'Update Admission Ticket';
      }
    }

  // tslint:disable-next-line: member-ordering
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
     Id: {
        title: 'Id',
      },
      Name: {
        title: 'Name',
      },
    },
  };

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
}
