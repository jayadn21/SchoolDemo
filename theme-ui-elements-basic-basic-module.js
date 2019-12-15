(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-ui-elements-basic-basic-module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function() { return BasicRoutingModule; });
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
            title: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'alert',
                loadChildren: './alert/alert.module#AlertModule'
            },
            {
                path: 'breadcrumb',
                loadChildren: './breadcrumb/breadcrumb.module#BreadcrumbModule'
            },
            {
                path: 'button',
                loadChildren: './button/button.module#ButtonModule'
            },
            {
                path: 'box-shadow',
                loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
            },
            {
                path: 'accordion',
                loadChildren: './accordion/accordion.module#AccordionModule'
            },
            {
                path: 'generic-class',
                loadChildren: './generic-class/generic-class.module#GenericClassModule'
            },
            {
                path: 'progressbar',
                loadChildren: './progressbar/progressbar.module#ProgressbarModule'
            },
            {
                path: 'pre-loader',
                loadChildren: './pre-loader/pre-loader.module#PreLoaderModule'
            },
            {
                path: 'list',
                loadChildren: './basic-list/basic-list.module#BasicListModule'
            },
            {
                path: 'tooltip',
                loadChildren: './tooltip/tooltip.module#TooltipModule'
            },
            {
                path: 'tabs',
                loadChildren: './tabs/tabs.module#TabsModule'
            },
            {
                path: 'color',
                loadChildren: './basic-color/basic-color.module#BasicColorModule'
            },
            {
                path: 'label-badge',
                loadChildren: './label-badge/label-badge.module#LabelBadgeModule'
            },
            {
                path: 'typography',
                loadChildren: './typography/typography.module#TypographyModule'
            },
            {
                path: 'other',
                loadChildren: './basic-other/basic-other.module#BasicOtherModule'
            }
        ]
    }
];
var BasicRoutingModule = /** @class */ (function () {
    function BasicRoutingModule() {
    }
    BasicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicRoutingModule);
    return BasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic.module.ts ***!
  \*********************************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-routing.module */ "./src/app/theme/ui-elements/basic/basic-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"]
            ],
            declarations: []
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-ui-elements-basic-basic-module.js.map