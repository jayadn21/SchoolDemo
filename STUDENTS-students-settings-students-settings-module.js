(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["STUDENTS-students-settings-students-settings-module"],{

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

/***/ "./src/app/STUDENTS/students-settings/students-settings.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/STUDENTS/students-settings/students-settings.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-12\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5>Class Wise Student Strenght</h5>\r\n        <hr>\r\n      </div>\r\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"width: 100%; height: 470px;\"></chart>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-sm-12\">\r\n  <app-card title=\"SS\">\r\n    <div class=\"mt-3\">\r\n      <h5> Student Setting </h5>\r\n      <hr>\r\n    </div>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"StuentsArray\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\" >\r\n    </ng2-smart-table>\r\n  </app-card>\r\n</div>\r\n<app-card>\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button type=\"button\" class=\"btn btn-primary\">Promote</button>\r\n  <button type=\"button\" class=\"btn btn-success\">Re-Admission</button>\r\n  <button type=\"button\" class=\"btn btn-warning\">Passed Out</button>\r\n</div>\r\n&nbsp;&nbsp;&nbsp;\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button type=\"button\" class=\"btn btn-danger\">Dropped Out</button>\r\n  <button type=\"button\" class=\"btn btn-info\">Approved</button>\r\n</div>\r\n&nbsp;&nbsp;&nbsp;\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button type=\"button\" class=\"btn btn-warning\">I-Card</button>\r\n  <button type=\"button\" class=\"btn btn-success\">SMS</button>\r\n  <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n</div>\r\n&nbsp;&nbsp;&nbsp;\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button type=\"button\" class=\"btn btn-secondary\">Admission Ticket</button>\r\n</div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/STUDENTS/students-settings/students-settings.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/STUDENTS/students-settings/students-settings.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/STUDENTS/students-settings/students-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/STUDENTS/students-settings/students-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentsSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsSettingsComponent", function() { return StudentsSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/student.service */ "./src/app/service/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsSettingsComponent = /** @class */ (function () {
    function StudentsSettingsComponent(studentAPI) {
        this.studentAPI = studentAPI;
        this.areaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Expenses'],
                ['FA1', 74],
                ['FA2', 78],
                ['SA1', 81],
                ['FA3', 84],
                ['FA4', 83],
            ],
            options: {
                vAxis: { minValue: 0 },
                colors: ['#01C0C8', '#FB9678'],
                height: 300
            },
        };
        /*Bar chart Start*/
        this.type1 = 'bar';
        this.data1 = {
            labels: ['LKG', 'UKG', '1std', '2std', '3std', '4std', '5std', '7std', '8std', '9std', '10std'],
            datasets: [{
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [0, 30, 60, 90, 120, 150],
                }, {
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [0, 10, 40, 80, 120, 180],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
        };
        this.StuentsArray = Array();
        // Studentsetting = new Student();
        this.student = {
            Id: '1',
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
                Id: {
                    title: 'Id',
                },
                Name: {
                    title: 'Name',
                },
            },
        };
    }
    StudentsSettingsComponent.prototype.ngOnInit = function () {
        this.getstudentDetails();
    };
    StudentsSettingsComponent.prototype.getstudentDetails = function () {
        var _this = this;
        console.log('AssignTask');
        this.studentAPI.getStudentDetails(this.student)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Students');
                _this.StuentsArray = data.data[0][0];
                console.log(_this.StuentsArray);
            }
            else {
                console.log('Error');
            }
        });
    };
    StudentsSettingsComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    StudentsSettingsComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    StudentsSettingsComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    StudentsSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students-settings',
            template: __webpack_require__(/*! ./students-settings.component.html */ "./src/app/STUDENTS/students-settings/students-settings.component.html"),
            styles: [__webpack_require__(/*! ./students-settings.component.scss */ "./src/app/STUDENTS/students-settings/students-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]])
    ], StudentsSettingsComponent);
    return StudentsSettingsComponent;
}());



/***/ }),

/***/ "./src/app/STUDENTS/students-settings/students-settings.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/STUDENTS/students-settings/students-settings.module.ts ***!
  \************************************************************************/
/*! exports provided: StudentsSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsSettingsModule", function() { return StudentsSettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _students_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students-settings.component */ "./src/app/STUDENTS/students-settings/students-settings.component.ts");
/* harmony import */ var _students_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-settings.routing.module */ "./src/app/STUDENTS/students-settings/students-settings.routing.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var StudentsSettingsModule = /** @class */ (function () {
    function StudentsSettingsModule() {
    }
    StudentsSettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _students_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentsSettingsRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_9__["UiSwitchModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__["Ng2GoogleChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_5__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_12__["ChartModule"],
            ],
            declarations: [_students_settings_component__WEBPACK_IMPORTED_MODULE_2__["StudentsSettingsComponent"]]
        })
    ], StudentsSettingsModule);
    return StudentsSettingsModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/students-settings/students-settings.routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/STUDENTS/students-settings/students-settings.routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: StudentsSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsSettingsRoutingModule", function() { return StudentsSettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _students_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students-settings.component */ "./src/app/STUDENTS/students-settings/students-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _students_settings_component__WEBPACK_IMPORTED_MODULE_2__["StudentsSettingsComponent"],
        data: {
            title: 'Students Database',
            status: true
        },
    },
];
var StudentsSettingsRoutingModule = /** @class */ (function () {
    function StudentsSettingsRoutingModule() {
    }
    StudentsSettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StudentsSettingsRoutingModule);
    return StudentsSettingsRoutingModule;
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
//# sourceMappingURL=STUDENTS-students-settings-students-settings-module.js.map