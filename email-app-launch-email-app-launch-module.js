(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-app-launch-email-app-launch-module"],{

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailAppLaunchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAppLaunchRoutingModule", function() { return EmailAppLaunchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-app-launch.component */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__["EmailAppLaunchComponent"],
        data: {
            title: 'App Launch',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - app launch',
            status: true
        }
    }
];
var EmailAppLaunchRoutingModule = /** @class */ (function () {
    function EmailAppLaunchRoutingModule() {
    }
    EmailAppLaunchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailAppLaunchRoutingModule);
    return EmailAppLaunchRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--[if (gte mso 9)|(IE)]>\r\n<table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n  <tr>\r\n    <td>\r\n<![endif]-->\r\n<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse; width: 100%; max-width: 600px;\" class=\"content\">\r\n  <tr>\r\n    <td style=\"padding: 15px 10px 15px 10px;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <tr>\r\n          <td align=\"center\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 12px; line-height: 1;\">\r\n            Email not displaying correctly?  <a href=\"javascript:\" style=\"color:#0073AA;\">View it in your browser</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#0073AA \" style=\"padding: 20px 20px 20px 20px; color: #ffffff; font-family: Arial, sans-serif; font-size: 36px; font-weight: bold;\">\r\n      <img src=\"assets/images/email/launch.png\" alt=\"Launch Icon\" width=\"200\" height=\"200\" style=\"display:block;\" /><br/>\r\n      Our App is live!\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#ffffff\" style=\"padding: 40px 20px 40px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 20px; line-height: 30px; border-bottom: 1px solid #f6f6f6;\">\r\n      <b>You can sign up with 50% discount only for today!</b>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#f9f9f9\" style=\"padding: 30px 20px 30px 20px; font-family: Arial, sans-serif; border-bottom: 1px solid #f6f6f6;\">\r\n      <table bgcolor=\"#0073AA\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"buttonwrapper\">\r\n        <tr>\r\n          <td align=\"center\" height=\"50\" style=\" padding: 0 25px 0 25px; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold;\" class=\"button\">\r\n            <a href=\"javascript:\" style=\"color: #ffffff; text-align: center; text-decoration: none;\">Sign Up Now</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 30px 20px 10px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 20px; line-height: 30px;\">\r\n      How our App can help you\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 10px 20px 5px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px;\">\r\n      <b>1.</b> Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus.\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 10px 20px 5px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px;\">\r\n      <b>2.</b> Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus.\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 10px 20px 30px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px; border-bottom: 1px solid #f6f6f6;\">\r\n      <b>3.</b> Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus.\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 30px 20px 10px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 20px; line-height: 30px;\">\r\n      More Info\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 10px 20px 20px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px; border-bottom: 1px solid #f6f6f6;\">\r\n      Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus. Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#dddddd\" style=\"padding: 15px 10px 15px 10px; color: #555555; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;\">\r\n      <b>Company Inc.</b><br/>985 Example St. &bull; Suite A1S2 &bull; San Francisco, CA 12458 USA\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td style=\"padding: 15px 10px 15px 10px;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <tr>\r\n          <td align=\"center\" width=\"100%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 12px;\">\r\n            2017-18 &copy; <a href=\"javascript:\" style=\"color: #0073AA;\">Able Pro 7.0</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<!--[if (gte mso 9)|(IE)]>\r\n</td>\r\n</tr>\r\n</table>\r\n<![endif]-->\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {\n  body[yahoo] .buttonwrapper {\n    background-color: transparent !important; }\n  body[yahoo] .button {\n    padding: 0 !important; }\n  body[yahoo] .button a {\n    background-color: #9b59b6;\n    padding: 15px 25px !important; } }\n\n@media only screen and (min-device-width: 601px) {\n  .content {\n    width: 600px !important; }\n  .col387 {\n    width: 387px !important; } }\n\ntd, th {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmailAppLaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAppLaunchComponent", function() { return EmailAppLaunchComponent; });
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

var EmailAppLaunchComponent = /** @class */ (function () {
    function EmailAppLaunchComponent() {
        document.querySelector('body').setAttribute('yahoo', 'fix');
        document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #34495E; background-image: none;');
    }
    EmailAppLaunchComponent.prototype.ngOnInit = function () {
    };
    EmailAppLaunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-app-launch',
            template: __webpack_require__(/*! ./email-app-launch.component.html */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.html"),
            styles: [__webpack_require__(/*! ./email-app-launch.component.scss */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EmailAppLaunchComponent);
    return EmailAppLaunchComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EmailAppLaunchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAppLaunchModule", function() { return EmailAppLaunchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-app-launch.component */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts");
/* harmony import */ var _email_app_launch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-app-launch-routing.module */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmailAppLaunchModule = /** @class */ (function () {
    function EmailAppLaunchModule() {
    }
    EmailAppLaunchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_app_launch_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailAppLaunchRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__["EmailAppLaunchComponent"]]
        })
    ], EmailAppLaunchModule);
    return EmailAppLaunchModule;
}());



/***/ })

}]);
//# sourceMappingURL=email-app-launch-email-app-launch-module.js.map