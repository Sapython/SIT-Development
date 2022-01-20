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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 80171);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 87835);
/* harmony import */ var src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-components/base-components.module */ 47306);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var src_app_modals_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/bug-report/bug-report.component */ 80181);












let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule,
            src_app_base_components_base_components_module__WEBPACK_IMPORTED_MODULE_2__.BaseComponentsModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, src_app_modals_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_5__.BugReportComponent]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 93444);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 96405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_modals_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/bug-report/bug-report.component */ 80181);
/* harmony import */ var src_app_modals_recieved_log_recieved_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/recieved-log/recieved-log.component */ 74961);
/* harmony import */ var src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/data.provider */ 47991);








let HomePage = class HomePage {
    constructor(modalController, dataProvider) {
        this.modalController = modalController;
        this.dataProvider = dataProvider;
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
        this.showFiltersList = false;
        this.items = [1, 2, 3];
        this.dalaLedgers = [
            {
                charge: 30,
                driverName: "John Doe",
                driverImage: "https://www.w3schools.com/howto/img_avatar.png",
                driverNumber: "+254712345678",
                driverId: "123456789",
                ledgerNo: "123456789",
                coordinator: "John Doe"
            },
            {
                charge: 30,
                driverName: "John Doe",
                driverImage: "https://www.w3schools.com/howto/img_avatar.png",
                driverNumber: "+254712345678",
                driverId: "123456789",
                ledgerNo: "123456789",
                coordinator: "John Doe"
            },
            {
                charge: 30,
                driverName: "John Doe",
                driverImage: "https://www.w3schools.com/howto/img_avatar.png",
                driverNumber: "+254712345678",
                driverId: "123456789",
                ledgerNo: "123456789",
                coordinator: "John Doe"
            }
        ];
        this.sitLedgers = [
            {
                dispatchDate: "23 July 2021",
                delivery: "2333441",
                expectedDelivery: "30 July 2021",
                gateEntryDate: "25 July 2021",
                gateEntryNo: "666",
                mfgLocation: "D69",
                productCode: "112233",
                productName: "Biscoot",
                quantity: 360,
                recPlantDesc: "145",
                remarks: "Received",
                suppPlant: "D69",
                suppPlantDesc: "Tirupati Bakers",
                storageLocation: "Prayagraj",
                transName: "Jain Roadways",
                vehicleNo: "HR51AB1314",
                status: "unloaded",
            },
            {
                dispatchDate: "23 July 2021",
                delivery: "2333441",
                expectedDelivery: "30 July 2021",
                gateEntryDate: "25 July 2021",
                gateEntryNo: "666",
                mfgLocation: "D69",
                productCode: "112233",
                productName: "Biscoot",
                quantity: 360,
                recPlantDesc: "145",
                remarks: "Received",
                suppPlant: "D69",
                suppPlantDesc: "Tirupati Bakers",
                storageLocation: "Prayagraj",
                transName: "Jain Roadways",
                vehicleNo: "HR51AB1314",
                status: "recieved",
            }
        ];
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
    reportBug() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_2__.BugReportComponent,
            });
            return yield modal.present();
        });
    }
    recievedlog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_recieved_log_recieved_log_component__WEBPACK_IMPORTED_MODULE_3__.RecievedLogComponent,
            });
            return yield modal.present();
        });
    }
    ngOnInit() { }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_4__.DataProvider }
];
HomePage.propDecorators = {
    filtersButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['filtersButton',] }],
    filtersList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['filtersList',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 80181:
/*!***********************************************************!*\
  !*** ./src/app/modals/bug-report/bug-report.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BugReportComponent": () => (/* binding */ BugReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bug_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bug-report.component.html?ngResource */ 12475);
/* harmony import */ var _bug_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bug-report.component.scss?ngResource */ 88822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 54382);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let BugReportComponent = class BugReportComponent {
    constructor(databaseService, modalController) {
        this.databaseService = databaseService;
        this.modalController = modalController;
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(1000)]);
        this.bugReportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            description: this.description,
        });
    }
    reportBug() {
        if (this.bugReportForm.valid) {
            this.databaseService.logBug(this.description.value);
        }
        else {
            this.databaseService.logBug('');
        }
        this.modalController.dismiss();
    }
    ngOnInit() { }
};
BugReportComponent.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
BugReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-bug-report',
        template: _bug_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bug_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BugReportComponent);



/***/ }),

/***/ 96405:
/*!*****************************************************!*\
  !*** ./src/app/main/home/home.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "aside {\n  position: fixed;\n  width: 100vw;\n  height: 45vh;\n  background-color: white;\n  padding: 20px;\n}\naside #topNav {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  justify-content: space-between;\n}\naside #topNav button {\n  border: 2px solid cornflowerblue;\n  background-color: transparent;\n  color: cornflowerblue;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 5px 5px 20px 10px rgba(55, 56, 58, 0.096);\n}\naside #topNav .greetings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n}\naside #topNav .greetings .greet {\n  font-size: 25px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\naside #topNav .greetings .username {\n  font-size: 20px;\n  color: grey;\n}\naside #topNav .greetings p {\n  margin: 0px;\n}\naside #topNav .greetings app-user-image {\n  border-radius: 50%;\n  margin-top: 10px;\n  box-shadow: 0px 0px 10px -5px rgba(50, 50, 50, 0.4);\n}\naside #card {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  width: 80vw;\n  border: 3px solid cornflowerblue;\n  height: 150px;\n  margin: 0 auto;\n  margin-top: 10px;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 5.3px 4.1px 3.8px -14px rgba(100, 148, 237, 0.045), 14.8px 11.4px 10.4px -14px rgba(100, 148, 237, 0.065), 35.6px 27.4px 25px -14px rgba(100, 148, 237, 0.085), 118px 91px 83px -14px rgba(100, 148, 237, 0.13);\n}\naside #card .chart {\n  height: 100px;\n  width: 100px;\n}\naside #card div .head {\n  margin: 0px;\n  padding: 0px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #2c2c2c;\n}\naside #card div table > tr > td:nth-child(1) {\n  color: grey;\n  font-weight: 500;\n}\naside #card div table > tr > td:nth-child(2) {\n  margin: 10px;\n  color: grey;\n  font-weight: 500;\n  text-align: end;\n}\nmain {\n  margin-top: 350px;\n  background-color: var(--ion-background-color);\n  border-radius: 15px;\n  width: 100vw;\n  height: auto;\n  padding: 20px;\n  position: sticky;\n  box-shadow: 0px -15px 10px 5px rgba(0, 0, 0, 0.1);\n}\nmain .buttonLinks {\n  display: flex;\n  flex-direction: row;\n  width: auto;\n  overflow: scroll;\n  margin: -10px;\n  margin-left: -15px;\n  margin-right: -15px;\n  padding-bottom: 10px;\n  white-space: nowrap;\n}\nmain .buttonLinks button {\n  display: inline-block;\n  min-width: 50px;\n  min-height: 50px;\n  font-size: 20px;\n  margin-left: 20px;\n  padding: 5px;\n  border-radius: 15px;\n  color: #7595ff;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n}\nmain .buttonLinks button:nth-child(1) {\n  margin-left: 5px;\n}\nmain .buttonLinks button:nth-child(6) {\n  margin-right: 5px;\n}\nmain .title {\n  font-size: 25px;\n  font-weight: 600;\n  color: #323b55;\n}\nmain .quickLinks {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nmain .quickLinks .linkCard {\n  width: auto;\n  padding: 20px;\n  height: 250px;\n  border-radius: 20px;\n  background-color: #86c7f36c;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n}\nmain .quickLinks .linkCard div p {\n  font-size: 20px;\n  margin: 0px;\n  font-weight: 600;\n  color: #323b55;\n}\nmain .quickLinks .linkCard img {\n  width: auto;\n  height: auto;\n  position: relative;\n  bottom: 0px;\n}\nmain .text-1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: grey;\n  font-family: \"Poppins\", sans-serif;\n}\n#sit-ledger-filters {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #3D95E6;\n  border-radius: 50px;\n}\n#filters-heading {\n  width: 60%;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  margin: 0;\n  font-size: 18px;\n}\n#filters-dropdown {\n  width: 40%;\n}\n#filters-button {\n  width: 100%;\n  background-color: #47D8B1;\n  border-radius: 50px;\n  color: #fff;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 1em;\n  font-size: 18px;\n}\n#filters-list {\n  position: absolute;\n  list-style: none;\n  z-index: 3;\n  background-color: #3D95E6;\n  margin: 0 0.5em;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXNpZGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgI3RvcE5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAxMHB4IHJnYmEoNTUsIDU2LCA1OCwgMC4wOTYpO1xyXG4gICAgfVxyXG4gICAgLmdyZWV0aW5ncyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC5ncmVldCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcclxuICAgICAgfVxyXG4gICAgICAudXNlcm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgICBhcHAtdXNlci1pbWFnZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC01cHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICNjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1LjNweCA0LjFweCAzLjhweCAtMTRweCByZ2JhKDEwMCwgMTQ4LCAyMzcsIDAuMDQ1KSxcclxuICAgICAgMTQuOHB4IDExLjRweCAxMC40cHggLTE0cHggcmdiYSgxMDAsIDE0OCwgMjM3LCAwLjA2NSksXHJcbiAgICAgIDM1LjZweCAyNy40cHggMjVweCAtMTRweCByZ2JhKDEwMCwgMTQ4LCAyMzcsIDAuMDg1KSxcclxuICAgICAgMTE4cHggOTFweCA4M3B4IC0xNHB4IHJnYmEoMTAwLCAxNDgsIDIzNywgMC4xMyk7XHJcbiAgICAuY2hhcnR7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgICAuaGVhZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlID4gdHIgPiB0ZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlID4gdHIgPiB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xNXB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAuYnV0dG9uTGlua3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgbWFyZ2luOi0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJ1dHRvbntcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtaW4td2lkdGg6NTBweDtcclxuICAgICAgbWluLWhlaWdodDo1MHB4O1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBjb2xvcjojNzU5NWZmO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLDAuMik7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDEpe1xyXG4gICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDYpe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICBjb2xvcjpyZ2IoNTAsIDU5LCA4NSk7XHJcbiAgfVxyXG4gIC5xdWlja0xpbmtze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAubGlua0NhcmR7XHJcbiAgICAgICAgLy8gbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4NmM3ZjM2YztcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJnYig1MCwgNTksIDg1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICAvLyBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3R0b206MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtMXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG4jc2l0LWxlZGdlci1maWx0ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRDk1RTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuI2ZpbHRlcnMtaGVhZGluZyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jZmlsdGVycy1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuI2ZpbHRlcnMtYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdEOEIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2ZpbHRlcnMtbGlzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q5NUU2O1xyXG4gIG1hcmdpbjogMCAuNWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAuY29udGFpbmVye1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuLy8gfVxyXG4vLyAuY29udGFpbmVyIGJ1dHRvbntcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxQzM2RjtcclxuLy8gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcbi8vIC5jb250YWluZXIgcHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDI1cHg7XHJcbi8vIH1cclxuLy8gLnRleHQtMXtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gfVxyXG4vLyAucGVuZGluZ3tcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4vLyAgICAgbWFyZ2luOiAzcHg7XHJcbi8vICAgICBwYWRkaW5nOjA1cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbi8vIH1cclxuLy8gLnBlbmRpbmcgaDJ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbi8vIH1cclxuLy8gLmJveHtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gfVxyXG4vLyAuYnV0dG9uLTIye1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NEE2QTtcclxuLy8gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG4iXX0= */";

/***/ }),

/***/ 88822:
/*!************************************************************************!*\
  !*** ./src/app/modals/bug-report/bug-report.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "small {\n  color: rgba(255, 116, 103, 0.972);\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n  margin-left: 5px;\n  font-family: var(--fontPrimary);\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #edecf18c;\n  color: black;\n  position: absolute;\n  top: 0px;\n  height: 100vh;\n  padding: 20px;\n  width: 100%;\n  border-radius: 20px 20px 0 0;\n}\n\n.container h1 {\n  margin-top: 100px;\n  color: #414368;\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.container p {\n  margin: 0px;\n  font-weight: 400;\n  color: #35364e;\n}\n\n.container form {\n  margin-top: 50px;\n  width: 80vw;\n}\n\n.container form p {\n  color: #5b5c79;\n  text-align: right;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.container form button {\n  color: white;\n  font-size: 17px;\n  font-weight: 500;\n  width: 80vw;\n  height: 50px;\n  border-radius: 8px;\n  background-color: #7595ff;\n  box-shadow: 5px 1px 10px 10px #7595ff2c;\n}\n\n.container form textarea {\n  color: #414368;\n  font-weight: 500;\n  padding: 10px;\n  border: none;\n  width: 80vw;\n  height: 400px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 5px 2px 10px 5px rgba(120, 228, 255, 0.089);\n}\n\n.container .liner {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 70px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .liner hr {\n  width: 20vw;\n  height: 0px;\n  border: 2px solid #5b5c79;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.container .liner p {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.container .social {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 20px;\n  font-size: 30px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .social button {\n  background-color: transparent;\n}\n\n.container .social button ion-icon {\n  border: 2px white solid;\n  padding: 5px;\n  font-size: 30px;\n  color: #5b5c79;\n  border-radius: 5px;\n}\n\n.container .register {\n  margin-top: 20px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .register span {\n  color: #7595ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1Zy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUVKOztBQURJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHUjs7QUFESTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUdSOztBQUZRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJWjs7QUFGUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQUlaOztBQUZRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7QUFJWjs7QUFESTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQUZRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJWjs7QUFGUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFJWjs7QUFESTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQUZRO0VBQ0ksNkJBQUE7QUFJWjs7QUFIWTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFLaEI7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHUjs7QUFGUTtFQUNJLGNBQUE7QUFJWiIsImZpbGUiOiJidWctcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic21hbGx7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMTE2LCAxMDMsIDAuOTcyKTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udFByaW1hcnkpO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZGVjZjE4YztcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMDBweDtcclxuICAgICAgICBjb2xvcjpyZ2IoNjUsIDY3LCAxMDQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjpyZ2IoNTMsIDU0LCA3OCk7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6ODB2dztcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjpyZ2IoOTEsIDkyLCAxMjEpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNzU5NWZmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggMTBweCAjNzU5NWZmMmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBjb2xvcjpyZ2IoNjUsIDY3LCAxMDQpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICB3aWR0aDo4MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDJweCAxMHB4IDVweCByZ2JhKDEyMCwgMjI4LCAyNTUsIDAuMDg5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGluZXJ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjpyZ2IoOTEsIDkyLCAxMjEpO1xyXG4gICAgICAgIGhye1xyXG4gICAgICAgICAgICB3aWR0aDoyMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHdoaXRlIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWdpc3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6cmdiKDkxLCA5MiwgMTIxKTtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjojNzU5NWZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggNXB4IHJnYmEoMTAsMTAsMTAsMC4yKTtcclxufSJdfQ== */";

/***/ }),

/***/ 93444:
/*!*****************************************************!*\
  !*** ./src/app/main/home/home.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-header title=\"Home\"></app-header> -->\r\n<ion-content>\r\n    <aside>\r\n        <div id=\"topNav\">\r\n            <button>\r\n                <ion-menu-button></ion-menu-button>\r\n            </button>\r\n            <div class=\"greetings\">\r\n                <p class=\"greet\">Welcome</p>\r\n                <p class=\"username\">\r\n                    {{dataProvider?.userData?.displayName}}\r\n                </p>\r\n                <app-user-image></app-user-image>\r\n            </div>\r\n        </div>\r\n        <div id=\"card\">\r\n            <div>\r\n                <p class=\"head\">Summary</p>\r\n                <table>\r\n                    <tr>\r\n                        <td>Pending</td>\r\n                        <td style=\"color:rgb(255, 107, 107)\">&nbsp;&nbsp;&nbsp;&nbsp;{{pending}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Recieved</td>\r\n                        <td style=\"color:rgb(107, 201, 255)\">&nbsp;&nbsp;&nbsp;&nbsp;{{recieved}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Unloaded</td>\r\n                        <td style=\"color:rgb(61, 194, 94)\">&nbsp;&nbsp;&nbsp;&nbsp;{{unloaded}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div style=\"display: block\" class=\"chart\">\r\n                <canvas baseChart\r\n                  [data]=\"doughnutChartData\"\r\n                  [legend]=\"false\"\r\n                  [type]=\"doughnutChartType\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </aside>\r\n    <main>\r\n        <div class=\"buttonLinks\">\r\n            <button routerLink=\"../add-employee\">\r\n                <ion-icon name=\"person-add\"></ion-icon>\r\n            </button>\r\n            <button (click)=\"reportBug()\">\r\n                <ion-icon name=\"bug\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"people\" routerLink=\"../employeeList\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"document-text\" routerLink=\"../ledgerOverview\"></ion-icon>\r\n            </button>\r\n            <button>\r\n                <ion-icon name=\"sync-circle\"></ion-icon>\r\n            </button>\r\n        </div>\r\n        <p class=\"title\">Dashboard</p>\r\n        <div class=\"quickLinks\">\r\n            <button class=\"linkCard\" routerLink=\"../employeeList\">\r\n                <div>\r\n                    <p>Employee</p>\r\n                    <p>List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/employeeList.svg\" alt=\"Employee working\">\r\n            </button>\r\n            <div class=\"linkCard\" routerLink=\"../pending-sit\">\r\n                <div>\r\n                    <p>Pending</p>\r\n                    <p>SIT List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/pendingLedger.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"linkCard\" routerLink=\"../recieved-sit\">\r\n                <div>\r\n                    <p>Recieved</p>\r\n                    <p>SIT List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/recievedLedger.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"linkCard\" routerLink=\"../driver-list\">\r\n                <div>\r\n                    <p>Driver</p>\r\n                    <p>List</p>\r\n                </div>\r\n                <img src=\"assets/UI/QuickLinks/driver.svg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <p class=\"text-1\">Recently Opened</p>\r\n        <app-sit-ledger-widget \r\n        *ngFor=\"let item of sitLedgers\"\r\n            [dispatchDate]=\"item.dispatchDate\"\r\n            [delivery]=\"item.delivery\"\r\n            [expectedDelivery]=\"item.expectedDelivery\"\r\n            [gateEntryDate]=\"item.gateEntryDate\"\r\n            [gateEntryNo]=\"item.gateEntryNo\"\r\n            [mfgLocation]=\"item.mfgLocation\"\r\n            [productCode]=\"item.productCode\"\r\n            [productName]=\"item.productName\"\r\n            [quantity]=\"item.quantity\"\r\n            [recPlantDesc]=\"item.recPlantDesc\"\r\n            [remarks]=\"item.remarks\"\r\n            [suppPlant]=\"item.suppPlant\"\r\n            [suppPlantDesc]=\"item.suppPlantDesc\"\r\n            [storageLocation]=\"item.storageLocation\"\r\n            [transName]=\"item.transName\"\r\n            [vehicleNo]=\"item.vehicleNo\"\r\n            [status]=\"item.status\"\r\n        ></app-sit-ledger-widget>\r\n    </main>\r\n</ion-content>";

/***/ }),

/***/ 12475:
/*!************************************************************************!*\
  !*** ./src/app/modals/bug-report/bug-report.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <img src=\"assets/UI/Images/Template.png\">\n  <div class=\"bubbleContainer\"></div>\n  <div class=\"container\">\n    <h1>Found A bug!</h1>\n    <p>Please report it</p>\n    <p>we will fix it.</p>\n    <form [formGroup]=\"bugReportForm\" (ngSubmit)=\"reportBug()\">\n      <textarea type=\"text\" [formControl]=\"description\" placeholder=\"Enter Description\"></textarea>\n      <button type=\"submit\">Report</button>\n    </form>\n    <!-- <!-- <h5>Forgot Password?</h5> -->\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_home_home_module_ts.js.map