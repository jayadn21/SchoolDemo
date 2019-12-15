(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-reg-basic-reg-module"],{

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegRoutingModule", function() { return BasicRegRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-reg.component */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _basic_reg_component__WEBPACK_IMPORTED_MODULE_2__["BasicRegComponent"],
        data: {
            title: 'Simple Registration'
        }
    }
];
var BasicRegRoutingModule = /** @class */ (function () {
    function BasicRegRoutingModule() {
    }
    BasicRegRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicRegRoutingModule);
    return BasicRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"signup-card card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"Gradient Able\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegComponent", function() { return BasicRegComponent; });
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

var BasicRegComponent = /** @class */ (function () {
    function BasicRegComponent() {
    }
    BasicRegComponent.prototype.ngOnInit = function () {
    };
    BasicRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-reg',
            template: __webpack_require__(/*! ./basic-reg.component.html */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.html"),
            styles: [__webpack_require__(/*! ./basic-reg.component.scss */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicRegComponent);
    return BasicRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.module.ts ***!
  \***********************************************************************/
/*! exports provided: BasicRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegModule", function() { return BasicRegModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-reg.component */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts");
/* harmony import */ var _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-reg-routing.module */ "./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicRegModule = /** @class */ (function () {
    function BasicRegModule() {
    }
    BasicRegModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicRegRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_basic_reg_component__WEBPACK_IMPORTED_MODULE_2__["BasicRegComponent"]]
        })
    ], BasicRegModule);
    return BasicRegModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-reg-basic-reg-module.js.map