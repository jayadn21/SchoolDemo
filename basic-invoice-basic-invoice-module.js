(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-invoice-basic-invoice-module"],{

/***/ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/basic-invoice/basic-invoice-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BasicInvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInvoiceRoutingModule", function() { return BasicInvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-invoice.component */ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _basic_invoice_component__WEBPACK_IMPORTED_MODULE_2__["BasicInvoiceComponent"],
        data: {
            title: 'Invoice',
            icon: 'ti-layout-media-right',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - invoice basic',
            status: false
        }
    }
];
var BasicInvoiceRoutingModule = /** @class */ (function () {
    function BasicInvoiceRoutingModule() {
    }
    BasicInvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicInvoiceRoutingModule);
    return BasicInvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Main content starts -->\r\n  <div>\r\n    <!-- Invoice card start -->\r\n    <div class=\"card\">\r\n      <div class=\"row invoice-contact\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"invoice-box row\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-responsive invoice-table table-borderless\">\r\n                <tbody>\r\n                <tr>\r\n                  <td><img src=\"assets/images/logo-blue.png\" class=\"m-b-10\" alt=\"\"></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Codedthemes</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>208, Paris Point, Varachha Road, Surat. (1234) - 567891</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><a href=\"mailto:demo@gmail.com\" target=\"_top\">demo@gmail.com</a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>+91 919-91-91-919</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-sm-12 invoice-btn-group\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-print-invoice waves-effect waves-light m-b-10 btn-sm m-r-20\">Print Invoice\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger waves-effect waves-light m-b-10 btn-sm\">Cancel Invoice\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row invoive-info\">\r\n          <div class=\"col-md-4 col-xs-12 invoice-client-info\">\r\n            <h6>Client Information :</h6>\r\n            <h6 class=\"m-0\">Josephin Villa</h6>\r\n            <p class=\"m-0 m-t-10\">208, Peris Point, Varachha Road, Surat.</p>\r\n            <p class=\"m-0\">(1234) - 567891</p>\r\n            <p>demo@codedthemes.com</p>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-6\">\r\n            <h6>Order Information :</h6>\r\n            <table class=\"table table-responsive invoice-table invoice-order table-borderless\">\r\n              <tbody>\r\n              <tr>\r\n                <th>Date :</th>\r\n                <td>November 14</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Status :</th>\r\n                <td>\r\n                  <span class=\"label label-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Id :</th>\r\n                <td>\r\n                  #145698\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-6\">\r\n            <h6 class=\"m-b-20\">Invoice Number   <span>#12398521473</span></h6>\r\n            <h6 class=\"text-uppercase text-primary\">Total Due :\r\n              <span>$900.00</span>\r\n            </h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table  invoice-detail-table\">\r\n                <thead>\r\n                <tr class=\"thead-default\">\r\n                  <th>Description</th>\r\n                  <th>Quantity</th>\r\n                  <th>Amount</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <h6>Logo Design</h6>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\r\n                  </td>\r\n                  <td>6</td>\r\n                  <td>$200.00</td>\r\n                  <td>$1200.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <h6>Logo Design</h6>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\r\n                  </td>\r\n                  <td>7</td>\r\n                  <td>$100.00</td>\r\n                  <td>$700.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <h6>Logo Design</h6>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\r\n                  </td>\r\n                  <td>5</td>\r\n                  <td>$150.00</td>\r\n                  <td>$750.00</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table table-responsive invoice-table invoice-total\">\r\n              <tbody>\r\n              <tr>\r\n                <th>Sub Total :</th>\r\n                <td>$4725.00</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Taxes (10%) :</th>\r\n                <td>$57.00</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Discount (5%) :</th>\r\n                <td>$45.00</td>\r\n              </tr>\r\n              <tr class=\"text-info\">\r\n                <td>\r\n                  <hr/>\r\n                  <h5 class=\"text-primary\">Total  :</h5>\r\n                </td>\r\n                <td>\r\n                  <hr/>\r\n                  <h5 class=\"text-primary\">$4827.00</h5>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <h6>Terms And Condition :</h6>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Invoice card end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BasicInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInvoiceComponent", function() { return BasicInvoiceComponent; });
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

var BasicInvoiceComponent = /** @class */ (function () {
    function BasicInvoiceComponent() {
    }
    BasicInvoiceComponent.prototype.ngOnInit = function () {
    };
    BasicInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-invoice',
            template: __webpack_require__(/*! ./basic-invoice.component.html */ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.html"),
            styles: [__webpack_require__(/*! ./basic-invoice.component.scss */ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInvoiceComponent);
    return BasicInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/extension/invoice/basic-invoice/basic-invoice.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInvoiceModule", function() { return BasicInvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-invoice.component */ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.component.ts");
/* harmony import */ var _basic_invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-invoice-routing.module */ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicInvoiceModule = /** @class */ (function () {
    function BasicInvoiceModule() {
    }
    BasicInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _basic_invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicInvoiceRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_basic_invoice_component__WEBPACK_IMPORTED_MODULE_2__["BasicInvoiceComponent"]]
        })
    ], BasicInvoiceModule);
    return BasicInvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-invoice-basic-invoice-module.js.map