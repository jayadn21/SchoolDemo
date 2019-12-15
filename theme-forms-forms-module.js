(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-forms-forms-module"],{

/***/ "./src/app/theme/forms/forms-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/forms/forms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
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
            title: 'Forms Components',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
            },
            {
                path: 'add-on',
                loadChildren: './add-on/add-on.module#AddOnModule'
            },
            {
                path: 'advance',
                loadChildren: './advance-elements/advance-elements.module#AdvanceElementsModule'
            },
            {
                path: 'validation',
                loadChildren: './form-validation/form-validation.module#FormValidationModule'
            },
            {
                path: 'picker',
                loadChildren: './form-picker/form-picker.module#FormPickerModule'
            },
            {
                path: 'select',
                loadChildren: './form-select/form-select.module#FormSelectModule'
            },
            {
                path: 'form-wizards',
                loadChildren: './form-wizards/form-wizards.module#FormWizardsModule'
            },
            {
                path: 'ngx',
                loadChildren: './ngx-wizard/ngx-wizard.module#NGXFormWizardModule'
            }
        ]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/theme/forms/forms-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-forms-forms-module.js.map