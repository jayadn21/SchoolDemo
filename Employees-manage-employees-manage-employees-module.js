(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Employees-manage-employees-manage-employees-module"],{

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

/***/ "./src/app/Employees/manage-employees/manage-employees-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Employees/manage-employees/manage-employees-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageEmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeesRoutingModule", function() { return ManageEmployeesRoutingModule; });
/* harmony import */ var _manage_employees_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-employees.component */ "./src/app/Employees/manage-employees/manage-employees.component.ts");
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
        component: _manage_employees_component__WEBPACK_IMPORTED_MODULE_0__["ManageEmployeesComponent"],
        data: {
            title: 'Manage Employees',
            status: true
        },
    },
];
var ManageEmployeesRoutingModule = /** @class */ (function () {
    function ManageEmployeesRoutingModule() {
    }
    ManageEmployeesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageEmployeesRoutingModule);
    return ManageEmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/Employees/manage-employees/manage-employees.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Employees/manage-employees/manage-employees.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n  <form ref='uploadForm'\r\n      id='uploadForm'\r\n      action='http://localhost:4200/FileUploadExpress/upload'\r\n      method='post'\r\n      encType=\"multipart/form-data\">\r\n        <input type=\"file\" name=\"sampleFile\" />\r\n        <input type='submit' value='Upload!' />\r\n    </form>\r\n  <div>\r\n    <button class=\"btn btn-success\" (click)=\"openNewEmpModal('custom-modal-2')\">Create Employee</button>\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n      <app-card>\r\n        <h5>Register New Employee</h5>\r\n        <hr>\r\n        <div class=\"col-xl-12\">\r\n          <ng2-smart-table class=\"table-responsive\" [settings]=\"settings\" [source]=\"employees\"\r\n            (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n            (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"onCustomAction($event)\">\r\n          </ng2-smart-table>\r\n        </div>\r\n        <!-- Smart-Table End -->\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Model-PopUp for Update Employee Start -->\r\n<!-- <button type=\"button\" class=\"btn btn-danger\" id=\"updateEmployeePopup\"\r\n  (click)=\"newEmployeeModal('updateEmployee')\">Employee</button> -->\r\n<jw-modal id=\"custom-modal-2\">\r\n  <div class=\"app-modal-header\">\r\n    <div style=\"text-align:center;\">\r\n      <h4 class=\"modal-title\"><b>{{modalName}}</b><button type=\"button\" class=\"close basic-close\"\r\n          (click)=\"closeModal('custom-modal-2');\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button></h4>\r\n      <hr>\r\n    </div>\r\n    <!-- split pages start -->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <form #manageEmployeeForm=\"ngForm\">\r\n          <h4 class=\"sub-title\">\r\n            <font size=\"4\">Login infromation</font>\r\n          </h4>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"LoginId\" placeholder=\"Login Id\"\r\n                [(ngModel)]=\"selectedEmployee.UserName\" #LoginId=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"LoginId.errors?.pattern || (LoginId.errors && (LoginId.dirty || LoginId.touched))\"\r\n                class=\"text-danger\">\r\n                LoginId Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"Name\" placeholder=\"Full Name\"\r\n                [(ngModel)]=\"selectedEmployee.Name\" #Name=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"Name.errors?.pattern || (Name.errors && (Name.dirty || Name.touched))\"\r\n                class=\"text-danger\">\r\n                Name Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"EmpCode\" placeholder=\"Employee Code\"\r\n                [(ngModel)]=\"selectedEmployee.EmpCode\" #EmpCode=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"EmpCode.errors?.pattern || (EmpCode.errors && (EmpCode.dirty || EmpCode.touched))\"\r\n                class=\"text-danger\">\r\n                Employee Code Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <font size=\"4\">Set Password</font>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"password\" class=\"form-control\" name=\"userPass\" placeholder=\"Password\"\r\n                [(ngModel)]=\"selectedEmployee.Password\" #userPass=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"userPass.errors?.pattern || (userPass.errors && (userPass.dirty || userPass.touched))\"\r\n                class=\"text-danger\">\r\n                valid Password Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"password\" class=\"form-control\" name=\"confirmPass\" placeholder=\"Confirm Password\"\r\n                [(ngModel)]=\"selectedEmployee.confirmPass\" #confirmPass=\"ngModel\"\r\n                pattern=\"{{selectedEmployee.Password}}\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"confirmPass.errors?.pattern || (confirmPass.errors && (confirmPass.dirty || confirmPass.touched))\"\r\n                class=\"text-danger\">\r\n                Confirm Password not match.\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <font size=\"4\">Contact Information</font>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"PhoneNumber\" placeholder=\"Primary Mobile\"\r\n                [(ngModel)]=\"selectedEmployee.PhoneNumber\" #PhoneNumber=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"PhoneNumber.errors?.pattern || (PhoneNumber.errors && (PhoneNumber.dirty || PhoneNumber.touched))\"\r\n                class=\"text-danger\">\r\n                Phone Number Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"AlternatePhoneNumber\" placeholder=\"Secondary Mobile\"\r\n                [(ngModel)]=\"selectedEmployee.AlternatePhoneNumber\" #AlternatePhoneNumber=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"AlternatePhoneNumber.errors?.pattern || (AlternatePhoneNumber.errors && (AlternatePhoneNumber.dirty || AlternatePhoneNumber.touched))\"\r\n                class=\"text-danger\">\r\n                Secondary Phone Number Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\"\r\n                [(ngModel)]=\"selectedEmployee.EmailId\" #email=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"email.errors?.pattern || (email.errors && (email.dirty || email.touched))\" class=\"text-danger\">\r\n              Email address Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"PresentAddress\" placeholder=\"Present Address\"\r\n                [(ngModel)]=\"selectedEmployee.PresentAddress\" #PresentAddress=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"PresentAddress.errors?.pattern || (PresentAddress.errors && (PresentAddress.dirty || PresentAddress.touched))\"\r\n                class=\"text-danger\">\r\n                Address Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.check\"\r\n                  #check=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n              </div>: Check this if Permanent is same as above\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\"></div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"PermanentAddress\" placeholder=\"Permanent Address\"\r\n                [(ngModel)]=\"selectedEmployee.PermanentAddress\" #PermanentAddress=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"PermanentAddress.errors?.pattern || (PermanentAddress.errors && (PermanentAddress.dirty || PermanentAddress.touched))\"\r\n                class=\"text-danger\">\r\n                Permanent Address not Matching\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"md-form\">\r\n            <label for=\"inputMDEx\">Date Of Birth</label>\r\n            <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"DateOfBirth\" placeholder=\"Mother Toung\"\r\n              [(ngModel)]=\"selectedEmployee.DateOfBirth\" #DateOfBirth=\"ngModel\" required>\r\n            <div style=\"text-align: left;\"\r\n              *ngIf=\"DateOfBirth.errors?.pattern || (DateOfBirth.errors && (DateOfBirth.dirty || DateOfBirth.touched))\"\r\n              class=\"text-danger\">\r\n              Birth date Required\r\n            </div>\r\n            <span class=\"md-line\"></span>\r\n          </div> -->\r\n          <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"Date of Birth\"\r\n                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i style=\"font-size:24px\" class=\"fa\">&#xf073;</i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          <div class=\"mt-3\"></div>\r\n          <font size=\"4\">Gender:</font>\r\n          <div class=\"form-radio\">\r\n            <form>\r\n              <div class=\"radio radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"options\" [(ngModel)]=\"selectedEmployee.Gender\" value=\"Male\">\r\n                  <i class=\"helper\"></i>Male\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"options\" [(ngModel)]=\"selectedEmployee.Gender\" value=\"Female\">\r\n                  <i class=\"helper\"></i>Female\r\n                </label>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- split pages end -->\r\n      <div class=\"col-sm-6 mobile-inputs\">\r\n        <form #manageEmployeeForm=\"ngForm\">\r\n          <h4 class=\"sub-title\">\r\n            <font size=\"4\">Others</font>\r\n          </h4>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"bloodgroup\" placeholder=\"Blood Group\"\r\n                [(ngModel)]=\"selectedEmployee.BloodGroup\" #BloodGroup=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"BloodGroup.errors?.pattern || (BloodGroup.errors && (BloodGroup.dirty || BloodGroup.touched))\"\r\n                class=\"text-danger\">\r\n                BloodGroup Reuired\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"Nationality\" placeholder=\"Nationality\"\r\n                [(ngModel)]=\"selectedEmployee.Nationality\" #Nationality=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"Nationality.errors?.pattern || (Nationality.errors && (Nationality.dirty || Nationality.touched))\"\r\n                class=\"text-danger\">\r\n              Enter Nationality\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"MotherTounge\" placeholder=\"Mother Toung\"\r\n                [(ngModel)]=\"selectedEmployee.MotherTounge\" #MotherTounge=\"ngModel\" required>\r\n              <div style=\"text-align: left;\"\r\n                *ngIf=\"MotherTounge.errors?.pattern || (MotherTounge.errors && (MotherTounge.dirty || MotherTounge.touched))\"\r\n                class=\"text-danger\">\r\n              MotherTounge Required\r\n              </div>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <font size=\"4\">Login Access</font> <br>\r\n          <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.LoginAccess\"\r\n            #LoginAccess=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n            : Un-Check this if you want to disable login for this employee\r\n          <div class=\"mt-3\">\r\n            <font size=\"4\">Control Access</font>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <select name=\"select\" class=\"form-control form-control-default\">\r\n                <option value=\"opt1\">Choose Profile</option>\r\n                <option value=\"opt2\">Type 2</option>\r\n                <option value=\"opt3\">Type 3</option>\r\n                <option value=\"opt4\">Type 4</option>\r\n                <option value=\"opt5\">Type 5</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-4\">\r\n            <h6>Organisation Sub-Division Access</h6>\r\n            <font size=\"3\">If none of the sub-divisions is selected employees has full access to all the sub-divisions\r\n            </font>\r\n          </div>\r\n          <!-- Multi Select for Sub-Division Access Start -->\r\n          <div class=\"mt-3\">\r\n                <div class=\"col-sm-14\">\r\n                  <angular2-multiselect name=\"dropdown\" [data]=\"InstitutionList\" [(ngModel)]=\"selectedInstitutions\"\r\n                    [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\r\n                    (onDeSelect)=\"OnItemDeSelect($event,user)\" (onSelectAll)=\"onSelectAll($event)\"\r\n                    (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n                  </angular2-multiselect>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n              </div>\r\n            </div>\r\n          <!-- Multi Select For Sub-Division Access End -->\r\n\r\n          <!-- <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                  [(ngModel)]=\"selectedEmployee.montessoriSchool\" #montessoriSchool=\"ngModel\"\r\n                  [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.primarySchool\"\r\n                  #primarySchool=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n              </div>: St. Xavier's Primary School\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.higherSchool\"\r\n                  #higherSchool=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                </ui-switch>\r\n              </div>: St. Xavier's Higher Pri. School\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                  [(ngModel)]=\"selectedEmployee.secondarySchool\" #secondarySchool=\"ngModel\"\r\n                  [ngModelOptions]=\"{standalone: true}\" required>\r\n                </ui-switch>\r\n              </div>: St. Xavier's Secondary School\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.pu\"\r\n                  #pu=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n              </div>: St. Xavier's PU\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.brv\"\r\n                  #brv=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n              </div>: BRV Public School\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-auto\">\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"selectedEmployee.rainbow\"\r\n                  #rainbow=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n              </div>: Rainbow International School\r\n            </div>\r\n          </div> -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"mt-3\">\r\n        <div style=\"text-align:center;\">\r\n          <button id=\"UpdateEmployeeButton\"\r\n          (click)=\"UpdateEmployee('custom-modal-2')\" type=\"submit\"\r\n            data-dismiss=\"modal\" class=\"btn btn-primary\">\r\n            {{modalButtonText}}</button> &nbsp;&nbsp;&nbsp;\r\n          <button id=\"closeemployeepopUp\"\r\n          class=\"btn btn-default waves-effect\"\r\n            (click)=\"closeModal('custom-modal-2')\">Close</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/Employees/manage-employees/manage-employees.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Employees/manage-employees/manage-employees.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Employees/manage-employees/manage-employees.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Employees/manage-employees/manage-employees.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManageEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeesComponent", function() { return ManageEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/manage-employees.service */ "./src/app/service/manage-employees.service.ts");
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Employee */ "./src/app/Employees/manage-employees/Employee.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/modal.service */ "./src/app/service/modal.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/institute.service */ "./src/app/service/institute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageEmployeesComponent = /** @class */ (function () {
    function ManageEmployeesComponent(_router, modalService, _getEmployees, _getEmployee, _updateEmployee, toastr, spinner, _institute) {
        this._router = _router;
        this.modalService = modalService;
        this._getEmployees = _getEmployees;
        this._getEmployee = _getEmployee;
        this._updateEmployee = _updateEmployee;
        this.toastr = toastr;
        this.spinner = spinner;
        this._institute = _institute;
        this.modalName = 'Create New Employee';
        this.modalButtonText = 'Create';
        this.employees = Array();
        this.selectedEmployee = new _Employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        this.InstitutionList = Array();
        this.selectedInstitutions = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList = [];
        this.users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        this.data2 = [];
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
        this.paramData = {
            Id: '',
        };
        this.data = Array();
        // tslint:disable-next-line: member-ordering
        this.settings = {
            actions: {
                columnTitle: 'Actions',
                add: false,
                edit: false,
                delete: false,
                custom: [
                    { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
                ],
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa  fa-trash"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel',
            },
            columns: {
                Name: {
                    title: 'Name',
                },
                UserName: {
                    title: 'User Name',
                },
                EmpCode: {
                    title: 'Employee Code',
                },
            },
        };
    }
    ManageEmployeesComponent.prototype.ngOnInit = function () {
        this.getallEmployeesDetails();
        this.getInstitutionGroupDetails();
        this.dropdownSettings = {
            text: 'Select Sub-Divisions',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class',
            primaryKey: 'Id',
            labelKey: 'Name',
            enableSearchFilter: false,
            searchBy: ['Name']
        };
    };
    ManageEmployeesComponent.prototype.ngAfterViewInit = function () {
        this.tree.treeModel.expandAll();
    };
    ManageEmployeesComponent.prototype.ExpandTree = function () {
        this.tree.treeModel.expandAll();
    };
    ManageEmployeesComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    ManageEmployeesComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    ManageEmployeesComponent.prototype.openNewEmpModal = function (id) {
        this.modalName = 'Create New Employee';
        this.modalButtonText = 'Create';
        this.InitEmployeeModel();
        this.openModal(id);
    };
    ManageEmployeesComponent.prototype.getallEmployeesDetails = function () {
        var _this = this;
        console.log();
        this.spinner.show();
        this._getEmployees.getallEmployeesDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.employees = data.data[0];
                // console.log(this.employees);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    ManageEmployeesComponent.prototype.getInstitutionGroupDetails = function () {
        var _this = this;
        this.paramData.Id = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        this._institute.getInstitutionGroupdetailsService(this.paramData)
            .subscribe(function (data) {
            if (data.success) {
                _this.InstitutionList = data.institutions;
                _this.data = data.institutions;
                //this.data2 = data;
            }
        });
    };
    ManageEmployeesComponent.prototype.UpdateEmployee = function (event) {
        var _this = this;
        console.log('in Updateemployee');
        this.spinner.show();
        this._updateEmployee.updateEmployee(this.selectedEmployee)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.getallEmployeesDetails();
                _this.toastr.success('Successfully ' + _this.modalButtonText + 'd Employee!', 'Success');
                _this.InitEmployeeModel();
                _this.closeModal(event);
            }
            else {
                _this.spinner.hide();
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    // Toggle the buttons
    // Update the title
    ManageEmployeesComponent.prototype.InitEmployeeModel = function () {
        this.selectedEmployee = new _Employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        this.selectedEmployee.InstitutionBranchId = JSON.parse(localStorage.getItem('InstitutionGroupId'));
        this.selectedEmployee.UserTypeId = 1;
    };
    ManageEmployeesComponent.prototype.onCustomAction = function (event) {
        if (event.action === 'editrecord') {
            this.selectedEmployee = event.data;
            this.modalName = 'Update Employee';
            this.modalButtonText = 'Update';
            this.openModal('custom-modal-2');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", Object)
    ], ManageEmployeesComponent.prototype, "tree", void 0);
    ManageEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-employees',
            template: __webpack_require__(/*! ./manage-employees.component.html */ "./src/app/Employees/manage-employees/manage-employees.component.html"),
            styles: [__webpack_require__(/*! ./manage-employees.component.scss */ "./src/app/Employees/manage-employees/manage-employees.component.scss")],
            providers: [src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_1__["ManageEmployeesService"], src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_1__["ManageEmployeesService"], src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_1__["ManageEmployeesService"],
            src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_1__["ManageEmployeesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_service_institute_service__WEBPACK_IMPORTED_MODULE_7__["InstituteService"]])
    ], ManageEmployeesComponent);
    return ManageEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/Employees/manage-employees/manage-employees.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Employees/manage-employees/manage-employees.module.ts ***!
  \***********************************************************************/
/*! exports provided: ManageEmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeesModule", function() { return ManageEmployeesModule; });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-employees.component */ "./src/app/Employees/manage-employees/manage-employees.component.ts");
/* harmony import */ var _manage_employees_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-employees-routing.module */ "./src/app/Employees/manage-employees/manage-employees-routing.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ManageEmployeesModule = /** @class */ (function () {
    function ManageEmployeesModule() {
    }
    ManageEmployeesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _manage_employees_routing_module__WEBPACK_IMPORTED_MODULE_7__["ManageEmployeesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["Ng2SmartTableModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_9__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["AngularMultiSelectModule"], angular_tree_component__WEBPACK_IMPORTED_MODULE_12__["TreeModule"]
            ],
            declarations: [_manage_employees_component__WEBPACK_IMPORTED_MODULE_6__["ManageEmployeesComponent"]]
        })
    ], ManageEmployeesModule);
    return ManageEmployeesModule;
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
//# sourceMappingURL=Employees-manage-employees-manage-employees-module.js.map