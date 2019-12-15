(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-subject-page-subject-page-module"],{

/***/ "./src/app/GradeBook/subject-page/subject-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/GradeBook/subject-page/subject-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div style=\"text-align: center\">\r\n        <h5>{{Headingtext}}</h5>\r\n        <hr>\r\n        <br>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-14\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject Name\" [(ngModel)]=\"Subjectpage.Name\"\r\n              #Name=\"ngModel\" required>\r\n            <span class=\"md-line\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-14\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Short Name\" [(ngModel)]=\"Subjectpage.ShortName\"\r\n              #ShortName=\"ngModel\" required>\r\n            <span class=\"md-line\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <select class=\"browser-default custom-select\">\r\n            <option value=\"-1\" disabled='true'> Select Subject Type </option>\r\n            <option *ngFor=\"let Subj of subjectType\" value={{Subj.Id}}>{{Subj.Name}} </option>\r\n          </select>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"savesubjectPage\" (click)=\"savesubjectPage()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp; &nbsp;&nbsp; &nbsp;\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cleardata()\">Cancel</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <h5>Subjects</h5>\r\n      <hr>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"subjectPage\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/GradeBook/subject-page/subject-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/GradeBook/subject-page/subject-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/GradeBook/subject-page/subject-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/GradeBook/subject-page/subject-page.component.ts ***!
  \******************************************************************/
/*! exports provided: SubjectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPageComponent", function() { return SubjectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_subject_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/subject-page.service */ "./src/app/service/subject-page.service.ts");
/* harmony import */ var src_app_shared_Models_SubjectPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Models/SubjectPage */ "./src/app/shared/Models/SubjectPage.ts");
/* harmony import */ var src_app_shared_Models_SubjectType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Models/SubjectType */ "./src/app/shared/Models/SubjectType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubjectPageComponent = /** @class */ (function () {
    function SubjectPageComponent(spinner, toastr, subjectpageAPI) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.subjectpageAPI = subjectpageAPI;
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Subject';
        this.subjectPage = Array();
        this.Subjectpage = new src_app_shared_Models_SubjectPage__WEBPACK_IMPORTED_MODULE_4__["SubjectPage"]();
        this.subjectType = Array();
        this.SubjectType = new src_app_shared_Models_SubjectType__WEBPACK_IMPORTED_MODULE_5__["SubjectType"]();
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
    SubjectPageComponent.prototype.ngOnInit = function () {
        this.getSubjectType();
        this.getSubjects();
    };
    SubjectPageComponent.prototype.getSubjectType = function () {
        var _this = this;
        this.spinner.show();
        console.log('Success');
        this.subjectpageAPI.getSubjectTypes()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.subjectType = data.data[0];
                console.log(_this.subjectType);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectPageComponent.prototype.getSubjects = function () {
        var _this = this;
        this.spinner.show();
        console.log('Success');
        this.subjectpageAPI.getSubjects()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.subjectPage = data.data[0];
                console.log(_this.subjectPage);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectPageComponent.prototype.savesubjectPage = function () {
        var _this = this;
        this.spinner.show();
        this.subjectpageAPI.setSubject(this.Subjectpage)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                console.log('New Subject Added');
                _this.getSubjects();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    SubjectPageComponent.prototype.cleardata = function () {
        this.Subjectpage = new src_app_shared_Models_SubjectPage__WEBPACK_IMPORTED_MODULE_4__["SubjectPage"];
    };
    SubjectPageComponent.prototype.updateSubjectPage = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this.subjectpageAPI.setSubject(this.Subjectpage)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.toastr.success('Successfully ' + 'Updated Subject', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectPageComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.Subjectpage = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Subject';
        }
    };
    SubjectPageComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SubjectPageComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    SubjectPageComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    SubjectPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-page',
            template: __webpack_require__(/*! ./subject-page.component.html */ "./src/app/GradeBook/subject-page/subject-page.component.html"),
            styles: [__webpack_require__(/*! ./subject-page.component.scss */ "./src/app/GradeBook/subject-page/subject-page.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_service_subject_page_service__WEBPACK_IMPORTED_MODULE_3__["SubjectPageService"]])
    ], SubjectPageComponent);
    return SubjectPageComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/subject-page/subject-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/GradeBook/subject-page/subject-page.module.ts ***!
  \***************************************************************/
/*! exports provided: SubjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPageModule", function() { return SubjectPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subject_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject-page.routing.module */ "./src/app/GradeBook/subject-page/subject-page.routing.module.ts");
/* harmony import */ var _subject_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject-page.component */ "./src/app/GradeBook/subject-page/subject-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SubjectPageModule = /** @class */ (function () {
    function SubjectPageModule() {
    }
    SubjectPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _subject_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubjectPageRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"]
            ],
            declarations: [_subject_page_component__WEBPACK_IMPORTED_MODULE_3__["SubjectPageComponent"]]
        })
    ], SubjectPageModule);
    return SubjectPageModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/subject-page/subject-page.routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/GradeBook/subject-page/subject-page.routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubjectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPageRoutingModule", function() { return SubjectPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subject_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject-page.component */ "./src/app/GradeBook/subject-page/subject-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _subject_page_component__WEBPACK_IMPORTED_MODULE_2__["SubjectPageComponent"],
        data: {
            title: 'Grade Book',
            status: true
        },
    },
];
var SubjectPageRoutingModule = /** @class */ (function () {
    function SubjectPageRoutingModule() {
    }
    SubjectPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SubjectPageRoutingModule);
    return SubjectPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/Models/SubjectType.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/Models/SubjectType.ts ***!
  \**********************************************/
/*! exports provided: SubjectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectType", function() { return SubjectType; });
var SubjectType = /** @class */ (function () {
    function SubjectType() {
        this.Id = -1;
    }
    return SubjectType;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-subject-page-subject-page-module.js.map