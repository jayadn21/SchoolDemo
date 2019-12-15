(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advance-elements-advance-elements-module"],{

/***/ "./node_modules/ng2-ui-switch/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-ui-switch/dist/index.js ***!
  \**************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-switch.component */ "./node_modules/ng2-ui-switch/dist/ui-switch.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return _ui_switch_component__WEBPACK_IMPORTED_MODULE_0__["UiSwitchComponent"]; });

/* harmony import */ var _ui_switch_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-switch.module */ "./node_modules/ng2-ui-switch/dist/ui-switch.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return _ui_switch_module__WEBPACK_IMPORTED_MODULE_1__["UiSwitchModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-ui-switch/dist/ui-switch.component.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-ui-switch/dist/ui-switch.component.js ***!
  \****************************************************************/
/*! exports provided: UiSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'medium';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UiSwitchComponent.prototype.getColor = function (flag) {
        if (flag === 'borderColor')
            return this.defaultBoColor;
        if (flag === 'switchColor') {
            if (this.reverse)
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse)
            return !this.checked ? this.color : this.defaultBgColor;
        return this.checked ? this.color : this.defaultBgColor;
    };
    UiSwitchComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    UiSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    UiSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    UiSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return UiSwitchComponent;
}());
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "checked", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "disabled", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "reverse", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "size", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "change", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "color", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchOffColor", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchColor", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UiSwitchComponent.prototype, "onToggle", null);
UiSwitchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'ui-switch',
        template: "\n  <span class=\"switch\" \n  [class.checked]=\"checked\" \n  [class.disabled]=\"disabled\"\n  [class.switch-large]=\"size === 'large'\"\n  [class.switch-medium]=\"size === 'medium'\"\n  [class.switch-small]=\"size === 'small'\"\n  [style.background-color]=\"getColor()\"\n  [style.border-color]=\"getColor('borderColor')\"\n  >\n  <small [style.background]=\"getColor('switchColor')\">\n  </small>\n  </span>\n  ",
        styles: [
            "\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;            \n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }        \n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n    "
        ],
        providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
    })
], UiSwitchComponent);

//# sourceMappingURL=ui-switch.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ui-switch/dist/ui-switch.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-ui-switch/dist/ui-switch.module.js ***!
  \*************************************************************/
/*! exports provided: UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-switch.component */ "./node_modules/ng2-ui-switch/dist/ui-switch.component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    return UiSwitchModule;
}());
UiSwitchModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_ui_switch_component__WEBPACK_IMPORTED_MODULE_1__["UiSwitchComponent"]],
        exports: [_ui_switch_component__WEBPACK_IMPORTED_MODULE_1__["UiSwitchComponent"]]
    })
], UiSwitchModule);

//# sourceMappingURL=ui-switch.module.js.map

/***/ }),

/***/ "./src/app/theme/forms/advance-elements/advance-elements-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/forms/advance-elements/advance-elements-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdvanceElementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceElementsRoutingModule", function() { return AdvanceElementsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _advance_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-elements.component */ "./src/app/theme/forms/advance-elements/advance-elements.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _advance_elements_component__WEBPACK_IMPORTED_MODULE_2__["AdvanceElementsComponent"],
        data: {
            title: 'Advance Form Inputs',
            icon: 'ti-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - advance components',
            status: true
        }
    }
];
var AdvanceElementsRoutingModule = /** @class */ (function () {
    function AdvanceElementsRoutingModule() {
    }
    AdvanceElementsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdvanceElementsRoutingModule);
    return AdvanceElementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/advance-elements/advance-elements.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/forms/advance-elements/advance-elements.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Switches card start -->\r\n    <app-card title=\"'Switches'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Add class of <code>color, switchColor, size</code> attribute with <code>ui-switch</code> tag</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Single Switche</h4>\r\n          <ui-switch class=\"js-single\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Multiple Switches</h4>\r\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Enable Disable Switches</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-auto\">\r\n              <ui-switch class=\"js-dynamic-state m-r-10\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" [disabled]=\"switchDisable\" checked></ui-switch>\r\n            </div>\r\n            <div class=\"col\">\r\n              <button class=\"btn btn-inverse js-dynamic-disable\" (click)=\"disableSwitch()\">Disable</button>\r\n              <button class=\"btn btn-primary js-dynamic-enable\" (click)=\"enableSwitch()\">Enable</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8 m-b-3\">\r\n          <h4 class=\"sub-title\">Color Switches</h4>\r\n          <ui-switch class=\"js-default\" color=\"#bdc3c7\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-primary\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-success\" color=\"#2ecc71\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-info\" color=\"#3498DB\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-warning\" color=\"#f1c40f\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-danger\" color=\"#e74c3c\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-inverse\" color=\"#34495e\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <h4 class=\"sub-title\">Switch Sizes</h4>\r\n          <ui-switch class=\"js-large\" color=\"#4680ff\" switchColor=\"#fff\" size=\"large\" checked></ui-switch>\r\n          <ui-switch class=\"js-medium\" color=\"#2ecc71\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\r\n          <ui-switch class=\"js-small\" color=\"#3498DB\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Switches card end -->\r\n    <!-- Radio card start -->\r\n    <app-card title=\"'Radio'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Add class of <code>.form-control</code> with <code>input</code> tag</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Radio Fill Button</h4>\r\n          <div class=\"form-radio\">\r\n            <form>\r\n              <div class=\"radio radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n                  <i class=\"helper\"></i>Radio 1\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"radio\">\r\n                  <i class=\"helper\"></i>Radio 2\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radio-inline radio-disable\">\r\n                <label>\r\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\r\n                  <i class=\"helper\"></i>Radio Disable\r\n                </label>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Radio outline Button</h4>\r\n          <div class=\"form-radio\">\r\n            <form>\r\n              <div class=\"radio radio-outline radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n                  <i class=\"helper\"></i>Radio 1\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radio-outline radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"radio\">\r\n                  <i class=\"helper\"></i>Radio 2\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radio-inline radio-disable\">\r\n                <label>\r\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\r\n                  <i class=\"helper\"></i>Radio Disable\r\n                </label>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Radio Button</h4>\r\n          <div class=\"form-radio\">\r\n            <form>\r\n              <div class=\"radio radiofill radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n                  <i class=\"helper\"></i>Radio-fill 1\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radiofill radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"radio\">\r\n                  <i class=\"helper\"></i>Radio-fill 2\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radiofill radio-inline radio-disable\">\r\n                <label>\r\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\r\n                  <i class=\"helper\"></i>Radio-fill Disable\r\n                </label>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h4 class=\"sub-title\">Color Radio Button</h4>\r\n      <div class=\"form-radio m-b-30\">\r\n        <form>\r\n          <div class=\"radio radiofill radio-default radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Default Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radiofill radio-primary radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Primary Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radiofill radio-success radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Success Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radiofill radio-info radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Info Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radiofill radio-warning radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Warning Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radiofill radio-danger radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Danger Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radiofill radio-inverse radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Inverse Color\r\n            </label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <h4 class=\"sub-title\">Color Radio material Button</h4>\r\n      <div class=\"form-radio m-b-30\">\r\n        <form>\r\n          <div class=\"radio radio-matrial radio-default radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Default Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-matrial radio-primary radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Primary Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-matrial radio-success radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Success Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-matrial radio-info radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Info Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-matrial radio-warning radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Warning Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-matrial radio-danger radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Danger Color\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-matrial radio-inverse radio-inline\">\r\n            <label>\r\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n              <i class=\"helper\"></i>Inverse Color\r\n            </label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </app-card>\r\n    <!-- Radio card end -->\r\n    <!-- Checkbox card start -->\r\n    <app-card title=\"'Checkbox'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Add class of <code>.form-control</code> with <code>input</code> tag</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\r\n          <h4 class=\"sub-title\">Border Checkbox</h4>\r\n          <div class=\"border-checkbox-section\">\r\n            <div class=\"border-checkbox-group border-checkbox-group-default\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox0\">\r\n              <label class=\"border-checkbox-label\" for=\"checkbox0\">Do you like it?</label>\r\n            </div>\r\n            <div class=\"border-checkbox-group border-checkbox-group-primary\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox1\">\r\n              <label class=\"border-checkbox-label\" for=\"checkbox1\">Primary</label>\r\n            </div>\r\n            <div class=\"border-checkbox-group border-checkbox-group-success\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox2\">\r\n              <label class=\"border-checkbox-label\" for=\"checkbox2\">Success</label>\r\n            </div>\r\n            <div class=\"border-checkbox-group border-checkbox-group-info\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox3\">\r\n              <label class=\"border-checkbox-label\" for=\"checkbox3\">Info</label>\r\n            </div>\r\n            <div class=\"border-checkbox-group border-checkbox-group-warning\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox4\">\r\n              <label class=\"border-checkbox-label\" for=\"checkbox4\">Warning</label>\r\n            </div>\r\n            <div class=\"border-checkbox-group border-checkbox-group-danger\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox5\">\r\n              <label class=\"border-checkbox-label\" for=\"checkbox5\">Danger</label>\r\n            </div>\r\n            <div class=\"border-checkbox-group\">\r\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox6\" disabled>\r\n              <label class=\"border-checkbox-label\" for=\"checkbox6\">Disabled</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\r\n          <h4 class=\"sub-title\">Fade-in Checkbox</h4>\r\n          <div class=\"checkbox-fade fade-in-default\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\r\n                                                                        </span>\r\n              <span>Default</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-fade fade-in-primary\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                                                                        </span>\r\n              <span>Primary</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-fade fade-in-warning\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-warning\"></i>\r\n                                                                        </span>\r\n              <span> Warning</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-fade fade-in-success\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-success\"></i>\r\n                                                                        </span>\r\n              <span>Success</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-fade fade-in-info\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-info\"></i>\r\n                                                                        </span>\r\n              <span> Info</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-fade fade-in-danger\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-danger\"></i>\r\n                                                                        </span>\r\n              <span> Danger</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-fade fade-in-disable\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\" disabled>\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check text-default\"></i>\r\n                                                                        </span>\r\n              <span>Disabled</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\r\n          <h4 class=\"sub-title\">Color Checkbox</h4>\r\n          <div class=\"checkbox-color checkbox-default\">\r\n            <input id=\"checkbox12\" type=\"checkbox\" checked=\"\">\r\n            <label for=\"checkbox12\">\r\n              Default\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-color checkbox-primary\">\r\n            <input id=\"checkbox18\" type=\"checkbox\" checked=\"\">\r\n            <label for=\"checkbox18\">\r\n              Primary\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-color checkbox-success\">\r\n            <input id=\"checkbox13\" type=\"checkbox\" checked=\"\">\r\n            <label for=\"checkbox13\">\r\n              Success\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-color checkbox-info\">\r\n            <input id=\"checkbox14\" type=\"checkbox\" checked=\"\">\r\n            <label for=\"checkbox14\">\r\n              Info\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-color checkbox-warning\">\r\n            <input id=\"checkbox15\" type=\"checkbox\" checked=\"\">\r\n            <label for=\"checkbox15\">\r\n              Warning\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-color checkbox-danger\">\r\n            <input id=\"checkbox16\" type=\"checkbox\" checked=\"\">\r\n            <label for=\"checkbox16\">\r\n              Danger\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-color checkbox-default\">\r\n            <input id=\"checkbox17\" type=\"checkbox\" disabled=\"\">\r\n            <label for=\"checkbox17\">\r\n              Disabled\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\r\n          <h4 class=\"sub-title\">zoom Checkbox</h4>\r\n          <div class=\"checkbox-zoom zoom-default\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\r\n                                                                        </span>\r\n              <span>Default</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-zoom zoom-primary\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                                                                        </span>\r\n              <span>Primary</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-zoom zoom-warning\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-warning\"></i>\r\n                                                                        </span>\r\n              <span> Warning</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-zoom zoom-success\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-success\"></i>\r\n                                                                        </span>\r\n              <span>Success</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-zoom zoom-info\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-info\"></i>\r\n                                                                        </span>\r\n              <span> Info</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-zoom zoom-danger\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\">\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-danger\"></i>\r\n                                                                        </span>\r\n              <span> Danger</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"checkbox-zoom zoom-disable\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"\" disabled>\r\n              <span class=\"cr\">\r\n                                                                            <i class=\"cr-icon icofont icofont-ui-check text-default\"></i>\r\n                                                                        </span>\r\n              <span>Disabled</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Checkbox card end -->\r\n    <app-card title=\"'Tags Input'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\r\n      <span class=\"code-header\">Add class of <code>.tag-chips</code> with <code>tag-input</code> tag</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Basic Tag Input</h4>\r\n          <tag-input class=\"tag-chips\" [(ngModel)]=\"items\" [modelAsStrings]=\"true\"></tag-input>\r\n          <p>Just add <code>ngModel</code> to your <code>tag-input</code> field to automatically change it to a tags input field.</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Read Only Tag Input</h4>\r\n          <tag-input class=\"tag-chips\" [(ngModel)]=\"itemsAsObjects\" [identifyBy]=\"'id'\" [displayBy]=\"'name'\"></tag-input>\r\n          <p>Just add <code>identifyBy, displayBy</code> attribute to your <code>tag-input</code> field.</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Not Removable Tag Input</h4>\r\n          <tag-input class=\"tag-chips\" [ngModel]=\"items\" [removable]=\"false\"></tag-input>\r\n          <p>Just add <code>removable</code> attribute with <code>false</code> value, to your <code>tag-input</code> field.</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Editable Tag Input</h4>\r\n          <tag-input class=\"tag-chips\" [(ngModel)]=\"items\" [editable]=\"true\"></tag-input>\r\n          <p>Just add <code>editable</code> attribute with <code>true</code> value, to your <code>tag-input</code> field. (doubble click on tag)</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Tag Input Limit (3)</h4>\r\n          <tag-input class=\"tag-chips\" [ngModel]=\"['Amsterdam', 'Washington']\" [maxItems]=\"3\" [ripple]=\"false\" placeholder=\"Insert a new item\"></tag-input>\r\n          <p>Just add <code>maxItems, ripple</code> attribute to your <code>tag-input</code> field. (doubble click on tag)</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Tag Input Validation</h4>\r\n          <tag-input class=\"tag-chips\" [ngModel]=\"['@Amsterdam$']\" [errorMessages]=\"errorMessages\" [validators]=\"validators\"></tag-input>\r\n          <p>Just add <code>errorMessages, validators</code> attribute to your <code>tag-input</code> field.</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Tag Input with Space Key</h4>\r\n          <tag-input class=\"tag-chips\" [ngModel]=\"['Amsterdam']\" [separatorKeyCodes]=\"[32, 188]\"></tag-input>\r\n          <p>Just add <code>separatorKeyCodes</code> attribute with <code>ket code</code> method to your <code>tag-input</code> field.</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Tag Input with Theme</h4>\r\n          <tag-input class=\"tag-chips\" [theme]=\"'dark'\" [ngModel]=\"['Amsterdam']\" name=\"items\"></tag-input>\r\n          <p>Just add <code>theme</code> attribute with <code>bootstrap(default), danger, success, warning, dark</code> value to your <code>tag-input</code> field.</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Tag Input with Minimal Theme</h4>\r\n          <tag-input class=\"tag-chips\" [theme]=\"'minimal-danger'\" [ngModel]=\"['Amsterdam']\" name=\"items\"></tag-input>\r\n          <p>Just add <code>theme</code> attribute with <code>minimal, minimal-danger, minimal-success, minimal-warning, minimal-dark</code> value to your <code>tag-input</code> field.</p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/advance-elements/advance-elements.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/forms/advance-elements/advance-elements.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/advance-elements/advance-elements.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/forms/advance-elements/advance-elements.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdvanceElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceElementsComponent", function() { return AdvanceElementsComponent; });
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

var AdvanceElementsComponent = /** @class */ (function () {
    function AdvanceElementsComponent() {
        this.switchDisable = true;
        this.items = ['Amsterdam', 'Washington', 'Sydney'];
        this.itemsAsObjects = [{ id: 0, name: 'Amsterdam', readonly: true }, { id: 1, name: 'Washington' }];
        this.errorMessages = {
            'startsWithAt@': 'Your items need to start with \'@\'',
            'endsWith$': 'Your items need to end with \'$\''
        };
        this.validators = [this.startsWithAt, this.endsWith$];
    }
    AdvanceElementsComponent.prototype.ngOnInit = function () {
    };
    AdvanceElementsComponent.prototype.disableSwitch = function () {
        this.switchDisable = true;
    };
    AdvanceElementsComponent.prototype.enableSwitch = function () {
        this.switchDisable = false;
    };
    AdvanceElementsComponent.prototype.startsWithAt = function (control) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }
        return null;
    };
    AdvanceElementsComponent.prototype.endsWith$ = function (control) {
        if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
                'endsWith$': true
            };
        }
        return null;
    };
    AdvanceElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance-elements',
            template: __webpack_require__(/*! ./advance-elements.component.html */ "./src/app/theme/forms/advance-elements/advance-elements.component.html"),
            styles: [__webpack_require__(/*! ./advance-elements.component.scss */ "./src/app/theme/forms/advance-elements/advance-elements.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvanceElementsComponent);
    return AdvanceElementsComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/advance-elements/advance-elements.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/forms/advance-elements/advance-elements.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdvanceElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceElementsModule", function() { return AdvanceElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _advance_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-elements.component */ "./src/app/theme/forms/advance-elements/advance-elements.component.ts");
/* harmony import */ var _advance_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance-elements-routing.module */ "./src/app/theme/forms/advance-elements/advance-elements-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdvanceElementsModule = /** @class */ (function () {
    function AdvanceElementsModule() {
    }
    AdvanceElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _advance_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvanceElementsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_advance_elements_component__WEBPACK_IMPORTED_MODULE_2__["AdvanceElementsComponent"]]
        })
    ], AdvanceElementsModule);
    return AdvanceElementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=advance-elements-advance-elements-module.js.map