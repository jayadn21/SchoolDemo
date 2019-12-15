(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-stack-grid-stack-module"],{

/***/ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/grid-stack/grid-stack-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: GridStackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridStackRoutingModule", function() { return GridStackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grid_stack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-stack.component */ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _grid_stack_component__WEBPACK_IMPORTED_MODULE_2__["GridStackComponent"],
        data: {
            title: 'Grid Stack',
            icon: 'icon-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - grid stack',
            status: true
        }
    }
];
var GridStackRoutingModule = /** @class */ (function () {
    function GridStackRoutingModule() {
    }
    GridStackRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GridStackRoutingModule);
    return GridStackRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- Grid Options card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Grid Options</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>While Bootstrap uses <code class=\"highlighter-rouge\">em</code>s or <code class=\"highlighter-rouge\">rem</code>s for defining most sizes, <code class=\"highlighter-rouge\">px</code>s are used for grid\r\n            breakpoints and container widths. This is because the viewport width is in pixels and does not change with the <a href=\"https://drafts.csswg.org/mediaqueries-3/#units\" target=\"_blank\">font size</a>.</p>\r\n          <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped\">\r\n              <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th class=\"text-center\">\r\n                  Extra small\r\n                  <br>\r\n                  <small>&lt;576px</small>\r\n                </th>\r\n                <th class=\"text-center\">\r\n                  Small\r\n                  <br>\r\n                  <small>≥576px</small>\r\n                </th>\r\n                <th class=\"text-center\">\r\n                  Medium\r\n                  <br>\r\n                  <small>≥768px</small>\r\n                </th>\r\n                <th class=\"text-center\">\r\n                  Large\r\n                  <br>\r\n                  <small>≥992px</small>\r\n                </th>\r\n                <th class=\"text-center\">\r\n                  Extra large\r\n                  <br>\r\n                  <small>≥1200px</small>\r\n                </th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\r\n                <td>Horizontal at all times</td>\r\n                <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Max container width</th>\r\n                <td>None (auto)</td>\r\n                <td>540px</td>\r\n                <td>720px</td>\r\n                <td>960px</td>\r\n                <td>1140px</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\r\n                <td><code>.col-</code></td>\r\n                <td><code>.col-sm-</code></td>\r\n                <td><code>.col-md-</code></td>\r\n                <td><code>.col-lg-</code></td>\r\n                <td><code>.col-xl-</code></td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\r\n                <td colspan=\"5\">12</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\r\n                <td colspan=\"5\">30px (15px on each side of a column)</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Grid Options card end -->\r\n\r\n    <!-- Stacked to Horizontal card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Stacked to Horizontal</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before\r\n            becoming horizontal on desktop (medium) devices. Place grid columns within any <code>.row</code>.</p>\r\n          <div class=\"bs-example grid-layout\">\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <span>col-md-1</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-md-8\">\r\n                <span>col-md-8</span>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <span>col-md-4</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-md-4\">\r\n                <span>col-md-4</span>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <span>col-md-4</span>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <span>col-md-4</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <span>col-md-6</span>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>col-md-6</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Stacked to Horizontal card end -->\r\n\r\n    <!-- Mobile And Desktop card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Mobile And Desktop</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>.col-xs-*</code> and <code>.col-md-*</code> to your columns. See the\r\n            example below for a better idea of how it all works.</p>\r\n          <div class=\"bs-example grid-layout\">\r\n            <!-- Stack the columns on mobile by making one full-width and the other half-width -->\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col col-md-8\">\r\n                <span>.col .col-md-8</span>\r\n              </div>\r\n              <div class=\"col-6 col-md-4\">\r\n                <span>.col-6 .col-md-4</span>\r\n              </div>\r\n            </div>\r\n            <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-6 col-md-4\">\r\n                <span>.col-6 .col-md-4</span>\r\n              </div>\r\n              <div class=\"col-6 col-md-4\">\r\n                <span>.col-6 .col-md-4</span>\r\n              </div>\r\n              <div class=\"col-6 col-md-4\">\r\n                <span>.col-6 .col-md-4</span>\r\n              </div>\r\n            </div>\r\n            <!-- Columns are always 50% wide, on mobile and desktop -->\r\n            <div class=\"row\">\r\n              <div class=\"col-6\"><span>.col-6</span></div>\r\n              <div class=\"col-6\"><span>.col-6</span></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Mobile And Desktop card end -->\r\n\r\n    <!-- Vertical Alignment card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Vertical Alignment</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>.col-xs-*</code> and <code>.col-md-*</code> to your columns. See the\r\n            example below for a better idea of how it all works.</p>\r\n          <div class=\"bs-example grid-layout vertical-alignment\">\r\n            <div class=\"row align-items-start\">\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row align-items-center m-t-20\">\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row align-items-end m-t-10\">\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span>One of three columns</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Vertical Alignment card end -->\r\n\r\n    <!-- Offsetting Column card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Offsetting Column</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Move columns to the right using <code class=\"highlighter-rouge\">.*-auto</code> classes. These classes increase the left margin of a column by <code class=\"highlighter-rouge\">*</code> columns. For\r\n            example, <code class=\"highlighter-rouge\">.ml-auto</code> moves <code class=\"highlighter-rouge\">.col-md-4</code> over four columns.</p>\r\n          <div class=\"bs-example grid-layout\">\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-md-4\">\r\n                <span>.col-md-4</span>\r\n              </div>\r\n              <div class=\"col-md-4 ml-auto\">\r\n                <span>.col-md-4 .ml-auto</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-md-3 ml-md-auto\">\r\n                <span>.col-md-3 .ml-md-auto</span>\r\n              </div>\r\n              <div class=\"col-md-3 ml-md-auto\">\r\n                <span>.col-md-3 .ml-md-auto</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row m-b-20\">\r\n              <div class=\"col-md-6 m-auto\">\r\n                <span>.col-md-6 . m-auto</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Offsetting Column card end -->\r\n\r\n    <!-- Push and pull card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Push And Pull</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Easily change the order of our built-in grid columns with <code class=\"highlighter-rouge\">.push-md-*</code> and <code class=\"highlighter-rouge\">.pull-md-*</code> modifier classes.</p>\r\n          <div class=\"bs-example grid-layout\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9 push-md-3\">\r\n                <span>.col-md-9 .push-md-3</span>\r\n              </div>\r\n              <div class=\"col-md-3 pull-md-9\">\r\n                <span>.col-md-3 .pull-md-9</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Push and pull card end -->\r\n\r\n    <!-- Nesting card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Nesting</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>To nest your content with the default grid, add a new <code class=\"highlighter-rouge\">.row</code> and set of <code class=\"highlighter-rouge\">.col-sm-*</code> columns within an existing <code class=\"highlighter-rouge\">.col-sm-*</code>                                                            column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>\r\n          <div class=\"bs-example grid-layout\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-9\">\r\n                <span>Level 1: .col-9</span>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6 m-t-10\">\r\n                    <span>Level 2: .col-sm-8</span>\r\n                  </div>\r\n                  <div class=\"col-sm-6 m-t-10\">\r\n                    <span>Level 2: .col-sm-4</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Nesting card end -->\r\n\r\n    <!-- Flex Order card start -->\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Flex Order</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use flexbox utilities for controlling the <strong>visual order</strong> of your content.</p>\r\n          <div class=\"bs-example grid-layout\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <span>First, but unordered</span>\r\n              </div>\r\n              <div class=\"col order-12\">\r\n                <span>Second, but last</span>\r\n              </div>\r\n              <div class=\"col order-1\">\r\n                <span>Third, but first</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Flex Order card start -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.ts ***!
  \******************************************************************************/
/*! exports provided: GridStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridStackComponent", function() { return GridStackComponent; });
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

var GridStackComponent = /** @class */ (function () {
    function GridStackComponent() {
    }
    GridStackComponent.prototype.ngOnInit = function () {
    };
    GridStackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-stack',
            template: __webpack_require__(/*! ./grid-stack.component.html */ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.html"),
            styles: [__webpack_require__(/*! ./grid-stack.component.scss */ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridStackComponent);
    return GridStackComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/grid-stack/grid-stack.module.ts ***!
  \***************************************************************************/
/*! exports provided: GridStackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridStackModule", function() { return GridStackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grid_stack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-stack.component */ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.component.ts");
/* harmony import */ var _grid_stack_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-stack-routing.module */ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GridStackModule = /** @class */ (function () {
    function GridStackModule() {
    }
    GridStackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _grid_stack_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridStackRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_grid_stack_component__WEBPACK_IMPORTED_MODULE_2__["GridStackComponent"]]
        })
    ], GridStackModule);
    return GridStackModule;
}());



/***/ })

}]);
//# sourceMappingURL=grid-stack-grid-stack-module.js.map