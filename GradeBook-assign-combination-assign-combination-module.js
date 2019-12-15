(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-assign-combination-assign-combination-module"],{

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

/***/ "./src/app/GradeBook/assign-combination/assign-combination.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/GradeBook/assign-combination/assign-combination.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"col-md-12 col-lg-12\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"AssignCombination\">\r\n        <div class=\"mt-3\">\r\n          <font size=\"3\">Assign Combination to Student</font>\r\n        </div>\r\n        <div style=\"text-align: center\">\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <select class=\"browser-default custom-select\">\r\n                <option selected> Select Subject Combination </option>\r\n                <option *ngFor=\"let assess of subjectCombination\" value={{assess.Id}}>{{assess.Name}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <select class=\"browser-default custom-select\">\r\n                <option selected> Select Class </option>\r\n                <option *ngFor=\"let assess of newclasssection\" value={{assess.Id}}>{{assess.Name}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <table>\r\n            <thead>\r\n                <th>Student</th>\r\n                <th>Name</th>\r\n            </thead>\r\n            &nbsp;&nbsp;\r\n            <tbody>\r\n                <tr *ngFor=\"let assign of students\">\r\n                    <td>{{assign.Name}}</td>\r\n                    <td><ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"assign.IsSelected\"\r\n                      #Name=\"ngModel\" required></ui-switch></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n          <div id=\"log\"></div>\r\n          <button type=\"button\" class=\"btn btn-primary\" id=\"saveAssignCombination\" (click)=\"saveAssignCombination()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n          &nbsp;&nbsp;&nbsp;&nbsp;\r\n          <!-- <button type=\"button\" class=\"btn btn-danger\">Cancel</button> -->\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/GradeBook/assign-combination/assign-combination.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/GradeBook/assign-combination/assign-combination.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".s {\n  color: white;\n  font-size: 0px;\n  display: none; }\n"

/***/ }),

/***/ "./src/app/GradeBook/assign-combination/assign-combination.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/GradeBook/assign-combination/assign-combination.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssignCombinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCombinationComponent", function() { return AssignCombinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_Models_Assessment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/Models/Assessment */ "./src/app/shared/Models/Assessment.ts");
/* harmony import */ var src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_service_subject_combination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/subject-combination.service */ "./src/app/service/subject-combination.service.ts");
/* harmony import */ var src_app_service_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/student.service */ "./src/app/service/student.service.ts");
/* harmony import */ var src_app_STUDENTS_students_database_student__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/STUDENTS/students-database/student */ "./src/app/STUDENTS/students-database/student.ts");
/* harmony import */ var src_app_service_assign_combination_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/assign-combination.service */ "./src/app/service/assign-combination.service.ts");
/* harmony import */ var src_app_shared_Models_AssignCombination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/Models/AssignCombination */ "./src/app/shared/Models/AssignCombination.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssignCombinationComponent = /** @class */ (function () {
    function AssignCombinationComponent(spinner, studentAPI, toastr, _Combination, _ClassSectionMedium, AssignCombinationAPI) {
        this.spinner = spinner;
        this.studentAPI = studentAPI;
        this.toastr = toastr;
        this._Combination = _Combination;
        this._ClassSectionMedium = _ClassSectionMedium;
        this.AssignCombinationAPI = AssignCombinationAPI;
        this.Buttontext = 'Submit';
        this.Headingtext = 'ASsign Combination';
        this.Assessments = Array();
        this.assessment = new src_app_shared_Models_Assessment__WEBPACK_IMPORTED_MODULE_1__["Assessment"]();
        this.newclasssection = Array();
        this.subjectCombination = Array();
        this.students = Array();
        this.Student = new src_app_STUDENTS_students_database_student__WEBPACK_IMPORTED_MODULE_7__["Student"]();
        this.assignCombination = Array();
        this.Assigncombination = new src_app_shared_Models_AssignCombination__WEBPACK_IMPORTED_MODULE_9__["AssignCombination"]();
        this.student = {
            Id: '1',
        };
        this.arr1 = [
            { Id: 1, Name: 'Student', ModuleId: 0, checked: false },
            { Id: 2, Name: 'Student', ModuleId: 0, checked: true },
            { Id: 3, Name: 'hello3', ModuleId: 1, checked: false },
            { Id: 4, Name: 'hello4', ModuleId: 0, checked: true },
            { Id: 5, Name: 'hello5', ModuleId: 4, checked: false },
            { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
            { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
            { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
        ];
    }
    AssignCombinationComponent.prototype.ngOnInit = function () {
        this.getsubjectCombinations();
        this.getclassSectionMedium();
        this.getstudentDetails();
    };
    AssignCombinationComponent.prototype.getstudentDetails = function () {
        var _this = this;
        console.log('AssignTask');
        this.studentAPI.getStudentDetails(this.student)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Students');
                _this.students = data.data[0][0];
                console.log(_this.students);
            }
            else {
                console.log('Error');
            }
        });
    };
    AssignCombinationComponent.prototype.getsubjectCombinations = function () {
        var _this = this;
        this._Combination.getsubjectCombinations()
            .subscribe(function (data) {
            if (data.success) {
                _this.subjectCombination = data.data[0];
            }
        });
    };
    AssignCombinationComponent.prototype.getclassSectionMedium = function () {
        var _this = this;
        this._ClassSectionMedium.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.newclasssection = data.data[0];
            }
        });
    };
    AssignCombinationComponent.prototype.saveAssignCombination = function () {
        var _this = this;
        this.spinner.show();
        this.AssignCombinationAPI.setStudentSubjectcombination(this.Assigncombination)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.toastr.success('Successfully ' + 'Updated Subject', 'Success');
                _this.spinner.hide();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
            _this.spinner.hide();
        });
    };
    AssignCombinationComponent.prototype.cleardata = function () {
        this.Assigncombination = new src_app_shared_Models_AssignCombination__WEBPACK_IMPORTED_MODULE_9__["AssignCombination"];
    };
    AssignCombinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-combination',
            template: __webpack_require__(/*! ./assign-combination.component.html */ "./src/app/GradeBook/assign-combination/assign-combination.component.html"),
            styles: [__webpack_require__(/*! ./assign-combination.component.scss */ "./src/app/GradeBook/assign-combination/assign-combination.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], src_app_service_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_service_subject_combination_service__WEBPACK_IMPORTED_MODULE_5__["SubjectCombinationService"],
            src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_2__["ClasssectionService"], src_app_service_assign_combination_service__WEBPACK_IMPORTED_MODULE_8__["AssignCombinationService"]])
    ], AssignCombinationComponent);
    return AssignCombinationComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/assign-combination/assign-combination.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/GradeBook/assign-combination/assign-combination.module.ts ***!
  \***************************************************************************/
/*! exports provided: AssignCombinationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCombinationModule", function() { return AssignCombinationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assign_combination_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-combination.routing.module */ "./src/app/GradeBook/assign-combination/assign-combination.routing.module.ts");
/* harmony import */ var _assign_combination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign-combination.component */ "./src/app/GradeBook/assign-combination/assign-combination.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AssignCombinationModule = /** @class */ (function () {
    function AssignCombinationModule() {
    }
    AssignCombinationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _assign_combination_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignCombinationRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_assign_combination_component__WEBPACK_IMPORTED_MODULE_3__["AssignCombinationComponent"]]
        })
    ], AssignCombinationModule);
    return AssignCombinationModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/assign-combination/assign-combination.routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/GradeBook/assign-combination/assign-combination.routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AssignCombinationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCombinationRoutingModule", function() { return AssignCombinationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assign_combination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-combination.component */ "./src/app/GradeBook/assign-combination/assign-combination.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _assign_combination_component__WEBPACK_IMPORTED_MODULE_2__["AssignCombinationComponent"],
        data: {
            title: 'Assign Combination',
            status: true
        },
    },
];
var AssignCombinationRoutingModule = /** @class */ (function () {
    function AssignCombinationRoutingModule() {
    }
    AssignCombinationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AssignCombinationRoutingModule);
    return AssignCombinationRoutingModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/students-database/student.ts":
/*!*******************************************************!*\
  !*** ./src/app/STUDENTS/students-database/student.ts ***!
  \*******************************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
        this.Id = -1;
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/service/assign-combination.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/assign-combination.service.ts ***!
  \*******************************************************/
/*! exports provided: AssignCombinationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCombinationService", function() { return AssignCombinationService; });
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


var AssignCombinationService = /** @class */ (function () {
    function AssignCombinationService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/AssignCombination';
        this._setStudentSubjectCombination = this.route + '/setStudentSubjectCombination';
    }
    AssignCombinationService.prototype.setStudentSubjectcombination = function (obj) {
        return this.serviceUitility.postRequest(this._setStudentSubjectCombination, obj);
    };
    AssignCombinationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], AssignCombinationService);
    return AssignCombinationService;
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

/***/ "./src/app/shared/Models/AssignCombination.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/Models/AssignCombination.ts ***!
  \****************************************************/
/*! exports provided: AssignCombination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCombination", function() { return AssignCombination; });
var AssignCombination = /** @class */ (function () {
    function AssignCombination() {
        this.SubjectSubjectCombinationMappingId = -1;
    }
    return AssignCombination;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-assign-combination-assign-combination-module.js.map