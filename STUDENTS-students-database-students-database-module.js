(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["STUDENTS-students-database-students-database-module"],{

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

/***/ "./src/app/STUDENTS/students-database/students-database-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/STUDENTS/students-database/students-database-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: StudentsDatabaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsDatabaseRoutingModule", function() { return StudentsDatabaseRoutingModule; });
/* harmony import */ var _students_database_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-database.component */ "./src/app/STUDENTS/students-database/students-database.component.ts");
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
        component: _students_database_component__WEBPACK_IMPORTED_MODULE_0__["StudentsDatabaseComponent"],
        data: {
            title: 'Students Database',
            status: true
        },
    },
];
var StudentsDatabaseRoutingModule = /** @class */ (function () {
    function StudentsDatabaseRoutingModule() {
    }
    StudentsDatabaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentsDatabaseRoutingModule);
    return StudentsDatabaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/students-database/students-database.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/STUDENTS/students-database/students-database.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<h3 style=\"font-family:courier;\">Student's Profile</h3>\r\n<nav class=\"navbar navbar-light bg-white\">\r\n  <form class=\"form-inline\">\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-outline-primary mr-3\" type=\"button\">Students</button>\r\n      <div ngbDropdownMenu>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n              [routerLink]=\"['/STUDENTS/students-settings/']\"> Student Database </a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Admission Enquiry</a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n              href=\"javascript:\"> Grades </a>\r\n              <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n              href=\"javascript:\"> Remark </a>\r\n            </div>\r\n        <!-- Some Text here -->\r\n    </div>\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-outline-success\" type=\"button\"><i\r\n          class=\"ti-settings\"></i>Settings</button>\r\n      <div ngbDropdownMenu>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" (click)=\"openModal1('custom-modal-2')\">Batches</button>\r\n        </div>\r\n        <jw-modal id=\"custom-modal-2\">\r\n          <div class=\"app-modal-header\">\r\n            <div style=\"text-align:center;\">\r\n              <h4 class=\"modal-title\"><b>Manage Academic Batches</b><button type=\"button\" class=\"close basic-close\"\r\n                  (click)=\"closeModal1('custom-modal-2');\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button></h4>\r\n              <hr>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <h4 class=\"sub-title\">\r\n                  <font size=\"3\">Add Academic batches</font>\r\n                </h4>\r\n                <div class=\"mt-3\">\r\n                  <div class=\"col-sm-12\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"Batch Name\" placeholder=\"Batch Name\"\r\n                      [(ngModel)]=\"BatchName.BatchName\" #BatchName=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"\r\n                      required>\r\n                    <span class=\"md-line\"></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mt-3\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-auto\">\r\n                      <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"BatchName.CurrentBatch\"\r\n                        #CurrentBatch=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n                    </div>\r\n                    <h6>: Current Batch</h6>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-primary\" placement=\"bottom\">Submit</button>\r\n              </div>\r\n              <div class=\"col-sm-6 mobile-inputs\">\r\n                <div class=\"col-sm-12\">\r\n                  <h4 class=\"sub-title\">\r\n                    <font size=\"3\">Batches</font>\r\n                  </h4>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" value=\"2015-16\" readonly class=\"form-control\" placeholder=\"2015-16 \">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                      <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" value=\"2016-17\" readonly class=\"form-control\" placeholder=\"2015-16 \">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                      <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" value=\"2017-18\" readonly class=\"form-control\" placeholder=\"2015-16 \">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-edit\"></i></button>\r\n                      <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-minus\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </jw-modal>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" (click)=\"openModal2('custom-modal-2')\">Sections</button>\r\n        </div>\r\n        <jw-modal id=\"custom-modal-2\">\r\n          <div class=\"app-modal-header\">\r\n            <div style=\"text-align:center;\">\r\n              <h4 class=\"modal-title\"><b>New Application Form</b><button type=\"button\" class=\"close basic-close\"\r\n                  (click)=\"closeModal2('custom-modal-2');\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button></h4>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </jw-modal>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" (click)=\"openModal3('custom-modal-2')\">Classes</button>\r\n        </div>\r\n        <jw-modal id=\"custom-modal-2\">\r\n          <div class=\"app-modal-header\">\r\n            <div style=\"text-align:center;\">\r\n              <h4 class=\"modal-title\"><b>New Application Form</b><button type=\"button\" class=\"close basic-close\"\r\n                  (click)=\"closeModal3('custom-modal-2');\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button></h4>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </jw-modal>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" [routerLink]=\"['/STUDENTS/student-catogery/']\"\r\n          href=\"javascript:\">Categories</button>\r\n        </div>\r\n\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" [routerLink]=\"['/STUDENTS/custom-fields/']\"\r\n          href=\"javascript:\">Custom Field</button>\r\n        </div>\r\n\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" (click)=\"openModal6('custom-modal-2')\">Add-on-Facilities</button>\r\n        </div>\r\n        <jw-modal id=\"custom-modal-2\">\r\n          <div class=\"app-modal-header\">\r\n            <div style=\"text-align:center;\">\r\n              <h4 class=\"modal-title\"><b>New Application Form</b><button type=\"button\" class=\"close basic-close\"\r\n                  (click)=\"closeModal6('custom-modal-2');\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button></h4>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </jw-modal>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\" (click)=\"openModal7('custom-modal-1')\">Admission Ticket</button>\r\n        </div>\r\n        <jw-modal id=\"custom-modal-1\">\r\n          <div class=\"app-modal-header\">\r\n            <div style=\"text-align:center;\">\r\n              <h4 class=\"modal-title\"><b>Admission ticket Settings</b><button type=\"button\" class=\"close basic-close\"\r\n                  (click)=\"closeModal7('custom-modal-1');\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button></h4>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <h4 class=\"sub-title\">\r\n                <font size=\"3\">Create Admission Ticket by Class</font>\r\n              </h4>\r\n              Select Class by Apply\r\n              <div class=\"mt-3\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-auto\">\r\n                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"BatchName.CurrentBatch\"\r\n                      #CurrentBatch=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n                  </div>\r\n                  <h6>: KG-1</h6>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-auto\">\r\n                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"BatchName.CurrentBatch\"\r\n                      #CurrentBatch=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n                  </div>\r\n                  <h6>: KG-2</h6>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-auto\">\r\n                    <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"BatchName.CurrentBatch\"\r\n                      #CurrentBatch=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required></ui-switch>\r\n                  </div>\r\n                  <h6>: 1st STD A</h6>\r\n                </div>\r\n              </div>\r\n              <h4 class=\"sub-title\">\r\n                <font size=\"3\">Application Fees</font>\r\n              </h4>\r\n              <div class=\"col-sm-12\">\r\n                <select name=\"select\" class=\"form-control form-control-default\" placeholder=\"Choose Subject Combination\"\r\n                  [(ngModel)]=\"BatchName.AcademicYearId\" #AcademicYearId=\"ngModel\" required>\r\n                  <option value=\"opt1\">Choose Subject Combination</option>\r\n                  <option value=\"opt2\">2016 </option>\r\n                  <option value=\"opt3\">2015 </option>\r\n                  <option value=\"opt4\"> </option>\r\n                  <option value=\"opt5\">Type 5</option>\r\n                  <option value=\"opt6\">Type 6</option>\r\n                  <option value=\"opt7\">Type 7</option>\r\n                  <option value=\"opt8\">Type 8</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n                <div class=\"col-lg-12\">\r\n                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Admission Tecket\"\r\n                    placeholder=\"Admission ticket Header\" [(ngModel)]=\" BatchName.AdmissionTicket\"\r\n                    #AdmissionTicket=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                  <span class=\"md-line\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n                <div class=\"col-lg-12\">\r\n                  <input type=\"text\" class=\"form-control form-control-default\" name=\"School or College\"\r\n                    placeholder=\"School or Colleger\" [(ngModel)]=\" BatchName.SchoolCollege\" #SchoolCollege=\"ngModel\"\r\n                    [ngModelOptions]=\"{standalone: true}\" required>\r\n                  <span class=\"md-line\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n                <div class=\"col-lg-12\">\r\n                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Register Number\"\r\n                    placeholder=\"Register Number Prefix\" [(ngModel)]=\" BatchName.RegisterNumber\"\r\n                    #RegisterNumber=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                  <span class=\"md-line\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-3\"></div>\r\n              <h4 class=\"sub-title\">\r\n                <font size=\"3\">Admission Ticket Content</font>\r\n              </h4>\r\n              <textarea style=\"height: 200px;\" rows=\"5\" name=\"name\" class=\"form-control\">Put your things hear</textarea> <br>\r\n              <div style=\"text-align:center;\">\r\n                <button type=\"submit\" class=\"btn btn-primary\"> Submit</button>\r\n              </div>\r\n              </div>\r\n            </div>\r\n        </jw-modal>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-link\">Imports</button>\r\n        </div>\r\n        <jw-modal id=\"custom-modal-2\">\r\n          <div class=\"app-modal-header\">\r\n            <div style=\"text-align:center;\">\r\n              <h4 class=\"modal-title\"><b>New Application Form</b><button type=\"button\" class=\"close basic-close\"\r\n                  (click)=\"closeModal8('custom-modal-2');\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button></h4>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </jw-modal>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</nav> <br>\r\n<div class=\"row\">\r\n  <div class=\"col-xl-4\">\r\n    <!-- Tooltip style 1 card start -->\r\n    <!-- Upload Photo Start -->\r\n    <!-- <div class=\"card-block\">\r\n        <div class=\"usre-image\">\r\n          <img [src]=\"imgURL\" height=\"110\" width=\"110\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n        </div>\r\n        <h6 class=\"f-w-600 m-t-25 m-b-10\">Aliya Afreen</h6>\r\n        <input type=\"file\" #file accept='image/*' (change)=\"onChange(file.files)\"/>\r\n        <hr />\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"UpdateProfile()\">Upload</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-danger\">Remove</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-success\">Sanpshot</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <hr />\r\n      </div> -->\r\n    <!-- Upload Photo End -->\r\n    <div class=\"card user-card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"usre-image\">\r\n          <img src=\" \" class=\"img-rounded\" alt=\" \">\r\n          <img [src]=\"imgURL\" height=\"110\" width=\"110\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n        </div>\r\n        <h6 class=\"f-w-600 m-t-25 m-b-10\">Aliya Afreen</h6>\r\n        <input type=\"file\" #file accept='image/*' (change)=\"onChange(file.files)\"/>\r\n        <!-- <button>Browse..</button> No File Selected <br> -->\r\n        <hr />\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm mr-1\">Upload</button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-sm mr-1\">Remove</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-sm mr-1\">Sanpshot</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card user-card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"card bg-success\">\r\n          <div class=\"card-body text-left\">\r\n            <p>\r\n              <font size=\"3\" style=\"color:green;\"><b>Resend Login Details</b> </font>\r\n            </p>\r\n            <hr>\r\n            <p class=\"card-text\" style=\"color:green;\">You can resend the parents app login details here.An email and SMS\r\n              will be sent to\r\n              the\r\n              parents with all\r\n              the required details</p>\r\n            <button type=\"button\" style=\"text-align: left\" class=\"btn btn-danger btn-md\">Resend Login</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"card bg-success\">\r\n          <div class=\"card-body text-left\">\r\n            <p>\r\n              <font size=\"3\" style=\"color:green;\"><b>Password Reset</b> </font>\r\n            </p>\r\n            <hr>\r\n            <p class=\"card-text\" style=\"color:green;\">ou can reset the password of the parent app here.An email SMS will\r\n              be sent to the\r\n              parent with the\r\n              automatically generated new password</p>\r\n            <button type=\"button\" style=\"text-align: left\" class=\"btn btn-danger btn-md\">Reset Password</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"card bg-success\">\r\n          <div class=\"card-body text-left\">\r\n            <p>\r\n              <font size=\"3\" style=\"color:green;\"><b>Student Approval</b> </font>\r\n            </p>\r\n            <hr>\r\n            <p class=\"card-text\" style=\"color:green;\">To approve or disapprove the student use the switch button</p>\r\n            <ui-switch color=\"red\" switchColor=\"#fff\" size=\"small\">\r\n            </ui-switch>\r\n            <font size=\"3\" style=\"color:green;\"><b> :Approved</b> </font>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"card bg-success\">\r\n          <div class=\"card-body text-left\">\r\n            <p>\r\n              <font size=\"3\" style=\"color:green;\"><b>Student Status</b> </font>\r\n            </p>\r\n            <hr>\r\n            <p class=\"card-text\" style=\"color:green;\">To change the status of the student use the switch below</p>\r\n            <ui-switch color=\"red\" switchColor=\"#fff\" size=\"small\">\r\n            </ui-switch>\r\n            <font size=\"3\" style=\"color:green;\"><b> :Current</b> </font>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-xl-8\">\r\n    <app-card>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <ngb-tabset>\r\n            <ngb-tab title=\"Fees\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-25\">\r\n                  <p class=\"m-4\"></p>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md\">Add Fees Statement</button>\r\n                  <hr>\r\n                  <ng2-smart-table [settings]=\"settings\" [source]=\"data\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n                    (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n                    (custom)=\"onFeesCustomAction($event)\"></ng2-smart-table>\r\n\r\n                  <jw-modal id=\"Feesmodal\">\r\n                    <div class=\"app-modal-header\">\r\n\r\n                      <!-- <button type=\"button\" class=\"close basic-close\"\r\n                              (click)=\"closeFeesModal('Feesmodal');\">\r\n                              <span aria-hidden=\"true\">&times;</span>\r\n                            </button> -->\r\n                      <div class=\"row\">\r\n                        <div div class=\"col-sm-6\">\r\n                          <div style=\"text-align: left\">\r\n                            <p> <b>Class</b>: 2nd STD A </p>\r\n                            <p> <b>Statement ID</b>: Demo10011101/1458 </p>\r\n                            <p> <b>Year</b>: 2016-17 </p>\r\n                            <p> <b>Fees Head</b>: SCHOOL FEE </p>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                          <div style=\"text-align: right\">\r\n                            <p> <b>Statement Date</b>: 13-03-2018 </p>\r\n                            <p> <b>Due Date</b>: 13-12-2018 </p>\r\n                            <p> <b>Amount Pending</b>: 63000 </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div style=\"text-align: center\">\r\n                        <table class=\"table\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">Fees Account</th>\r\n                              <th scope=\"col\">Description</th>\r\n                              <th scope=\"col\">Fees</th>\r\n                              <th scope=\"col\">Pending</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                              <th scope=\"row\">TUTION FEES</th>\r\n                              <td></td>\r\n                              <td>Rs. 50000.00</td>\r\n                              <td>Rs. 50000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th scope=\"row\">LIBRARY FEES</th>\r\n                              <td></td>\r\n                              <td>Rs. 5000.00</td>\r\n                              <td>Rs. 5000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th scope=\"row\">EXAM FEES</th>\r\n                              <td></td>\r\n                              <td>Rs. 100000.00</td>\r\n                              <td>Rs. 0</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th scope=\"row\"> LABFEES</th>\r\n                              <td></td>\r\n                              <td>Rs. 8000.00</td>\r\n                              <td>Rs. 8000.00</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n\r\n                      </div>\r\n                      <br>\r\n                      <br>\r\n                      <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div style=\"text-align: right;\">\r\n                          <table class=\"table\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th scope=\"col\">Grand Total</th>\r\n                                <th scope=\"col\">Rs. 73000.00</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr>\r\n                                <th scope=\"row\">Payements</th>\r\n\r\n                              </tr>\r\n                              <tr>\r\n                                <th scope=\"row\">17-04-2018</th>\r\n\r\n                                <td>Rs. 100000.00</td>\r\n                                <td></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <th scope=\"row\">Total Paid</th>\r\n                                <td>Rs. 100000.00</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <th scope=\"row\">Amount Pending</th>\r\n                                <td>Rs. 63000.00</td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n\r\n                      <br>\r\n                      <div style=\"text-align: center;\">\r\n                        <button class=\"btn btn-success\">Print Receipt</button>\r\n                        &nbsp;\r\n                        <button class=\"btn btn-primary\" (click)=\"closeFeesModal('Feesmodal')\"\r\n                          (click)=\"OpenAddPaymentModal('paymentModal')\">Add Payment</button>\r\n                        &nbsp;\r\n                        <button class=\"btn btn-info\">Add Discount</button>\r\n                        &nbsp;\r\n                        <button type=\"button\" class=\"btn btn-light\" (click)=\"closeFeesModal('Feesmodal')\">Close</button>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n                  </jw-modal>\r\n\r\n\r\n                  <jw-modal id=\"paymentModal\">\r\n                    <div class=\"app-modal-header\">\r\n                      <div style=\"text-align:left;\">\r\n                        <h4 class=\"modal-title\"><b>Add Payment</b>\r\n                          <button type=\"button\" class=\"close basic-close\"\r\n                            (click)=\"closeAddPaymentModal('paymentModal');\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                          </button></h4>\r\n                        <hr>\r\n                      </div>\r\n                      <div style=\"text-align: center\">\r\n                        <div class=\"mt-3\">\r\n                          <div class=\"col-lg-14\">\r\n                            <div class=\"md-form\">\r\n                              <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"Appldate\"\r\n                                placeholder=\"Application Date\">\r\n                              <span class=\"md-line\"></span>\r\n                            </div>\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"mt-3\">\r\n                          <div class=\"col-lg-14\">\r\n\r\n                            <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                              placeholder=\"Description\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-3\">\r\n                          <div class=\"col-lg-14\">\r\n                            <select name=\"select\" class=\"form-control form-control-default\">\r\n                              <option value=\"opt1\">Choose Any One </option>\r\n                              <option value=\"opt2\">Cash on Hand</option>\r\n                              <option value=\"opt3\">No</option>\r\n                            </select>\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"mt-3\">\r\n                          <div class=\"col-lg-14\">\r\n\r\n                            <select name=\"select\" class=\"form-control form-control-default\">\r\n                              <option value=\"opt1\">Choose Any One </option>\r\n                              <option value=\"opt2\">BANK ACCOUNT 1</option>\r\n                              <option value=\"opt3\">BANK ACCOUNT 2</option>\r\n                            </select>\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <select name=\"select\" class=\"form-control form-control-default\">\r\n                              <option value=\"opt1\">Choose Any One </option>\r\n                              <option value=\"opt2\">LAB FEES</option>\r\n                              <option value=\"opt3\">TUTION FEES</option>\r\n                            </select>\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"col-sm-5\">\r\n                            <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                              placeholder=\"8000\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"col-sm-1\">\r\n                            <div class=\"input-group-append\">\r\n                              <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-times\"\r\n                                  aria-hidden=\"true\"></i></button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div style=\"text-align: left;\">\r\n                                <button type=\"button\" class=\"btn btn-light\">+ Add Line</button>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n\r\n                            <div class=\"col-sm-6\">\r\n                              <div style=\"text-align:right;\">\r\n                                <p>Grand Total: Rs. 8000 /-</p>\r\n                                </div>\r\n                                </div>\r\n                                </div>\r\n                                <hr>\r\n\r\n                                <div class=\"row\">\r\n                                    <p class=\"text-primary\">\r\n                                       Notification Options\r\n                                      </p>\r\n                                </div>\r\n\r\n                                      <div class=\"row\">\r\n                                          <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\">\r\n\r\n                                          </ui-switch> <b>&nbsp;:Send SMS Notifications</b>\r\n\r\n                                </div>\r\n\r\n                                <hr>\r\n\r\n                                <div class=\"row\">\r\n\r\n                                    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\r\n                                    &nbsp;\r\n                                    &nbsp;\r\n                                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"closeAddPaymentModal('paymentModal');\">Cancel</button>\r\n                                </div>\r\n                      </div>\r\n                    </div>\r\n                  </jw-modal>\r\n\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Students Info\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-25\">\r\n                  <p class=\"text-center font-weight-bold\">\r\n                    <font size=\"4\"><b>Basic Information</b></font>\r\n                  </p>\r\n                  <hr>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Adm No. :</b> {{Newstudent.AdmissionNo}}</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Name :</b> {{Newstudent.Name}}</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Date of Birth:</b> {{Newstudent.DateOfBirth}}</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Place of Birth:</b> </font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Aadhaar no. :</b> </font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Nationality :</b> Indian</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Mother Toung :</b> Urdu</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Religion :</b> {{Newstudent.ReligionId}}</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Caste :</b> {{Newstudent.CasteId}}</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Category :</b> {{Newstudent.SubCasteId}}</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Gender :</b> {{Newstudent.Gender}}</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Blood Group :</b> {{Newstudent.BloodGroup}} </font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Mobile No. :</b> {{Newstudent.PhoneNumber}}</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Email :</b> </font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Present Address :</b>{{Newstudent.PresentAddress}}</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Permanent Address :</b> {{Newstudent.PermanentAddress}}</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <p class=\"text-center font-weight-bold\">\r\n                        <font size=\"4\"><b>Acedemic Information</b></font>\r\n                      </p>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Admission Date :</b> 24/05/2016</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Student U-ID :</b> 666948395049</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Pervious Organisation Attended:</b> </font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Pervious Organisation TC No.:</b> </font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Batch:</b> 2016-17 </font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Class:</b>2nd STD A</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Admission Category:</b> General</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Class During Admission :</b> 2nd STD</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Roll Number:</b> 3</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <p class=\"text-center font-weight-bold\">\r\n                        <font size=\"4\"><b>Parents Information</b></font>\r\n                      </p>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Father Name:</b> Iliyaz Pasha</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Mother Name:</b> B B Ayesha</font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Mobile Primary:</b> 8050783561</font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Mobile Scondary:</b> </font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"container\">\r\n                        <div class=\"row justify-content-left\">\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Email:</b> </font>\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <p>\r\n                              <font size=\"3\"><b>Family Income:</b> </font>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"mt-3\">\r\n                        <button type=\"button\" class=\"btn btn-info\" placement=\"bottom\">Edit Student </button>\r\n                        &nbsp;&nbsp;\r\n                        <!-- <button type=\"button\" class=\"btn btn-warning\" placement=\"bottom\">Certificates</button>  -->\r\n\r\n                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"openModal('custom-modal-1')\"\r\n                          placement=\"bottom\">Certificates</button>\r\n                        <div>\r\n                          <jw-modal id=\"custom-modal-1\">\r\n                            <div class=\"app-modal-header\">\r\n                              <div class=\"app-modal-header\">\r\n                                <div style=\"text-align:center;\">\r\n                                  <h4 class=\"modal-title\"><b>Print Certificate</b></h4>\r\n                                  <hr>\r\n                                </div>\r\n                                <button type=\"button\" class=\"close basic-close\" (click)=\"closeModal('custom-modal-1');\">\r\n                                  <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                                <div class=\"app-modal-body\">\r\n                                  <select name=\"change\" [(ngModel)]=\"optionSelected\"\r\n                                    class=\"form-control form-control-default\" id=\"change\" #Name=\"ngModel\" required>\r\n                                    <option value=\"1\">Choose Certificate to Print</option>\r\n                                    <option value=\"2\">Study Certificate- 1</option>\r\n                                    <option value=\"3\">Study Certificate- 2</option>\r\n                                    <option value=\"4\">Admission Extract</option>\r\n                                    <option value=\"5\">Transfer Certificate</option>\r\n                                    <option value=\"6\">Re-Admission Form</option>\r\n                                  </select>\r\n                                  <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\"\r\n                                      (click)=\"okButtonHandler('custom-modal-1');\">Ok</button>\r\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"\r\n                                      (click)=\"closeModal('custom-modal-1');\">Close</button>\r\n\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </jw-modal>\r\n\r\n                          <jw-modal id=\"custom-modal-2\">\r\n                            <div class=\"app-modal-header\">\r\n                              <div style=\"text-align:center;\">\r\n                                <h4 class=\"modal-title\"><b>Transfer Certificate Data</b></h4>\r\n                                <hr>\r\n                              </div>\r\n                              <button type=\"button\" class=\"close basic-close\" (click)=\"closeModal('custom-modal-2');\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                              </button>\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                            <div class=\"app-modal-body\">\r\n                              <div class=\"mt-3\"></div>\r\n                              <b> Please fill in all the fields to print the transfer Certificate </b>\r\n                              <br>\r\n                              <br>\r\n                              <div class=\"col-lg-14\">\r\n                                <b>T.C No.</b>\r\n                                <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                  placeholder=\"T.C No.\">\r\n                                <span class=\"md-line\"></span>\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"col-lg-14\">\r\n                                <b>Whether the pupil has paid all the fees</b>\r\n                                <select name=\"select\" class=\"form-control form-control-default\">\r\n                                  <option value=\"opt1\">Choose Any One </option>\r\n                                  <option value=\"opt2\">Yes</option>\r\n                                  <option value=\"opt3\">No</option>\r\n                                </select>\r\n                                <span class=\"md-line\"></span>\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Fees concession if any</b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Whether qualified for Promotion</b>\r\n                                  <select name=\"select\" class=\"form-control form-control-default\">\r\n                                    <option value=\"opt1\">Choose Any One </option>\r\n                                    <option value=\"opt2\">Yes</option>\r\n                                    <option value=\"opt3\">No</option>\r\n                                  </select>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Date on Which the application for the T.C was received</b>\r\n                                  <div class=\"md-form\">\r\n                                    <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"Appldate\"\r\n                                      placeholder=\"Application Date\">\r\n                                    <span class=\"md-line\"></span>\r\n                                  </div>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Date of Issue of T.C</b>\r\n                                  <div class=\"md-form\">\r\n                                    <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"Appldate\"\r\n                                      placeholder=\"Application Date\">\r\n                                    <span class=\"md-line\"></span>\r\n                                  </div>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Date of pupils last attendance</b>\r\n                                  <div class=\"md-form\">\r\n                                    <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"Appldate\"\r\n                                      placeholder=\"Application Date\">\r\n                                    <span class=\"md-line\"></span>\r\n                                  </div>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Number of school days up to the date of leaving</b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Number of school days pupil attended</b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Date of admission or promotion to that class </b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Whether the medical exam done or not</b>\r\n                                  <select name=\"select\" class=\"form-control form-control-default\">\r\n                                    <option value=\"opt1\">Choose Any One </option>\r\n                                    <option value=\"opt2\">Yes</option>\r\n                                    <option value=\"opt3\">No</option>\r\n                                  </select>\r\n                                  <b>Date of Issue of T.C</b>\r\n                                  <div class=\"md-form\">\r\n                                    <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"Appldate\"\r\n                                      placeholder=\"Application Date\">\r\n                                    <span class=\"md-line\"></span>\r\n                                  </div>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Internal or Board Based Exam</b>\r\n                                  <select name=\"select\" class=\"form-control form-control-default\">\r\n                                    <option value=\"opt1\">Choose Any One </option>\r\n                                    <option value=\"opt2\">Yes</option>\r\n                                    <option value=\"opt3\">No</option>\r\n                                  </select>\r\n                                  <b>Date of pupils last attendance</b>\r\n                                  <div class=\"md-form\">\r\n                                    <input type=\"date\" id=\"inputMDEx\" class=\"form-control\" name=\"Appldate\"\r\n                                      placeholder=\"Application Date\">\r\n                                    <span class=\"md-line\"></span>\r\n                                  </div>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Reason for leaving the organization </b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Any other Remarks </b>\r\n                                  <b>Number of school days up to the date of leaving</b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Number of school days pupil attended</b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Date of admission or promotion to that class </b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Whether the medical exam done or not</b>\r\n                                  <select name=\"select\" class=\"form-control form-control-default\">\r\n                                    <option value=\"opt1\">Choose Any One </option>\r\n                                    <option value=\"opt2\">Yes</option>\r\n                                    <option value=\"opt3\">No</option>\r\n                                  </select>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Internal or Board Based Exam</b>\r\n                                  <select name=\"select\" class=\"form-control form-control-default\">\r\n                                    <option value=\"opt1\">Choose Any One </option>\r\n                                    <option value=\"opt2\">Yes</option>\r\n                                    <option value=\"opt3\">No</option>\r\n                                  </select>\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Reason for leaving the organization </b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Any other Remarks </b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <br>\r\n                              <div class=\"mt-3\">\r\n                                <div class=\"col-lg-14\">\r\n                                  <b>Character and Conduct</b>\r\n                                  <input type=\"text\" class=\"form-control form-control-default\" name=\"Amount\"\r\n                                    placeholder=\"\">\r\n                                  <span class=\"md-line\"></span>\r\n                                </div>\r\n                              </div>\r\n\r\n                            </div>\r\n                            <!-- <div class=\"app-modal-footer\">\r\n                                        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n                                        <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\r\n                                      </div> -->\r\n                            <br>\r\n\r\n                            <button type=\"button\" class=\"btn btn-warning\" placement=\"bottom\">Save & Print</button>\r\n                          </jw-modal>\r\n\r\n                          <!-- <div>\r\n                          <app-modal-basic #modalDefault>\r\n                            <div class=\"app-modal-header\">\r\n                              <h4 class=\"modal-title\">Print Certificate</h4>\r\n                              <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                              </button>\r\n                            </div>\r\n                            <div class=\"app-modal-body\">\r\n                              <select name=\"select\" class=\"form-control form-control-default\" id=\"change\"\r\n                              (change)=\"onOptionsSelected('certModal')\">\r\n                                <option value=\"\">Choose Certificate to Print</option>\r\n                                <option value=\"\">Study Certificate- 1</option>\r\n                                <option value=\"\">Study Certificate- 2</option>\r\n                                <option value=\"\">Admission Extract</option>\r\n                                <option value=\"\">Transfer Certificate</option>\r\n                                <option value=\"\">Re-Admission Form</option>\r\n                              </select>\r\n                                    <div class=\"modal-footer\">\r\n                                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>   -->\r\n\r\n\r\n\r\n                          <!-- <div class=\"app-modal-footer\">\r\n                              <button type=\"button\" class=\"btn btn-default waves-effect\"\r\n                                (click)=\"modalDefault.hide()\">Close</button>\r\n                              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Ok\r\n                                </button>\r\n                            </div>\r\n                          </div>\r\n                          </app-modal-basic> -->\r\n                        </div>\r\n\r\n                        &nbsp;&nbsp;\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Attendence\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-25\">\r\n                  <app-card>\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                          <select name=\"select\" class=\"form-control form-control-default\">\r\n                            <option value=\"opt1\">Choose months to see monthly report</option>\r\n                            <option value=\"opt2\">Type 2</option>\r\n                            <option value=\"opt3\">Type 3</option>\r\n                            <option value=\"opt4\">Type 4</option>\r\n                            <option value=\"opt5\">Type 5</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <google-chart [data]=\"donutChartData\"></google-chart>\r\n                    </div>\r\n                  </app-card>\r\n                  <app-card>\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <b> Total Days</b>\r\n                        <span class=\"badge badge-success badge-pill\">00</span>\r\n                      </li>\r\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <b>Attended</b>\r\n                        <span class=\"badge badge-success badge-pill\">00</span>\r\n                      </li>\r\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <b> Absent</b>\r\n                        <span class=\"badge badge-success badge-pill\">00</span>\r\n                      </li>\r\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <b> Percentage</b>\r\n                        <span class=\"badge badge-success badge-pill\">00</span>\r\n                      </li>\r\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <b>Status</b>\r\n                        <span class=\"badge badge-success badge-pill\">Good</span>\r\n                      </li>\r\n                    </ul>\r\n                  </app-card>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n\r\n            <ngb-tab title=\"Score Statistics\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-25\">\r\n                  <app-card>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-md-12\">\r\n                        <select name=\"select\" readonly class=\"form-control form-control-default\">\r\n                          <option value=\"opt1\">2016-17</option>\r\n                          <option value=\"opt2\">Type 2</option>\r\n                          <option value=\"opt3\">Type 3</option>\r\n                          <option value=\"opt4\">Type 4</option>\r\n                          <option value=\"opt5\">Type 5</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <google-chart [data]=\"areaChartData\"></google-chart>\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th> </th>\r\n                            <th>Assessment</th>\r\n                            <th>Class</th>\r\n                            <th>Batch</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <th scope=\"row\">\r\n                              <div class=\"input-group-append\">\r\n                                <button type=\"button\" class=\"btn btn-primary waves-effect btn-sm\"\r\n                                  (click)=\"modalLarge.show()\"><i class=\"fa fa-plus\"></i></button>\r\n                                <app-modal-basic #modalLarge [dialogClass]=\"'modal-lg'\">\r\n                                  <div class=\"app-modal-header\">\r\n                                    <h4>Assessment</h4>\r\n                                    <button type=\"button\" class=\"close basic-close\" (click)=\"modalLarge.hide()\">\r\n                                      <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                  </div>\r\n                                  <div class=\"app-modal-body\">\r\n                                    <div class=\"table-responsive\">\r\n                                      <table class=\"table\">\r\n                                        <thead>\r\n                                          <tr>\r\n                                            <th>Subjects</th>\r\n                                            <th>MAx. Marks</th>\r\n                                            <th>Obtained</th>\r\n                                            <th>Grade</th>\r\n                                          </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                          <tr>\r\n                                            <td>ENGLISH</td>\r\n                                            <td>25</td>\r\n                                            <td>19</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>KANNADA</td>\r\n                                            <td>25</td>\r\n                                            <td>19</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>HINDI</td>\r\n                                            <td>25</td>\r\n                                            <td>22</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>SCIENCE</td>\r\n                                            <td>25</td>\r\n                                            <td>21</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>SOCIAL</td>\r\n                                            <td>25</td>\r\n                                            <td>21</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>MATHS</td>\r\n                                            <td>25</td>\r\n                                            <td>21</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <th>Total</th>\r\n                                            <th>150</th>\r\n                                            <th>124</th>\r\n                                            <th>A</th>\r\n                                          </tr>\r\n                                        </tbody>\r\n                                      </table>\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"table-responsive\">\r\n                                      <table class=\"table\">\r\n                                        <thead>\r\n                                          <tr>\r\n                                            <th>Co-Scholastic Subjects</th>\r\n                                            <th>Grade</th>\r\n                                          </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                          <tr>\r\n                                            <td>COMPUTER</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>PHYSICAL EDUCATION</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>DRAWING</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>ART AND CRAFT</td>\r\n                                            <td>A</td>\r\n                                          </tr>\r\n                                        </tbody>\r\n                                      </table>\r\n                                    </div>\r\n                                  </div>\r\n                                </app-modal-basic>\r\n                              </div>\r\n                            </th>\r\n                            <td>SUMMATIVE ASSESSMENT 2</td>\r\n                            <td>2nd STD A</td>\r\n                            <td>2016-17</td>\r\n                          </tr>\r\n\r\n\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </app-card>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Notes\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-25\">\r\n\r\n                  <app-card title=\"'Combination chart'\">\r\n                    <div id=\"chart4\"></div>\r\n                  </app-card>\r\n\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Activities\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-25\">\r\n                  <p class=\"m-4\">5..</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/STUDENTS/students-database/students-database.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/STUDENTS/students-database/students-database.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/STUDENTS/students-database/students-database.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/STUDENTS/students-database/students-database.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentsDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsDatabaseComponent", function() { return StudentsDatabaseComponent; });
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/student.service */ "./src/app/service/student.service.ts");
/* harmony import */ var _service_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/modal.service */ "./src/app/service/modal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentsDatabaseComponent = /** @class */ (function () {
    function StudentsDatabaseComponent(modalService, _studentservice, spinner) {
        this.modalService = modalService;
        this._studentservice = _studentservice;
        this.spinner = spinner;
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.editAbout = true;
        this.editAboutIcon = 'icofont-edit';
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.rowsContact = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.modalName = 'certificate';
        this.optionSelected = '1';
        this.students = Array();
        this.student = {
            Id: '1',
        };
        this.Newstudent = {
            Id: '-1',
            Name: '',
            InstitutionId: '',
            StudentCode: '',
            ApplicationNumber: '',
            FirstName: '',
            LastName: '',
            DateOfBirth: '',
            AdmissionNo: '',
            AdmissionDate: '',
            Gender: '',
            ReligionId: '',
            CasteId: '',
            SubCasteId: '',
            ReservationCategoryId: '',
            MediumId: '',
            PresentAddress: '',
            PermanentAddress: '',
            PhoneNumber: '',
            ParentId: '',
            BloodGroup: '',
            PhysicallyChallenged: '',
            PatternId: '',
            CurrentClassSectionMediumId: '',
            Active: '',
            UserName: '',
            AlternativePhoneNumber: '',
            AcademicYearId: '',
            ClassId: '',
        };
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
        this.donutChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Present', 40],
                ['Absent', 4],
            ],
            options: {
                height: 300,
                title: '',
                pieHole: 0.3,
                colors: ['#FB9678', '#5faee3', '#f4d03f']
            },
        };
        this.BatchName = {};
        // tslint:disable-next-line: member-ordering
        this.settings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa fa-print" aria-hidden="true"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            edit: {
                editButtonContent: '<i class="fa fa-plus-square" aria-hidden="true"></i>',
                confirmSave: true,
            },
            add: {
                confirmCreate: true,
            },
            actions: {
                add: false,
                edit: false,
                delete: true,
                custom: [
                    { name: 'editsection', title: '<i class="fa fa-plus-square" aria-hidden="true"></i>' },
                ],
            },
            columns: {
                InvoiceDate: {
                    title: 'Invoice Date',
                },
                DueDate: {
                    title: 'Due Date',
                },
                FeesAccount: {
                    title: 'Fees Account',
                },
                FeesAmount: {
                    title: 'Fees Amount',
                },
                AmountPaid: {
                    title: 'Amount Paid'
                },
                AmountPending: {
                    title: 'Amount Pending'
                },
            },
        };
        // tslint:disable-next-line: member-ordering
        // data = [
        //   {
        //     // InvoiceDate: 15-09-2016,
        //     // DueDate: 10-10-2016,
        //     FeesAccount: 'SCHOOL FEE',
        //     FeesAmount: 73000,
        //     AmountPaid: 10000,
        //     AmountPending: 63000
        //   },
        //   {
        //    // InvoiceDate: 25-09-2016,
        //     // DueDate: 15-10-2016,
        //     FeesAccount: 'SCHOOL FEE',
        //     FeesAmount: 36000,
        //     AmountPaid: 26000,
        //     AmountPending: 10000
        //   },
        // ];
        // tslint:disable-next-line: member-ordering
        this.data1 = [
            {
                // InvoiceDate: 15-09-2016,
                // DueDate: 10-10-2016,
                FeesAccount: 'SCHOOL FEE',
                FeesAmount: 73000,
                AmountPaid: 10000,
                AmountPending: 63000
            },
            {
                // InvoiceDate: 25-09-2016,
                // DueDate: 15-10-2016,
                FeesAccount: 'SCHOOL FEE',
                FeesAmount: 36000,
                AmountPaid: 26000,
                AmountPending: 10000
            },
        ];
    }
    StudentsDatabaseComponent.prototype.ngOnInit = function () {
        this.getStudentDetails();
        this.isValidImage = false;
        var chart4 = c3__WEBPACK_IMPORTED_MODULE_4__["generate"]({
            bindto: '#chart4',
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150],
                    ['data6', 90, 70, 20, 50, 60, 120],
                ],
                type: 'bar',
                colors: {
                    data1: '#00C292',
                    data2: '#4C5667',
                    data3: '#03A9F3',
                    data4: '#AB8CE4',
                    data5: '#a3aebd',
                    data6: '#FEC107'
                },
                types: {
                    data3: 'spline',
                    data4: 'line',
                    data6: 'area',
                },
                groups: [
                    ['data1', 'data2']
                ]
            }
        });
    };
    StudentsDatabaseComponent.prototype.getStudentDetails = function () {
        var _this = this;
        console.log();
        this._studentservice.getStudentDetails(this.student)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Students');
                _this.Newstudent = data.data[0][0];
                console.log(_this.Newstudent);
            }
            else {
                console.log('Error');
            }
        });
    };
    StudentsDatabaseComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal1 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal1 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal2 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal2 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal3 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal3 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal4 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal4 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal5 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal5 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal6 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal6 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.openModal7 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal7 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.v4openModal8 = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeModal8 = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.okButtonHandler = function (id) {
        if (this.optionSelected === '5') {
            this.modalService.close(id);
            this.modalService.open('custom-modal-2');
        }
    };
    StudentsDatabaseComponent.prototype.OpenFeesModal = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeFeesModal = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.OpenAddPaymentModal = function (id) {
        this.modalService.open(id);
    };
    StudentsDatabaseComponent.prototype.closeAddPaymentModal = function (id) {
        this.modalService.close(id);
    };
    StudentsDatabaseComponent.prototype.onFeesCustomAction = function () {
        this.modalService.open('Feesmodal');
    };
    StudentsDatabaseComponent.prototype.onChange = function (files) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            this.isValidImage = false;
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
            _this.isValidImage = true;
        };
    };
    StudentsDatabaseComponent.prototype.UpdateProfile = function () {
        this.modalService.open('Feesmodal');
    };
    StudentsDatabaseComponent.prototype.onsubmit = function () {
    };
    StudentsDatabaseComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    StudentsDatabaseComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    StudentsDatabaseComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    StudentsDatabaseComponent.prototype.penMyModal = function (event) {
        document.querySelector('#' + event).classList.add('md-show');
    };
    StudentsDatabaseComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    StudentsDatabaseComponent.prototype.openBasicModal = function (event) {
    };
    StudentsDatabaseComponent.prototype.closeBasicModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    // closetransfer(event) {
    //   ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    //   document.querySelector('#' + event).classList.remove('md-show');
    // }
    StudentsDatabaseComponent.prototype.onOptionsSelected = function (event) {
        console.log('===');
        // send selected value
        // this.seletedValue.emit('');
        document.querySelector('#' + event).classList.remove('md-show');
    };
    StudentsDatabaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-students-database',
            template: __webpack_require__(/*! ./students-database.component.html */ "./src/app/STUDENTS/students-database/students-database.component.html"),
            styles: [__webpack_require__(/*! ./students-database.component.scss */ "./src/app/STUDENTS/students-database/students-database.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_service_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            _service_student_service__WEBPACK_IMPORTED_MODULE_0__["StudentService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], StudentsDatabaseComponent);
    return StudentsDatabaseComponent;
}());



/***/ }),

/***/ "./src/app/STUDENTS/students-database/students-database.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/STUDENTS/students-database/students-database.module.ts ***!
  \************************************************************************/
/*! exports provided: StudentsDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsDatabaseModule", function() { return StudentsDatabaseModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _students_database_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students-database.component */ "./src/app/STUDENTS/students-database/students-database.component.ts");
/* harmony import */ var _students_database_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students-database-routing.module */ "./src/app/STUDENTS/students-database/students-database-routing.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var StudentsDatabaseModule = /** @class */ (function () {
    function StudentsDatabaseModule() {
    }
    StudentsDatabaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _students_database_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsDatabaseRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__["Ng2GoogleChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_10__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]
            ],
            declarations: [_students_database_component__WEBPACK_IMPORTED_MODULE_4__["StudentsDatabaseComponent"]]
        })
    ], StudentsDatabaseModule);
    return StudentsDatabaseModule;
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
//# sourceMappingURL=STUDENTS-students-database-students-database-module.js.map