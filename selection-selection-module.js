(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-selection-module"],{

/***/ "./src/app/theme/table/data-table/selection/cell/cell.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/cell/cell.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card title=\"'Ng-X Cell Selection'\">\r\n  <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n  <ngx-datatable\r\n    class=\"material data-table selection-cell\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [limit]=\"10\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"50\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'cell'\"\r\n    (select)=\"onSelect($event)\"\r\n    (activate)=\"onActivate($event)\">\r\n  </ngx-datatable>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/cell/cell.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/cell/cell.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/cell/cell.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/cell/cell.component.ts ***!
  \*************************************************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
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

var CellComponent = /** @class */ (function () {
    function CellComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    CellComponent.prototype.ngOnInit = function () {
    };
    CellComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    CellComponent.prototype.onSelect = function (event) { };
    CellComponent.prototype.onActivate = function (event) { };
    CellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__(/*! ./cell.component.html */ "./src/app/theme/table/data-table/selection/cell/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.scss */ "./src/app/theme/table/data-table/selection/cell/cell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/checkbox/checkbox.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card title=\"'Ng-X Checkbox Selection'\">\r\n  <span class=\"m-b-20\">use class <code>dt-chk</code> with ngx-datatable element</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table dt-chk\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'checkbox'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n    <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n      <ng-template class=\"datatable-checkbox\" ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\r\n        <div class=\"checkbox-fade fade-in-default datatable-header-cell-label\">\r\n          <label>\r\n            <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"/>\r\n            <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          </label>\r\n        </div>\r\n\r\n      </ng-template>\r\n      <ng-template class=\"datatable-checkbox\" ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n        <div class=\"checkbox-fade fade-in-default datatable-header-cell-label\">\r\n          <label>\r\n            <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"/>\r\n            <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          </label>\r\n        </div>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Company\"></ngx-datatable-column>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <span *ngFor='let sel of selected'>\r\n          <label class=\"label label-primary\">{{sel.name}}</label>\r\n        </span>\r\n      <span *ngIf=\"!selected.length\">No Selections</span>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/checkbox/checkbox.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/checkbox/checkbox.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
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

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    CheckboxComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    CheckboxComponent.prototype.onActivate = function (event) { };
    CheckboxComponent.prototype.add = function () {
        this.selected.push(this.rows[1], this.rows[3]);
    };
    CheckboxComponent.prototype.update = function () {
        this.selected = [this.rows[1], this.rows[3]];
    };
    CheckboxComponent.prototype.remove = function () {
        this.selected = [];
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.scss"), __webpack_require__(/*! ../../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card title=\"'Ng-X Multi Rows Selection'\">\r\n  <span class=\"m-b-20\">use attribute <code>selectionType</code> as <code>multi</code> with ngx-datatable element and select with <code>Ctrl</code> key</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'multi'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <span *ngFor='let sel of selected'>\r\n          <label class=\"label label-primary\">{{sel.name}}</label>\r\n        </span>\r\n      <span *ngIf=\"!selected.length\">No Selections</span>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MultiRowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiRowsComponent", function() { return MultiRowsComponent; });
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

var MultiRowsComponent = /** @class */ (function () {
    function MultiRowsComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    MultiRowsComponent.prototype.ngOnInit = function () {
    };
    MultiRowsComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    MultiRowsComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    MultiRowsComponent.prototype.onActivate = function (event) { };
    MultiRowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-rows',
            template: __webpack_require__(/*! ./multi-rows.component.html */ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.html"),
            styles: [__webpack_require__(/*! ./multi-rows.component.scss */ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.scss"), __webpack_require__(/*! ../../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiRowsComponent);
    return MultiRowsComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/selection-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SelectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRoutingModule", function() { return SelectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection.component */ "./src/app/theme/table/data-table/selection/selection.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _selection_component__WEBPACK_IMPORTED_MODULE_2__["SelectionComponent"],
        data: {
            title: 'Select Table',
            icon: 'ti-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - select table',
            status: true
        }
    }
];
var SelectionRoutingModule = /** @class */ (function () {
    function SelectionRoutingModule() {
    }
    SelectionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SelectionRoutingModule);
    return SelectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/selection.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-cell></app-cell>\r\n    <app-single-row></app-single-row>\r\n    <app-multi-rows></app-multi-rows>\r\n    <app-checkbox></app-checkbox>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/selection.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/selection.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionComponent", function() { return SelectionComponent; });
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

var SelectionComponent = /** @class */ (function () {
    function SelectionComponent() {
    }
    SelectionComponent.prototype.ngOnInit = function () {
    };
    SelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selection',
            template: __webpack_require__(/*! ./selection.component.html */ "./src/app/theme/table/data-table/selection/selection.component.html"),
            styles: [__webpack_require__(/*! ./selection.component.scss */ "./src/app/theme/table/data-table/selection/selection.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectionComponent);
    return SelectionComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/selection.module.ts ***!
  \**********************************************************************/
/*! exports provided: SelectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModule", function() { return SelectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection.component */ "./src/app/theme/table/data-table/selection/selection.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/theme/table/data-table/selection/cell/cell.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.ts");
/* harmony import */ var _multi_rows_multi_rows_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-rows/multi-rows.component */ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.ts");
/* harmony import */ var _single_row_single_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-row/single-row.component */ "./src/app/theme/table/data-table/selection/single-row/single-row.component.ts");
/* harmony import */ var _selection_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection-routing.module */ "./src/app/theme/table/data-table/selection/selection-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SelectionModule = /** @class */ (function () {
    function SelectionModule() {
    }
    SelectionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _selection_routing_module__WEBPACK_IMPORTED_MODULE_7__["SelectionRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"]
            ],
            declarations: [_selection_component__WEBPACK_IMPORTED_MODULE_2__["SelectionComponent"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__["CellComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _multi_rows_multi_rows_component__WEBPACK_IMPORTED_MODULE_5__["MultiRowsComponent"], _single_row_single_row_component__WEBPACK_IMPORTED_MODULE_6__["SingleRowComponent"]]
        })
    ], SelectionModule);
    return SelectionModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/single-row/single-row.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/single-row/single-row.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card title=\"'Ng-X Single Row Selection'\">\r\n  <span class=\"m-b-20\">use attribute <code>selectionType</code> as <code>single</code> with ngx-datatable element</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'single'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <ul>\r\n        <li *ngFor='let sel of selected'>\r\n          <span class=\"label label-primary\">{{sel.name}}</span>\r\n        </li>\r\n        <li *ngIf=\"!selected.length\">No Selections</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/single-row/single-row.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/single-row/single-row.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/single-row/single-row.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/table/data-table/selection/single-row/single-row.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SingleRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleRowComponent", function() { return SingleRowComponent; });
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

var SingleRowComponent = /** @class */ (function () {
    function SingleRowComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.selected = [data[2]];
            _this.rows = data;
        });
    }
    SingleRowComponent.prototype.ngOnInit = function () {
    };
    SingleRowComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    SingleRowComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    SingleRowComponent.prototype.onActivate = function (event) { };
    SingleRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-row',
            template: __webpack_require__(/*! ./single-row.component.html */ "./src/app/theme/table/data-table/selection/single-row/single-row.component.html"),
            styles: [__webpack_require__(/*! ./single-row.component.scss */ "./src/app/theme/table/data-table/selection/single-row/single-row.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleRowComponent);
    return SingleRowComponent;
}());



/***/ })

}]);
//# sourceMappingURL=selection-selection-module.js.map