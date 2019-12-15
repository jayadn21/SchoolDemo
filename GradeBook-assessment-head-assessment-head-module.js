(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-assessment-head-assessment-head-module"],{

/***/ "./src/app/GradeBook/assessment-head/assessment-head.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/GradeBook/assessment-head/assessment-head.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5>Assessment Head </h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"assessmentHead.Name\" #Name=\"ngModel\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveAssessmentHead\" (click)=\"saveAssessmentHead()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"AssessmentHead\">\r\n      <div class=\"mt-3\">\r\n        <h5> Assessment Head </h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"AssessmentHeads\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/GradeBook/assessment-head/assessment-head.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/GradeBook/assessment-head/assessment-head.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/GradeBook/assessment-head/assessment-head.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/GradeBook/assessment-head/assessment-head.component.ts ***!
  \************************************************************************/
/*! exports provided: AssessmentHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentHeadComponent", function() { return AssessmentHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_service_assessment_head_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/assessment-head.service */ "./src/app/service/assessment-head.service.ts");
/* harmony import */ var src_app_shared_Models_Assessmenthead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Models/Assessmenthead */ "./src/app/shared/Models/Assessmenthead.ts");
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





var AssessmentHeadComponent = /** @class */ (function () {
    function AssessmentHeadComponent(spinner, toastr, assessmentHeadAPI) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.assessmentHeadAPI = assessmentHeadAPI;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Add AssessmentHead';
        this.AssessmentHeads = Array();
        this.assessmentHead = new src_app_shared_Models_Assessmenthead__WEBPACK_IMPORTED_MODULE_3__["AssessmentHead"]();
        this.assessmentHeadGrid = Array();
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
    AssessmentHeadComponent.prototype.ngOnInit = function () {
        this.getassessmentHeads();
    };
    AssessmentHeadComponent.prototype.getassessmentHeads = function () {
        var _this = this;
        this.spinner.show();
        this.assessmentHeadAPI.getAssessmentheads()
            .subscribe(function (data) {
            if (data.success) {
                _this.AssessmentHeads = data.data[0];
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    AssessmentHeadComponent.prototype.saveAssessmentHead = function () {
        var _this = this;
        this.spinner.show();
        this.assessmentHeadAPI.setAssessmentHead(this.assessmentHead)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getassessmentHeads();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    AssessmentHeadComponent.prototype.updateAssessment = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this.assessmentHeadAPI.setAssessmentHead(this.assessmentHead)
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
    AssessmentHeadComponent.prototype.cleardata = function () {
        this.assessmentHead = new src_app_shared_Models_Assessmenthead__WEBPACK_IMPORTED_MODULE_3__["AssessmentHead"];
    };
    AssessmentHeadComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.assessmentHead = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update AssessmentHead';
        }
    };
    AssessmentHeadComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AssessmentHeadComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    AssessmentHeadComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    AssessmentHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assessment-head',
            template: __webpack_require__(/*! ./assessment-head.component.html */ "./src/app/GradeBook/assessment-head/assessment-head.component.html"),
            styles: [__webpack_require__(/*! ./assessment-head.component.scss */ "./src/app/GradeBook/assessment-head/assessment-head.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_service_assessment_head_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentHeadService"]])
    ], AssessmentHeadComponent);
    return AssessmentHeadComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/assessment-head/assessment-head.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/GradeBook/assessment-head/assessment-head.module.ts ***!
  \*********************************************************************/
/*! exports provided: AssessmentHeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentHeadModule", function() { return AssessmentHeadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assessment_head_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessment-head.routing.module */ "./src/app/GradeBook/assessment-head/assessment-head.routing.module.ts");
/* harmony import */ var _assessment_head_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-head.component */ "./src/app/GradeBook/assessment-head/assessment-head.component.ts");
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








var AssessmentHeadModule = /** @class */ (function () {
    function AssessmentHeadModule() {
    }
    AssessmentHeadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _assessment_head_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssessmentHeadRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_assessment_head_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentHeadComponent"]]
        })
    ], AssessmentHeadModule);
    return AssessmentHeadModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/assessment-head/assessment-head.routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/GradeBook/assessment-head/assessment-head.routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AssessmentHeadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentHeadRoutingModule", function() { return AssessmentHeadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assessment_head_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessment-head.component */ "./src/app/GradeBook/assessment-head/assessment-head.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _assessment_head_component__WEBPACK_IMPORTED_MODULE_2__["AssessmentHeadComponent"],
        data: {
            title: 'Grade Book',
            status: true
        },
    },
];
var AssessmentHeadRoutingModule = /** @class */ (function () {
    function AssessmentHeadRoutingModule() {
    }
    AssessmentHeadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AssessmentHeadRoutingModule);
    return AssessmentHeadRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/assessment-head.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/assessment-head.service.ts ***!
  \****************************************************/
/*! exports provided: AssessmentHeadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentHeadService", function() { return AssessmentHeadService; });
/* harmony import */ var _ServiceUitility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceUitility */ "./src/app/service/ServiceUitility.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssessmentHeadService = /** @class */ (function () {
    function AssessmentHeadService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/AssessmentHeads';
        this._getAssessmentHeads = this.route + '/getAssessmentHeads';
        this._getAssessmentHead = this.route + '/getAssessmentHead';
        this._setAssessmentHead = this.route + '/setAssessmentHead';
        this._delAssessmentHead = this.route + '/delAssessmentHead';
    }
    AssessmentHeadService.prototype.getAssessmentheads = function () {
        return this.serviceUitility.postRequest(this._getAssessmentHeads, '');
    };
    AssessmentHeadService.prototype.getAssessmentHead = function () {
        return this.serviceUitility.postRequest(this._getAssessmentHead, '');
    };
    AssessmentHeadService.prototype.setAssessmentHead = function (obj) {
        return this.serviceUitility.postRequest(this._setAssessmentHead, obj);
    };
    AssessmentHeadService.prototype.delAssessmentHead = function (obj) {
        return this.serviceUitility.postRequest(this._delAssessmentHead, obj);
    };
    AssessmentHeadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], AssessmentHeadService);
    return AssessmentHeadService;
}());



/***/ }),

/***/ "./src/app/shared/Models/Assessmenthead.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/Models/Assessmenthead.ts ***!
  \*************************************************/
/*! exports provided: AssessmentHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentHead", function() { return AssessmentHead; });
var AssessmentHead = /** @class */ (function () {
    function AssessmentHead() {
        this.Id = -1;
    }
    return AssessmentHead;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-assessment-head-assessment-head-module.js.map