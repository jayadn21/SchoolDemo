(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["STUDENTS-student-catogery-student-catogery-module"],{

/***/ "./src/app/STUDENTS/student-catogery/student-catogery.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/STUDENTS/student-catogery/student-catogery.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  student-catogery works!\r\n</p>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5>Student Catogery</h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"Studentcatogery.Name\" #Name=\"ngModel\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveStudentCatogery\" (click)=\"saveStudentCatogery()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"StudentCatogery\">\r\n      <div class=\"mt-3\">\r\n        <h5>Student Catogery</h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"studentCatogery\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/STUDENTS/student-catogery/student-catogery.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/STUDENTS/student-catogery/student-catogery.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/STUDENTS/student-catogery/student-catogery.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/STUDENTS/student-catogery/student-catogery.component.ts ***!
  \*************************************************************************/
/*! exports provided: StudentCatogeryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCatogeryComponent", function() { return StudentCatogeryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_Models_Studentcatogery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/Models/Studentcatogery */ "./src/app/shared/Models/Studentcatogery.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_student_catogery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/student-catogery.service */ "./src/app/service/student-catogery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentCatogeryComponent = /** @class */ (function () {
    function StudentCatogeryComponent(spinner, toastr, studentCatogeryAPI) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.studentCatogeryAPI = studentCatogeryAPI;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Add Student Catogery';
        this.studentCatogery = Array();
        this.Studentcatogery = new src_app_shared_Models_Studentcatogery__WEBPACK_IMPORTED_MODULE_1__["StudentCatogery"]();
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
                Id: {
                    title: 'Id',
                },
                Name: {
                    title: 'Name',
                },
            },
        };
    }
    StudentCatogeryComponent.prototype.ngOnInit = function () {
        this.getadmissionCategorys();
    };
    StudentCatogeryComponent.prototype.getadmissionCategorys = function () {
        var _this = this;
        this.spinner.show();
        this.studentCatogeryAPI.getadmissionCategorys()
            .subscribe(function (data) {
            if (data.success) {
                _this.studentCatogery = data.data[0];
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    StudentCatogeryComponent.prototype.saveStudentCatogery = function () {
        var _this = this;
        this.spinner.show();
        this.studentCatogeryAPI.setAdmissionCategory(this.Studentcatogery)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getadmissionCategorys();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    StudentCatogeryComponent.prototype.updateAssessment = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this.studentCatogeryAPI.setAdmissionCategory(this.Studentcatogery)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully ' + 'Updated Student Catogery', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    StudentCatogeryComponent.prototype.cleardata = function () {
        this.Studentcatogery = new src_app_shared_Models_Studentcatogery__WEBPACK_IMPORTED_MODULE_1__["StudentCatogery"];
    };
    StudentCatogeryComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.Studentcatogery = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update StudentCatogery';
        }
    };
    StudentCatogeryComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    StudentCatogeryComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    StudentCatogeryComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    StudentCatogeryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-catogery',
            template: __webpack_require__(/*! ./student-catogery.component.html */ "./src/app/STUDENTS/student-catogery/student-catogery.component.html"),
            styles: [__webpack_require__(/*! ./student-catogery.component.scss */ "./src/app/STUDENTS/student-catogery/student-catogery.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_service_student_catogery_service__WEBPACK_IMPORTED_MODULE_4__["StudentCatogeryService"]])
    ], StudentCatogeryComponent);
    return StudentCatogeryComponent;
}());



/***/ }),

/***/ "./src/app/STUDENTS/student-catogery/student-catogery.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/STUDENTS/student-catogery/student-catogery.module.ts ***!
  \**********************************************************************/
/*! exports provided: StudentCatogeryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCatogeryModule", function() { return StudentCatogeryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_catogery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-catogery.routing.module */ "./src/app/STUDENTS/student-catogery/student-catogery.routing.module.ts");
/* harmony import */ var _student_catogery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-catogery.component */ "./src/app/STUDENTS/student-catogery/student-catogery.component.ts");
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








var StudentCatogeryModule = /** @class */ (function () {
    function StudentCatogeryModule() {
    }
    StudentCatogeryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _student_catogery_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCatogeryRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_student_catogery_component__WEBPACK_IMPORTED_MODULE_3__["StudentCatogeryComponent"]]
        })
    ], StudentCatogeryModule);
    return StudentCatogeryModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/student-catogery/student-catogery.routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/STUDENTS/student-catogery/student-catogery.routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: StudentCatogeryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCatogeryRoutingModule", function() { return StudentCatogeryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_catogery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-catogery.component */ "./src/app/STUDENTS/student-catogery/student-catogery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _student_catogery_component__WEBPACK_IMPORTED_MODULE_2__["StudentCatogeryComponent"],
        data: {
            title: 'Mark Attendance',
            status: true
        },
    },
];
var StudentCatogeryRoutingModule = /** @class */ (function () {
    function StudentCatogeryRoutingModule() {
    }
    StudentCatogeryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StudentCatogeryRoutingModule);
    return StudentCatogeryRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/student-catogery.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/student-catogery.service.ts ***!
  \*****************************************************/
/*! exports provided: StudentCatogeryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCatogeryService", function() { return StudentCatogeryService; });
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


var StudentCatogeryService = /** @class */ (function () {
    function StudentCatogeryService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/StudentCatogeries';
        this._getAdmissionCategorys = this.route + '/getAdmissionCategorys';
        this._getAdmissionCategory = this.route + '/getAdmissionCategory';
        this._setAdmissionCategory = this.route + '/setAdmissionCategory';
        this._delAdmissionCategory = this.route + '/delAdmissionCategory';
    }
    StudentCatogeryService.prototype.getadmissionCategorys = function () {
        return this.serviceUitility.postRequest(this._getAdmissionCategorys, '');
    };
    StudentCatogeryService.prototype.getAdmissionCategory = function () {
        return this.serviceUitility.postRequest(this._getAdmissionCategory, '');
    };
    StudentCatogeryService.prototype.setAdmissionCategory = function (obj) {
        return this.serviceUitility.postRequest(this._setAdmissionCategory, obj);
    };
    StudentCatogeryService.prototype.delAdmissionCategory = function (obj) {
        return this.serviceUitility.postRequest(this._delAdmissionCategory, obj);
    };
    StudentCatogeryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], StudentCatogeryService);
    return StudentCatogeryService;
}());



/***/ }),

/***/ "./src/app/shared/Models/Studentcatogery.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/Models/Studentcatogery.ts ***!
  \**************************************************/
/*! exports provided: StudentCatogery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCatogery", function() { return StudentCatogery; });
var StudentCatogery = /** @class */ (function () {
    function StudentCatogery() {
        this.Id = -1;
    }
    return StudentCatogery;
}());



/***/ })

}]);
//# sourceMappingURL=STUDENTS-student-catogery-student-catogery-module.js.map