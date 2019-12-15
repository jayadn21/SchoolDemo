import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/service/menu.service';
@Component({
  selector: 'app-fees-management',
  templateUrl: './fees-management.component.html',
  styleUrls: ['./fees-management.component.scss']
})
export class FeesManagementComponent implements OnInit {

  areaChartData =  {
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

  donutChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Paid', 50], 
      ['Pending', 20],
      


    ],
    options: {
      height: 300,
      title: '',
      pieHole: 0.3,
      colors: ['#FB9678', '#5faee3', '#f4d03f']
    },
  };


  /*Bar chart Start*/
  type1 = 'bar';
  data1 = {
    labels: ['LKG', 'UKG', '1std', '2std', '3std', '4std', '5std', '7std','8std','9std','10std'],
    datasets: [{
      label: '2017',
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
      data: [65000, 59000, 80000, 81000, 56000, 55000, 50000,79000,62000,95000,85400,87000],
    }, {
      label: '2018',
      backgroundColor: [
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)',
        'rgba(93, 156, 236, 0.93)'
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
      data: [60000, 69000, 85000, 91000, 58000, 50000, 45000,72000,84000,79000,88000,99990],
    }]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  accountingMenu: string[];

  /*Bar chart End*/

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    
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
    this.requestAccountsMenu();
  }

  public requestAccountsMenu(): void {
    this.menuService.GetAccountsMenu()
      .subscribe(data => {
        //console.log('requestAccountsMenu ->');
        this.accountingMenu = data as string[];
        //console.log(this.accountingMenu);
      });
  }

}
