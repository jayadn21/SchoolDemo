(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-chart-chart-module"],{

/***/ "./src/app/theme/chart/chart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/chart/chart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartRoutingModule", function() { return ChartRoutingModule; });
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
            title: 'Charts',
            status: false
        },
        children: [
            {
                path: 'google',
                loadChildren: './google-chart/google-chart.module#GoogleChartModule'
            },
            {
                path: 'chart-js',
                loadChildren: './chart-js/chart-js.module#ChartJsModule'
            },
            {
                path: 'radial',
                loadChildren: './radial/radial.module#RadialModule'
            },
            {
                path: 'c3-js',
                loadChildren: './c3-js/c3-js.module#C3JsModule'
            }
        ]
    }
];
var ChartRoutingModule = /** @class */ (function () {
    function ChartRoutingModule() {
    }
    ChartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartRoutingModule);
    return ChartRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/chart/chart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/chart/chart.module.ts ***!
  \*********************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-routing.module */ "./src/app/theme/chart/chart-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChartRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-chart-chart-module.js.map