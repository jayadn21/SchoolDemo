(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-default-module"],{

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

/***/ "./src/app/service/institute.service.js":
/*!**********************************************!*\
  !*** ./src/app/service/institute.service.js ***!
  \**********************************************/
/*! exports provided: InstituteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteService", function() { return InstituteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiceUitility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceUitility */ "./src/app/service/ServiceUitility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstituteService = /** @class */ (function () {
    function InstituteService(serviceUtility) {
        this.serviceUtility = serviceUtility;
        // SaveorganisationService(InstituteGroup: {
        // Name: string; Address: string; City: string; District: string; Pincode: string; UploadFile: string;
        // State: string; Country: string; Contact: string; Phone1: string; Phone2: string;
        // }) {
        //   throw new Error('Method not implemented.');
        // }
        // private _serverURL = 'http://localhost:3005';
        this.route = '/institutionGroupDetails';
        this.getinstitutionGroupApi = this.route + '/getinstitutiongroup';
        // getinstitutiongroup
        this.setinstitutiongroupApi = this.route + '/setinstitutiongroup';
        this.route1 = '/InstitutionDetails';
        this.getuserdefaultinstitutionApi = this.route1 + '/getuserdefaultinstitution';
        this.saveInstitutionApi = this.route1 + '/setinstitution';
    }
    InstituteService.prototype.getInstitutionGroupdetailsService = function (paramData) {
        return this.serviceUtility.postRequest(this.getinstitutionGroupApi, paramData);
    };
    InstituteService.prototype.getuserdefaultinstitutionService = function (paramData) {
        return this.serviceUtility.postRequest(this.getuserdefaultinstitutionApi, paramData);
    };
    InstituteService.prototype.SaveOrganizationService = function (Organization_obj) {
        return this.serviceUtility.postRequest(this.setinstitutiongroupApi, Organization_obj);
    };
    InstituteService.prototype.SaveSubOrganisation = function (SubOrganization_obj) {
        return this.serviceUtility.postRequest(this.saveInstitutionApi, SubOrganization_obj);
    };
    InstituteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], InstituteService);
    return InstituteService;
}());

//# sourceMappingURL=institute.service.js.map

/***/ }),

/***/ "./src/app/theme/dashboard/default/default-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ "./src/app/theme/dashboard/default/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        data: {
            title: 'Default',
            icon: 'ti-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var DefaultRoutingModule = /** @class */ (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- order-card start -->\r\n    <!-- Students -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Current Students</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-graduation-cap st-icon bg-primary\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">5,456</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Employees -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Total Employees</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">20</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Parents App -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Parents App</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-android st-icon bg-success\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">20</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- SMS Remaining -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>SMS Remaining</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-envelope-o st-icon bg-danger\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">80</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--  -->\r\n    <div class=\"col-xl-6 col-xl-6\">\r\n      <app-card>\r\n        <div class=\"row\">\r\n          <!-- Students -->\r\n          <div class=\"col-md-8 col-xl-4\">\r\n            <div class=\"card bg-c-blue order-card\">\r\n              <button class=\"btn btn-primary\">\r\n                <i class=\"ti-user f-centre\"></i>\r\n                <div class=\"text-center\">\r\n                  <h6 class=\"d-inline-block\">Students</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <!-- Fees -->\r\n          <div class=\"col-md-8 col-xl-4\">\r\n            <div class=\"card bg-success order-card\">\r\n              <button class=\"btn btn-success\">\r\n                <i class=\"ti-briefcase f-centre\"></i>\r\n                <div class=\"text-center\">\r\n                  <h6 class=\"d-inline-block\">Fees</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <!-- Attendance -->\r\n          <div class=\"col-md-8 col-xl-4\">\r\n            <div class=\"card bg-c-blue order-card\">\r\n              <button class=\"btn btn-danger\">\r\n                <i class=\"ti-check-box f-centre\"></i>\r\n                <div class=\"text-center\">\r\n                  <h6 class=\"d-inline-block\">Attendance</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <!-- Grade Book -->\r\n          <div class=\"col-md-8 col-xl-4\">\r\n            <div class=\"card bg-c-blue order-card\">\r\n              <button class=\"btn btn-info\">\r\n                <i class=\"ti-pencil-alt f-centre\"></i>\r\n                <div class=\"text-center\">\r\n                  <h6 class=\"d-inline-block\">Grade Book</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <!-- Home work -->\r\n          <div class=\"col-md-8 col-xl-4\">\r\n            <div class=\"card bg-c-blue order-card\">\r\n              <button class=\"btn btn-warning\">\r\n                <i class=\"ti-pencil f-centre\"></i>\r\n                <div class=\"text-center\">\r\n                  <h6 class=\"d-inline-block\">Home work</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <!-- Messenger -->\r\n          <div class=\"col-md-8 col-xl-4\">\r\n            <div class=\"card bg-c-blue order-card\">\r\n              <button class=\"btn btn-primary\">\r\n                <i class=\"ti-mobile f-centre\"></i>\r\n                <div class=\"text-center\">\r\n                  <h6 class=\"d-inline-block\">Messenger</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- order-card end -->\r\n\r\n    <div class=\"col-xl-6 col-xl-6\">\r\n      <app-card>\r\n        <div class=\"row\">\r\n          <div class=\"card-header-img\">\r\n            <div class=\"col-xl-8 col-xl-4\">\r\n              <img src=\"assets/images/email/launch.png\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div lass=\"col-xl-12 col-xl-8\">\r\n              <h4>{{defaultInstitute.Name}}</h4>\r\n              <h4>{{defaultInstitute.Address}}</h4>\r\n              <h4>{{defaultInstitute.City}} - {{ defaultInstitute.Pincode }}</h4>\r\n              <h4>{{defaultInstitute.Phone1}}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <!--School address starts-->\r\n    <div class=\"col-xl-6 col-xl-6\">\r\n      <!-- <div class=\"card widget-statstic-card border-card\"> -->\r\n\r\n      <!-- <div class=\"card-header\"> -->\r\n      <i class=\"fa fa-address-book\"></i>\r\n      <i class=\"fa fa-cameraht\"></i>\r\n      <form #defaultForm=\"ngForm\">\r\n        <div class=\"card-header-rig\">\r\n          <div class=\"row simple-cards users-card\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <!-- </div> -->\r\n      <div class=\"card-block\">\r\n\r\n        <!--<i class=\"fa fa-calendar st-icon bg-primary\"></i>-->\r\n        <div class=\"text-left\">\r\n          <h3 class=\"d-inline-block\"></h3>\r\n          <!--<i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>-->\r\n\r\n        </div>\r\n      </div>\r\n      <!-- </div> -->\r\n    </div>\r\n    <!--School address ends-->\r\n\r\n    <!-- App Status table start -->\r\n    <!-- <div class=\"col-xl-6 col-xl-4\">\r\n    <div class=\"card widget-statstic-card border-card\">\r\n    <div class=\"table-responsive\">\r\n      <div class=\"text-center\">\r\n        <h5 class=\"text-centre\">App Status</h5>\r\n      </div>\r\n      <table class=\"table table-inverse\">\r\n        <tbody>\r\n        <tr class=\"bg-primary\">\r\n          <th scope=\"row\">Total Students Registred</th>\r\n          <td>704</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">Current Students</th>\r\n          <td>676</td>\r\n        </tr>\r\n        <tr class=\"bg-success\">\r\n          <th scope=\"row\">Passed Out Students</th>\r\n          <td>13</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">Parents App Installed</th>\r\n          <td>8</td>\r\n        </tr>\r\n        <tr class=\"bg-warning\">\r\n          <th scope=\"row\">Total Employees Registered</th>\r\n          <td>9</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">SMS Left</th>\r\n          <td>488</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>\r\n    </div> -->\r\n    <!-- App Status table end -->\r\n\r\n    <!-- Event Calendar Start-->\r\n\r\n    <!-- Event Calendar End-->\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendar-event-tag tag {\n  display: none !important; }\n\n.calendar-event-tag .ng2-tag-input {\n  border-bottom: 1px solid #e5ebec !important;\n  border: 1px solid #e5ebec;\n  height: 38px !important;\n  padding: 0px !important;\n  color: #565656 !important; }\n\n.calendar-event-tag .ng2-tag-input__text-input {\n  background: transparent;\n  padding: 7px 12px !important;\n  letter-spacing: 0.3px; }\n\n.calendar-event-tag input::-moz-placeholder {\n  color: #8d9498;\n  opacity: 1; }\n\n.calendar-event-tag input:-ms-input-placeholder, .calendar-event-tag input::-webkit-input-placeholder {\n  color: #8d9498; }\n\n.cal-event .calendar-event {\n  position: relative;\n  z-index: 1111999;\n  cursor: move;\n  margin: 10px 5px 0 0;\n  padding: 6px 10px;\n  display: inline-block;\n  color: #fff;\n  min-width: 140px;\n  text-align: center;\n  background: #007bff; }\n\n.cal-event .calendar-event a {\n  float: right;\n  opacity: .6;\n  font-size: 10px;\n  margin: 4px 0 0 10px;\n  color: #fff; }\n\n.calendar-event-label.checkbox label {\n  padding-left: 10px; }\n\n#calendar .cal-month-view .cal-day-badge {\n  background: #007bff; }\n\n.ti-close:before {\n  content: \"\\E646\"; }\n\n[class*=\" ti-\"], [class^=ti-] {\n  font-family: themify;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n#calendar-header .card-block-hid {\n  overflow: visible !important; }\n"

/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.ts ***!
  \**************************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.js */ "./src/assets/charts/amchart/pie.js");
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.js */ "./src/assets/charts/amchart/ammap.js");
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/charts/amchart/worldLow.js */ "./src/assets/charts/amchart/worldLow.js");
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_charts_amchart_continentsLow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/charts/amchart/continentsLow.js */ "./src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var _assets_charts_amchart_continentsLow_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_continentsLow_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_service_institute_service_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/institute.service.js */ "./src/app/service/institute.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DefaultComponent = /** @class */ (function () {
    // items = [];
    // public view = 'month';
    // viewDate: Date = new Date();
    // isChecked = true;
    // public colorOption = ['red', 'blue', 'yellow', 'green'];
    // public actions: CalendarEventAction[] = [
    //   {
    //     label: '<i class="fa fa-fw fa-times"></i>',
    //     onClick: ({ event }: { event: CalendarEvent }): void => {
    //       this.events = this.events.filter(iEvent => iEvent !== event);
    //     }
    //   }
    // ];
    // externalEvents: CalendarEvent[] = [
    //   {
    //     title: 'My Event One',
    //     color: colors.yellow,
    //     start: new Date(),
    //     draggable: true,
    //     actions: this.actions
    //   },
    //   {
    //     title: 'My Event Two',
    //     color: colors.blue,
    //     start: new Date(),
    //     draggable: true,
    //     actions: this.actions
    //   },
    //   {
    //     title: 'My Event Three',
    //     color: colors.blue,
    //     start: new Date(),
    //     draggable: true,
    //     actions: this.actions
    //   },
    //   {
    //     title: 'My Event Four',
    //     color: colors.blue,
    //     start: new Date(),
    //     draggable: true,
    //     actions: this.actions
    //   }
    // ];
    // events: CalendarEvent[] = [
    //   {
    //     start: subDays(startOfDay(new Date()), 1),
    //     end: addDays(new Date(), 1),
    //     title: 'A 3 day event',
    //     color: colors.red,
    //     actions: this.actions
    //   },
    //   {
    //     start: startOfDay(new Date()),
    //     title: 'An event with no end date',
    //     color: colors.yellow,
    //     actions: this.actions
    //   },
    //   {
    //     start: subDays(endOfMonth(new Date()), 3),
    //     end: addDays(endOfMonth(new Date()), 3),
    //     title: 'A long event that spans 2 months',
    //     color: colors.blue
    //   },
    //   {
    //     start: addHours(startOfDay(new Date()), 2),
    //     end: new Date(),
    //     title: 'A draggable and resizable event',
    //     color: colors.green,
    //     actions: this.actions,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     },
    //     draggable: true
    //   }
    // ];
    // public activeDayIsOpen = true;
    // refresh: Subject<any> = new Subject();
    // eventDropped({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    //   const externalIndex: number = this.externalEvents.indexOf(event);
    //   if (externalIndex > -1) {
    //     console.log(this.isChecked);
    //     if (!this.isChecked) {
    //       this.externalEvents.splice(externalIndex, 1);
    //     }
    //     this.events.push(event);
    //   }
    //   event.start = newStart;
    //   if (newEnd) {
    //     event.end = newEnd;
    //   }
    //   this.viewDate = newStart;
    //   this.activeDayIsOpen = true;
    // }
    // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    //   if (isSameMonth(date, this.viewDate)) {
    //     if (
    //       (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
    //       events.length === 0
    //     ) {
    //       this.activeDayIsOpen = false;
    //     } else {
    //       this.activeDayIsOpen = true;
    //       this.viewDate = date;
    //     }
    //   }
    // }
    function DefaultComponent(_institute) {
        this._institute = _institute;
        this.options = {
            position: ['bottom', 'right'],
        };
        this.defaultInstitute = {
            Id: '',
            InstitutionGroupId: '',
            Name: '',
            Address: '',
            City: '',
            District: '',
            State: '',
            Country: '',
            Pincode: '',
            TeachingMedium: '',
            Phone1: '',
            Phone2: '',
            EmailId: '',
            Fax: '',
            Logo: '',
            DiseNumber: '',
        };
        this.userLoginParameter = {
            UserLoginId: '',
        };
    }
    DefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userLoginParameter.UserLoginId = JSON.parse(localStorage.getItem('Id'));
        this._institute.getuserdefaultinstitutionService(this.userLoginParameter)
            .subscribe(function (data) {
            if (data.success) {
                _this.defaultInstitute = data.data[0][0];
                console.log(_this.defaultInstitute.InstitutionGroupId);
            }
            else {
                console.log('error: ' + data.message);
            }
        });
    };
    // onAdd(event) {
    //   const color = this.colorOption[Math.floor(Math.random() * this.colorOption.length)];
    //   this.externalEvents.push({
    //     title: event.value,
    //     start: startOfDay(new Date()),
    //     end: endOfDay(new Date()),
    //     color: colors[color],
    //     draggable: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     },
    //     actions: this.actions
    //   });
    //   this.refresh.next();
    // }
    // setEvent() {
    //   this.isChecked = !this.isChecked;
    // }
    DefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            AmCharts.makeChart('statistics_chart', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.2,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.6,
                        'lineThickness': 0,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 130,
                        'market2': 110,
                        'sales1': 0
                    }, {
                        'date': '2013-03-01',
                        'market1': 80,
                        'market2': 60,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 70,
                        'market2': 200,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 180,
                        'market2': 150,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 105,
                        'market2': 90,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 250,
                        'market2': 150,
                        'sales1': 0
                    }]
            });
            /* feedback chart start */
            _this.feedbackData = {
                datasets: [{
                        data: [83, 17],
                        backgroundColor: ['#4099ff', '#81c1fd'],
                        label: 'Dataset 1',
                        borderWidth: 0
                    }], labels: ['Positive', 'Negative']
            };
            _this.feedbackOption = {
                responsive: true,
                legend: { display: false },
                title: { display: false, text: 'Chart.js Doughnut Chart' },
                animation: { animateScale: true, animateRotate: true }
            };
            /* feedback chart end */
        }, 75);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('seoCard1Chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DefaultComponent.prototype, "seoCard1Chart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('seoCard2Chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DefaultComponent.prototype, "seoCard2Chart", void 0);
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/theme/dashboard/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/theme/dashboard/default/default.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")],
            // encapsulation: ViewEncapsulation.None,
            // changeDetection: ChangeDetectionStrategy.OnPush,
            // providers: [
            //   {
            //     provide: CalendarDateFormatter,
            //     useClass: CustomDateFormatter
            //   }
            // ],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [src_app_service_institute_service_js__WEBPACK_IMPORTED_MODULE_10__["InstituteService"]])
    ], DefaultComponent);
    return DefaultComponent;
}());

function e(h, g, i) {
    if (i == null) {
        i = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
                label: '',
                borderColor: h,
                borderWidth: 2,
                hitRadius: 0,
                pointHoverRadius: 0,
                pointRadius: 3,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#fff',
                pointBorderColor: h,
                pointHoverBackgroundColor: h,
                pointHoverBorderColor: '#000',
                fill: true,
                backgroundColor: i,
                data: g,
            }]
    };
}
function f() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}


/***/ }),

/***/ "./src/app/theme/dashboard/default/default.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.module.ts ***!
  \***********************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/theme/dashboard/default/default.component.ts");
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-routing.module */ "./src/app/theme/dashboard/default/default-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { DragAndDropModule } from 'angular-draggable-droppable';
var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_routing_module__WEBPACK_IMPORTED_MODULE_4__["DefaultRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                // DragAndDropModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ],
            exports: [],
            declarations: [_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"]],
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ })

}]);
//# sourceMappingURL=default-default-module.js.map