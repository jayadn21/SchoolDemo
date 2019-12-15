(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Attendance-attendance-setup-attendance-setup-module"],{

/***/ "./src/app/Attendance/attendance-setup/attendance-setup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Attendance/attendance-setup/attendance-setup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n    <app-card title=\"\"[cardOptionBlock]=\"true\">\r\n        <div style=\"text-align: center\">\r\n        <h5>Accounting (Fees Management)</h5>\r\n        </div>\r\n    </app-card>\r\n  </div>\r\n<div class=\"row\"> \r\n   <div class=\"col-sm-6\">\r\n    <app-card >\r\n      <div style=\"text-align: center\">\r\n      <h3>{{pageTitle}}</h3>\r\n    </div>\r\n    <br>\r\n    <br>\r\n\r\n     <div class=\"row\">\r\n        <select style=\"width:500px;\" name=\"class\" placeholder=\"Select one\"\r\n        [(ngModel)]=\"attendance.ClassSectionMediumId\" required>\r\n            <option value=\"\" disabled selected>Select Facility</option>\r\n            \r\n              <option *ngFor=\"let cls of classessections\" value={{cls.Id}}>{{cls.Name}} </option>\r\n        </select>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <select style=\"width:500px;\" name=\"AttendanceType\" placeholder=\"Select one\"\r\n      [(ngModel)]=\"attendance.AttendanceType\"\r\n            #AttendanceType=\"ngModel\" required>\r\n            <option value=\"Regular\">Regular</option>\r\n            <option value=\"Session Wise\">Session Wise</option>\r\n      </select>\r\n    </div> \r\n    \r\n    <br>\r\n    <br>\r\n      <div style=\"text-align:center\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveattendance()\">{{buttonText}}</button>\r\n          &nbsp;\r\n          &nbsp;\r\n          <button type=\"button\" class=\"btn btn-danger\" >Cancel</button>\r\n      \r\n      </div>\r\n    </app-card>\r\n  </div> \r\n\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"facilityfees\" [classHeader]=\"true\">\r\n        <div style=\"text-align: center\">\r\n          <ng2-smart-table [settings]=\"settings\" \r\n          [source]=\"attendances\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n          (createConfirm)=\"onCreateConfirm($event)\"\r\n          (custom)=\"onCustomAction($event)\"></ng2-smart-table>\r\n        </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Attendance/attendance-setup/attendance-setup.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Attendance/attendance-setup/attendance-setup.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Attendance/attendance-setup/attendance-setup.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Attendance/attendance-setup/attendance-setup.component.ts ***!
  \***************************************************************************/
/*! exports provided: AttendanceSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSetupComponent", function() { return AttendanceSetupComponent; });
/* harmony import */ var _service_classsection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var _shared_Models_attendance_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/Models/attendance-setup */ "./src/app/shared/Models/attendance-setup.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_attendance_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/attendance-setup.service */ "./src/app/service/attendance-setup.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AttendanceSetupComponent = /** @class */ (function () {
    function AttendanceSetupComponent(spinner, toastr, _classsection, _attendanceService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this._classsection = _classsection;
        this._attendanceService = _attendanceService;
        this.attendances = Array();
        this.attendance = new _shared_Models_attendance_setup__WEBPACK_IMPORTED_MODULE_1__["AttendanceSetup"]();
        this.buttonText = 'Create';
        this.pageTitle = 'Create Attendance';
        this.classessections = Array();
        this.settings = {
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
                ClassSectionMediumId: {
                    title: 'Class',
                },
                AttendanceType: {
                    title: 'Type',
                },
            },
        };
    }
    AttendanceSetupComponent.prototype.ngOnInit = function () {
        this.getAttendancesDetails();
        this.getclassdetails();
    };
    AttendanceSetupComponent.prototype.getclassdetails = function () {
        var _this = this;
        this._classsection.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.classessections = data.data[0];
            }
        });
    };
    AttendanceSetupComponent.prototype.getAttendancesDetails = function () {
        var _this = this;
        console.log('This is Attendance Fees');
        this.spinner.show();
        this._attendanceService.getAttendancesDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Attendance success');
                _this.attendances = data.data[0];
                console.log(_this.attendances);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    AttendanceSetupComponent.prototype.saveattendance = function () {
        var _this = this;
        console.log('Attendance ' + this.attendance.Id);
        this.spinner.show();
        this._attendanceService.setAttendanceDetails(this.attendance)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.pageTitle + '!', 'Success');
                console.log('New Attendance Added');
                _this.getAttendancesDetails();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
                _this.spinner.hide();
            }
        });
    };
    AttendanceSetupComponent.prototype.cleardata = function () {
        this.attendance = new _shared_Models_attendance_setup__WEBPACK_IMPORTED_MODULE_1__["AttendanceSetup"];
    };
    AttendanceSetupComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.attendance = event.data;
            this.buttonText = 'Update';
            this.pageTitle = 'Update';
        }
    };
    AttendanceSetupComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.attendance = event.data;
        console.log("fees" + this.attendance.Id);
        this.spinner.show();
        this._attendanceService.delAttendanceDetails(this.attendance)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + 'Deleted!', 'Success');
                console.log("Attendance Deleted");
                _this.getAttendancesDetails();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    AttendanceSetupComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    AttendanceSetupComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    AttendanceSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-attendance-setup',
            template: __webpack_require__(/*! ./attendance-setup.component.html */ "./src/app/Attendance/attendance-setup/attendance-setup.component.html"),
            styles: [__webpack_require__(/*! ./attendance-setup.component.scss */ "./src/app/Attendance/attendance-setup/attendance-setup.component.scss")],
            providers: [src_app_service_attendance_setup_service__WEBPACK_IMPORTED_MODULE_3__["AttendanceSetupService"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _service_classsection_service__WEBPACK_IMPORTED_MODULE_0__["ClasssectionService"],
            src_app_service_attendance_setup_service__WEBPACK_IMPORTED_MODULE_3__["AttendanceSetupService"]])
    ], AttendanceSetupComponent);
    return AttendanceSetupComponent;
}());



/***/ }),

/***/ "./src/app/Attendance/attendance-setup/attendance-setup.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Attendance/attendance-setup/attendance-setup.module.ts ***!
  \************************************************************************/
/*! exports provided: AttendanceSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSetupModule", function() { return AttendanceSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _attendance_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendance-setup.component */ "./src/app/Attendance/attendance-setup/attendance-setup.component.ts");
/* harmony import */ var _attendance_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-setup.routing.module */ "./src/app/Attendance/attendance-setup/attendance-setup.routing.module.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AttendanceSetupModule = /** @class */ (function () {
    function AttendanceSetupModule() {
    }
    AttendanceSetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _attendance_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["AttendanceSetupRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_10__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__["Ng2GoogleChartsModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
            ],
            declarations: [_attendance_setup_component__WEBPACK_IMPORTED_MODULE_2__["AttendanceSetupComponent"]]
        })
    ], AttendanceSetupModule);
    return AttendanceSetupModule;
}());



/***/ }),

/***/ "./src/app/Attendance/attendance-setup/attendance-setup.routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Attendance/attendance-setup/attendance-setup.routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AttendanceSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSetupRoutingModule", function() { return AttendanceSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attendance_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendance-setup.component */ "./src/app/Attendance/attendance-setup/attendance-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _attendance_setup_component__WEBPACK_IMPORTED_MODULE_2__["AttendanceSetupComponent"],
        data: {
            title: 'Facility Fees',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var AttendanceSetupRoutingModule = /** @class */ (function () {
    function AttendanceSetupRoutingModule() {
    }
    AttendanceSetupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AttendanceSetupRoutingModule);
    return AttendanceSetupRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/attendance-setup.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/attendance-setup.service.ts ***!
  \*****************************************************/
/*! exports provided: AttendanceSetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSetupService", function() { return AttendanceSetupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiceUitility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceUitility */ "./src/app/service/ServiceUitility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttendanceSetupService = /** @class */ (function () {
    function AttendanceSetupService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/AttendanceSetup';
        this._getAttendances = this.route + '/getattendances';
        this._getAttendance = this.route + '/getattendance';
        this._setAttendance = this.route + '/setattendance';
        this._delAttendance = this.route + '/delattendance';
    }
    AttendanceSetupService.prototype.getAttendancesDetails = function () {
        return this.serviceUitility.postRequest(this._getAttendances, '');
    };
    AttendanceSetupService.prototype.getAttendanceDetails = function () {
        return this.serviceUitility.postRequest(this._getAttendance, '');
    };
    AttendanceSetupService.prototype.setAttendanceDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setAttendance, obj);
    };
    AttendanceSetupService.prototype.delAttendanceDetails = function (obj) {
        return this.serviceUitility.postRequest(this._delAttendance, obj);
    };
    AttendanceSetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], AttendanceSetupService);
    return AttendanceSetupService;
}());



/***/ }),

/***/ "./src/app/service/classsection.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/classsection.service.ts ***!
  \*************************************************/
/*! exports provided: ClasssectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasssectionService", function() { return ClasssectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiceUitility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceUitility */ "./src/app/service/ServiceUitility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClasssectionService = /** @class */ (function () {
    function ClasssectionService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/ClassSectionMedium';
        this._getClasssection = this.route + '/getClassSectionMediums';
        this._setClasssection = this.route + '/setClassSectionMedium';
    }
    ClasssectionService.prototype.getClasssectionDetails = function () {
        return this.serviceUitility.postRequest(this._getClasssection, '');
    };
    ClasssectionService.prototype.setClasssectionDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setClasssection, obj);
    };
    ClasssectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], ClasssectionService);
    return ClasssectionService;
}());



/***/ }),

/***/ "./src/app/service/modal.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/modal.service.ts ***!
  \******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/shared/Models/attendance-setup.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/Models/attendance-setup.ts ***!
  \***************************************************/
/*! exports provided: AttendanceSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSetup", function() { return AttendanceSetup; });
var AttendanceSetup = /** @class */ (function () {
    function AttendanceSetup() {
        this.Id = -1;
    }
    return AttendanceSetup;
}());



/***/ }),

/***/ "./src/app/shared/modal/ModalShared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modal/ModalShared.module.ts ***!
  \****************************************************/
/*! exports provided: ModalSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSharedModule", function() { return ModalSharedModule; });
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModalSharedModule = /** @class */ (function () {
    function ModalSharedModule() {
    }
    ModalSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]],
            exports: [_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]]
        })
    ], ModalSharedModule);
    return ModalSharedModule;
}());



/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/modal.service */ "./src/app/service/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://jasonwatmore.com/post/2019/04/16/angular-7-custom-modal-window-dialog-box
// https://github.com/cornflourblue/angular-7-custom-modal
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when component is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>"
        }),
        __metadata("design:paramtypes", [_service_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Attendance-attendance-setup-attendance-setup-module.js.map