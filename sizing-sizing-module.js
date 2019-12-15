(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sizing-sizing-module"],{

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/sizing/sizing-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SizingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizingRoutingModule", function() { return SizingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sizing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sizing.component */ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _sizing_component__WEBPACK_IMPORTED_MODULE_2__["SizingComponent"],
        data: {
            title: 'Bootstrap Table Sizes',
            icon: 'ti-receipt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sizing table',
            status: true
        }
    }
];
var SizingRoutingModule = /** @class */ (function () {
    function SizingRoutingModule() {
    }
    SizingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SizingRoutingModule);
    return SizingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/sizing/sizing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Extra Large table start -->\r\n    <app-card title=\"'Extra Large table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Example of Extra large table, Add <code>.table-xl</code> class to the <code>.table</code> to create a table with extra large spacing. Extra larger table all rows have <code>1.25rem</code> height.</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-xl\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Extra Large table end -->\r\n    <!-- Large table start -->\r\n    <app-card title=\"'Large table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Example of large table, Add <code>.table-lg</code> class to the <code>.table</code> to create a table with  large spacing. larger table all rows have <code>0.9rem</code> height.</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-lg\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Large table end -->\r\n    <!-- Default table start-->\r\n    <app-card title=\"'Default table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Example of default table, Add <code>.table-de</code> class to the <code>.table</code> to create a table with default spacing. Default table all rows have <code>0.75rem</code> height.</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-de\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Default table end-->\r\n    <!-- Small table start-->\r\n    <app-card title=\"'small table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Example of small table, Add <code>.table-sm</code> class to the <code>.table</code> to create a table with small spacing. Small table all rows have <code>0.6rem</code> height.</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-sm\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Small table start-->\r\n    <!-- Extra small table start-->\r\n    <app-card title=\"'Extra small table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Example of extra small table, Add <code>.table-xs</code> class to the <code>.table</code> to create a table with extra small spacing. Extra small table all rows have <code>0.4rem</code> height.</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-xs\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Extra small table start-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/sizing/sizing.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts ***!
  \************************************************************************/
/*! exports provided: SizingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizingComponent", function() { return SizingComponent; });
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

var SizingComponent = /** @class */ (function () {
    function SizingComponent() {
    }
    SizingComponent.prototype.ngOnInit = function () {
    };
    SizingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sizing',
            template: __webpack_require__(/*! ./sizing.component.html */ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.html"),
            styles: [__webpack_require__(/*! ./sizing.component.scss */ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SizingComponent);
    return SizingComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/sizing/sizing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SizingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizingModule", function() { return SizingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sizing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sizing.component */ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts");
/* harmony import */ var _sizing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sizing-routing.module */ "./src/app/theme/table/bootstrap-table/sizing/sizing-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SizingModule = /** @class */ (function () {
    function SizingModule() {
    }
    SizingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sizing_routing_module__WEBPACK_IMPORTED_MODULE_3__["SizingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_sizing_component__WEBPACK_IMPORTED_MODULE_2__["SizingComponent"]]
        })
    ], SizingModule);
    return SizingModule;
}());



/***/ })

}]);
//# sourceMappingURL=sizing-sizing-module.js.map