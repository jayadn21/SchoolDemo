(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-maintenance-error-error-module"],{

/***/ "./src/app/theme/maintenance/error/error-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.component */ "./src/app/theme/maintenance/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"],
        data: {
            title: 'Error pages',
            icon: 'ti-settings',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - error',
            status: true
        }
    }
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card title=\"'Error Found'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/2/index.html\" target=\"_blank\"><img src=\"assets/images/error/error-1.jpg\" alt=\"Layout-1\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-bubble.html\" target=\"_blank\"><img src=\"assets/images/error/error-2.jpg\" alt=\"Layout-2\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-flat.html\" target=\"_blank\"><img src=\"assets/images/error/error-3.jpg\" alt=\"Layout-3\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-image.html\" target=\"_blank\"><img src=\"assets/images/error/error-4.jpg\" alt=\"Layout-4\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-mozaic.html\" target=\"_blank\"><img src=\"assets/images/error/error-5.jpg\" alt=\"Layout-5\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/maintenance/error/error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/theme/maintenance/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/theme/maintenance/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/maintenance/error/error.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.component */ "./src/app/theme/maintenance/error/error.component.ts");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/theme/maintenance/error/error-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-maintenance-error-error-module.js.map