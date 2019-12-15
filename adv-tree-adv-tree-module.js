(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adv-tree-adv-tree-module"],{

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/adv-tree-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdvTreeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvTreeRoutingModule", function() { return AdvTreeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adv_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adv-tree.component */ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _adv_tree_component__WEBPACK_IMPORTED_MODULE_2__["AdvTreeComponent"],
        data: {
            title: 'Tree View',
            icon: 'icon-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tree view',
            status: true
        }
    }
];
var AdvTreeRoutingModule = /** @class */ (function () {
    function AdvTreeRoutingModule() {
    }
    AdvTreeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdvTreeRoutingModule);
    return AdvTreeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Basic Tree View'\">\r\n        <app-tree-basic></app-tree-basic>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Customize Actions'\">\r\n        <app-tree-action></app-tree-action>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Tri-State Checkboxes'\">\r\n        <app-tree-checkbox></app-tree-checkbox>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Tree View with Async Data'\">\r\n        <app-tree-async></app-tree-async>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Filter Data'\">\r\n        <app-tree-filter></app-tree-filter>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card title=\"'Node Drag & Drop'\">\r\n        <app-tree-dnd></app-tree-dnd>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdvTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvTreeComponent", function() { return AdvTreeComponent; });
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

var AdvTreeComponent = /** @class */ (function () {
    function AdvTreeComponent() {
    }
    AdvTreeComponent.prototype.ngOnInit = function () {
    };
    AdvTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adv-tree',
            template: __webpack_require__(/*! ./adv-tree.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.html"),
            styles: [__webpack_require__(/*! ./adv-tree.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvTreeComponent);
    return AdvTreeComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/adv-tree.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdvTreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvTreeModule", function() { return AdvTreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adv_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adv-tree.component */ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.component.ts");
/* harmony import */ var _adv_tree_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-tree-routing.module */ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _tree_basic_tree_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-basic/tree-basic.component */ "./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.ts");
/* harmony import */ var _tree_action_tree_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree-action/tree-action.component */ "./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.ts");
/* harmony import */ var _tree_async_tree_async_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree-async/tree-async.component */ "./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.ts");
/* harmony import */ var _tree_filter_tree_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree-filter/tree-filter.component */ "./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.ts");
/* harmony import */ var _tree_dnd_tree_dnd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree-dnd/tree-dnd.component */ "./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.ts");
/* harmony import */ var _tree_checkbox_tree_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree-checkbox/tree-checkbox.component */ "./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdvTreeModule = /** @class */ (function () {
    function AdvTreeModule() {
    }
    AdvTreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _adv_tree_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvTreeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_5__["TreeModule"]
            ],
            declarations: [
                _adv_tree_component__WEBPACK_IMPORTED_MODULE_2__["AdvTreeComponent"],
                _tree_basic_tree_basic_component__WEBPACK_IMPORTED_MODULE_6__["TreeBasicComponent"],
                _tree_action_tree_action_component__WEBPACK_IMPORTED_MODULE_7__["TreeActionComponent"],
                _tree_async_tree_async_component__WEBPACK_IMPORTED_MODULE_8__["TreeAsyncComponent"],
                _tree_filter_tree_filter_component__WEBPACK_IMPORTED_MODULE_9__["TreeFilterComponent"],
                _tree_dnd_tree_dnd_component__WEBPACK_IMPORTED_MODULE_10__["TreeDndComponent"],
                _tree_checkbox_tree_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["TreeCheckboxComponent"]
            ]
        })
    ], AdvTreeModule);
    return AdvTreeModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <tree-root #tree [nodes]=\"nodes\" [options]=\"options\" [focused]=\"true\"></tree-root>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <h6>Help: </h6>\r\n    <span class=\"sub-title\">Custom Keys:</span>\r\n    <p>enter - show alert</p>\r\n\r\n    <span class=\"sub-title\">Custom Mouse Actions:</span>\r\n    <p>shift+click - select multi<br>\r\n    double click - expand / collapse<br>\r\n    right-click - show alert</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TreeActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeActionComponent", function() { return TreeActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.name);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren) {
                angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_EXPANDED(tree, node, $event);
            }
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(tree, node, $event)
                : angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["KEYS"].ENTER] = function (tree, node, $event) { return alert("This is " + node.data.name); },
        _a)
};
var TreeActionComponent = /** @class */ (function () {
    function TreeActionComponent() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    {
                        name: 'child1'
                    }, {
                        name: 'child2'
                    }
                ]
            },
            {
                name: 'root2',
                children: [
                    {
                        name: 'child2.1'
                    }, {
                        name: 'child2.2',
                        children: [
                            {
                                id: 1001,
                                name: 'subsub'
                            }
                        ]
                    }
                ]
            }
        ];
        this.options = {
            actionMapping: actionMapping
        };
    }
    TreeActionComponent.prototype.ngOnInit = function () {
    };
    TreeActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-action',
            template: __webpack_require__(/*! ./tree-action.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.html"),
            styles: [__webpack_require__(/*! ./tree-action.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/tree-action/tree-action.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeActionComponent);
    return TreeActionComponent;
}());

var _a;


/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tree-root #tree [options]=\"options\" [nodes]=\"nodes\"></tree-root>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TreeAsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeAsyncComponent", function() { return TreeAsyncComponent; });
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

var TreeAsyncComponent = /** @class */ (function () {
    function TreeAsyncComponent() {
        this.options = {
            getChildren: this.getChildren.bind(this)
        };
        this.nodes = [];
        this.asyncChildren = [
            {
                name: 'child1',
                hasChildren: true
            }, {
                name: 'child2'
            }
        ];
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' }
                ]
            },
            {
                name: 'root2',
                hasChildren: true
            },
            {
                name: 'root3'
            }
        ];
    }
    TreeAsyncComponent.prototype.ngOnInit = function () {
    };
    TreeAsyncComponent.prototype.getChildren = function (node) {
        var newNodes = this.asyncChildren.map(function (c) { return Object.assign({}, c); });
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(newNodes); }, 1000);
        });
    };
    TreeAsyncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-async',
            template: __webpack_require__(/*! ./tree-async.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.html"),
            styles: [__webpack_require__(/*! ./tree-async.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/tree-async/tree-async.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeAsyncComponent);
    return TreeAsyncComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tree-root [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TreeBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeBasicComponent", function() { return TreeBasicComponent; });
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

var TreeBasicComponent = /** @class */ (function () {
    function TreeBasicComponent() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
        this.options = {};
    }
    TreeBasicComponent.prototype.ngOnInit = function () {
    };
    TreeBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-basic',
            template: __webpack_require__(/*! ./tree-basic.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.html"),
            styles: [__webpack_require__(/*! ./tree-basic.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/tree-basic/tree-basic.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeBasicComponent);
    return TreeBasicComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <span class=\"sub-title\">tri-state checkboxes</span>\r\n    <p></p>\r\n    <tree-root\r\n      [nodes]=\"nodes\"\r\n      [options]=\"options\">\r\n    </tree-root>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <span class=\"sub-title\">The tree is using flex-box.</span>\r\n    <p></p>\r\n    <tree-root\r\n      class=\"reverse\"\r\n      [nodes]=\"nodes\"\r\n      [options]=\"options\">\r\n    </tree-root>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.reverse tree-node-expander {\n  order: 0; }\n.reverse tree-node-checkbox {\n  order: 1; }\n.reverse .node-content-wrapper {\n  order: 2; }\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TreeCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeCheckboxComponent", function() { return TreeCheckboxComponent; });
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

var TreeCheckboxComponent = /** @class */ (function () {
    function TreeCheckboxComponent() {
        this.nodes = [
            {
                name: 'root1'
            },
            {
                name: 'root2',
                children: [
                    { name: 'child1' },
                    { name: 'child2', children: [
                            { name: 'grandchild1' },
                            { name: 'grandchild2' }
                        ] }
                ]
            }
        ];
        this.options = {
            useCheckbox: true
        };
    }
    TreeCheckboxComponent.prototype.ngOnInit = function () {
    };
    TreeCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-checkbox',
            template: __webpack_require__(/*! ./tree-checkbox.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./tree-checkbox.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/tree-checkbox/tree-checkbox.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], TreeCheckboxComponent);
    return TreeCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tree-root [state]=\"state\" [options]=\"options\" [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TreeDndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDndComponent", function() { return TreeDndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeDndComponent = /** @class */ (function () {
    function TreeDndComponent() {
        this.state = {
            expandedNodeIds: {
                1: true,
                2: true
            },
            hiddenNodeIds: {},
            activeNodeIds: {}
        };
        this.options = {
            allowDrag: function (node) { return node.isLeaf; },
            getNodeClone: function (node) { return (__assign({}, node.data, { id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(), name: "copy of " + node.data.name })); }
        };
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                id: 2,
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
    TreeDndComponent.prototype.ngOnInit = function () {
    };
    TreeDndComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-dnd',
            template: __webpack_require__(/*! ./tree-dnd.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.html"),
            styles: [__webpack_require__(/*! ./tree-dnd.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/tree-dnd/tree-dnd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeDndComponent);
    return TreeDndComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"sub-title\">Filter</span>\r\n    <div class=\"input-group input-group-button\">\r\n      <input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" class=\"form-control\" placeholder=\"Filter Nodes\"/>\r\n      <div _ngcontent-c11=\"\" class=\"input-group-append\">\r\n        <button _ngcontent-c11=\"\" class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"tree.treeModel.clearFilter()\">Clear</button>\r\n      </div>\r\n    </div>\r\n<tree-root #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n<span class=\"sub-title\">Filter By Function (Fuzzy Search)</span>\r\n\r\n<input id=\"filter3\" class=\"form-control m-t-15\" #filter3 (keyup)=\"filterFn(filter3.value, tree.treeModel)\" placeholder=\"Filter Nodes by Fuzzy Search\"/>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TreeFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeFilterComponent", function() { return TreeFilterComponent; });
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

var TreeFilterComponent = /** @class */ (function () {
    function TreeFilterComponent() {
        this.nodes = [
            {
                name: 'North America',
                children: [
                    { name: 'United States', children: [
                            { name: 'New York' },
                            { name: 'California' },
                            { name: 'Florida' }
                        ] },
                    { name: 'Canada' }
                ]
            },
            {
                name: 'South America',
                children: [
                    { name: 'Argentina', children: [] },
                    { name: 'Brazil' }
                ]
            },
            {
                name: 'Europe',
                children: [
                    { name: 'England' },
                    { name: 'Germany' },
                    { name: 'France' },
                    { name: 'Italy' },
                    { name: 'Spain' }
                ]
            }
        ];
    }
    TreeFilterComponent.prototype.filterFn = function (value, treeModel) {
        treeModel.filterNodes(function (node) { return fuzzysearch(value, node.data.name); });
    };
    TreeFilterComponent.prototype.ngOnInit = function () {
    };
    TreeFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-filter',
            template: __webpack_require__(/*! ./tree-filter.component.html */ "./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.html"),
            styles: [__webpack_require__(/*! ./tree-filter.component.scss */ "./src/app/theme/ui-elements/advance/adv-tree/tree-filter/tree-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeFilterComponent);
    return TreeFilterComponent;
}());

function fuzzysearch(needle, haystack) {
    var haystackLC = haystack.toLowerCase();
    var needleLC = needle.toLowerCase();
    var hlen = haystack.length;
    var nlen = needleLC.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needleLC.charCodeAt(i);
        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}


/***/ })

}]);
//# sourceMappingURL=adv-tree-adv-tree-module.js.map