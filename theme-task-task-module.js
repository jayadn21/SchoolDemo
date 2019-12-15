(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-task-task-module"],{

/***/ "./src/app/theme/task/task-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/task/task-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
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
            title: 'User',
            status: false
        },
        children: [
            {
                path: 'list',
                loadChildren: './task-list/task-list.module#TaskListModule'
            },
            {
                path: 'board',
                loadChildren: './task-board/task-board.module#TaskBoardModule'
            },
            {
                path: 'details',
                loadChildren: './task-details/task-details.module#TaskDetailsModule'
            },
            {
                path: 'issue',
                loadChildren: './task-issue/task-issue.module#TaskIssueModule'
            }
        ]
    }
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/task/task.module.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/task/task.module.ts ***!
  \*******************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/theme/task/task-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-task-task-module.js.map