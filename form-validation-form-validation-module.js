(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-validation-form-validation-module"],{

/***/ "./src/app/theme/forms/form-validation/form-validation-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/forms/form-validation/form-validation-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FormValidationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationRoutingModule", function() { return FormValidationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_validation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-validation.component */ "./src/app/theme/forms/form-validation/form-validation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _form_validation_component__WEBPACK_IMPORTED_MODULE_2__["FormValidationComponent"],
        data: {
            title: 'Forms Validation',
            icon: 'ti-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form validation',
            status: true
        }
    }
];
var FormValidationRoutingModule = /** @class */ (function () {
    function FormValidationRoutingModule() {
    }
    FormValidationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormValidationRoutingModule);
    return FormValidationRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-validation/form-validation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/forms/form-validation/form-validation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card title=\"'Basic Inputs Validation'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Simple Input</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Text Input Validation\" formControlName=\"name\">\r\n            <div class=\"messages text-danger\" *ngIf=\"myForm.controls.name.errors?.required\">Name can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" class=\"form-control\" id=\"password\"  placeholder=\"Password input\" formControlName=\"password\">\r\n            <div class=\"messages text-danger error\" *ngIf=\"myForm.controls.password.errors?.required\">Password can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Repeat Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" class=\"form-control\" id=\"rpassword\" placeholder=\"Repeat Password\" formControlName=\"rpassword\">\r\n            <div class=\"messages text-danger\" *ngIf=\"myForm.controls.rpassword.errors?.required\">Repeat password can't be blank</div>\r\n            <div class=\"messages text-danger\" *ngIf=\"myForm.controls.rpassword.errors?.equalTo\">The passwords does not match</div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter valid e-mail address\" formControlName=\"email\">\r\n            <div class=\"messages text-danger\" *ngIf=\"myForm.controls.email.errors?.required\">Email can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-2 col-form-label\">Radio Buttons</label>\r\n          <div class=\"col-sm-10\">\r\n            <div class=\"form-check form-check-inline\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"radio\" value=\"option1\" formControlName=\"gender\"> Male\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"radio\" value=\"option2\" formControlName=\"gender\"> Female\r\n              </label>\r\n            </div>\r\n            <div class=\"messages text-danger\" *ngIf=\"myForm.controls.gender.errors?.required\">Gender can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2\"></label>\r\n          <div class=\"col-sm-10\">\r\n            <button type=\"submit\" class=\"btn btn-primary m-b-0\" [disabled]=\"!myForm.valid\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n    <!-- Basic Inputs Validation end -->\r\n    <!-- Tooltip Validation card start -->\r\n    <app-card title=\"'Tooltip Validation'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <form [formGroup]=\"mytooltipForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Username</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control tooltip-form\" id=\"usernameP\" formControlName=\"usernameP\" name=\"Username\" placeholder=\"Enter Username\">\r\n            <div class=\"messages text-danger tooltip-error\" placement=\"top\" ngbTooltip=\"Username can't be blank\" *ngIf=\"mytooltipForm.controls.usernameP.errors?.required\"><i class=\"text-danger icofont icofont-close-circled\"></i></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Email-id</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control tooltip-form\" id=\"EmailP\" formControlName=\"EmailP\" name=\"Email\" placeholder=\"Enter email id\">\r\n            <div class=\"messages text-danger tooltip-error\" placement=\"top\" ngbTooltip=\"Email can't be blank\" *ngIf=\"mytooltipForm.controls.EmailP.errors?.required\"><i class=\"text-danger icofont icofont-close-circled\"></i></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-2\"></label>\r\n          <div class=\"col-sm-10\">\r\n            <button type=\"submit\" class=\"btn btn-primary m-b-0\" [disabled]=\"!mytooltipForm.valid\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n    <!-- Tooltip Validation card end -->\r\n    <!-- Number Validation card start -->\r\n    <app-card title=\"'Number Validation'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <form [formGroup]=\"mynumberForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Integers Only</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" name=\"integer\" id=\"integer\" formControlName=\"integer\" placeholder=\"Integers Only\">\r\n            <div class=\"messages text-danger\" *ngIf=\"mynumberForm.controls.integer.errors?.required\">Integer can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Numbers Only</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" name=\"numeric\" id=\"numeric\" formControlName=\"numeric\" placeholder=\"Numbers Only\">\r\n            <div class=\"messages text-danger\" *ngIf=\"mynumberForm.controls.numeric.errors?.required\">Numeric can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Greater number</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" name=\"Number\" id=\"greater\" formControlName=\"greater\" placeholder=\"Number Greter than 50\">\r\n            <div class=\"messages text-danger\" *ngIf=\"mynumberForm.controls.greater.errors?.required\">Numeric can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Less number</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" name=\"Numbers\" id=\"less\" formControlName=\"less\" lt=\"5\" placeholder=\"Number Less than 50\">\r\n            <div class=\"messages text-danger\" *ngIf=\"mynumberForm.controls.less.errors?.required\">Numeric can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-2\"></label>\r\n          <div class=\"col-sm-10\">\r\n            <button type=\"submit\" [disabled]=\"!mynumberForm.valid\" class=\"btn btn-primary m-b-0\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n    <!-- Number Validation card end -->\r\n    <!-- component form start -->\r\n    <app-card title=\"'Form components Validation'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <form [formGroup]=\"checkdropForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2\">Radio Buttons</label>\r\n          <div class=\"col-sm-10\">\r\n            <div class=\"form-radio\">\r\n              <div class=\"radio radiofill radio-primary radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" value=\"free\" formControlName=\"area\">\r\n                  <i class=\"helper\"></i>Select here\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radiofill radio-primary radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" value=\"personal\" formControlName=\"area\">\r\n                  <i class=\"helper\"></i>Another select\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"messages text-danger\" *ngIf=\"checkdropForm.controls.area.errors?.required\">Member can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2\">Select Checkbox</label>\r\n          <div class=\"col-sm-10\">\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"HTML\" formControlName=\"job\">\r\n                <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span>HTML</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"CSS\" formControlName=\"job\">\r\n                <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span>CSS</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"messages text-danger\" *ngIf=\"checkdropForm.controls.job.errors?.required\">Language can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-2\"></label>\r\n          <div class=\"col-sm-10\">\r\n            <button type=\"submit\" class=\"btn btn-primary m-b-0\" [disabled]=\"!checkdropForm.valid\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n    <!-- component form end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-validation/form-validation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/forms/form-validation/form-validation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-validation/form-validation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/forms/form-validation/form-validation.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function() { return FormValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
        var name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        var rpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password)]);
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: name,
            email: email,
            password: password,
            rpassword: rpassword,
            gender: gender
        });
        /*Basic validation end*/
        /*number Validation start*/
        var integer = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].digits]);
        var numeric = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].number]);
        var greater = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].gt(50)]);
        var less = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].lt(50)]);
        this.mynumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            integer: integer,
            numeric: numeric,
            greater: greater,
            less: less
        });
        /*number validation end*/
        /*Tooltip Validation Start*/
        var usernameP = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        var EmailP = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.mytooltipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            usernameP: usernameP,
            EmailP: EmailP,
        });
        /*Tooltip Validation End*/
        /* component form */
        var area = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        var job = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.checkdropForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            area: area,
            job: job,
        });
        /* end component form */
    }
    FormValidationComponent.prototype.ngOnInit = function () {
    };
    FormValidationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.myForm);
    };
    FormValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-validation',
            template: __webpack_require__(/*! ./form-validation.component.html */ "./src/app/theme/forms/form-validation/form-validation.component.html"),
            styles: [__webpack_require__(/*! ./form-validation.component.scss */ "./src/app/theme/forms/form-validation/form-validation.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-validation/form-validation.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/forms/form-validation/form-validation.module.ts ***!
  \***********************************************************************/
/*! exports provided: FormValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationModule", function() { return FormValidationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_validation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-validation.component */ "./src/app/theme/forms/form-validation/form-validation.component.ts");
/* harmony import */ var _form_validation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-validation-routing.module */ "./src/app/theme/forms/form-validation/form-validation-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormValidationModule = /** @class */ (function () {
    function FormValidationModule() {
    }
    FormValidationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _form_validation_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormValidationRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [_form_validation_component__WEBPACK_IMPORTED_MODULE_2__["FormValidationComponent"]]
        })
    ], FormValidationModule);
    return FormValidationModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-validation-form-validation-module.js.map