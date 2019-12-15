(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-other-basic-other-module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicOtherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherRoutingModule", function() { return BasicOtherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_other_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-other.component */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _basic_other_component__WEBPACK_IMPORTED_MODULE_2__["BasicOtherComponent"],
        data: {
            title: 'Other',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - other',
            status: true
        }
    }
];
var BasicOtherRoutingModule = /** @class */ (function () {
    function BasicOtherRoutingModule() {
    }
    BasicOtherRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicOtherRoutingModule);
    return BasicOtherRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Panel card start -->\r\n    <app-card title=\"'Panel'\" [blockClass]=\"'panels-wells'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading bg-default txt-white\">\r\n              Default Panel\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              Panel Footer\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading bg-success\">\r\n              Success Panel\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n            </div>\r\n            <div class=\"panel-footer text-success\">\r\n              Panel Footer\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading bg-primary\">\r\n              Primary Panel\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n            </div>\r\n            <div class=\"panel-footer text-primary\">\r\n              Panel Footer\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"panel panel-danger\">\r\n            <div class=\"panel-heading bg-danger\">\r\n              Danger Panel\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n            </div>\r\n            <div class=\"panel-footer text-danger\">\r\n              Panel Footer\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"panel panel-warning\">\r\n            <div class=\"panel-heading bg-warning\">\r\n              Warning Panel\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n            </div>\r\n            <div class=\"panel-footer text-warning\">\r\n              Panel Footer\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading bg-info\">\r\n              Info Panel\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n            </div>\r\n            <div class=\"panel-footer text-info\">\r\n              Panel Footer\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end of row -->\r\n      </div>\r\n    </app-card>\r\n    <!-- Panel card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Wells card start -->\r\n    <app-card title=\"'Wells'\" [blockClass]=\"'panels-wells'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"well well-sm\">\r\n            Small Well\r\n          </div>\r\n          <div class=\"well\">\r\n            Normal Well\r\n          </div>\r\n          <div class=\"well well-lg\">\r\n            Large Well\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Wells card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <app-card title=\"'Default'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <ngb-pagination [collectionSize]=\"totalItems\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <app-card title=\"'Disabled'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [disabled]=\"true\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <app-card title=\"'Pagination Size'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardClass]=\"'o-hidden'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"sub-title m-t-15\">Large</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItemsLarge\" [maxSize]=\"maxSize\" size=\"lg\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">Medium</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">Small</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" size=\"sm\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <app-card title=\"'Pagination Advance'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true, ellipses = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts ***!
  \******************************************************************************/
/*! exports provided: BasicOtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherComponent", function() { return BasicOtherComponent; });
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

var BasicOtherComponent = /** @class */ (function () {
    function BasicOtherComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigTotalItemsLarge = 30;
        this.totalItems = 64;
        this.pageAdvance = 1;
    }
    BasicOtherComponent.prototype.ngOnInit = function () {
    };
    BasicOtherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-other',
            template: __webpack_require__(/*! ./basic-other.component.html */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html"),
            styles: [__webpack_require__(/*! ./basic-other.component.scss */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicOtherComponent);
    return BasicOtherComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts ***!
  \***************************************************************************/
/*! exports provided: BasicOtherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherModule", function() { return BasicOtherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_other_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-other.component */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
/* harmony import */ var _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-other-routing.module */ "./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicOtherModule = /** @class */ (function () {
    function BasicOtherModule() {
    }
    BasicOtherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicOtherRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_basic_other_component__WEBPACK_IMPORTED_MODULE_2__["BasicOtherComponent"]]
        })
    ], BasicOtherModule);
    return BasicOtherModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-other-basic-other-module.js.map