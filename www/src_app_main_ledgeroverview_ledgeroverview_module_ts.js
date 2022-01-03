"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_ledgeroverview_ledgeroverview_module_ts"],{

/***/ 40425:
/*!**********************************************************************!*\
  !*** ./src/app/main/ledgeroverview/ledgeroverview-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedgeroverviewPageRoutingModule": () => (/* binding */ LedgeroverviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ledgeroverview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ledgeroverview.page */ 66937);




const routes = [
    {
        path: '',
        component: _ledgeroverview_page__WEBPACK_IMPORTED_MODULE_0__.LedgeroverviewPage
    }
];
let LedgeroverviewPageRoutingModule = class LedgeroverviewPageRoutingModule {
};
LedgeroverviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LedgeroverviewPageRoutingModule);



/***/ }),

/***/ 75550:
/*!**************************************************************!*\
  !*** ./src/app/main/ledgeroverview/ledgeroverview.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedgeroverviewPageModule": () => (/* binding */ LedgeroverviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ledgeroverview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ledgeroverview-routing.module */ 40425);
/* harmony import */ var _ledgeroverview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ledgeroverview.page */ 66937);
/* harmony import */ var src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-components/base-components.module */ 47306);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);









let LedgeroverviewPageModule = class LedgeroverviewPageModule {
};
LedgeroverviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__.BaseComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _ledgeroverview_routing_module__WEBPACK_IMPORTED_MODULE_0__.LedgeroverviewPageRoutingModule,
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule
        ],
        declarations: [_ledgeroverview_page__WEBPACK_IMPORTED_MODULE_1__.LedgeroverviewPage]
    })
], LedgeroverviewPageModule);



/***/ }),

/***/ 66937:
/*!************************************************************!*\
  !*** ./src/app/main/ledgeroverview/ledgeroverview.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedgeroverviewPage": () => (/* binding */ LedgeroverviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ledgeroverview_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ledgeroverview.page.html?ngResource */ 49108);
/* harmony import */ var _ledgeroverview_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ledgeroverview.page.scss?ngResource */ 34061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LedgeroverviewPage = class LedgeroverviewPage {
    constructor() { }
    ngOnInit() {
    }
};
LedgeroverviewPage.ctorParameters = () => [];
LedgeroverviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ledgeroverview',
        template: _ledgeroverview_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ledgeroverview_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LedgeroverviewPage);



/***/ }),

/***/ 34061:
/*!*************************************************************************!*\
  !*** ./src/app/main/ledgeroverview/ledgeroverview.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".container p {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n\n.container {\n  margin-left: 15px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n}\n\n.box {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  color: #f56f6f;\n  margin: 10px;\n  border: 2px solid #f56f6f;\n  border-radius: 20px;\n}\n\n.inner-box {\n  border: 2px solid #f56f6f;\n  border-radius: 20px;\n}\n\n.box p {\n  margin-left: 15px;\n}\n\n.container button {\n  display: block;\n  margin-top: 20px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 10px 50px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZGdlcm92ZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTUoiLCJmaWxlIjoibGVkZ2Vyb3ZlcnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciBwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJveHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NSwgMTExLCAxMTEpO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0NSwgMTExLCAxMTEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG59XHJcbi5pbm5lci1ib3h7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxMTEsIDExMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5ib3ggcHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 49108:
/*!*************************************************************************!*\
  !*** ./src/app/main/ledgeroverview/ledgeroverview.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Ledger Overview\"></app-header>\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <button>Back</button>\r\n        <p>Ledger Overview</p>\r\n    </div>\r\n    <div class=\"box\">\r\n        <p>Labour Ledger</p>\r\n        <div class=\"inner-box\">\r\n            <app-labour-ledger-widget></app-labour-ledger-widget>\r\n            <app-labour-ledger-widget></app-labour-ledger-widget>\r\n            <app-labour-ledger-widget></app-labour-ledger-widget>\r\n            <app-labour-ledger-widget></app-labour-ledger-widget>\r\n             \r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_ledgeroverview_ledgeroverview_module_ts.js.map