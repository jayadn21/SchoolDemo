(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-widget-widget-module"],{

/***/ "./src/app/theme/widget/widget-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/widget/widget-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRoutingModule", function() { return WidgetRoutingModule; });
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
            title: 'Widget',
            status: false
        },
        children: [
            {
                path: 'statistic',
                loadChildren: './statistic/statistic.module#StatisticModule'
            },
            {
                path: 'data',
                loadChildren: './data-widget/data-widget.module#DataWidgetModule'
            },
            {
                path: 'chart',
                loadChildren: './chart-widget/chart-widget.module#ChartWidgetModule'
            }
        ]
    }
];
var WidgetRoutingModule = /** @class */ (function () {
    function WidgetRoutingModule() {
    }
    WidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WidgetRoutingModule);
    return WidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/widget.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/widget/widget.module.ts ***!
  \***********************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget-routing.module */ "./src/app/theme/widget/widget-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["WidgetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: []
        })
    ], WidgetModule);
    return WidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-widget-widget-module.js.map