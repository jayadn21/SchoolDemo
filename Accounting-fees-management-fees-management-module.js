(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Accounting-fees-management-fees-management-module"],{

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/Accounting/fees-management/fees-management.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Accounting/fees-management/fees-management.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-lg-12\">\r\n    <app-card title=\"\"[cardOptionBlock]=\"true\">\r\n        <h5>Accounting (Fees Management)</h5>\r\n        <hr>\r\n      <div ngbDropdown class=\"dropdown-primary\">\r\n          <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Fees Management</button>\r\n          <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Statements</a>\r\n            <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Direct Payments</a>\r\n             <!-- <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>  -->\r\n          </div>\r\n        </div>\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n\r\n        <div ngbDropdown class=\"dropdown-success\">\r\n            <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Transactions</button>\r\n            <div ngbDropdownMenu>\r\n              <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/Accounting/indirect-account/']\"\r\n               href=\"javascript:\">Indirect Income</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n              [routerLink]=\"['/Accounting/expense/']\">Expense</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Bills</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n              [routerLink]=\"['/Accounting/internal-transaction/']\">Internal Transactions</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Journal Transactions</a>\r\n            </div>\r\n          </div>\r\n\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n\r\n        <button class=\"btn btn-success \">Payroll</button>\r\n\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n\r\n          <div ngbDropdown class=\"dropdown-info\">\r\n            <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Reports</button>\r\n            <div ngbDropdownMenu>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Fees Reports</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Profit and Loss</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Balance Sheet</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Trial Balance</a>\r\n            </div>\r\n          </div>\r\n\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n\r\n          <div ngbDropdown class=\"dropdown-warning\">\r\n              <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Settings</button>\r\n              <div ngbDropdownMenu>\r\n              <div *ngFor=\"let menuItem of accountingMenu\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"[menuItem.ModuleName,menuItem.routerLink]\"\r\n                 href=\"javascript:\">{{menuItem.Name}}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  </app-card>\r\n  </div>\r\n\r\n <div class=\"row\">\r\n <div class=\"col-md-12 col-lg-7\">\r\n      <app-card>\r\n        <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"width: 100%; height: 470px;\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-5\">\r\n      <app-card>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-12\">\r\n            </div>\r\n          </div>\r\n          <google-chart [data]=\"donutChartData\"></google-chart>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/Accounting/fees-management/fees-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Accounting/fees-management/fees-management.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Accounting/fees-management/fees-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Accounting/fees-management/fees-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeesManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesManagementComponent", function() { return FeesManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeesManagementComponent = /** @class */ (function () {
    /*Bar chart End*/
    function FeesManagementComponent(menuService) {
        this.menuService = menuService;
        this.areaChartData = {
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
        this.donutChartData = {
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
        this.type1 = 'bar';
        this.data1 = {
            labels: ['LKG', 'UKG', '1std', '2std', '3std', '4std', '5std', '7std', '8std', '9std', '10std'],
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
                    data: [65000, 59000, 80000, 81000, 56000, 55000, 50000, 79000, 62000, 95000, 85400, 87000],
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
                    data: [60000, 69000, 85000, 91000, 58000, 50000, 45000, 72000, 84000, 79000, 88000, 99990],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
        };
    }
    FeesManagementComponent.prototype.ngOnInit = function () {
        var chart4 = c3__WEBPACK_IMPORTED_MODULE_1__["generate"]({
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
    };
    FeesManagementComponent.prototype.requestAccountsMenu = function () {
        var _this = this;
        this.menuService.GetAccountsMenu()
            .subscribe(function (data) {
            //console.log('requestAccountsMenu ->');
            _this.accountingMenu = data;
            //console.log(this.accountingMenu);
        });
    };
    FeesManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fees-management',
            template: __webpack_require__(/*! ./fees-management.component.html */ "./src/app/Accounting/fees-management/fees-management.component.html"),
            styles: [__webpack_require__(/*! ./fees-management.component.scss */ "./src/app/Accounting/fees-management/fees-management.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], FeesManagementComponent);
    return FeesManagementComponent;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-management/fees-management.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Accounting/fees-management/fees-management.module.ts ***!
  \**********************************************************************/
/*! exports provided: FeesManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesManagementModule", function() { return FeesManagementModule; });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fees_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fees-management.component */ "./src/app/Accounting/fees-management/fees-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fees_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fees-management.routing.module */ "./src/app/Accounting/fees-management/fees-management.routing.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FeesManagementModule = /** @class */ (function () {
    function FeesManagementModule() {
    }
    FeesManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _fees_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeesManagementRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"]
            ],
            declarations: [_fees_management_component__WEBPACK_IMPORTED_MODULE_1__["FeesManagementComponent"]]
        })
    ], FeesManagementModule);
    return FeesManagementModule;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-management/fees-management.routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Accounting/fees-management/fees-management.routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: FeesManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesManagementRoutingModule", function() { return FeesManagementRoutingModule; });
/* harmony import */ var _fees_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fees-management.component */ "./src/app/Accounting/fees-management/fees-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _fees_management_component__WEBPACK_IMPORTED_MODULE_0__["FeesManagementComponent"],
        data: {
            title: 'Fees Management',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var FeesManagementRoutingModule = /** @class */ (function () {
    function FeesManagementRoutingModule() {
    }
    FeesManagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeesManagementRoutingModule);
    return FeesManagementRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Accounting-fees-management-fees-management-module.js.map