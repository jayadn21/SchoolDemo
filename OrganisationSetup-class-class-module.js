(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OrganisationSetup-class-class-module"],{

/***/ "./src/app/OrganisationSetup/class/class-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/OrganisationSetup/class/class-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ClassRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoutingModule", function() { return ClassRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class.component */ "./src/app/OrganisationSetup/class/class.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _class_component__WEBPACK_IMPORTED_MODULE_2__["ClassComponent"],
        data: {
            title: 'class',
            status: true
        }
    },
];
var ClassRoutingModule = /** @class */ (function () {
    function ClassRoutingModule() {
    }
    ClassRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ClassRoutingModule);
    return ClassRoutingModule;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/class/class.component.html":
/*!**************************************************************!*\
  !*** ./src/app/OrganisationSetup/class/class.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <div>\r\n            <button class=\"btn btn-success\" (click)=\"OpenClassModal('custom-modal-2')\">Add new</button>\r\n          </div>\r\n          <jw-modal id=\"custom-modal-2\">\r\n            <div class=\"app-modal-header\">\r\n              <div style=\"text-align:center;\">\r\n                <h4 class=\"modal-title\"><b>{{modalButtonTextClass}}</b>\r\n                  <button type=\"button\" class=\"close basic-close\"\r\n                    (click)=\"closeModal1('custom-modal-2');\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button></h4>\r\n                <hr>\r\n\r\n              </div>\r\n              <div style=\"text-align: center\">\r\n                  <input type=\"text\"  name=\"ClassName\" placeholder=\"Name\"\r\n                  [(ngModel)]=\"class.Name\"  #Name=\"ngModel\" required>\r\n                \r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n                  \r\n                  <button class=\"text-left\" id=\"Saveclass\"\r\n                  (click)=\"Saveclass('custom-modal-2')\" type=\"submit\" \r\n                  class=\"btn btn-primary\">{{modalButtonText}}</button>\r\n\r\n                  \r\n                  &nbsp;\r\n                  &nbsp;\r\n                  <button  type=\"button\" id=\"closenewclass\" class=\"btn btn-danger\"\r\n                      (click)=\"closeModal1('custom-modal-2')\" >Cancel</button>\r\n                    \r\n                  </div>\r\n            </div>\r\n              </jw-modal>\r\n        \r\n      <br>\r\n      <app-card title=\"Class\" [classHeader]=\"true\">\r\n          <h5>Class</h5>\r\n          <hr>\r\n          <ng2-smart-table [settings]=\"settings\" [source]=\"classes\" \r\n           (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n            (editConfirm)=\"onSaveConfirm($event)\" \r\n            (createConfirm)=\"onCreateConfirm($event)\"\r\n            (custom)=\"onsaveClassCustomAction($event)\">\r\n          </ng2-smart-table>\r\n      </app-card>\r\n    </div>\r\n\r\n      <!-- Section card starts -->\r\n      <div class=\"col-sm-4\">\r\n          <div>\r\n              <button class=\"btn btn-success\" (click)=\"OpenClassModal1('custom-modal-3')\">Add new</button>\r\n            </div>\r\n            <jw-modal id=\"custom-modal-3\">\r\n              <div class=\"app-modal-header\">\r\n                <div style=\"text-align:center;\">\r\n                  <h4 class=\"modal-title\"><b>{{modalButtonTextSection}}</b>\r\n                    <button type=\"button\" class=\"close basic-close\"\r\n                      (click)=\"closeModal2('custom-modal-3');\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button></h4>\r\n                  <hr>\r\n  \r\n                </div>\r\n                <div style=\"text-align: center\">\r\n                    <input type=\"text\"  name=\"SectionName\" placeholder=\"Name\"\r\n                    [(ngModel)]=\"section.SectionName\"  #Name=\"ngModel\" required>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    \r\n                    <button class=\"text-left\" id=\"Savesection\"\r\n                    (click)=\"Savesection('custom-modal-3')\" type=\"submit\" \r\n                    class=\"btn btn-primary\">{{modalButtonText}}</button>\r\n\r\n                    \r\n                    &nbsp;\r\n                    &nbsp;\r\n                    <button  type=\"button\" id=\"closenewsection\" class=\"btn btn-danger\"\r\n                        (click)=\"closeModal2('custom-modal-3')\" >Cancel</button>\r\n                      \r\n                </div>\r\n              </div>\r\n                </jw-modal>\r\n                <br>\r\n        <app-card title=\"SectionName\" [classHeader]=\"true\">\r\n            <h5>Section</h5>\r\n            <hr>\r\n            <ng2-smart-table [settings]=\"Sectionsettings\" [source]=\"sections\"\r\n              (deleteConfirm)=\"onDeleteConfirmSection($event)\" \r\n              (editConfirm)=\"onSaveConfirmSection($event)\"\r\n              (createConfirm)=\"onCreateConfirmSection($event)\"\r\n              (custom)=\"onsectionCustomAction($event)\">\r\n            </ng2-smart-table>\r\n        </app-card>\r\n      </div>\r\n      <!-- Section card ends --> \r\n      \r\n        <div class=\"col-sm-4\">\r\n            <div>\r\n                <button class=\"btn btn-success\" (click)=\"OpenClassModal2('custom-modal-4')\">Add new</button>\r\n              </div>\r\n              <jw-modal id=\"custom-modal-4\">\r\n                <div class=\"app-modal-header\">\r\n                  <div style=\"text-align:center;\">\r\n                    <h4 class=\"modal-title\"><b>{{modalButtonTextMedium}}</b>\r\n                      <button type=\"button\" class=\"close basic-close\"\r\n                        (click)=\"closeModal3('custom-modal-4');\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button></h4>\r\n                    <hr>\r\n    \r\n                  </div>\r\n                  <div style=\"text-align: center\">\r\n                      <input type=\"text\"  name=\"MediumName\" placeholder=\"Name\"\r\n                      [(ngModel)]=\"medium.MediumName\"  #Name=\"ngModel\" required>\r\n                      <br>\r\n                      <br>\r\n                      <br>\r\n                      \r\n                      <button class=\"text-left\" id=\"Savemedium\"\r\n                      (click)=\"Savemedium('custom-modal-4')\" type=\"submit\" \r\n                      class=\"btn btn-primary\">{{modalButtonText}}</button>\r\n\r\n                      \r\n\r\n                        &nbsp;\r\n                        &nbsp;\r\n                      <button  type=\"button\" id=\"closemedium\" class=\"btn btn-danger\"\r\n                          (click)=\"closeModal3('custom-modal-4')\" >Cancel</button>\r\n                        \r\n                      </div>\r\n                </div>\r\n                  </jw-modal>\r\n           <br>\r\n          <app-card title=\"MediumName\" [classHeader]=\"true\">\r\n              <h5>Medium</h5>\r\n              <hr>\r\n            <div>\r\n              <ng2-smart-table [settings]=\"Mediumsettings\" [source]=\"mediums\"\r\n                (deleteConfirm)=\"onDeleteConfirmMedium($event)\" \r\n                (editConfirm)=\"onSaveConfirmMedium($event)\"\r\n                (createConfirm)=\"onCreateConfirmMedium($event)\"\r\n                (custom)=\"onmediumCustomAction($event)\">\r\n              </ng2-smart-table>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n    </div>\r\n  \r\n\r\n\r\n<div>\r\n    \r\n    <div>\r\n        <button class=\"btn btn-success\" (click)=\"OpenClassModal3('custom-modal-5')\">Add new</button>\r\n      </div>\r\n      <jw-modal id=\"custom-modal-5\">\r\n        <div class=\"app-modal-header\">\r\n          <div style=\"text-align:center;\">\r\n            <h4 class=\"modal-title\"><b>{{modalButtonTextClassSection}}</b>\r\n              <button type=\"button\" class=\"close basic-close\"\r\n                (click)=\"closeModal4('custom-modal-5');\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button></h4>\r\n            <hr>\r\n\r\n          </div>\r\n          <div style=\"text-align: center\">\r\n                \r\n\r\n              <select name=\"select\"\r\n                       [(ngModel)]=\"classsection.ClassId\" #Name=\"ngModel\" required>  \r\n                          <option value=\"0\">--Select Class--</option>\r\n                          <option *ngFor=\"let cls of classes\" value={{cls.Id}}>{{cls.Name}} </option>\r\n                  </select>\r\n                  &nbsp;\r\n                  &nbsp;\r\n                  <select name=\"select\"\r\n                  [(ngModel)]=\"classsection.SectionId\" #Name=\"ngModel\" required>  \r\n                      <option value=\"0\">--Select Section--</option>\r\n                      <option *ngFor=\"let sec of sections\"  value={{sec.Id}}>{{sec.SectionName}} </option>  \r\n              </select>\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    <select name=\"select\"\r\n                    [(ngModel)]=\"classsection.MediumId\" #Name=\"ngModel\" required>  \r\n                        <option value=\"0\">--Select Medium--</option>\r\n                        <option *ngFor=\"let med of mediums\" value={{med.Id}}>{{med.MediumName}} </option>  \r\n                </select>\r\n                    <br>\r\n                    <br>\r\n                      \r\n                      <input type=\"text\"  name=\"ClasssectionName\" placeholder=\"Name\"\r\n                      [(ngModel)]=\"classsection.Name\"  #Name=\"ngModel\" required>\r\n                      \r\n                      &nbsp;\r\n                      &nbsp;\r\n              \r\n              <button class=\"text-left\" id=\"Savemedium\"\r\n              (click)=\"SaveClassSection('custom-modal-5')\" type=\"submit\" \r\n              class=\"btn btn-primary\">{{modalButtonText}}</button>\r\n\r\n              \r\n\r\n                &nbsp;\r\n                &nbsp;\r\n              <button  type=\"button\" id=\"closemedium\" class=\"btn btn-danger\"\r\n                  (click)=\"closeModal4('custom-modal-5')\" >Cancel</button>\r\n                \r\n              </div>\r\n        </div>\r\n          </jw-modal>\r\n\r\n  \r\n        </div>\r\n\r\n       \r\n        <br>\r\n        \r\n\r\n<div class=\"row\">\r\n<div class=\"col-sm-4\">\r\n    <app-card title=\"ClassSection\" [classHeader]=\"true\">\r\n        <h5>Class Section</h5>\r\n        <hr>\r\n      <div>\r\n        <ng2-smart-table [settings]=\"settingsGrid \" [source]=\"classessections\"\r\n          (deleteConfirm)=\"onDeleteConfirmClassSection($event)\" \r\n          (editConfirm)=\"onSaveConfirmClassSection($event)\"\r\n          (createConfirm)=\"onCreateConfirmClasssection($event)\"\r\n          (custom)=\"onCustomAction($event)\">\r\n        </ng2-smart-table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/OrganisationSetup/class/class.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/OrganisationSetup/class/class.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/OrganisationSetup/class/class.component.ts":
/*!************************************************************!*\
  !*** ./src/app/OrganisationSetup/class/class.component.ts ***!
  \************************************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var _service_classsection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var _service_medium_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/medium.service */ "./src/app/service/medium.service.ts");
/* harmony import */ var _shared_Models_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Models/section */ "./src/app/shared/Models/section.ts");
/* harmony import */ var _service_section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/section.service */ "./src/app/service/section.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _shared_Models_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Models/class */ "./src/app/shared/Models/class.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_Models_medium__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/Models/medium */ "./src/app/shared/Models/medium.ts");
/* harmony import */ var _shared_Models_classsection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/Models/classsection */ "./src/app/shared/Models/classsection.ts");
/* harmony import */ var src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/modal.service */ "./src/app/service/modal.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ClassComponent = /** @class */ (function () {
    function ClassComponent(_classService, _sectionService, _saveclasssection, _savenewclasssection, _mediumService, _classessectionService, modalService, _savesection, _savemedium, toastr, spinner) {
        this._classService = _classService;
        this._sectionService = _sectionService;
        this._saveclasssection = _saveclasssection;
        this._savenewclasssection = _savenewclasssection;
        this._mediumService = _mediumService;
        this._classessectionService = _classessectionService;
        this.modalService = modalService;
        this._savesection = _savesection;
        this._savemedium = _savemedium;
        this.toastr = toastr;
        this.spinner = spinner;
        this.myForm = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"];
        this.modalName = 'Add New';
        this.modalButtonText = 'Add New';
        this.modalButtonTextClass = 'Add New Class';
        this.modalButtonTextSection = 'Add New Section';
        this.modalButtonTextMedium = 'Add New Medium';
        this.modalButtonTextClassSection = 'Add New Class, Section & Medium';
        this.classes = Array();
        this.sections = Array();
        this.mediums = Array();
        this.classessections = Array();
        this.section = new _shared_Models_section__WEBPACK_IMPORTED_MODULE_2__["Section"]();
        this.class = new _shared_Models_class__WEBPACK_IMPORTED_MODULE_6__["Class"]();
        this.medium = new _shared_Models_medium__WEBPACK_IMPORTED_MODULE_8__["Medium"]();
        this.classsection = new _shared_Models_classsection__WEBPACK_IMPORTED_MODULE_9__["Classsection"]();
        this.newclasssection = new _shared_Models_classsection__WEBPACK_IMPORTED_MODULE_9__["Classsection"]();
        this.Sectionsettings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa fa-trash"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            edit: {
                editButtonContent: '<i class= "fa fa-edit"></i>',
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
                    { name: 'editsection', title: '<i class="fa fa-edit"></i>' },
                ],
            },
            columns: {
                //  Id: {
                //    title: 'Id',
                //  },
                SectionName: {
                    title: 'Section',
                },
            },
        };
        this.settings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa fa-trash"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            edit: {
                editButtonContent: '<i class= "fa fa-edit"></i>',
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
                    { name: 'editclass', title: '<i class="fa fa-edit"></i>' },
                ],
            },
            columns: {
                // Id: {
                //   title: 'Id',
                // },
                Name: {
                    title: 'Class',
                },
            },
        };
        this.Mediumsettings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa fa-trash"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            edit: {
                editButtonContent: '<i class= "fa fa-edit"></i>',
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
                    { name: 'editmedium', title: '<i class="fa fa-edit"></i>' },
                ],
            },
            columns: {
                // Id: {
                //   title: 'Id',
                // },
                MediumName: {
                    title: 'Medium',
                },
            },
        };
        this.settingsGrid = {
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
                Name: {
                    title: 'Class Section',
                },
            },
        };
    }
    ClassComponent.prototype.ngOnInit = function () {
        // this.bodyText = 'This text can be updated in modal 1';
        this.getClassesDetails();
        this.getSectionDetails();
        this.getMediumsDetails();
        this.getClasssectionDetails();
    };
    ClassComponent.prototype.OpenClassModal = function (id) {
        this.ClearclassModalData();
        this.modalService.open(id);
        this.modalButtonTextClass = 'Add New Class';
        this.modalButtonText = 'Add New';
    };
    ClassComponent.prototype.closeModal1 = function (id) {
        this.modalService.close(id);
    };
    ClassComponent.prototype.OpenClassModal1 = function (id) {
        this.ClearsectionModalData();
        this.modalService.open(id);
        this.modalButtonTextSection = 'Add New Section';
        this.modalButtonText = 'Add New';
    };
    ClassComponent.prototype.closeModal2 = function (id) {
        this.modalService.close(id);
    };
    ClassComponent.prototype.OpenClassModal2 = function (id) {
        this.ClearmediumModalData();
        this.modalService.open(id);
        this.modalButtonTextMedium = 'Add New Medium';
        this.modalButtonText = 'Add New';
    };
    ClassComponent.prototype.closeModal3 = function (id) {
        this.modalService.close(id);
    };
    ClassComponent.prototype.OpenClassModal3 = function (id) {
        this.ClearModalData();
        this.modalService.open(id);
        this.modalButtonText = 'Add New';
        this.modalButtonTextClassSection = 'Add New Class, Section & Medium';
    };
    ClassComponent.prototype.closeModal4 = function (id) {
        this.modalService.close(id);
    };
    ClassComponent.prototype.onsubmit = function () {
    };
    ClassComponent.prototype.getClassesDetails = function () {
        var _this = this;
        console.log();
        this.spinner.show();
        this._classService.getClassesDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.classes = data.data[0];
                console.log(_this.classes);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    ClassComponent.prototype.onSaveConfirm = function (event) {
        console.log(event.newData.Name);
        this.class = event.newData;
        this.UpdateClass();
        event.confirm.resolve(event.newData);
    };
    ClassComponent.prototype.UpdateClass = function () {
        console.log("class - " + this.class.Name);
        this._classService.setClassesDetails(this.class)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
            }
        });
    };
    ClassComponent.prototype.onCreateConfirm = function (event) {
        console.log("class - " + event.newData.Name);
        event.newData.Id = '-1';
        this._classService.setClassesDetails(event.newData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                event.confirm.resolve(event.newData);
            }
        });
    };
    //Class section
    ClassComponent.prototype.getClasssectionDetails = function () {
        var _this = this;
        console.log();
        this.spinner.show();
        this._classessectionService.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.classessections = data.data[0];
                console.log(_this.classessections);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    ClassComponent.prototype.onSaveConfirmClassSection = function (event) {
        console.log(event.newData.Name);
        this.classsection = event.newData;
        this.UpdateClass();
        event.confirm.resolve(event.newData);
    };
    ClassComponent.prototype.UpdateClassSection = function () {
        console.log("classsection - " + this.classsection.Name);
        this._classessectionService.setClasssectionDetails(this.classsection)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
            }
        });
    };
    ClassComponent.prototype.onCreateConfirmClasssection = function (event) {
        console.log("class - " + event.newData.Name);
        event.newData.Id = '-1';
        this._classessectionService.setClasssectionDetails(event.newData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                event.confirm.resolve(event.newData);
            }
        });
    };
    //Medium starts//
    ClassComponent.prototype.getMediumsDetails = function () {
        var _this = this;
        console.log();
        this.spinner.show();
        this._mediumService.getMediumsDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.mediums = data.data[0];
                console.log(_this.mediums);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    ClassComponent.prototype.onSaveConfirmMedium = function (event) {
        console.log(event.newData.MediumName);
        this.medium = event.newData;
        this.UpdateMedium();
        event.confirm.resolve(event.newData);
    };
    ClassComponent.prototype.UpdateMedium = function () {
        console.log("medium - " + this.medium.MediumName);
        this._mediumService.setMediumDetails(this.medium)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
            }
        });
    };
    ClassComponent.prototype.onCreateConfirmMedium = function (event) {
        console.log("medium - " + event.newData.MediumName);
        event.newData.Id = '-1';
        this._mediumService.setMediumDetails(event.newData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                event.confirm.resolve(event.newData);
            }
        });
    };
    //Section starts//
    ClassComponent.prototype.getSectionDetails = function () {
        var _this = this;
        console.log();
        this.spinner.show();
        this._sectionService.getSectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                _this.sections = data.data[0];
                console.log(_this.sections);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, "Opps!");
            }
        });
    };
    ClassComponent.prototype.onSaveConfirmSection = function (event) {
        console.log(event.newData.SectionName);
        this.section = event.newData;
        this.UpdateSection();
        event.confirm.resolve(event.newData);
    };
    ClassComponent.prototype.UpdateSection = function () {
        console.log("section - " + this.section.SectionName);
        this._sectionService.setSectionDetails(this.section)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
            }
        });
    };
    ClassComponent.prototype.onCreateConfirmSection = function (event) {
        console.log("section - " + event.newData.SectionName);
        event.newData.Id = '-1';
        this._sectionService.setSectionDetails(event.newData)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success!!');
                event.confirm.resolve(event.newData);
            }
        });
    };
    ClassComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.classsection = event.data;
            this.modalService.open('custom-modal-5');
            this.modalButtonText = 'Update';
            this.modalButtonTextClassSection = 'Update Class, Section & Mediumm';
        }
    };
    ClassComponent.prototype.SaveClassSection = function (event) {
        var _this = this;
        //this.classsection.Id = -1;
        console.log("classsection-" + this.classsection.Id);
        this.spinner.show();
        this._saveclasssection.setClasssectionDetails(this.classsection)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('Successfully ' + _this.modalButtonTextClassSection + '!', 'Success');
                console.log("New Class section Added");
                _this.getClasssectionDetails();
                _this.ClearModalData();
                _this.closeModal4(event);
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    ClassComponent.prototype.ClearModalData = function () {
        this.modalName = 'Add New ';
        this.classsection = new _shared_Models_classsection__WEBPACK_IMPORTED_MODULE_9__["Classsection"]();
    };
    ClassComponent.prototype.onsaveClassCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editclass') {
            this.class = event.data;
            this.modalService.open('custom-modal-2');
            this.modalButtonTextClass = 'Update Class';
            this.modalButtonText = 'Update';
        }
    };
    ClassComponent.prototype.Saveclass = function (event) {
        var _this = this;
        // this.class.Id = -1;
        console.log("class-" + this.class.Id);
        this.spinner.show();
        this._savenewclasssection.setClassesDetails(this.class)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('Successfully ' + _this.modalButtonTextClass + '!', 'Success');
                console.log("New Class Added");
                _this.getClassesDetails();
                _this.ClearclassModalData();
                _this.closeModal1(event);
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    ClassComponent.prototype.ClearclassModalData = function () {
        this.class = new _shared_Models_class__WEBPACK_IMPORTED_MODULE_6__["Class"]();
    };
    ClassComponent.prototype.onsectionCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editsection') {
            this.section = event.data;
            this.modalService.open('custom-modal-3');
            this.modalButtonTextSection = 'Update Section';
            this.modalButtonText = 'Update';
        }
    };
    ClassComponent.prototype.Savesection = function (event) {
        var _this = this;
        // this.section.Id = -1;
        console.log("section-" + this.section.Id);
        this.spinner.show();
        this._savesection.setSectionDetails(this.section)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('Successfully ' + _this.modalButtonTextSection + '!', 'Success');
                console.log("New Section Added");
                _this.getSectionDetails();
                _this.ClearsectionModalData();
                _this.closeModal2(event);
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    ClassComponent.prototype.ClearsectionModalData = function () {
        this.section = new _shared_Models_section__WEBPACK_IMPORTED_MODULE_2__["Section"]();
    };
    ClassComponent.prototype.onmediumCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editmedium') {
            this.medium = event.data;
            this.modalService.open('custom-modal-4');
            this.modalButtonTextMedium = 'Update Medium';
            this.modalButtonText = 'Update';
        }
    };
    ClassComponent.prototype.Savemedium = function (event) {
        var _this = this;
        // this.medium.Id = -1;
        console.log("medium-" + this.medium.Id);
        this.spinner.show();
        this._savemedium.setMediumDetails(this.medium)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('Successfully ' + _this.modalButtonTextMedium + '!', 'Success');
                console.log("New Medium Added");
                _this.getMediumsDetails();
                _this.ClearmediumModalData();
                _this.closeModal3(event);
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    ClassComponent.prototype.ClearmediumModalData = function () {
        this.medium = new _shared_Models_medium__WEBPACK_IMPORTED_MODULE_8__["Medium"]();
    };
    ClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./class.component.html */ "./src/app/OrganisationSetup/class/class.component.html"),
            styles: [__webpack_require__(/*! ./class.component.scss */ "./src/app/OrganisationSetup/class/class.component.scss")],
            providers: [src_app_service_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"], _service_section_service__WEBPACK_IMPORTED_MODULE_3__["SectionService"], _service_medium_service__WEBPACK_IMPORTED_MODULE_1__["MediumService"], _service_classsection_service__WEBPACK_IMPORTED_MODULE_0__["ClasssectionService"], src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_10__["ModalService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"], _service_section_service__WEBPACK_IMPORTED_MODULE_3__["SectionService"], _service_classsection_service__WEBPACK_IMPORTED_MODULE_0__["ClasssectionService"], src_app_service_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"], _service_medium_service__WEBPACK_IMPORTED_MODULE_1__["MediumService"], _service_classsection_service__WEBPACK_IMPORTED_MODULE_0__["ClasssectionService"],
            src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_10__["ModalService"],
            _service_section_service__WEBPACK_IMPORTED_MODULE_3__["SectionService"],
            _service_medium_service__WEBPACK_IMPORTED_MODULE_1__["MediumService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]])
    ], ClassComponent);
    return ClassComponent;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/class/class.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/OrganisationSetup/class/class.module.ts ***!
  \*********************************************************/
/*! exports provided: ClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassModule", function() { return ClassModule; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class.component */ "./src/app/OrganisationSetup/class/class.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-routing.module */ "./src/app/OrganisationSetup/class/class-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ClassModule = /** @class */ (function () {
    function ClassModule() {
    }
    ClassModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _class_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_8__["ModalSharedModule"]
            ],
            declarations: [
                _class_component__WEBPACK_IMPORTED_MODULE_2__["ClassComponent"]
            ]
        })
    ], ClassModule);
    return ClassModule;
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

/***/ "./src/app/service/medium.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/medium.service.ts ***!
  \*******************************************/
/*! exports provided: MediumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumService", function() { return MediumService; });
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


var MediumService = /** @class */ (function () {
    function MediumService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/Medium';
        this._getMedium = this.route + '/getmediums';
        this._setMedium = this.route + '/setmedium';
    }
    MediumService.prototype.getMediumsDetails = function () {
        return this.serviceUitility.postRequest(this._getMedium, '');
    };
    MediumService.prototype.setMediumDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setMedium, obj);
    };
    MediumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], MediumService);
    return MediumService;
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

/***/ "./src/app/service/section.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/section.service.ts ***!
  \********************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
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


var SectionService = /** @class */ (function () {
    // private _getSections = 'http://localhost:3005/ClassAndSection/getsections';
    // private _setSection = 'http://localhost:3005/ClassAndSection/setsection';
    function SectionService(// private http: HttpClient,
    serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/ClassAndSection';
        this._getSections = this.route + '/getsections';
        this._setSection = this.route + '/setsection';
    }
    SectionService.prototype.getSectionDetails = function () {
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'x-access-token': JSON.parse(localStorage.getItem('id_token'))
        //   })
        // };
        return this.serviceUitility.postRequest(this._getSections, '');
    };
    SectionService.prototype.setSectionDetails = function (obj) {
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'x-access-token': JSON.parse(localStorage.getItem('id_token'))
        //   })
        // };
        return this.serviceUitility.postRequest(this._setSection, obj);
    };
    SectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], SectionService);
    return SectionService;
}());



/***/ }),

/***/ "./src/app/shared/Models/class.ts":
/*!****************************************!*\
  !*** ./src/app/shared/Models/class.ts ***!
  \****************************************/
/*! exports provided: Class */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
var Class = /** @class */ (function () {
    function Class() {
        this.Id = -1;
    }
    return Class;
}());



/***/ }),

/***/ "./src/app/shared/Models/medium.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/Models/medium.ts ***!
  \*****************************************/
/*! exports provided: Medium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medium", function() { return Medium; });
var Medium = /** @class */ (function () {
    function Medium() {
        this.Id = -1;
    }
    return Medium;
}());



/***/ }),

/***/ "./src/app/shared/Models/section.ts":
/*!******************************************!*\
  !*** ./src/app/shared/Models/section.ts ***!
  \******************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section() {
        this.Id = -1;
    }
    return Section;
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
//# sourceMappingURL=OrganisationSetup-class-class-module.js.map