(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OrganisationSetup-create-user-profile-create-user-profile-module"],{

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

/***/ "./src/app/OrganisationSetup/create-user-profile/create-user-profile-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/create-user-profile/create-user-profile-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateUserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserProfileRoutingModule", function() { return CreateUserProfileRoutingModule; });
/* harmony import */ var _create_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user-profile.component */ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _create_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["CreateUserProfileComponent"],
        data: {
            title: 'User profile',
            status: true
        }
    },
];
var CreateUserProfileRoutingModule = /** @class */ (function () {
    function CreateUserProfileRoutingModule() {
    }
    CreateUserProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CreateUserProfileRoutingModule);
    return CreateUserProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n <div class=\"row\">\r\n  <div class=\"col-sm-6\"> \r\n    <app-card title=\"AddAdmin\" [classHeader]=\"true\">\r\n      <div style=\"text-align: center\">\r\n      <h5>{{Headingtext}}</h5>\r\n      <br>\r\n      <input type=\"text\" name=\"Userprofiles\"  placeholder=\"Name\"\r\n      [(ngModel)]=\"profile.ProfileName\"  #Name=\"ngModel\" required>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <button type=\"button\" \r\n      id=\"Saveuserprofile\"\r\n      (click)=\"Saveuserprofile()\" type=\"submit\" \r\n      class=\"btn btn-primary\">{{Buttontext}}</button>\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n      <button type=\"button\" class=\"btn btn-danger\"\r\n       (click)= \"Cleardata()\">Cancel</button>\r\n      </div>\r\n      <hr>\r\n      <br>\r\n      <div style=\"text-align: center\">\r\n          <div>\r\n              <h5>Modules</h5>\r\n              <br>\r\n              </div>\r\n        <tree-root\r\n                #tree\r\n                [nodes]=\"defaultMappingArray\"\r\n                [options]=\"options\" (initialized)=\"OnTreeInit()\">\r\n                <ng-template #treeNodeTemplate let-node=\"node\" let-index=\"index\" >\r\n                  <input\r\n                  (activate)=\"check(node, !node.data.checked)\"\r\n                    type=\"checkbox\"\r\n                    [indeterminate]=\"node.data.indeterminate\"\r\n                    [checked]=\"node.data.checked\">\r\n                    {{ node.data.SubModuleName }}\r\n                </ng-template>\r\n              </tree-root>\r\n              <div>\r\n                  <button class=\"btn btn-success\" (click)=\"ExpandTree()\">Expand Tree</button>\r\n                &nbsp;\r\n                &nbsp;\r\n                &nbsp;\r\n                &nbsp;\r\n                <button class=\"btn btn-primary\" (click)=\"UpdateProfileModuleMappings()\">Save Changes</button>\r\n              </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6\"> \r\n    <app-card title=\"Profiles\" [classHeader]=\"true\">\r\n      <h5> Profiles </h5>\r\n      <hr>\r\n\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"userprofiles\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n       (editConfirm)=\"onSaveConfirm($event)\"\r\n       (createConfirm)=\"onCreateConfirm($event)\"\r\n       (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n </div>"

/***/ }),

/***/ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserProfileComponent", function() { return CreateUserProfileComponent; });
/* harmony import */ var _service_userprofilemodule_mapping_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/userprofilemodule-mapping.service */ "./src/app/service/userprofilemodule-mapping.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _createuserprofile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createuserprofile */ "./src/app/OrganisationSetup/create-user-profile/createuserprofile.ts");
/* harmony import */ var src_app_service_submodules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/submodules.service */ "./src/app/service/submodules.service.ts");
/* harmony import */ var src_app_shared_HelperClasses_ArrayHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/HelperClasses/ArrayHelper */ "./src/app/shared/HelperClasses/ArrayHelper.ts");
/* harmony import */ var src_app_service_userprofile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/userprofile.service */ "./src/app/service/userprofile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateUserProfileComponent = /** @class */ (function () {
    function CreateUserProfileComponent(userprofileService, spinner, toastr, subModuleService, userprofilemoduleMappingService) {
        var _this = this;
        this.userprofileService = userprofileService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.subModuleService = subModuleService;
        this.userprofilemoduleMappingService = userprofilemoduleMappingService;
        this.InstitutionList = Array();
        this.selectedInstitutions = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList = [];
        this.users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        this.data2 = [];
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Administrator';
        this.userprofiles = Array();
        this.profile = new _createuserprofile__WEBPACK_IMPORTED_MODULE_4__["UserProfile"]();
        this.data = Array();
        this.actionMapping = {
            mouse: {
                click: function (tree, node) { return _this.check(node, !node.data.checked); }
            }
        };
        this.options = {
            displayField: 'SubModuleName',
            // isExpandedField: 'expanded',
            idField: 'Id',
            useCheckbox: false,
            actionMapping: this.actionMapping
        };
        this.arr1 = [
            { Id: 1, SubModuleName: 'hello1', ModuleId: 0, checked: false },
            { Id: 2, SubModuleName: 'hello2', ModuleId: 0, checked: true },
            { Id: 3, SubModuleName: 'hello3', ModuleId: 1, checked: false },
            { Id: 4, SubModuleName: 'hello4', ModuleId: 0, checked: true },
            { Id: 5, SubModuleName: 'hello5', ModuleId: 4, checked: false },
            { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
            { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
            { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
        ];
        this.defaultMappingArray = [];
        this.submodules = Array();
        this.modules = Array();
        this.arrayHelper = new src_app_shared_HelperClasses_ArrayHelper__WEBPACK_IMPORTED_MODULE_6__["ArrayHelper"]();
        this.userProfilemapping = {
            UserProfileId: '',
            SubModuleIds: ''
        };
        this.userProfileMappings = Array();
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
                ProfileName: {
                    title: 'ProfileName',
                },
            },
        };
    }
    CreateUserProfileComponent.prototype.ngOnInit = function () {
        this.getUserprofileDetails();
        this.getSubModules();
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
    CreateUserProfileComponent.prototype.ngAfterViewInit = function () {
        this.ExpandTree();
    };
    CreateUserProfileComponent.prototype.ExpandTree = function () {
        this.tree.treeModel.expandAll();
    };
    CreateUserProfileComponent.prototype.getSubModules = function () {
        var _this = this;
        this.subModuleService.getSubmodulesDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.submodules = data.data[0];
                _this.ResetTreeNodes();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    CreateUserProfileComponent.prototype.ResetTreeNodes = function () {
        var arr3 = [];
        this.submodules.forEach(function (sm) {
            return arr3.push({
                Id: sm.Id, SubModuleName: sm.SubModuleName, ModuleId: sm.ModuleId, checked: false
            });
        });
        this.defaultMappingArray = this.arrayHelper.GetNestedChildren(arr3, 0);
        // var arr3 = this.arrayHelper.TreeToFlatArray(this.arr2, 0);
    };
    CreateUserProfileComponent.prototype.onSelect = function (event) {
        this.selectedTreeList = Object.entries(event.treeModel.selectedLeafNodeIds)
            .filter(function (_a) {
            var key = _a[0], value = _a[1];
            return (value === true);
        }).map(function (node) { return node[0]; });
        console.log('selectedTreeList -> ' + this.selectedTreeList);
    };
    CreateUserProfileComponent.prototype.onDeselect = function (event) {
        this.onSelect(event);
    };
    CreateUserProfileComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    CreateUserProfileComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    CreateUserProfileComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    CreateUserProfileComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    CreateUserProfileComponent.prototype.onSearch = function (evt) {
        console.log(evt.target.value);
    };
    CreateUserProfileComponent.prototype.onsubmit = function () {
    };
    CreateUserProfileComponent.prototype.getUserprofileDetails = function () {
        var _this = this;
        console.log("Thus user profile");
        this.spinner.show();
        this.userprofileService.getUserprofileDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from UserProfile!!');
                _this.userprofiles = data.data[0];
                console.log(_this.userprofiles);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    CreateUserProfileComponent.prototype.Saveuserprofile = function () {
        var _this = this;
        console.log("userprofile" + this.profile.Id);
        this.spinner.show();
        this.userprofileService.setUserprofileDetails(this.profile)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                console.log("New Profile Added");
                _this.getUserprofileDetails();
                _this.Cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    CreateUserProfileComponent.prototype.Cleardata = function () {
        this.profile = new _createuserprofile__WEBPACK_IMPORTED_MODULE_4__["UserProfile"]();
        this.ClearUserProfileMapping();
        this.userProfileMappings = new Array();
    };
    CreateUserProfileComponent.prototype.ClearUserProfileMapping = function () {
        this.userProfilemapping.UserProfileId = '';
        this.userProfilemapping.SubModuleIds = '';
    };
    CreateUserProfileComponent.prototype.updateUserprofile = function () {
        var _this = this;
        this.spinner.show();
        console.log("User profile" + this.profile.ProfileName);
        this.Buttontext = 'Update';
        this.userprofileService.setUserprofileDetails(this.profile)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.toastr.success('Successfully ' + 'Updated User Profile!', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    CreateUserProfileComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.ClearUserProfileMapping();
            this.ResetTreeNodes();
            this.profile = event.data;
            this.userProfilemapping.UserProfileId = this.profile.Id.toString();
            this.Buttontext = 'Update';
            this.Headingtext = 'Update ';
            this.GetUserProfileMappingByProfileId(this.userProfilemapping.UserProfileId);
        }
    };
    CreateUserProfileComponent.prototype.GetUserProfileMappingByProfileId = function (profileId) {
        var _this = this;
        this.spinner.show();
        this.userProfilemapping.UserProfileId = profileId;
        this.userprofilemoduleMappingService.getUserprofileDetail(this.userProfilemapping)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                console.log(data.data[0]);
                _this.userProfileMappings = data.data[0];
                _this.UpdateProfileModuleTree();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        });
    };
    CreateUserProfileComponent.prototype.UpdateProfileModuleTree = function () {
        // this.userProfileMappings.forEach(p => {
        //   if (p.ModuleId != 0 && p.checked === true) {
        //     if (this.userProfilemapping.SubModuleIds === '') {
        //       this.userProfilemapping.SubModuleIds = p.Id;
        //     }
        //     else {
        //       this.userProfilemapping.SubModuleIds = this.userProfilemapping.SubModuleIds + ', ' + p.Id;
        //     }
        //   }
        // });
    };
    CreateUserProfileComponent.prototype.UpdateProfileModuleMappings = function () {
        var _this = this;
        this.ClearUserProfileMapping();
        this.userProfilemapping.UserProfileId = this.profile.Id.toString();
        console.log("UserProfileId.");
        console.log(this.userProfilemapping.UserProfileId);
        var arr3 = this.arrayHelper.TreeToFlatArray(this.defaultMappingArray, 0);
        // console.log("While updating the mapping.");
        // console.log(arr3[0]);
        arr3.forEach(function (p) {
            if (p.ModuleId != 0 && p.checked === true) {
                if (_this.userProfilemapping.SubModuleIds === '') {
                    _this.userProfilemapping.SubModuleIds = p.Id;
                }
                else {
                    _this.userProfilemapping.SubModuleIds = _this.userProfilemapping.SubModuleIds + ', ' + p.Id;
                }
            }
        });
        console.log("SubModuleIds.");
        console.log(this.userProfilemapping.SubModuleIds);
        this.userprofilemoduleMappingService.setuserprofilemodulemapping(this.userProfilemapping)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.toastr.success('Successfully ' + 'Updated User Profile!', 'Success');
                _this.spinner.hide();
                _this.Cleardata();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    CreateUserProfileComponent.prototype.onDeleteConfirm = function (event) {
        console.log("Delete Event In Console");
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    CreateUserProfileComponent.prototype.onCreateConfirm = function (event) {
        console.log("Create Event In Console");
        console.log(event);
    };
    CreateUserProfileComponent.prototype.onSaveConfirm = function (event) {
        console.log("Edit Event In Console");
        console.log(event);
    };
    CreateUserProfileComponent.prototype.check = function (node, checked) {
        this.updateChildNodeCheckbox(node, checked);
        this.updateParentNodeCheckbox(node.realParent);
        // var arr3 = this.arrayHelper.TreeToFlatArray(this.arr2, 0);
        // console.log(arr3);
    };
    CreateUserProfileComponent.prototype.updateChildNodeCheckbox = function (node, checked) {
        var _this = this;
        console.log(node.data);
        node.data.checked = checked;
        if (node.children) {
            node.children.forEach(function (child) { return _this.updateChildNodeCheckbox(child, checked); });
        }
    };
    CreateUserProfileComponent.prototype.updateParentNodeCheckbox = function (node) {
        if (!node) {
            return;
        }
        var allChildrenChecked = true;
        var noChildChecked = true;
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (!child.data.checked || child.data.indeterminate) {
                allChildrenChecked = false;
            }
            if (child.data.checked) {
                noChildChecked = false;
            }
        }
        if (allChildrenChecked) {
            node.data.checked = true;
            node.data.indeterminate = false;
        }
        else if (noChildChecked) {
            node.data.checked = false;
            node.data.indeterminate = false;
        }
        else {
            node.data.checked = true;
            node.data.indeterminate = true;
        }
        this.updateParentNodeCheckbox(node.parent);
    };
    CreateUserProfileComponent.prototype.OnTreeInit = function () {
        console.log('OnTreeInit ->');
        this.tree.treeModel.expandAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tree'),
        __metadata("design:type", Object)
    ], CreateUserProfileComponent.prototype, "tree", void 0);
    CreateUserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-user-profile',
            template: __webpack_require__(/*! ./create-user-profile.component.html */ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.html"),
            styles: [__webpack_require__(/*! ./create-user-profile.component.scss */ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.scss")],
            providers: [src_app_service_userprofile_service__WEBPACK_IMPORTED_MODULE_7__["UserprofileService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_userprofile_service__WEBPACK_IMPORTED_MODULE_7__["UserprofileService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            src_app_service_submodules_service__WEBPACK_IMPORTED_MODULE_5__["SubmodulesService"],
            _service_userprofilemodule_mapping_service__WEBPACK_IMPORTED_MODULE_0__["userprofilemoduleMappingService"]])
    ], CreateUserProfileComponent);
    return CreateUserProfileComponent;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/create-user-profile/create-user-profile.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateUserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserProfileModule", function() { return CreateUserProfileModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user-profile.component */ "./src/app/OrganisationSetup/create-user-profile/create-user-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user-profile-routing.module */ "./src/app/OrganisationSetup/create-user-profile/create-user-profile-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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













var CreateUserProfileModule = /** @class */ (function () {
    function CreateUserProfileModule() {
    }
    CreateUserProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _create_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateUserProfileRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_9__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["AngularMultiSelectModule"], angular_tree_component__WEBPACK_IMPORTED_MODULE_12__["TreeModule"]
            ],
            declarations: [
                _create_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["CreateUserProfileComponent"],
            ]
        })
    ], CreateUserProfileModule);
    return CreateUserProfileModule;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/create-user-profile/createuserprofile.ts":
/*!****************************************************************************!*\
  !*** ./src/app/OrganisationSetup/create-user-profile/createuserprofile.ts ***!
  \****************************************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile() {
        this.Id = -1;
    }
    return UserProfile;
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

/***/ "./src/app/service/userprofile.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/userprofile.service.ts ***!
  \************************************************/
/*! exports provided: UserprofileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileService", function() { return UserprofileService; });
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


var UserprofileService = /** @class */ (function () {
    function UserprofileService(ServiceUitility) {
        this.ServiceUitility = ServiceUitility;
        this.route = '/userprofile';
        this._getUserprofiles = this.route + '/userprofileSelectAll';
        this._setUserprofile = this.route + '/SetUserprofile';
        this._setuserprofilemodulemapping = this.route + '/setuserprofilemodulemapping';
    }
    UserprofileService.prototype.getUserprofileDetails = function () {
        return this.ServiceUitility.postRequest(this._getUserprofiles, '');
    };
    UserprofileService.prototype.setUserprofileDetails = function (obj) {
        return this.ServiceUitility.postRequest(this._setUserprofile, obj);
    };
    UserprofileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], UserprofileService);
    return UserprofileService;
}());



/***/ }),

/***/ "./src/app/service/userprofilemodule-mapping.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/userprofilemodule-mapping.service.ts ***!
  \**************************************************************/
/*! exports provided: userprofilemoduleMappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userprofilemoduleMappingService", function() { return userprofilemoduleMappingService; });
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


var userprofilemoduleMappingService = /** @class */ (function () {
    function userprofilemoduleMappingService(ServiceUitility) {
        this.ServiceUitility = ServiceUitility;
        this.route = '/UserProfileModuleMapping';
        this._getUserprofiles = this.route + '/getuserprofilemodulemappings';
        this._getUserprofile = this.route + '/getuserprofilemodulemapping';
        this._setuserprofilemodulemapping = this.route + '/setuserprofilemodulemapping';
    }
    userprofilemoduleMappingService.prototype.getUserprofileDetails = function () {
        return this.ServiceUitility.postRequest(this._getUserprofiles, '');
    };
    userprofilemoduleMappingService.prototype.getUserprofileDetail = function (obj) {
        return this.ServiceUitility.postRequest(this._getUserprofile, obj);
    };
    userprofilemoduleMappingService.prototype.setuserprofilemodulemapping = function (user) {
        return this.ServiceUitility.postRequest(this._setuserprofilemodulemapping, user);
    };
    userprofilemoduleMappingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], userprofilemoduleMappingService);
    return userprofilemoduleMappingService;
}());



/***/ }),

/***/ "./src/app/shared/HelperClasses/ArrayHelper.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/HelperClasses/ArrayHelper.ts ***!
  \*****************************************************/
/*! exports provided: ArrayHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayHelper", function() { return ArrayHelper; });
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    ArrayHelper.prototype.GetNestedChildren = function (arr, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i].ModuleId == parent) {
                var children = this.GetNestedChildren(arr, arr[i].Id);
                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }
        return out;
    };
    ArrayHelper.prototype.TreeToFlatArray = function (arr, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i].ModuleId == parent) {
                if (arr[i].children) {
                    if (arr[i].children.length) {
                        var children = this.TreeToFlatArray(arr[i].children, arr[i].Id);
                        out.push(arr[i]);
                        children.forEach(function (c) { return out.push(c); });
                    }
                }
                else {
                    out.push(arr[i]);
                }
            }
        }
        return out;
    };
    return ArrayHelper;
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
//# sourceMappingURL=OrganisationSetup-create-user-profile-create-user-profile-module.js.map