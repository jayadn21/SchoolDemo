(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./src/app/theme/user/user-profile/user-profile-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/user/user-profile/user-profile-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/theme/user/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
        data: {}
    }
];
var UserProfileRoutingModule = /** @class */ (function () {
    function UserProfileRoutingModule() {
    }
    UserProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserProfileRoutingModule);
    return UserProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/user/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/user/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n    <ngx-spinner type=\"ball-clip-rotate-pulse\"></ngx-spinner>\r\n  <!--profile cover start-->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"cover-profile\">\r\n        <div class=\"profile-bg-img\">\r\n          <img class=\"profile-bg-img img-fluid\" src=\"assets/images/user-profile/bg-img1.jpg\" alt=\"bg-img\">\r\n          <div class=\"card-block user-info\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"media-left\">\r\n                <a href=\"javascript:\" class=\"profile-image\">\r\n                  <img class=\"user-img img-radius\" src=\"assets/images/user-profile/user-img.jpg\" alt=\"user-img\">\r\n                </a>\r\n              </div>\r\n              <div class=\"media-body row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"user-title\">\r\n                    <h2>{{employeename}}</h2>\r\n                    <span class=\"text-white\">Web designer</span>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"pull-right cover-btn\">\r\n                    <button type=\"button\" class=\"btn btn-primary m-r-10 m-b-5\"><i class=\"icofont icofont-plus\"></i>\r\n                      Follow</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"icofont icofont-ui-messaging\"></i>\r\n                      Message</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--profile cover end-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"md-tabs md-card-tabs\">\r\n        <ngb-tabset>\r\n            <ngb-tab title=\"Personal Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <!-- personal card start -->\r\n                    <div class=\"card\">\r\n                       <!-- <div class=\"card-header\" style=\"margin-bottom:15px;\">\r\n                        <button id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light f-right\"\r\n                          (click)=\"toggleEditProfile()\">\r\n                          <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n\r\n                        </button>\r\n                        <br>\r\n                        <br>\r\n                        <div style=\"text-align:right\">Last LogIn\r\n                            <p>{{employee.LastLogin}}</p></div>\r\n                      </div>  -->\r\n                      <div class=\"card-body\">\r\n                        <div class=\"view-info\" *ngIf=\"editProfile\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                              <div class=\"general-info\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-lg-12 col-xl-6\">\r\n                                    <div class=\"table-responsive\">\r\n                                      <table class=\"table m-0\">\r\n                                        <tbody>\r\n                                          <tr>\r\n                                            <th scope=\"row\">Full Name</th>\r\n                                            <td>{{employee.Name}}</td>\r\n                                          </tr>\r\n                                            <tr>\r\n                                            <th scope=\"row\">Email ID</th>\r\n                                            <td> {{employee.EmailId}} </td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <th scope=\"row\">Phone Number</th>\r\n                                            <td>{{employee.PhoneNumber}}</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <th scope=\"row\">Address</th>\r\n                                            <td>{{employee.PresentAddress}}</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <th scope=\"row\">Created Date</th>\r\n                                            <td>{{ employee.CreatedDate | date:'dd-MMM-yyyy' }}</td>\r\n                                          </tr>\r\n\r\n                                        </tbody>\r\n                                      </table>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-lg-12 col-xl-6\">\r\n                                      <div class=\"table-responsive\">\r\n                                        <table class=\"table\">\r\n                                          <tbody>\r\n                                                 <div class=\"container\">\r\n                                                  <div class=\"ml-auto\" style=\"width:150px;\">Last LogIn:\r\n                                                      <p>{{employee.LastLogin}}</p></div>\r\n                                                    </div>\r\n                                                  <button id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light f-right\"\r\n                                                    (click)=\"toggleEditProfile()\">\r\n                                                    <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n\r\n                                                  </button>\r\n\r\n\r\n\r\n                                          </tbody>\r\n                                        </table>\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                  <!-- end of table col-lg-6 -->\r\n                               </div>\r\n                                <!-- end of row -->\r\n                              </div>\r\n\r\n\r\n                              <!-- end of general info -->\r\n                            </div>\r\n                            <div>\r\n\r\n                            </div>\r\n                            <!-- end of col-lg-12 -->\r\n                          </div>\r\n                          <!-- end of row -->\r\n                        </div>\r\n                        <!-- end of view-info -->\r\n                        <div class=\"edit-info\" *ngIf=\"!editProfile\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                              <div class=\"general-info\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-lg-12 col-xl-6\">\r\n                                    <div class=\"table-responsive\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                              <tr>\r\n                                                <th scope=\"row\">Full Name</th>\r\n                                                <td><input type=\"text\" id=\"Full Name\" name=\"Full Name\" [(ngModel)]=\"employee.Name\"></td>\r\n                                              </tr>\r\n                                               <tr>\r\n                                                <th scope=\"row\">Email ID</th>\r\n                                                <td> {{employee.EmailId}} </td>\r\n                                              </tr>\r\n                                              <tr>\r\n                                                <th scope=\"row\">Phone Number</th>\r\n                                                <td>{{employee.PhoneNumber}}</td>\r\n                                              </tr>\r\n                                              <tr>\r\n                                                <th scope=\"row\">Address</th>\r\n                                                <td><input type=\"text\" id=\"Address\" name=\"Address\" [(ngModel)]=\"employee.PresentAddress\"></td>\r\n                                              </tr>\r\n                                              <tr>\r\n                                                <th scope=\"row\">Created Date</th>\r\n                                                <td>{{ employee.CreatedDate | date:'dd-MMM-yyyy' }}</td>\r\n                                              </tr>\r\n                                            </tbody>\r\n                                          </table>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                                <!-- end of row -->\r\n                                <div class=\"text-center\">\r\n                                  <button (click)=\"updateUserdetails()\" (click)=\"toggleEditProfile()\" class=\"btn btn-primary waves-effect waves-light m-r-20\">Save</button>\r\n                                  <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn btn-danger\"\r\n                                    (click)=\"toggleEditProfile()\">Cancel</a>\r\n                                </div>\r\n                              </div>\r\n                              <!-- end of edit info -->\r\n                            </div> \r\n                            <!-- end of col-lg-12 -->\r\n                          </div>\r\n                          <!-- end of row -->\r\n                        </div>\r\n                        <!-- end of edit-info -->\r\n                      </div>\r\n                      <!-- end of card-body -->\r\n                    </div>\r\n\r\n                    <!-- personal card end-->\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n          <ngb-tab title=\"User's Services\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <!-- info card start -->\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <h5 class=\"card-header-text\">User Services</h5>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"card b-l-success business-info services m-b-20\">\r\n                          <div ngbDropdown class=\"card-header\">\r\n                            <div class=\"service-header\">\r\n                              <a href=\"javascript:;\">\r\n                                <h5 class=\"card-header-text\">Shivani Hero</h5>\r\n                              </a>\r\n                            </div>\r\n                            <span ngbDropdownToggle class=\"dropdown-toggle addon-btn text-muted f-right service-btn\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" role=\"tooltip\">\r\n                            </span>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right b-none services-list\">\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-edit\"></i> Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-delete\"></i>\r\n                                Delete</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-eye-alt\"></i>\r\n                                View</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12\">\r\n                                <p class=\"task-detail\">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do\r\n                                  eiusmod temp or incidi dunt ut labore et.Lorem ipsum dolor sit amet, consecte.</p>\r\n                              </div>\r\n                              <!-- end of col-sm-8 -->\r\n                            </div>\r\n                            <!-- end of row -->\r\n                          </div>\r\n                          <!-- end of card-body -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"card b-l-danger business-info services\">\r\n                          <div ngbDropdown class=\"card-header\">\r\n                            <div class=\"service-header\">\r\n                              <a href=\"javascript:;\">\r\n                                <h5 class=\"card-header-text\">Dress and Sarees</h5>\r\n                              </a>\r\n                            </div>\r\n                            <span ngbDropdownToggle class=\"dropdown-toggle addon-btn text-muted f-right service-btn\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" role=\"tooltip\">\r\n                            </span>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right b-none services-list\">\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-edit\"></i> Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-delete\"></i>\r\n                                Delete</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-eye-alt\"></i>\r\n                                View</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12\">\r\n                                <p class=\"task-detail\">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do\r\n                                  eiusmod temp or incidi dunt ut labore et.Lorem ipsum dolor sit amet, consecte.</p>\r\n                              </div>\r\n                              <!-- end of col-sm-8 -->\r\n                            </div>\r\n                            <!-- end of row -->\r\n                          </div>\r\n                          <!-- end of card-body -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"card b-l-info business-info services\">\r\n                          <div ngbDropdown class=\"card-header\">\r\n                            <div class=\"service-header\">\r\n                              <a href=\"javascript:;\">\r\n                                <h5 class=\"card-header-text\">Shivani Auto Port</h5>\r\n                              </a>\r\n                            </div>\r\n                            <span ngbDropdownToggle class=\"dropdown-toggle addon-btn text-muted f-right service-btn\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" role=\"tooltip\">\r\n                            </span>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right b-none services-list\">\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-edit\"></i> Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-delete\"></i>\r\n                                Delete</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-eye-alt\"></i>\r\n                                View</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12\">\r\n                                <p class=\"task-detail\">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do\r\n                                  eiusmod temp or incidi dunt ut labore et.Lorem ipsum dolor sit amet, consecte.</p>\r\n                              </div>\r\n                              <!-- end of col-sm-8 -->\r\n                            </div>\r\n                            <!-- end of row -->\r\n                          </div>\r\n                          <!-- end of card-body -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"card b-l-warning business-info services\">\r\n                          <div ngbDropdown class=\"card-header\">\r\n                            <div class=\"service-header\">\r\n                              <a href=\"javascript:;\">\r\n                                <h5 class=\"card-header-text\">Hair stylist</h5>\r\n                              </a>\r\n                            </div>\r\n                            <span ngbDropdownToggle class=\"dropdown-toggle addon-btn text-muted f-right service-btn\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" role=\"tooltip\">\r\n                            </span>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right b-none services-list\">\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-edit\"></i> Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-delete\"></i>\r\n                                Delete</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-eye-alt\"></i>\r\n                                View</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12\">\r\n                                <p class=\"task-detail\">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do\r\n                                  eiusmod temp or incidi dunt ut labore et.Lorem ipsum dolor sit amet, consecte.</p>\r\n                              </div>\r\n                              <!-- end of col-sm-8 -->\r\n                            </div>\r\n                            <!-- end of row -->\r\n                          </div>\r\n                          <!-- end of card-body -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"card b-l-danger business-info services\">\r\n                          <div ngbDropdown class=\"card-header\">\r\n                            <div class=\"service-header\">\r\n                              <a href=\"javascript:;\">\r\n                                <h5 class=\"card-header-text\">BMW India</h5>\r\n                              </a>\r\n                            </div>\r\n                            <span ngbDropdownToggle class=\"dropdown-toggle addon-btn text-muted f-right service-btn\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" role=\"tooltip\">\r\n                            </span>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right b-none services-list\">\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-edit\"></i> Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-delete\"></i>\r\n                                Delete</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-eye-alt\"></i>\r\n                                View</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12\">\r\n                                <p class=\"task-detail\">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do\r\n                                  eiusmod temp or incidi dunt ut labore et.Lorem ipsum dolor sit amet, consecte.</p>\r\n                              </div>\r\n                              <!-- end of col-sm-8 -->\r\n                            </div>\r\n                            <!-- end of row -->\r\n                          </div>\r\n                          <!-- end of card-body -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"card b-l-success business-info services\">\r\n                          <div ngbDropdown class=\"card-header\">\r\n                            <div class=\"service-header\">\r\n                              <a href=\"javascript:;\">\r\n                                <h5 class=\"card-header-text\">Shivani Hero</h5>\r\n                              </a>\r\n                            </div>\r\n                            <span ngbDropdownToggle class=\"dropdown-toggle addon-btn text-muted f-right service-btn\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" role=\"tooltip\">\r\n                            </span>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right b-none services-list\">\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-edit\"></i> Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-delete\"></i>\r\n                                Delete</a>\r\n                              <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-eye-alt\"></i>\r\n                                View</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12\">\r\n                                <p class=\"task-detail\">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do\r\n                                  eiusmod temp or incidi dunt ut labore et.Lorem ipsum dolor sit amet, consecte.</p>\r\n                              </div>\r\n                              <!-- end of col-sm-8 -->\r\n                            </div>\r\n                            <!-- end of row -->\r\n                          </div>\r\n                          <!-- end of card-body -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- info card end -->\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Setting\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <!-- info card start -->\r\n                <div class=\"card user-card\">\r\n                  <div class=\"card-header\">\r\n                    <h5>Profile</h5>\r\n                  </div>\r\n                  <div class=\"card-block\">\r\n                    <div class=\"usre-image\">\r\n                      <img [src]=\"imgURL\" height=\"110\" width=\"110\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                    </div>\r\n                    <h6 class=\"f-w-600 m-t-25 m-b-10\">{{employee.UserName}}</h6>\r\n                    <input type=\"file\" #file accept='image/*' (change)=\"onChange(file.files)\"/>\r\n                    <hr />\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"UpdateProfile()\">Upload</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn btn-danger\">Remove</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn btn-success\">Sanpshot</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <hr />\r\n                  </div>\r\n                </div>\r\n                <!-- info card end -->\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Change Password\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <!--Changed Password Validation Start-->\r\n                <app-card title=\" \" [headerContent]=\" \" [cardOptionBlock]=\"true\">\r\n                  <form #PasswordForm=\"ngForm\">\r\n                    <label class=\"col-sm-2 col-form-label\">Current Password</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"password\" class=\"form-control\" name=\"CurrentPassword\" [(ngModel)]=\"User.password\"\r\n                        #CurrentPassword=\"ngModel\" pattern=\"^[!@#$%^&*()_+0-9A-za-z]{0,10}$\" required>\r\n                      <div style=\"text-align: left;\"\r\n                        *ngIf=\"CurrentPassword.errors?.pattern || (CurrentPassword.errors && (CurrentPassword.dirty || CurrentPassword.touched))\"\r\n                        class=\"text-danger\">\r\n                        Current Password not valid.\r\n                      </div>\r\n                    </div>\r\n                    <label class=\"col-sm-2 col-form-label\">New Password</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"password\" class=\"form-control\" name=\"NewPassword\" [(ngModel)]=\"User.newpassword\"\r\n                        #NewPassword=\"ngModel\" pattern=\"^[!@#$%^&*()_+0-9A-za-z]{0,10}$\" required>\r\n                      <div style=\"text-align: left;\"\r\n                        *ngIf=\"NewPassword.errors?.pattern || (NewPassword.errors && (NewPassword.dirty || NewPassword.touched))\"\r\n                        class=\"text-danger\">\r\n                        New Password not valid.\r\n                      </div>\r\n                    </div>\r\n                    <label class=\"col-sm-2 col-form-label\">Confirm Password</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"password\" class=\"form-control\" name=\"ConfirmPassword\" [(ngModel)]=\"confirmpassword\"\r\n                        #ConfirmPassword=\"ngModel\" pattern=\"{{User.newpassword}}\" required>\r\n                      <div style=\"text-align: left;\"\r\n                        *ngIf=\"ConfirmPassword.errors?.pattern || (ConfirmPassword.errors && (ConfirmPassword.dirty || ConfirmPassword.touched))\"\r\n                        class=\"text-danger\">\r\n                        Confirm Password not match.\r\n                      </div>\r\n                    </div> <br>\r\n                    <div class=\"row\">\r\n                      <label class=\"col-sm-2\"></label>\r\n                      <div class=\"col-sm-4\">\r\n                        <button (click)=\"UpdatePassword()\" type=\"submit\" class=\"btn btn-primary m-b-0\">Update</button>\r\n                        &nbsp;&nbsp;\r\n                        <button type=\"submit\" class=\"btn btn-primary m-b-0\">Reset</button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </app-card>\r\n                <!--Changed Password Validation Start-->\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/user/user-profile/user-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/user/user-profile/user-profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/user/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/user/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _Employees_manage_employees_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Employees/manage-employees/Employee */ "./src/app/Employees/manage-employees/Employee.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/manage-employees.service */ "./src/app/service/manage-employees.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_auth, _router, _employeeService, _setemployeeService, toastr, spinner) {
        this._auth = _auth;
        this._router = _router;
        this._employeeService = _employeeService;
        this._setemployeeService = _setemployeeService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.editAbout = true;
        this.editAboutIcon = 'icofont-edit';
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.rowsContact = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.User = {
            username: '',
            password: '',
            newpassword: ''
        };
        this.employee = new _Employees_manage_employees_Employee__WEBPACK_IMPORTED_MODULE_0__["Employee"]();
        this.EmpUserName = {
            UserName: ''
        };
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        var rpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].equalTo(password)]);
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: password,
            rpassword: rpassword
        });
        /*this.fetchContactData((data) => {
          this.rowsContact = data;
          setTimeout(() => { this.loadingIndicator = false; }, 1500);
        });*/
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        console.log(JSON.parse(localStorage.getItem('UserName')));
        this.isValidImage = false;
        this.getUserdetails();
        //this.updateUserdetails();
    };
    UserProfileComponent.prototype.onChange = function (files) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        // tslint:disable-next-line: prefer-const
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            this.isValidImage = false;
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
            _this.isValidImage = true;
        };
    };
    UserProfileComponent.prototype.UpdatePassword = function () {
        var _this = this;
        this.User.username = JSON.parse(localStorage.getItem('UserName'));
        console.log('token is as follows:');
        console.log(localStorage.getItem('id_token'));
        this._auth.UpdatePassword(this.User)
            .subscribe(function (data) {
            if (data.success) {
                console.log('successfully changed password');
                _this._router.navigate(['Userdetails/changepassword']);
            }
            else {
                console.log('error: ' + data.message);
            }
        });
    };
    UserProfileComponent.prototype.getUserdetails = function () {
        var _this = this;
        this.spinner.show();
        console.log('UserName -> ' + JSON.parse(localStorage.getItem('UserName')));
        this.EmpUserName.UserName = JSON.parse(localStorage.getItem('UserName'));
        this._employeeService.getEmployeeByUserName(this.EmpUserName)
            .subscribe(function (data) {
            _this.employee = data.data[0][0];
            _this.employeename = _this.employee.Name;
            console.log(_this.employee.EmailId);
            // const UserProfile = require("./routes/UserProfile/UserProfile");
            _this._router.navigate([]);
            if (data.success) {
                _this.spinner.hide();
            }
        });
    };
    UserProfileComponent.prototype.updateUserdetails = function () {
        var _this = this;
        this.spinner.show();
        console.log('update user details-' + this.employee);
        this._setemployeeService.UpdateEmployeeProfile(this.employee)
            .subscribe(function (data) {
            if (data.success) {
                _this.spinner.hide();
                _this.getUserdetails();
                _this.toastr.success('Successfully ' + 'Updated User Profile!', 'Success');
            }
            else {
                _this.spinner.hide();
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    UserProfileComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
    };
    UserProfileComponent.prototype.UpdateProfile = function () {
        // Iddetails
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/theme/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/theme/user/user-profile/user-profile.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeInOutTranslate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_8__["ManageEmployeesService"],
            src_app_service_manage_employees_service__WEBPACK_IMPORTED_MODULE_8__["ManageEmployeesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/theme/user/user-profile/user-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/user/user-profile/user-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/theme/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/theme/user/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ],
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map