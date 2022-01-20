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
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule,
            src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__.BaseComponentsModule
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
    constructor() {
        this.items = [1, 2, 3];
        this.labourledger = [
            {
                Name: "Ramlochan",
                Lastname: "Vishwakarma",
                Code: "123XYZ0",
                Paid: 2324,
            },
            {
                Name: "Ramlochan",
                Lastname: "Vishwakarma",
                Code: "123XYZ0",
                Paid: 2324,
            },
            {
                Name: "Ramlochan",
                Lastname: "Vishwakarma",
                Code: "123XYZ0",
                Paid: 2324,
            }
        ];
        this.dalaledgers = [
            {
                driverName: "Sanjay Pandey",
                driverImage: "https://i.pravatar.cc/300",
                driverNumber: "9876543210",
                driverId: "123XYZ0",
                charge: 2324,
                ledgerNo: "1234xyz",
                coordinator: "Shubham kumar",
            },
            {
                driverName: "Sanjay Pandey",
                driverImage: "https://i.pravatar.cc/300",
                driverNumber: "9876543210",
                driverId: "123XYZ0",
                charge: 2324,
                ledgerNo: "1234xyz",
                coordinator: "Shubham kumar",
            },
            {
                driverName: "Sanjay Pandey",
                driverImage: "https://i.pravatar.cc/300",
                driverNumber: "9876543210",
                driverId: "123XYZ0",
                charge: 2324,
                ledgerNo: "1234xyz",
                coordinator: "Shubham kumar",
            }
        ];
        this.expenseledger = [
            {
                expenseName: "Transport",
                ledgerNo: "1234xyz",
                charge: 2324,
                condition: "danger",
                servicable: true,
                reason: "",
                date: "12/12/2020",
                starred: false,
            },
            {
                expenseName: "Transport",
                ledgerNo: "1234xyz",
                charge: 2324,
                condition: "danger",
                servicable: true,
                reason: "",
                date: "12/12/2020",
                starred: false,
            },
            {
                expenseName: "Transport",
                ledgerNo: "1234xyz",
                charge: 2324,
                condition: "danger",
                servicable: true,
                reason: "",
                date: "12/12/2020",
                starred: false,
            }
        ];
    }
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

module.exports = ".container p {\n  font-size: 25px;\n  color: grey;\n  margin: 15px;\n  margin-left: 0px;\n}\n\n.container {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\n.box {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  color: var(--ion-color-primary);\n  margin: 5px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-radius: 20px;\n  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(0, 0, 0, 0.05);\n  padding: 10px;\n  border: 2px solid var(--ion-color-primary);\n}\n\n.inner-box {\n  padding: 5px;\n}\n\n.box p {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-bottom: -5px;\n  font-weight: 600;\n}\n\n.box1 p {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-bottom: -5px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  font-family: \"Poppins\", sans-serif;\n}\n\n.container button {\n  display: block;\n  margin-top: 20px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 10px 50px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 15px;\n}\n\n.box1 {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZGdlcm92ZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdLQUFBO0VBSUEsYUFBQTtFQUNBLDBDQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUtKIiwiZmlsZSI6ImxlZGdlcm92ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgcHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmJveHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSksXHJcbiAgICAxNXB4IDI1cHggMTBweCByZ2JhKDAsMCwwLDAuMDUpLFxyXG4gICAgMTVweCAyMHB4IDIwcHggcmdiYSgwLDAsMCwwLjA1KSxcclxuICAgIGluc2V0IC0xMHB4IC0xMHB4IDE1cHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLmlubmVyLWJveHtcclxuICAgIHBhZGRpbmc6MDVweDtcclxufVxyXG4uYm94IHB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYm94MSBwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY29udGFpbmVyIGJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJveDF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG5cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 49108:
/*!*************************************************************************!*\
  !*** ./src/app/main/ledgeroverview/ledgeroverview.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<app-header></app-header>\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <p>Ledger Overview</p>\r\n    </div>\r\n    <div class=\"box\">\r\n        <p>Labour Ledger</p>\r\n        <div class=\"inner-box\">\r\n            <app-labour-ledger-widget\r\n            *ngFor=\"let item of labourledger\"\r\n            [Name]=\"item.Name\"\r\n            [Lastname]=\"item.Lastname\"\r\n            [Code]=\"item.Code\"\r\n            [Paid]=\"item.Paid\"></app-labour-ledger-widget>\r\n             \r\n        </div>\r\n    </div>\r\n    <div class=\"box\">\r\n        <p>Dala Ledger</p>\r\n        <div class=\"inner-box\">\r\n            <app-dala-widget\r\n            *ngFor=\"let item of dalaledgers\"\r\n            [driverName]=\"item.driverName\"\r\n            [driverNumber]=\"item.driverNumber\"\r\n            [driverImage]=\"item.driverImage\"\r\n            [driverId]=\"item.driverId\"\r\n            [charge]=\"item.charge\"\r\n            [ledgerNo]=\"item.ledgerNo\"\r\n            [coordinator]=\"item.coordinator\">\r\n        </app-dala-widget>\r\n        </div>\r\n    </div>\r\n    <div class=\"box\">\r\n        <p>Expense Ledger</p>\r\n        <div class=\"inner-box\">\r\n            <app-expense-ledger\r\n            *ngFor=\"let item of expenseledger\"\r\n            [ledgerNo]=\"item.ledgerNo\"\r\n            [charge]=\"item.charge\"\r\n            [expenseName]=\"item.expenseName\"\r\n            [condition]=\"item.condition\"\r\n            [servicable]=\"item.servicable\"\r\n            [reason]=\"item.reason\"\r\n            [date]=\"item.date\"\r\n            [starred]=\"item.starred\">\r\n        </app-expense-ledger>\r\n             \r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_ledgeroverview_ledgeroverview_module_ts.js.map