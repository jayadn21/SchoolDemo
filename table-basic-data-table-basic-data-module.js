(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-basic-data-table-basic-data-module"],{

/***/ "./src/app/theme/table/data-table/table-basic-data/table-basic-data-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-basic-data/table-basic-data-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: TableBasicDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicDataRoutingModule", function() { return TableBasicDataRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_basic_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-basic-data.component */ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _table_basic_data_component__WEBPACK_IMPORTED_MODULE_2__["TableBasicDataComponent"],
        data: {
            title: 'Basic Data Tables',
            icon: 'ti-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - basic data table',
            status: true
        }
    }
];
var TableBasicDataRoutingModule = /** @class */ (function () {
    function TableBasicDataRoutingModule() {
    }
    TableBasicDataRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TableBasicDataRoutingModule);
    return TableBasicDataRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card title=\"'Ng-X Basic Datatable'\">\r\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n      <ngx-datatable\r\n        class=\"data-table table-responsive\"\r\n        [rows]=\"rowsBasic\"\r\n        [loadingIndicator]=\"loadingIndicator\"\r\n        [columns]=\"columns\"\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"50\"\r\n        [reorderable]=\"reorderable\">\r\n      </ngx-datatable>\r\n    </app-card>\r\n\r\n    <app-card title=\"'Ng-X 100K Virtual Scrolling Rows'\">\r\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable and <code>rowHeight</code></span><br><br>\r\n      <ngx-datatable\r\n        class='data-table scroll'\r\n        [rows]='rows'\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"getRowHeight\"\r\n        [limit]=\"10\"\r\n        [scrollbarV]=\"true\"\r\n        (page)=\"onPage($event)\">\r\n        <ngx-datatable-column name=\"Name\">\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <strong>{{value}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Row Height\" prop=\"height\">\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n\r\n    <app-card title=\"'Ng-X Full Screen'\" [blockClass]=\"'table-border-style'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>data-table </code>and<code> fullscreen</code> with ngx-datatable.</span>\r\n      <ngx-datatable\r\n        class=\"data-table fullscreen\"\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"0\"\r\n        [rowHeight]=\"50\"\r\n        [scrollbarV]=\"true\"\r\n        [scrollbarH]=\"true\"\r\n        [rows]=\"fullScreenRow\">\r\n        <ngx-datatable-column name=\"Id\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"City\" prop=\"address.city\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"State\" prop=\"address.state\"></ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n\r\n    <app-card title=\"'Ng-X Search/Filter'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>data-table </code> with ngx-datatable and set <code>search element</code>.</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"dt-cust-search f-right\">\r\n            <div class=\"form-group\">\r\n              <label>Search: </label>\r\n              <input\r\n                type='text'\r\n                class=\"form-control input-sm m-l-10\"\r\n                placeholder='Search Name'\r\n                (keyup)='updateFilter($event)'\r\n              />\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <ngx-datatable\r\n        #table\r\n        class='data-table'\r\n        [columns]=\"columns\"\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"50\"\r\n        [limit]=\"10\"\r\n        [rows]='rowsFilter'>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TableBasicDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicDataComponent", function() { return TableBasicDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableBasicDataComponent = /** @class */ (function () {
    function TableBasicDataComponent() {
        var _this = this;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.fetchBasicData(function (data) {
            _this.rowsBasic = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this.fetch(function (data) {
            _this.rows = data;
        });
        this.fetchFullScreenData(function (data) {
            _this.fullScreenRow = data;
        });
        this.fetchFilterData(function (data) {
            // cache our list
            _this.tempFilter = data.slice();
            // push our inital complete list
            _this.rowsFilter = data;
        });
    }
    TableBasicDataComponent.prototype.ngOnInit = function () {
    };
    TableBasicDataComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableBasicDataComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableBasicDataComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableBasicDataComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TableBasicDataComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    TableBasicDataComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            var rows = JSON.parse(req.response);
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    };
    TableBasicDataComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TableBasicDataComponent.prototype, "table", void 0);
    TableBasicDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-basic-data',
            template: __webpack_require__(/*! ./table-basic-data.component.html */ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.html"),
            styles: [__webpack_require__(/*! ./table-basic-data.component.scss */ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableBasicDataComponent);
    return TableBasicDataComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-basic-data/table-basic-data.module.ts ***!
  \************************************************************************************/
/*! exports provided: TableBasicDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicDataModule", function() { return TableBasicDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_basic_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-basic-data.component */ "./src/app/theme/table/data-table/table-basic-data/table-basic-data.component.ts");
/* harmony import */ var _table_basic_data_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-basic-data-routing.module */ "./src/app/theme/table/data-table/table-basic-data/table-basic-data-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TableBasicDataModule = /** @class */ (function () {
    function TableBasicDataModule() {
    }
    TableBasicDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _table_basic_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["TableBasicDataRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"]
            ],
            declarations: [_table_basic_data_component__WEBPACK_IMPORTED_MODULE_2__["TableBasicDataComponent"]]
        })
    ], TableBasicDataModule);
    return TableBasicDataModule;
}());



/***/ })

}]);
//# sourceMappingURL=table-basic-data-table-basic-data-module.js.map