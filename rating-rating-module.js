(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rating-rating-module"],{

/***/ "./node_modules/ngx-bar-rating/component/bar-rating.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bar-rating/component/bar-rating.component.js ***!
  \***********************************************************************/
/*! exports provided: BarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarRatingComponent", function() { return BarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


/** This allows support [(ngModel)] and ngControl. */
var RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BarRatingComponent; }),
    multi: true
};
/** This allows control required validation. */
var RATING_VALUE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BarRatingComponent; }),
    multi: true,
};
var BarRatingComponent = (function () {
    function BarRatingComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.contexts = [];
        /** Maximal rating that can be given using this widget. */
        this.max = 5;
        /** A flag indicating if rating can be updated. */
        this.readOnly = false;
        /** Set the theme */
        this.theme = 'default';
        /** Show rating title */
        this.showText = false;
        /** Replace rate value with a title */
        this.titles = [];
        /** A flag indicating if rating is required for form validation. */
        this.required = false;
        /** An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over. */
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over. */
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating. */
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    BarRatingComponent.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    BarRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contexts = Array.from({ length: this.max }, function (context, i) { return ({
            selected: false,
            fraction: false,
            click: function (e) { return _this.handleClick(e, i + 1); },
            enter: function () { return _this.handleEnter(i + 1); }
        }); });
        this.updateState(this.rate);
    };
    BarRatingComponent.prototype.update = function (newRate, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        if (!this.readOnly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this.updateState(this.rate);
    };
    /** Reset rate value */
    BarRatingComponent.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this.updateState(this.rate);
    };
    BarRatingComponent.prototype.updateState = function (nextValue) {
        var _this = this;
        /** Set rate value as text */
        this.nextRate = nextValue - 1;
        /** Set the rating */
        this.contexts = Array.from({ length: this.max }, function (context, index) { return ({
            selected: index + 1 <= nextValue,
            fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
            click: function (e) { return _this.handleClick(e, index); },
            enter: function () { return _this.handleEnter(index); }
        }); });
    };
    BarRatingComponent.prototype.handleClick = function (e, value) {
        /** (NOT TESTED) Remove 300ms click delay on touch devices */
        e.preventDefault();
        e.stopPropagation();
        this.update(value + 1);
    };
    BarRatingComponent.prototype.handleEnter = function (index) {
        if (!this.disabled && !this.readOnly) {
            /** Add selected class for rating hover */
            this.contexts.map(function (context, i) {
                context.active = i <= index;
                context.fraction = false;
                context.selected = false;
            });
            this.nextRate = index;
            this.hover.emit(index);
        }
    };
    /** This is the initial value set to the component */
    BarRatingComponent.prototype.writeValue = function (value) {
        this.update(value, false);
        this.changeDetectorRef.markForCheck();
    };
    BarRatingComponent.prototype.validate = function (c) {
        return (this.required && !c.value) ? { required: true } : null;
    };
    BarRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BarRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BarRatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return BarRatingComponent;
}());

BarRatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'bar-rating',
                template: "\n    <div [class]=\"'br br-' + theme\" [class.br-readonly]=\"readOnly\" [class.br-disabled]=\"disabled\">\n\n      <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n        <div class=\"br-unit\" *ngFor=\"let unit of contexts\" [class.br-fraction]=\"unit.fraction\"\n            [class.br-selected]=\"unit.selected\" [class.br-active]=\"unit.active\"\n            (click)=\"unit.click($event)\" (mouseenter)=\"unit.enter()\"></div>\n\n      </div>\n\n      <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles}}</div>\n    </div>\n  ",
                styles: ["\n    *{box-sizing:border-box}.br{position:relative;margin:15px 0}.br-units{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.br-unit{cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}\n  "],
                providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
BarRatingComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
]; };
BarRatingComponent.propDecorators = {
    'rate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'readOnly': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'theme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'titles': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'required': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hover': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'leave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'rateChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=bar-rating.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bar-rating/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ngx-bar-rating/index.js ***!
  \**********************************************/
/*! exports provided: BarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.module */ "./node_modules/ngx-bar-rating/rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarRatingModule", function() { return _rating_module__WEBPACK_IMPORTED_MODULE_0__["BarRatingModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bar-rating/pipe/bar-rating.pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-bar-rating/pipe/bar-rating.pipe.js ***!
  \*************************************************************/
/*! exports provided: BarRatingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarRatingPipe", function() { return BarRatingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BarRatingPipe = (function () {
    function BarRatingPipe() {
    }
    BarRatingPipe.prototype.transform = function (value, titles) {
        if (value === void 0) { value = 0; }
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    };
    return BarRatingPipe;
}());

BarRatingPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'rateTitle'
            },] },
];
/** @nocollapse */
BarRatingPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=bar-rating.pipe.js.map

/***/ }),

/***/ "./node_modules/ngx-bar-rating/rating.module.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-bar-rating/rating.module.js ***!
  \******************************************************/
/*! exports provided: BarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarRatingModule", function() { return BarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_bar_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/bar-rating.component */ "./node_modules/ngx-bar-rating/component/bar-rating.component.js");
/* harmony import */ var _pipe_bar_rating_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/bar-rating.pipe */ "./node_modules/ngx-bar-rating/pipe/bar-rating.pipe.js");





var BarRatingModule = (function () {
    function BarRatingModule() {
    }
    return BarRatingModule;
}());

BarRatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    _component_bar_rating_component__WEBPACK_IMPORTED_MODULE_3__["BarRatingComponent"],
                    _pipe_bar_rating_pipe__WEBPACK_IMPORTED_MODULE_4__["BarRatingPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                exports: [
                    _component_bar_rating_component__WEBPACK_IMPORTED_MODULE_3__["BarRatingComponent"]
                ]
            },] },
];
/** @nocollapse */
BarRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/rating/rating-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RatingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingRoutingModule", function() { return RatingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.component */ "./src/app/theme/ui-elements/advance/rating/rating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"],
        data: {
            title: 'Rating',
            icon: 'ti-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - rating',
            status: true
        }
    }
];
var RatingRoutingModule = /** @class */ (function () {
    function RatingRoutingModule() {
    }
    RatingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RatingRoutingModule);
    return RatingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.component.html":
/*!************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/rating/rating.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Rating card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Rating</h5>\r\n            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">1/10 Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>horizontal</code> to see default rating</p>\r\n              <div class=\"box-body f-left\">\r\n                <bar-rating [(rate)]=\"rateHorizontal\" [max]=\"10\" [theme]=\"'horizontal'\"></bar-rating>\r\n                <span class=\"current-rating\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Movie Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>movie</code> to see movie rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateMovie\" [max]=\"4\" [theme]=\"'movie'\" [showText]=\"true\" [titles]=\"['Bad', 'Mediocre' , 'Good', 'Awesome']\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">square rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>square</code> to see square rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateSquare\" [max]=\"5\" [theme]=\"'square'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Read Only rating</h6>\r\n              <p>Use attribute<code>readOnly</code> as value <code>true</code> to see read only rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateMovie\" [max]=\"5\" [readOnly]=\"true\" [theme]=\"'movie'\" [showText]=\"true\" [titles]=\"['Strongly Agree', 'Agree' , 'Neither Agree or Disagree', 'Disagree', 'Strongly Disagree']\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Star rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>stars</code> to see star rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateStar\" [max]=\"8\" [theme]=\"'stars'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Vertical Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>vertical</code> to see vertical rating</p>\r\n              <div class=\"box-body f-left\">\r\n                <bar-rating [(rate)]=\"rateVertical\" [max]=\"10\" [theme]=\"'vertical'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Font awesome Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>fontawesome</code> to see font awesome rating</p>\r\n              <div class=\"stars stars-example-fontawesome\">\r\n                <bar-rating [(rate)]=\"rateFa\" [max]=\"5\" [theme]=\"'fontawesome'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">CSS Default Rating</h6>\r\n              <p>Use tag<code>bar-rating</code> to see css default stars rating</p>\r\n              <div class=\"stars stars-example-css\">\r\n                <bar-rating [(rate)]=\"rateDefault\" [max]=\"5\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">fractional star Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>fontawesome-o</code> to see fractional star rating</p>\r\n              <div class=\"stars\">\r\n                <bar-rating [(rate)]=\"rateFao\" [max]=\"10\" [theme]=\"'fontawesome-o'\"></bar-rating>\r\n                <span class=\"title current-rating\">\r\n                  Current rating: <span class=\"value\">{{ rateFao }}</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Rating card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/rating/rating.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/rating/rating.component.ts ***!
  \**********************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rateDefault = 1;
        this.rateFa = 1;
        this.rateFao = 5.6;
        this.rateMovie = 2;
        this.rateHorizontal = 7;
        this.rateVertical = 1;
        this.rateStar = 5;
        this.rateSquare = 2;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/theme/ui-elements/advance/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/theme/ui-elements/advance/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/rating/rating.module.ts ***!
  \*******************************************************************/
/*! exports provided: RatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.component */ "./src/app/theme/ui-elements/advance/rating/rating.component.ts");
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating-routing.module */ "./src/app/theme/ui-elements/advance/rating/rating-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _rating_routing_module__WEBPACK_IMPORTED_MODULE_3__["RatingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_5__["BarRatingModule"]
            ],
            declarations: [_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]]
        })
    ], RatingModule);
    return RatingModule;
}());



/***/ })

}]);
//# sourceMappingURL=rating-rating-module.js.map