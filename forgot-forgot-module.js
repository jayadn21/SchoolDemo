(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./src/app/theme/auth/forgot/forgot-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/auth/forgot/forgot-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ForgotRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotRoutingModule", function() { return ForgotRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.component */ "./src/app/theme/auth/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"],
        data: {
            title: 'Forgot'
        }
    }
];
var ForgotRoutingModule = /** @class */ (function () {
    function ForgotRoutingModule() {
    }
    ForgotRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ForgotRoutingModule);
    return ForgotRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/forgot/forgot.component.html":
/*!*********************************************************!*\
  !*** ./src/app/theme/auth/forgot/forgot.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-left\">Recover you password</h3>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-right\">Back to <a [routerLink]=\"['/auth/login/simple']\">Login.</a></p>\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"Your Email Address\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Reset Password</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"Gradient Able\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/forgot/forgot.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/theme/auth/forgot/forgot.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/auth/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
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

var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/theme/auth/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/theme/auth/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/forgot/forgot.module.ts":
/*!****************************************************!*\
  !*** ./src/app/theme/auth/forgot/forgot.module.ts ***!
  \****************************************************/
/*! exports provided: ForgotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.component */ "./src/app/theme/auth/forgot/forgot.component.ts");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/theme/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForgotModule = /** @class */ (function () {
    function ForgotModule() {
    }
    ForgotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forgot_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForgotRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"]]
        })
    ], ForgotModule);
    return ForgotModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module.js.map