import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { Student } from '../students-database/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-students-settings',
  templateUrl: './students-settings.component.html',
  styleUrls: ['./students-settings.component.scss']
})
export class StudentsSettingsComponent implements OnInit {

  constructor(private studentAPI: StudentService) { }

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

  /*Bar chart Start*/
  type1 = 'bar';
  data1 = {
    labels: ['LKG', 'UKG', '1std', '2std', '3std', '4std', '5std', '7std', '8std', '9std', '10std'],
    datasets: [{
      backgroundColor: [
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)'
      ],
      hoverBackgroundColor: [
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)',
        'rgba(26, 188, 156, 0.88)'
      ],
      data: [0, 30, 60, 90, 120, 150],
    }, {
      backgroundColor: [
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)',
        'rgba(95, 190, 170, 0.99)'
      ],
      hoverBackgroundColor: [
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)',
        'rgba(103, 162, 237, 0.82)'
      ],
      data: [0, 10, 40, 80, 120, 180],
    }]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  StuentsArray: Student[] = Array();
  // Studentsetting = new Student();
  student = {
    Id: '1',
  };

  ngOnInit() {
    this.getstudentDetails();
  }

  getstudentDetails() {
    console.log('AssignTask');
    this.studentAPI.getStudentDetails(this.student)
      .subscribe(data => {
        if (data.success) {
          console.log('Success from Students');
          this.StuentsArray = data.data[0][0];
          console.log(this.StuentsArray);
        } else {
          console.log('Error');
        }
      });
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
