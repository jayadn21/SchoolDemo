(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/theme/ui-elements/basic/tabs/tabs-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tabs/tabs-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.component */ "./src/app/theme/ui-elements/basic/tabs/tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"],
        data: {
            title: 'Tabs',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tabs',
            status: true
        }
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tabs/tabs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tabs/tabs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Bootstrap tab card start -->\r\n    <app-card title=\"'Bootstrap tab'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-xl-6\">\r\n          <div class=\"sub-title\">Default</div>\r\n          <ngb-tabset>\r\n            <ngb-tab title=\"Home\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Profile\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Messages\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Settings\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n        <div class=\"col-md-12 col-xl-6\">\r\n          <div class=\"sub-title\">Below Tabs</div>\r\n          <div class=\"below-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Bootstrap tab card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Material tab card start -->\r\n    <app-card title=\"'Material tab'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row m-b-30\">\r\n        <div class=\"col-md-12 col-xl-6\">\r\n          <div class=\"sub-title\">Default</div>\r\n          <div class=\"md-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-xl-6\">\r\n          <div class=\"sub-title\">BELOW TAB</div>\r\n          <div class=\"md-tabs md-below-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-xl-6\">\r\n          <div class=\"sub-title\">LEFT TAB</div>\r\n          <div class=\"md-tabs md-left-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-xl-6\">\r\n          <div class=\"sub-title\">Right TAB</div>\r\n          <div class=\"md-tabs md-right-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Material tab card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Tab variant tab card start -->\r\n    <app-card title=\"'Tab variant'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'tab-icon'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div class=\"sub-title\">Tab With Icon</div>\r\n          <div class=\"md-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-home\"></i>Home</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-user \"></i>Profile</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-message\"></i>Messages</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-settings\"></i>Settings</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div class=\"sub-title\">Tab With Images</div>\r\n          <div class=\"md-tabs md-image-tab\">\r\n            <ngb-tabset>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-5.jpg\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-2.jpg\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-3.jpg\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-2.jpg\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Tab variant tab card start -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tabs/tabs.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tabs/tabs.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tabs/tabs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tabs/tabs.component.ts ***!
  \****************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/theme/ui-elements/basic/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/theme/ui-elements/basic/tabs/tabs.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")],
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
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tabs/tabs.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tabs/tabs.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.component */ "./src/app/theme/ui-elements/basic/tabs/tabs.component.ts");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/theme/ui-elements/basic/tabs/tabs-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["TabsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map