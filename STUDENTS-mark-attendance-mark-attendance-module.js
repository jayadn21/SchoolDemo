(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["STUDENTS-mark-attendance-mark-attendance-module"],{

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

/***/ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/STUDENTS/mark-attendance/mark-attendance.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<h3 style=\"font-family:courier;\"> </h3>\r\n<nav class=\"navbar navbar-light bg-white\">\r\n  <form class=\"form-inline\">\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-outline-primary mr-3\" type=\"button\">Attendance</button>\r\n      <div ngbDropdownMenu>\r\n\r\n      </div>\r\n    </div>\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-outline-success mr-3\" type=\"button\"><i\r\n          class=\"ti-settings\"></i>Reprots</button>\r\n    </div>\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-outline-success mr-3\" type=\"button\"><i\r\n          class=\"ti-settings\"></i>Settings</button>\r\n    </div>\r\n  </form>\r\n</nav>\r\n<div class=\"mt-5\"></div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"MarkAttendance\" [classHeader]=\"true\">\r\n      <div class=\"mt-3\">\r\n        <font size=\"3\">Mark Attendance</font>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\" placeholder=\"Due Date\" name=\"dp\" [(ngModel)]=\"selectedDate\" ngbDatepicker\r\n            #d=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n              <i class=\"fa\">&#xf073;</i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mt-3\">\r\n        <div class=\"col-sm-14\">\r\n          <select class=\"browser-default custom-select\" [(ngModel)]=\"paramData.AcademicYearId\" #Name=\"ngModel\" required>\r\n            <option value=\"0\">--Select Academic Year--</option>\r\n            <option *ngFor=\"let mark of accountingyear\" value={{mark.Id}}>{{mark.AcademicYear}} </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"mt-3\">\r\n        <div class=\"col-sm-14\">\r\n          <select class=\"browser-default custom-select\" [(ngModel)]=\"paramData.ClassSectionMediumId\" #Id=\"ngModel\" required>\r\n            <option value=\"0\">--Select Class Section--</option>\r\n            <option *ngFor=\"let mark of newclasssection\" value={{mark.Id}}>{{mark.Name}} </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"mt-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-auto\">\r\n            <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"attendanceData.IsHoliday\"\r\n              #Holiday=\"ngModel\" required></ui-switch>\r\n          </div>: is Holyday\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-primary\" id=\"saveMarkAttendance\" (click)=\"getStudentSelectAttendance()\"\r\n        type=\"submit\">Submit</button>\r\n        <!-- <button type=\"button\" class=\"btn btn-primary\" id=\"saveMarkAttendance\" (click)=\"saveMarkAttendance()\"\r\n        type=\"submit\">Submit</button> -->\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <!-- <app-card title=\"MarkAttendance\" [classHeader]=\"true\">\r\n      <h5>Mark Attendance</h5>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"markAttendanceGrid\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card> -->\r\n    <app-card title=\"MarkAttendance\" [classHeader]=\"true\">\r\n      <h5>Mark Attendance</h5>\r\n      <table>\r\n        <thead>\r\n            <th>SubModuleName</th>\r\n            <th>checked</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let student of StudentAttendanceArr\">\r\n                <td>{{student.Name}}</td>\r\n                <td><ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"student.IsPresent\"\r\n                  #Notification=\"ngModel\" required></ui-switch></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n      <br>\r\n      <br><br>\r\n      <div id=\"log\"></div>\r\n    </app-card>\r\n\r\n\r\n    <div class=\"col-sm-14\">\r\n      <app-card title=\"NotificationOption\" [classHeader]=\"true\">\r\n        <h5>Notification Options</h5>\r\n        <div class=\"mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-auto\">\r\n              <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" #SMS=\"ngModel\"\r\n                required></ui-switch>\r\n            </div>: SMS Notifications\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-auto\">\r\n              <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\"\r\n                #Notification=\"ngModel\" required></ui-switch>\r\n            </div>: Send Parents APP Push Notification\r\n          </div><br>\r\n          &nbsp;\r\n          &nbsp;\r\n          <button type=\"button\" class=\"btn btn-primary\" id=\"saveMarkAttendance\" (click)=\"saveMarkAttendance()\"\r\n            type=\"submit\">Submit</button>\r\n          &nbsp;\r\n          &nbsp;\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"cleardata()\">Cancel</button>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/STUDENTS/mark-attendance/mark-attendance.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/STUDENTS/mark-attendance/mark-attendance.component.ts ***!
  \***********************************************************************/
/*! exports provided: MarkAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAttendanceComponent", function() { return MarkAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_mark_attendance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/mark-attendance.service */ "./src/app/service/mark-attendance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Models_mark_attendance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Models/mark-attendance */ "./src/app/shared/Models/mark-attendance.ts");
/* harmony import */ var src_app_service_accounting_year_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/accounting-year.service */ "./src/app/service/accounting-year.service.ts");
/* harmony import */ var src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var src_app_shared_Models_Attendance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Models/Attendance */ "./src/app/shared/Models/Attendance.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MarkAttendanceComponent = /** @class */ (function () {
    function MarkAttendanceComponent(_CurrentClassSectionMedium, spinner, toastr, _AcademicYear, _ClassSectionMedium, parserFormatter) {
        this._CurrentClassSectionMedium = _CurrentClassSectionMedium;
        this.spinner = spinner;
        this.toastr = toastr;
        this._AcademicYear = _AcademicYear;
        this._ClassSectionMedium = _ClassSectionMedium;
        this.parserFormatter = parserFormatter;
        this.Buttontext = 'Submit';
        this.student = Array();
        this.markAttendanceGrid = Array();
        this.markAttendance = new src_app_shared_Models_mark_attendance__WEBPACK_IMPORTED_MODULE_4__["MarkAttendance"]();
        this.accountingyear = Array();
        this.newclasssection = Array();
        this.paramData = {
            AcademicYearId: '',
            ClassSectionMediumId: '',
        };
        this.attendanceData = {
            IsHoliday: false,
            AttendanceDate: '',
            studentArray: src_app_shared_Models_Attendance__WEBPACK_IMPORTED_MODULE_7__["Attendance"][1] = Array(),
        };
        this.data = Array();
        this.items = Array();
        this.StudentAttendanceArr = Array();
        this.arr1 = [
            { Id: 1, Name: 'markAttendanceGrid', ModuleId: 0, checked: false },
            { Id: 2, Name: 'MarkattendenceList', ModuleId: 0, checked: true },
            { Id: 3, Name: 'hello3', ModuleId: 1, checked: false },
            { Id: 4, Name: 'hello4', ModuleId: 0, checked: true },
            { Id: 5, Name: 'hello5', ModuleId: 4, checked: false },
            { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
            { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
            { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
        ];
    }
    MarkAttendanceComponent.prototype.ngOnInit = function () {
        this.getclassSectionMedium();
        this.getacademicYear();
    };
    MarkAttendanceComponent.prototype.getacademicYear = function () {
        var _this = this;
        this._AcademicYear.getaccountingyearsDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.accountingyear = data.data[0];
            }
        });
    };
    MarkAttendanceComponent.prototype.getclassSectionMedium = function () {
        var _this = this;
        this._ClassSectionMedium.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.newclasssection = data.data[0];
            }
        });
    };
    MarkAttendanceComponent.prototype.getStudentSelectAttendance = function () {
        var _this = this;
        console.log('Attendance Mark');
        this.spinner.show();
        this._CurrentClassSectionMedium.getStudentSelectForAttendance(this.paramData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Attendance Mark!!');
                _this.StudentAttendanceArr = data.data[0];
                console.log(_this.StudentAttendanceArr);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    MarkAttendanceComponent.prototype.saveMarkAttendance = function () {
        var _this = this;
        this.attendanceData.AttendanceDate = this.parserFormatter.format(this.selectedDate);
        this.attendanceData.studentArray = this.StudentAttendanceArr;
        // this.spinner.show();
        console.log('this.attendanceData -> ');
        console.log(this.attendanceData);
        this._CurrentClassSectionMedium.setAttendanceInsert(this.attendanceData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Attendance Mark!!');
                _this.StudentAttendanceArr = data.data[0];
                console.log(_this.StudentAttendanceArr);
                _this.getStudentSelectAttendance();
                //  this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    MarkAttendanceComponent.prototype.cleardata = function () {
        this.markAttendance = new src_app_shared_Models_mark_attendance__WEBPACK_IMPORTED_MODULE_4__["MarkAttendance"];
    };
    MarkAttendanceComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.student = event.data;
            this.Buttontext = 'Submit';
        }
    };
    MarkAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mark-attendance',
            template: __webpack_require__(/*! ./mark-attendance.component.html */ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.html"),
            styles: [__webpack_require__(/*! ./mark-attendance.component.scss */ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_mark_attendance_service__WEBPACK_IMPORTED_MODULE_1__["MarkAttendanceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_service_accounting_year_service__WEBPACK_IMPORTED_MODULE_5__["AccountingyearService"],
            src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_6__["ClasssectionService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateParserFormatter"]])
    ], MarkAttendanceComponent);
    return MarkAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/STUDENTS/mark-attendance/mark-attendance.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/STUDENTS/mark-attendance/mark-attendance.module.ts ***!
  \********************************************************************/
/*! exports provided: MarkAttendanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAttendanceModule", function() { return MarkAttendanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mark_attendance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mark-attendance.routing.module */ "./src/app/STUDENTS/mark-attendance/mark-attendance.routing.module.ts");
/* harmony import */ var _mark_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mark-attendance.component */ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MarkAttendanceModule = /** @class */ (function () {
    function MarkAttendanceModule() {
    }
    MarkAttendanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mark_attendance_routing_module__WEBPACK_IMPORTED_MODULE_2__["MarkAttendanceRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_5__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
            ],
            declarations: [_mark_attendance_component__WEBPACK_IMPORTED_MODULE_3__["MarkAttendanceComponent"]]
        })
    ], MarkAttendanceModule);
    return MarkAttendanceModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/mark-attendance/mark-attendance.routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/STUDENTS/mark-attendance/mark-attendance.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MarkAttendanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAttendanceRoutingModule", function() { return MarkAttendanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mark_attendance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mark-attendance.component */ "./src/app/STUDENTS/mark-attendance/mark-attendance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _mark_attendance_component__WEBPACK_IMPORTED_MODULE_2__["MarkAttendanceComponent"],
        data: {
            title: 'Mark Attendance',
            status: true
        },
    },
];
var MarkAttendanceRoutingModule = /** @class */ (function () {
    function MarkAttendanceRoutingModule() {
    }
    MarkAttendanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MarkAttendanceRoutingModule);
    return MarkAttendanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/accounting-year.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/accounting-year.service.ts ***!
  \****************************************************/
/*! exports provided: AccountingyearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingyearService", function() { return AccountingyearService; });
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


var AccountingyearService = /** @class */ (function () {
    function AccountingyearService(ServiceUitility) {
        this.ServiceUitility = ServiceUitility;
        this.route = '/academicyear';
        this._getaccountingyears = this.route + '/getacademicyears';
        this._getaccountingyear = this.route + '/getacademicyear';
        this._setaccountingyear = this.route + '/setacademicyear';
    }
    AccountingyearService.prototype.getaccountingyearsDetails = function () {
        return this.ServiceUitility.postRequest(this._getaccountingyears, '');
    };
    AccountingyearService.prototype.getaccountingyearDetails = function () {
        return this.ServiceUitility.postRequest(this._getaccountingyear, '');
    };
    AccountingyearService.prototype.setaccountingyearDetails = function (obj) {
        return this.ServiceUitility.postRequest(this._setaccountingyear, obj);
    };
    AccountingyearService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], AccountingyearService);
    return AccountingyearService;
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

/***/ "./src/app/service/mark-attendance.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/mark-attendance.service.ts ***!
  \****************************************************/
/*! exports provided: MarkAttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAttendanceService", function() { return MarkAttendanceService; });
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


var MarkAttendanceService = /** @class */ (function () {
    function MarkAttendanceService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/CurrentClassSectionMedium';
        this.getCurrentClassSectionMediumAPI = this.route + '/getCurrentClassSectionMedium';
        this.route1 = '/AttendanceInsert';
        this.setAttendanceInsertAPI = this.route1 + '/setattendanceInsert';
        this.route2 = '/AttendanceSelect';
        this.getStudentSelectForAttendanceAPI = this.route2 + '/getStudentSelectForAttendance';
        this.route3 = '/ApplicationForm';
        this.setapplicationformAPI = this.route3 + '/setapplicationform';
    }
    MarkAttendanceService.prototype.getCurrentClassSectionMedium = function (obj) {
        return this.serviceUitility.postRequest(this.getCurrentClassSectionMediumAPI, obj);
    };
    MarkAttendanceService.prototype.setAttendanceInsert = function (obj) {
        return this.serviceUitility.postRequest(this.setAttendanceInsertAPI, obj);
    };
    MarkAttendanceService.prototype.getStudentSelectForAttendance = function (obj) {
        return this.serviceUitility.postRequest(this.getStudentSelectForAttendanceAPI, obj);
    };
    MarkAttendanceService.prototype.setApplicationform = function (obj) {
        return this.serviceUitility.postRequest(this.setapplicationformAPI, obj);
    };
    MarkAttendanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], MarkAttendanceService);
    return MarkAttendanceService;
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

/***/ "./src/app/shared/Models/Attendance.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/Models/Attendance.ts ***!
  \*********************************************/
/*! exports provided: Attendance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attendance", function() { return Attendance; });
var Attendance = /** @class */ (function () {
    function Attendance() {
        this.IsPresent = true;
        this.IsHoliday = false;
    }
    return Attendance;
}());



/***/ }),

/***/ "./src/app/shared/Models/mark-attendance.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/Models/mark-attendance.ts ***!
  \**************************************************/
/*! exports provided: MarkAttendance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAttendance", function() { return MarkAttendance; });
var MarkAttendance = /** @class */ (function () {
    function MarkAttendance() {
        this.Id = -1;
    }
    return MarkAttendance;
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
//# sourceMappingURL=STUDENTS-mark-attendance-mark-attendance-module.js.map