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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-list-routing.module */ 23176);
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list.page */ 59743);
/* harmony import */ var src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-components/base-components.module */ 47306);








let EmployeeListPageModule = class EmployeeListPageModule {
};
EmployeeListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__.BaseComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeListPageRoutingModule
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 95462:
/*!***********************************************************************!*\
  !*** ./src/app/main/employee-list/employee-list.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Employee list\"></app-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_employee-list_employee-list_module_ts.js.map