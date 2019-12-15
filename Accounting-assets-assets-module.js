(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Accounting-assets-assets-module"],{

/***/ "./src/app/Accounting/assets/AssetsRoutingModule.ts":
/*!**********************************************************!*\
  !*** ./src/app/Accounting/assets/AssetsRoutingModule.ts ***!
  \**********************************************************/
/*! exports provided: AssetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function() { return AssetsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets.component */ "./src/app/Accounting/assets/assets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _assets_component__WEBPACK_IMPORTED_MODULE_2__["AssetsComponent"],
        data: {
            title: 'Facility Fees',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var AssetsRoutingModule = /** @class */ (function () {
    function AssetsRoutingModule() {
    }
    AssetsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AssetsRoutingModule);
    return AssetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/Accounting/assets/asset.ts":
/*!********************************************!*\
  !*** ./src/app/Accounting/assets/asset.ts ***!
  \********************************************/
/*! exports provided: Assets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assets", function() { return Assets; });
var Assets = /** @class */ (function () {
    function Assets() {
        this.Id = -1;
    }
    return Assets;
}());



/***/ }),

/***/ "./src/app/Accounting/assets/assets.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Accounting/assets/assets.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n    <app-card title=\"\"[cardOptionBlock]=\"true\">\r\n        <h5>Accounting (Assets)</h5>\r\n        <hr>\r\n        <div ngbDropdown class=\"dropdown-primary\">\r\n            <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Fees Management</button>\r\n            <div ngbDropdownMenu>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Statements</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Direct Payments</a>\r\n               <!-- <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>  -->\r\n            </div>\r\n          </div>\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n    \r\n          <div ngbDropdown class=\"dropdown-success\">\r\n              <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Transactions</button>\r\n              <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indirect Income</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Expense</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Bills</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Internal Transactions</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Journal Transactions</a>\r\n              </div>\r\n            </div>\r\n    \r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n    \r\n          <button class=\"btn btn-success \">Payroll</button>\r\n    \r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n    \r\n            <div ngbDropdown class=\"dropdown-info\">\r\n              <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Reports</button>\r\n              <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Fees Reports</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Profit and Loss</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Balance Sheet</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Trial Balance</a>\r\n              </div>\r\n            </div>\r\n    \r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n    \r\n            <div ngbDropdown class=\"dropdown-warning\">\r\n                <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Settings</button>\r\n                <div ngbDropdownMenu>\r\n                <div *ngFor=\"let menuItem of accountingMenu\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"[menuItem.ModuleName,menuItem.routerLink]\"\r\n                   href=\"javascript:\">{{menuItem.Name}}</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    </app-card>\r\n  </div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"Fees Account\" [classHeader]=\"true\">\r\n        <div style=\"text-align: center\">\r\n            <h5>{{Headingtext}}</h5>\r\n            <br>\r\n            <input type=\"text\" name=\"Assets\"  placeholder=\"Assets\"\r\n            [(ngModel)]=\"asset.Name\"  #Name=\"ngModel\" required> \r\n            <br>\r\n            <br>\r\n            <br>\r\n            <select style=\"width:180px;\" name=\"Select\" placeholder=\"Select one\" \r\n            [(ngModel)]=\"asset.Type\" #Name=\"ngModel\" required>\r\n              <option value=\"\" disabled selected>Choose Any one</option>\r\n              <option value=\"Bank\">Bank</option>\r\n              <option value=\"Current Asset\">Current Asset</option>\r\n              <option value=\"Fixed Assets\">Fixed Assets</option>\r\n              <option value=\"Cash Account\">Cash Account</option>\r\n              <option value=\"Other Asset\">Other Asset</option>\r\n              <option value=\"Other Liabilitites\">Other Liabilitites</option>\r\n              <option value=\"Equity\">Equity</option>\r\n          </select>\r\n          <br>\r\n          <br>\r\n          <br>\r\n            <button type=\"button\" class=\"btn btn-primary\"\r\n            id=\"saveassets\"\r\n            (click)=\"saveasset()\" \r\n            (click)= \"cleardata()\" type=\"submit\" >{{Buttontext}}</button>\r\n            &nbsp;\r\n            &nbsp;\r\n            &nbsp; \r\n            &nbsp;\r\n            <button type=\"button\" class=\"btn btn-danger\"\r\n            (click)= \"cleardata()\">Cancel</button>\r\n            </div> \r\n\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"Fees Account\" [classHeader]=\"true\">\r\n        <h5>Fees Accounts</h5>\r\n        <hr>\r\n\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"assets\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n       (editConfirm)=\"onSaveConfirm($event)\"\r\n       (createConfirm)=\"onCreateConfirm($event)\"\r\n       (custom)=\"onCustomAction($event)\">\r\n\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Accounting/assets/assets.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Accounting/assets/assets.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Accounting/assets/assets.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Accounting/assets/assets.component.ts ***!
  \*******************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset */ "./src/app/Accounting/assets/asset.ts");
/* harmony import */ var src_app_service_assets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/assets.service */ "./src/app/service/assets.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssetsComponent = /** @class */ (function () {
    function AssetsComponent(spinner, toastr, assetsservice, menuService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.assetsservice = assetsservice;
        this.menuService = menuService;
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Asset';
        this.assets = Array();
        this.asset = new _asset__WEBPACK_IMPORTED_MODULE_1__["Assets"]();
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
                Name: {
                    title: 'Asset Name',
                },
                Type: {
                    title: 'Asset Type',
                },
            },
        };
    }
    AssetsComponent.prototype.ngOnInit = function () {
        this.getAssetsDetails();
        this.requestAccountsMenu();
    };
    AssetsComponent.prototype.getAssetsDetails = function () {
        var _this = this;
        console.log("This is Assets");
        this.spinner.show();
        this.assetsservice.getAssetsDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Assets!!');
                _this.assets = data.data[0];
                console.log(_this.assets);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    AssetsComponent.prototype.requestAccountsMenu = function () {
        var _this = this;
        this.menuService.GetAccountsMenu()
            .subscribe(function (data) {
            //console.log('requestAccountsMenu ->');
            _this.accountingMenu = data;
            //console.log(this.accountingMenu);
        });
    };
    AssetsComponent.prototype.saveasset = function () {
        var _this = this;
        console.log("asset" + this.asset.Id);
        this.spinner.show();
        this.assetsservice.setAssetDetails(this.asset)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                console.log("New Asset Added");
                _this.getAssetsDetails();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    AssetsComponent.prototype.cleardata = function () {
        this.asset = new _asset__WEBPACK_IMPORTED_MODULE_1__["Assets"];
    };
    AssetsComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.asset = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update ';
        }
    };
    AssetsComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.asset = event.data;
        console.log("assets" + this.asset.Id);
        this.spinner.show();
        this.assetsservice.delAssetDetails(this.asset)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + 'Deleted!', 'Success');
                console.log("Asset Deleted");
                _this.getAssetsDetails();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    AssetsComponent.prototype.onCreateConfirm = function (event) {
        console.log("Create Event In Console");
        console.log(event);
    };
    AssetsComponent.prototype.onSaveConfirm = function (event) {
        console.log("Edit Event In Console");
        console.log(event);
    };
    AssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./assets.component.html */ "./src/app/Accounting/assets/assets.component.html"),
            styles: [__webpack_require__(/*! ./assets.component.scss */ "./src/app/Accounting/assets/assets.component.scss")],
            providers: [src_app_service_assets_service__WEBPACK_IMPORTED_MODULE_2__["AssetsService"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_service_assets_service__WEBPACK_IMPORTED_MODULE_2__["AssetsService"],
            src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/Accounting/assets/assets.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Accounting/assets/assets.module.ts ***!
  \****************************************************/
/*! exports provided: AssetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsModule", function() { return AssetsModule; });
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.component */ "./src/app/Accounting/assets/assets.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _AssetsRoutingModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssetsRoutingModule */ "./src/app/Accounting/assets/AssetsRoutingModule.ts");
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









var AssetsModule = /** @class */ (function () {
    function AssetsModule() {
    }
    AssetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _AssetsRoutingModule__WEBPACK_IMPORTED_MODULE_3__["AssetsRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_assets_component__WEBPACK_IMPORTED_MODULE_0__["AssetsComponent"]]
        })
    ], AssetsModule);
    return AssetsModule;
}());



/***/ }),

/***/ "./src/app/service/assets.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/assets.service.ts ***!
  \*******************************************/
/*! exports provided: AssetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return AssetsService; });
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


var AssetsService = /** @class */ (function () {
    function AssetsService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/Assets';
        this._getAssets = this.route + '/getassets';
        this._getAsset = this.route + '/getasset';
        this._setAsset = this.route + '/setasset';
        this._delAsset = this.route + '/delasset';
    }
    AssetsService.prototype.getAssetsDetails = function () {
        return this.serviceUitility.postRequest(this._getAssets, '');
    };
    AssetsService.prototype.getAssetDetails = function () {
        return this.serviceUitility.postRequest(this._getAsset, '');
    };
    AssetsService.prototype.setAssetDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setAsset, obj);
    };
    AssetsService.prototype.delAssetDetails = function (obj) {
        return this.serviceUitility.postRequest(this._delAsset, obj);
    };
    AssetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], AssetsService);
    return AssetsService;
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
//# sourceMappingURL=Accounting-assets-assets-module.js.map