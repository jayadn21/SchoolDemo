(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["STUDENTS-admission-ticket-admission-ticket-module"],{

/***/ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js ***!
  \********************************************************************************/
/*! exports provided: EditorComponent, EditorModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getTinymce = function () {
    var w = typeof window !== 'undefined' ? window : undefined;
    return w && w.tinymce ? w.tinymce : null;
};

var Events = /** @class */ (function () {
    function Events() {
        this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBeforePaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onCopy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onCut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDblclick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDragDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDragGesture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDragOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onFocusIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onFocusOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onKeyPress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onKeyUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseEnter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseLeave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onActivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBeforeAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBeforeExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBeforeGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBeforeRenderUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onBeforeSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onClearUndos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDeactivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onDirty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onLoadContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onNodeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onPostProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onPostRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onPreInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onPreProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onProgressState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onRedo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onReset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onSaveContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onSetAttrib", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onObjectResizeStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onObjectResized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onObjectSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Events.prototype, "onVisualAid", void 0);
    return Events;
}());
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var bindHandlers = function (ctx, editor, initEvent) {
    validEvents.forEach(function (eventName) {
        var eventEmitter = ctx[eventName];
        if (eventName === 'onInit') {
            ctx.ngZone.run(function () { return eventEmitter.emit({ event: initEvent, editor: editor }); });
        }
        else {
            editor.on(eventName.substring(2), function (event) { return ctx.ngZone.run(function () { return eventEmitter.emit({ event: event, editor: editor }); }); });
        }
    });
};
var unique = 0;
var uuid = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
// tslint:disable-next-line:no-empty
var noop = function () { };

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var injectScriptTag = function (scriptId, doc, url, callback) {
    var scriptTag = doc.createElement('script');
    scriptTag.referrerPolicy = 'origin';
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};

var scriptState = create();
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorComponent, _super);
    function EditorComponent(elementRef, ngZone, platformId) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.cloudChannel = '5';
        _this.apiKey = 'no-api-key';
        _this.id = '';
        _this.toolbar = null;
        _this._element = undefined;
        _this.onTouchedCallback = noop;
        _this.onChangeCallback = noop;
        _this._elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    Object.defineProperty(EditorComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = val;
            if (this._editor && this._editor.initialized) {
                this._editor.setMode(val ? 'readonly' : 'design');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "editor", {
        get: function () {
            return this._editor;
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent.prototype.writeValue = function (value) {
        this.initialValue = value || this.initialValue;
        value = value || '';
        if (this._editor && this._editor.initialized && typeof value === 'string') {
            this._editor.setContent(value);
        }
    };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    EditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (this._editor) {
            this._editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.init, { readonly: true });
        }
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline =
                typeof this.inline !== 'undefined' ? (typeof this.inline === 'boolean' ? this.inline : true) : this.init && this.init.inline;
            this.createElement();
            if (getTinymce() !== null) {
                this.initialise();
            }
            else if (this._element && this._element.ownerDocument) {
                var doc = this._element.ownerDocument;
                var channel = this.cloudChannel;
                var apiKey = this.apiKey;
                load(scriptState, doc, "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js", this.initialise);
            }
        }
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
        }
    };
    EditorComponent.prototype.createElement = function () {
        var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this._element = document.createElement(this.inline ? tagName : 'textarea');
        if (this._element) {
            this._element.id = this.id;
            if (isTextarea(this._element)) {
                this._element.style.visibility = 'hidden';
            }
            this._elementRef.nativeElement.appendChild(this._element);
        }
    };
    EditorComponent.prototype.initialise = function () {
        var _this = this;
        var finalInit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.init, { target: this._element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), setup: function (editor) {
                _this._editor = editor;
                editor.on('init', function (e) {
                    _this.initEditor(e, editor);
                });
                if (_this.init && typeof _this.init.setup === 'function') {
                    _this.init.setup(editor);
                }
            } });
        if (isTextarea(this._element)) {
            this._element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    EditorComponent.prototype.initEditor = function (initEvent, editor) {
        var _this = this;
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
        }
        editor.on('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on('change keyup undo redo', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent()); }); });
        bindHandlers(this, editor, initEvent);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], EditorComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "cloudChannel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "apiKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "init", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditorComponent.prototype, "initialValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], EditorComponent.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditorComponent.prototype, "tagName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditorComponent.prototype, "plugins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "toolbar", void 0);
    EditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'editor',
            template: '<ng-template></ng-template>',
            providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
            styles: [':host { display: block; }']
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])
    ], EditorComponent);
    return EditorComponent;
}(Events));

var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [EditorComponent],
            exports: [EditorComponent]
        })
    ], EditorModule);
    return EditorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=tinymce-tinymce-angular.js.map


/***/ }),

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

/***/ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/STUDENTS/admission-ticket/admission-ticket.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card>\r\n      <div style=\"text-align: center\">\r\n        <h5>{{Headingtext}}</h5>\r\n        <hr>\r\n        <table>\r\n          <thead>\r\n            <th>Select Class</th>\r\n            <th>To Apply</th>\r\n          </thead>\r\n          &nbsp;\r\n          <tbody>\r\n            <tr *ngFor=\"let assign of newclasssection\">\r\n              <td>{{assign.Name}}</td>\r\n              <td>\r\n                <ui-switch color=\"#4680ff\" switchColor=\"#fff\" size=\"small\" [(ngModel)]=\"assign.IsSelected\"\r\n                  #Name=\"ngModel\" required></ui-switch>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div id=\"log\"></div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"browser-default custom-select\">\r\n              <option value=\"-1\" disabled='true'> Choose Subject Combination </option>\r\n              <option *ngFor=\"let assess of subjectCombination\" value={{assess.Id}}>{{assess.Name}} </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Admission Ticket Header\"\r\n              [(ngModel)]=\"Admissionticket.Name\" #Name=\"ngModel\" required>\r\n            <span class=\"md-line\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"SSchool or College Code\"\r\n              [(ngModel)]=\"Admissionticket.Name\" #Name=\"ngModel\" required>\r\n            <span class=\"md-line\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Register Number Prefix\"\r\n              [(ngModel)]=\"Admissionticket.Name\" #Name=\"ngModel\" required>\r\n            <span class=\"md-line\"></span>\r\n          </div>\r\n        </div>\r\n        <div style=\"text-align: left\">\r\n          <div class=\"mt-3\">\r\n            <b>Admission ticket Content</b>\r\n          </div>\r\n        </div> <br>\r\n        <editor apiKey=\"aqnihi31vj0w8obre7mxp3qy9v2zflzyteud5dpst69tcq7w\" initialValue=\"<p>This is the initial content of the editor</p>\" [init]=\"{ height: 500,\r\n       menubar: false,\r\n       plugins: [\r\n         'advlist autolink lists link image charmap print preview anchor',\r\n         'searchreplace visualblocks code fullscreen',\r\n         'insertdatetime media table paste code help wordcount'\r\n       ],\r\n       toolbar:\r\n         'undo redo | formatselect | bold italic backcolor | \\\r\n         alignleft aligncenter alignright alignjustify | \\\r\n         bullist numlist outdent indent | removeformat | help'\r\n     }\">\r\n        </editor>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveAdmissionTicket\" (click)=\"saveAdmissionTicket()\"\r\n          type=\"submit\">Submit</button>\r\n        &nbsp; &nbsp;&nbsp; &nbsp;\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n  <app-card title=\"AdmissionTicketHeader\">\r\n    <div class=\"mt-3\">\r\n      <h5> Admission Ticket Header </h5>\r\n      <hr>\r\n    </div>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"admissionTicket\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"onCustomAction($event)\">\r\n    </ng2-smart-table>\r\n  </app-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/STUDENTS/admission-ticket/admission-ticket.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/STUDENTS/admission-ticket/admission-ticket.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdmissionTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionTicketComponent", function() { return AdmissionTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_subject_combination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/subject-combination.service */ "./src/app/service/subject-combination.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Models_classsection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Models/classsection */ "./src/app/shared/Models/classsection.ts");
/* harmony import */ var src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/classsection.service */ "./src/app/service/classsection.service.ts");
/* harmony import */ var src_app_service_admission_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/admission-ticket.service */ "./src/app/service/admission-ticket.service.ts");
/* harmony import */ var src_app_shared_Models_AdmissionTicket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Models/AdmissionTicket */ "./src/app/shared/Models/AdmissionTicket.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdmissionTicketComponent = /** @class */ (function () {
    function AdmissionTicketComponent(spinner, toastr, _Combination, _ClassSectionMedium, admissionticketAPI) {
        this.spinner = spinner;
        this.toastr = toastr;
        this._Combination = _Combination;
        this._ClassSectionMedium = _ClassSectionMedium;
        this.admissionticketAPI = admissionticketAPI;
        this.Buttontext = 'Submit';
        this.Headingtext = 'Admission Ticket Setting';
        this.subjectCombination = Array();
        this.newclasssection = Array();
        this.newClasssection = new src_app_shared_Models_classsection__WEBPACK_IMPORTED_MODULE_4__["Classsection"]();
        this.admissionTicket = Array();
        this.Admissionticket = new src_app_shared_Models_AdmissionTicket__WEBPACK_IMPORTED_MODULE_7__["AdmissionTicket"]();
        this.arr1 = [
            { Id: 1, Name: 'newClasssection', ModuleId: 0, checked: false },
        ];
        // tslint:disable-next-line: member-ordering
        this.settings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa fa-trash"></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            add: {
                confirmCreate: true,
            },
            actions: {
                add: false,
                edit: false,
                delete: true,
                custom: [
                    { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
                ],
            },
            columns: {
                Id: {
                    title: 'Id',
                },
                Name: {
                    title: 'Name',
                },
            },
        };
    }
    AdmissionTicketComponent.prototype.ngOnInit = function () {
        this.getsubjectCombinations();
        this.getclassSectionMedium();
        this.getAdmissionTickets();
    };
    AdmissionTicketComponent.prototype.getsubjectCombinations = function () {
        var _this = this;
        this._Combination.getsubjectCombinations()
            .subscribe(function (data) {
            if (data.success) {
                _this.subjectCombination = data.data[0];
            }
        });
    };
    AdmissionTicketComponent.prototype.getclassSectionMedium = function () {
        var _this = this;
        this._ClassSectionMedium.getClasssectionDetails()
            .subscribe(function (data) {
            if (data.success) {
                _this.newclasssection = data.data[0];
            }
        });
    };
    AdmissionTicketComponent.prototype.getAdmissionTickets = function () {
        var _this = this;
        this.spinner.show();
        this.admissionticketAPI.getAdmissiontickets()
            .subscribe(function (data) {
            if (data.success) {
                _this.admissionTicket = data.data[0];
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    AdmissionTicketComponent.prototype.saveAdmissionTicket = function () {
        var _this = this;
        this.spinner.show();
        this.admissionticketAPI.setAdmissionTicket(this.Admissionticket)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('successfully' + _this.Headingtext + '!', 'Success');
                _this.getAdmissionTickets();
                _this.cleardata();
            }
            else {
                _this.toastr.error(data.message, 'server error!!');
            }
            _this.spinner.hide();
        });
    };
    AdmissionTicketComponent.prototype.updateAssessment = function () {
        var _this = this;
        this.spinner.show();
        this.Buttontext = 'Update';
        this.admissionticketAPI.setAdmissionTicket(this.Admissionticket)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully ' + 'Updated AssessmentHead', 'Success');
                _this.spinner.hide();
            }
            else {
                _this.toastr.error(data.message, 'Opps!');
            }
        });
    };
    AdmissionTicketComponent.prototype.cleardata = function () {
        this.Admissionticket = new src_app_shared_Models_AdmissionTicket__WEBPACK_IMPORTED_MODULE_7__["AdmissionTicket"];
    };
    AdmissionTicketComponent.prototype.onCustomAction = function (event) {
        console.log(event.data);
        if (event.action === 'editrecord') {
            this.Admissionticket = event.data;
            this.Buttontext = 'Update';
            this.Headingtext = 'Update Admission Ticket';
        }
    };
    AdmissionTicketComponent.prototype.onDeleteConfirm = function (event) {
        console.log('Delete Event In Console');
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AdmissionTicketComponent.prototype.onCreateConfirm = function (event) {
        console.log('Create Event In Console');
        console.log(event);
    };
    AdmissionTicketComponent.prototype.onSaveConfirm = function (event) {
        console.log('Edit Event In Console');
        console.log(event);
    };
    AdmissionTicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admission-ticket',
            template: __webpack_require__(/*! ./admission-ticket.component.html */ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.html"),
            styles: [__webpack_require__(/*! ./admission-ticket.component.scss */ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], src_app_service_subject_combination_service__WEBPACK_IMPORTED_MODULE_1__["SubjectCombinationService"],
            src_app_service_classsection_service__WEBPACK_IMPORTED_MODULE_5__["ClasssectionService"], src_app_service_admission_ticket_service__WEBPACK_IMPORTED_MODULE_6__["AdmissionTicketService"]])
    ], AdmissionTicketComponent);
    return AdmissionTicketComponent;
}());



/***/ }),

/***/ "./src/app/STUDENTS/admission-ticket/admission-ticket.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/STUDENTS/admission-ticket/admission-ticket.module.ts ***!
  \**********************************************************************/
/*! exports provided: AdmissionTicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionTicketModule", function() { return AdmissionTicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admission_ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admission-ticket.component */ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.ts");
/* harmony import */ var _admission_ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admission-ticket.routing.module */ "./src/app/STUDENTS/admission-ticket/admission-ticket.routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ui-switch */ "./node_modules/ng2-ui-switch/dist/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdmissionTicketModule = /** @class */ (function () {
    function AdmissionTicketModule() {
    }
    AdmissionTicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admission_ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdmissionTicketRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng2_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]
            ],
            declarations: [_admission_ticket_component__WEBPACK_IMPORTED_MODULE_2__["AdmissionTicketComponent"]]
        })
    ], AdmissionTicketModule);
    return AdmissionTicketModule;
}());



/***/ }),

/***/ "./src/app/STUDENTS/admission-ticket/admission-ticket.routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/STUDENTS/admission-ticket/admission-ticket.routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AdmissionTicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionTicketRoutingModule", function() { return AdmissionTicketRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admission_ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admission-ticket.component */ "./src/app/STUDENTS/admission-ticket/admission-ticket.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _admission_ticket_component__WEBPACK_IMPORTED_MODULE_2__["AdmissionTicketComponent"],
        data: {
            title: 'Admission Enquiry',
            status: true
        },
    },
];
var AdmissionTicketRoutingModule = /** @class */ (function () {
    function AdmissionTicketRoutingModule() {
    }
    AdmissionTicketRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdmissionTicketRoutingModule);
    return AdmissionTicketRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/admission-ticket.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/admission-ticket.service.ts ***!
  \*****************************************************/
/*! exports provided: AdmissionTicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionTicketService", function() { return AdmissionTicketService; });
/* harmony import */ var _ServiceUitility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceUitility */ "./src/app/service/ServiceUitility.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmissionTicketService = /** @class */ (function () {
    function AdmissionTicketService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/AdmissionTicket';
        this._getAdmissionTickets = this.route + '/getAdmissionTickets';
        this._getAdmissionTicket = this.route + '/getAsgetAdmissionTicketsessmentHead';
        this._setAdmissionTicket = this.route + '/setAdmissionTicket';
        this._delAdmissionTicket = this.route + '/delAdmissionTicket';
    }
    AdmissionTicketService.prototype.getAdmissiontickets = function () {
        return this.serviceUitility.postRequest(this._getAdmissionTickets, '');
    };
    AdmissionTicketService.prototype.getAdmissionTicket = function () {
        return this.serviceUitility.postRequest(this._getAdmissionTicket, '');
    };
    AdmissionTicketService.prototype.setAdmissionTicket = function (obj) {
        return this.serviceUitility.postRequest(this._setAdmissionTicket, obj);
    };
    AdmissionTicketService.prototype.delAdmissionTicket = function (obj) {
        return this.serviceUitility.postRequest(this._delAdmissionTicket, obj);
    };
    AdmissionTicketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_0__["ServiceUitility"]])
    ], AdmissionTicketService);
    return AdmissionTicketService;
}());



/***/ }),

/***/ "./src/app/service/classsection.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/classsection.service.ts ***!
  \*************************************************/
/*! exports provided: ClasssectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasssectionService", function() { return ClasssectionService; });
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


var ClasssectionService = /** @class */ (function () {
    function ClasssectionService(serviceUitility) {
        this.serviceUitility = serviceUitility;
        this.route = '/ClassSectionMedium';
        this._getClasssection = this.route + '/getClassSectionMediums';
        this._setClasssection = this.route + '/setClassSectionMedium';
    }
    ClasssectionService.prototype.getClasssectionDetails = function () {
        return this.serviceUitility.postRequest(this._getClasssection, '');
    };
    ClasssectionService.prototype.setClasssectionDetails = function (obj) {
        return this.serviceUitility.postRequest(this._setClasssection, obj);
    };
    ClasssectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ServiceUitility__WEBPACK_IMPORTED_MODULE_1__["ServiceUitility"]])
    ], ClasssectionService);
    return ClasssectionService;
}());



/***/ }),

/***/ "./src/app/shared/Models/AdmissionTicket.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/Models/AdmissionTicket.ts ***!
  \**************************************************/
/*! exports provided: AdmissionTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionTicket", function() { return AdmissionTicket; });
var AdmissionTicket = /** @class */ (function () {
    function AdmissionTicket() {
        this.Id = -1;
    }
    return AdmissionTicket;
}());



/***/ })

}]);
//# sourceMappingURL=STUDENTS-admission-ticket-admission-ticket-module.js.map