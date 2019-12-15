(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Accounting-fees-management-fees-management-module~Attendance-attendance-setup-attendance-setup-modul~34ecccfe"],{

/***/ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js ***!
  \***************************************************************************/
/*! exports provided: ChartHTMLTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
var ChartHTMLTooltip = /** @class */ (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    ChartHTMLTooltip.PIXELS = 'px';
    return ChartHTMLTooltip;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js ***!
  \**************************************************************************/
/*! exports provided: ChartMouseEvent, MouseOverEvent, ChartMouseOverEvent, ChartMouseOutEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseEvent", function() { return ChartMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseOverEvent", function() { return MouseOverEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOverEvent", function() { return ChartMouseOverEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOutEvent", function() { return ChartMouseOutEvent; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChartMouseEvent = /** @class */ (function () {
    function ChartMouseEvent() {
    }
    return ChartMouseEvent;
}());

/**
 * @deprecated Use ChartMouseOverEvent instead
 */
var /**
 * @deprecated Use ChartMouseOverEvent instead
 */
MouseOverEvent = /** @class */ (function (_super) {
    __extends(MouseOverEvent, _super);
    function MouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouseOverEvent;
}(ChartMouseEvent));
/**
 * @deprecated Use ChartMouseOverEvent instead
 */

var ChartMouseOverEvent = /** @class */ (function (_super) {
    __extends(ChartMouseOverEvent, _super);
    function ChartMouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOutEvent = /** @class */ (function (_super) {
    __extends(ChartMouseOutEvent, _super);
    function ChartMouseOutEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOutEvent;
}(ChartMouseEvent));



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/google-chart.component.js ***!
  \*******************************************************************************/
/*! exports provided: GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-charts-loader.service */ "./node_modules/ng2-google-charts/google-charts-loader.service.js");
/* harmony import */ var _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-html-tooltip */ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js");



var GoogleChartComponent = /** @class */ (function () {
    function GoogleChartComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var key = 'data';
        if (changes[key]) {
            if (!this.data) {
                return;
            }
            this.options = this.data.options;
            this.loaderService.load(this.data.chartType, this.data.apiKey).then(function () {
                if (_this.wrapper === undefined || _this.wrapper.getChartType() !== _this.data.chartType) {
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                }
                else {
                    _this.unregisterChartEvents();
                    _this.wrapper.setDataTable(_this.data.dataTable);
                    _this.wrapper.setOptions(_this.options);
                }
                _this.registerChartWrapperEvents();
                _this.reformat();
                _this.redraw();
            });
        }
    };
    GoogleChartComponent.prototype.redraw = function () {
        this.reformat();
        this.wrapper.draw(this.el.nativeElement.querySelector('div'));
    };
    /**
     * Applies formatters to data columns, if defined
     */
    /**
       * Applies formatters to data columns, if defined
       */
    GoogleChartComponent.prototype.reformat = /**
       * Applies formatters to data columns, if defined
       */
    function () {
        if (!this.data) {
            return;
        }
        if (this.data.formatters !== undefined) {
            for (var _i = 0, _a = this.data.formatters; _i < _a.length; _i++) {
                var formatterConfig = _a[_i];
                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                var formatter = new formatterConstructor(formatterOptions);
                for (var _b = 0, _c = formatterConfig.columns; _b < _c.length; _b++) {
                    var col = _c[_b];
                    formatter.format(this.wrapper.getDataTable(), col);
                }
            }
        }
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    /**
      * Given a column number, counts how many
      * columns have rol=="data". Those are mapped
      * one-to-one to the series array. When rol is not defined
      * a column of type number means a series column.
      * @param column to inspect
      */
    GoogleChartComponent.prototype.getSeriesByColumn = /**
      * Given a column number, counts how many
      * columns have rol=="data". Those are mapped
      * one-to-one to the series array. When rol is not defined
      * a column of type number means a series column.
      * @param column to inspect
      */
    function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var bar = item.row;
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row === null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__["ChartHTMLTooltip"](tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(item),
            value: this.getValueAtPosition(item),
            columnType: this.getColumnTypeAtPosition(item),
            columnLabel: this.getColumnLabelAtPosition(item)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterChartEvents = function () {
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        if (this.mouseOver.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready' });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addListener(this.wrapper, 'select', function () {
            var event;
            var selection = _this.wrapper.visualization.getSelection()[0];
            if (selection !== undefined) {
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                if (selection.row !== null) {
                    var dataTable = _this.wrapper.getDataTable();
                    var numberOfColumns = dataTable.getNumberOfColumns();
                    for (var i = 0; i < numberOfColumns; i++) {
                        selectedRowValues.push(dataTable.getValue(selection.row, i));
                        selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                    }
                }
                event = (_a = {
                        message: 'select',
                        row: selection.row,
                        column: selection.column
                    },
                    _a['selectedRowValues'] = selectedRowValues,
                    _a['selectedRowFormattedValues'] = selectedRowFormattedValues,
                    _a);
            }
            else {
                event = {
                    message: 'deselect',
                    row: null,
                    column: null,
                    selectedRowValues: [],
                    selectedRowFormattedValues: []
                };
            }
            _this.chartSelect.emit(event);
            var _a;
        });
    };
    GoogleChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'google-chart',
                    template: '<div></div>',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    GoogleChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartsLoaderService"], },
    ]; };
    GoogleChartComponent.propDecorators = {
        "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "chartReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "chartError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "chartSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return GoogleChartComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-charts-loader.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-charts-loader.service.js ***!
  \************************************************************************/
/*! exports provided: GoogleChartsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var GoogleChartsLoaderService = /** @class */ (function () {
    function GoogleChartsLoaderService(localeId) {
        this.chartPackage = {
            AnnotationChart: 'annotationchart',
            AreaChart: 'corechart',
            Bar: 'bar',
            BarChart: 'corechart',
            BubbleChart: 'corechart',
            Calendar: 'calendar',
            CandlestickChart: 'corechart',
            ColumnChart: 'corechart',
            ComboChart: 'corechart',
            PieChart: 'corechart',
            Gantt: 'gantt',
            Gauge: 'gauge',
            GeoChart: 'geochart',
            Histogram: 'corechart',
            Line: 'line',
            LineChart: 'corechart',
            Map: 'map',
            OrgChart: 'orgchart',
            Sankey: 'sankey',
            Scatter: 'scatter',
            ScatterChart: 'corechart',
            SteppedAreaChart: 'corechart',
            Table: 'table',
            Timeline: 'timeline',
            TreeMap: 'treemap',
            WordTree: 'wordtree'
        };
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
    }
    GoogleChartsLoaderService.prototype.load = function (chartType, apiKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            _this.loadGoogleChartsScript().then(function () {
                var initializer = {
                    packages: [_this.chartPackage[chartType]],
                    language: _this.localeId,
                    callback: resolve
                };
                if (apiKey) {
                    initializer.mapsApiKey = apiKey;
                }
                google.charts.load('45.2', initializer);
            }).catch(function (err) { return reject(); });
        });
    };
    GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    GoogleChartsLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleChartsLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] },] },
    ]; };
    return GoogleChartsLoaderService;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-charts.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-charts.module.js ***!
  \****************************************************************/
/*! exports provided: Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-charts-loader.service */ "./node_modules/ng2-google-charts/google-charts-loader.service.js");



var Ng2GoogleChartsModule = /** @class */ (function () {
    function Ng2GoogleChartsModule() {
    }
    Ng2GoogleChartsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
                    ],
                    providers: [
                        _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsLoaderService"]
                    ],
                    exports: [
                        _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2GoogleChartsModule.ctorParameters = function () { return []; };
    return Ng2GoogleChartsModule;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ng2-google-charts/index.js ***!
  \*************************************************/
/*! exports provided: ChartHTMLTooltip, ChartMouseOverEvent, ChartMouseOutEvent, MouseOverEvent, Ng2GoogleChartsModule, GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_0__["GoogleChartComponent"]; });

/* harmony import */ var _google_chart_chart_html_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/chart-html-tooltip */ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return _google_chart_chart_html_tooltip__WEBPACK_IMPORTED_MODULE_1__["ChartHTMLTooltip"]; });

/* harmony import */ var _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart/chart-mouse-event */ "./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOverEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["ChartMouseOverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOutEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["ChartMouseOutEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseOverEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["MouseOverEvent"]; });

/* harmony import */ var _google_charts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-charts.module */ "./node_modules/ng2-google-charts/google-charts.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return _google_charts_module__WEBPACK_IMPORTED_MODULE_3__["Ng2GoogleChartsModule"]; });







/***/ })

}]);
//# sourceMappingURL=Accounting-fees-management-fees-management-module~Attendance-attendance-setup-attendance-setup-modul~34ecccfe.js.map