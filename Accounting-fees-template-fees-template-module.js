(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Accounting-fees-template-fees-template-module"],{

/***/ "./src/app/Accounting/fees-template/fees-template.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Accounting/fees-template/fees-template.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"page-body\">\r\n  <div class=\"col-md-12 col-lg-12\">\r\n    <app-card title=\"\" [cardOptionBlock]=\"true\">\r\n      <h5>Accounting (Fees Template)</h5>\r\n      <hr>\r\n      <div ngbDropdown class=\"dropdown-primary\">\r\n        <button ngbDropdownToggle class=\"btn btn-primary waves-effect waves-light \" type=\"button\">Fees\r\n          Management</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Statements</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Direct Payments</a>\r\n          <!-- <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Something else here</a>  -->\r\n        </div>\r\n      </div>\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n\r\n      <div ngbDropdown class=\"dropdown-success\">\r\n        <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Transactions</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Indirect Income</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Expense</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Bills</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Internal Transactions</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Journal Transactions</a>\r\n        </div>\r\n      </div>\r\n\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n\r\n      <button class=\"btn btn-success \">Payroll</button>\r\n\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n\r\n      <div ngbDropdown class=\"dropdown-info\">\r\n        <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Reports</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Fees Reports</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Profit and Loss</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Balance Sheet</a>\r\n          <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Trial Balance</a>\r\n        </div>\r\n      </div>\r\n\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n      &nbsp;\r\n\r\n      <div ngbDropdown class=\"dropdown-warning\">\r\n        <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Settings</button>\r\n        <div ngbDropdownMenu>\r\n          <div *ngFor=\"let menuItem of accountingMenu\">\r\n            <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"[menuItem.ModuleName,menuItem.routerLink]\"\r\n              href=\"javascript:\">{{menuItem.Name}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"FeesTemplate\" [classHeader]=\"true\">\r\n        <div class=\"mt-3\">\r\n          <font size=\"3\">Manage Fees Template</font>\r\n        </div>\r\n        <div style=\"text-align: center\">\r\n          <!-- <h5>{{Headingtext}}</h5>\r\n        <br> -->\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <input type=\"text\" class=\"form-control\" name=\"Name\" placeholder=\"Template Name\"\r\n                [(ngModel)]=\"feestemplate.Name\" #Name=\"ngModel\" required>\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <form class=\"form-inline\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control\" placeholder=\"Due Date\" name=\"dp\" ngbDatepicker\r\n                      #d=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                        <i class=\"fa\">&#xf073;</i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <select class=\"browser-default custom-select\" [(ngModel)]=\"feestemplate.FeesHeaderId\"\r\n                #FeesHeaderId=\"ngModel\" required>\r\n                <option value=\"-1\" disabled='true'>--Select Fees Header--</option>\r\n                <option *ngFor=\"let fees of fessTemplateList\" value={{fees.Id}}>{{fees.Name}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <select class=\"browser-default custom-select\" [(ngModel)]=\"feestemplate.AcademicYearId\"\r\n                #AcademicYearId=\"ngModel\" required>\r\n                <option value=\"-1\" disabled='true'>--Select Academic Year--</option>\r\n                <option *ngFor=\"let acad of accountingyear\" value={{acad.Id}}>{{acad.AcademicYear}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <select class=\"browser-default custom-select\" [(ngModel)]=\"feestemplate.ClassSectionMediumId\"\r\n                #ClassSectionMediumId=\"ngModel\" required>\r\n                <option value=\"-1\" disabled='true'>--Select Class--</option>\r\n                <option *ngFor=\"let med of newclasssection\" value={{med.Id}}>{{med.Name}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <textarea class=\"form-control\" placeholder=\"More Information\" id=\"exampleFormControlTextarea3\"\r\n                  rows=\"7\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <input type=\"text\" name=\"Fees Template\" placeholder=\"Name\" [(ngModel)]=\"feestemplate.Name\"\r\n          #Name=\"ngModel\" required>\r\n        <br>\r\n        <br> -->\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-primary\" id=\"saveFeesTemplate\" (click)=\"saveFeesTemplate()\"\r\n            (click)=\"cleardata()\" type=\"submit\">{{Buttontext}}</button>\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"cleardata()\">Cancel</button>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"FeesTemplate\" [classHeader]=\"true\">\r\n        <div class=\"table-responsive\">\r\n          <h5>Fees Template</h5>\r\n          <hr>\r\n          <ng2-smart-table [settings]=\"settings\" [source]=\"feesTemplatesGrid\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n            (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n            (custom)=\"onCustomAction($event)\">\r\n          </ng2-smart-table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- <div class=\"col-sm-12\">\r\n    <app-card title=\"Description\" [classHeader]=\"true\">\r\n      <ng2-smart-table [settings]=\"setting\" [source]=\"DescriptionFeesTemp\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n        (custom)=\"onCustomAction($event)\">\r\n      </ng2-smart-table>\r\n    </app-card>\r\n  </div> -->\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-sm-12\">\r\n  <app-card title=\"Description\" [classHeader]=\"true\">\r\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n    <ng2-smart-table [settings]=\"setting1\" [source]=\"feestemplateMapp\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\r\n  </app-card>\r\n</div>\r\n\r\n<div class=\"col-sm-12\">\r\n  <app-card>\r\n    <!-- <div class=\"container\"> -->\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <table class=\"table table-striped table-bordered col-lg-12\">\r\n          <caption><i>Add/remove textbox and chip dynamically in Angular 6</i></caption>\r\n          <thead>\r\n            <tr>\r\n              <th>Item Name\r\n                <a (click)=\"onEditCloseItems()\" class=\"text-info float-right\">\r\n                  <i class=\"mdi mdi-{{isEditItems ? 'close' : 'pencil'}} mdi-18px\"></i>\r\n                </a>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody *ngIf=\"!isEditItems\">\r\n            <tr *ngIf=\"firstField\">\r\n              <td>\r\n                <i (click)=\"firstField = false\" class=\"mdi mdi-close mdi-18px\"></i> {{firstFieldName}}\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n              <td *ngIf=\"field?.name\">\r\n                <i (click)=\"deleteFieldValue(i)\" class=\"mdi mdi-close mdi-18px\"></i> {{field.name}}</td>\r\n            </tr>\r\n          </tbody>\r\n\r\n          <tbody *ngIf=\"isEditItems\">\r\n            <tr>\r\n              <td *ngIf=\"firstField\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div (click)=\"firstField = false\" class=\"input-group-text\"><i\r\n                            class=\"mdi mdi-close mdi-18px\"></i>\r\n                        </div>\r\n                      </div>\r\n                      <input [(ngModel)]=\"firstFieldName\" class=\"form-control py-2 \" type=\"text\" name=\"firstFieldName\"\r\n                        placeholder=\"Item Name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div (click)=\"firstField = false\" class=\"input-group-text\"><i\r\n                            class=\"mdi mdi-close mdi-18px\"></i>\r\n                        </div>\r\n                      </div>\r\n                      <input [(ngModel)]=\"firstFieldName\" class=\"form-control py-2 \" type=\"text\" name=\"firstFieldName\"\r\n                        placeholder=\"Item Name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div (click)=\"firstField = false\" class=\"input-group-text\"><i\r\n                            class=\"mdi mdi-close mdi-18px\"></i>\r\n                        </div>\r\n                      </div>\r\n                      <input [(ngModel)]=\"firstFieldName\" class=\"form-control py-2 \" type=\"text\" name=\"firstFieldName\"\r\n                        placeholder=\"Item Name\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n              <td>\r\n                <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div (click)=\"deleteFieldValue(i)\" class=\"input-group-text\"><i class=\"mdi mdi-close mdi-18px\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <input [(ngModel)]=\"field.name\" class=\"form-control\" type=\"text\" name=\"{{field.name}}\"\r\n                      placeholder=\"Item Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div (click)=\"deleteFieldValue(i)\" class=\"input-group-text\"><i class=\"mdi mdi-close mdi-18px\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <input [(ngModel)]=\"field.name\" class=\"form-control\" type=\"text\" name=\"{{field.name}}\"\r\n                      placeholder=\"Item Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div (click)=\"deleteFieldValue(i)\" class=\"input-group-text\"><i class=\"mdi mdi-close mdi-18px\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <input [(ngModel)]=\"field.name\" class=\"form-control\" type=\"text\" name=\"{{field.name}}\"\r\n                      placeholder=\"Item Name\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td align=\"right\">\r\n                <button *ngIf=\"fieldArray.length <= 5\" class=\"btn btn-success btn-sm\" type=\"button\"\r\n                  (click)=\"addFieldValue()\" style=\"margin-right:10px\">Add More Item</button>\r\n                <button (click)=\"onEditCloseItems()\" class=\"btn btn-primary btn-sm\" type=\"button\">Save Items</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- </div> -->\r\n  </app-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Accounting/fees-template/fees-template.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Accounting/fees-template/fees-template.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/Accounting/fees-template/fees-template.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Accounting/fees-template/fees-template.component.ts ***!
  \*********************************************************************/
/*! exports provided: FeesTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesTemplateComponent", function() { return FeesTemplateComponent; });
/* harmony import */ var _service_fees_headers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/fees-headers.service */ "./src/app/service/fees-headers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_fees_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/fees-template.service */ "./src/app/service/fees-template.service.ts");
/* harmony import */ var _fees_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fees-template */ "./src/app/Accounting/fees-template/fees-template.ts");
/* harmony import */ var src_app_service_accounting_year_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/accounting-year.service */ "./src/app/service/accounting-year.service.ts");
/* harmony import */ var src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var src_app_service_fees_template_fees_account_mapping_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/fees-template-fees-account-mapping.service */ "./src/app/service/fees-template-fees-account-mapping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FeesTemplateComponent = /** @class */ (function () {
    function FeesTemplateComponent(spinner, toastr, _feesTemplate, _FeesHeader, _AcademicYear, _ClassSectionMedium, menuService, _FeesTemplateFeesAccountMapping) {
        this.spinner = spinner;
        this.toastr = toastr;
        this._feesTemplate = _feesTemplate;
        this._FeesHeader = _FeesHeader;
        this._AcademicYear = _AcademicYear;
        this._ClassSectionMedium = _ClassSectionMedium;
        this.menuService = menuService;
        this._FeesTemplateFeesAccountMapping = _FeesTemplateFeesAccountMapping;
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Fees Template';
        this.feesTemplatesGrid = Array();
        this.feestemplate = new _fees_template__WEBPACK_IMPORTED_MODULE_5__["FeesTemplate"]();
        this.fessTemplateList = Array();
        this.accountingyear = Array();
        this.newclasssection = Array();
        this.DescriptionFeesTemp = Array();
        this.feestemplateMapp = Array();
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
                Name: {
                    title: 'Name',
                },
                FeesHeaderId: {
                    title: 'Header',
                },
                AcademicYear: {
                    title: 'Academic Year',
                },
                DueDate: {
                    title: 'TotalFees',
                },
            },
        };
        // tslint:disable-next-line: member-ordering
        this.setting = {
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
                Description: {
                    title: 'Description',
                },
                FeesAcount: {
                    title: 'Fees Acount',
                },
                Fees: {
                    title: 'FeesAccountId',
                },
                Total: {
                    title: 'fees',
                },
            },
        };
        // tslint:disable-next-line: member-ordering
        this.setting1 = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: 'Delete',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
            actions: {
                add: true,
                edit: true,
                delete: true,
                custom: [
                    { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
                ],
            },
            columns: {
                Description: {
                    title: 'Description',
                },
                // FeesTemplateId: {
                //   title: 'FeesTemplateId',
                // },
                FeesAccountId: {
                    title: 'list',
                    config: {
                        list: this.feestemplateMapp
                    }
                },
                Fees: {
                    title: 'Fees',
                },
            },
            onDeleteConfirm: function (event) {
                console.log('Delete Event In Console');
                console.log(event);
                if (window.confirm('Are you sure you want to delete?')) {
                    event.confirm.resolve();
                }
                else {
                    event.confirm.reject();
                }
            },
            onCreateConfirm: function (event) {
                console.log('Create Event In Console');
                console.log(event);
            },
            onSaveConfirm: function (event) {
                console.log('Edit Event In Console');
                console.log(event);
            }
        };
        // fieldArray: Array<any> = [
        //   {
        //     'name': 'Default Name 1'
        //   },
        //   {
        //     'name': 'Default Name 2'
        //   }
        // ];
        // newAttribute: any = {};
        // firstField = true;
        // firstFieldName = 'First Item name';
        // isEditItems: boolean;
        // // candidates: any[] = [
        // //   {
        // //     'name': 'Default Name',
        // //     'title': 'Job Title',
        // //   },
        // //   {
        // //     'name': 'Default Name 2',
        // //     'title': 'Job Title',
        // //   }
        // // ];
        // addFieldValue(index) {
        //   if (this.fieldArray.length <= 2) {
        //     this.fieldArray.push(this.newAttribute);
        //     this.newAttribute = {};
        //   } else {
        //   }
        // }
        // deleteFieldValue(index) {
        //   this.fieldArray.splice(index, 1);
        // }
        // onEditCloseItems() {
        //   this.isEditItems = !this.isEditItems;
        // }
        this.fieldArray = [];
        this.newAttribute = {};
        this.firstField = true;
        this.firstFieldName = 'First Item name';
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["LocalDataSource"](this.data);
    }
    // feestemplateMapp = [
    //   {
    //     id: 1,
    //     name: "Leanne Graham",
    //     username: "Bret",
    //     email: "Sincere@april.biz"
    //   },
    //   {
    //     id: 2,
    //     name: "Ervin Howell",
    //     username: "Antonette",
    //     email: "Shanna@melissa.tv"
    //   },
    //   // ... list of items
    //   {
    //     id: 11,
    //     name: "Nicholas DuBuque",
    //     username: "Nicholas.Stanton",
    //     email: "Rey.Padberg@rosamond.biz"
    //   }
    // ];
    FeesTemplateComponent.prototype.ngOnInit = function () {
        this.getFeestemplates();
        this.getfeeHeaders();
        this.getacademicYear();
        this.getclassSectionMedium();
        this.requestAccountsMenu();
        this.getFeestemplateFeesAccountMappings();
    };
    FeesTemplateComponent.prototype.getFeestemplateFeesAccountMappings = function () {
        var _this = this;
        this._FeesTemplateFeesAccountMapping.getFeestemplateFeesaccountMappings()
            .subscribe(function (data) {
            if (data.success) {
                _this.feestemplateMapp = data.data[0];
            }
        });
    };
    FeesTemplateComponent.prototype.getfeeHeaders = function () {
        var _this = this;
        this._FeesHeader.getFeesHeaders()
            .subscribe(function (data) {
            if (data.success) {
                _this.fessTemplateList = data.data[0];
            }
        });
    };
    FeesTemplateComponent.prototype.getacademicYear = function () {
        var _this = this;
        this._AcademicYear.getaccountingyearsDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.accountingyear = data.data[0];
            }
        });
    };
    FeesTemplateComponent.prototype.requestAccountsMenu = function () {
        var _this = this;
        this.menuService.GetAccountsMenu()
            .subscribe(function (data) {
            // console.log('requestAccountsMenu ->');
            _this.accountingMenu = data;
            // console.log(this.accountingMenu);
        });
    };
    FeesTemplateComponent.prototype.getclassSectionMedium = function () {
        var _this = this;
        this._ClassSectionMedium.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.newclasssection = data.data[0];
            }
        });
    };
    FeesTemplateComponent.prototype.getFeestemplates = function () {
        var _this = this;
        console.log('Fees Template');
        this.spinner.show();
        this._feesTemplate.getFeestemplates()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Fees Template');
                _this.feesTemplatesGrid = data.data[0];
                console.log(_this.feesTemplatesGrid);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    FeesTemplateComponent.prototype.saveFeesTemplate = function () {
        var _this = this;
        console.log(' Fee template' + this.feestemplate.Id);
        this.spinner.show();
        this._feesTemplate.setFeestemplate(this.feestemplate)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                console.log('New Fee Template Added');
                _this.getFeestemplates();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    FeesTemplateComponent.prototype.updateFeesHeader = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this._feesTemplate.setFeestemplate(this.feestemplate)
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success');
                _this.toastr.success('Successfully ' + 'Updated FeeTemplate', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    FeesTemplateComponent.prototype.delfeesTemplate = function () {
        var _this = this;
        this._feesTemplate.delFeestemplate()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success from Delete Template');
                _this.DescriptionFeesTemp = data.data[0];
                console.log(_this.DescriptionFeesTemp);
            }
        });
    };
    FeesTemplateComponent.prototype.cleardata = function () {
        this.feestemplate = new _fees_template__WEBPACK_IMPORTED_MODULE_5__["FeesTemplate"]();
    };
    FeesTemplateComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.feestemplate = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Fees template';
        }
    };
    FeesTemplateComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    FeesTemplateComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    FeesTemplateComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    FeesTemplateComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'Id',
                search: query
            },
            {
                field: 'FeesTemplateId',
                search: query
            },
            {
                field: 'FeesAccountId',
                search: query
            },
            {
                field: 'Fees',
                search: query
            }
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    FeesTemplateComponent.prototype.addFieldValue = function (index) {
        if (this.fieldArray.length <= 5) {
            this.fieldArray.push(this.newAttribute);
            this.newAttribute = {};
        }
        else {
        }
    };
    FeesTemplateComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    FeesTemplateComponent.prototype.onEditCloseItems = function () {
        this.isEditItems = !this.isEditItems;
    };
    FeesTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fees-template',
            template: __webpack_require__(/*! ./fees-template.component.html */ "./src/app/Accounting/fees-template/fees-template.component.html"),
            styles: [__webpack_require__(/*! ./fees-template.component.scss */ "./src/app/Accounting/fees-template/fees-template.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_service_fees_template_service__WEBPACK_IMPORTED_MODULE_4__["FeesTemplateService"],
            _service_fees_headers_service__WEBPACK_IMPORTED_MODULE_0__["FeesHeadersService"],
            src_app_service_accounting_year_service__WEBPACK_IMPORTED_MODULE_6__["AccountingyearService"],
            src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_7__["ClasssectionService"],
            src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"],
            src_app_service_fees_template_fees_account_mapping_service__WEBPACK_IMPORTED_MODULE_10__["FeesTemplateFeesAccountMappingService"]])
    ], FeesTemplateComponent);
    return FeesTemplateComponent;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-template/fees-template.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Accounting/fees-template/fees-template.module.ts ***!
  \******************************************************************/
/*! exports provided: FeesTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesTemplateModule", function() { return FeesTemplateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fees_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fees-template.component */ "./src/app/Accounting/fees-template/fees-template.component.ts");
/* harmony import */ var _fees_template_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fees-template.routing.module */ "./src/app/Accounting/fees-template/fees-template.routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hello.component */ "./src/app/Accounting/fees-template/hello.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FeesTemplateModule = /** @class */ (function () {
    function FeesTemplateModule() {
    }
    FeesTemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _fees_template_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeesHeadersRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
            ],
            declarations: [_fees_template_component__WEBPACK_IMPORTED_MODULE_1__["FeesTemplateComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_9__["HelloComponent"]]
        })
    ], FeesTemplateModule);
    return FeesTemplateModule;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-template/fees-template.routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Accounting/fees-template/fees-template.routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FeesHeadersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesHeadersRoutingModule", function() { return FeesHeadersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fees_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fees-template.component */ "./src/app/Accounting/fees-template/fees-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _fees_template_component__WEBPACK_IMPORTED_MODULE_2__["FeesTemplateComponent"],
        data: {
            title: 'Fees Headers',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var FeesHeadersRoutingModule = /** @class */ (function () {
    function FeesHeadersRoutingModule() {
    }
    FeesHeadersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FeesHeadersRoutingModule);
    return FeesHeadersRoutingModule;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-template/fees-template.ts":
/*!***********************************************************!*\
  !*** ./src/app/Accounting/fees-template/fees-template.ts ***!
  \***********************************************************/
/*! exports provided: FeesTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesTemplate", function() { return FeesTemplate; });
var FeesTemplate = /** @class */ (function () {
    function FeesTemplate() {
        this.Id = -1;
        this.FeesHeaderId = -1;
        this.AcademicYearId = -1;
        this.ClassSectionMediumId = -1;
        this.AcademicYear = -1;
    }
    return FeesTemplate;
}());



/***/ }),

/***/ "./src/app/Accounting/fees-template/hello.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Accounting/fees-template/hello.component.ts ***!
  \*************************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'hello',
            template: "<h3>Hello {{name}}!</h3>",
            styles: ["h3 { font-family: Lato; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/service/fees-template.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/fees-template.service.ts ***!
  \**************************************************/
/*! exports provided: FeesTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesTemplateService", function() { return FeesTemplateService; });
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


var FeesTemplateService = /** @class */ (function () {
    // tslint:disable-next-line: no-shadowed-variable
    function FeesTemplateService(ServiceUitility) {
        this.ServiceUitility = ServiceUitility;
        this.route = '/FeesTemplate';
        this.getFeesTemplatesAPI = this.route + '/getFeesTemplates';
        this.getFeesTemplateAPI = this.route + '/getFeesTemplate';
        this.setFeesTemplateAPI = this.route + '/setFeesTemplate';
        this.deltFeesTemplateAPI = this.route + '/delFeesTemplate';
    }
    FeesTemplateService.prototype.getFeestemplates = function () {
        return this.ServiceUitility.postRequest(this.getFeesTemplatesAPI, '');
    };
    FeesTemplateService.prototype.getFeestemplate = function () {
        return this.ServiceUitility.postRequest(this.getFeesTemplateAPI, '');
    };
    FeesTemplateService.prototype.setFeestemplate = function (obj) {
        return this.ServiceUitility.postRequest(this.setFeesTemplateAPI, obj);
    };
    FeesTemplateService.prototype.delFeestemplate = function () {
        return this.ServiceUitility.postRequest(this.deltFeesTemplateAPI, '');
    };
    FeesTemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], FeesTemplateService);
    return FeesTemplateService;
}());



/***/ })

}]);
//# sourceMappingURL=Accounting-fees-template-fees-template-module.js.map