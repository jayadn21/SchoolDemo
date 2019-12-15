(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-reg-social-reg-module"],{

/***/ "./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SocialRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegRoutingModule", function() { return SocialRegRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-reg.component */ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _social_reg_component__WEBPACK_IMPORTED_MODULE_2__["SocialRegComponent"],
        data: {
            title: 'Social Registration'
        }
    }
];
var SocialRegRoutingModule = /** @class */ (function () {
    function SocialRegRoutingModule() {
    }
    SocialRegRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SocialRegRoutingModule);
    return SocialRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"signup-card card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-facebook m-b-20\"><i class=\"fa fa-facebook\"></i>Sign in with facebook</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-twitter m-b-0\"><i class=\"fa fa-twitter\"></i>Sign in with twitter</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"Gradient Able\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.component.ts ***!
  \****************************************************************************/
/*! exports provided: SocialRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegComponent", function() { return SocialRegComponent; });
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

var SocialRegComponent = /** @class */ (function () {
    function SocialRegComponent() {
    }
    SocialRegComponent.prototype.ngOnInit = function () {
    };
    SocialRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-reg',
            template: __webpack_require__(/*! ./social-reg.component.html */ "./src/app/theme/auth/registration/social-reg/social-reg.component.html"),
            styles: [__webpack_require__(/*! ./social-reg.component.scss */ "./src/app/theme/auth/registration/social-reg/social-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialRegComponent);
    return SocialRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.module.ts ***!
  \*************************************************************************/
/*! exports provided: SocialRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegModule", function() { return SocialRegModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-reg.component */ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
/* harmony import */ var _social_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-reg-routing.module */ "./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialRegModule = /** @class */ (function () {
    function SocialRegModule() {
    }
    SocialRegModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _social_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialRegRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_social_reg_component__WEBPACK_IMPORTED_MODULE_2__["SocialRegComponent"]]
        })
    ], SocialRegModule);
    return SocialRegModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-reg-social-reg-module.js.map