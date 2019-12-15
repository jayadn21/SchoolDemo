import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { animate, style, transition, trigger} from '@angular/animations';

// import {CalendarEvent, CalendarEventTimesChangedEvent,
//   CalendarEventAction,
//   CalendarDateFormatter,
//   DateFormatterParams
// } from 'angular-calendar';
// import { Subject } from 'rxjs/Subject';

// import { startOfDay, endOfDay, subDays, endOfMonth, addHours, addDays, isSameMonth, isSameDay } from 'date-fns';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/filter';
// export class CustomDateFormatter extends CalendarDateFormatter {

//   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
//     return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date);
//   }
// }

// export const colors: any = {
//   red: {
//     primary: '#e74a25',
//     secondary: '#FAE3E3'
//   },
//   blue: {
//     primary: '#00bbd9',
//     secondary: '#D1E8FF'
//   },
//   yellow: {
//     primary: '#e3bc08',
//     secondary: '#FDF1BA'
//   },
//   green: {
//     primary: '#2ecc71',
//     secondary: '#b1fdcf'
//   }
// };



// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare const AmCharts: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';
import '../../../../assets/charts/amchart/continentsLow.js';
import { InstituteService } from 'src/app/service/institute.service.js';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: [
    './default.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  // encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: CalendarDateFormatter,
  //     useClass: CustomDateFormatter
  //   }
  // ],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})

export class DefaultComponent implements OnInit, AfterViewInit {

  myForm: FormGroup;

  public seoCard1Data: any;
  public seoCard2Data: any;
  public seoCard1Option: any;
  public seoCard2Option: any;
  @ViewChild('seoCard1Chart') seoCard1Chart: ElementRef;
  @ViewChild('seoCard2Chart') seoCard2Chart: ElementRef;
  public seoCard1Tag: CanvasRenderingContext2D;
  public seoCard2Tag: CanvasRenderingContext2D;

  public feedbackData: any;
  public feedbackOption: any;

    options: any = {
      position: ['bottom', 'right'],
    };
    defaultInstitute = {
      Id: '',
      InstitutionGroupId: '',
      Name: '',
      Address: '',
      City: '',
      District: '',
      State: '',
      Country: '',
      Pincode: '',
      TeachingMedium: '',
      Phone1: '',
      Phone2: '',
      EmailId: '',
      Fax: '',
      Logo: '',
      DiseNumber: '',
};

userLoginParameter = {
UserLoginId: '',
};


  // items = [];
  // public view = 'month';
  // viewDate: Date = new Date();
  // isChecked = true;
  // public colorOption = ['red', 'blue', 'yellow', 'green'];

  // public actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //     }
  //   }
  // ];

  // externalEvents: CalendarEvent[] = [
  //   {
  //     title: 'My Event One',
  //     color: colors.yellow,
  //     start: new Date(),
  //     draggable: true,
  //     actions: this.actions
  //   },
  //   {
  //     title: 'My Event Two',
  //     color: colors.blue,
  //     start: new Date(),
  //     draggable: true,
  //     actions: this.actions
  //   },
  //   {
  //     title: 'My Event Three',
  //     color: colors.blue,
  //     start: new Date(),
  //     draggable: true,
  //     actions: this.actions
  //   },
  //   {
  //     title: 'My Event Four',
  //     color: colors.blue,
  //     start: new Date(),
  //     draggable: true,
  //     actions: this.actions
  //   }
  // ];

  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.green,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];
  // public activeDayIsOpen = true;
  // refresh: Subject<any> = new Subject();

  // eventDropped({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
  //   const externalIndex: number = this.externalEvents.indexOf(event);
  //   if (externalIndex > -1) {
  //     console.log(this.isChecked);
  //     if (!this.isChecked) {
  //       this.externalEvents.splice(externalIndex, 1);
  //     }
  //     this.events.push(event);
  //   }
  //   event.start = newStart;
  //   if (newEnd) {
  //     event.end = newEnd;
  //   }
  //   this.viewDate = newStart;
  //   this.activeDayIsOpen = true;
  // }

  // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  //   if (isSameMonth(date, this.viewDate)) {
  //     if (
  //       (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
  //       events.length === 0
  //     ) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //       this.viewDate = date;
  //     }
  //   }
  // }

    constructor(private _institute: InstituteService) {
    }

  ngOnInit() {
    this.userLoginParameter.UserLoginId = JSON.parse(localStorage.getItem('Id'));

    this._institute.getuserdefaultinstitutionService(this.userLoginParameter)
    .subscribe(data => {
      if (data.success) {
        this.defaultInstitute = data.data[0][0];
        console.log(this.defaultInstitute.InstitutionGroupId);
       } else {
         console.log('error: ' + data.message);
       }

    });
  }

  // onAdd(event) {
  //   const color = this.colorOption[Math.floor(Math.random() * this.colorOption.length)];
  //   this.externalEvents.push({
  //     title: event.value,
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors[color],
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     actions: this.actions
  //   });
  //   this.refresh.next();
  // }

  // setEvent() {
  //   this.isChecked = !this.isChecked;
  // }

  ngAfterViewInit() {
    setTimeout(() => {

      AmCharts.makeChart( 'statistics_chart', {
        'type': 'serial',
        'theme': 'light',
        'dataDateFormat': 'YYYY-MM-DD',
        'precision': 2,
        'valueAxes': [{
          'id': 'v1',
          'title': 'Sales',
          'position': 'left',
          'autoGridCount': false,
          'labelFunction': function(value) {
            return '$' + Math.round(value) + 'M';
          }
        }, {
          'id': 'v2',
          'gridAlpha': 0.1,
          'autoGridCount': false
        }],
        'graphs': [{
          'id': 'g1',
          'valueAxis': 'v2',
          'lineThickness': 0,
          'fillAlphas': 0.2,
          'lineColor': '#4099ff',
          'type': 'line',
          'title': 'Laptop',
          'useLineColorForBulletBorder': true,
          'valueField': 'market1',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }, {
          'id': 'g2',
          'valueAxis': 'v2',
          'fillAlphas': 0.6,
          'lineThickness': 0,
          'lineColor': '#4099ff',
          'type': 'line',
          'title': 'TV',
          'useLineColorForBulletBorder': true,
          'valueField': 'market2',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }],
        'chartCursor': {
          'pan': true,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'cursorAlpha': 0,
          'valueLineAlpha': 0.2
        },
        'categoryField': 'date',
        'categoryAxis': {
          'parseDates': true,
          'gridAlpha' : 0,
          'minorGridEnabled': true
        },
        'legend': {
          'position': 'top',
        },
        'balloon': {
          'borderThickness': 1,
          'shadowAlpha': 0
        },
        'export': {
          'enabled': true
        },
        'dataProvider': [{
          'date': '2013-01-01',
          'market1': 0,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-02-01',
          'market1': 130,
          'market2': 110,
          'sales1': 0
        }, {
          'date': '2013-03-01',
          'market1': 80,
          'market2': 60,
          'sales1': 0
        }, {
          'date': '2013-04-01',
          'market1': 70,
          'market2': 200,
          'sales1': 0
        }, {
          'date': '2013-05-01',
          'market1': 180,
          'market2': 150,
          'sales1': 0
        }, {
          'date': '2013-06-01',
          'market1': 105,
          'market2': 90,
          'sales1': 0
        }, {
          'date': '2013-07-01',
          'market1': 250,
          'market2': 150,
          'sales1': 0
        }]
      });

      /* feedback chart start */
      this.feedbackData = {
        datasets: [{
          data: [83, 17],
          backgroundColor: ['#4099ff', '#81c1fd'],
          label: 'Dataset 1',
          borderWidth: 0
        }], labels: ['Positive', 'Negative']
      };

      this.feedbackOption = {
        responsive: true,
        legend: {display: false},
        title: {display: false, text: 'Chart.js Doughnut Chart'},
        animation: {animateScale: true, animateRotate: true}
      };
      /* feedback chart end */
    }, 75);
  }

}


function e(h, g, i) {
  if (i == null) {
    i = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: '',
      borderColor: h,
      borderWidth: 2,
      hitRadius: 0,
      pointHoverRadius: 0,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: '#fff',
      pointBorderColor: h,
      pointHoverBackgroundColor: h,
      pointHoverBorderColor: '#000',
      fill: true,
      backgroundColor: i,
      data: g,
    }]
  };
}

function f() {
  return {
    title: {display: !1},
    tooltips: {enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10},
    legend: {display: !1, labels: {usePointStyle: !1}},
    responsive: !0,
    maintainAspectRatio: !0,
    hover: {mode: 'index'},
    scales: {
      xAxes: [{display: !1, gridLines: !1, scaleLabel: {display: !0, labelString: 'Month'}}],
      yAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {display: !0, labelString: 'Value'},
        ticks: {beginAtZero: !0}
      }]
    },
    elements: {point: {radius: 4, borderWidth: 12}},
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}}
  };
}





