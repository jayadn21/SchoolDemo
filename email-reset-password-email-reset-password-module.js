(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-reset-password-email-reset-password-module"],{

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmailResetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResetPasswordRoutingModule", function() { return EmailResetPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-reset-password.component */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["EmailResetPasswordComponent"],
        data: {
            title: 'Password Reset',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - password reset',
            status: true
        }
    }
];
var EmailResetPasswordRoutingModule = /** @class */ (function () {
    function EmailResetPasswordRoutingModule() {
    }
    EmailResetPasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailResetPasswordRoutingModule);
    return EmailResetPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--[if (gte mso 9)|(IE)]>\r\n<table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n  <tr>\r\n    <td>\r\n<![endif]-->\r\n<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse; width: 100%; max-width: 600px;\" class=\"content\">\r\n  <tr>\r\n    <td style=\"padding: 15px 10px 15px 10px;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <tr>\r\n          <td align=\"center\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 12px;\">\r\n            Email not displaying correctly?  <a href=\"javascript:\" style=\"color: #0073AA;\">View it in your browser</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#0073AA\" style=\"padding: 20px 20px 20px 20px; color: #ffffff; font-family: Arial, sans-serif; font-size: 36px; font-weight: bold;\">\r\n      <img src=\"assets/images/email/proui_logo.png\" alt=\"ProUI Logo\" width=\"152\" height=\"152\" style=\"display:block;\" />\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#ffffff\" style=\"padding: 40px 20px 40px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 20px; line-height: 30px; border-bottom: 1px solid #f6f6f6;\">\r\n      <b>Forgot your password? Let's get you a new one!</b>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#f9f9f9\" style=\"padding: 20px 20px 0 20px; color: #555555; font-family: Arial, sans-serif; font-size: 20px; line-height: 30px;\">\r\n      <b>Account:</b> cl***03@example.com\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#f9f9f9\" style=\"padding: 30px 20px 30px 20px; font-family: Arial, sans-serif; border-bottom: 1px solid #f6f6f6;\">\r\n      <table bgcolor=\"#0073AA\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"buttonwrapper\">\r\n        <tr>\r\n          <td align=\"center\" height=\"50\" style=\" padding: 0 25px 0 25px; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold;\" class=\"button\">\r\n            <a href=\"javascript:\" style=\"color: #ffffff; text-align: center; text-decoration: none;\">Reset Password</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#ffffff\" style=\"padding: 10px 20px 10px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px;\">\r\n      Help! <a href=\"javascript:\" style=\"color: #1b8bf9;\">I didn't request this!</a>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#dddddd\" style=\"padding: 15px 10px 15px 10px; color: #555555; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;\">\r\n      <b>Company Inc.</b><br/>985 Example St. &bull; Suite A1S2 &bull; San Francisco, CA 12458 USA\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td style=\"padding: 15px 10px 15px 10px;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <tr>\r\n          <td align=\"center\" width=\"100%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 12px;\">\r\n            2017-18 &copy; <a href=\"javascript:\" style=\"color: #0073AA;\">Able 7.0</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<!--[if (gte mso 9)|(IE)]>\r\n</td>\r\n</tr>\r\n</table>\r\n<![endif]-->\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {\n  body[yahoo] .buttonwrapper {\n    background-color: transparent !important; }\n  body[yahoo] .button {\n    padding: 0 !important; }\n  body[yahoo] .button a {\n    background-color: #9b59b6;\n    padding: 15px 25px !important; } }\n\n@media only screen and (min-device-width: 601px) {\n  .content {\n    width: 600px !important; }\n  .col387 {\n    width: 387px !important; } }\n\ntd, th {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EmailResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResetPasswordComponent", function() { return EmailResetPasswordComponent; });
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

var EmailResetPasswordComponent = /** @class */ (function () {
    function EmailResetPasswordComponent() {
        document.querySelector('body').setAttribute('yahoo', 'fix');
        document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #34495E; background-image: none;');
    }
    EmailResetPasswordComponent.prototype.ngOnInit = function () {
    };
    EmailResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-reset-password',
            template: __webpack_require__(/*! ./email-reset-password.component.html */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.html"),
            styles: [__webpack_require__(/*! ./email-reset-password.component.scss */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EmailResetPasswordComponent);
    return EmailResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResetPasswordModule", function() { return EmailResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-reset-password.component */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts");
/* harmony import */ var _email_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-reset-password-routing.module */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmailResetPasswordModule = /** @class */ (function () {
    function EmailResetPasswordModule() {
    }
    EmailResetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailResetPasswordRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["EmailResetPasswordComponent"]]
        })
    ], EmailResetPasswordModule);
    return EmailResetPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=email-reset-password-email-reset-password-module.js.map