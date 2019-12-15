(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OrganisationSetup-subject-combination-subject-combination-module"],{

/***/ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/subject-combination/subject-combination.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card>\r\n          <div style=\"text-align: center\">\r\n              <h5>{{Headingtext}}</h5>\r\n              <br>\r\n              <input type=\"text\" name=\"Name\"  placeholder=\"Subject Name\"\r\n              [(ngModel)]=\"SubjectCombination.Name\"  #Name=\"ngModel\" required>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <button type=\"button\" class=\"btn btn-primary\"\r\n              id=\"saveSubjectCombination\"\r\n              (click)=\"saveSubjectCombination()\"\r\n              (click)= \"cleardata()\" type=\"submit\" >{{Buttontext}}</button>\r\n              &nbsp;\r\n              &nbsp;\r\n              &nbsp;\r\n              &nbsp;\r\n              <button type=\"button\" class=\"btn btn-danger\"\r\n              (click)= \"cleardata()\">Cancel</button>\r\n              </div>\r\n\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"SubjectCombinationlist\" [classHeader]=\"true\">\r\n          <h5>Subject Combination</h5>\r\n          <hr>\r\n\r\n          <ng2-smart-table [settings]=\"settings\" [source]=\"subjectCombinationGrid\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n         (editConfirm)=\"onSaveConfirm($event)\"\r\n         (createConfirm)=\"onCreateConfirm($event)\"\r\n         (custom)=\"onCustomAction($event)\">\r\n\r\n        </ng2-smart-table>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/subject-combination/subject-combination.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/subject-combination/subject-combination.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SubjectCombinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationComponent", function() { return SubjectCombinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_subject_combination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/subject-combination.service */ "./src/app/service/subject-combination.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Models_SubjectCombination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Models/SubjectCombination */ "./src/app/shared/Models/SubjectCombination.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubjectCombinationComponent = /** @class */ (function () {
    function SubjectCombinationComponent(spinner, toastr, subjectCombination) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.subjectCombination = subjectCombination;
        this.Buttontext = 'Create';
        this.Headingtext = 'Add Subject Combination';
        this.subjectCombinationGrid = Array();
        this.SubjectCombination = new src_app_shared_Models_SubjectCombination__WEBPACK_IMPORTED_MODULE_4__["SubjectCombination"]();
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
                // Id: {
                //   title: 'Id',
                // },
                Name: {
                    title: 'Name',
                },
            },
        };
    }
    SubjectCombinationComponent.prototype.ngOnInit = function () {
        this.getsubjectCombination();
    };
    SubjectCombinationComponent.prototype.getsubjectCombination = function () {
        var _this = this;
        console.log('This is Subject');
        this.spinner.show();
        this.subjectCombination.getsubjectCombinations()
            .subscribe(function (data) {
            if (data.success) {
                console.log('Success Subject Combination!!');
                _this.subjectCombinationGrid = data.data[0];
                console.log(_this.subjectCombinationGrid);
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectCombinationComponent.prototype.saveSubjectCombination = function () {
        var _this = this;
        this.spinner.show();
        this.subjectCombination.setsubjectCombination(this.SubjectCombination)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                console.log('Subject Combination Added');
                _this.getsubjectCombination();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    SubjectCombinationComponent.prototype.cleardata = function () {
        this.SubjectCombination = new src_app_shared_Models_SubjectCombination__WEBPACK_IMPORTED_MODULE_4__["SubjectCombination"];
    };
    SubjectCombinationComponent.prototype.updatefeesaccount = function () {
        var _this = this;
        this.spinner.show();
        console.log('Subject Combnation' + this.SubjectCombination.Name);
        this.Buttontext = 'Update';
        this.subjectCombination.setsubjectCombination(this.SubjectCombination)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully ' + 'Updated Fees Account!!', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    SubjectCombinationComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.SubjectCombination = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update ';
        }
    };
    SubjectCombinationComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.SubjectCombination = event.data;
        this.spinner.show();
        this.subjectCombination.delsubjectCombination(this.SubjectCombination)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.toastr.success('successfully' + 'Deleted!', 'Success');
                _this.getsubjectCombination();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
        });
    };
    SubjectCombinationComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    SubjectCombinationComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    SubjectCombinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-combination',
            template: __webpack_require__(/*! ./subject-combination.component.html */ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.html"),
            styles: [__webpack_require__(/*! ./subject-combination.component.scss */ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_service_subject_combination_service__WEBPACK_IMPORTED_MODULE_1__["SubjectCombinationService"]])
    ], SubjectCombinationComponent);
    return SubjectCombinationComponent;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/subject-combination/subject-combination.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/subject-combination/subject-combination.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SubjectCombinationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationModule", function() { return SubjectCombinationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subject_combination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject-combination.component */ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.ts");
/* harmony import */ var _subject_combination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject-combination.routing.module */ "./src/app/OrganisationSetup/subject-combination/subject-combination.routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modal/ModalShared.module */ "./src/app/shared/modal/ModalShared.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SubjectCombinationModule = /** @class */ (function () {
    function SubjectCombinationModule() {
    }
    SubjectCombinationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _subject_combination_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubjectCombinationRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                src_app_shared_modal_ModalShared_module__WEBPACK_IMPORTED_MODULE_7__["ModalSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [_subject_combination_component__WEBPACK_IMPORTED_MODULE_2__["SubjectCombinationComponent"]]
        })
    ], SubjectCombinationModule);
    return SubjectCombinationModule;
}());



/***/ }),

/***/ "./src/app/OrganisationSetup/subject-combination/subject-combination.routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/OrganisationSetup/subject-combination/subject-combination.routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SubjectCombinationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombinationRoutingModule", function() { return SubjectCombinationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subject_combination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject-combination.component */ "./src/app/OrganisationSetup/subject-combination/subject-combination.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _subject_combination_component__WEBPACK_IMPORTED_MODULE_2__["SubjectCombinationComponent"],
        data: {
            title: 'Subject Combination',
            status: true
        }
    },
];
var SubjectCombinationRoutingModule = /** @class */ (function () {
    function SubjectCombinationRoutingModule() {
    }
    SubjectCombinationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], SubjectCombinationRoutingModule);
    return SubjectCombinationRoutingModule;
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

/***/ "./src/app/shared/Models/SubjectCombination.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/Models/SubjectCombination.ts ***!
  \*****************************************************/
/*! exports provided: SubjectCombination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCombination", function() { return SubjectCombination; });
var SubjectCombination = /** @class */ (function () {
    function SubjectCombination() {
        this.Id = -1;
    }
    return SubjectCombination;
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
//# sourceMappingURL=OrganisationSetup-subject-combination-subject-combination-module.js.map