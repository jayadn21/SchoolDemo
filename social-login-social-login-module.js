(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-login-social-login-module"],{

/***/ "./src/app/theme/auth/login/social-login/social-login-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SocialLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginRoutingModule", function() { return SocialLoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-login.component */ "./src/app/theme/auth/login/social-login/social-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _social_login_component__WEBPACK_IMPORTED_MODULE_2__["SocialLoginComponent"],
        data: {
            title: 'Social Login'
        }
    }
];
var SocialLoginRoutingModule = /** @class */ (function () {
    function SocialLoginRoutingModule() {
    }
    SocialLoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SocialLoginRoutingModule);
    return SocialLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"signin-card card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <h3 class=\"text-center txt-primary\">Sign In</h3>\r\n                </div>\r\n                <div class=\"col-md-9\">\r\n                  <p class=\"text-inverse m-t-25 text-left\">Don't have an account? <a [routerLink]=\"['/auth/registration/simple/']\"> Register </a> here for free!</p>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-facebook m-b-20\"><i class=\"fa fa-facebook\"></i>Sign in with facebook</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-twitter m-b-20\"><i class=\"fa fa-twitter\"></i>Sign in with twitter</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n              <div class=\"input-group\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"forgot-phone text-right f-right\">\r\n                    <a [routerLink]=\"['/auth/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forgot Password?</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">LOGIN</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: SocialLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginComponent", function() { return SocialLoginComponent; });
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

var SocialLoginComponent = /** @class */ (function () {
    function SocialLoginComponent() {
    }
    SocialLoginComponent.prototype.ngOnInit = function () {
    };
    SocialLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-login',
            template: __webpack_require__(/*! ./social-login.component.html */ "./src/app/theme/auth/login/social-login/social-login.component.html"),
            styles: [__webpack_require__(/*! ./social-login.component.scss */ "./src/app/theme/auth/login/social-login/social-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLoginComponent);
    return SocialLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.module.ts ***!
  \**********************************************************************/
/*! exports provided: SocialLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-login.component */ "./src/app/theme/auth/login/social-login/social-login.component.ts");
/* harmony import */ var _social_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-login-routing.module */ "./src/app/theme/auth/login/social-login/social-login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialLoginModule = /** @class */ (function () {
    function SocialLoginModule() {
    }
    SocialLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _social_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialLoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_social_login_component__WEBPACK_IMPORTED_MODULE_2__["SocialLoginComponent"]]
        })
    ], SocialLoginModule);
    return SocialLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-login-social-login-module.js.map