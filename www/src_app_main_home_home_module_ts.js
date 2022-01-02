"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_home_home_module_ts"],{

/***/ 80171:
/*!**************************************************!*\
  !*** ./src/app/main/home/home-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 87835);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 81762:
/*!******************************************!*\
  !*** ./src/app/main/home/home.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 80171);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 87835);
/* harmony import */ var src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-components/base-components.module */ 47306);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 44195);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule,
            src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__.BaseComponentsModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 87835:
/*!****************************************!*\
  !*** ./src/app/main/home/home.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 93444);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 96405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomePage = class HomePage {
    constructor() {
        this.displayName = "John Doe";
        this.pending = 12;
        this.recieved = 5;
        this.unloaded = 20;
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = {
            labels: this.doughnutChartLabels,
            datasets: [
                { data: [this.pending, this.recieved, this.unloaded] },
            ]
        };
        this.doughnutChartType = 'doughnut';
        this.items = [1, 2, 3];
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 96405:
/*!*****************************************************!*\
  !*** ./src/app/main/home/home.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "aside {\n  position: fixed;\n  width: 100vw;\n  height: 45vh;\n  background-color: white;\n  padding: 20px;\n}\naside #topNav {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  justify-content: space-between;\n}\naside #topNav button {\n  border: 2px solid cornflowerblue;\n  background-color: transparent;\n  color: cornflowerblue;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 5px 5px 20px 10px rgba(55, 56, 58, 0.096);\n}\naside #topNav .greetings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n}\naside #topNav .greetings .greet {\n  font-size: 25px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\naside #topNav .greetings .username {\n  font-size: 20px;\n  color: grey;\n}\naside #topNav .greetings p {\n  margin: 0px;\n}\naside #topNav .greetings app-user-image {\n  border-radius: 50%;\n  margin-top: 10px;\n  box-shadow: 0px 0px 10px -5px rgba(50, 50, 50, 0.4);\n}\naside #card {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  width: 80vw;\n  border: 3px solid cornflowerblue;\n  height: 150px;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 5.3px 4.1px 3.8px -14px rgba(100, 148, 237, 0.045), 14.8px 11.4px 10.4px -14px rgba(100, 148, 237, 0.065), 35.6px 27.4px 25px -14px rgba(100, 148, 237, 0.085), 118px 91px 83px -14px rgba(100, 148, 237, 0.13);\n}\naside #card .chart {\n  height: 100px;\n  width: 100px;\n}\naside #card div .head {\n  margin: 0px;\n  padding: 0px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\naside #card div table > tr > td:nth-child(1) {\n  color: grey;\n  font-weight: 500;\n}\naside #card div table > tr > td:nth-child(2) {\n  margin: 10px;\n  color: grey;\n  font-weight: 500;\n  text-align: end;\n}\nmain {\n  margin-top: 45vh;\n  background-color: var(--ion-background-color);\n  border-radius: 15px;\n  width: 100vw;\n  height: 200vh;\n  padding: 20px;\n  position: sticky;\n  box-shadow: 0px -15px 10px 5px rgba(0, 0, 0, 0.1);\n}\nmain .buttonLinks {\n  display: flex;\n  flex-direction: row;\n  width: 600px;\n  overflow: auto;\n  padding-bottom: 10px;\n  white-space: nowrap;\n}\nmain .buttonLinks button {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  font-size: 20px;\n  margin-left: 20px;\n  padding: 5px;\n  border-radius: 15px;\n  color: #7595ff;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n}\nmain .buttonLinks button:nth-child(1) {\n  margin-left: 0px;\n}\nmain .title {\n  font-size: 25px;\n  font-weight: 600;\n  color: #323b55;\n}\nmain .quickLinks {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nmain .quickLinks .linkCard {\n  width: auto;\n  padding: 20px;\n  height: 250px;\n  border-radius: 20px;\n  background-color: #86c7f36c;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nmain .quickLinks .linkCard div p {\n  font-size: 20px;\n  margin: 0px;\n  font-weight: 600;\n  color: #323b55;\n}\nmain .quickLinks .linkCard img {\n  width: auto;\n  height: auto;\n  position: relative;\n  bottom: 0px;\n}\nmain .text-1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUVKO0FBREk7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUdOO0FBRk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSVI7QUFGTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBSVI7QUFGTTtFQUNFLFdBQUE7QUFJUjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0FBSVI7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJOQUFBO0FBRUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQVI7QUFHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRFo7QUFHVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQURaO0FBR1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURaO0FBTUE7RUFDRSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBSEY7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBR0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FBRE47QUFHSTtFQUNFLGdCQUFBO0FBRE47QUFJRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQUZKO0FBR0k7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFGUjtBQUtZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIaEI7QUFNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFTRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFzaWRlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogNDV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gICN0b3BOYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMTBweCByZ2JhKDU1LCA1NiwgNTgsIDAuMDk2KTtcclxuICAgIH1cclxuICAgIC5ncmVldGluZ3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAuZ3JlZXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgYXBwLXVzZXItaW1hZ2Uge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAtNXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAjY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNS4zcHggNC4xcHggMy44cHggLTE0cHggcmdiYSgxMDAsIDE0OCwgMjM3LCAwLjA0NSksXHJcbiAgICAgIDE0LjhweCAxMS40cHggMTAuNHB4IC0xNHB4IHJnYmEoMTAwLCAxNDgsIDIzNywgMC4wNjUpLFxyXG4gICAgICAzNS42cHggMjcuNHB4IDI1cHggLTE0cHggcmdiYSgxMDAsIDE0OCwgMjM3LCAwLjA4NSksXHJcbiAgICAgIDExOHB4IDkxcHggODNweCAtMTRweCByZ2JhKDEwMCwgMTQ4LCAyMzcsIDAuMTMpO1xyXG4gICAgLmNoYXJ0e1xyXG4gICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgLmhlYWQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZSA+IHRyID4gdGQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZSA+IHRyID4gdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA0NXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDIwMHZoO1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMTVweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLmJ1dHRvbkxpbmtze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDo2MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBjb2xvcjojNzU5NWZmO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLDAuMik7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDEpe1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgIGNvbG9yOnJnYig1MCwgNTksIDg1KTtcclxuICB9XHJcbiAgLnF1aWNrTGlua3N7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgcm93LWdhcDogMTBweDtcclxuICAgIC5saW5rQ2FyZHtcclxuICAgICAgICAvLyBtYXJnaW46MTBweDtcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Izg2YzdmMzZjO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoNTAsIDU5LCA4NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgLy8gb2JqZWN0LWZpdDpjb250YWluO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LTF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5jb250YWluZXJ7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4vLyB9XHJcbi8vIC5jb250YWluZXIgYnV0dG9ue1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFDMzZGO1xyXG4vLyAgICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuLy8gLmNvbnRhaW5lciBwe1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gfVxyXG4vLyAudGV4dC0xe1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyB9XHJcbi8vIC5wZW5kaW5ne1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbi8vICAgICBtYXJnaW46IDNweDtcclxuLy8gICAgIHBhZGRpbmc6MDVweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuLy8gfVxyXG4vLyAucGVuZGluZyBoMntcclxuLy8gICAgIG1hcmdpbi10b3A6IDBweDtcclxuLy8gfVxyXG4vLyAuYm94e1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4O1xyXG4vLyB9XHJcbi8vIC5idXR0b24tMjJ7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0QTZBO1xyXG4vLyAgICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4vLyB9XHJcbiJdfQ== */";

/***/ }),

/***/ 93444:
/*!*****************************************************!*\
  !*** ./src/app/main/home/home.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-header title=\"Home\"></app-header> -->\r\n\r\n<ion-content>\r\n    <aside>\r\n        <div id=\"topNav\">\r\n            <button>\r\n                <ion-icon name=\"notifications-outline\"></ion-icon>\r\n            </button>\r\n            <div class=\"greetings\">\r\n                <p class=\"greet\">Welcome</p>\r\n                <p class=\"username\">\r\n                    {{displayName}}\r\n                </p>\r\n                <app-user-image></app-user-image>\r\n            </div>\r\n        </div>\r\n        <div id=\"card\">\r\n            <div>\r\n                <p class=\"head\">Summary</p>\r\n                <table>\r\n                    <tr>\r\n                        <td>Pending</td>\r\n                        <td style=\"color:rgb(255, 107, 107)\">&nbsp;&nbsp;&nbsp;&nbsp;{{pending}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Recieved</td>\r\n                        <td style=\"color:rgb(107, 201, 255)\">&nbsp;&nbsp;&nbsp;&nbsp;{{recieved}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Unloaded</td>\r\n                        <td style=\"color:rgb(61, 194, 94)\">&nbsp;&nbsp;&nbsp;&nbsp;{{unloaded}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div style=\"display: block\" class=\"chart\">\r\n                <canvas baseChart\r\n                  [data]=\"doughnutChartData\"\r\n                  [legend]=\"false\"\r\n                  [type]=\"doughnutChartType\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </aside>\r\n    <main>\r\n        <div class=\"buttonLinks\">\r\n            <button>\r\n                <ion-icon name=\"person-add\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"bug\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"bar-chart\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"people\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"document-text\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"sync-circle\"></ion-icon>\r\n            </button>\r\n        </div>\r\n        <p class=\"title\">Dashboard</p>\r\n        <div class=\"quickLinks\">\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Employee</p>\r\n                    <p>List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/employeeList.svg\" alt=\"Employee working\">\r\n            </div>\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Pending</p>\r\n                    <p>Ledger List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/pendingLedger.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Recieved</p>\r\n                    <p>Ledger List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/recievedLedger.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Driver</p>\r\n                    <p>List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/driver.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <p class=\"text-1\">Recently Opened</p>\r\n        <div class=\"groupCard\">\r\n            <app-employee-data-widget></app-employee-data-widget>\r\n        </div>\r\n        <!-- <div class=\"box\">\r\n            <app-employee-data-widget></app-employee-data-widget>\r\n        </div> -->\r\n        <!-- <div class=\"pending\">\r\n            <p style=\"color: #F57171;margin-left: 10px;font-size:20px;font-weight: bold;\">Pending</p>\r\n            <app-product-ledger-widget></app-product-ledger-widget>\r\n            <button class=\"button-22\">See All Pending Events</button>\r\n    \r\n        </div>\r\n        <div class=\"pending\">\r\n            <p style=\"color: var(--ion-color-warning);margin-left: 10px;font-size:20px;font-weight: bold;\">Recieved</p>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <button class=\"button-22\">See All Pending Events</button>\r\n    \r\n        </div>\r\n        <div class=\"pending\">\r\n            <p style=\"color:#23C258; margin-left: 10px;font-size:20px;font-weight: bold;\">Unloaded</p>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <button class=\"button-22\">See All Pending Events</button>\r\n    \r\n        </div>      -->\r\n    </main>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_home_home_module_ts.js.map