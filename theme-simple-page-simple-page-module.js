(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-simple-page-simple-page-module"],{

/***/ "./node_modules/ng2-ui-switch/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-ui-switch/dist/index.js ***!
  \**************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-switch.component */ "./node_modules/ng2-ui-switch/dist/ui-switch.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return _ui_switch_component__WEBPACK_IMPORTED_MODULE_0__["UiSwitchComponent"]; });

/* harmony import */ var _ui_switch_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-switch.module */ "./node_modules/ng2-ui-switch/dist/ui-switch.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return _ui_switch_module__WEBPACK_IMPORTED_MODULE_1__["UiSwitchModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-ui-switch/dist/ui-switch.component.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-ui-switch/dist/ui-switch.component.js ***!
  \****************************************************************/
/*! exports provided: UiSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'medium';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UiSwitchComponent.prototype.getColor = function (flag) {
        if (flag === 'borderColor')
            return this.defaultBoColor;
        if (flag === 'switchColor') {
            if (this.reverse)
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse)
            return !this.checked ? this.color : this.defaultBgColor;
        return this.checked ? this.color : this.defaultBgColor;
    };
    UiSwitchComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    UiSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    UiSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    UiSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return UiSwitchComponent;
}());
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "checked", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "disabled", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "reverse", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "size", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "change", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "color", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchOffColor", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchColor", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UiSwitchComponent.prototype, "onToggle", null);
UiSwitchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'ui-switch',
        template: "\n  <span class=\"switch\" \n  [class.checked]=\"checked\" \n  [class.disabled]=\"disabled\"\n  [class.switch-large]=\"size === 'large'\"\n  [class.switch-medium]=\"size === 'medium'\"\n  [class.switch-small]=\"size === 'small'\"\n  [style.background-color]=\"getColor()\"\n  [style.border-color]=\"getColor('borderColor')\"\n  >\n  <small [style.background]=\"getColor('switchColor')\">\n  </small>\n  </span>\n  ",
        styles: [
            "\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;            \n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }        \n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n    "
        ],
        providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
    })
], UiSwitchComponent);

//# sourceMappingURL=ui-switch.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ui-switch/dist/ui-switch.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-ui-switch/dist/ui-switch.module.js ***!
  \*************************************************************/
/*! exports provided: UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-switch.component */ "./node_modules/ng2-ui-switch/dist/ui-switch.component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    return UiSwitchModule;
}());
UiSwitchModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_ui_switch_component__WEBPACK_IMPORTED_MODULE_1__["UiSwitchComponent"]],
        exports: [_ui_switch_component__WEBPACK_IMPORTED_MODULE_1__["UiSwitchComponent"]]
    })
], UiSwitchModule);

//# sourceMappingURL=ui-switch.module.js.map

/***/ }),

/***/ "./src/app/service/systemsetup.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/systemsetup.service.ts ***!
  \************************************************/
/*! exports provided: SystemsetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsetupService", function() { return SystemsetupService; });
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


var SystemsetupService = /** @class */ (function () {
    function SystemsetupService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/SystemSetup';
        this.getsystemsetupApi = this.route + '/getsystemsetup';
    }
    SystemsetupService.prototype.getSystemsetupService = function (systemsetupData) {
        return this.serviceUitility.postRequest(this.getsystemsetupApi, systemsetupData);
    };
    SystemsetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], SystemsetupService);
    return SystemsetupService;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SimplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function() { return SimplePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/theme/simple-page/simple-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _simple_page_component__WEBPACK_IMPORTED_MODULE_2__["SimplePageComponent"],
        data: {}
    }
];
var SimplePageRoutingModule = /** @class */ (function () {
    function SimplePageRoutingModule() {
    }
    SimplePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SimplePageRoutingModule);
    return SimplePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--New Page Start-->\r\n<div class=\"page-body\">\r\n  <ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n      <div class=\"md-tabs md-card-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Organisation Setup\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"m-t-15\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <!-- Basic Form Inputs card start -->\r\n                    <app-card title=\" \" [cardOptionBlock]=\"true\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <form #InstitutionGroupForm=\"ngForm\">\r\n                            <div class=\"col-sm-12\">\r\n                              Organisation Name<input type=\"orgName\" class=\"form-control\" name=\"OrgName\"\r\n                                [(ngModel)]=\"InstituteGroup.Name\" #OrgName=\"ngModel\" required>\r\n                              <span class=\"md-line\"></span>\r\n                            </div>&nbsp;&nbsp;\r\n                            <div class=\"col-sm-12\">\r\n                              Address<input type=\"add1\" class=\"form-control\" name=\"Add1\"\r\n                                [(ngModel)]=\"InstituteGroup.Address\" #Add1=\"ngModel\" required>\r\n                              <span class=\"md-line\"></span>\r\n                            </div>&nbsp;&nbsp;\r\n                            <div class=\"col-sm-12\">\r\n                              City <input type=\"city\" class=\"form-control\" name=\"City\" [(ngModel)]=\"InstituteGroup.City\"\r\n                                #Add1=\"ngModel\" required>\r\n                              <span class=\"md-line\"></span>\r\n                            </div>&nbsp;&nbsp;\r\n                            <div class=\"col-sm-12\">\r\n                              District <input type=\"district\" class=\"form-control\" name=\"District\"\r\n                                [(ngModel)]=\"InstituteGroup.District\" #District=\"ngModel\" required>\r\n                              <span class=\"md-line\"></span>\r\n                            </div> &nbsp;&nbsp;\r\n                            <div class=\"col-sm-12\">\r\n                              Pin Code <input type=\"pincode\" class=\"form-control\" name=\"Pincode\"\r\n                                [(ngModel)]=\"InstituteGroup.Pincode\" #pincode=\"ngModel\" required maxlength=\"6\"\r\n                                ng-pattern=\"/^[1-9][0-9]{5}$/\" name=\"pincode\" ng-model=\"pincode\">\r\n                              <span class=\"md-line\"></span>\r\n                            </div>\r\n                          </form>\r\n                        </div>\r\n                        <div class=\"col-sm-6 mobile-inputs\">\r\n                          <div class=\"col-sm-12\">\r\n                            State<input type=\"state\" class=\"form-control\" name=\"State\"\r\n                              [(ngModel)]=\"InstituteGroup.State\" #State=\"ngModel\" required>\r\n                            <span class=\"md-line\"></span>\r\n                          </div>&nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Country<input type=\"country\" class=\"form-control\" name=\"Country\"\r\n                              [(ngModel)]=\"InstituteGroup.Country\" #Country=\"ngModel\" required>\r\n                            <span class=\"md-line\"></span>\r\n                          </div>&nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Phone<input type=\"contact\" class=\"form-control\" name=\"Phone1\"\r\n                              [(ngModel)]=\"InstituteGroup.Phone1\" #contact=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" name=\"phone\" ng-model=\"phone\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Alternate Phone No.<input type=\"contact\" class=\"form-control\" name=\"Phone2\"\r\n                              [(ngModel)]=\"InstituteGroup.Phone2\" #contact=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" name=\"phone\" ng-model=\"phone\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <!--Button Inside-->\r\n                          <div class=\"col-sm-12\">\r\n                            Upload File\r\n                            <div class=\"input-group\">\r\n                              <input type=\"file\" name=\"UploadFile\" class=\"form-control\"\r\n                                [(ngModel)]=\"InstituteGroup.UploadFile\" #UploadFile=\"ngModel\" required>\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\">Upload</button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\">Reset</button>\r\n                              </div><span class=\"md-line\"></span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div> <br>\r\n                      <div style=\"text-align:center\">\r\n                        <button (click)=\"SaveOrganisation()\" type=\"button\" class=\"btn btn-primary btn-md\">Save\r\n                          Organization</button>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <button class=\"btn btn-danger btn-md\">Reset</button> &nbsp;&nbsp;&nbsp;&nbsp;<br> <br>\r\n                      </div>\r\n                    </app-card>\r\n                  </div>\r\n                </div>\r\n                <!--Model POpUP-->\r\n                <div style=\"text-align:left\">\r\n                  <!-- modal overflow start-->\r\n                  <!-- <div>\r\n                    <button class=\"btn btn-success\" (click)=\"openModal1('custom-modal-2')\">Add Sub-Division</button>\r\n                  </div>\r\n                  <jw-modal id=\"custom-modal-2\">\r\n                    <div class=\"app-modal-header\">\r\n                      <div style=\"text-align:center;\">\r\n                        <h4 class=\"modal-title\"><b>Add Sub-Division</b><button type=\"button\" class=\"close basic-close\"\r\n                            (click)=\"closeModal1('custom-modal-2');\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                          </button></h4>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <div>\r\n                            <form #InstitutionGroupForm=\"ngForm\">\r\n                              <div class=\"col-sm-12\">\r\n                                Institution Name<input type=\"orgName\" class=\"form-control\" name=\"OrgName\"\r\n                                  [(ngModel)]=\"NewInstitution.Name\" #OrgName=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"OrgName.errors?.pattern || (OrgName.errors && (OrgName.dirty || OrgName.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  Organisation Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                Address<input type=\"add1\" class=\"form-control\" name=\"Add1\"\r\n                                  [(ngModel)]=\"NewInstitution.Address\" #Add1=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"Add1.errors?.pattern || (Add1.errors && (Add1.dirty || Add1.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  Address Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                City <input type=\"city\" class=\"form-control\" name=\"City\"\r\n                                  [(ngModel)]=\"NewInstitution.City\" #City=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"City.errors?.pattern || (City.errors && (City.dirty || City.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  City Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                District <input type=\"district\" class=\"form-control\" name=\"District\"\r\n                                  [(ngModel)]=\"NewInstitution.District\" #District=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"District.errors?.pattern || (District.errors && (District.dirty || District.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  District Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div> &nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                State<input type=\"state\" class=\"form-control\" name=\"State\"\r\n                                  [(ngModel)]=\"NewInstitution.State\" #State=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"State.errors?.pattern || (State.errors && (State.dirty || State.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  State Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                Country<input type=\"country\" class=\"form-control\" name=\"Country\"\r\n                                  [(ngModel)]=\"NewInstitution.Country\" #Country=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"Country.errors?.pattern || (Country.errors && (Country.dirty || Country.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  Country Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                Pin Code <input type=\"pincode\" class=\"form-control\" name=\"Pincode\"\r\n                                  [(ngModel)]=\"NewInstitution.Pincode\" #pincode=\"ngModel\" required maxlength=\"6\"\r\n                                  ng-pattern=\"/^[1-9][0-9]{5}$/\" name=\"pincode\" ng-model=\"pincode\">\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"pincode.errors?.pattern || (pincode.errors && (pincode.dirty || pincode.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  PinCode Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>\r\n                            </form>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 mobile-inputs\">\r\n                          <div class=\"col-sm-12\">\r\n                            Phone<input type=\"contact\" class=\"form-control\" name=\"Phone1\"\r\n                              [(ngModel)]=\"NewInstitution.Phone1\" #Phone1=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"Phone1\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"Phone1.errors?.pattern || (Phone1.errors && (Phone1.dirty || Phone1.touched))\"\r\n                              class=\"text-danger\">\r\n                              Phone Number Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Teaching Medium<input type=\"contact\" class=\"form-control\" name=\"TeachingMedium\"\r\n                              [(ngModel)]=\"NewInstitution.TeachingMedium\" #TeachingMedium=\"ngModel\" required\r\n                              maxlength=\"15\" ng-model=\"phone\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"TeachingMedium.errors?.pattern || (TeachingMedium.errors && (TeachingMedium.dirty || TeachingMedium.touched))\"\r\n                              class=\"text-danger\">\r\n                              This Field Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Alternate Phone No.<input type=\"text\" class=\"form-control\" name=\"Phone2\"\r\n                              [(ngModel)]=\"NewInstitution.Phone2\" #contact=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"phone\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"contact.errors?.pattern || (contact.errors && (contact.dirty || contact.touched))\"\r\n                              class=\"text-danger\">\r\n                              Alternate Phone No. is Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Email Id.<input type=\"contact\" class=\"form-control\" name=\"EmailId\"\r\n                              [(ngModel)]=\"NewInstitution.EmailId\" #EmailId=\"ngModel\" required>\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"EmailId.errors?.pattern || (EmailId.errors && (EmailId.dirty || EmailId.touched))\"\r\n                              class=\"text-danger\">\r\n                              EmailId is Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Fax<input type=\"text\" class=\"form-control\" name=\"Fax\" [(ngModel)]=\"NewInstitution.Fax\"\r\n                              #Fax=\"ngModel\" required maxlength=\"10\" ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"Fax\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"Fax.errors?.pattern || (Fax.errors && (Fax.dirty || Fax.touched))\"\r\n                              class=\"text-danger\">\r\n                              Fax Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <!--upload file New-->\r\n                  <!-- <div class=\"col-sm-12\">\r\n                            Upload File\r\n                            <div class=\"input-group\">\r\n                              <input type=\"file\" name=\"Logo\" class=\"form-control\" [(ngModel)]=\"NewInstitution.Logo\"\r\n                                #Logo=\"ngModel\" required>\r\n\r\n                              <div style=\"text-align: left;\"\r\n                                *ngIf=\"Logo.errors?.pattern || (Logo.errors && (Logo.dirty || Logo.touched))\"\r\n                                class=\"text-danger\">\r\n                                Dise Number is Required.\r\n                              </div>\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\">Upload</button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\">Reset</button>\r\n                              </div><span class=\"md-line\"></span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            Dise Number<input type=\"text\" class=\"form-control\" name=\"DiseNumber\"\r\n                              [(ngModel)]=\"NewInstitution.DiseNumber\" #DiseNumber=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"DiseNumber\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"DiseNumber.errors?.pattern || (DiseNumber.errors && (DiseNumber.dirty || DiseNumber.touched))\"\r\n                              class=\"text-danger\">\r\n                              Dise Number is Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                        </div>\r\n                        <div style=\"text-align: center\">\r\n                          <button style=\"float:left\" type=\"button\" id=\"closesubdivisionpopUp\"\r\n                            class=\"btn btn-default waves-effect\" (click)=\"closeInstitutionModal('addsubdivision')\"\r\n                            class=\"btn pull-auto\">Close</button>\r\n                          <button class=\"text-left\" id=\"SaveSubOrganisationButton\"\r\n                            *ngIf=\"this.isSaveSubOrganisationButtonVisible\" (click)=\"SaveSubOrganisation()\"\r\n                            type=\"submit\" data-dismiss=\"modal\" class=\"btn btn-primary waves-effect waves-light\">Add\r\n                            Sub-Division</button>\r\n                          <button id=\"UpdateSubOrganisationButton\" *ngIf=\"!this.isSaveSubOrganisationButtonVisible\"\r\n                            (click)=\"UpdateSubOrganisation()\" type=\"submit\" data-dismiss=\"modal\"\r\n                            class=\"btn btn-primary waves-effect waves-light\">Update Sub-Division</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </jw-modal> -->\r\n                  <ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n                  <button type=\"button\" class=\"btn btn-danger\" id=\"addsubdivisionPopup\"\r\n                    (click)=\"addNewInstitutionModal('addsubdivision')\">Add Sub-Division</button>\r\n                  <app-modal-animation [modalID]=\"'addsubdivision'\" #modalLarge [modalClass]=\"'modal-lg'\">\r\n                    <div class=\"app-modal-header\">\r\n                      <h4 class=\"modal-title\" style=\"text-align: center;\">{{modalName}}\r\n                        <hr>\r\n                      </h4>\r\n                      <!-- Basic Form Inputs card start -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <div>\r\n                            <form #InstitutionGroupForm=\"ngForm\">\r\n                              <div class=\"col-sm-12\">\r\n                                Institution Name<input type=\"orgName\" class=\"form-control\" name=\"OrgName\"\r\n                                  [(ngModel)]=\"NewInstitution.Name\" #OrgName=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"OrgName.errors?.pattern || (OrgName.errors && (OrgName.dirty || OrgName.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  Organisation Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                Address<input type=\"add1\" class=\"form-control\" name=\"Add1\"\r\n                                  [(ngModel)]=\"NewInstitution.Address\" #Add1=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"Add1.errors?.pattern || (Add1.errors && (Add1.dirty || Add1.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  Address Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                City <input type=\"city\" class=\"form-control\" name=\"City\"\r\n                                  [(ngModel)]=\"NewInstitution.City\" #City=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"City.errors?.pattern || (City.errors && (City.dirty || City.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  City Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                District <input type=\"district\" class=\"form-control\" name=\"District\"\r\n                                  [(ngModel)]=\"NewInstitution.District\" #District=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"District.errors?.pattern || (District.errors && (District.dirty || District.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  District Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div> &nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                State<input type=\"state\" class=\"form-control\" name=\"State\"\r\n                                  [(ngModel)]=\"NewInstitution.State\" #State=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"State.errors?.pattern || (State.errors && (State.dirty || State.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  State Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                Country<input type=\"country\" class=\"form-control\" name=\"Country\"\r\n                                  [(ngModel)]=\"NewInstitution.Country\" #Country=\"ngModel\" required>\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"Country.errors?.pattern || (Country.errors && (Country.dirty || Country.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  Country Name Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>&nbsp;&nbsp;\r\n                              <div class=\"col-sm-12\">\r\n                                Pin Code <input type=\"pincode\" class=\"form-control\" name=\"Pincode\"\r\n                                  [(ngModel)]=\"NewInstitution.Pincode\" #pincode=\"ngModel\" required maxlength=\"6\"\r\n                                  ng-pattern=\"/^[1-9][0-9]{5}$/\" name=\"pincode\" ng-model=\"pincode\">\r\n                                <div style=\"text-align: left;\"\r\n                                  *ngIf=\"pincode.errors?.pattern || (pincode.errors && (pincode.dirty || pincode.touched))\"\r\n                                  class=\"text-danger\">\r\n                                  PinCode Required.\r\n                                </div>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>\r\n                            </form>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 mobile-inputs\">\r\n                          <div class=\"col-sm-12\">\r\n                            Phone<input type=\"contact\" class=\"form-control\" name=\"Phone1\"\r\n                              [(ngModel)]=\"NewInstitution.Phone1\" #Phone1=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"Phone1\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"Phone1.errors?.pattern || (Phone1.errors && (Phone1.dirty || Phone1.touched))\"\r\n                              class=\"text-danger\">\r\n                              Phone Number Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Teaching Medium<input type=\"contact\" class=\"form-control\" name=\"TeachingMedium\"\r\n                              [(ngModel)]=\"NewInstitution.TeachingMedium\" #TeachingMedium=\"ngModel\" required\r\n                              maxlength=\"15\" ng-model=\"phone\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"TeachingMedium.errors?.pattern || (TeachingMedium.errors && (TeachingMedium.dirty || TeachingMedium.touched))\"\r\n                              class=\"text-danger\">\r\n                              This Field Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Alternate Phone No.<input type=\"text\" class=\"form-control\" name=\"Phone2\"\r\n                              [(ngModel)]=\"NewInstitution.Phone2\" #contact=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"phone\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"contact.errors?.pattern || (contact.errors && (contact.dirty || contact.touched))\"\r\n                              class=\"text-danger\">\r\n                              Alternate Phone No. is Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Email Id.<input type=\"contact\" class=\"form-control\" name=\"EmailId\"\r\n                              [(ngModel)]=\"NewInstitution.EmailId\" #EmailId=\"ngModel\" required>\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"EmailId.errors?.pattern || (EmailId.errors && (EmailId.dirty || EmailId.touched))\"\r\n                              class=\"text-danger\">\r\n                              EmailId is Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <div class=\"col-sm-12\">\r\n                            Fax<input type=\"text\" class=\"form-control\" name=\"Fax\" [(ngModel)]=\"NewInstitution.Fax\"\r\n                              #Fax=\"ngModel\" required maxlength=\"10\" ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"Fax\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"Fax.errors?.pattern || (Fax.errors && (Fax.dirty || Fax.touched))\"\r\n                              class=\"text-danger\">\r\n                              Fax Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                          <!--upload file New-->\r\n                          <div class=\"col-sm-12\">\r\n                            Upload File\r\n                            <div class=\"input-group\">\r\n                              <input type=\"file\" name=\"Logo\" class=\"form-control\" [(ngModel)]=\"NewInstitution.Logo\"\r\n                                #Logo=\"ngModel\" required>\r\n\r\n                              <div style=\"text-align: left;\"\r\n                                *ngIf=\"Logo.errors?.pattern || (Logo.errors && (Logo.dirty || Logo.touched))\"\r\n                                class=\"text-danger\">\r\n                                Dise Number is Required.\r\n                              </div>\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\">Upload</button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\">Reset</button>\r\n                              </div><span class=\"md-line\"></span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            Dise Number<input type=\"text\" class=\"form-control\" name=\"DiseNumber\"\r\n                              [(ngModel)]=\"NewInstitution.DiseNumber\" #DiseNumber=\"ngModel\" required maxlength=\"10\"\r\n                              ng-pattern=\"/^[1-9][0-9]{5}$/\" ng-model=\"DiseNumber\">\r\n                            <div style=\"text-align: left;\"\r\n                              *ngIf=\"DiseNumber.errors?.pattern || (DiseNumber.errors && (DiseNumber.dirty || DiseNumber.touched))\"\r\n                              class=\"text-danger\">\r\n                              Dise Number is Required.\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div> &nbsp;&nbsp;\r\n                        </div>\r\n                        <button style=\"float:left\" type=\"button\" id=\"closesubdivisionpopUp\"\r\n                          class=\"btn btn-default waves-effect\" (click)=\"closeInstitutionModal('addsubdivision')\"\r\n                          class=\"btn pull-auto\">Close</button>\r\n                        <button class=\"text-left\" id=\"SaveSubOrganisationButton\"\r\n                          *ngIf=\"this.isSaveSubOrganisationButtonVisible\" (click)=\"SaveSubOrganisation()\" type=\"submit\"\r\n                          data-dismiss=\"modal\" class=\"btn btn-primary waves-effect waves-light\">Add\r\n                          Sub-Division</button>\r\n                        <button id=\"UpdateSubOrganisationButton\" *ngIf=\"!this.isSaveSubOrganisationButtonVisible\"\r\n                          (click)=\"UpdateSubOrganisation()\" type=\"submit\" data-dismiss=\"modal\"\r\n                          class=\"btn btn-primary waves-effect waves-light\">Update Sub-Division</button>\r\n                      </div>\r\n                    </div>\r\n                    <br>\r\n                  </app-modal-animation>\r\n                </div> <br>\r\n                <!--Model PopUp End-->\r\n                <!--ng2-smart table Start-->\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <app-card title=\" \" [cardOptionBlock]=\"true\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <div class=\"app-modal-body\">\r\n                            <div class=\"app-modal-header\">\r\n                              <h4 class=\"modal-title\">Sub-Division List</h4>\r\n                            </div>\r\n                            <ng2-smart-table class=\"table-responsive\" [settings]=\"settings\" [source]=\"data\"\r\n                              (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n                              (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"onCustomAction($event)\">\r\n                            </ng2-smart-table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </app-card>\r\n                  </div>\r\n                </div>\r\n                <!--ng2 smart table End-->\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"System Steup\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"m-t-15\">\r\n                <app-card title=\" \" [headerContent]=\" \" [cardOptionBlock]=\"true\">\r\n                  <!--system setup-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <form #systemForm=\"ngForm\">\r\n                        <div class=\"col-sm-12\">\r\n                          Default Date TimeZone <input type=\"text\" class=\"form-control\" name=\"Time \"\r\n                            [(ngModel)]=\"syetemSetup.DefaultDateTimeZoneId\" #DefaultDateTimeZoneId=\"ngModel\" required>\r\n                          <div style=\"text-align: left;\">\r\n                          </div>\r\n                        </div> &nbsp; &nbsp;\r\n                        <div class=\"col-sm-12\">\r\n                          Pagination Per Page<input type=\"text\" class=\"form-control\" name=\"Page\"\r\n                            [(ngModel)]=\"syetemSetup.PaginationPerPage\" #PaginationPerPage=\"ngModel\" required>\r\n                          <div style=\"text-align: left;\">\r\n                          </div>\r\n                        </div> &nbsp; &nbsp;\r\n                        <div class=\"col-sm-12\">\r\n                          Pagination Number of Link To <input type=\"text\" class=\"form-control\" name=\"Link\"\r\n                            [(ngModel)]=\"syetemSetup.PaginationNumberOfLinksToShow\"\r\n                            #PaginationNumberOfLinksToShow=\"ngModel\" required>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                          <label class=\"col-sm-2 col-form-label\"></label>\r\n                          <div style=\"text-align:left\">Default Application fees</div>\r\n                          <select name=\"select\" class=\"form-control form-control-default\"\r\n                            [(ngModel)]=\"syetemSetup.DefaultApplicationFeesId\" #DefaultApplicationFeesId=\"ngModel\"\r\n                            required>\r\n                            <option value=\"opt1\">Select One Value Only</option>\r\n                            <option value=\"1\">School Fee</option>\r\n                            <option value=\"opt3\">Type 3</option>\r\n                            <option value=\"opt4\">Type 4</option>\r\n                            <option value=\"opt5\">Type 5</option>\r\n                            <option value=\"opt6\">Type 6</option>\r\n                            <option value=\"opt7\">Type 7</option>\r\n                            <option value=\"opt8\">Type 8</option>\r\n                          </select>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                    <div class=\"col-sm-6 mobile-inputs\">\r\n                      <div class=\"mt-3\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto\">\r\n                            <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                              [(ngModel)]=\"syetemSetup.SignatureOfDdpi\" #SignatureOfDdpi=\"ngModel\" required></ui-switch>\r\n                          </div>: Signature of DDPI in the Study Certificate\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-3\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto\">\r\n                            <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                              [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                          </div> : Sending SMS Enable\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-3\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto\">\r\n                            <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                              [(ngModel)]=\"syetemSetup.ParentsLoginEnabled\" #ParentsLoginEnabled=\"ngModel\" required>\r\n                            </ui-switch>\r\n                          </div>: Parents login Enable\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-3\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto\">\r\n                            <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                              [(ngModel)]=\"syetemSetup.MergePaymentReport\" #MergePaymentReport=\"ngModel\" required>\r\n                            </ui-switch>\r\n                          </div> : Merge Payment Report\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-3\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto\">\r\n                            <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                              [(ngModel)]=\"syetemSetup.MannualAttandanceRollNumber\"\r\n                              #MannualAttandanceRollNumber=\"ngModel\" required></ui-switch>\r\n                          </div>: Mannual Attandance Roll Number\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> <br>\r\n                  <div style=\"text-align: center;\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" placement=\"bottom\">Submit</button> &nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn btn-danger\" placement=\"bottom\">Reset</button>\r\n                  </div>\r\n                </app-card> <br>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"SMS Templates\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"m-t-15\">\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Manage Access Controls\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"m-t-15\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <h4>\r\n                          <p>\r\n                            <font size=\"3\">Add Adminstrator Profile</font>\r\n                          </p>\r\n                        </h4>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group input-group-lg\">\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Profile Name\">\r\n                            </div>\r\n                            <h4>Access:</h4>\r\n                            <div class=\"mt-3\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                  <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                    [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                </div>\r\n                                <h6>: Configuration</h6>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ml-5\">\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-auto\">\r\n                                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                      [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                  </div> : Edit Rights\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ml-5\">\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-auto\">\r\n                                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                      [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                  </div> : Delete Rights\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"mt-3\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                  <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                    [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                </div>\r\n                                <h6>: Employee</h6>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ml-5\">\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-auto\">\r\n                                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                      [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                  </div> : Manage Employee\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ml-5\">\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-auto\">\r\n                                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                      [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                  </div> : Employee Attendence\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ml-5\">\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-auto\">\r\n                                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                      [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                  </div> : Edit Rights\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ml-5\">\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-auto\">\r\n                                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                                      [(ngModel)]=\"syetemSetup.SmsEnabled\" #SmsEnabled=\"ngModel\" required></ui-switch>\r\n                                  </div> : Delete Rights\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <h4>\r\n                          <p>\r\n                            <font size=\"3\">Profiles</font>\r\n                          </p>\r\n                        </h4>\r\n                        <hr>\r\n                        <div class=\"list-group\">\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" value=\"Super Administrator\" readonly class=\"form-control\"\r\n                                placeholder=\"Super Administrator \">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" value=\" Administrator\" readonly class=\"form-control\">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" value=\"Basic Profile\" readonly class=\"form-control\">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" value=\"Accountant\" readonly class=\"form-control\">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" value=\"Teaching Staff\" readonly class=\"form-control\">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" value=\"Cashier\" readonly class=\"form-control\">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                              <input value=\"Demo Login Schools\" readonly class=\"form-control\">\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                              </div>\r\n                              <div class=\"input-group-prepend\">\r\n                                <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--New Page End-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--Sub Division Grid End-->\r\n"

/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-actions {\n  margin: 0;\n  background-color: transparent;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.ts ***!
  \************************************************************/
/*! exports provided: SimplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageComponent", function() { return SimplePageComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_systemsetup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/systemsetup.service */ "./src/app/service/systemsetup.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/institute.service */ "./src/app/service/institute.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { ModalService } from 'src/app/service/modal.service';
var SimplePageComponent = /** @class */ (function () {
    function SimplePageComponent(_router, 
    // private modalService: ModalService,
    _institute, _saveorganisation, _systemsetupURL, toastr, formBuilder, spinner) {
        this._router = _router;
        this._institute = _institute;
        this._saveorganisation = _saveorganisation;
        this._systemsetupURL = _systemsetupURL;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        // modalName1 = 'Add New';
        // bodyText: string;
        this.modalName = 'Add Institution';
        this.InstituteGroup = {
            Id: '',
            Name: '',
            Address: '',
            City: '',
            District: '',
            Pincode: '',
            UploadFile: '',
            State: '',
            Country: '',
            Contact: '',
            Phone1: '',
            Phone2: '',
        };
        this.NewInstitution = {
            Id: '-1',
            InstitutionGroupId: '',
            Name: '',
            Address: '',
            City: '',
            District: '',
            State: '',
            Country: '',
            Pincode: '',
            TeachingMedium: '',
            Phone1: '',
            Phone2: '',
            EmailId: '',
            Fax: '',
            Logo: '',
            DiseNumber: '',
            IsReadOnlyMode: ''
        };
        this.data = Array();
        this.syetemSetup = {
            Id: '',
            InstitutionId: '',
            DefaultDateTimeZoneId: '',
            PaginationPerPage: '',
            PaginationNumberOfLinksToShow: '',
            DefaultApplicationFeesId: '',
            SignatureOfDdpi: '',
            SmsEnabled: '',
            ParentsLoginEnabled: '',
            MergePaymentReport: '',
            MannualAttandanceRollNumber: '',
        };
        this.systemsetupData = {
            InstitutionId: '',
        };
        this.paramData = {
            Id: '',
        };
        this.isSaveSubOrganisationButtonVisible = true;
        // tslint:disable-next-line: member-ordering
        this.settings = {
            actions: {
                columnTitle: 'Actions',
                add: false,
                edit: false,
                delete: false,
                custom: [
                    { name: 'editrecord', title: '<i class="fa fa-pencil"></i>' },
                ],
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa  fa-trash"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel',
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
                customConfirm: true,
            },
            columns: {
                Name: {
                    title: 'Name',
                },
                Address: {
                    title: 'Address',
                },
                City: {
                    title: 'City',
                },
                District: {
                    title: 'District',
                },
                State: {
                    title: 'State',
                },
                TeachingMedium: {
                    title: 'Medium',
                },
                Pincode: {
                    title: 'Pin-code',
                },
            },
        };
    }
    SimplePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.bodyText = 'This text can be updated in modal 1';
        this.getInstitutionGroupDetails();
        this.getSubDivisionGroupDetails();
        this.spinner.show();
        this.systemsetupData.InstitutionId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        this._systemsetupURL.getSystemsetupService(this.systemsetupData)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.syetemSetup = data.data[0][0];
                console.log('Success: ' + _this.syetemSetup.MergePaymentReport);
            }
            else {
                console.log('error: ' + data.message);
            }
        });
    };
    // openModal(id: string) {
    //   this.modalService.open(id);
    // }
    // closeModal(id: string) {
    //   this.modalService.close(id);
    // }
    // openModal1(id: string) {
    //   this.modalService.open(id);
    // }
    // closeModal1(id: string) {
    //   this.modalService.close(id);
    // }
    SimplePageComponent.prototype.getInstitutionGroupDetails = function () {
        var _this = this;
        this.spinner.show();
        this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        // console.log(this.paramData);
        this._institute.getInstitutionGroupdetailsService(this.paramData)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.InstituteGroup = data.institutionGroup[0];
                console.log('institutionGroup: ' + _this.InstituteGroup.Name);
            }
            else {
            }
        });
    };
    SimplePageComponent.prototype.getSubDivisionGroupDetails = function () {
        var _this = this;
        // this.spinner.show();
        this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        // console.log(this.paramData);
        this._institute.getInstitutionGroupdetailsService(this.paramData)
            .subscribe(function (data) {
            if (data.success) {
                // this.spinner.hide();
                console.log(data.institutions);
                _this.data = data.institutions;
            }
            else {
            }
        });
    };
    // For Add new
    SimplePageComponent.prototype.addNewInstitutionModal = function (event) {
        this.ClearModalData();
        document.querySelector('#' + event).classList.add('md-show');
    };
    SimplePageComponent.prototype.updateInstitutionModal = function (event) {
        this.modalName = 'Update Institution';
        document.querySelector('#' + event).classList.add('md-show');
        this.isSaveSubOrganisationButtonVisible = false;
    };
    SimplePageComponent.prototype.closeInstitutionModal = function (event) {
        // ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
        document.querySelector('#' + event).classList.remove('md-show');
    };
    SimplePageComponent.prototype.SaveOrganisation = function () {
        var _this = this;
        this.spinner.show();
        this.InstituteGroup.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        this._saveorganisation.SaveOrganizationService(this.InstituteGroup)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('Institution Group Details saved!', 'Save Success!', {
                    timeOut: 2000
                });
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    SimplePageComponent.prototype.SaveSubOrganisation = function () {
        var _this = this;
        this.spinner.show();
        this.NewInstitution.InstitutionGroupId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        // For new Institution, send Id as -1.
        this.NewInstitution.Id = '-1';
        this.NewInstitution.IsReadOnlyMode = '0';
        this._saveorganisation.SaveSubOrganisation(this.NewInstitution)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.getSubDivisionGroupDetails();
                document.getElementById('closesubdivisionpopUp').click();
                _this.toastr.success('Institution Details saved!', 'Save Success!', {
                    timeOut: 2000
                });
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    SimplePageComponent.prototype.UpdateSubOrganisation = function () {
        var _this = this;
        this.spinner.show();
        this.NewInstitution.InstitutionGroupId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        // For new Institution, send Id as -1.
        // this.NewInstitution.Id = SubdivisionId;
        this.NewInstitution.IsReadOnlyMode = '0';
        this._saveorganisation.SaveSubOrganisation(this.NewInstitution)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.getSubDivisionGroupDetails();
                document.getElementById('closesubdivisionpopUp').click();
                _this.toastr.success('Institution Details saved!', 'Save Success!', {
                    timeOut: 2000
                });
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    /*Save(Id: any) {
      this.Id. = JSON.parse(localStorage.getItem('user'));
      console.log('token is as follows:');
      console.log(localStorage.getItem('id_token'));
  
       this._auth.Save(this.Id)
                          .subscribe(data => {
                             console.log(this.Id);
                               if (data.success)  {
                               console.log('successfully changed password');
                               this._router.navigate(['InstitutionDetails/institution']);
                             }
                 });
  
             }
    Id(Id: any) {
      throw new Error("Method not implemented.");
    }*/
    // ng2-smart table start
    SimplePageComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        // this.onCustomAction(event.editrecord);
        if (event.action === 'editrecord') {
            // document.getElementById('addsubdivisionPopup').click();
            this.NewInstitution = event.data;
            this.updateInstitutionModal('addsubdivision');
            // this.UpdateSubOrganisation();
        }
    };
    SimplePageComponent.prototype.ClearModalData = function () {
        this.modalName = 'Add Institution';
        this.isSaveSubOrganisationButtonVisible = true;
        this.NewInstitution.Id = '-1';
        // this.InstitutionGroupId= '';
        this.NewInstitution.Name = '';
        this.NewInstitution.Address = '';
        this.NewInstitution.City = '';
        this.NewInstitution.District = '';
        this.NewInstitution.State = '';
        this.NewInstitution.Country = '';
        this.NewInstitution.Pincode = '';
        this.NewInstitution.TeachingMedium = '';
        this.NewInstitution.Phone1 = '';
        this.NewInstitution.Phone2 = '';
        this.NewInstitution.EmailId = '';
        this.NewInstitution.Fax = '';
        this.NewInstitution.Logo = '';
        this.NewInstitution.DiseNumber = '';
        this.NewInstitution.IsReadOnlyMode = '';
    };
    SimplePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-simple-page',
            template: __webpack_require__(/*! ./simple-page.component.html */ "./src/app/theme/simple-page/simple-page.component.html"),
            styles: [__webpack_require__(/*! ./simple-page.component.scss */ "./src/app/theme/simple-page/simple-page.component.scss")],
            providers: [src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_5__["InstituteService"], _service_systemsetup_service__WEBPACK_IMPORTED_MODULE_1__["SystemsetupService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_5__["InstituteService"], src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_5__["InstituteService"],
            _service_systemsetup_service__WEBPACK_IMPORTED_MODULE_1__["SystemsetupService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], SimplePageComponent);
    return SimplePageComponent;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/theme/simple-page/simple-page.component.ts");
/* harmony import */ var _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-page-routing.module */ "./src/app/theme/simple-page/simple-page-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/institute.service */ "./src/app/service/institute.service.ts");
/* harmony import */ var src_app_service_systemsetup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/systemsetup.service */ "./src/app/service/systemsetup.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SimplePageModule = /** @class */ (function () {
    function SimplePageModule() {
    }
    SimplePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SimplePageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_0__["HttpModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]
            ],
            declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_4__["SimplePageComponent"]],
            providers: [src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_8__["InstituteService"], src_app_service_systemsetup_service__WEBPACK_IMPORTED_MODULE_9__["SystemsetupService"]],
        })
    ], SimplePageModule);
    return SimplePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-simple-page-simple-page-module.js.map