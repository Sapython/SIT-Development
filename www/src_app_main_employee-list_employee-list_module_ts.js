"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_employee-list_employee-list_module_ts"],{

/***/ 23176:
/*!********************************************************************!*\
  !*** ./src/app/main/employee-list/employee-list-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeListPageRoutingModule": () => (/* binding */ EmployeeListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-list.page */ 59743);




const routes = [
    {
        path: '',
        component: _employee_list_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeListPage
    }
];
let EmployeeListPageRoutingModule = class EmployeeListPageRoutingModule {
};
EmployeeListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeListPageRoutingModule);



/***/ }),

/***/ 16670:
/*!************************************************************!*\
  !*** ./src/app/main/employee-list/employee-list.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeListPageModule": () => (/* binding */ EmployeeListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-list-routing.module */ 23176);
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list.page */ 59743);
/* harmony import */ var src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-components/base-components.module */ 47306);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);









let EmployeeListPageModule = class EmployeeListPageModule {
};
EmployeeListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__.BaseComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeListPageRoutingModule,
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule
        ],
        declarations: [_employee_list_page__WEBPACK_IMPORTED_MODULE_1__.EmployeeListPage]
    })
], EmployeeListPageModule);



/***/ }),

/***/ 59743:
/*!**********************************************************!*\
  !*** ./src/app/main/employee-list/employee-list.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeListPage": () => (/* binding */ EmployeeListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _employee_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-list.page.html?ngResource */ 95462);
/* harmony import */ var _employee_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list.page.scss?ngResource */ 69868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EmployeeListPage = class EmployeeListPage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeListPage.ctorParameters = () => [];
EmployeeListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-employee-list',
        template: _employee_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeeListPage);



/***/ }),

/***/ 69868:
/*!***********************************************************************!*\
  !*** ./src/app/main/employee-list/employee-list.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n}\n\n.container p {\n  margin-left: 5px;\n  font-weight: 600;\n  opacity: 0.7;\n}\n\n.container button {\n  display: block;\n  margin-top: 20px;\n  background-color: #6260A6;\n  color: #fff;\n  padding: 10px 50px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJlbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5jb250YWluZXIgcHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNjBBNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 95462:
/*!***********************************************************************!*\
  !*** ./src/app/main/employee-list/employee-list.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Employee list\"></app-header>\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <button>Back</button>\r\n        <p>Employee List</p>\r\n    </div>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n    <app-employee-data-widget></app-employee-data-widget>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_employee-list_employee-list_module_ts.js.map