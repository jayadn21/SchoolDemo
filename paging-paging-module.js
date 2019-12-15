(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paging-paging-module"],{

/***/ "./src/app/theme/table/data-table/paging/paging-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/table/data-table/paging/paging-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: PagingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingRoutingModule", function() { return PagingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _paging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paging.component */ "./src/app/theme/table/data-table/paging/paging.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _paging_component__WEBPACK_IMPORTED_MODULE_2__["PagingComponent"],
        data: {
            title: 'Paging Table',
            icon: 'ti-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - paging table',
            status: true
        }
    }
];
var PagingRoutingModule = /** @class */ (function () {
    function PagingRoutingModule() {
    }
    PagingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagingRoutingModule);
    return PagingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/paging/paging.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/table/data-table/paging/paging.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card title=\"'Ng-X Pagination'\">\r\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n      <ngx-datatable\r\n        class=\"data-table\"\r\n        [rows]=\"rowsClient\"\r\n        [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\"\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\"\r\n        [limit]=\"10\">\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/paging/paging.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/table/data-table/paging/paging.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/paging/paging.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/table/data-table/paging/paging.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingComponent", function() { return PagingComponent; });
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

var PagingComponent = /** @class */ (function () {
    function PagingComponent() {
        var _this = this;
        this.rowsClient = [];
        this.fetch(function (data) {
            _this.rowsClient = data;
        });
    }
    PagingComponent.prototype.ngOnInit = function () {
    };
    PagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    PagingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paging',
            template: __webpack_require__(/*! ./paging.component.html */ "./src/app/theme/table/data-table/paging/paging.component.html"),
            styles: [__webpack_require__(/*! ./paging.component.scss */ "./src/app/theme/table/data-table/paging/paging.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagingComponent);
    return PagingComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/paging/paging.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/table/data-table/paging/paging.module.ts ***!
  \****************************************************************/
/*! exports provided: PagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingModule", function() { return PagingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _paging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paging.component */ "./src/app/theme/table/data-table/paging/paging.component.ts");
/* harmony import */ var _paging_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paging-routing.module */ "./src/app/theme/table/data-table/paging/paging-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagingModule = /** @class */ (function () {
    function PagingModule() {
    }
    PagingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _paging_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"]
            ],
            declarations: [_paging_component__WEBPACK_IMPORTED_MODULE_2__["PagingComponent"]]
        })
    ], PagingModule);
    return PagingModule;
}());



/***/ })

}]);
//# sourceMappingURL=paging-paging-module.js.map