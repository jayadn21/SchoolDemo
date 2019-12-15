(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GradeBook-subject-combination-mapp-subject-combination-mapp-module"],{

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

/***/ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"col-md-12 col-lg-12\">\r\n  <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n    <h5>Grade Book</h5>\r\n    <hr>\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assign Marks</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/consolidate-assessment/']\"\r\n          href=\"javascript:\">Consolidate Statements</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indicative Grade</a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-primary\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light\" type=\"button\">Assessments</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/assessment/']\"\r\n        href=\"javascript:\">Assessments</a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> B </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> C </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> D </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> E </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/GradeBook/subject-page/']\">Subject Setup</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <div ngbDropdown class=\"dropdown-info\">\r\n      <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Assessment\r\n        Setup</button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"> Assessment </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"\r\n          [routerLink]=\"['/GradeBook/assessment-head/']\"> Assessment Head </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/grades/']\"\r\n        href=\"javascript:\"> Grades </a>\r\n        <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/GradeBook/remark/']\"\r\n        href=\"javascript:\"> Remark </a>\r\n      </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n  </app-card>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5>Add New Subject Combination</h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Combination Name\"\r\n              [(ngModel)]=\"subjectCombinationMapp.SubjectCombinationId\" #SubjectCombinationId=\"ngModel\" required>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <br>&nbsp;&nbsp;&nbsp;\r\n          <table>\r\n            <thead>\r\n                <th>Subject</th>\r\n                <th>Select</th>\r\n            </thead>\r\n            &nbsp;&nbsp;\r\n            <tbody>\r\n                <tr *ngFor=\"let sp of subjectPageList\">\r\n                    <td>{{sp.Name}}</td>\r\n                    <td><ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"sp.IsSelected\"\r\n                      #Name=\"ngModel\" required></ui-switch></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n          <div id=\"log\"></div>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveSubjectCombinationMapp\" (click)=\"saveSubjectCombinationMapp()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"cleardata()\">Cancel</button> -->\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"SubjectCombinationMapping\">\r\n      <div class=\"mt-3\">\r\n        <h5> Subject Combination Mapping </h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"subjectCombinationMapp\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SubjectCombinationMappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationMappComponent", function() { return SubjectCombinationMappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_Models_SubjectCombinationMapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Models/SubjectCombinationMapping */ "./src/app/shared/Models/SubjectCombinationMapping.ts");
/* harmony import */ var src_app_service_subject_combination_mapp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/subject-combination-mapp.service */ "./src/app/service/subject-combination-mapp.service.ts");
/* harmony import */ var src_app_shared_Models_SubjectPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Models/SubjectPage */ "./src/app/shared/Models/SubjectPage.ts");
/* harmony import */ var src_app_service_subject_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/subject-page.service */ "./src/app/service/subject-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubjectCombinationMappComponent = /** @class */ (function () {
    function SubjectCombinationMappComponent(spinner, subjectCombMappAPI, toastr, subjectpageAPI) {
        this.spinner = spinner;
        this.subjectCombMappAPI = subjectCombMappAPI;
        this.toastr = toastr;
        this.subjectpageAPI = subjectpageAPI;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Add Subject Combination';
        this.subjectCombinationMapp = Array();
        this.subjectCombMapping = new src_app_shared_Models_SubjectCombinationMapping__WEBPACK_IMPORTED_MODULE_3__["SubjectCombinationMapping"]();
        this.subjectPageList = Array();
        this.SubjectPage = new src_app_shared_Models_SubjectPage__WEBPACK_IMPORTED_MODULE_5__["SubjectPage"]();
        this.arr1 = [
            { Id: 1, Name: 'SubjectPage', ModuleId: 0, checked: false },
            { Id: 2, Name: 'SubjectPage', ModuleId: 0, checked: true },
            { Id: 3, Name: 'hello3', ModuleId: 1, checked: false },
            { Id: 4, Name: 'hello4', ModuleId: 0, checked: true },
            { Id: 5, Name: 'hello5', ModuleId: 4, checked: false },
            { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
            { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
            { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
        ];
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
                // SubjectIds: {
                //   title: 'Subject Ids',
                // },
                SubjectCombinationId: {
                    title: 'SubjectCombinationId',
                },
            },
        };
    }
    SubjectCombinationMappComponent.prototype.ngOnInit = function () {
        this.getSubjectCombinationMappings();
        this.getSubjects();
    };
    SubjectCombinationMappComponent.prototype.getSubjectCombinationMappings = function () {
        var _this = this;
        console.log('Subject Combination Mapp');
        // this.spinner.show();
        this.subjectCombMappAPI.getSubjectcombinationMappings()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.subjectCombinationMapp = data.data[0];
                console.log(_this.subjectCombinationMapp);
                // this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectCombinationMappComponent.prototype.getSubjects = function () {
        var _this = this;
        this.spinner.show();
        console.log('Success');
        this.subjectpageAPI.getSubjects()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.subjectPageList = data.data[0];
                console.log(_this.subjectPageList);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectCombinationMappComponent.prototype.saveSubjectCombinationMapp = function () {
        var _this = this;
        this.spinner.show();
        console.log('Subject Combination Mapp');
        this.subjectCombMappAPI.setSubjectcombinationMapping(this.subjectCombMapping)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getSubjectCombinationMappings();
                console.log(_this.subjectCombinationMapp);
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    SubjectCombinationMappComponent.prototype.updatesubjectCombMapp = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this.subjectCombMappAPI.setSubjectcombinationMapping(this.subjectCombMapping)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.toastr.success('Successfully ' + 'Updated Subject', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectCombinationMappComponent.prototype.cleardata = function () {
        this.subjectCombMapping = new src_app_shared_Models_SubjectCombinationMapping__WEBPACK_IMPORTED_MODULE_3__["SubjectCombinationMapping"];
    };
    SubjectCombinationMappComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.subjectCombMapping = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Subject Combination';
        }
    };
    SubjectCombinationMappComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SubjectCombinationMappComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    SubjectCombinationMappComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    SubjectCombinationMappComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-combination-mapp',
            template: __webpack_require__(/*! ./subject-combination-mapp.component.html */ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.html"),
            styles: [__webpack_require__(/*! ./subject-combination-mapp.component.scss */ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], src_app_service_subject_combination_mapp_service__WEBPACK_IMPORTED_MODULE_4__["SubjectCombinationMappService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], src_app_service_subject_page_service__WEBPACK_IMPORTED_MODULE_6__["SubjectPageService"]])
    ], SubjectCombinationMappComponent);
    return SubjectCombinationMappComponent;
}());



/***/ }),

/***/ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SubjectCombinationMappModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationMappModule", function() { return SubjectCombinationMappModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subject_combination_mapp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject-combination-mapp.component */ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.ts");
/* harmony import */ var _subject_combination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject-combination.routing.module */ "./src/app/GradeBook/subject-combination-mapp/subject-combination.routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SubjectCombinationMappModule = /** @class */ (function () {
    function SubjectCombinationMappModule() {
    }
    SubjectCombinationMappModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _subject_combination_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubjectCombinationMappRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_subject_combination_mapp_component__WEBPACK_IMPORTED_MODULE_2__["SubjectCombinationMappComponent"]]
        })
    ], SubjectCombinationMappModule);
    return SubjectCombinationMappModule;
}());



/***/ }),

/***/ "./src/app/GradeBook/subject-combination-mapp/subject-combination.routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/GradeBook/subject-combination-mapp/subject-combination.routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SubjectCombinationMappRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationMappRoutingModule", function() { return SubjectCombinationMappRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subject_combination_mapp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject-combination-mapp.component */ "./src/app/GradeBook/subject-combination-mapp/subject-combination-mapp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _subject_combination_mapp_component__WEBPACK_IMPORTED_MODULE_2__["SubjectCombinationMappComponent"],
        data: {
            title: 'Grade Book',
            status: true
        },
    },
];
var SubjectCombinationMappRoutingModule = /** @class */ (function () {
    function SubjectCombinationMappRoutingModule() {
    }
    SubjectCombinationMappRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SubjectCombinationMappRoutingModule);
    return SubjectCombinationMappRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/subject-combination-mapp.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/subject-combination-mapp.service.ts ***!
  \*************************************************************/
/*! exports provided: SubjectCombinationMappService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationMappService", function() { return SubjectCombinationMappService; });
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


var SubjectCombinationMappService = /** @class */ (function () {
    function SubjectCombinationMappService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/SubjectCombinationMapp';
        this._getSubjectCombinationMapps = this.route + '/getSubjectCombinationMappings';
        this._getSubjectCombinationMapp = this.route + '/getSubjectCombinationMapping';
        this._setSubjectCombinationMapp = this.route + '/setSubjectCombinationMapping';
        this._delSubjectCombinationMapp = this.route + '/delSubjectCombinationMapping';
    }
    SubjectCombinationMappService.prototype.getSubjectcombinationMappings = function () {
        return this.serviceUitility.postRequest(this._getSubjectCombinationMapps, '');
    };
    SubjectCombinationMappService.prototype.getSubjectcombinationMapping = function () {
        return this.serviceUitility.postRequest(this._getSubjectCombinationMapp, '');
    };
    SubjectCombinationMappService.prototype.setSubjectcombinationMapping = function (obj) {
        return this.serviceUitility.postRequest(this._setSubjectCombinationMapp, obj);
    };
    SubjectCombinationMappService.prototype.delSubjectcombinationMapping = function (obj) {
        return this.serviceUitility.postRequest(this._delSubjectCombinationMapp, obj);
    };
    SubjectCombinationMappService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], SubjectCombinationMappService);
    return SubjectCombinationMappService;
}());



/***/ }),

/***/ "./src/app/shared/Models/SubjectCombinationMapping.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/Models/SubjectCombinationMapping.ts ***!
  \************************************************************/
/*! exports provided: SubjectCombinationMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationMapping", function() { return SubjectCombinationMapping; });
var SubjectCombinationMapping = /** @class */ (function () {
    function SubjectCombinationMapping() {
        this.SubjectCombinationId = -1;
    }
    return SubjectCombinationMapping;
}());



/***/ })

}]);
//# sourceMappingURL=GradeBook-subject-combination-mapp-subject-combination-mapp-module.js.map