(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecommerce-ecommerce-module"],{

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EcommerceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceRoutingModule", function() { return EcommerceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"],
        data: {
            title: 'Ecommerce',
            status: false
        }
    }
];
var EcommerceRoutingModule = /** @class */ (function () {
    function EcommerceRoutingModule() {
    }
    EcommerceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EcommerceRoutingModule);
    return EcommerceRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Statistics</h5>\r\n            <p class=\"p-t-10 m-b-0 text-muted\">Compared to last week</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-calendar st-icon bg-primary\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">5,456</h3>\r\n            <i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>\r\n            <span class=\"f-right bg-success\">23%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Daily order</h5>\r\n            <p class=\"p-t-10 m-b-0 text-muted\">Compare to yesterday</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">600</h3>\r\n            <i class=\"fa fa-long-arrow-down text-danger f-24 m-l-15\"></i>\r\n            <span class=\"f-right bg-danger\">-5%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Revenue 2017</h5>\r\n            <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-line-chart st-icon bg-success\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">$2,65,500</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!---->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Analytics</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div id=\"analythics-graph\" style=\"height:365px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block text-center\">\r\n              <i class=\"fa fa-envelope text-c-blue d-block f-40\"></i>\r\n              <h4 class=\"m-t-20\"><span class=\"text-c-blue\">8.62k</span> Subscribers</h4>\r\n              <p class=\"m-b-20\">Your main list is growing</p>\r\n              <button class=\"btn btn-primary btn-sm btn-round\">Manage List</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block text-center\">\r\n              <i class=\"fa fa-twitter text-c-green d-block f-40\"></i>\r\n              <h4 class=\"m-t-20\"><span class=\"text-c-green\">+40</span> Followers</h4>\r\n              <p class=\"m-b-20\">Your main list is growing</p>\r\n              <button class=\"btn btn-success btn-sm btn-round\">Check them out</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- unique visitor start -->\r\n    <div class=\"col-xl-5 col-md-12\">\r\n      <app-card title=\"'Reviews'\" [cardClass]=\"'review-task'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <tbody>\r\n            <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Josephin John</h6>\r\n                <p class=\"text-muted\">Lorem ipsum dolor</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-2.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Josephin Doe</h6>\r\n                <p class=\"text-muted\">Lorem ipsum dolo</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Viral Dhimmar</h6>\r\n                <p class=\"text-muted\">Lorem ipsum do</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-4.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Luciano Durk</h6>\r\n                <p class=\"text-muted\">Lorem ipsu</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Viral Dhimmar</h6>\r\n                <p class=\"text-muted\">Lorem ipsum do</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-7 col-md-12\">\r\n      <div class=\"card bg-c-blue map-visitor-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Unique Visitor</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div id=\"unique-visitor-chart\" style=\"height:260px\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row justify-content-center text-center\">\r\n            <div class=\"col-auto b-r-default col-6 col-sm-4\">\r\n              <h6>Visits</h6>\r\n              <p class=\"text-muted\">29.703 Users (40%)</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-blue\" style=\"width:40%\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-auto col-6 col-sm-4\">\r\n              <h6>Revenue</h6>\r\n              <p class=\"text-muted\">20703$ (60%)</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-green\" style=\"width:60%\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- unique visitor end -->\r\n    <!-- Recent Orders start -->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card title=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>Image</th>\r\n              <th>Product Code</th>\r\n              <th>Customer</th>\r\n              <th>Purchased On</th>\r\n              <th>Status</th>\r\n              <th>Transaction</th>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002413</td>\r\n              <td>Jane Elliott</td>\r\n              <td>06-01-2017</td>\r\n              <td><span class=\"label label-primary\">Shipping</span></td>\r\n              <td>#7234421</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002344</td>\r\n              <td>John Deo</td>\r\n              <td>05-01-2017</td>\r\n              <td><span class=\"label label-danger\">Failed</span></td>\r\n              <td>#7234486</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002653</td>\r\n              <td>Eugine Turner</td>\r\n              <td>04-01-2017</td>\r\n              <td><span class=\"label label-success\">Delivered</span></td>\r\n              <td>#7234417</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002156</td>\r\n              <td>Jacqueline Howell</td>\r\n              <td>03-01-2017</td>\r\n              <td><span class=\"label label-warning\">Pending</span></td>\r\n              <td>#7234454</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002344</td>\r\n              <td>John Deo</td>\r\n              <td>05-01-2017</td>\r\n              <td><span class=\"label label-primary\">Shipping</span></td>\r\n              <td>#7234489</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card statustic-card\">\r\n            <div class=\"card-header\">\r\n              <h5>Order Completed</h5>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n              <span class=\"d-block text-c-green f-36\">14</span>\r\n              <p class=\"m-b-0\">Total</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-green\">\r\n              <h6 class=\"text-white m-b-0\">this month Order: 14</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card statustic-card\">\r\n            <div class=\"card-header\">\r\n              <h5>Order Cancelled</h5>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n              <span class=\"d-block text-c-pink f-36\">85</span>\r\n              <p class=\"m-b-0\">Total</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-pink\" style=\"width:85%\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-pink\">\r\n              <h6 class=\"text-white m-b-0\">this month cancel order: 85</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Recent Orders end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.component.ts ***!
  \******************************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.js */ "./src/assets/charts/amchart/pie.js");
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.js */ "./src/assets/charts/amchart/ammap.js");
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/worldLow.js */ "./src/assets/charts/amchart/worldLow.js");
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_charts_amchart_continentsLow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/charts/amchart/continentsLow.js */ "./src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var _assets_charts_amchart_continentsLow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_continentsLow_js__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            AmCharts.makeChart('unique-visitor-chart', {
                type: 'map',
                theme: 'light',
                dragMap: false,
                projection: 'eckert3',
                areasSettings: {
                    autoZoom: false,
                    rollOverOutlineColor: '#fff',
                    selectedColor: '#fff',
                    outlineAlpha: 1,
                    outlineColor: 'transparent',
                    outlineThickness: 1,
                    color: '#000000'
                },
                dataProvider: {
                    map: 'continentsLow',
                    areas: [{
                            id: 'africa',
                            title: 'Africa',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'asia',
                            title: 'Asia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'australia',
                            title: 'Australia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'europe',
                            title: 'Europe',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'north_america',
                            title: 'North America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'south_america',
                            title: 'South America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }]
                },
                zoomControl: { panControlEnabled: false, zoomControlEnabled: false, homeButtonEnabled: false },
            });
            AmCharts.makeChart('analythics-graph', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.9,
                        'lineColor': '#4099ff ',
                        'type': 'smoothedLine',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#FF5370 ',
                        'lineThickness': 0,
                        'lineColor': '#FF5370 ',
                        'type': 'smoothedLine',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g3',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#2ed8b6',
                        'lineThickness': 0,
                        'lineColor': '#2ed8b6',
                        'type': 'smoothedLine',
                        'title': 'Mobile',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'sales1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 40
                    }, {
                        'date': '2013-03-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 30,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 0,
                        'market2': 20,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 25,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-08-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 30
                    }, {
                        'date': '2013-09-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-10-01',
                        'market1': 0,
                        'market2': 50,
                        'sales1': 0
                    }, {
                        'date': '2013-11-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 65
                    }, {
                        'date': '2013-12-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }]
            });
        });
    };
    EcommerceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! ./ecommerce.component.html */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./ecommerce.component.scss */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.module.ts ***!
  \***************************************************************/
/*! exports provided: EcommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce-routing.module */ "./src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_3__["EcommerceRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"]]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ })

}]);
//# sourceMappingURL=ecommerce-ecommerce-module.js.map