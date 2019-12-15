(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-compose-email-compose-module"],{

/***/ "./src/app/theme/email/email-compose/email-compose-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/email/email-compose/email-compose-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmailComposeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposeRoutingModule", function() { return EmailComposeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-compose.component */ "./src/app/theme/email/email-compose/email-compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _email_compose_component__WEBPACK_IMPORTED_MODULE_2__["EmailComposeComponent"],
        data: {
            title: 'Compose Email',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - compose email',
            status: true
        }
    }
];
var EmailComposeRoutingModule = /** @class */ (function () {
    function EmailComposeRoutingModule() {
    }
    EmailComposeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailComposeRoutingModule);
    return EmailComposeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.component.html":
/*!************************************************************************!*\
  !*** ./src/app/theme/email/email-compose/email-compose.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"card\">\r\n    <!-- Email-card start -->\r\n    <div class=\"card-block email-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-head row\">\r\n            <div class=\"user-face\">\r\n              <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-box-head row justify-content-end\">\r\n            <div class=\"col-auto\">\r\n              <form class=\"form-material\" action=\"javascript:\">\r\n                <div class=\"material-group\">\r\n                  <div class=\" form-default\">\r\n                    <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\" placeholder=\"Search\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- Left-side section start -->\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-body\">\r\n            <div class=\"p-20 text-center\">\r\n            </div>\r\n            <ul class=\"page-list nav nav-tabs flex-column\">\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-inbox\"></i> Inbox\r\n                  <span class=\"label label-primary float-right\">6</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-star\"></i> Starred\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-file-text\"></i> Drafts\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-paper-plane\"></i> Sent Mail\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-ui-delete\"></i> Trash\r\n                  <span class=\"label label-info float-right\">30</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"p-20 label-list\">\r\n              <li>\r\n                <h5>Labels</h5>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-work\" href=\"javascript:\">Work</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-design\" href=\"javascript:\">Design</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-family\" href=\"javascript:\">Family</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-friends\" href=\"javascript:\">Friends</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-office\" href=\"javascript:\">Office</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- Left-side section end -->\r\n        <!-- Right-side section start -->\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-body\">\r\n            <div class=\"mail-body\">\r\n\r\n              <div class=\"mail-body-content\">\r\n                <form class=\"form-material\" action=\"javascript:\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"email\" name=\"footer-email\" class=\"form-control\" required=\"\" placeholder=\"To\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group form-primary\">\r\n                          <input type=\"email\" name=\"footer-email\" class=\"form-control\" required=\"\" placeholder=\"Cc\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group form-primary\">\r\n                          <input type=\"email\" name=\"footer-email\" class=\"form-control\" required=\"\" placeholder=\"Bcc\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\" placeholder=\"Subject\">\r\n                  </div>\r\n                  <textarea style=\"height: 200px;\" rows=\"5\" name=\"name\" class=\"form-control\">Put your things hear</textarea>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Right-side section end -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/email/email-compose/email-compose.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/email/email-compose/email-compose.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposeComponent", function() { return EmailComposeComponent; });
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

var EmailComposeComponent = /** @class */ (function () {
    function EmailComposeComponent() {
    }
    EmailComposeComponent.prototype.ngOnInit = function () {
    };
    EmailComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-compose',
            template: __webpack_require__(/*! ./email-compose.component.html */ "./src/app/theme/email/email-compose/email-compose.component.html"),
            styles: [__webpack_require__(/*! ./email-compose.component.scss */ "./src/app/theme/email/email-compose/email-compose.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComposeComponent);
    return EmailComposeComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/email/email-compose/email-compose.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmailComposeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposeModule", function() { return EmailComposeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-compose.component */ "./src/app/theme/email/email-compose/email-compose.component.ts");
/* harmony import */ var _email_compose_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-compose-routing.module */ "./src/app/theme/email/email-compose/email-compose-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmailComposeModule = /** @class */ (function () {
    function EmailComposeModule() {
    }
    EmailComposeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_compose_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailComposeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_email_compose_component__WEBPACK_IMPORTED_MODULE_2__["EmailComposeComponent"]]
        })
    ], EmailComposeModule);
    return EmailComposeModule;
}());



/***/ })

}]);
//# sourceMappingURL=email-compose-email-compose-module.js.map