(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-chart-google-chart-module"],{

/***/ "./src/app/theme/chart/google-chart/google-chart-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GoogleChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartRoutingModule", function() { return GoogleChartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart.component */ "./src/app/theme/chart/google-chart/google-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _google_chart_component__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"],
        data: {
            title: 'Google Charts',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - google chart',
            status: true
        }
    }
];
var GoogleChartRoutingModule = /** @class */ (function () {
    function GoogleChartRoutingModule() {
    }
    GoogleChartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GoogleChartRoutingModule);
    return GoogleChartRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Area Chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"areaChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'STACKING AREA CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"stackingAreaChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'BAR CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"barChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'BUBBLE CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"bubbleChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'COMBO CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"comboChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'DONUT CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"donutChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'EXPLOADING A SLICE CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <google-chart [data]=\"exploadingChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Table Chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'text-center'\">\r\n        <google-chart [data]=\"tableChartData\"></google-chart>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChartComponent = /** @class */ (function () {
    function GoogleChartComponent() {
        this.areaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                vAxis: { minValue: 0 },
                colors: ['#01C0C8', '#FB9678'],
                height: 300
            },
        };
        this.stackingAreaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                isStacked: true,
                height: 300,
                legend: { position: 'top', maxLines: 3 },
                vAxis: { minValue: 0 },
                colors: ['#2ecc71', '#5faee3']
            },
        };
        this.barChartData = {
            chartType: 'BarChart',
            dataTable: [
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000]
            ],
            options: {
                height: 300,
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                isStacked: true,
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City'
                },
                colors: ['#2ecc71', '#5faee3']
            },
        };
        this.bubbleChartData = {
            chartType: 'BubbleChart',
            dataTable: [
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                ['CAN', 80.66, 1.67, 'North America', 33739900],
                ['DEU', 79.84, 1.36, 'Europe', 81902307],
                ['DNK', 78.6, 1.84, 'Europe', 5523095],
                ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                ['GBR', 80.05, 2, 'Europe', 61801570],
                ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                ['RUS', 68.6, 1.54, 'Europe', 141850000],
                ['USA', 78.09, 2.05, 'North America', 307007000]
            ],
            options: {
                height: 300,
                title: 'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                hAxis: { title: 'Life Expectancy' },
                vAxis: { title: 'Fertility Rate' },
                bubble: { textStyle: { fontSize: 11 } },
                colors: ['#2ecc71', '#5faee3', '#DD4B39']
            },
        };
        this.comboChartData = {
            chartType: 'ComboChart',
            dataTable: [
                ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6]
            ],
            options: {
                height: 300,
                title: 'Monthly Coffee Production by Country',
                vAxis: { title: 'Cups' },
                hAxis: { title: 'Month' },
                seriesType: 'bars',
                series: { 5: { type: 'line' } },
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
            },
        };
        this.donutChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: {
                height: 300,
                title: 'My Daily Activities',
                pieHole: 0.4,
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f']
            },
        };
        this.exploadingChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Bodo', 1.4],
                ['Dogri', 2.3],
                ['Gujarati', 46],
                ['Hindi', 300],
                ['Kannada', 38],
                ['Kashmiri', 5.5],
                ['Konkani', 5],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Manipuri', 1.5],
                ['Marathi', 72],
                ['Nepali', 2.9],
                ['Oriya', 33]
            ],
            options: {
                height: 300,
                title: 'Indian Language Use',
                legend: 'none',
                pieSliceText: 'label',
                slices: {
                    4: { offset: 0.2 },
                    12: { offset: 0.3 },
                    14: { offset: 0.4 },
                    15: { offset: 0.5 },
                },
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
            },
        };
        this.tableChartData = {
            chartType: 'Table',
            dataTable: [
                ['Department', 'Revenues', 'Another column'],
                ['Shoes', 10700, -100],
                ['Sports', -15400, 25],
                ['Toys', 12500, 40],
                ['Electronics', -2100, 889],
                ['Food', 22600, 78],
                ['Art', 1100, 42]
            ],
            formatters: [
                {
                    columns: [1, 2],
                    type: 'NumberFormat',
                    options: {
                        prefix: '&euro;', negativeColor: 'red', negativeParens: true
                    }
                }
            ],
            options: {
                height: 300,
                title: 'Countries',
                allowHtml: true
            }
        };
    }
    GoogleChartComponent.prototype.ngOnInit = function () {
    };
    GoogleChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-chart',
            template: __webpack_require__(/*! ./google-chart.component.html */ "./src/app/theme/chart/google-chart/google-chart.component.html"),
            styles: [__webpack_require__(/*! ./google-chart.component.scss */ "./src/app/theme/chart/google-chart/google-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());



/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart.module.ts ***!
  \*****************************************************************/
/*! exports provided: GoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function() { return GoogleChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _google_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart.component */ "./src/app/theme/chart/google-chart/google-chart.component.ts");
/* harmony import */ var _google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-chart-routing.module */ "./src/app/theme/chart/google-chart/google-chart-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GoogleChartModule = /** @class */ (function () {
    function GoogleChartModule() {
    }
    GoogleChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"]
            ],
            declarations: [_google_chart_component__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]]
        })
    ], GoogleChartModule);
    return GoogleChartModule;
}());



/***/ })

}]);
//# sourceMappingURL=google-chart-google-chart-module.js.map