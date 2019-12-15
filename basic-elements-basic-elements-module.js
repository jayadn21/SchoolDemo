(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-elements-basic-elements-module"],{

/***/ "./src/app/theme/forms/basic-elements/basic-elements-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/forms/basic-elements/basic-elements-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicElementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElementsRoutingModule", function() { return BasicElementsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-elements.component */ "./src/app/theme/forms/basic-elements/basic-elements.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _basic_elements_component__WEBPACK_IMPORTED_MODULE_2__["BasicElementsComponent"],
        data: {
            title: 'Basic Form Inputs',
            icon: 'ti-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form components',
            status: true
        }
    }
];
var BasicElementsRoutingModule = /** @class */ (function () {
    function BasicElementsRoutingModule() {
    }
    BasicElementsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicElementsRoutingModule);
    return BasicElementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/theme/forms/basic-elements/basic-elements.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Basic Form Inputs card start -->\r\n    <app-card title=\"'Basic Form Inputs'\" [cardOptionBlock]=\"true\">\r\n      <h4 class=\"sub-title\">Basic Inputs</h4>\r\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n      <form>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Simple Input</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Placeholder</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type your title in Placeholder\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Read only</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"You can't change me\" readonly>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Disable Input</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Disabled text\" disabled>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Predefine Input</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" value=\"Enter yout content after me\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Select Box</label>\r\n          <div class=\"col-sm-10\">\r\n            <select name=\"select\" class=\"form-control\">\r\n              <option value=\"opt1\">Select One Value Only</option>\r\n              <option value=\"opt2\">Type 2</option>\r\n              <option value=\"opt3\">Type 3</option>\r\n              <option value=\"opt4\">Type 4</option>\r\n              <option value=\"opt5\">Type 5</option>\r\n              <option value=\"opt6\">Type 6</option>\r\n              <option value=\"opt7\">Type 7</option>\r\n              <option value=\"opt8\">Type 8</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Round Input</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-round\" placeholder=\".form-control-round\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Maximum Length</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Content must be in 6 characters\" maxlength=\"6\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Disable Autocomplete</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Autocomplete Off\" autocomplete=\"off\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Static Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <div class=\"form-control-static\">Hello !... This is static text</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Color</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"color\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Upload File</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"file\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Textarea</label>\r\n          <div class=\"col-sm-10\">\r\n            <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Default textarea\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <h4 class=\"sub-title\">Input Sizes</h4>\r\n          <form>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-12\">\r\n                <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\".form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-sm-6 mobile-inputs\">\r\n          <h4 class=\"sub-title\">Color Inputs</h4>\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control form-control-primary\" placeholder=\".form-control-primary\">\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-control-warning\" placeholder=\".form-control-warning\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-control-default\" placeholder=\".form-control-default\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-control-danger\" placeholder=\".form-control-danger\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-control-success\" placeholder=\".form-control-success\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-control-inverse\" placeholder=\".form-control-inverse\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-control-info\" placeholder=\".form-control-info\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 mobile-inputs m-t-20\">\r\n          <h4 class=\"sub-title\">Text-color</h4>\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control form-txt-primary\" placeholder=\".form-txt-primary\">\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-txt-warning\" placeholder=\".form-txt-warning\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-txt-default\" placeholder=\".form-txt-default\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-txt-danger\" placeholder=\".form-txt-danger\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-txt-success\" placeholder=\".form-txt-success\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-txt-inverse\" placeholder=\".form-txt-inverse\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-txt-info\" placeholder=\".form-txt-info\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-sm-6 mobile-inputs m-t-20\">\r\n          <h4 class=\"sub-title\">Background-color</h4>\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control form-bg-primary\" placeholder=\".form-bg-primary\">\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-bg-warning\" placeholder=\".form-bg-warning\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-bg-default\" placeholder=\".form-bg-default\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-bg-danger\" placeholder=\".form-bg-danger\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-bg-success\" placeholder=\".form-bg-success\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-bg-inverse\" placeholder=\".form-bg-inverse\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control form-bg-info\" placeholder=\".form-bg-info\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Basic Form Inputs card end -->\r\n    <!-- Input Grid card start -->\r\n    <app-card title=\"'Input Grid'\" [cardOptionBlock]=\"true\">\r\n      <h4 class=\"sub-title\">Basic Inputs</h4>\r\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n      <form>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-1\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-1\">\r\n          </div>\r\n          <div class=\"col-sm-11\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-11\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-2\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-2\">\r\n          </div>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-10\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-3\">\r\n          </div>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-9\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-4\">\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-8\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-5\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-5\">\r\n          </div>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-7\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-6\">\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-6\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-12\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <h4 class=\"sub-title\">Flex Inputs</h4>\r\n      <form>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-4\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-6\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-8\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-10\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n    <!-- Input Grid card end -->\r\n    <!-- Input Validation card start -->\r\n    <app-card title=\"'Input Validation'\" [cardOptionBlock]=\"true\">\r\n      <h4 class=\"sub-title\">Input Validation</h4>\r\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n      <div class=\"form-group has-success row\">\r\n        <div class=\"col-sm-2\">\r\n          <label class=\"col-form-label\" for=\"inputSuccess1\">Input with success</label>\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\r\n          <div class=\"col-form-label\">Success! You've done it.</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group has-warning row\">\r\n        <div class=\"col-sm-2\">\r\n          <label class=\"col-form-label\" for=\"inputWarning1\">Input with warning</label>\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\r\n          <div class=\"col-form-label\">Shucks, check the formatting of that and try again.</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group has-danger row\">\r\n        <div class=\"col-sm-2\">\r\n          <label class=\"col-form-label\" for=\"inputDanger1\">Input with danger</label>\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\r\n          <div class=\"col-form-label\">Sorry, that username's taken. Try another?</div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Input Validation card end -->\r\n    <!-- Input Alignment card start -->\r\n    <app-card title=\"'Input Alignment'\" [cardOptionBlock]=\"true\">\r\n      <h4 class=\"sub-title\">Input Alignment</h4>\r\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n      <form>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Normal Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-normal\" placeholder=\".form-control-normal\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Bold Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-bold\" placeholder=\".form-control-bold\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Capitalize Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-capitalize\" placeholder=\".form-control-capitalize\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Uppercase Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-uppercase\" placeholder=\".form-control-uppercase\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Lowercase Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-lowercase\" placeholder=\".form-control-lowercase\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Varient Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-variant\" placeholder=\".form-control-variant\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Left-Align Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-left\" placeholder=\".form-control-left\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Center-Align Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-center\" placeholder=\".form-control-center\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Right-Align Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-right\" placeholder=\".form-control-right\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">RTL Text</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control form-control-rtl\" placeholder=\".form-control-rtl\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n    <!-- Input Alignment card end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/theme/forms/basic-elements/basic-elements.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/forms/basic-elements/basic-elements.component.ts ***!
  \************************************************************************/
/*! exports provided: BasicElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElementsComponent", function() { return BasicElementsComponent; });
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

var BasicElementsComponent = /** @class */ (function () {
    function BasicElementsComponent() {
    }
    BasicElementsComponent.prototype.ngOnInit = function () {
    };
    BasicElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-elements',
            template: __webpack_require__(/*! ./basic-elements.component.html */ "./src/app/theme/forms/basic-elements/basic-elements.component.html"),
            styles: [__webpack_require__(/*! ./basic-elements.component.scss */ "./src/app/theme/forms/basic-elements/basic-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicElementsComponent);
    return BasicElementsComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/forms/basic-elements/basic-elements.module.ts ***!
  \*********************************************************************/
/*! exports provided: BasicElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElementsModule", function() { return BasicElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-elements.component */ "./src/app/theme/forms/basic-elements/basic-elements.component.ts");
/* harmony import */ var _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-elements-routing.module */ "./src/app/theme/forms/basic-elements/basic-elements-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicElementsModule = /** @class */ (function () {
    function BasicElementsModule() {
    }
    BasicElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicElementsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_basic_elements_component__WEBPACK_IMPORTED_MODULE_2__["BasicElementsComponent"]]
        })
    ], BasicElementsModule);
    return BasicElementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-elements-basic-elements-module.js.map