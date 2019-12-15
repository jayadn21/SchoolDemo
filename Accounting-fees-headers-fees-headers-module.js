(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Accounting-fees-headers-fees-headers-module"],{

/***/ "./src/app/Accounting/fees-headers/fees-headers.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Accounting/fees-headers/fees-headers.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Accounting (Fees Headers)</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Fees Management</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Direct Payments</a>\r\n        <!-- <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>  -->\r\n      </div>\r\n    </div>\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n\r\n    <div ngbDropdown class=\"dropdown-success\">\r\n      <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Transactions</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indirect Income</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Expense</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Bills</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Internal Transactions</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Journal Transactions</a>\r\n      </div>\r\n    </div>\r\n\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n\r\n    <button class=\"btn btn-success \">Payroll</button>\r\n\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Reports</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Fees Reports</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Profit and Loss</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Balance Sheet</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Trial Balance</a>\r\n      </div>\r\n    </div>\r\n\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n\r\n    <div ngbDropdown class=\"dropdown-warning\">\r\n      <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Settings</button>\r\n      <div ngbDropdownMenu>\r\n        <div *ngFor=\"let menuItem of accountingMenu\">\r\n          <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"[menuItem.ModuleName,menuItem.routerLink]\"\r\n            href=\"javascript:\">{{menuItem.Name}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"FeesHeaders\" [classHeader]=\"true\">\r\n      <div style=\"text-align: center\">\r\n        <h5>{{Headingtext}}</h5>\r\n        <br>\r\n        <input type=\"text\" name=\"Payment Method\" placeholder=\"Name\" [(ngModel)]=\"feesheader.Name\" #Name=\"ngModel\"\r\n          required>\r\n        <div class=\"mt-3\">\r\n          <select class=\"browser-default custom-select\" [(ngModel)]=\"feesheader.InstitutionId\"\r\n          #Instute=\"ngModel\" required>\r\n            <option value=\"-1\" disabled='true'>--Select Institute--</option>\r\n            <option *ngFor=\"let Inst of institutes\" value={{Inst.Id}}>{{Inst.Name}} </option>\r\n          </select>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveFeesheader\" (click)=\"saveFeesheader()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n        &nbsp;\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cleardata()\">Cancel</button>\r\n      </div>\r\n\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"FeesHeaders\" [classHeader]=\"true\">\r\n      <h5>Fees Headers</h5>\r\n      <hr>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"feesheaders\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Accounting/fees-headers/fees-headers.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Accounting/fees-headers/fees-headers.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Accounting/fees-headers/fees-headers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Accounting/fees-headers/fees-headers.component.ts ***!
  \*******************************************************************/
/*! exports provided: FeesHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesHeadersComponent", function() { return FeesHeadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_fees_headers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/fees-headers.service */ "./src/app/service/fees-headers.service.ts");
/* harmony import */ var _shared_Models_fees_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Models/fees-headers */ "./src/app/shared/Models/fees-headers.ts");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/institute.service */ "./src/app/service/institute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeesHeadersComponent = /** @class */ (function () {
    function FeesHeadersComponent(_Institute, spinner, toastr, feesHeaders, menuService) {
        this._Institute = _Institute;
        this.spinner = spinner;
        this.toastr = toastr;
        this.feesHeaders = feesHeaders;
        this.menuService = menuService;
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Fees Headers';
        this.feesheaders = Array();
        this.feesheader = new _shared_Models_fees_headers__WEBPACK_IMPORTED_MODULE_4__["FeesHeaders"]();
        this.institutes = Array();
        this.paramData = {
            Id: '',
        };
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
    FeesHeadersComponent.prototype.ngOnInit = function () {
        this.getfeesHeaders();
        this.requestAccountsMenu();
        this.getInstituteDetails();
    };
    FeesHeadersComponent.prototype.getInstituteDetails = function () {
        var _this = this;
        console.log('fees Institute');
        this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        this._Institute.getInstitutionGroupdetailsService(this.paramData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('fees Institute');
                _this.institutes = data.institutions;
            }
        });
    };
    FeesHeadersComponent.prototype.getfeesHeaders = function () {
        var _this = this;
        console.log('fees Headers');
        this.spinner.show();
        this.feesHeaders.getFeesHeaders()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from payment Method!!');
                _this.feesheaders = data.data[0];
                console.log(_this.feesheaders);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    FeesHeadersComponent.prototype.requestAccountsMenu = function () {
        var _this = this;
        this.menuService.GetAccountsMenu()
            .subscribe(function (data) {
            // console.log('requestAccountsMenu ->');
            _this.accountingMenu = data;
            // console.log(this.accountingMenu);
        });
    };
    FeesHeadersComponent.prototype.saveFeesheader = function () {
        var _this = this;
        console.log('Feesheader' + this.feesheader.Id);
        this.spinner.show();
        this.feesHeaders.setFeesHeaders(this.feesheader)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                console.log('New payment Added');
                _this.getfeesHeaders();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    FeesHeadersComponent.prototype.cleardata = function () {
        this.feesheader = new _shared_Models_fees_headers__WEBPACK_IMPORTED_MODULE_4__["FeesHeaders"];
    };
    FeesHeadersComponent.prototype.updateFeesHeader = function () {
        var _this = this;
        this.spinner.show();
        console.log('Fees Header' + this.feesheader.Name);
        this.Buttontext = 'Update';
        this.feesHeaders.setFeesHeaders(this.feesheader)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.toastr.success('Successfully ' + 'Updated Fees Headers', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    FeesHeadersComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.feesheader = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Fees Headers';
        }
    };
    FeesHeadersComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    FeesHeadersComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    FeesHeadersComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    FeesHeadersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fees-headers',
            template: __webpack_require__(/*! ./fees-headers.component.html */ "./src/app/Accounting/fees-headers/fees-headers.component.html"),
            styles: [__webpack_require__(/*! ./fees-headers.component.scss */ "./src/app/Accounting/fees-headers/fees-headers.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_service_fees_headers_service__WEBPACK_IMPORTED_MODULE_3__["FeesHeadersService"],
            src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], FeesHeadersComponent);
    return FeesHeadersComponent;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-headers/fees-headers.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Accounting/fees-headers/fees-headers.module.ts ***!
  \****************************************************************/
/*! exports provided: FeesHeadersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesHeadersModule", function() { return FeesHeadersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fees_headers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fees-headers.component */ "./src/app/Accounting/fees-headers/fees-headers.component.ts");
/* harmony import */ var _fees_headers_rounting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fees-headers.rounting.module */ "./src/app/Accounting/fees-headers/fees-headers.rounting.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FeesHeadersModule = /** @class */ (function () {
    function FeesHeadersModule() {
    }
    FeesHeadersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fees_headers_rounting_module__WEBPACK_IMPORTED_MODULE_3__["FeesHeadersRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_fees_headers_component__WEBPACK_IMPORTED_MODULE_2__["FeesHeadersComponent"]]
        })
    ], FeesHeadersModule);
    return FeesHeadersModule;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-headers/fees-headers.rounting.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Accounting/fees-headers/fees-headers.rounting.module.ts ***!
  \*************************************************************************/
/*! exports provided: FeesHeadersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesHeadersRoutingModule", function() { return FeesHeadersRoutingModule; });
/* harmony import */ var _fees_headers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fees-headers.component */ "./src/app/Accounting/fees-headers/fees-headers.component.ts");
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
        component: _fees_headers_component__WEBPACK_IMPORTED_MODULE_0__["FeesHeadersComponent"],
        data: {
            title: 'Fees Headers',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var FeesHeadersRoutingModule = /** @class */ (function () {
    function FeesHeadersRoutingModule() {
    }
    FeesHeadersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeesHeadersRoutingModule);
    return FeesHeadersRoutingModule;
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

/***/ "./src/app/shared/Models/fees-headers.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/Models/fees-headers.ts ***!
  \***********************************************/
/*! exports provided: FeesHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesHeaders", function() { return FeesHeaders; });
var FeesHeaders = /** @class */ (function () {
    function FeesHeaders() {
        this.Id = -1;
        this.InstitutionId = -1;
    }
    return FeesHeaders;
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
//# sourceMappingURL=Accounting-fees-headers-fees-headers-module.js.map