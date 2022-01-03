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

module.exports = "aside {\n  position: fixed;\n  width: 100vw;\n  height: 45vh;\n  background-color: white;\n  padding: 20px;\n}\naside #topNav {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  justify-content: space-between;\n}\naside #topNav button {\n  border: 2px solid cornflowerblue;\n  background-color: transparent;\n  color: cornflowerblue;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 5px 5px 20px 10px rgba(55, 56, 58, 0.096);\n}\naside #topNav .greetings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n}\naside #topNav .greetings .greet {\n  font-size: 25px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\naside #topNav .greetings .username {\n  font-size: 20px;\n  color: grey;\n}\naside #topNav .greetings p {\n  margin: 0px;\n}\naside #topNav .greetings app-user-image {\n  border-radius: 50%;\n  margin-top: 10px;\n  box-shadow: 0px 0px 10px -5px rgba(50, 50, 50, 0.4);\n}\naside #card {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  width: 80vw;\n  border: 3px solid cornflowerblue;\n  height: 150px;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 5.3px 4.1px 3.8px -14px rgba(100, 148, 237, 0.045), 14.8px 11.4px 10.4px -14px rgba(100, 148, 237, 0.065), 35.6px 27.4px 25px -14px rgba(100, 148, 237, 0.085), 118px 91px 83px -14px rgba(100, 148, 237, 0.13);\n}\naside #card .chart {\n  height: 100px;\n  width: 100px;\n}\naside #card div .head {\n  margin: 0px;\n  padding: 0px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\naside #card div table > tr > td:nth-child(1) {\n  color: grey;\n  font-weight: 500;\n}\naside #card div table > tr > td:nth-child(2) {\n  margin: 10px;\n  color: grey;\n  font-weight: 500;\n  text-align: end;\n}\nmain {\n  margin-top: 350px;\n  background-color: var(--ion-background-color);\n  border-radius: 15px;\n  width: 100vw;\n  height: 200vh;\n  padding: 20px;\n  position: sticky;\n  box-shadow: 0px -15px 10px 5px rgba(0, 0, 0, 0.1);\n}\nmain .buttonLinks {\n  display: flex;\n  flex-direction: row;\n  width: auto;\n  overflow: scroll;\n  margin: -10px;\n  margin-left: -15px;\n  margin-right: -15px;\n  padding-bottom: 10px;\n  white-space: nowrap;\n}\nmain .buttonLinks button {\n  display: inline-block;\n  min-width: 50px;\n  min-height: 50px;\n  font-size: 20px;\n  margin-left: 20px;\n  padding: 5px;\n  border-radius: 15px;\n  color: #7595ff;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n}\nmain .buttonLinks button:nth-child(1) {\n  margin-left: 5px;\n}\nmain .buttonLinks button:nth-child(6) {\n  margin-right: 5px;\n}\nmain .title {\n  font-size: 25px;\n  font-weight: 600;\n  color: #323b55;\n}\nmain .quickLinks {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nmain .quickLinks .linkCard {\n  width: auto;\n  padding: 20px;\n  height: 250px;\n  border-radius: 20px;\n  background-color: #86c7f36c;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nmain .quickLinks .linkCard div p {\n  font-size: 20px;\n  margin: 0px;\n  font-weight: 600;\n  color: #323b55;\n}\nmain .quickLinks .linkCard img {\n  width: auto;\n  height: auto;\n  position: relative;\n  bottom: 0px;\n}\nmain .text-1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUVKO0FBREk7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUdOO0FBRk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSVI7QUFGTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBSVI7QUFGTTtFQUNFLFdBQUE7QUFJUjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0FBSVI7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJOQUFBO0FBRUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQVI7QUFHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRFo7QUFHVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQURaO0FBR1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURaO0FBTUE7RUFDRSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBSEY7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBR0k7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQUROO0FBR0k7RUFDRSxnQkFBQTtBQUROO0FBR0k7RUFDRSxpQkFBQTtBQUROO0FBSUU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRk47QUFJRTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFGSjtBQUdJO0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSGhCO0FBTVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtBQUxaO0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhc2lkZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDQ1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAjdG9wTmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDEwcHggcmdiYSg1NSwgNTYsIDU4LCAwLjA5Nik7XHJcbiAgICB9XHJcbiAgICAuZ3JlZXRpbmdzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgLmdyZWV0IHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGFwcC11c2VyLWltYWdlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTVweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgI2NhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDUuM3B4IDQuMXB4IDMuOHB4IC0xNHB4IHJnYmEoMTAwLCAxNDgsIDIzNywgMC4wNDUpLFxyXG4gICAgICAxNC44cHggMTEuNHB4IDEwLjRweCAtMTRweCByZ2JhKDEwMCwgMTQ4LCAyMzcsIDAuMDY1KSxcclxuICAgICAgMzUuNnB4IDI3LjRweCAyNXB4IC0xNHB4IHJnYmEoMTAwLCAxNDgsIDIzNywgMC4wODUpLFxyXG4gICAgICAxMThweCA5MXB4IDgzcHggLTE0cHggcmdiYSgxMDAsIDE0OCwgMjM3LCAwLjEzKTtcclxuICAgIC5jaGFydHtcclxuICAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIC5oZWFkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGUgPiB0ciA+IHRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGUgPiB0ciA+IHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMjAwdmg7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xNXB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAuYnV0dG9uTGlua3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgbWFyZ2luOi0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJ1dHRvbntcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtaW4td2lkdGg6NTBweDtcclxuICAgICAgbWluLWhlaWdodDo1MHB4O1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBjb2xvcjojNzU5NWZmO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLDAuMik7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDEpe1xyXG4gICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDYpe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICBjb2xvcjpyZ2IoNTAsIDU5LCA4NSk7XHJcbiAgfVxyXG4gIC5xdWlja0xpbmtze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAubGlua0NhcmR7XHJcbiAgICAgICAgLy8gbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4NmM3ZjM2YztcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiKDUwLCA1OSwgODUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgIC8vIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGV4dC0xe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAuY29udGFpbmVye1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuLy8gfVxyXG4vLyAuY29udGFpbmVyIGJ1dHRvbntcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxQzM2RjtcclxuLy8gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcbi8vIC5jb250YWluZXIgcHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDI1cHg7XHJcbi8vIH1cclxuLy8gLnRleHQtMXtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gfVxyXG4vLyAucGVuZGluZ3tcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4vLyAgICAgbWFyZ2luOiAzcHg7XHJcbi8vICAgICBwYWRkaW5nOjA1cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbi8vIH1cclxuLy8gLnBlbmRpbmcgaDJ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbi8vIH1cclxuLy8gLmJveHtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gfVxyXG4vLyAuYnV0dG9uLTIye1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NEE2QTtcclxuLy8gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG4iXX0= */";

/***/ }),

/***/ 93444:
/*!*****************************************************!*\
  !*** ./src/app/main/home/home.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-header title=\"Home\"></app-header> -->\r\n\r\n<ion-content>\r\n    <aside>\r\n        <div id=\"topNav\">\r\n            <button>\r\n                <ion-icon name=\"notifications-outline\"></ion-icon>\r\n            </button>\r\n            <div class=\"greetings\">\r\n                <p class=\"greet\">Welcome</p>\r\n                <p class=\"username\">\r\n                    {{displayName}}\r\n                </p>\r\n                <app-user-image></app-user-image>\r\n            </div>\r\n        </div>\r\n        <div id=\"card\">\r\n            <div>\r\n                <p class=\"head\">Summary</p>\r\n                <table>\r\n                    <tr>\r\n                        <td>Pending</td>\r\n                        <td style=\"color:rgb(255, 107, 107)\">&nbsp;&nbsp;&nbsp;&nbsp;{{pending}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Recieved</td>\r\n                        <td style=\"color:rgb(107, 201, 255)\">&nbsp;&nbsp;&nbsp;&nbsp;{{recieved}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Unloaded</td>\r\n                        <td style=\"color:rgb(61, 194, 94)\">&nbsp;&nbsp;&nbsp;&nbsp;{{unloaded}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div style=\"display: block\" class=\"chart\">\r\n                <canvas baseChart\r\n                  [data]=\"doughnutChartData\"\r\n                  [legend]=\"false\"\r\n                  [type]=\"doughnutChartType\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </aside>\r\n    <main>\r\n        <div class=\"buttonLinks\">\r\n            <button>\r\n                <ion-icon name=\"person-add\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"bug\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"bar-chart\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"people\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"document-text\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"sync-circle\"></ion-icon>\r\n            </button>\r\n        </div>\r\n        <p class=\"title\">Dashboard</p>\r\n        <div class=\"quickLinks\">\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Employee</p>\r\n                    <p>List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/employeeList.svg\" alt=\"Employee working\">\r\n            </div>\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Pending</p>\r\n                    <p>Ledger List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/pendingLedger.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Recieved</p>\r\n                    <p>Ledger List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/recievedLedger.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"linkCard\">\r\n                <div>\r\n                    <p>Driver</p>\r\n                    <p>List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/driver.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <p class=\"text-1\">Recently Opened</p>\r\n        <div class=\"groupCard\">\r\n            <app-employee-data-widget></app-employee-data-widget>\r\n        </div>\r\n        <app-expense-ledger\r\n            expenseName=\"Gate broken\"\r\n            ledgerNo=\"LEDGER1234\"\r\n            [charge]=\"20400\"\r\n            condition=\"danger\"\r\n            [servicable]=\"false\"\r\n            date=\"2020-05-05\"\r\n            reason=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis, fringilla magna in, vulputate enim. Fusce ut euismod ligula, id laoreet ex.\"\r\n        ></app-expense-ledger>\r\n        <app-dala-widget\r\n            driverName=\"John doe\"\r\n            driverImage=\"https://i.pravatar.cc/300?img=1\"\r\n            driverNumber=\"+91-1234567890\"\r\n            driverId=\"DRIVER123\"\r\n            [charge]=\"20000\"\r\n            ledgerNo=\"L1234354\"\r\n            coordinator=\"Test Big Name\"\r\n        ></app-dala-widget>\r\n        <!-- <div class=\"box\">\r\n            <app-employee-data-widget></app-employee-data-widget>\r\n        </div> -->\r\n        <!-- <div class=\"pending\">\r\n            <p style=\"color: #F57171;margin-left: 10px;font-size:20px;font-weight: bold;\">Pending</p>\r\n            <app-product-ledger-widget></app-product-ledger-widget>\r\n            <button class=\"button-22\">See All Pending Events</button>\r\n    \r\n        </div>\r\n        <div class=\"pending\">\r\n            <p style=\"color: var(--ion-color-warning);margin-left: 10px;font-size:20px;font-weight: bold;\">Recieved</p>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <button class=\"button-22\">See All Pending Events</button>\r\n    \r\n        </div>\r\n        <div class=\"pending\">\r\n            <p style=\"color:#23C258; margin-left: 10px;font-size:20px;font-weight: bold;\">Unloaded</p>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <app-sit-ledger-widget></app-sit-ledger-widget>\r\n            <button class=\"button-22\">See All Pending Events</button>\r\n    \r\n        </div>      -->\r\n    </main>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_home_home_module_ts.js.map