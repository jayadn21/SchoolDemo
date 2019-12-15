(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Attendance-menu-menu-module"],{

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/Attendance/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Attendance/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <div class=\"col-md-12 col-lg-12\">\r\n      <app-card title=\"\"[cardOptionBlock]=\"true\">\r\n          <h5>Attendance (Absentees By date)</h5>\r\n          <hr>\r\n        \r\n          <div ngbDropdown class=\"dropdown-success\">\r\n              <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Attendance</button>\r\n              <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">1</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">2</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">3</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">4</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">5</a>\r\n              </div>\r\n            </div>\r\n         \r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n\r\n            <div ngbDropdown class=\"dropdown-info\">\r\n              <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Reports</button>\r\n              <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Fees Reports</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Profit and Loss</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Balance Sheet</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\">Trial Balance</a>\r\n              </div>\r\n            </div>\r\n\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp; \r\n\r\n            <div ngbDropdown class=\"dropdown-warning\">\r\n                <button ngbDropdownToggle class=\"btn btn-success waves-effect waves-light \" type=\"button\">Settings</button>\r\n                <div ngbDropdownMenu>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/Attendance/attendance-setup/']\"\r\n                  href=\"javascript:\">Attendance Setup</a>\r\n\r\n                  <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/Attendance/report-setup/']\"\r\n                  href=\"javascript:\">Reports Setup</a>\r\n\r\n                  <a class=\"dropdown-item waves-light waves-effect\" [routerLink]=\"['/Attendance/practical-classes/']\"\r\n                  href=\"javascript:\">Practical Classes Batch</a>\r\n\r\n                </div>\r\n              </div> \r\n\r\n\r\n\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Attendance/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Attendance/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Attendance/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Attendance/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/Attendance/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/Attendance/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/Attendance/menu/menu.module.ts":
/*!************************************************!*\
  !*** ./src/app/Attendance/menu/menu.module.ts ***!
  \************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/Attendance/menu/menu.component.ts");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.routing.module */ "./src/app/Attendance/menu/menu.routing.module.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__["Ng2GoogleChartsModule"]
            ],
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/Attendance/menu/menu.routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/Attendance/menu/menu.routing.module.ts ***!
  \********************************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/Attendance/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        data: {
            title: 'Menu',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    },
];
var MenuRoutingModule = /** @class */ (function () {
    function MenuRoutingModule() {
    }
    MenuRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenuRoutingModule);
    return MenuRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Attendance-menu-menu-module.js.map