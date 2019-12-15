(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-maintenance-coming-soon-coming-soon-module"],{

/***/ "./src/app/theme/maintenance/coming-soon/coming-soon-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/maintenance/coming-soon/coming-soon-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ComingSoonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonRoutingModule", function() { return ComingSoonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon.component */ "./src/app/theme/maintenance/coming-soon/coming-soon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _coming_soon_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonComponent"],
        data: {
            title: 'Coming Soon',
            icon: 'ti-settings',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - coming soon',
            status: true
        }
    }
];
var ComingSoonRoutingModule = /** @class */ (function () {
    function ComingSoonRoutingModule() {
    }
    ComingSoonRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ComingSoonRoutingModule);
    return ComingSoonRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/coming-soon/coming-soon.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/theme/maintenance/coming-soon/coming-soon.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card title=\"'Select Your Layout'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/comming-soon/index1.html\" target=\"_blank\"><img src=\"assets/images/coming-soon/cs-1.jpg\" alt=\"Layout-1\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/comming-soon/index2.html\" target=\"_blank\"><img src=\"assets/images/coming-soon/cs-2.jpg\" alt=\"Layout-1\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/maintenance/coming-soon/coming-soon.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/theme/maintenance/coming-soon/coming-soon.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/maintenance/coming-soon/coming-soon.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/maintenance/coming-soon/coming-soon.component.ts ***!
  \************************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
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

var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    ComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/theme/maintenance/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.scss */ "./src/app/theme/maintenance/coming-soon/coming-soon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/coming-soon/coming-soon.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/maintenance/coming-soon/coming-soon.module.ts ***!
  \*********************************************************************/
/*! exports provided: ComingSoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon.component */ "./src/app/theme/maintenance/coming-soon/coming-soon.component.ts");
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-soon-routing.module */ "./src/app/theme/maintenance/coming-soon/coming-soon-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComingSoonRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_coming_soon_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonComponent"]]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-maintenance-coming-soon-coming-soon-module.js.map