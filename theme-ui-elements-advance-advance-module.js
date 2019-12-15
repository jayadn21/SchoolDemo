(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-ui-elements-advance-advance-module"],{

/***/ "./src/app/theme/ui-elements/advance/advance-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/advance-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdvanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceRoutingModule", function() { return AdvanceRoutingModule; });
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
            title: 'Advance Components',
            status: false
        },
        children: [
            {
                path: 'task-board',
                loadChildren: './draggable-task-board/draggable-task-board.module#DraggableTaskBoardModule'
            },
            {
                path: 'grid-stack',
                loadChildren: './grid-stack/grid-stack.module#GridStackModule'
            },
            {
                path: 'light-box',
                loadChildren: './adv-light-box/adv-light-box.module#AdvLightBoxModule'
            },
            {
                path: 'modal',
                loadChildren: './modal/modal.module#ModalModule'
            },
            {
                path: 'notifications',
                loadChildren: './notification/notification.module#NotificationModule'
            },
            {
                path: 'rating',
                loadChildren: './rating/rating.module#RatingModule'
            },
            {
                path: 'range-slider',
                loadChildren: './range-slider/range-slider.module#RangeSliderModule'
            },
            {
                path: 'slider',
                loadChildren: './carousel/carousel.module#CarouselModule'
            },
            {
                path: 'tree',
                loadChildren: './adv-tree/adv-tree.module#AdvTreeModule'
            }
        ]
    }
];
var AdvanceRoutingModule = /** @class */ (function () {
    function AdvanceRoutingModule() {
    }
    AdvanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdvanceRoutingModule);
    return AdvanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/advance.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/advance.module.ts ***!
  \*************************************************************/
/*! exports provided: AdvanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceModule", function() { return AdvanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _advance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-routing.module */ "./src/app/theme/ui-elements/advance/advance-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdvanceModule = /** @class */ (function () {
    function AdvanceModule() {
    }
    AdvanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _advance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvanceRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], AdvanceModule);
    return AdvanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-ui-elements-advance-advance-module.js.map