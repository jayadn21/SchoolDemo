(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-email-email-module"],{

/***/ "./src/app/theme/email/email-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/email/email-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
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
            title: 'Email',
            status: false
        },
        children: [
            {
                path: 'email-compose',
                loadChildren: './email-compose/email-compose.module#EmailComposeModule'
            },
            {
                path: 'email-inbox',
                loadChildren: './email-inbox/email-inbox.module#EmailInboxModule'
            },
            {
                path: 'email-read',
                loadChildren: './email-read/email-read.module#EmailReadModule'
            }
        ]
    }
];
var EmailRoutingModule = /** @class */ (function () {
    function EmailRoutingModule() {
    }
    EmailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailRoutingModule);
    return EmailRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/email/email.module.ts ***!
  \*********************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/theme/email/email-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-email-email-module.js.map