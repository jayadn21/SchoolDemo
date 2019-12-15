(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-email-email-template-email-template-module"],{

/***/ "./src/app/theme/email/email-template/email-template-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-template-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EmailTemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateRoutingModule", function() { return EmailTemplateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        data: {
            title: 'Email Template',
            status: false
        },
        children: [
            {
                path: 'email-welcome',
                loadChildren: './email-welcome/email-welcome.module#EmailWelcomeModule'
            },
            {
                path: 'email-reset-password',
                loadChildren: './email-reset-password/email-reset-password.module#EmailResetPasswordModule'
            },
            {
                path: 'email-newsletter',
                loadChildren: './email-newsletter/email-newsletter.module#EmailNewsletterModule'
            },
            {
                path: 'app-launch',
                loadChildren: './email-app-launch/email-app-launch.module#EmailAppLaunchModule'
            },
            {
                path: 'activation-code',
                loadChildren: './email-active-code/email-active-code.module#EmailActiveCodeModule'
            }
        ]
    }
];
var EmailTemplateRoutingModule = /** @class */ (function () {
    function EmailTemplateRoutingModule() {
    }
    EmailTemplateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailTemplateRoutingModule);
    return EmailTemplateRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-template.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-template.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template-routing.module */ "./src/app/theme/email/email-template/email-template-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-email-email-template-email-template-module.js.map