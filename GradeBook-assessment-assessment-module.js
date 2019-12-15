(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-assessment-assessment-module"],{

/***/ "./src/app/GradeBook/assessment/assessment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/GradeBook/assessment/assessment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5> Assessment Name </h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"assessment.Name\" #Name=\"ngModel\" required>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveAssessment\" (click)=\"saveAssessment()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cleardata()\">Cancel</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"Assessment\">\r\n      <div class=\"mt-3\">\r\n        <h5> Assessment Name </h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"Assessments\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/GradeBook/assessment/assessment.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/GradeBook/assessment/assessment.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/GradeBook/assessment/assessment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/GradeBook/assessment/assessment.component.ts ***!
  \**************************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var _shared_Models_Assessment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/Models/Assessment */ "./src/app/shared/Models/Assessment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_assessment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/assessment.service */ "./src/app/service/assessment.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssessmentComponent = /** @class */ (function () {
    function AssessmentComponent(_Assessment, toastr, spinner) {
        this._Assessment = _Assessment;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Assessment';
        this.Assessments = Array();
        this.assessment = new _shared_Models_Assessment__WEBPACK_IMPORTED_MODULE_0__["Assessment"]();
        this.assessmentGrid = Array();
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
    AssessmentComponent.prototype.ngOnInit = function () {
        this.getassessments();
    };
    AssessmentComponent.prototype.getassessments = function () {
        var _this = this;
        this.spinner.show();
        this._Assessment.getAssessmentBook()
            .subscribe(function (data) {
            if (data.success) {
                _this.Assessments = data.data[0];
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    AssessmentComponent.prototype.saveAssessment = function () {
        var _this = this;
        this.spinner.show();
        this._Assessment.setAssessment(this.assessment)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getassessments();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    AssessmentComponent.prototype.updateAssessment = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this._Assessment.setAssessment(this.assessment)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully ' + 'Updated AssessmentHead', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    AssessmentComponent.prototype.cleardata = function () {
        this.assessment = new _shared_Models_Assessment__WEBPACK_IMPORTED_MODULE_0__["Assessment"];
    };
    AssessmentComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.assessment = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Assessment';
        }
    };
    AssessmentComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AssessmentComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    AssessmentComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    AssessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assessment',
            template: __webpack_require__(/*! ./assessment.component.html */ "./src/app/GradeBook/assessment/assessment.component.html"),
            styles: [__webpack_require__(/*! ./assessment.component.scss */ "./src/app/GradeBook/assessment/assessment.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AssessmentComponent);
    return AssessmentComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/assessment/assessment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/GradeBook/assessment/assessment.module.ts ***!
  \***********************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assessment_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment.routing.module */ "./src/app/GradeBook/assessment/assessment.routing.module.ts");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assessment.component */ "./src/app/GradeBook/assessment/assessment.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AssessmentModule = /** @class */ (function () {
    function AssessmentModule() {
    }
    AssessmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _assessment_routing_module__WEBPACK_IMPORTED_MODULE_4__["AssessmentRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"]
            ],
            declarations: [_assessment_component__WEBPACK_IMPORTED_MODULE_5__["AssessmentComponent"]]
        })
    ], AssessmentModule);
    return AssessmentModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/assessment/assessment.routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/GradeBook/assessment/assessment.routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AssessmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentRoutingModule", function() { return AssessmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessment.component */ "./src/app/GradeBook/assessment/assessment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _assessment_component__WEBPACK_IMPORTED_MODULE_2__["AssessmentComponent"],
        data: {
            title: 'Grade Book',
            status: true
        },
    },
];
var AssessmentRoutingModule = /** @class */ (function () {
    function AssessmentRoutingModule() {
    }
    AssessmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AssessmentRoutingModule);
    return AssessmentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-assessment-assessment-module.js.map