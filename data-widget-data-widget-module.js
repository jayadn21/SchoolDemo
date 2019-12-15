(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-widget-data-widget-module"],{

/***/ "./src/app/theme/widget/data-widget/data-widget-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DataWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetRoutingModule", function() { return DataWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-widget.component */ "./src/app/theme/widget/data-widget/data-widget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _data_widget_component__WEBPACK_IMPORTED_MODULE_2__["DataWidgetComponent"],
        data: {
            title: 'Data Widget',
            status: false
        }
    }
];
var DataWidgetRoutingModule = /** @class */ (function () {
    function DataWidgetRoutingModule() {
    }
    DataWidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DataWidgetRoutingModule);
    return DataWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- tabs card start -->\r\n    <div class=\"col-sm-12\">\r\n      <app-card [cardClass]=\"'tab-card'\" [cardOptionBlock]=\"true\">\r\n        <div class=\"md-tabs\">\r\n          <ngb-tabset>\r\n            <ngb-tab title=\"Home\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002344</td>\r\n                        <td>John Deo</td>\r\n                        <td>05-01-2017</td>\r\n                        <td><span class=\"label label-danger\">Failed</span></td>\r\n                        <td>#7234486</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002653</td>\r\n                        <td>Eugine Turner</td>\r\n                        <td>04-01-2017</td>\r\n                        <td><span class=\"label label-success\">Delivered</span></td>\r\n                        <td>#7234417</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Security\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002653</td>\r\n                        <td>Eugine Turner</td>\r\n                        <td>04-01-2017</td>\r\n                        <td><span class=\"label label-success\">Delivered</span></td>\r\n                        <td>#7234417</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Entertainment\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002413</td>\r\n                        <td>Jane Elliott</td>\r\n                        <td>06-01-2017</td>\r\n                        <td><span class=\"label label-primary\">Shipping</span></td>\r\n                        <td>#7234421</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Big Data\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002413</td>\r\n                        <td>Jane Elliott</td>\r\n                        <td>06-01-2017</td>\r\n                        <td><span class=\"label label-primary\">Shipping</span></td>\r\n                        <td>#7234421</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002344</td>\r\n                        <td>John Deo</td>\r\n                        <td>05-01-2017</td>\r\n                        <td><span class=\"label label-danger\">Failed</span></td>\r\n                        <td>#7234486</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- tabs card end -->\r\n\r\n    <!-- social statustic start -->\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <div class=\"card chat-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Chats</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"media received-chat\">\r\n            <img class=\"align-self-start mr-3 img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"usrer image\">\r\n            <div class=\"media-body\">\r\n              <h6 class=\"mt-0\">John Deo</h6>\r\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\r\n              <p class=\"text-muted\">10:53am</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"chat-saprator\"><span>Today</span></div>\r\n          <div class=\"media send-chat\">\r\n            <div class=\"media-body\">\r\n              <h6 class=\"mt-0\">John Deo</h6>\r\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\r\n              <p class=\"text-muted\">10:53am</p>\r\n            </div>\r\n            <img class=\"align-self-start ml-3 img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"usrer image\">\r\n          </div>\r\n          <div class=\"media received-chat\">\r\n            <img class=\"align-self-start mr-3 img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"usrer image\">\r\n            <div class=\"media-body\">\r\n              <h6 class=\"mt-0\">John Deo</h6>\r\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\r\n              <p class=\"text-muted\">10:53am</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer chat-control\">\r\n          <div class=\"chat-form\">\r\n            <input type=\"text\" class=\"form-control search-text\" placeholder=\"Type Hear . .\">\r\n            <div class=\"chat-btn\">\r\n              <button class=\"btn btn-primary btn-icon\"><i class=\"fa fa-paper-plane\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-8\">\r\n      <app-card title=\"'Activity'\">\r\n        <ul class=\"activity-blog\">\r\n          <li>\r\n            <div class=\"activity-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <p class=\"m-b-15\">Assign a new Task <span class=\"text-c-blue\">Design Web Mockup</span></p>\r\n            <div class=\"row m-b-15\">\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n            </div>\r\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\r\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\r\n          </li>\r\n          <li>\r\n            <div class=\"activity-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <div class=\"row m-b-15 m-t-15\">\r\n              <div class=\"col-auto col-sm-3\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-sm-auto col-sm-9\">\r\n                <p class=\"m-b-15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                <button class=\"btn btn-primary btn-round btn-sm\">Design Web Mockup</button>\r\n              </div>\r\n            </div>\r\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\r\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\r\n          </li>\r\n          <li>\r\n            <div class=\"activity-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\r\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\r\n          </li>\r\n        </ul>\r\n      </app-card>\r\n      <!-- social statustic end -->\r\n    </div>\r\n    <!-- social statustic end -->\r\n\r\n    <!-- activity feed start -->\r\n    <div class=\"col-sm-12\">\r\n      <app-card title=\"'Activity Feed'\" [cardOptionBlock]=\"true\">\r\n        <ul class=\"feed-blog\">\r\n          <li class=\"active-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-danger\">File</span> Eddie uploaded new files: <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n            <div class=\"row\">\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Old Scooter</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-100KB</small></p>\r\n              </div>\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Wall Art</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\r\n              </div>\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Microphone</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"diactive-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-success\">Task</span>Sarah marked the Pending Review: <span class=\"text-c-green\"> Trash Can Icon Design</span><small class=\"text-muted\"> 2 hours ago</small></h6>\r\n          </li>\r\n          <li class=\"diactive-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-primary\">comment</span> abc posted a task:  <span class=\"text-c-green\">Design a new Homepage</span>  <small class=\"text-muted\"> 6 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n          </li>\r\n        </ul>\r\n      </app-card>\r\n    </div>\r\n    <!-- activity feed end -->\r\n\r\n    <!-- Recent Orders start -->\r\n    <div class=\"col-sm-12\">\r\n      <app-card title=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>Image</th>\r\n              <th>Product Code</th>\r\n              <th>Customer</th>\r\n              <th>Purchased On</th>\r\n              <th>Status</th>\r\n              <th>Transaction ID</th>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002413</td>\r\n              <td>Jane Elliott</td>\r\n              <td>06-01-2017</td>\r\n              <td><span class=\"label label-primary\">Shipping</span></td>\r\n              <td>#7234421</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002344</td>\r\n              <td>John Deo</td>\r\n              <td>05-01-2017</td>\r\n              <td><span class=\"label label-danger\">Failed</span></td>\r\n              <td>#7234486</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002653</td>\r\n              <td>Eugine Turner</td>\r\n              <td>04-01-2017</td>\r\n              <td><span class=\"label label-success\">Delivered</span></td>\r\n              <td>#7234417</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002156</td>\r\n              <td>Jacqueline Howell</td>\r\n              <td>03-01-2017</td>\r\n              <td><span class=\"label label-warning\">Pending</span></td>\r\n              <td>#7234454</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- Recent Orders end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetComponent", function() { return DataWidgetComponent; });
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


var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
    }
    DataWidgetComponent.prototype.ngOnInit = function () {
    };
    DataWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-widget',
            template: __webpack_require__(/*! ./data-widget.component.html */ "./src/app/theme/widget/data-widget/data-widget.component.html"),
            styles: [__webpack_require__(/*! ./data-widget.component.scss */ "./src/app/theme/widget/data-widget/data-widget.component.scss")],
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
    ], DataWidgetComponent);
    return DataWidgetComponent;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.module.ts ***!
  \****************************************************************/
/*! exports provided: DataWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetModule", function() { return DataWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-widget.component */ "./src/app/theme/widget/data-widget/data-widget.component.ts");
/* harmony import */ var _data_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-widget-routing.module */ "./src/app/theme/widget/data-widget/data-widget-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DataWidgetModule = /** @class */ (function () {
    function DataWidgetModule() {
    }
    DataWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _data_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataWidgetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_data_widget_component__WEBPACK_IMPORTED_MODULE_2__["DataWidgetComponent"]]
        })
    ], DataWidgetModule);
    return DataWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=data-widget-data-widget-module.js.map