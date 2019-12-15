(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-picker-form-picker-module"],{

/***/ "./src/app/theme/forms/form-picker/form-picker-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/forms/form-picker/form-picker-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FormPickerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPickerRoutingModule", function() { return FormPickerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-picker.component */ "./src/app/theme/forms/form-picker/form-picker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _form_picker_component__WEBPACK_IMPORTED_MODULE_2__["FormPickerComponent"],
        data: {
            title: 'Form Picker',
            icon: 'ti-pencil-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form picker',
            status: true
        }
    }
];
var FormPickerRoutingModule = /** @class */ (function () {
    function FormPickerRoutingModule() {
    }
    FormPickerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormPickerRoutingModule);
    return FormPickerRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-picker/form-picker.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/forms/form-picker/form-picker.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Default Date-Picker card start -->\r\n    <app-card title=\"'Default Date-Picker'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Date</h4>\r\n          <p>Add type<code>&lt;input type=\"date\"&gt;</code></p>\r\n          <input class=\"form-control\" type=\"date\" />\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Month</h4>\r\n          <p>Add type<code>&lt;input type=\"month\"&gt;</code></p>\r\n          <input class=\"form-control\" type=\"month\" />\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Week</h4>\r\n          <p>Add type<code>&lt;input type=\"week\"&gt;</code></p>\r\n          <input class=\"form-control\" type=\"week\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">Date-time-local</h4>\r\n          <p>Add type<code>&lt;input type=\"datetime-local\"&gt;</code></p>\r\n          <input class=\"form-control\" type=\"datetime-local\" />\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">Time</h4>\r\n          <p>Add type<code>&lt;input type=\"time\"&gt;</code></p>\r\n          <input class=\"form-control\" type=\"time\" />\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Default Date-Picker card end -->\r\n\r\n    <!-- bootstrap-date-picker start-->\r\n    <app-card title=\"'Bootstrap Date-Picker'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Simple Popup</h4>\r\n          <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"modelPopup\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append bg-default\" (click)=\"d.toggle()\" >\r\n                  <span class=\"icofont icofont-ui-calendar input-group-text\"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <pre>Selected Date: {{ parserFormatter.format(modelPopup) }}</pre>\r\n\r\n          <h4 class=\"sub-title\"> Select Today </h4>\r\n          <button class=\"btn btn-primary\" (click)=\"selectToday()\">Select Today</button>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Simple Inline</h4>\r\n          <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n          <pre class=\"m-t-20\">Selected Month/Year: {{ date.month }}/{{ date.year }}</pre>\r\n          <pre>Selected Date: {{ parserFormatter.format(model) }}</pre>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6 m-b-30 o-hidden\">\r\n          <h4 class=\"sub-title\">Multiple months Inline</h4>\r\n          <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n          <div class=\"m-t-10\">\r\n            <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\r\n              <option [ngValue]=\"1\">One month</option>\r\n              <option [ngValue]=\"2\">Two months</option>\r\n              <option [ngValue]=\"3\">Three months</option>\r\n            </select>\r\n            <select class=\"custom-select\" [(ngModel)]=\"navigation\">\r\n              <option value=\"none\">Without navigation</option>\r\n              <option value=\"select\">With select boxes</option>\r\n              <option value=\"arrows\">Without select boxes</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-lg-6 o-hidden\">\r\n          <h4 class=\"sub-title\">Range Picker</h4>\r\n          <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\r\n          </ngb-datepicker>\r\n\r\n          <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n            <span class=\"custom-range\"\r\n                  [class.focused]=\"focused\"\r\n                  [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\r\n                  [class.faded]=\"isHovered(date) || isInside(date)\"\r\n                  (mouseenter)=\"hoveredDate = date\"\r\n                  (mouseleave)=\"hoveredDate = null\">\r\n              {{ date.day }}\r\n            </span>\r\n          </ng-template>\r\n          <pre class=\"m-t-20\">Selected Date Range: {{ parserFormatter.format(fromDate) }} to {{ parserFormatter.format(toDate) }}</pre>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Disabled</h4>\r\n          <ngb-datepicker [(ngModel)]=\"modelDisabled\" [disabled]=\"disabled\"></ngb-datepicker><br>\r\n          <button class=\"btn btn-{{disabled ? 'danger' : 'success'}} m-t-10\" (click)=\"disabled = !disabled\">\r\n            {{ disabled ? \"Disabled\" : \"Enabled\"}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-3\">\r\n          <h4 class=\"sub-title\">Custom Day</h4>\r\n          <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" [(ngModel)]=\"modelCustomDay\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #dcd=\"ngbDatepicker\">\r\n                <div class=\"input-group-append bg-default\" (click)=\"dcd.toggle()\" >\r\n                  <span class=\"icofont icofont-ui-calendar input-group-text\"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\r\n            <span class=\"custom-day\"\r\n                  [class.weekend]=\"isWeekend(date)\"\r\n                  [class.focused]=\"focused\"\r\n                  [class.bg-primary]=\"selected\"\r\n                  [class.hidden]=\"date.month !== currentMonth\"\r\n                  [class.text-muted]=\"disabled\">\r\n              {{ date.day }}\r\n            </span>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- bootstrap-date-picker end-->\r\n\r\n    <!-- color-picker start-->\r\n    <app-card title=\"'Color Picker'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Basic</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\" [style.background]=\"basicColor\"/>\r\n          <p>set colorPicker<code>#2f6a87 any color</code> and set style<code>background</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Show Color Code </h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"showColorCode\" [style.background]=\"showColorCode\" [value]=\"showColorCode\"/>\r\n          <p>set attribute<code>value</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\"> Code Format</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"showColorCodeHSAL\" [style.background]=\"showColorCodeHSAL\" [value]=\"showColorCodeHSAL\" [cpOutputFormat]=\"'hsla'\"/><br>\r\n          <input class=\"form-control\" [(colorPicker)]=\"showColorCodeRGBA\" [style.background]=\"showColorCodeRGBA\" [value]=\"showColorCodeRGBA\" [cpOutputFormat]=\"'rgba'\"/>\r\n          <p>set attribute cpOutputFormat with <code>hex-default, rgba, hsla</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 o-hidden\">\r\n          <h4 class=\"sub-title\"> Element Color</h4>\r\n          <h1><span [(colorPicker)]=\"changeMeColor\"\r\n                    [cpPosition]=\"'bottom'\"\r\n                    [style.color]=\"changeMeColor\"\r\n                    [cpPositionOffset]=\"'50%'\"\r\n                    [cpPositionRelativeToArrow]=\"true\">Change me!</span></h1>\r\n          <p>set attribute <code>cpPositionRelativeToArrow,cpPositionOffset</code></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Cancel Button</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\"\r\n                 [style.background]=\"basicColor\"\r\n                 [value]=\"basicColor\" [cpCancelButton]=\"true\"\r\n                 [cpCancelButtonClass]= \"'btn btn-primary btn-xs'\"/>\r\n          <p>set cpCancelButton<code>true/false</code> and class cpCancelButtonClass<code>btn btn-primary btn-xs</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">OK Button - Multiple</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\"\r\n                 [style.background]=\"basicColor\"\r\n                 [value]=\"basicColor\"\r\n                 [cpOKButton]=\"true\"\r\n                 [cpSaveClickOutside]=\"false\"\r\n                 [cpCancelButton]=\"true\"\r\n                 [cpCancelButtonClass]= \"'btn btn-danger btn-xs'\"\r\n                 [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"/>\r\n          <p>set cpOKButton<code>true/false</code>and class cpCancelButtonClass<code>btn btn-primary btn-xs</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Toggle Event</h4>\r\n          <input class=\"form-control\" #ignoredInput [(colorPicker)]=\"basicColor\"\r\n                 [(cpToggle)]=\"toggle\"\r\n                 [style.background]=\"basicColor\"\r\n                 [cpIgnoredElements]=\"[ignoredButton, ignoredInput]\"/>\r\n\r\n          <button (click)=\"toggle=!toggle;lastColor=color\" #ignoredButton class=\"btn btn-primary btn-sm m-t-10\">Toggle</button>\r\n          <p>set cpToggle<code>toggle</code> with button</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Preset Colors</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\" [cpPosition]=\"'left'\"\r\n                 [style.background]=\"basicColor\"\r\n                 [cpPresetColors]=\"['#fff', '#000', '#2889e9', '#e920e9', '#fff500', 'rgb(236,64,64)']\"/>\r\n          <p>set cpPresetColors<code>['#fff', '#000', '#2889e9', '#e920e9', '#fff500', 'rgb(236,64,64)']</code></p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n\r\n    <app-card title=\"'Dialog Positions'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Position Bottom</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\" [style.background]=\"basicColor\" [value]=\"basicColor\" [cpPosition]=\"'bottom'\"/>\r\n          <p>set cpPosition<code>bottom</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Position Top</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\" [style.background]=\"basicColor\" [value]=\"basicColor\" [cpPosition]=\"'top'\"/>\r\n          <p>set cpPosition<code>top</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Position Right</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\" [style.background]=\"basicColor\" [value]=\"basicColor\" [cpPosition]=\"'right'\"/>\r\n          <p>set cpPosition<code>right</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Position Left</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"basicColor\" [style.background]=\"basicColor\" [value]=\"basicColor\" [cpPosition]=\"'left'\"/>\r\n          <p>set cpPosition<code>left</code></p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n\r\n    <app-card title=\"'Transparent COLOR PICKER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">RGB Transparent</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"color13\" [cpPosition]=\"'top'\" [style.background]=\"color13\" [cpOutputFormat]=\"'rgba'\" [cpAlphaChannel]=\"'disabled'\" [value]=\"color13\"/>\r\n          <p>set cpOutputFormat<code>rgba</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">RGBA Transparent</h4>\r\n          <input class=\"form-control\" [(colorPicker)]=\"color14\" [cpPosition]=\"'bottom'\" [style.background]=\"color14\" [cpAlphaChannel]=\"'always'\" [cpOutputFormat]=\"'rgba'\" [value]=\"color14\"/>\r\n          <br>\r\n          <p>set cpAlphaChannel<code>always</code> with cpOutputFormat<code>rgba</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">HEX Transparent</h4>\r\n          <input class=\"form-control\" [cpPosition]=\"'bottom'\" [colorPicker]=\"color15\" (colorPickerChange)=\"rgbaText=onChangeColorHex8($event);color15=$event\" [style.background]=\"rgbaText\" [cpAlphaChannel]=\"'always'\" [cpOutputFormat]=\"'hex'\" [value]=\"color15\"/>\r\n          <p>set cpOutputFormat<code>hex</code> with cpAlphaChannel<code>always</code></p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n\r\n    <app-card title=\"'Inline Color Picker'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <div style=\"height: 400px\">\r\n              <span [(colorPicker)]=\"arrayColors[selectedColor]\"\r\n                    [cpDialogDisplay]=\"'inline'\"\r\n                    [style.background]=\"arrayColors[selectedColor]\"\r\n                    [cpCancelButtonClass]= \"'btn btn-primary btn-xs'\"\r\n                    [cpCancelButton]=\"true\"\r\n                    [cpToggle]=\"true\">\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-2\">\r\n          <div class=\"array-colors-element\" [style.background]=\"arrayColors['color']\" (click)=\"selectedColor='color'\"></div>\r\n          <div class=\"array-colors-element\" [style.background]=\"arrayColors['color2']\" (click)=\"selectedColor='color2'\"></div>\r\n          <div class=\"array-colors-element\" [style.background]=\"arrayColors['color3']\" (click)=\"selectedColor='color3'\"></div>\r\n          <div class=\"array-colors-element\" [style.background]=\"arrayColors['color4']\" (click)=\"selectedColor='color4'\"></div>\r\n          <div class=\"array-colors-element\" [style.background]=\"arrayColors['color5']\" (click)=\"selectedColor='color5'\"></div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- color-picker end-->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-picker/form-picker.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/forms/form-picker/form-picker.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-picker/form-picker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/forms/form-picker/form-picker.component.ts ***!
  \******************************************************************/
/*! exports provided: Cmyk, FormPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPickerComponent", function() { return FormPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var now = new Date();
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());

var FormPickerComponent = /** @class */ (function () {
    function FormPickerComponent(parserFormatter, calendar, cpService) {
        var _this = this;
        this.parserFormatter = parserFormatter;
        this.calendar = calendar;
        this.cpService = cpService;
        this.displayMonths = 3;
        this.navigation = 'select';
        this.disabled = true;
        this.toggle = false;
        this.color = '#2889e9';
        this.color2 = 'hsla(300,82%,52%)';
        this.color3 = '#fff500';
        this.color4 = 'rgb(236,64,64)';
        this.color5 = 'rgba(45,208,45,1)';
        this.color13 = 'rgba(0, 255, 0, 0.5)';
        this.color14 = 'rgb(0, 255, 255)';
        this.color15 = '#a51ad633';
        this.basicColor = '#4099ff';
        this.showColorCode = '#db968d';
        this.showColorCodeHSAL = 'hsl(149,27%,65%)';
        this.showColorCodeRGBA = 'rgb(221,14,190)';
        this.changeMeColor = '#523698';
        this.arrayColors = {};
        this.selectedColor = 'color';
        this.modelDisabled = {
            year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
        };
        this.cmyk = new Cmyk(0, 0, 0, 0);
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.arrayColors['color'] = '#2883e9';
        this.arrayColors['color2'] = '#e920e9';
        this.arrayColors['color3'] = 'rgb(255,245,0)';
        this.arrayColors['color4'] = 'rgb(236,64,64)';
        this.arrayColors['color5'] = 'rgba(45,208,45,1)';
        var windowWidth = window.innerWidth;
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.displayMonths = 2;
            this.navigation = 'select';
        }
        else if (windowWidth < 768) {
            this.displayMonths = 1;
            this.navigation = 'select';
        }
        else {
            this.displayMonths = 3;
            this.navigation = 'none';
        }
    }
    FormPickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    FormPickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    FormPickerComponent.prototype.ngOnInit = function () {
    };
    FormPickerComponent.prototype.selectToday = function () {
        this.modelPopup = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    FormPickerComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    FormPickerComponent.prototype.onChangeColor = function (color) {
        return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
    };
    FormPickerComponent.prototype.rgbaToCmyk = function (rgba) {
        var cmyk = new Cmyk(0, 0, 0, 0);
        var k;
        k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        cmyk.c = (1 - rgba.r - k) / (1 - k);
        cmyk.m = (1 - rgba.g - k) / (1 - k);
        cmyk.y = (1 - rgba.b - k) / (1 - k);
        cmyk.k = k;
        return cmyk;
    };
    FormPickerComponent.prototype.onChangeColorHex8 = function (color) {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], FormPickerComponent.prototype, "testRangeDate", void 0);
    FormPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-picker',
            template: __webpack_require__(/*! ./form-picker.component.html */ "./src/app/theme/forms/form-picker/form-picker.component.html"),
            styles: [__webpack_require__(/*! ./form-picker.component.scss */ "./src/app/theme/forms/form-picker/form-picker.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__["ColorPickerService"]])
    ], FormPickerComponent);
    return FormPickerComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-picker/form-picker.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/forms/form-picker/form-picker.module.ts ***!
  \***************************************************************/
/*! exports provided: FormPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPickerModule", function() { return FormPickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-picker.component */ "./src/app/theme/forms/form-picker/form-picker.component.ts");
/* harmony import */ var _form_picker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-picker-routing.module */ "./src/app/theme/forms/form-picker/form-picker-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FormPickerModule = /** @class */ (function () {
    function FormPickerModule() {
    }
    FormPickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _form_picker_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormPickerRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"]
            ],
            declarations: [_form_picker_component__WEBPACK_IMPORTED_MODULE_2__["FormPickerComponent"]]
        })
    ], FormPickerModule);
    return FormPickerModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-picker-form-picker-module.js.map