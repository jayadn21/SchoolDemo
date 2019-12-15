(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-landing-landing-module"],{

/***/ "./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js ***!
  \***************************************************************************************/
/*! exports provided: ScrollToModule, ScrollToService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToModule", function() { return ScrollToModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToService", function() { return ScrollToService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/ReplaySubject */ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js");






/**
 * Default values for Component Input.
 */
var DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
/**
 * Easing Colleciton.
 */
var EASING = {
    easeInQuad: function (time) {
        return time * time;
    },
    easeOutQuad: function (time) {
        return time * (2 - time);
    },
    easeInOutQuad: function (time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    easeInCubic: function (time) {
        return time * time * time;
    },
    easeOutCubic: function (time) {
        return (--time) * time * time + 1;
    },
    easeInOutCubic: function (time) {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    },
    easeInQuart: function (time) {
        return time * time * time * time;
    },
    easeOutQuart: function (time) {
        return 1 - (--time) * time * time * time;
    },
    easeInOutQuart: function (time) {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
    },
    easeInQuint: function (time) {
        return time * time * time * time * time;
    },
    easeOutQuint: function (time) {
        return 1 + (--time) * time * time * time * time;
    },
    easeInOutQuint: function (time) {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
    },
    easeOutElastic: function (time) {
        return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
    }
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 */
var EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param {?} value 				The given string value
 * @return {?} 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param {?} container 				The given Element
 * @return {?} 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param {?} value 					The given value
 * @return {?} Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"];
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param {?} value           The given value
 * @return {?} Whether or not the value is a Native Element
 */
function isNativeElement(value) {
    return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
/**
 * Scroll To Animation.
 */
var ScrollToAnimation = /** @class */ (function () {
    /**
     * Class Constructor.
     *
     * @param {?} _container            The Container
     * @param {?} _listenerTarget       The Element that listens for DOM Events
     * @param {?} _isWindow             Whether or not the listener is the Window
     * @param {?} _to                   Position to scroll to
     * @param {?} _options              Additional options for scrolling
     * @param {?} _isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    function ScrollToAnimation(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        var _this = this;
        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation.
         *
         * @return Void
         */
        this._loop = function () {
            _this._timeLapsed += _this._tick;
            _this._percentage = (_this._timeLapsed / _this._options.duration);
            _this._percentage = (_this._percentage > 1) ? 1 : _this._percentage;
            // Position Update
            _this._position = _this._startPosition +
                ((_this._startPosition - _this._to <= 0 ? 1 : -1) *
                    _this._distance *
                    EASING[_this._options.easing](_this._percentage));
            if (_this._lastPosition !== null && _this._position === _this._lastPosition) {
                _this.stop();
            }
            else {
                _this._source$.next(_this._position);
                _this._isWindow
                    ? _this._listenerTarget.scrollTo(0, Math.floor(_this._position))
                    : _this._container.scrollTop = Math.floor(_this._position);
                _this._lastPosition = _this._position;
            }
        };
        this._tick = 16;
        this._interval = null;
        this._lastPosition = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this._container) {
            this._startPosition = this._windowScrollTop;
        }
        else {
            this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this._container && !this._isWindow) {
            this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        }
        // Set Distance
        var directionalDistance = this._startPosition - this._to;
        this._distance = this._container ? Math.abs(this._startPosition - this._to) : this._to;
        this._mappedOffset = this._options.offset;
        // Set offset from Offset Map
        if (this._isBrowser) {
            this._options
                .offsetMap
                .forEach(function (value, key) { return _this._mappedOffset = window.innerWidth > key ? value : _this._mappedOffset; });
        }
        this._distance += this._mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"]();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    ScrollToAnimation.prototype.start = function () {
        clearInterval(this._interval);
        this._interval = setInterval(this._loop, this._tick);
        return this._source$.asObservable();
    };
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    ScrollToAnimation.prototype.stop = function () {
        clearInterval(this._interval);
        this._interval = null;
        this._source$.complete();
    };
    return ScrollToAnimation;
}());
/**
 * The ScrollToService handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
var ScrollToService = /** @class */ (function () {
    /**
     * Construct and setup required paratemeters.
     *
     * @param {?} _document         A Reference to the Document
     * @param {?} _platformId       Angular Platform ID
     */
    function ScrollToService(_document, _platformId) {
        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype.scrollTo = function (options) {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this._platformId))
            return new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"]().asObservable();
        return this._start(options);
    };
    /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype._start = function (options) {
        var _this = this;
        // Merge config with default values
        var /** @type {?} */ mergedConfigOptions = (Object.assign({}, /** @type {?} */ (DEFAULTS), options));
        if (this._animation)
            this._animation.stop();
        var /** @type {?} */ targetNode = this._getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('Unable to find Target Element');
        var /** @type {?} */ container = this._getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('Unable to find Container Element');
        var /** @type {?} */ listenerTarget = this._getListenerTarget(container) || window;
        var /** @type {?} */ to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this._platformId));
        var /** @type {?} */ onInterrupt = function () { return _this._animation.stop(); };
        this._addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        var /** @type {?} */ animation$ = this._animation.start();
        this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    };
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    ScrollToService.prototype._subscribeToAnimation = function (animation$, listenerTarget, onInterrupt) {
        var _this = this;
        var /** @type {?} */ subscription = animation$
            .subscribe(function () { }, function () { }, function () {
            _this._removeInterruptiveEventListeners(_this._interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        });
    };
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode
     * @return {?}
     */
    ScrollToService.prototype._getContainer = function (options, targetNode) {
        var /** @type {?} */ container = null;
        if (options.container) {
            container = this._getNode(options.container, true);
        }
        else if (targetNode) {
            container = this._getFirstScrollableParent(targetNode);
        }
        return container;
    };
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._addInterruptiveEventListeners = function (listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        this._interruptiveEvents.forEach(function (event) { return listenerTarget.addEventListener(event, handler); });
    };
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._removeInterruptiveEventListeners = function (events, listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        events.forEach(function (event) { return listenerTarget.removeEventListener(event, handler); });
    };
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    ScrollToService.prototype._getFirstScrollableParent = function (nativeElement) {
        var /** @type {?} */ style = window.getComputedStyle(nativeElement);
        var /** @type {?} */ overflowRegex = /(auto|scroll)/;
        if (style.position === 'fixed')
            return null;
        for (var /** @type {?} */ parent = nativeElement; parent = parent.parentElement; null) {
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden')
                continue;
            if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)
                || parent.tagName === 'BODY')
                return parent;
        }
        return null;
    };
    /**
     * Get the Target Node to scroll to.
     *
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    ScrollToService.prototype._getNode = function (id, allowBodyTag) {
        if (allowBodyTag === void 0) { allowBodyTag = false; }
        var /** @type {?} */ targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this._document.body;
            }
            else {
                targetNode = this._document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    };
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    ScrollToService.prototype._getListenerTarget = function (container) {
        if (!container)
            return null;
        return this._isDocumentBody(container) ? window : container;
    };
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    ScrollToService.prototype._isDocumentBody = function (element) {
        return element.tagName.toUpperCase() === 'BODY';
    };
    return ScrollToService;
}());
ScrollToService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
ScrollToService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
var ScrollToDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _scrollToService
     * @param {?} _renderer2
     */
    function ScrollToDirective(_elementRef, _scrollToService, _renderer2) {
        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    ScrollToDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1)
            throw new Error("Unsupported Event '" + this.ngxScrollToEvent + "'");
        // Listen for the trigger...
        this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent, function (event) {
            _this._options = {
                target: _this.ngxScrollTo,
                duration: _this.ngxScrollToDuration,
                easing: _this.ngxScrollToEasing,
                offset: _this.ngxScrollToOffset,
                offsetMap: _this.ngxScrollToOffsetMap
            };
            _this._scrollToService.scrollTo(_this._options);
        });
    };
    return ScrollToDirective;
}());
ScrollToDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngx-scroll-to]'
            },] },
];
/**
 * @nocollapse
 */
ScrollToDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: ScrollToService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
ScrollToDirective.propDecorators = {
    'ngxScrollTo': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to',] },],
    'ngxScrollToEvent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-event',] },],
    'ngxScrollToDuration': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-duration',] },],
    'ngxScrollToEasing': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-easing',] },],
    'ngxScrollToOffset': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-offset',] },],
    'ngxScrollToOffsetMap': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-offset-map',] },],
};
var ScrollToModule = /** @class */ (function () {
    function ScrollToModule() {
    }
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    ScrollToModule.forRoot = function () {
        return {
            ngModule: ScrollToModule,
            providers: [
                ScrollToService
            ]
        };
    };
    return ScrollToModule;
}());
ScrollToModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    ScrollToDirective
                ],
                exports: [
                    ScrollToDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ScrollToModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-scroll-to.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/ReplaySubject.js ***!
  \*********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]; });


//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./src/app/theme/landing/landing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component */ "./src/app/theme/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        data: {
            title: 'Landing',
            icon: 'icon-layout-cta-right',
            caption: 'my landing',
            status: true
        }
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/landing/landing.component.html":
/*!******************************************************!*\
  !*** ./src/app/theme/landing/landing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"container\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main\" role=\"navigation\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand page-scroll\" [ngx-scroll-to]=\"'#main'\" (click)=\"this.openMe = false\"><img src=\"assets/landing/logos/logo.png\" alt=\"Gradient Able Logo\" /></a>\r\n        <button (click)=\"this.openMe = !this.openMe\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"this.openMe ? 'show': ''\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n          </ul>\r\n          <ul class=\"navbar-nav my-2 my-lg-0\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#main'\" (click)=\"this.openMe = false\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#services'\" (click)=\"this.openMe = false\">Important</a>\r\n            </li>\r\n            <li ngbDropdown class=\"nav-item dropdown\">\r\n              <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"this.openMe = false\">Level 1</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"this.openMe = false\">Level 2</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"this.openMe = false\">Level 3</a>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#features'\" (click)=\"this.openMe = false\">Benefits</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#reviews'\" (click)=\"this.openMe = false\">Testimonials</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#pricing'\" (click)=\"this.openMe = false\">Pricing</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"javascript:\">Contact</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <div class=\"main\" id=\"main\">\r\n    <div class=\"hero-section app-hero\">\r\n      <div class=\"container\">\r\n        <div class=\"hero-content app-hero-content text-center\">\r\n          <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-md-10\">\r\n              <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Gradient Able Angular 5 Admin Template</h1>\r\n              <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                First ever Angular 5 admin template with Flat UI Interface. <br class=\"hidden-xs\"> Its best choice for your any complex project.\r\n              </p>\r\n              <a class=\"btn btn-primary btn-action\" data-wow-delay=\"0.2s\" target=\"_blank\" [routerLink]=\"['/dashboard/default/']\">Live Preview</a>\r\n              <a class=\"btn btn-primary btn-action\" data-wow-delay=\"0.2s\" href=\"javascript:\">Buy Now</a>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"hero-image\">\r\n                <img class=\"img-fluid\" src=\"assets/landing/images/app_hero_1.png\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"services-section text-center\" id=\"services\">\r\n      <!-- Services section (small) with icons -->\r\n      <div class=\"container\">\r\n        <div class=\"row  justify-content-md-center\">\r\n          <div class=\"col-md-8\">\r\n            <div class=\"services-content\">\r\n              <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">We take care our products for more feature rich</h1>\r\n              <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                Gradient Able is one of the finest Admin dashboard template in its category. Premium admin dashboard with high end feature rich possibilities.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 text-center\">\r\n            <div class=\"services\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                  <div class=\"services-icon\">\r\n                    <img src=\"assets/landing/logos/icon1.png\" height=\"60\" width=\"60\" alt=\"Service\" />\r\n                  </div>\r\n                  <div class=\"services-description\">\r\n                    <h1>Mega feature rich</h1>\r\n                    <p>\r\n                      Gradient Able is one of unique dashboard template which come with tons of ready to use feature. We continuous working on it to provide latest updates in digital market.\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n                  <div class=\"services-icon\">\r\n                    <img class=\"icon-2\" src=\"assets/landing/logos/icon2.png\" height=\"60\" width=\"60\" alt=\"Service\" />\r\n                  </div>\r\n                  <div class=\"services-description\">\r\n                    <h1>Fast and Robust</h1>\r\n                    <p>\r\n                      We are contantly working on Gradient Able and improve its performance too. Your definitely give higher rating to Gradient Able for its performance.\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n                  <div class=\"services-icon\">\r\n                    <img class=\"icon-3\" src=\"assets/landing/logos/icon3.png\" height=\"60\" width=\"60\" alt=\"Service\" />\r\n                  </div>\r\n                  <div class=\"services-description\">\r\n                    <h1>FLAT UI-Interface</h1>\r\n                    <p>\r\n                      Gradient Able is first ever admin dashboard template which release in Bootstrap 4 framework. Intuitive feature rich design concept and color combination.\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex-features\" id=\"features\">\r\n      <div class=\"container\">\r\n        <div class=\"flex-split\">\r\n          <div class=\"f-left wow fadeInUp\" data-wow-delay=\"0s\">\r\n            <div class=\"left-content\">\r\n              <img class=\"img-fluid\" src=\"assets/landing/images/feature_1.png\" alt=\"\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"f-right wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n            <div class=\"right-content\">\r\n              <h2>High performance and flexible code</h2>\r\n              <p>\r\n                Gradient Able is full flexible solution for your entire project development. You can easily maintain all of its module/components.\r\n              </p>\r\n              <ul>\r\n                <li><i class=\"ion-android-checkbox-outline\"></i>Neat n clean code structure.</li>\r\n                <li><i class=\"ion-android-checkbox-outline\"></i>Flexible module structure</li>\r\n                <li><i class=\"ion-android-checkbox-outline\"></i>Copy / Paste and Ready to use</li>\r\n              </ul>\r\n              <button class=\"btn btn-primary btn-action btn-fill\">Learn More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"flex-split\">\r\n          <div class=\"f-right\">\r\n            <div class=\"right-content wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n              <h2>Included Software Dependencies</h2>\r\n              <p>\r\n                Bower - Grunt - Sass Dependencies for easy project flow management.\r\n              </p>\r\n              <ul>\r\n                <li><i class=\"ion-android-checkbox-outline\"></i>Grunt - No need to update plugins manually</li>\r\n                <li><i class=\"ion-android-checkbox-outline\"></i>Grunt - Less work you have to performance</li>\r\n                <li><i class=\"ion-android-checkbox-outline\"></i>Sass - Most Powerful CSS extension language</li>\r\n              </ul>\r\n              <button class=\"btn btn-primary btn-action btn-fill\">Learn More</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"f-left\">\r\n            <div class=\"left-content wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n              <img class=\"img-fluid\" src=\"assets/landing/images/feature_2.png\" alt=\"\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"testimonial-section\" id=\"reviews\">\r\n      <div class=\"container\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"testimonials\">\r\n              <ngx-carousel\r\n                [inputs]=\"carouselBanner\"\r\n                [moveToSlide]=\"1\"\r\n                (onMove)=\"onmoveFn($event)\"\r\n                (afterCarouselViewed)=\"afterCarouselViewedFn($event)\">\r\n\r\n                <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial2.jpg\" alt=\"Client Testimonial\" />\r\n                    <div class=\"testimonial-text wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                      <p>Totally flexible admin template. Easy to use and easy to manage all the elements in entire theme. <br class=\"hidden-xs\"> Great support team behind this product. Low turnaround time with exact support which i needed.\r\n                      </p>\r\n                      <h3>Code Quality</h3>\r\n                      <h3> - amit1134 [Buyer - NZ]</h3><br>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                    </div>\r\n                  </div>\r\n                </ngx-item>\r\n\r\n                <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial1.jpg\" alt=\"Client Testimonoal\" />\r\n                    <div class=\"testimonial-text\">\r\n                      <p>The main reason for the Rating for Gradient Able admin template is that its is awesome template with tons of ready to use features.<br class=\"hidden-xs\"> - Top quality - Regular updates - PHP version - Clean n Neat code\r\n                        - Saves lots of developing time\r\n                      </p>\r\n                      <h3>Flexibility</h3>\r\n                      <h3>- vishalmg [Buyer -India]</h3><br>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star-half-o text-warning\"></i>\r\n                    </div>\r\n                  </div>\r\n                </ngx-item>\r\n\r\n                <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial3.jpg\" alt=\"Client Testimonoal\" />\r\n                    <div class=\"testimonial-text\">\r\n                      <p>5 stars are for the excellent support, that is brilliant! The design is very cool and the quality of code is excellent. <br class=\"hidden-xs\">Compliments!</p>\r\n                      <h3>Code Quality</h3>\r\n                      <h3>- ab69aho [Buyer -Italy]</h3><br>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star-half-o text-warning\"></i>\r\n                    </div>\r\n                  </div>\r\n                </ngx-item>\r\n\r\n                <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial2.jpg\" alt=\"Client Testimonoal\" />\r\n                    <div class=\"testimonial-text\">\r\n                      <p>The product is high end and high-end specialized assistance in solving problems. <br class=\"hidden-xs\">I would highly recommend.</p>\r\n                      <h3>Customer Support</h3>\r\n                      <h3>- donpavulon [Buyer -US]</h3><br>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star text-warning\"></i>\r\n                      <i class=\"fa fa-star-half-o text-warning\"></i>\r\n                      <i class=\"fa fa-star-o text-warning\"></i>\r\n                    </div>\r\n                  </div>\r\n                </ngx-item>\r\n\r\n                <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n                <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n              </ngx-carousel>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"feature_huge text-center\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <img class=\"img-fluid wow fadeInUp\" data-wow-delay=\"0.1s\" src=\"assets/landing/images/big_feature.png\" alt=\"\" style=\"max-width:100%\" />\r\n          </div>\r\n          <div class=\"col-md-12 feature_list\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                <img src=\"assets/landing/logos/feature_icon.png\" alt=\"Feature\" />\r\n                <h1>Tursted Product</h1>\r\n                <p>\r\n                  We increasingly grow our talent and skills in admin dashboard development.\r\n                </p>\r\n              </div>\r\n              <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n                <img src=\"assets/landing/logos/feature_icon_2.png\" alt=\"Feature\" />\r\n                <h1>Online Documentation</h1>\r\n                <p>\r\n                  Documentation helps you in every steps on your entire project.\r\n                </p>\r\n              </div>\r\n              <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.6s\">\r\n                <img src=\"assets/landing/logos/feature_icon_3.png\" alt=\"Feature\" />\r\n                <h1>Free Updates & Support</h1>\r\n                <p>\r\n                  Fast and accurate outline during support. Low turnaround time.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"counter-section\">\r\n      <div class=\"container\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-6 col-md-3\">\r\n            <div class=\"counter-up\">\r\n              <div class=\"counter-icon\">\r\n                <i class=\"ion-android-download\"></i>\r\n              </div>\r\n              <h3><span class=\"counter\">250</span>+</h3>\r\n              <div class=\"counter-text\">\r\n                <h4>Pages</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 col-md-3\">\r\n            <div class=\"counter-up\">\r\n              <div class=\"counter-icon\">\r\n                <i class=\"ion-cube\"></i>\r\n              </div>\r\n              <h3><span class=\"counter\">1000</span>+</h3>\r\n              <div class=\"counter-text\">\r\n                <h4>UI Elements</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 col-md-3\">\r\n            <div class=\"counter-up\">\r\n              <div class=\"counter-icon\">\r\n                <i class=\"ion-ios-people\"></i>\r\n              </div>\r\n              <h3><span class=\"counter\">500</span>+</h3>\r\n              <div class=\"counter-text\">\r\n                <h4>Form Elements</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 col-md-3\">\r\n            <div class=\"counter-up\">\r\n              <div class=\"counter-icon\">\r\n                <i class=\"ion-ios-paper\"></i>\r\n              </div>\r\n              <h3><span class=\"counter\">80</span>+</h3>\r\n              <div class=\"counter-text\">\r\n                <h4>Widgets</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"features-section\">\r\n      <!-- Feature section with flex layout -->\r\n      <div class=\"f-left\">\r\n        <div class=\"left-content wow fadeInLeft\" data-wow-delay=\"0s\">\r\n          <h2 class=\"wow fadeInLeft\" data-wow-delay=\"0.1s\">We are available for custom work development</h2>\r\n          <p class=\"wow fadeInLeft\" data-wow-delay=\"0.2s\">\r\n            We at Gradient Able available for custom work development with High end specialized developer.\r\n          </p>\r\n          <button class=\"btn btn-primary btn-action btn-fill wow fadeInLeft\" data-wow-delay=\"0.2s\">Click to send query</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"f-right\">\r\n      </div>\r\n    </div>\r\n    <div class=\"pricing-section no-color text-center\" id=\"pricing\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 \">\r\n            <div class=\"pricing-intro\">\r\n              <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Pricing Table</h1>\r\n              <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                Loream ipsum dummy text loream ipsum dummy text loream ipsum dummy text <br class=\"hidden-xs\"> loream ipsum dummy text. Get the right plan that suits you.\r\n              </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"table-left wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n                  <div class=\"icon\">\r\n                    <img src=\"assets/landing/logos/cart2.png\" alt=\"Icon\" />\r\n                  </div>\r\n                  <div class=\"pricing-details\">\r\n                    <h2>Beginner Plan</h2>\r\n                    <span>$5.90</span>\r\n                    <p>\r\n                      Pay little enjoy the product <br class=\"hidden-xs\"> for life time.\r\n                    </p>\r\n                    <ul>\r\n                      <li>First basic feature </li>\r\n                      <li>Second feature goes here</li>\r\n                      <li>Any other third feature</li>\r\n                      <li>And the last one goes here</li>\r\n                    </ul>\r\n                    <button class=\"btn btn-primary btn-action btn-fill\">Get Plan</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 \">\r\n                <div class=\"table-right wow fadeInUp\" data-wow-delay=\"0.6s\">\r\n                  <div class=\"icon\">\r\n                    <img src=\"assets/landing/logos/cart1.png\" alt=\"Icon\" />\r\n                  </div>\r\n                  <div class=\"pricing-details\">\r\n                    <h2>Premium Plan</h2>\r\n                    <span>$19.99</span>\r\n                    <p>\r\n                      Pay only for what you use. Flexible <br class=\"hidden-xs\"> payment options.\r\n                    </p>\r\n                    <ul>\r\n                      <li>First premium feature </li>\r\n                      <li>Second premium one goes here</li>\r\n                      <li>Third premium feature here</li>\r\n                      <li>Final premium feature</li>\r\n                    </ul>\r\n                    <button class=\"btn btn-primary btn-action btn-fill\">Buy Now</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"client-section\">\r\n      <div class=\"container text-center\">\r\n        <div class=\"clients\">\r\n          <ngx-carousel\r\n            [inputs]=\"carouselClients\"\r\n            [moveToSlide]=\"1\"\r\n            (onMove)=\"onmoveFn($event)\"\r\n            (afterCarouselViewed)=\"afterCarouselViewedFn($event)\">\r\n\r\n            <ngx-tile NgxCarouselItem class=\"bannerStyle\">\r\n              <div class=\"single\">\r\n                <img src=\"assets/landing/logos/logo1.png\" alt=\"\"  class=\"img-fluid\"/>\r\n              </div>\r\n            </ngx-tile>\r\n\r\n            <ngx-tile NgxCarouselItem class=\"bannerStyle\">\r\n              <div class=\"single\">\r\n                <img src=\"assets/landing/logos/logo2.png\" alt=\"\" class=\"img-fluid\"/>\r\n              </div>\r\n            </ngx-tile>\r\n\r\n            <ngx-tile NgxCarouselItem class=\"bannerStyle\">\r\n              <div class=\"single\">\r\n                <img src=\"assets/landing/logos/logo3.png\" alt=\"\" class=\"img-fluid\"/>\r\n              </div>\r\n            </ngx-tile>\r\n\r\n            <ngx-tile NgxCarouselItem class=\"bannerStyle\">\r\n              <div class=\"single\">\r\n                <img src=\"assets/landing/logos/logo4.png\" alt=\"\" class=\"img-fluid\"/>\r\n              </div>\r\n            </ngx-tile>\r\n\r\n            <ngx-tile NgxCarouselItem class=\"bannerStyle\">\r\n              <div class=\"single\">\r\n                <img src=\"assets/landing/logos/logo6.png\" alt=\"\" class=\"img-fluid\"/>\r\n              </div>\r\n            </ngx-tile>\r\n\r\n            <ngx-tile NgxCarouselItem class=\"bannerStyle\">\r\n              <div class=\"single\">\r\n                <img src=\"assets/landing/logos/logo7.png\" alt=\"\" class=\"img-fluid\"/>\r\n              </div>\r\n            </ngx-tile>\r\n\r\n            <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n            <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n          </ngx-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"cta-sub text-center no-color\">\r\n      <div class=\"container\">\r\n        <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">New product notification subscription</h1>\r\n        <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n          We sent you daily mail about product updates / releases / version change logs<br class=\"hidden-xs\">Please write accurate email address below.\r\n        </p>\r\n        <div class=\"form wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n          <form class=\"subscribe-form wow zoomIn\" action=\"javascript:\" method=\"post\" accept-charset=\"UTF-8\" enctype=\"application/x-www-form-urlencoded\" autocomplete=\"off\" novalidate>\r\n            <input class=\"mail\" type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\"><input class=\"submit-button\" type=\"submit\" value=\"Subscribe\">\r\n          </form>\r\n          <div class=\"success-message\"></div>\r\n          <div class=\"error-message\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer landing-footer\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <img src=\"assets/landing/logos/logo.png\" alt=\"Gradient Able Logo\" />\r\n          <ul class=\"footer-menu\">\r\n            <li><a href=\"http://demo.com\">Site</a></li>\r\n            <li><a href=\"javascript:\">Support</a></li>\r\n            <li><a href=\"javascript:\">Terms</a></li>\r\n            <li><a href=\"javascript:\">Privacy</a></li>\r\n          </ul>\r\n          <div class=\"footer-text\">\r\n            <p>\r\n              Copyright © 2018 Gradient Able. All Rights Reserved.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/landing/landing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/theme/landing/landing.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/theme/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.openMe = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: false
            },
            load: 2,
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
        this.carouselClients = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: false
            },
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
    };
    LandingComponent.prototype.afterCarouselViewedFn = function (data) {
        // console.log(data);
    };
    LandingComponent.prototype.onmoveFn = function (data) {
        // console.log(data);
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/theme/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/theme/landing/landing.component.scss"), __webpack_require__(/*! ../../../assets/landing/css/style.scss */ "./src/assets/landing/css/style.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/theme/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/theme/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component */ "./src/app/theme/landing/landing.component.ts");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/theme/landing/landing-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"].forRoot(),
                ngx_carousel__WEBPACK_IMPORTED_MODULE_5__["NgxCarouselModule"]
            ],
            declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/assets/landing/css/style.scss":
/*!*******************************************!*\
  !*** ./src/assets/landing/css/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------\r\nAll Contents\r\n--------------*/\n/*-----------------\r\n1. Reset.css\r\n2. Helper Classes\r\n3. Main and Hero Section Stylings\r\n4. Services Styling\r\n5. Features Split\r\n6. Feature with BG\r\n7. Feature Big\r\n8. Testimonial Stling\r\n9. Pricing Section\r\n10. Call To Action Subscribe\r\n11. Download Section\r\n12. Back to top\r\n------------------*/\n/*----- 1. Reset.css -----*/\n/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-weight: 400; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* --- Common Styles ---*/\nh1 {\n  font-size: 16px; }\n/*----- Helper Classes -----*/\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n  position: fixed;\n  display: block;\n  width: 100%;\n  left: 0; }\n.navbar .dropdown-menu {\n  border-top: 3px solid #999; }\n.navbar .dropdown-menu a {\n    padding: 0.55rem 1.5rem;\n    font-size: .9rem; }\n.navbar .dropdown-menu a:hover {\n      background-color: #f1f1f1; }\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: .8rem;\n    padding-left: .8rem; } }\n@media screen and (max-width: 992px) {\n  .navbar .dropdown-menu a {\n    text-align: center; }\n  .navbar-default .navbar-collapse {\n    text-align: center;\n    background: #FFFFFF !important; }\n  .navbar .dropdown-menu {\n    border: none;\n    width: 80%;\n    margin: 10px auto; }\n    .navbar .dropdown-menu a {\n      border-bottom: 1px solid #f3f3f3; }\n      .navbar .dropdown-menu a:last-child {\n        border-bottom: none; }\n  .navbar-light .navbar-nav .nav-item {\n    border-bottom: 1px solid #f3f3f3;\n    padding: 15px 0; }\n    .navbar-light .navbar-nav .nav-item > a {\n      margin-top: 0;\n      padding: 0; }\n    .navbar-light .navbar-nav .nav-item:last-child {\n      border-bottom: none; }\n    .navbar-light .navbar-nav .nav-item.dropdown.show {\n      padding-bottom: 0; }\n  /* dropdown-menu */ }\n@media screen and (min-width: 992px) {\n  .dropdown:hover .dropdown-menu, .btn-group:hover .dropdown-menu {\n    display: block; }\n  .navbar .dropdown-menu:after {\n    content: \"\";\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: 6px solid transparent;\n    border-left-color: #999;\n    border-top-color: #999;\n    position: absolute;\n    top: -7px;\n    left: 25px; } }\nhtml * {\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.img-circle {\n  border-radius: 50%; }\n* {\n  box-sizing: border-box; }\n*:after, *:before {\n    box-sizing: border-box; }\n/*\r\n::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n*/\n::-moz-selection, ::-moz-selection {\n  color: #fff;\n  background: #0073AA; }\n::-moz-selection, ::selection {\n  color: #fff;\n  background: #0073AA; }\n.nopadding {\n  padding: 0; }\n.custom-padding {\n  padding-left: 10px;\n  padding-right: 10px; }\n.no-margin {\n  margin-right: 0;\n  margin-left: 0; }\n.sup-title {\n  display: inline-block;\n  font-size: 1em;\n  padding: 4px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #FFFFFF;\n  background: #000000;\n  margin: 0 0 20px 0; }\n.spacer {\n  width: 100%;\n  height: 50px; }\n#loading {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  opacity: 1;\n  background-color: #F2F2F2;\n  z-index: 9999;\n  text-align: center; }\n#loading-image {\n  display: inline;\n  top: 40%;\n  position: relative;\n  z-index: 9999; }\n.spacer {\n  width: 100%;\n  height: 50px; }\n.spacer-big {\n  width: 100%;\n  height: 100px; }\n.error-message {\n  color: #FF3333;\n  margin-top: 5px; }\n.success-message {\n  color: #33cc33;\n  margin-top: 5px; }\n.btn-fill {\n  background: #FFFFFF;\n  color: #0073AA;\n  border: 2px solid #0073AA;\n  transition: 200ms; }\n.btn-fill:hover, .btn-fill:focus {\n    color: #0073AA;\n    background: transparent;\n    border: 2px solid #0073AA; }\n/* ------ Navbar Styling Starts ----- */\n.navbar {\n  font-size: 14px;\n  font-weight: 500;\n  padding-top: 25px;\n  letter-spacing: 1px;\n  height: 80px;\n  z-index: 99; }\n.navbar-default {\n  transition: all 0.6s ease;\n  border-color: transparent;\n  background-color: transparent; }\n.navbar-default .navbar-toggle {\n    border-radius: 0px;\n    border-color: transparent; }\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: transparent; }\n.navbar-default .navbar-toggle .icon-bar {\n      background-color: #111111; }\n.navbar-default .navbar-brand {\n    padding: 0 0;\n    transition: 200ms; }\n.navbar-default .navbar-brand .navbar-toggle .collapsed {\n      padding: 4px 6px;\n      font-size: 16px;\n      color: #111111; }\n.navbar-default .navbar-brand:hover {\n      transition: 1s; }\n.navbar-default .navbar-nav > li > a {\n    /*color: #666666;*/\n    font-weight: 700;\n    transition: all 0.5s; }\n.navbar-default .navbar-nav > li > a:hover {\n      /*color: #000000;*/ }\n.navbar-default .navbar-nav > .active > a {\n    background: transparent;\n    color: #FFFFFF; }\n.navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n      background: transparent;\n      color: #FFFFFF; }\n.navbar-default .navbar-collapse {\n    border-color: transparent;\n    background-color: transparent; }\n.navbar-default .navbar-nav .open .dropdown-toggle {\n    color: #111111; }\n.navbar-default .nav-white > li > a {\n    color: #FFFFFF; }\n.navbar-default .nav-white > li > a:hover {\n      color: #999999; }\n/*---------- Media Queries ---------*/\n@media only screen and (max-width: 767px) {\n  .navbar {\n    padding-top: 5px;\n    height: 60px; }\n  .navbar-default {\n    border: 0px;\n    background-color: transparent; }\n    .navbar-default .navbar-collapse {\n      text-align: center;\n      border-color: transparent;\n      background-color: #FFFFFF;\n      border: 0;\n      border-color: transparent; }\n    .navbar-default .navbar-nav > li > a {\n      color: #222222;\n      margin-top: 10px; }\n      .navbar-default .navbar-nav > li > a:hover {\n        color: #222222; }\n    .navbar-default .navbar-brand {\n      color: #FFFFFF;\n      padding: 8px 8px !important; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #111111; } }\n@media only screen and (min-width: 240px) {\n  .navbar.past-main {\n    transition: all 0.6s ease;\n    height: 50px;\n    background-color: rgba(255, 255, 255, 0.99); }\n  .navbar.effect-main:active {\n    /* For Safari 3.1 to 6.0 */\n    transition: height 0.6s;\n    height: 60px; }\n  .navbar.past-main {\n    font-size: 14px;\n    padding-top: 5px;\n    height: 60px;\n    box-shadow: 0 1px 5px 0 rgba(96, 96, 96, 0.3);\n    /* For Safari 3.1 to 6.0 */\n    transition: height 0.6s; }\n  .navbar-default.past-main .navbar-brand {\n    padding: 8px 0; }\n  .navbar-default.past-main .navbar-toggle .icon-bar {\n    background-color: #111111; }\n  .navbar-default.past-main .navbar-nav > li > a {\n    color: #2c394a;\n    transition: color 0.5s; }\n    .navbar-default.past-main .navbar-nav > li > a:hover {\n      color: #111111; }\n  .navbar-default.past-main .navbar-nav > .active > a {\n    background: transparent;\n    color: #0073AA; }\n    .navbar-default.past-main .navbar-nav > .active > a:hover, .navbar-default.past-main .navbar-nav > .active > a:focus {\n      background: transparent;\n      color: #222222; } }\n/* ------ Navbar Styling Ends ----- */\n#main {\n  height: 100%; }\n/* ----- Hero Section Styling Starts ----- */\n.hero-section {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url('hero3.jpg');\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  background-position: 50% 60%; }\n.jarallax {\n  position: relative;\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n.hero-content {\n  width: 100%;\n  padding: 200px 0 100px 0;\n  overflow: hidden; }\n.hero-content h1 {\n    font-size: 34px;\n    color: #111111;\n    font-weight: 600;\n    line-height: 1.3;\n    letter-spacing: -1px;\n    margin-bottom: 20px; }\n.hero-content p {\n    font-size: 14px;\n    color: #111111;\n    line-height: 1.6;\n    letter-spacing: 1px;\n    margin-bottom: 30px; }\n.btn-action {\n  background-color: #0073AA;\n  border: 2px solid #0073AA;\n  border-radius: 0;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: 400;\n  height: 38px;\n  letter-spacing: 2px;\n  line-height: 3;\n  padding: 0 21px;\n  text-transform: uppercase;\n  outline: none;\n  transition: 200ms; }\n.hero-content .btn-action:hover, .hero-content .btn-action:focus {\n  background: transparent;\n  outline: none;\n  color: #0073AA;\n  border-color: #0073AA; }\n.hero-content .btn-action:active {\n  background: transparent;\n  outline: none;\n  color: #0073AA;\n  border-color: #0073AA; }\n.hero-content .btn-action:active:focus {\n    background: transparent;\n    outline: none;\n    color: #0073AA;\n    border-color: #0073AA; }\n.btn-action:hover, .btn-action:focus {\n  background: transparent;\n  outline: none;\n  color: #0073AA;\n  border-color: #0073AA; }\n.btn-action:active {\n  background: transparent;\n  outline: none;\n  color: #0073AA;\n  border-color: #0073AA; }\n.btn-action:active:focus {\n    background: transparent;\n    outline: none;\n    color: #0073AA;\n    border-color: #0073AA; }\n.txt-white h1, .txt-white p {\n  color: #FFFFFF; }\n.app-hero {\n  background: #F3F3F3; }\n.app-hero-content {\n  overflow: hidden;\n  padding: 150px 0 0 0; }\n.app-hero-content h1, .app-hero-content p {\n    color: #111111; }\n.app-hero-content img {\n    margin-top: 50px; }\n.app-sub {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 200, 0.1)), url('feature_bg.jpg') no-repeat center center;\n  background-size: cover; }\n.app-sub-inner {\n  width: 100%;\n  height: 100%;\n  padding: 100px 0 100px 0;\n  overflow: hidden; }\n.app-sub-content {\n  padding: 100px 0 0 0; }\n.app-sub-content h1 {\n    font-size: 42px;\n    font-weight: 700;\n    color: #111111;\n    line-height: 1.2;\n    margin-bottom: 30px; }\n.app-sub-content p {\n    font-size: 16px;\n    font-weight: 100;\n    color: #111;\n    line-height: 1.4;\n    margin-bottom: 30px; }\n.app-sub-content .subscribe-form {\n    text-align: left; }\n/* ----- Hero Section Styling Ends ----- */\n/* ----- About Section Styling Starts ----- */\n.services-section {\n  background: #FFFFFF; }\n.services-content {\n  padding-top: 100px;\n  padding-bottom: 75px; }\n.services-content h1 {\n    font-size: 24px;\n    color: #111111;\n    font-weight: 600;\n    letter-spacing: 0;\n    line-height: 1.4;\n    margin-bottom: 10px; }\n.services-content p {\n    font-size: 14px;\n    color: #666666;\n    font-weight: 400;\n    letter-spacing: 1px;\n    line-height: 1.4;\n    margin-top: 0px; }\n.services {\n  overflow: hidden;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n.services .services-icon {\n    position: relative;\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    border: 2px solid;\n    border-color: transparent;\n    background: #F6F6F6;\n    margin: 0 auto;\n    transition: 0.5s; }\n.services .services-icon img {\n      position: absolute;\n      top: 10%;\n      left: 11%;\n      font-size: 42px; }\n.services .services-description {\n    margin-bottom: 50px; }\n.services .services-description h1 {\n      font-size: 18px;\n      color: #111111;\n      font-weight: 600;\n      letter-spacing: 0;\n      line-height: 1.4;\n      margin-top: 20px;\n      margin-bottom: 20px; }\n.services .services-description p {\n      font-size: 14px;\n      color: #666666;\n      letter-spacing: 1px;\n      line-height: 1.5;\n      margin-top: 0; }\n.services .col-sm-4:hover .services-icon {\n    border-color: #0073AA; }\n/* ----- Service Section Styling Ends ----- */\n/* -----------------------------------------------\r\n----------- Flex Features Styling Starts ---------\r\n-------------------------------------------------*/\n.flex-features {\n  background: #F3F3F3;\n  padding-top: 0;\n  padding-bottom: 50px; }\n.flex-split {\n  padding-top: 50px;\n  padding-bottom: 0;\n  background: #F3F3F3;\n  display: flex;\n  flex-direction: column; }\n.flex-split .f-left {\n    flex: 1 0 50%;\n    background: #F3F3F3;\n    padding: 10px; }\n.flex-split .f-left img {\n      margin-top: 30px;\n      margin: 0 auto; }\n.flex-split .f-right {\n    flex: 1 0 50%;\n    background: #F3F3F3;\n    padding: 30px 20px 20px 20px; }\n.flex-split .f-right h2 {\n      font-size: 28px;\n      color: #111111;\n      font-weight: 600;\n      line-height: 1.6; }\n.flex-split .f-right p {\n      font-size: 14px;\n      color: #111111;\n      line-height: 1.6;\n      letter-spacing: 1px;\n      margin: 20px 0 20px 0; }\n.flex-split .f-right ul {\n      margin-bottom: 20px; }\n.flex-split .f-right ul i {\n        margin-right: 10px; }\n.flex-split .f-right li {\n      font-size: 14px;\n      color: #111111;\n      line-height: 2; }\n/* -----------------------------------------------\r\n----------- Flex Features Styling Ends -----------\r\n-------------------------------------------------*/\n/* ----- Features Section Styling Starts ----- */\n.features-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n.features-section .f-left {\n    flex: 1 0 50%;\n    background: #F3F3F3; }\n.features-section .f-right {\n    flex: 1 0 50%;\n    background: url('iphone_hand_1.jpg');\n    background-position: 50% 50%;\n    background-size: cover; }\n.features-section .f-right img {\n      margin-top: 0; }\n.features-section .f-left {\n    padding: 30px; }\n.features-section .f-left h2 {\n      font-size: 28px;\n      color: #111111;\n      font-weight: 600;\n      line-height: 1.3;\n      margin-top: 40px; }\n.features-section .f-left p {\n      font-size: 14px;\n      color: #111111;\n      line-height: 1.3;\n      letter-spacing: 1px;\n      margin-top: 20px;\n      margin-bottom: 30px; }\n.features-section .btn-action {\n    margin-bottom: 20px; }\n/*----- Features Section Styling Ends ----- */\n/* ----- Features Section 2 Styling ----- */\n.features-section-2 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0)), url('feature_bg.jpg') no-repeat center center;\n  background-size: cover; }\n.features-section-2 .features-content {\n    padding: 0; }\n.features-section-2 .features-content h2 {\n      font-size: 21px;\n      color: #111111;\n      font-weight: 600;\n      line-height: 1.3;\n      letter-spacing: 0;\n      margin-top: 20px; }\n.features-section-2 .features-content h4 {\n      font-size: 18px;\n      color: #111111;\n      line-height: 1.3;\n      letter-spacing: 1px;\n      margin-top: 10px;\n      margin-bottom: 50px; }\n.features-section-2 .features-content p {\n      font-size: 14px;\n      color: #111111;\n      line-height: 1.3;\n      letter-spacing: 1px;\n      margin-top: 10px;\n      margin-bottom: 20px; }\n/* ----- Features Section 2 Styling ----- */\n/* ----- Features Section Styling Ends ----- */\n/* ----- Counter Section Styling Starts -----*/\n.counter-section {\n  width: 100%;\n  padding-top: 100px;\n  padding-bottom: 50px;\n  background: #FFFFFF; }\n.counter-section h3 {\n    font-size: 28px;\n    font-weight: 400;\n    color: #303030; }\n.counter-icon {\n  padding: 15px; }\n.counter-icon i {\n    font-size: 42px;\n    color: #ff642e; }\n.counter-text {\n  margin-top: 10px;\n  margin-bottom: 20px; }\n.counter-text h4 {\n    font-size: 16px;\n    font-weight: 400;\n    padding: 0.5em;\n    color: #111111; }\n/* -------- Counter Section Styling Ends --------- */\n/*------ Feature Big Section Styling Starts ------ */\n.feature_huge {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #F3F3F3; }\n.feature_huge img {\n    margin: 0 auto;\n    margin-bottom: 50px; }\n.feature_huge .feature_list {\n    margin: 0 auto;\n    margin-top: 30px; }\n.feature_huge .feature_list img {\n      width: 60px;\n      height: 60px;\n      margin-bottom: 10px; }\n.feature_huge .feature_list h1 {\n      font-size: 18px;\n      font-weight: 600;\n      padding: 0.5em;\n      color: #111111; }\n.feature_huge .feature_list p {\n      font-size: 12px;\n      font-weight: 400;\n      padding: 0.5em;\n      color: #606060;\n      letter-spacing: 1px;\n      line-height: 1.3;\n      margin-bottom: 20px; }\n/*------ Feature Big Section Styling Ends ------ */\n/* -------- Testimonials Section Starts --------- */\n.testimonial-section {\n  background: #FFFFFF;\n  padding-top: 50px; }\n.testimonial-section h1 {\n    font-size: 34px;\n    font-weight: 500;\n    color: #111111;\n    margin-top: 3em; }\n.testimonial-section .sub {\n    font-size: 16px;\n    color: #111111;\n    line-height: 1.5;\n    margin-top: 30px;\n    letter-spacing: 1px; }\n.testimonials {\n  margin-top: 4em;\n  width: 100%;\n  margin-bottom: 4em; }\n.testimonials-2 {\n  margin-bottom: 5em; }\n.testimonial-single img {\n  width: 80px;\n  height: 80px; }\n.testimonial-text h3 {\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 1.5;\n  color: #000000; }\n.testimonial-text .ion {\n  display: inline-block;\n  margin-top: 20px;\n  font-size: 14px;\n  color: #ff8000; }\n.testimonial-text p {\n  font-size: 14px;\n  padding: 20px 10px 20px 10px;\n  letter-spacing: 1px;\n  line-height: 1.5;\n  color: #111111; }\n/* -------- Testimonials Section -------- */\n/* ------ Download Section Styling------------ */\n.download {\n  width: 100%;\n  height: 100%;\n  background: #F3F3F3; }\n.app-img {\n  display: inline-block;\n  margin-top: 5em; }\n.app-info h3 {\n  font-size: 34px;\n  font-weight: 500;\n  color: #404040;\n  margin-top: 20px; }\n.app-info h4 {\n  font-size: 18px;\n  color: #3C4B5D;\n  margin-top: 20px; }\n.app-info ul {\n  margin-top: 20px; }\n.app-info span {\n  font-size: 12px;\n  font-weight: 400;\n  color: #222222; }\n.app-info .ion {\n  font-size: 1em;\n  color: #ff8000; }\n.download-buttons {\n  margin-top: 3em;\n  margin-bottom: 5em; }\n.download-buttons img {\n    height: 50px;\n    width: 160px; }\n/*------ Download Section Styling Ends ------ */\n/* ----- Pricing Section Styling Starts ----- */\n.pricing-section {\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #F3F3F3; }\n.pricing-intro {\n  padding-bottom: 30px; }\n.pricing-intro h1 {\n    font-size: 28px;\n    color: #111111;\n    font-weight: 600;\n    line-height: 1.4; }\n.pricing-intro p {\n    font-size: 15px;\n    color: #303030;\n    line-height: 1.4;\n    letter-spacing: 1px;\n    margin-top: 10px;\n    margin-bottom: 50px; }\n.pricing-section .table-left, .pricing-section .table-right {\n  padding: 20px 20px 50px 20px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #EFEFEF;\n  max-width: 400px; }\n.table-left .icon, .table-right .icon {\n  padding: 50px 50px 40px 50px; }\n.table-left .icon img, .table-right .icon img {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto; }\n.table-left .pricing-details span, .table-right .pricing-details span {\n  display: inline-block;\n  font-size: 34px;\n  font-weight: 600;\n  color: #808080;\n  margin-bottom: 20px; }\n.table-left .pricing-details h2, .table-right .pricing-details h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #505050;\n  margin-bottom: 20px; }\n.table-left .pricing-details p, .table-right .pricing-details p {\n  font-size: 14px;\n  color: #505050;\n  letter-spacing: 1px;\n  line-height: 1.4; }\n.table-left .pricing-details ul, .table-right .pricing-details ul {\n  margin-top: 30px;\n  margin-bottom: 50px; }\n.table-left .pricing-details li, .table-right .pricing-details li {\n  font-size: 14px;\n  font-weight: 400;\n  color: #505050;\n  line-height: 1.4;\n  margin-bottom: 10px; }\n.pricing-section .table-left:hover, .pricing-section .table-right:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }\n/* ----- Pricing Section Styling Ends ----- */\n/* ----- CTA Section Styling Starts ----- */\n.cta-sub {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #F3F3F3; }\n.cta-sub h1 {\n    font-size: 28px;\n    color: #111111;\n    font-weight: 600;\n    line-height: 1.3;\n    margin-top: 10px;\n    margin-bottom: 0; }\n.cta-sub p {\n    font-size: 16px;\n    color: #303030;\n    line-height: 1.5;\n    margin-top: 20px;\n    margin-bottom: 40px; }\n.subscribe-form {\n  text-align: center; }\n.subscribe-form .mail {\n    background-color: #F9F9F9;\n    border: none;\n    border-radius: 5px 0 0 5px;\n    outline: none;\n    height: 40px;\n    padding: 0 150px 0 20px;\n    box-shadow: none;\n    box-sizing: content-box;\n    transition: all .3s; }\n.subscribe-form input {\n    color: #222222;\n    padding: 0;\n    font-size: 0.9em; }\n.subscribe-form .submit-button {\n    font-size: 0.9em;\n    height: 40px;\n    border: 2px solid;\n    border-radius: 0 5px 5px 0;\n    margin: 0;\n    padding: 0 25px 0 25px;\n    border-color: #0073AA;\n    background-color: #0073AA;\n    color: #FFFFFF;\n    box-shadow: 0 0 1px transparent;\n    outline: none; }\n.subscribe-form .submit-button:hover {\n      box-shadow: 0 0 10px #FFFFFF;\n      transition: 500ms; }\n/* ----- CTA Section Styling Ends ----- */\n/* ----- Client Sectiion Styling ----- */\n.client-section {\n  background-color: #F3F3F3; }\n.clients ul li {\n  display: inline; }\n.clients .single img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%); }\n/* ------- Footer Section Styling Starts ------- */\n.footer {\n  background-color: #F3F3F3;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n.footer img {\n    margin-bottom: 20px; }\n.footer-menu ul {\n  list-style-type: none; }\n.footer-menu li {\n  display: inline;\n  line-height: 2;\n  font-size: 14px;\n  padding-right: 15px;\n  text-transform: uppercase; }\n.footer-menu li a {\n    color: #707570;\n    text-decoration: none; }\n.footer-text p {\n  font-size: 14px;\n  color: #707570;\n  line-height: 2;\n  letter-spacing: 1px;\n  margin-top: 10px; }\n/* ------- Footer Section Styling Starts ------- */\n.no-color {\n  background: #FFFFFF; }\n/*---------------------------------------------------\r\n----------- Contact Page Styling Starts -------------\r\n---------------------------------------------------*/\n.contact-section {\n  width: 100%;\n  height: 100%;\n  padding: 150px 0 50px 0;\n  background: #FFF; }\n.contact-section h1 {\n    font-size: 28px;\n    font-weight: 600;\n    color: #111111;\n    line-height: 1.3;\n    margin-bottom: 20px; }\n.contact-section p {\n    font-size: 14px;\n    color: #111111;\n    line-height: 1.4; }\n/* ------------ Contact Form Styling --------*/\n.contact-form {\n  padding-top: 50px; }\nlabel {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n  text-align: left; }\n.form-control {\n  border: 0px;\n  border-radius: 0px;\n  margin-top: 10px;\n  background: transparent;\n  margin-bottom: 40px;\n  border-bottom: 1px solid #999999;\n  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0);\n  transition: 0.5s; }\n.form-control:focus {\n    border-color: #0073AA;\n    box-shadow: none; }\n.form-control::-webkit-input-placeholder, .form-control:-moz-placeholder, .form-control::-moz-placeholder {\n    font-size: 13px;\n    color: #999999; }\n.form-control:-ms-input-placeholder {\n    font-family: Quicksand;\n    font-size: 13px;\n    color: #999999; }\n.text-muted {\n  font-size: 13px;\n  color: #222; }\n.text-muted strong {\n    color: #FF3333; }\n.btn-send {\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  color: #FFFFFF;\n  background: #0073AA;\n  border-color: #0073AA;\n  transition: 0.5s; }\n.btn-send:hover, .btn-send:focus {\n    color: #FFFFFF;\n    background: #000000;\n    border-color: #111111;\n    outline: none !important; }\n/* -------- Contact Section Styling Ends ---- */\n/* -------------------------------------------------------\r\n----------- Bact-to-Top Styling Starts Here --------------\r\n---------------------------------------------------------*/\n.back-to-top {\n  background: rgba(46, 216, 182, 0.5);\n  margin: 0;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  z-index: 90;\n  display: none;\n  text-decoration: none;\n  color: #0E1729; }\n.back-to-top i {\n    position: relative;\n    left: 13px;\n    top: 8px;\n    font-size: 24px;\n    color: #FFFFFF;\n    transition: 200ms; }\n.back-to-top:hover {\n    background: rgba(46, 216, 182, 0.9);\n    color: #FFFFFF; }\n.back-to-top:hover i {\n      top: 6px; }\n.back-to-top:focus {\n    color: #FFFFFF; }\n/*---------------------------------------------------\r\n----------- Contact Page Styling Ends -------------\r\n---------------------------------------------------*/\n/*----------------------------------------------------\r\n------------- All ------------------------------------\r\n--------------------- Media --------------------------\r\n------------------------------- Queries --------------\r\n-----------------------------------------------------*/\n@media only screen and (min-width: 767px) {\n  #left, #right {\n    width: 25px; }\n  #top, #bottom {\n    height: 25px; }\n  .custom-padding {\n    padding-left: 80px;\n    padding-right: 80px; }\n  .hero-content {\n    width: 100%;\n    padding: 260px 0 120px 0; }\n    .hero-content h1 {\n      font-size: 64px;\n      font-weight: 600;\n      line-height: 1.2;\n      margin-top: 0;\n      letter-spacing: -2px;\n      margin-bottom: 25px; }\n    .hero-content p {\n      font-size: 14px; }\n  .btn-action {\n    border: 2px solid #0073AA;\n    font-weight: 500;\n    height: 42px;\n    padding: 0 24px; }\n    .btn-action a {\n      color: #fff; }\n      .btn-action a:hover {\n        color: #0073AA; }\n  .btn-fill {\n    border: 2px solid #0073AA;\n    height: 38px; }\n  .app-hero-content {\n    padding: 150px 0 0 0; }\n    .app-hero-content h1 {\n      font-size: 42px;\n      font-weight: 600;\n      line-height: 1.2;\n      letter-spacing: -1px;\n      margin-top: 25px; }\n    .app-hero-content p {\n      font-size: 16px; }\n  .app-sub-inner {\n    padding: 180px 0 100px 0; }\n  .app-sub-content h1 {\n    font-size: 64px;\n    font-weight: 700;\n    margin-bottom: 30px; }\n  .app-sub-content p {\n    font-size: 16px;\n    line-height: 1.4;\n    margin-bottom: 30px; }\n  .cta-small .cta-content span {\n    position: absolute;\n    left: -30px; }\n  .cta-small .cta-content h2 {\n    font-size: 14px; }\n  .services-content h1 {\n    font-size: 28px;\n    line-height: 1.4; }\n  .services-content p {\n    font-size: 14px; }\n  .services .services-description {\n    margin-bottom: 75px; }\n  .flex-features {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n  .flex-split {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n    .flex-split .f-right {\n      padding: 50px 20px 20px 20px; }\n  .features-section {\n    flex-direction: row; }\n    .features-section .f-left {\n      padding: 60px; }\n      .features-section .f-left h2 {\n        font-size: 34px; }\n    .features-section .f-right {\n      flex: 1 0 50%; }\n  .features-section-2 {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n    .features-section-2 .features-content {\n      padding: 50px; }\n      .features-section-2 .features-content h2 {\n        font-size: 34px;\n        margin-top: 20px; }\n      .features-section-2 .features-content h4 {\n        font-size: 21px; }\n      .features-section-2 .features-content p {\n        font-size: 15px; }\n  .counter-up {\n    margin-bottom: 2em; }\n  .counter-text {\n    margin-bottom: 0; }\n  .counter-section h3 {\n    font-size: 34px; }\n  .counter-text h4 {\n    font-size: 18px; }\n  .feature_huge .feature_list img {\n    width: 65px;\n    height: 65px; }\n  .feature_huge .feature_list h1 {\n    font-size: 18px;\n    font-weight: 600;\n    padding: 0.5em;\n    color: #232323; }\n  .feature_huge .feature_list p {\n    font-size: 14px; }\n  .testimonial-section h1 {\n    font-size: 2em; }\n  .pricing-section .table-left, .pricing-section .table-right {\n    margin: 0 auto; }\n  .contact-section {\n    padding: 200px 0 100px 0; }\n    .contact-section h1 {\n      font-size: 42px; }\n    .contact-section p {\n      font-size: 16px; }\n  .contact-form {\n    padding-top: 100px; } }\n@media screen and (min-width: 400px) and (max-width: 600px) {\n  .subscribe-form .mail {\n    padding: 0 30px 0 20px;\n    border-radius: 5px 0 0 5px; }\n  .subscribe-form .submit-button {\n    padding: 0 5px 0 5px;\n    border-radius: 0 5px 5px 0; } }\n@media screen and (max-width: 399px) {\n  .subscribe-form .mail {\n    text-align: center;\n    padding: 0 0 0 0;\n    border-radius: 5px 0 0 5px; }\n  .subscribe-form .submit-button {\n    padding: 0 5px 0 5px;\n    border-radius: 0 5px 5px 0;\n    margin-top: 15px; }\n  .app-info {\n    margin-bottom: 0em; }\n  .download-buttons img {\n    height: 40px;\n    width: 120px; }\n  .back-to-top {\n    right: 10px; } }\n@media only screen and (min-width: 992px) {\n  .pricing-section .table-left, .pricing-section .table-right {\n    padding: 50px; } }\n@media only screen and (min-width: 767px) and (max-width: 992px) {\n  .app-sub-content h1 {\n    font-size: 34px;\n    margin-bottom: 30px; }\n  .app-sub-content p {\n    font-size: 16px;\n    line-height: 1.4;\n    margin-bottom: 30px; }\n  .pricing-section .table-left {\n    margin-right: 10px; }\n  .pricing-section .table-right {\n    margin-left: 10px; } }\n/* ------ Features Split Section Media Queries ----- */\n@media only screen and (min-width: 769px) {\n  .flex-split {\n    display: flex;\n    flex-direction: row; }\n    .flex-split .f-right h2 {\n      font-size: 34px; } }\n@media only screen and (min-width: 769px) and (max-width: 1024px) {\n  .flex-split .f-left img {\n    margin-top: 30px; }\n  .flex-split .f-right {\n    padding: 10px 20px 20px 20px; } }\n@media only screen and (min-width: 1024px) and (max-width: 1180px) {\n  .flex-split .f-left img {\n    margin-top: 50px; } }\n@media only screen and (min-width: 1024px) {\n  .flex-split .f-left {\n    padding: 30px 10px 10px 10px; }\n  .flex-split .f-right {\n    padding: 40px 50px 50px 50px; } }\n/* ------ Features Split Section Media Queries Ends  ----- */\n@media only screen and (max-width: 766px) {\n  .features-section .f-right {\n    flex: 1 0 50%;\n    height: 360px; } }\n@media only screen and (max-width: 1142px) {\n  .features-section-2 .features-content {\n    padding: 0;\n    padding: 10px; }\n    .features-section-2 .features-content h2 {\n      margin-top: 10px; } }\n.bannerStyle h1 {\n  background-color: #ccc;\n  min-height: 300px;\n  text-align: center;\n  line-height: 300px; }\n.leftRs {\n  display: none !important; }\n.rightRs {\n  display: none !important; }\n.clients .tile {\n  box-shadow: none !important; }\n.footer.landing-footer {\n  position: relative;\n  height: auto; }\n"

/***/ })

}]);
//# sourceMappingURL=theme-landing-landing-module.js.map