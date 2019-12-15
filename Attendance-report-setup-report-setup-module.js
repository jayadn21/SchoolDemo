(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Attendance-report-setup-report-setup-module"],{

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

/***/ "./src/app/Attendance/report-setup/report-setup.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Attendance/report-setup/report-setup.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"Vendors\" [classHeader]=\"true\">\r\n        <table>\r\n        <tbody>\r\n            <tr *ngFor=\"let rep of reportForGrid\">\r\n                <td>{{rep.Name}}</td> \r\n                <td><ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"rep.Selected\"\r\n                  #Notification=\"ngModel\" required></ui-switch></td>\r\n            </tr>\r\n        </tbody>\r\n      </table>  \r\n      <h5>Add New Report</h5>\r\n      <hr>\r\n      <p>Enter the basic values in percentage for attendance reports</p>\r\n      <br>\r\n      <div>\r\n        <font color=\"green\">Excellent</font>\r\n      </div>\r\n      <input type=\"text\" size=\"10\" name=\"Excellent From\" placeholder=\"From (%)\"\r\n      [(ngModel)]=\"report.ExecellentFrom\"  #Name=\"ngModel\" required>\r\n      &nbsp;\r\n      &nbsp;\r\n      <input type=\"text\" size=\"10\" name=\"Excellent To\" placeholder=\"To (%)\"\r\n      [(ngModel)]=\"report.ExcellecntTo\"  #Name=\"ngModel\" required>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div>\r\n        <font color=\"green\">Good</font>\r\n      </div>\r\n      <input type=\"text\" size=\"10\" name=\"Good From\" placeholder=\"From (%)\"\r\n      [(ngModel)]=\"report.GoodFrom\"  #Name=\"ngModel\" required>\r\n      &nbsp;\r\n      &nbsp;\r\n      <input type=\"text\" size=\"10\" name=\"Good To\" placeholder=\"To (%)\"\r\n      [(ngModel)]=\"report.GoodTo\"  #Name=\"ngModel\" required>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div>\r\n          <font color=\"orange\">Satisfactory</font>\r\n          </div>\r\n          <input type=\"text\" size=\"10\" name=\"Satisfactory From\" placeholder=\"From (%)\"\r\n          [(ngModel)]=\"report.SatisfactoryFrom\"  #Name=\"ngModel\" required>\r\n          &nbsp;\r\n          &nbsp;\r\n          <input type=\"text\" size=\"10\" name=\"Satisfactory To\" placeholder=\"To (%)\"\r\n          [(ngModel)]=\"report.SatisfactoryTo\"  #Name=\"ngModel\" required>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <div>\r\n            <font color=\"red\">Poor</font>\r\n          </div>\r\n          <input type=\"text\" size=\"10\" name=\"Poor From\" placeholder=\"From (%)\"\r\n          [(ngModel)]=\"report.PoorFrom\"  #Name=\"ngModel\" required>\r\n          &nbsp;\r\n          &nbsp;\r\n          <input type=\"text\" size=\"10\" name=\"Poor To\" placeholder=\"To (%)\"\r\n          [(ngModel)]=\"report.PoorTo\"  #Name=\"ngModel\" required>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <div>\r\n            <font color=\"red\">Not Eligiable</font>\r\n          </div>\r\n          <input type=\"text\" size=\"10\" name=\"Not Eligiable From\" placeholder=\"From (%)\"\r\n          [(ngModel)]=\"report.NotEligibleFrom\"  #Name=\"ngModel\" required>\r\n          &nbsp;\r\n          &nbsp;\r\n          <input type=\"text\" size=\"10\" name=\"Not Eligiable To\" placeholder=\"To (%)\"\r\n          [(ngModel)]=\"report.NotEligibleTo\"  #Name=\"ngModel\" required> \r\n          <br>\r\n          <br>\r\n          <br>\r\n       <button type=\"button\" class=\"btn btn-primary\"\r\n            id=\"saveReports\"\r\n            (click)=\"saveReport()\" \r\n            (click)= \"ClearData()\" type=\"submit\" >Add New</button>\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6\">\r\n\r\n    <jw-modal id=\"custom-modal-2\" >\r\n      <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\"><b>{{modalButtonTextClass}}</b>\r\n          <button type=\"button\" class=\"close basic-close\" (click)=\"closeModal1('custom-modal-2');\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button></h4>\r\n          <div style=\"text-align: center;\">\r\n            <h5>Class Name</h5>\r\n            <p>{{report.Name}}</p>\r\n          \r\n      <hr>\r\n      <p>Enter the basic values in percentage for attendance reports</p>\r\n      <br>\r\n      <div>\r\n          <font color=\"green\">Excellent</font>\r\n        </div>\r\n        <input type=\"text\" size=\"10\" name=\"Excellent From\" placeholder=\"From (%)\"\r\n        [(ngModel)]=\"report.ExecellentFrom\"  #Name=\"ngModel\" required>\r\n        &nbsp;\r\n        &nbsp;\r\n        <input type=\"text\" size=\"10\" name=\"Excellent To\" placeholder=\"To (%)\"\r\n        [(ngModel)]=\"report.ExcellecntTo\"  #Name=\"ngModel\" required>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div>\r\n          <font color=\"green\">Good</font>\r\n        </div>\r\n        <input type=\"text\" size=\"10\" name=\"Good From\" placeholder=\"From (%)\"\r\n        [(ngModel)]=\"report.GoodFrom\"  #Name=\"ngModel\" required>\r\n        &nbsp;\r\n        &nbsp;\r\n        <input type=\"text\" size=\"10\" name=\"Good To\" placeholder=\"To (%)\"\r\n        [(ngModel)]=\"report.GoodTo\"  #Name=\"ngModel\" required>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div>\r\n            <font color=\"orange\">Satisfactory</font>\r\n            </div>\r\n            <input type=\"text\" size=\"10\" name=\"Satisfactory From\" placeholder=\"From (%)\"\r\n            [(ngModel)]=\"report.SatisfactoryFrom\"  #Name=\"ngModel\" required>\r\n            &nbsp;\r\n            &nbsp;\r\n            <input type=\"text\" size=\"10\" name=\"Satisfactory To\" placeholder=\"To (%)\"\r\n            [(ngModel)]=\"report.SatisfactoryTo\"  #Name=\"ngModel\" required>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <div>\r\n              <font color=\"red\">Poor</font>\r\n            </div>\r\n            <input type=\"text\" size=\"10\" name=\"Poor From\" placeholder=\"From (%)\"\r\n            [(ngModel)]=\"report.PoorFrom\"  #Name=\"ngModel\" required>\r\n            &nbsp;\r\n            &nbsp;\r\n            <input type=\"text\" size=\"10\" name=\"Poor To\" placeholder=\"To (%)\"\r\n            [(ngModel)]=\"report.PoorTo\"  #Name=\"ngModel\" required>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <div>\r\n              <font color=\"red\">Not Eligiable</font>\r\n            </div>\r\n            <input type=\"text\" size=\"10\" name=\"Not Eligiable From\" placeholder=\"From (%)\"\r\n            [(ngModel)]=\"report.NotEligibleFrom\"  #Name=\"ngModel\" required>\r\n            &nbsp;\r\n            &nbsp;\r\n            <input type=\"text\" size=\"10\" name=\"Not Eligiable To\" placeholder=\"To (%)\"\r\n            [(ngModel)]=\"report.NotEligibleTo\"  #Name=\"ngModel\" required>  \r\n          <br>\r\n          <br>\r\n          <br>\r\n       <button type=\"button\" class=\"btn btn-primary\"\r\n            id=\"updateReports\"\r\n            (click)=\"updateReport()\">{{modalButtonText}}</button>\r\n\r\n\r\n        \r\n\r\n\r\n        &nbsp;\r\n        &nbsp;\r\n        <button type=\"button\" id=\"closenewclass\" class=\"btn btn-danger\"\r\n          (click)=\"closeModal1('custom-modal-2')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </jw-modal>\r\n    <app-card title=\"Vendorslist\" [classHeader]=\"true\">\r\n      <h5>Class</h5>\r\n      <hr>\r\n\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"reports\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onReportCustomAction($event)\">\r\n\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Attendance/report-setup/report-setup.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Attendance/report-setup/report-setup.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Attendance/report-setup/report-setup.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Attendance/report-setup/report-setup.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReportSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSetupComponent", function() { return ReportSetupComponent; });
/* harmony import */ var src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/modal.service */ "./src/app/service/modal.service.ts");
/* harmony import */ var src_app_service_report_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/report-setup.service */ "./src/app/service/report-setup.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Models_report_setup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Models/report-setup */ "./src/app/shared/Models/report-setup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportSetupComponent = /** @class */ (function () {
    function ReportSetupComponent(_classessectionService, toastr, spinner, modalService, _reportService) {
        this._classessectionService = _classessectionService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.modalService = modalService;
        this._reportService = _reportService;
        this.classessections = Array();
        this.modalButtonText = 'Add New';
        this.modalButtonTextClass = 'Add New Report';
        this.report = new src_app_shared_Models_report_setup__WEBPACK_IMPORTED_MODULE_6__["ReportSetup"]();
        this.reports = Array();
        this.reportForGrid = Array();
        this.paramData = {
            reportSetupArr: src_app_shared_Models_report_setup__WEBPACK_IMPORTED_MODULE_6__["ReportSetup"][1] = Array(),
        };
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
                    title: 'Class',
                },
            },
        };
    }
    ReportSetupComponent.prototype.ngOnInit = function () {
        this.getClasssectionDetails();
        this.getReportsDetails();
    };
    ReportSetupComponent.prototype.saveReport = function () {
        var _this = this;
        this.reportForGrid.forEach(function (item) {
            if (item.Selected) {
                item.ClassSectionMediumId = item.Id;
                item.ExecellentFrom = _this.report.ExecellentFrom;
                item.ExcellecntTo = _this.report.ExcellecntTo;
                item.GoodFrom = _this.report.GoodFrom;
                item.GoodTo = _this.report.GoodTo;
                item.SatisfactoryFrom = _this.report.SatisfactoryFrom;
                item.SatisfactoryTo = _this.report.SatisfactoryTo;
                item.PoorFrom = _this.report.PoorFrom;
                item.PoorTo = _this.report.PoorTo;
                item.NotEligibleFrom = _this.report.NotEligibleFrom;
                item.NotEligibleTo = _this.report.NotEligibleTo;
            }
        });
        this.paramData.reportSetupArr = this.reportForGrid;
        console.log('ReportArr' + this.reportForGrid);
        this.spinner.show();
        this._reportService.setReportDetails(this.paramData)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.modalButtonText + '!', 'Success');
                console.log('New Report Added');
                _this.getClasssectionDetails();
                _this.ClearData();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
                _this.spinner.hide();
            }
        });
    };
    ReportSetupComponent.prototype.updateReport = function () {
        var _this = this;
        console.log('Report ' + this.report.Id);
        this.spinner.show();
        this._reportService.setSingleReportDetails(this.report)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.modalButtonText + '!', 'Success');
                console.log('Report Updated');
                _this.getReportsDetails();
                _this.ClearData();
                _this.closeModal1('custom-modal-2');
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
                _this.spinner.hide();
            }
        });
    };
    ReportSetupComponent.prototype.OpenClassModal = function (id) {
        this.ClearData();
        this.modalService.open(id);
    };
    ReportSetupComponent.prototype.closeModal1 = function (id) {
        this.modalService.close(id);
    };
    ReportSetupComponent.prototype.getClasssectionDetails = function () {
        var _this = this;
        console.log();
        this.spinner.show();
        this._classessectionService.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.classessections = data.data[0];
                _this.reportForGrid = Object.assign([], _this.classessections);
                console.log(_this.reportForGrid);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    ReportSetupComponent.prototype.getReportsDetails = function () {
        var _this = this;
        console.log("This is Right side grid reports");
        this.spinner.show();
        this._reportService.getReportsDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from reports !!');
                _this.reports = data.data[0];
                console.log(_this.reports);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    ReportSetupComponent.prototype.ClearData = function () {
        this.report = new src_app_shared_Models_report_setup__WEBPACK_IMPORTED_MODULE_6__["ReportSetup"];
    };
    ReportSetupComponent.prototype.onReportCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.modalService.open('custom-modal-2');
            this.report = event.data;
            this.modalButtonTextClass = 'Edit Attendance Report';
            this.modalButtonText = 'Update';
        }
    };
    ReportSetupComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.report = event.data;
        console.log("report" + this.report.Id);
        this.spinner.show();
        this._reportService.delReportDetails(this.report)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + 'Deleted!', 'Success');
                console.log("report Deleted");
                _this.getClasssectionDetails();
                _this.ClearData();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    ReportSetupComponent.prototype.onCreateConfirm = function (event) {
        console.log("Create Event In Console");
        console.log(event);
    };
    ReportSetupComponent.prototype.onSaveConfirm = function (event) {
        console.log("Edit Event In Console");
        console.log(event);
    };
    ReportSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-setup',
            template: __webpack_require__(/*! ./report-setup.component.html */ "./src/app/Attendance/report-setup/report-setup.component.html"),
            styles: [__webpack_require__(/*! ./report-setup.component.scss */ "./src/app/Attendance/report-setup/report-setup.component.scss")],
            providers: [src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], src_app_service_report_setup_service__WEBPACK_IMPORTED_MODULE_3__["ReportSetupService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_0__["ClasssectionService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            src_app_service_report_setup_service__WEBPACK_IMPORTED_MODULE_3__["ReportSetupService"]])
    ], ReportSetupComponent);
    return ReportSetupComponent;
}());



/***/ }),

/***/ "./src/app/Attendance/report-setup/report-setup.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Attendance/report-setup/report-setup.module.ts ***!
  \****************************************************************/
/*! exports provided: ReportSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSetupModule", function() { return ReportSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-setup.component */ "./src/app/Attendance/report-setup/report-setup.component.ts");
/* harmony import */ var _report_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-setup.routing.module */ "./src/app/Attendance/report-setup/report-setup.routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ReportSetupModule = /** @class */ (function () {
    function ReportSetupModule() {
    }
    ReportSetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _report_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportSetupRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_5__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_9__["UiSwitchModule"]
            ],
            declarations: [_report_setup_component__WEBPACK_IMPORTED_MODULE_2__["ReportSetupComponent"]]
        })
    ], ReportSetupModule);
    return ReportSetupModule;
}());



/***/ }),

/***/ "./src/app/Attendance/report-setup/report-setup.routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Attendance/report-setup/report-setup.routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ReportSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSetupRoutingModule", function() { return ReportSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-setup.component */ "./src/app/Attendance/report-setup/report-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _report_setup_component__WEBPACK_IMPORTED_MODULE_2__["ReportSetupComponent"],
        data: {
            title: 'ReportSetup',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var ReportSetupRoutingModule = /** @class */ (function () {
    function ReportSetupRoutingModule() {
    }
    ReportSetupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportSetupRoutingModule);
    return ReportSetupRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/classsection.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/classsection.service.ts ***!
  \*************************************************/
/*! exports provided: ClasssectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasssectionService", function() { return ClasssectionService; });
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


var ClasssectionService = /** @class */ (function () {
    function ClasssectionService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/ClassSectionMedium';
        this._getClasssection = this.route + '/getClassSectionMediums';
        this._setClasssection = this.route + '/setClassSectionMedium';
    }
    ClasssectionService.prototype.getClasssectionDetails = function () {
        return this.serviceUitility.postRequest(this._getClasssection, '');
    };
    ClasssectionService.prototype.setClasssectionDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setClasssection, obj);
    };
    ClasssectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], ClasssectionService);
    return ClasssectionService;
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

/***/ "./src/app/service/report-setup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/report-setup.service.ts ***!
  \*************************************************/
/*! exports provided: ReportSetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSetupService", function() { return ReportSetupService; });
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


var ReportSetupService = /** @class */ (function () {
    function ReportSetupService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/ReportSetup';
        this._getReports = this.route + '/getreports';
        this._getReport = this.route + '/getreport';
        this._setReport = this.route + '/setreport';
        this._setSingleReport = this.route + '/setsinglereport';
        this._delReport = this.route + '/delreport';
    }
    ReportSetupService.prototype.getReportsDetails = function () {
        return this.serviceUitility.postRequest(this._getReports, '');
    };
    ReportSetupService.prototype.getReportDetails = function () {
        return this.serviceUitility.postRequest(this._getReport, '');
    };
    ReportSetupService.prototype.setReportDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setReport, obj);
    };
    ReportSetupService.prototype.setSingleReportDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setSingleReport, obj);
    };
    ReportSetupService.prototype.delReportDetails = function (obj) {
        return this.serviceUitility.postRequest(this._delReport, obj);
    };
    ReportSetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], ReportSetupService);
    return ReportSetupService;
}());



/***/ }),

/***/ "./src/app/shared/Models/report-setup.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/Models/report-setup.ts ***!
  \***********************************************/
/*! exports provided: ReportSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSetup", function() { return ReportSetup; });
var ReportSetup = /** @class */ (function () {
    function ReportSetup() {
        this.Id = -1;
    }
    return ReportSetup;
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
//# sourceMappingURL=Attendance-report-setup-report-setup-module.js.map