(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-grades-grades-module"],{

/***/ "./src/app/GradeBook/grades/grades.component.html":
/*!********************************************************!*\
  !*** ./src/app/GradeBook/grades/grades.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5>Grading System </h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Total Marks\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Choose Class\" >\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveGrades\" (click)=\"saveGrades()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"Grades\">\r\n      <div class=\"mt-3\">\r\n        <h5> Grading Sysytem </h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"Grades\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/GradeBook/grades/grades.component.scss":
/*!********************************************************!*\
  !*** ./src/app/GradeBook/grades/grades.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/GradeBook/grades/grades.component.ts":
/*!******************************************************!*\
  !*** ./src/app/GradeBook/grades/grades.component.ts ***!
  \******************************************************/
/*! exports provided: GradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesComponent", function() { return GradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_grades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/grades.service */ "./src/app/service/grades.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GradesComponent = /** @class */ (function () {
    function GradesComponent(_gradeSetups, spinner, toastr) {
        this._gradeSetups = _gradeSetups;
        this.spinner = spinner;
        this.toastr = toastr;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Create Grading System';
        // tslint:disable-next-line: member-ordering
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
                // Id: {
                //   title: 'Id',
                // },
                Name: {
                    title: 'Name',
                },
            },
        };
    }
    GradesComponent.prototype.ngOnInit = function () {
    };
    GradesComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    GradesComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    GradesComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    GradesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grades',
            template: __webpack_require__(/*! ./grades.component.html */ "./src/app/GradeBook/grades/grades.component.html"),
            styles: [__webpack_require__(/*! ./grades.component.scss */ "./src/app/GradeBook/grades/grades.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_grades_service__WEBPACK_IMPORTED_MODULE_1__["GradesService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], GradesComponent);
    return GradesComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/grades/grades.module.ts":
/*!***************************************************!*\
  !*** ./src/app/GradeBook/grades/grades.module.ts ***!
  \***************************************************/
/*! exports provided: GradesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesModule", function() { return GradesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grades_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grades.component */ "./src/app/GradeBook/grades/grades.component.ts");
/* harmony import */ var _grades_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grades.routing.module */ "./src/app/GradeBook/grades/grades.routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GradesModule = /** @class */ (function () {
    function GradesModule() {
    }
    GradesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _grades_routing_module__WEBPACK_IMPORTED_MODULE_3__["GradesRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_grades_component__WEBPACK_IMPORTED_MODULE_2__["GradesComponent"]]
        })
    ], GradesModule);
    return GradesModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/grades/grades.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/GradeBook/grades/grades.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GradesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesRoutingModule", function() { return GradesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grades_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grades.component */ "./src/app/GradeBook/grades/grades.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _grades_component__WEBPACK_IMPORTED_MODULE_2__["GradesComponent"],
        data: {
            title: 'Grade Book',
            status: true
        },
    },
];
var GradesRoutingModule = /** @class */ (function () {
    function GradesRoutingModule() {
    }
    GradesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GradesRoutingModule);
    return GradesRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/grades.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/grades.service.ts ***!
  \*******************************************/
/*! exports provided: GradesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesService", function() { return GradesService; });
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


var GradesService = /** @class */ (function () {
    function GradesService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/GradeSetup';
        this._getGradeSetups = this.route + '/getGradeSetups';
        this._getGradeSetup = this.route + '/getGradeSetup';
        this._setGradeSetup = this.route + '/setGradeSetup';
        this._delGradeSetup = this.route + '/delGradeSetup';
    }
    GradesService.prototype.getGradeSetups = function () {
        return this.serviceUitility.postRequest(this._getGradeSetups, '');
    };
    GradesService.prototype.getGradeSetup = function () {
        return this.serviceUitility.postRequest(this._getGradeSetup, '');
    };
    GradesService.prototype.setGradeSetup = function (obj) {
        return this.serviceUitility.postRequest(this._setGradeSetup, obj);
    };
    GradesService.prototype.delGradeSetup = function (obj) {
        return this.serviceUitility.postRequest(this._delGradeSetup, obj);
    };
    GradesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], GradesService);
    return GradesService;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-grades-grades-module.js.map