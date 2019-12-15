(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["STUDENTS-custom-fields-custom-fields-module"],{

/***/ "./src/app/STUDENTS/custom-fields/custom-fields.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/STUDENTS/custom-fields/custom-fields.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  custom-fields works!\r\n</p>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div class=\"mt-3\">\r\n        <h5>Custom Field</h5>\r\n        <hr>\r\n      </div>\r\n      <div style=\"text-align: center\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-xl-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Field Name\" [(ngModel)]=\"Customfield.Name\" #Name=\"ngModel\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <div style=\"text-align: left\">\r\n        <div class=\"mt-3\">\r\n        <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"Customfield.ExportToExcel\" #Name=\"ngModel\"\r\n          required></ui-switch> <b> &nbsp;: Export this Field to Excel While Exporting</b>\r\n          </div>\r\n      </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveCustomField\" (click)=\"saveCustomField()\"\r\n          (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n        &nbsp;&nbsp;&nbsp; &nbsp;\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card title=\"CustomField\">\r\n      <div class=\"mt-3\">\r\n        <h5>Custom Field</h5>\r\n        <hr>\r\n      </div>\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"customField\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/STUDENTS/custom-fields/custom-fields.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/STUDENTS/custom-fields/custom-fields.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/STUDENTS/custom-fields/custom-fields.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/STUDENTS/custom-fields/custom-fields.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsComponent", function() { return CustomFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_Models_CustomField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/Models/CustomField */ "./src/app/shared/Models/CustomField.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_custom_fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/custom-fields.service */ "./src/app/service/custom-fields.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomFieldsComponent = /** @class */ (function () {
    function CustomFieldsComponent(spinner, toastr, _customFieldAPI) {
        this.spinner = spinner;
        this.toastr = toastr;
        this._customFieldAPI = _customFieldAPI;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Add Custom Field';
        this.customField = Array();
        this.Customfield = new src_app_shared_Models_CustomField__WEBPACK_IMPORTED_MODULE_1__["CustomField"]();
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
    CustomFieldsComponent.prototype.ngOnInit = function () {
        this.getCustomFields();
    };
    CustomFieldsComponent.prototype.getCustomFields = function () {
        var _this = this;
        this.spinner.show();
        this._customFieldAPI.getCustomFields()
            .subscribe(function (data) {
            if (data.success) {
                _this.customField = data.data[0];
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    CustomFieldsComponent.prototype.saveCustomField = function () {
        var _this = this;
        this.spinner.show();
        this._customFieldAPI.setCustomField(this.Customfield)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getCustomFields();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    CustomFieldsComponent.prototype.updateCustomField = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this._customFieldAPI.setCustomField(this.Customfield)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully ' + 'Updated Custom field', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    CustomFieldsComponent.prototype.cleardata = function () {
        this.Customfield = new src_app_shared_Models_CustomField__WEBPACK_IMPORTED_MODULE_1__["CustomField"];
    };
    CustomFieldsComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.Customfield = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Customfield';
        }
    };
    CustomFieldsComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    CustomFieldsComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    CustomFieldsComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    CustomFieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-fields',
            template: __webpack_require__(/*! ./custom-fields.component.html */ "./src/app/STUDENTS/custom-fields/custom-fields.component.html"),
            styles: [__webpack_require__(/*! ./custom-fields.component.scss */ "./src/app/STUDENTS/custom-fields/custom-fields.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_service_custom_fields_service__WEBPACK_IMPORTED_MODULE_4__["CustomFieldsService"]])
    ], CustomFieldsComponent);
    return CustomFieldsComponent;
}());



/***/ }),

/***/ "./src/app/STUDENTS/custom-fields/custom-fields.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/STUDENTS/custom-fields/custom-fields.module.ts ***!
  \****************************************************************/
/*! exports provided: CustomFieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsModule", function() { return CustomFieldsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-fields.component */ "./src/app/STUDENTS/custom-fields/custom-fields.component.ts");
/* harmony import */ var _custom_fields_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-fields.routing.module */ "./src/app/STUDENTS/custom-fields/custom-fields.routing.module.ts");
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









var CustomFieldsModule = /** @class */ (function () {
    function CustomFieldsModule() {
    }
    CustomFieldsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_fields_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomFieldsRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_custom_fields_component__WEBPACK_IMPORTED_MODULE_2__["CustomFieldsComponent"]]
        })
    ], CustomFieldsModule);
    return CustomFieldsModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/custom-fields/custom-fields.routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/STUDENTS/custom-fields/custom-fields.routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomFieldsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsRoutingModule", function() { return CustomFieldsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-fields.component */ "./src/app/STUDENTS/custom-fields/custom-fields.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _custom_fields_component__WEBPACK_IMPORTED_MODULE_2__["CustomFieldsComponent"],
        data: {
            title: 'Mark Attendance',
            status: true
        },
    },
];
var CustomFieldsRoutingModule = /** @class */ (function () {
    function CustomFieldsRoutingModule() {
    }
    CustomFieldsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomFieldsRoutingModule);
    return CustomFieldsRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/Models/CustomField.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/Models/CustomField.ts ***!
  \**********************************************/
/*! exports provided: CustomField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomField", function() { return CustomField; });
var CustomField = /** @class */ (function () {
    function CustomField() {
        this.Id = -1;
    }
    return CustomField;
}());



/***/ })

}]);
//# sourceMappingURL=STUDENTS-custom-fields-custom-fields-module.js.map