(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-extension-invoice-invoice-module"],{

/***/ "./src/app/theme/extension/invoice/invoice-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
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
            title: 'Invoice',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './basic-invoice/basic-invoice.module#BasicInvoiceModule'
            },
            {
                path: 'summary',
                loadChildren: './invoice-summary/invoice-summary.module#InvoiceSummaryModule'
            },
            {
                path: 'list',
                loadChildren: './invoice-list/invoice-list.module#InvoiceListModule'
            }
        ]
    }
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/theme/extension/invoice/invoice-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-extension-invoice-invoice-module.js.map