(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-edit-table-edit-module"],{

/***/ "./src/app/theme/table/data-table/table-edit/table-edit-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-edit/table-edit-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TableEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditRoutingModule", function() { return TableEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-edit.component */ "./src/app/theme/table/data-table/table-edit/table-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _table_edit_component__WEBPACK_IMPORTED_MODULE_2__["TableEditComponent"],
        data: {
            title: 'Editable Data Table',
            icon: 'ti-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - editable',
            status: true
        }
    }
];
var TableEditRoutingModule = /** @class */ (function () {
    function TableEditRoutingModule() {
    }
    TableEditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TableEditRoutingModule);
    return TableEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/table-edit/table-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-edit/table-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card title=\"'Ng-X Editable'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>material</code> and <code>data-table</code> inside ngx-datatable element with <code>ngx-datatable-column</code> elements</span>\r\n\r\n      <ngx-datatable\r\n        #mydatatable\r\n        class=\"material data-table\"\r\n        [headerHeight]=\"50\"\r\n        [limit]=\"10\"\r\n        [columnMode]=\"'force'\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\"\r\n        [rows]=\"rows\">\r\n        <ngx-datatable-column name=\"Name\">\r\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (dblclick)=\"editing[rowIndex + '-name'] = true\"\r\n              *ngIf=\"!editing[rowIndex + '-name']\">\r\n              {{value}}\r\n            </span>\r\n            <input\r\n              autofocus\r\n              (blur)=\"updateValue($event, 'name', rowIndex)\"\r\n              *ngIf=\"editing[rowIndex+ '-name']\"\r\n              type=\"text\"\r\n              [value]=\"value\"\r\n              class=\"form-control\"\r\n            />\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\">\r\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\r\n             <span\r\n               title=\"Double click to edit\"\r\n               (dblclick)=\"editing[rowIndex + '-gender'] = true\"\r\n               *ngIf=\"!editing[rowIndex + '-gender']\">\r\n              {{value}}\r\n            </span>\r\n            <select\r\n              *ngIf=\"editing[rowIndex + '-gender']\"\r\n              (change)=\"updateValue($event, 'gender', rowIndex)\"\r\n              [value]=\"value\"\r\n              class=\"form-control\">\r\n              <option value=\"male\">Male</option>\r\n              <option value=\"female\">Female</option>\r\n            </select>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Age\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/table-edit/table-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-edit/table-edit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/table-edit/table-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-edit/table-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: TableEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditComponent", function() { return TableEditComponent; });
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

var TableEditComponent = /** @class */ (function () {
    function TableEditComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditComponent.prototype.ngOnInit = function () {
    };
    TableEditComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditComponent.prototype.updateValue = function (event, cell, row) {
        this.editing[row + '-' + cell] = false;
        this.rows[row][cell] = event.target.value;
    };
    TableEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-edit',
            template: __webpack_require__(/*! ./table-edit.component.html */ "./src/app/theme/table/data-table/table-edit/table-edit.component.html"),
            styles: [__webpack_require__(/*! ./table-edit.component.scss */ "./src/app/theme/table/data-table/table-edit/table-edit.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableEditComponent);
    return TableEditComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/table-edit/table-edit.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/table/data-table/table-edit/table-edit.module.ts ***!
  \************************************************************************/
/*! exports provided: TableEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditModule", function() { return TableEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-edit.component */ "./src/app/theme/table/data-table/table-edit/table-edit.component.ts");
/* harmony import */ var _table_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-edit-routing.module */ "./src/app/theme/table/data-table/table-edit/table-edit-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TableEditModule = /** @class */ (function () {
    function TableEditModule() {
    }
    TableEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _table_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["TableEditRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"]
            ],
            declarations: [_table_edit_component__WEBPACK_IMPORTED_MODULE_2__["TableEditComponent"]]
        })
    ], TableEditModule);
    return TableEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=table-edit-table-edit-module.js.map