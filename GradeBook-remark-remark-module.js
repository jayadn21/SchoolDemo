(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-remark-remark-module"],{

/***/ "./src/app/GradeBook/remark/remark.component.html":
/*!********************************************************!*\
  !*** ./src/app/GradeBook/remark/remark.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5> Create Remark </h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group\">\r\n              <div class=\"col-sm-12\">\r\n            <textarea class=\"form-control\" placeholder=\"Remarks\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"browser-default custom-select\">\r\n              <option value=\"-1\" disabled='true'> Choose Subject Combination </option>\r\n              <option value=\"0\" > Genric Remark </option>\r\n              <option value=\"1\" > Reamrk For Total Marks </option>\r\n              <option value=\"2\" > Subject Specific Remark </option>\r\n              <option value=\"3\" > Result </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveRemark\" (click)=\"saveRemark()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"Remark\">\r\n      <div class=\"mt-3\">\r\n        <h5> Create Remarks </h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"remarks\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/GradeBook/remark/remark.component.scss":
/*!********************************************************!*\
  !*** ./src/app/GradeBook/remark/remark.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/GradeBook/remark/remark.component.ts":
/*!******************************************************!*\
  !*** ./src/app/GradeBook/remark/remark.component.ts ***!
  \******************************************************/
/*! exports provided: RemarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkComponent", function() { return RemarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_remark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/remark.service */ "./src/app/service/remark.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Models_remark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Models/remark */ "./src/app/shared/Models/remark.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemarkComponent = /** @class */ (function () {
    function RemarkComponent(_RemarkAPI, spinner, toastr) {
        this._RemarkAPI = _RemarkAPI;
        this.spinner = spinner;
        this.toastr = toastr;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Create Reamrks';
        this.remarks = Array();
        this.remark = new src_app_shared_Models_remark__WEBPACK_IMPORTED_MODULE_4__["Remarks"]();
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
                Description: {
                    title: 'Description',
                },
            },
        };
    }
    RemarkComponent.prototype.ngOnInit = function () {
        this.getremarks();
    };
    RemarkComponent.prototype.getremarks = function () {
        var _this = this;
        this.spinner.show();
        console.log('Success');
        this._RemarkAPI.getremarkSetups()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.remarks = data.data[0];
                console.log(_this.remarks);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    RemarkComponent.prototype.saveRemark = function () {
        var _this = this;
        this.spinner.show();
        this._RemarkAPI.setRemarkSetup(this.remark)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getremarks();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    RemarkComponent.prototype.cleardata = function () {
        this.remark = new src_app_shared_Models_remark__WEBPACK_IMPORTED_MODULE_4__["Remarks"];
    };
    RemarkComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.remark = event.data;
            this.Buttontext = 'Create';
            this.Headingtext = 'Update Remark';
        }
    };
    RemarkComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    RemarkComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    RemarkComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    RemarkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remark',
            template: __webpack_require__(/*! ./remark.component.html */ "./src/app/GradeBook/remark/remark.component.html"),
            styles: [__webpack_require__(/*! ./remark.component.scss */ "./src/app/GradeBook/remark/remark.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_remark_service__WEBPACK_IMPORTED_MODULE_1__["RemarkService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RemarkComponent);
    return RemarkComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/remark/remark.module.ts":
/*!***************************************************!*\
  !*** ./src/app/GradeBook/remark/remark.module.ts ***!
  \***************************************************/
/*! exports provided: RemarkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkModule", function() { return RemarkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _remark_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remark.routing.module */ "./src/app/GradeBook/remark/remark.routing.module.ts");
/* harmony import */ var _remark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remark.component */ "./src/app/GradeBook/remark/remark.component.ts");
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








var RemarkModule = /** @class */ (function () {
    function RemarkModule() {
    }
    RemarkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _remark_routing_module__WEBPACK_IMPORTED_MODULE_2__["RemarkRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_remark_component__WEBPACK_IMPORTED_MODULE_3__["RemarkComponent"]]
        })
    ], RemarkModule);
    return RemarkModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/remark/remark.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/GradeBook/remark/remark.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RemarkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkRoutingModule", function() { return RemarkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _remark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remark.component */ "./src/app/GradeBook/remark/remark.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _remark_component__WEBPACK_IMPORTED_MODULE_2__["RemarkComponent"],
        data: {
            title: 'Grade Book',
            status: true
        },
    },
];
var RemarkRoutingModule = /** @class */ (function () {
    function RemarkRoutingModule() {
    }
    RemarkRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RemarkRoutingModule);
    return RemarkRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/remark.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/remark.service.ts ***!
  \*******************************************/
/*! exports provided: RemarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkService", function() { return RemarkService; });
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


var RemarkService = /** @class */ (function () {
    function RemarkService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/Remark';
        this._getRemarkSetups = this.route + '/getRemarkSetups';
        this._getRemarkSetup = this.route + '/getRemarkSetup';
        this._setRemarkSetup = this.route + '/setRemarkSetup';
        this._delRemarkSetup = this.route + '/delRemarkSetup';
    }
    RemarkService.prototype.getremarkSetups = function () {
        return this.serviceUitility.postRequest(this._getRemarkSetups, '');
    };
    RemarkService.prototype.getRemarkSetup = function () {
        return this.serviceUitility.postRequest(this._getRemarkSetup, '');
    };
    RemarkService.prototype.setRemarkSetup = function (obj) {
        return this.serviceUitility.postRequest(this._setRemarkSetup, obj);
    };
    RemarkService.prototype.delRemarkSetup = function (obj) {
        return this.serviceUitility.postRequest(this._delRemarkSetup, obj);
    };
    RemarkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], RemarkService);
    return RemarkService;
}());



/***/ }),

/***/ "./src/app/shared/Models/remark.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/Models/remark.ts ***!
  \*****************************************/
/*! exports provided: Remarks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remarks", function() { return Remarks; });
var Remarks = /** @class */ (function () {
    function Remarks() {
        this.Id = -1;
    }
    return Remarks;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-remark-remark-module.js.map