(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-table-data-table-data-table-module"],{

/***/ "./src/app/theme/table/data-table/data-table-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/table/data-table/data-table-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DataTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRoutingModule", function() { return DataTableRoutingModule; });
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
            title: 'Data Table',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './table-basic-data/table-basic-data.module#TableBasicDataModule'
            },
            {
                path: 'editable',
                loadChildren: './table-edit/table-edit.module#TableEditModule'
            },
            {
                path: 'row-details',
                loadChildren: './row-details/row-details.module#RowDetailsModule'
            },
            {
                path: 'paging',
                loadChildren: './paging/paging.module#PagingModule'
            },
            {
                path: 'selection',
                loadChildren: './selection/selection.module#SelectionModule'
            }
        ]
    }
];
var DataTableRoutingModule = /** @class */ (function () {
    function DataTableRoutingModule() {
    }
    DataTableRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DataTableRoutingModule);
    return DataTableRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/data-table.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/table/data-table/data-table.module.ts ***!
  \*************************************************************/
/*! exports provided: DataTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_table_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table-routing.module */ "./src/app/theme/table/data-table/data-table-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _data_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataTableRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], DataTableModule);
    return DataTableModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-table-data-table-data-table-module.js.map