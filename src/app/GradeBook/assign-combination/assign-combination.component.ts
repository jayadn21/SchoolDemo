import { Component, OnInit } from '@angular/core';
import { Assessment } from 'src/app/shared/Models/Assessment';
import { ClasssectionService } from 'src/app/service/classsection.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubjectCombinationService } from 'src/app/service/subject-combination.service';
import { SubjectCombination } from 'src/app/shared/Models/SubjectCombination';
import { Classsection } from 'src/app/shared/Models/classsection';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/STUDENTS/students-database/student';
import { AssignCombinationService } from 'src/app/service/assign-combination.service';
import { AssignCombination } from 'src/app/shared/Models/AssignCombination';

@Component({
  selector: 'app-assign-combination',
  templateUrl: './assign-combination.component.html',
  styleUrls: ['./assign-combination.component.scss']
})
export class AssignCombinationComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService, private studentAPI: StudentService,
    private toastr: ToastrService, private _Combination: SubjectCombinationService,
    private _ClassSectionMedium: ClasssectionService, private AssignCombinationAPI: AssignCombinationService) { }

  Buttontext = 'Submit';
  Headingtext = 'ASsign Combination';
  Assessments: Assessment[] = Array();
  assessment = new Assessment();
  newclasssection: Classsection[] = Array();
  subjectCombination: SubjectCombination[] = Array();
  students: Student[] = Array();
  Student = new Student();
  assignCombination: AssignCombination[] = Array();
  Assigncombination = new AssignCombination();

  student = {
    Id: '1',
  };

  arr1 = [
    { Id: 1, Name: 'Student', ModuleId: 0, checked: false },
    { Id: 2, Name: 'Student', ModuleId: 0, checked: true },
    { Id: 3, Name: 'hello3', ModuleId: 1, checked: false },
    { Id: 4, Name: 'hello4', ModuleId: 0, checked: true },
    { Id: 5, Name: 'hello5', ModuleId: 4, checked: false },
    { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
    { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
    { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
  ];


  ngOnInit() {
    this.getsubjectCombinations();
    this.getclassSectionMedium();
    this.getstudentDetails();
  }

  getstudentDetails() {
    console.log('AssignTask');
    this.studentAPI.getStudentDetails(this.student)
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Students');
        this.students = data.data[0][0];
        console.log(this.students);
      } else {
        console.log('Error');
      }
    });
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

  saveAssignCombination() {
    this.spinner.show();
    this.AssignCombinationAPI.setStudentSubjectcombination(this.Assigncombination)
    .subscribe(data => {
      if (data.success) {
        console.log('Success');
        this.toastr.success('Successfully ' + 'Updated Subject', 'Success');
        this.spinner.hide();
        this.cleardata();
      } else {
        this.toastr.error(data.message, 'Opps!');
      }
      this.spinner.hide();
    });
  }
  cleardata() {
    this.Assigncombination = new AssignCombination;
  }
}
