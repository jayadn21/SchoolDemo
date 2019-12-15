(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-summary-invoice-summary-module"],{

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

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-summary/invoice-summary-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: InvoiceSummaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryRoutingModule", function() { return InvoiceSummaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-summary.component */ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _invoice_summary_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceSummaryComponent"],
        data: {
            title: 'Invoice Summary',
            icon: 'ti-layout-media-right',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - invoice summary',
            status: true
        }
    }
];
var InvoiceSummaryRoutingModule = /** @class */ (function () {
    function InvoiceSummaryRoutingModule() {
    }
    InvoiceSummaryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvoiceSummaryRoutingModule);
    return InvoiceSummaryRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <!-- Sales and expense card start -->\r\n    <app-card title=\"'Sales and Expenses'\" [cardOptionBlock]=\"true\">\r\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"height:310px;width:100%\"></chart>\r\n    </app-card>\r\n    <!-- Sales and expense card end -->\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <!-- Sales, Receipt and Dues card start -->\r\n    <app-card title=\"'Sales, Receipt and Dues'\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-lg table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Sales</th>\r\n            <th>Receipt</th>\r\n            <th>Dues</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">Today</th>\r\n            <td>$250.00</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">This Week</th>\r\n            <td>$380.00</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">This Month</th>\r\n            <td>$450.00</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">This Year</th>\r\n            <td>$600.00</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Total</th>\r\n            <td>$600.00</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Sales, Receipt and Dues card end -->\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <!-- Recent Orders card start -->\r\n    <app-card title=\"'Recent Orders'\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-lg table-styling\">\r\n          <thead>\r\n          <tr class=\"table-primary\">\r\n            <th>#</th>\r\n            <th>Order No.</th>\r\n            <th>Product Name</th>\r\n            <th>Quantity</th>\r\n            <th>Price</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>54822</td>\r\n            <td>Product 1</td>\r\n            <td>2</td>\r\n            <td>\r\n              <label class=\"label label-md label-danger\">$99.00</label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>54823</td>\r\n            <td>Product 2</td>\r\n            <td>1</td>\r\n            <td>\r\n              <label class=\"label label-md label-success\">$29.00</label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>54824</td>\r\n            <td>Product 3</td>\r\n            <td>3</td>\r\n            <td>\r\n              <label class=\"label label-md label-warning\">$109.00</label>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Recent Orders card end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InvoiceSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryComponent", function() { return InvoiceSummaryComponent; });
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

var InvoiceSummaryComponent = /** @class */ (function () {
    function InvoiceSummaryComponent() {
        this.type1 = 'bar';
        this.data1 = {
            labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Sales',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50, 45],
                }, {
                    label: 'Expense',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            barValueSpacing: 20
        };
    }
    InvoiceSummaryComponent.prototype.ngOnInit = function () {
    };
    InvoiceSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-summary',
            template: __webpack_require__(/*! ./invoice-summary.component.html */ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.html"),
            styles: [__webpack_require__(/*! ./invoice-summary.component.scss */ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceSummaryComponent);
    return InvoiceSummaryComponent;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-summary/invoice-summary.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InvoiceSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryModule", function() { return InvoiceSummaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-summary.component */ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts");
/* harmony import */ var _invoice_summary_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-summary-routing.module */ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InvoiceSummaryModule = /** @class */ (function () {
    function InvoiceSummaryModule() {
    }
    InvoiceSummaryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _invoice_summary_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoiceSummaryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
            ],
            declarations: [_invoice_summary_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceSummaryComponent"]]
        })
    ], InvoiceSummaryModule);
    return InvoiceSummaryModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-summary-invoice-summary-module.js.map