(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 80570);
/* harmony import */ var _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verifyemail/verifyemail.component */ 14258);






const routes = [
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 65705)).then(m => m.MainModule),
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
    },
    {
        path: 'verifyemail',
        component: _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_2__.VerifyemailComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authencation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authencation.service */ 11815);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);







let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.useIncompatible = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.user.subscribe(user => {
                if (user) {
                    _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
                    this.router.navigate(['/main/app/home']);
                }
                else {
                    _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
                    this.router.navigate(['/login']);
                }
            });
        });
    }
    navigate(path) {
        console.log(path);
        this.router.navigateByUrl('/main/app/' + path);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authencation_service__WEBPACK_IMPORTED_MODULE_2__.AuthencationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/data.provider */ 47991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/analytics */ 52591);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/functions */ 88833);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/messaging */ 60798);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ 80570);
/* harmony import */ var _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifyemail/verifyemail.component */ 14258);
/* harmony import */ var _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/uiService/alerts-and-notifications.service */ 98868);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/database.service */ 54382);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-data.service */ 5944);
/* harmony import */ var _services_authencation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authencation.service */ 11815);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/component.module */ 55051);


























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent, _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_6__.VerifyemailComponent],
        imports: [
            // MainModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_12__.ComponentModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_18__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_18__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase)),
            (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__.provideAnalytics)(() => (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__.getAnalytics)()),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__.getAuth)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__.getFirestore)()),
            (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_22__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_22__.getFunctions)()),
            (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_23__.provideMessaging)(() => (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_23__.getMessaging)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__.getStorage)()),
        ],
        providers: [
            _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_7__.AlertsAndNotificationsService,
            _services_authencation_service__WEBPACK_IMPORTED_MODULE_10__.AuthencationService,
            _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider,
            _services_database_service__WEBPACK_IMPORTED_MODULE_8__.DatabaseService,
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_9__.UserDataService,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicRouteStrategy },
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__.ScreenTrackingService,
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__.UserTrackingService,
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 55051:
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-image/user-image.component */ 67792);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





const components = [_user_image_user_image_component__WEBPACK_IMPORTED_MODULE_0__.UserImageComponent];
let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            components
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        ],
        exports: [
            components
        ]
    })
], ComponentModule);



/***/ }),

/***/ 67792:
/*!**************************************************************!*\
  !*** ./src/app/component/user-image/user-image.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserImageComponent": () => (/* binding */ UserImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-image.component.html?ngResource */ 68323);
/* harmony import */ var _user_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-image.component.scss?ngResource */ 8092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/data.provider */ 47991);
/* harmony import */ var src_app_services_authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authencation.service */ 11815);






let UserImageComponent = class UserImageComponent {
    constructor(dataProvider, authService) {
        this.dataProvider = dataProvider;
        this.authService = authService;
    }
    ngOnInit() { }
};
UserImageComponent.ctorParameters = () => [
    { type: src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider },
    { type: src_app_services_authencation_service__WEBPACK_IMPORTED_MODULE_3__.AuthencationService }
];
UserImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-image',
        template: _user_image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserImageComponent);



/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/data.provider */ 47991);
/* harmony import */ var _services_authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authencation.service */ 11815);
/* harmony import */ var _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/uiService/alerts-and-notifications.service */ 98868);






let AuthGuard = class AuthGuard {
    constructor(authService, alertify, dataProvider, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.dataProvider = dataProvider;
        this.router = router;
    }
    canActivate(route, state) {
        // if(this.dataProvider.loggedIn()){
        // if(!this.authService.isEmailVerified){
        //   alert('Your email or phone number is not verified');
        //   this.router.navigate(['/verifyemail'])
        //   return false
        // }
        return true;
        // } 
        // if (this.dataProvider.pageSetting.lastRedirect !== '') {
        //   this.router.navigate([this.dataProvider.pageSetting.lastRedirect]);
        // } else {
        // }
        this.router.navigate(['/login']);
        return false;
    }
    canActivateChild(childRoute, state) {
        return true;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authencation_service__WEBPACK_IMPORTED_MODULE_1__.AuthencationService },
    { type: _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_2__.AlertsAndNotificationsService },
    { type: _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 82010);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 89444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/data.provider */ 47991);
/* harmony import */ var _services_authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authencation.service */ 11815);
/* harmony import */ var _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/uiService/alerts-and-notifications.service */ 98868);








let LoginComponent = class LoginComponent {
    constructor(authService, alertify, dataProvider) {
        this.authService = authService;
        this.alertify = alertify;
        this.dataProvider = dataProvider;
        this.colors = [[255, 60, 125], [60, 60, 255], [60, 161, 255], [247, 182, 40], [255, 98, 84], [114, 33, 255], [77, 255, 249], [92, 255, 168]];
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]);
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            email: this.emailControl,
            password: this.passwordControl,
        });
    }
    ngOnInit() {
        this.startBackgroundAnimation();
    }
    login() {
        console.log(this.signinForm);
        if (this.signinForm.status === 'VALID') {
            this.authService.loginEmailPassword(this.emailControl.value, this.passwordControl.value);
        }
        else {
            this.alertify.presentToast('Please fill all the fields correctly', 'error', 3000);
        }
    }
    startBackgroundAnimation() {
        let bubbleContainer = document.querySelector('.bubbleContainer');
        for (let i = 0; i < this.getRandomInt(5, 10); i++) {
            bubbleContainer === null || bubbleContainer === void 0 ? void 0 : bubbleContainer.appendChild(this.createBubble());
        }
    }
    createBubble() {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');
        const size = this.getRandomInt(100, 200) + 'px';
        bubble.style.width == size;
        bubble.style.width == size;
        bubble.style.left = this.getRandomInt(0, 100) + 'vw';
        bubble.style.top = this.getRandomInt(0, 60) + 'vh';
        bubble.style.animationDelay = this.getRandomInt(0, 9) + 's';
        bubble.style.background = this.getRandomColor();
        return bubble;
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomColor() {
        const color = this.colors[this.getRandomInt(0, 2)];
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_authencation_service__WEBPACK_IMPORTED_MODULE_3__.AuthencationService },
    { type: _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_4__.AlertsAndNotificationsService },
    { type: src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 47991:
/*!********************************************!*\
  !*** ./src/app/providers/data.provider.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProvider": () => (/* binding */ DataProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let DataProvider = class DataProvider {
    constructor() {
        this.pageSetting = {
            blur: false,
            lastRedirect: '',
            message: '',
            spinner: false,
            messageType: 'Error'
        };
        this.loggedIn = false;
        this.gettingUserData = false;
        this.reloadPage = false;
    }
};
DataProvider.ctorParameters = () => [];
DataProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], DataProvider);



/***/ }),

/***/ 11815:
/*!**************************************************!*\
  !*** ./src/app/services/authencation.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthencationService": () => (/* binding */ AuthencationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 23628);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiService/alerts-and-notifications.service */ 98868);
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-data.service */ 5944);
/* harmony import */ var _providers_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/data.provider */ 47991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);











let AuthencationService = class AuthencationService {
    constructor(auth, userData, alertify, firestore, router, dataProvider) {
        this.auth = auth;
        this.userData = userData;
        this.alertify = alertify;
        this.firestore = firestore;
        this.router = router;
        this.dataProvider = dataProvider;
        this.loggedIn = false;
        this.userServerSubscription = undefined;
        this.user = rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        if (auth) {
            this.user = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.authState)(this.auth);
            this.setDataObserver(this.user);
            this.userDisposable = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.authState)(this.auth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(u => !!u)).subscribe(isLoggedIn => {
                this.loggedIn = isLoggedIn;
                this.dataProvider.loggedIn = isLoggedIn;
            });
        }
        else {
            this.loggedIn = false;
        }
    }
    // Read functions start
    get isLoggedIn() {
        return this.loggedIn;
    }
    get getUser() {
        return this.user;
    }
    // Read functions end
    // Sign in functions start
    signInWithGoogle(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.dataProvider.pageSetting.blur = true;
            this.dataProvider.pageSetting.lastRedirect = '';
            let data = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithPopup)(this.auth, new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.GoogleAuthProvider()).then((credentials) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                console.log(credentials);
                if (!(yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this.firestore, 'users/' + credentials.user.uid))).exists()) {
                    if (credentials.user.phoneNumber == null) {
                        yield this.userData.setGoogleUserData(credentials.user, { phoneNumber: '' });
                    }
                    else {
                        yield this.userData.setGoogleUserData(credentials.user, { phoneNumber: credentials.user.phoneNumber });
                    }
                }
                else {
                    this.dataProvider.pageSetting.blur = false;
                    this.alertify.presentToast('Logging you in.', 'info', 5000, [], true, '');
                    this.router.navigate(['']);
                }
            })).catch((error) => {
                this.dataProvider.pageSetting.blur = false;
                if (error.code === 'auth/popup-closed-by-user') {
                    this.alertify.presentToast('Login cancelled.', 'error', 5000, [], true, '');
                }
                else {
                    this.alertify.presentToast(error.message, 'error', 5000, [], true, '');
                }
            });
        });
    }
    loginAnonymously() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let data = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.signInAnonymously)(this.auth).then((credentials) => {
            });
            this.router.navigate(['']);
        });
    }
    loginEmailPassword(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.dataProvider.pageSetting.blur = true;
            this.dataProvider.pageSetting.lastRedirect = '';
            let data = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithEmailAndPassword)(this.auth, email, password).then((credentials) => {
                this.router.navigate(['']);
            });
            this.dataProvider.pageSetting.blur = false;
        });
    }
    signUpWithEmailAndPassword(email, password, username) {
        console.log("Signing Up");
        this.dataProvider.pageSetting.blur = true;
        this.dataProvider.pageSetting.lastRedirect = '';
        let data = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.createUserWithEmailAndPassword)(this.auth, email, password).then((credentials) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userData.setEmailUserData(credentials.user, { displayName: username, phoneNumber: '', photoURL: '' });
        })).catch((error) => {
            this.dataProvider.pageSetting.blur = false;
            if (error.code === 'auth/weak-password') {
                this.alertify.presentToast('Password is weak.', 'error', 5000, [], true, '');
            }
            else if (error.code === 'auth/email-already-in-use') {
                this.alertify.presentToast('Email already in use.', 'error', 5000, [], true, '');
            }
            else {
                this.alertify.presentToast(error.message, 'error', 5000, [], true, '');
            }
        });
    }
    // Sign in functions end
    // Sign out functions start
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.remove({ key: 'auth' });
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.remove({ key: 'userData' });
            yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(this.auth);
            this.router.navigate(['../login']);
        });
    }
    // Sign out functions end
    openNameDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.alertify.openEmailBasedDialog();
        });
    }
    getMethod(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (credentials.user.providerId == "firebase" && credentials.user.isAnonymous == false) {
                // TODO: register user as an email based system
                let name = yield this.openNameDialog();
                this.userData.setEmailUserData(credentials.user, { displayName: name, phoneNumber: '', photoURL: '' });
            }
            else if (credentials.user.providerId == "google.com") {
                // TODO: register user as a google based system
            }
            else if (credentials.user.providerId == "firebase" && credentials.user.isAnonymous == true) {
                // TODO: register user as an anonymous based system 
            }
        });
    }
    setDataObserver(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('Starting data observer')
            if (user) {
                // console.log('Setting data observer')
                user.subscribe((u) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    if (u) {
                        this.dataProvider.loggedIn = true;
                        this.dataProvider.gettingUserData = true;
                        console.log('User is logged in');
                        this.userDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this.firestore, 'users/' + u.uid);
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                            key: 'auth',
                            value: JSON.stringify(u)
                        });
                        console.log("User data from auth", u);
                        if (this.userServerSubscription != undefined) {
                            this.userServerSubscription.unsubscribe();
                        }
                        this.userServerSubscription = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.docData)(this.userDoc).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            console.log("Recieved new data", data);
                            this.dataProvider.userData = data;
                            this.dataProvider.gettingUserData = false;
                            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                                key: 'userData',
                                value: JSON.stringify(data),
                            });
                        }));
                    }
                }));
            }
            else {
                if (this.userServerSubscription != undefined) {
                    this.userServerSubscription.unsubscribe();
                }
            }
        });
    }
};
AuthencationService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.Auth },
    { type: _user_data_service__WEBPACK_IMPORTED_MODULE_1__.UserDataService },
    { type: _uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_0__.AlertsAndNotificationsService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.Firestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _providers_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider }
];
AuthencationService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], AuthencationService);



/***/ }),

/***/ 54382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/data.provider */ 47991);
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authencation.service */ 11815);





let DatabaseService = class DatabaseService {
    constructor(fs, dataProvider, authService) {
        this.fs = fs;
        this.dataProvider = dataProvider;
        this.authService = authService;
        this.contactDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.fs, 'contactRequests');
    }
    addContactRequest(name, email, phoneNumber, message) {
        let data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
            date: new Date(),
        };
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(this.contactDoc, data).then((doc) => {
            console.log(doc);
            console.log(doc.id);
        });
    }
    logBug(description) {
        let date = new Date().toDateString();
        let data = {
            date: date || '',
            message: description || '',
            url: window.location.href || '',
            clientInfo: window.navigator.userAgent || '',
            user: this.dataProvider.userData || '',
            logs: this.dataProvider.logs || '',
            screenWidth: screen.width || '',
            screenHeight: screen.height || '',
            windowWidth: window.innerWidth || '',
            windowHeight: window.innerHeight || '',
            availWidth: screen.availWidth || '',
            availHeight: screen.availHeight || '',
            colorDepth: screen.colorDepth || '',
            pixelDepth: screen.pixelDepth || '',
            referrer: document.referrer || '',
            historyLength: history.length || '',
            title: document.title || '',
            browserName: window.navigator.userAgent || '',
            userLanguage: navigator.language || '',
            userAgent: navigator.userAgent || '',
            cookieEnabled: navigator.cookieEnabled || '',
            onLine: navigator.onLine || '',
            hardwareConcurrency: navigator.hardwareConcurrency || '',
            maxTouchPoints: navigator.maxTouchPoints || '',
            doNotTrack: navigator.doNotTrack || '',
            solved: false,
        };
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.fs, 'logs'), data);
    }
    // SIt services starts
    getSitLedgers() {
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionSnapshots)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.fs, 'SIT_COL'));
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore },
    { type: _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider },
    { type: _authencation_service__WEBPACK_IMPORTED_MODULE_1__.AuthencationService }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], DatabaseService);



/***/ }),

/***/ 98868:
/*!************************************************************************!*\
  !*** ./src/app/services/uiService/alerts-and-notifications.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsAndNotificationsService": () => (/* binding */ AlertsAndNotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);




let AlertsAndNotificationsService = class AlertsAndNotificationsService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.toastAudio = new Audio();
        this.toastErrorAudio = new Audio();
        this.toastAudio.src = '/assets/audio/tones/toast.mp3';
        this.toastAudio.volume = 0.4;
        this.toastAudio.load();
        this.toastErrorAudio.src = '/assets/audio/tones/error.mp3';
        this.toastErrorAudio.volume = 0.4;
        this.toastErrorAudio.load();
    }
    testFunction() {
        console.log("testFunction");
    }
    playAudio(type) {
        if (type === 'toast') {
            this.toastAudio.play();
        }
        else if (type === 'errorToast') {
            this.toastErrorAudio.play();
        }
    }
    presentToast(message, type, duration, action, sound, icon) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: duration,
                icon: icon,
                buttons: action,
            });
            if (sound && type === 'info') {
                toast.present();
                this.playAudio('toast');
            }
            else if (sound && type === 'error') {
                toast.present();
                this.playAudio('errorToast');
            }
            else {
                toast.present();
            }
        });
    }
    openEmailBasedDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: [
                    {
                        text: 'Submit',
                        role: 'submit'
                    }
                ],
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        label: 'Name',
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            return role;
        });
    }
};
AlertsAndNotificationsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
AlertsAndNotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertsAndNotificationsService);



/***/ }),

/***/ 5944:
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/data.provider */ 47991);
/* harmony import */ var _uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiService/alerts-and-notifications.service */ 98868);






let UserDataService = class UserDataService {
    constructor(firestore, router, alertify, dataProvider) {
        this.firestore = firestore;
        this.router = router;
        this.alertify = alertify;
        this.dataProvider = dataProvider;
        this.usersDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'users');
    }
    setGoogleUserData(user, userData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.dataProvider.pageSetting.blur = true;
            this.dataProvider.pageSetting.lastRedirect = '';
            let data = {
                userId: user.uid,
                email: user.email || '',
                displayName: user.displayName || '',
                photoURL: user.photoURL || this.getRandomImage(),
                phoneNumber: userData.phoneNumber,
                emailVerified: true,
                firstLogin: false,
                access: {
                    access: 'User',
                },
                orders: [],
                totalOrders: 0,
                totalCashback: 0,
                wishlist: [],
                cart: [],
                friends: [],
            };
            this.userDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'users/' + user.uid);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(this.userDoc, data).then(() => {
                this.alertify.presentToast('User data set successfully');
            });
            this.dataProvider.pageSetting.blur = false;
            this.router.navigate(['']);
        });
    }
    setEmailUserData(user, userData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.dataProvider.pageSetting.blur = true;
            this.dataProvider.pageSetting.lastRedirect = '';
            let data = {
                userId: user.uid,
                email: user.email || '',
                displayName: userData.displayName || '',
                photoURL: userData.photoURL || this.getRandomImage(),
                phoneNumber: userData.phoneNumber || '',
                emailVerified: true,
                firstLogin: false,
                access: {
                    access: 'User',
                },
                orders: [],
                totalOrders: 0,
                totalCashback: 0,
                wishlist: [],
                cart: [],
                friends: [],
            };
            this.userDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'users/' + user.uid);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(this.userDoc, data).then(() => {
                this.alertify.presentToast('User data set successfully');
            });
            this.dataProvider.pageSetting.blur = false;
            this.router.navigate(['']);
        });
    }
    getRandomImage() {
        return 'https://avatars.dicebear.com/api/gridy/' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) + '.svg';
    }
};
UserDataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_1__.AlertsAndNotificationsService },
    { type: _providers_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider }
];
UserDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ 80570:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 18582);
/* harmony import */ var _signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss?ngResource */ 15874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _providers_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/data.provider */ 47991);
/* harmony import */ var _services_authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authencation.service */ 11815);
/* harmony import */ var _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/uiService/alerts-and-notifications.service */ 98868);








let SignupComponent = class SignupComponent {
    constructor(authService, alertify, dataProvider) {
        this.authService = authService;
        this.alertify = alertify;
        this.dataProvider = dataProvider;
        this.fullNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]);
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]);
        this.confirmPasswordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]);
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            fullName: this.fullNameControl,
            email: this.emailControl,
            password: this.passwordControl,
            confirmPassword: this.confirmPasswordControl,
        });
    }
    ngOnInit() {
    }
    signup() {
        console.log(this.signupForm, this.confirmPasswordControl);
        if (this.signupForm.status === 'VALID') {
            if (this.signupForm.value.password === this.signupForm.value.confirmPassword) {
                console.log(this.signupForm.value);
                this.authService.signUpWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.fullName);
            }
            else {
                this.alertify.presentToast("Password and Confirm Password do not match", 'error', 3000);
            }
        }
        else {
            this.alertify.presentToast('Please fill all the fields correctly', 'error', 3000);
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_authencation_service__WEBPACK_IMPORTED_MODULE_3__.AuthencationService },
    { type: _services_uiService_alerts_and_notifications_service__WEBPACK_IMPORTED_MODULE_4__.AlertsAndNotificationsService },
    { type: _providers_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider }
];
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signup',
        template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupComponent);



/***/ }),

/***/ 14258:
/*!******************************************************!*\
  !*** ./src/app/verifyemail/verifyemail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyemailComponent": () => (/* binding */ VerifyemailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verifyemail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyemail.component.html?ngResource */ 11296);
/* harmony import */ var _verifyemail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyemail.component.scss?ngResource */ 88136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let VerifyemailComponent = class VerifyemailComponent {
    constructor() { }
    ngOnInit() { }
};
VerifyemailComponent.ctorParameters = () => [];
VerifyemailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-verifyemail',
        template: _verifyemail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verifyemail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyemailComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ 30771);
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'sit-manager',
        appId: '1:690627613189:web:6824650edf61bf8341826c',
        storageBucket: 'sit-manager.appspot.com',
        apiKey: 'AIzaSyCr3OU4kqHPIJwM3yy0kB-hcOWhtk5cD3I',
        authDomain: 'sit-manager.firebaseapp.com',
        messagingSenderId: '690627613189',
        measurementId: 'G-7E3E6R0KLW',
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  --background: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n#photo-container {\n  padding: 1em;\n  flex-grow: 1;\n  background: var(--ion-color-primary);\n}\n\n#photo {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n#options-container {\n  background-color: #fff;\n  padding: 1em;\n  flex-grow: 3;\n}\n\n#options {\n  list-style: none;\n}\n\n.option {\n  padding: 0.5em 0;\n  color: #333;\n  border-bottom: 1px solid #333;\n}\n\n.option:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n#footer {\n  color: #fff;\n  padding: 1em;\n  flex-grow: 1;\n  background: var(--ion-color-primary);\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n#developed-by {\n  color: #fff;\n  margin: 0;\n}\n\n#swayambhu-innovations {\n  color: #fff;\n  margin: 0.5em 0;\n}\n\n#more-info {\n  background-color: #fff;\n  color: var(--ion-color-primary);\n  padding: 0.5em 1em;\n  margin-left: -1.5em;\n  font-family: inherit;\n  width: 200px;\n  border-radius: 0 25px 25px 0;\n  font-size: 18px;\n}\n\n#incompatible {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  text-align: center;\n  background-color: #d9dafb;\n}\n\n#incompatible button {\n  padding: 10px;\n  border: none;\n  background-color: #7595ff;\n  color: white;\n  border-radius: 5px;\n}\n\n@media screen and (max-width: 300px) {\n  #incompatible {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3Bob3RvLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbiNwaG90byB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNvcHRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZmxleC1ncm93OiAzO1xyXG59XHJcblxyXG4jb3B0aW9ucyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICAgIHBhZGRpbmc6IC41ZW0gMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2RldmVsb3BlZC1ieSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3N3YXlhbWJodS1pbm5vdmF0aW9ucyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogLjVlbSAwO1xyXG59XHJcblxyXG4jbW9yZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jaW5jb21wYXRpYmxle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgMjE4LCAyNTEpO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NTk1ZmY7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMDBweCl7XHJcbiAgICAjaW5jb21wYXRpYmxle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 8092:
/*!***************************************************************************!*\
  !*** ./src/app/component/user-image/user-image.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWltYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 89444:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "small {\n  color: rgba(255, 116, 103, 0.972);\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n  margin-left: 5px;\n  font-family: var(--fontPrimary);\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #edecf18c;\n  color: black;\n  position: absolute;\n  top: 0px;\n  height: 100vh;\n  padding: 20px;\n  width: 100%;\n  border-radius: 20px 20px 0 0;\n}\n\n.container h1 {\n  margin-top: 100px;\n  color: #414368;\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.container p {\n  margin: 0px;\n  font-weight: 400;\n  color: #35364e;\n}\n\n.container form {\n  margin-top: 50px;\n  width: 80vw;\n}\n\n.container form p {\n  color: #5b5c79;\n  text-align: right;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.container form button {\n  color: white;\n  font-size: 17px;\n  font-weight: 500;\n  width: 80vw;\n  height: 50px;\n  border-radius: 8px;\n  background-color: #7595ff;\n  box-shadow: 5px 1px 10px 10px #7595ff2c;\n}\n\n.container form input {\n  color: #414368;\n  font-weight: 500;\n  padding: 10px;\n  border: none;\n  width: 80vw;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 50px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 5px 2px 10px 5px rgba(120, 228, 255, 0.089);\n}\n\n.container .liner {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 70px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .liner hr {\n  width: 20vw;\n  height: 0px;\n  border: 2px solid #5b5c79;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.container .liner p {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.container .social {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 20px;\n  font-size: 30px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .social button {\n  background-color: transparent;\n}\n\n.container .social button ion-icon {\n  border: 2px white solid;\n  padding: 5px;\n  font-size: 30px;\n  color: #5b5c79;\n  border-radius: 5px;\n}\n\n.container .register {\n  margin-top: 20px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .register span {\n  color: #7595ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFESTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR1I7O0FBREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR1I7O0FBREk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFHUjs7QUFGUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSVo7O0FBRlE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUFJWjs7QUFGUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0FBSVo7O0FBREk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHUjs7QUFGUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSVo7O0FBRlE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSVo7O0FBREk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHUjs7QUFGUTtFQUNJLDZCQUFBO0FBSVo7O0FBSFk7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBS2hCOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR1I7O0FBRlE7RUFDSSxjQUFBO0FBSVoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbHtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAxMTYsIDEwMywgMC45NzIpO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250UHJpbWFyeSk7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VkZWNmMThjO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgICAgIGNvbG9yOnJnYig2NSwgNjcsIDEwNCk7XHJcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOnJnYig1MywgNTQsIDc4KTtcclxuICAgIH1cclxuICAgIGZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB3aWR0aDo4MHZ3O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgd2lkdGg6ODB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NTk1ZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAxMHB4ICM3NTk1ZmYyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYig2NSwgNjcsIDEwNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwdnc7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAycHggMTBweCA1cHggcmdiYSgxMjAsIDIyOCwgMjU1LCAwLjA4OSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6cmdiKDkxLCA5MiwgMTIxKTtcclxuICAgICAgICBocntcclxuICAgICAgICAgICAgd2lkdGg6MjB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoOTEsIDkyLCAxMjEpO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjpyZ2IoOTEsIDkyLCAxMjEpO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjJweCB3aGl0ZSBzb2xpZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoOTEsIDkyLCAxMjEpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6Izc1OTVmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IDVweCByZ2JhKDEwLDEwLDEwLDAuMik7XHJcbn0iXX0= */";

/***/ }),

/***/ 15874:
/*!*********************************************************!*\
  !*** ./src/app/signup/signup.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "small {\n  color: rgba(255, 116, 103, 0.972);\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n  margin-left: 5px;\n  font-family: var(--fontPrimary);\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #edecf18c;\n  color: black;\n  position: absolute;\n  top: 0px;\n  height: 100vh;\n  padding: 20px;\n  width: 100%;\n  border-radius: 20px 20px 0 0;\n}\n\n.container h1 {\n  margin-top: 40px;\n  color: #414368;\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.container p {\n  margin: 0px;\n  font-weight: 400;\n  color: #35364e;\n}\n\n.container form {\n  margin-top: 50px;\n  width: 80vw;\n}\n\n.container form p {\n  color: #5b5c79;\n  text-align: right;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.container form button {\n  color: white;\n  font-size: 17px;\n  font-weight: 500;\n  width: 80vw;\n  height: 50px;\n  border-radius: 8px;\n  background-color: #7595ff;\n  box-shadow: 5px 1px 10px 10px #7595ff2c;\n}\n\n.container form input {\n  color: #414368;\n  font-weight: 500;\n  padding: 10px;\n  border: none;\n  width: 80vw;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 50px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 5px 2px 10px 5px rgba(120, 228, 255, 0.089);\n}\n\n.container .liner {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 70px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .liner hr {\n  width: 20vw;\n  height: 0px;\n  border: 2px solid #5b5c79;\n}\n\n.container .liner p {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.container .social {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 20px;\n  font-size: 30px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .social button {\n  background-color: transparent;\n}\n\n.container .social button ion-icon {\n  border: 2px white solid;\n  padding: 5px;\n  font-size: 30px;\n  color: #5b5c79;\n  border-radius: 5px;\n}\n\n.container .register {\n  margin-top: 20px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #5b5c79;\n}\n\n.container .register span {\n  color: #7595ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBRUo7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBR1I7O0FBRlE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlaOztBQUZRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FBSVo7O0FBRlE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtBQUlaOztBQURJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR1I7O0FBRlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSVo7O0FBRlE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSVo7O0FBREk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHUjs7QUFGUTtFQUNJLDZCQUFBO0FBSVo7O0FBSFk7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBS2hCOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR1I7O0FBRlE7RUFDSSxjQUFBO0FBSVoiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic21hbGx7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMTE2LCAxMDMsIDAuOTcyKTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udFByaW1hcnkpO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZGVjZjE4YztcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgICAgIGNvbG9yOnJnYig2NSwgNjcsIDEwNCk7XHJcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOnJnYig1MywgNTQsIDc4KTtcclxuICAgIH1cclxuICAgIGZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB3aWR0aDo4MHZ3O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgd2lkdGg6ODB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NTk1ZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAxMHB4ICM3NTk1ZmYyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYig2NSwgNjcsIDEwNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwdnc7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAycHggMTBweCA1cHggcmdiYSgxMjAsIDIyOCwgMjU1LCAwLjA4OSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6cmdiKDkxLCA5MiwgMTIxKTtcclxuICAgICAgICBocntcclxuICAgICAgICAgICAgd2lkdGg6MjB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoOTEsIDkyLCAxMjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHdoaXRlIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJnYig5MSwgOTIsIDEyMSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWdpc3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6cmdiKDkxLCA5MiwgMTIxKTtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjojNzU5NWZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggNXB4IHJnYmEoMTAsMTAsMTAsMC4yKTtcclxufSJdfQ== */";

/***/ }),

/***/ 88136:
/*!*******************************************************************!*\
  !*** ./src/app/verifyemail/verifyemail.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n}\n\n.box {\n  position: absolute;\n  padding: 50px;\n  padding-left: 80px;\n}\n\n.box h2 {\n  display: block;\n  margin: auto;\n  font-weight: 900;\n}\n\n.box span {\n  color: #6865BF;\n  margin-left: 60px;\n  margin-top: 10px;\n}\n\n.box img {\n  display: block;\n  margin: auto;\n  margin-top: 50px;\n  margin-left: -30px;\n}\n\n.box button {\n  color: #fff;\n  background-color: #6865BF;\n  display: block;\n  margin: auto;\n  padding: 20px;\n  border-radius: 25px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtKIiwiZmlsZSI6InZlcmlmeWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG59XHJcbi5ib3h7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6NTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG4uYm94IGgye1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uYm94IHNwYW57XHJcbiAgICBjb2xvcjogIzY4NjVCRjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYm94IGltZ3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbn1cclxuLmJveCBidXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODY1QkY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content id=\"container\">\r\n        <div id=\"photo-container\">\r\n          <app-user-image></app-user-image>\r\n        </div>\r\n        <div id=\"options-container\">\r\n          <ion-list id=\"options\">\r\n            <ion-menu-toggle auto-hide=\"false\" class=\"option\">\r\n              <ion-item routerDirection=\"root\"  (click)=\"navigate('labour-ledger')\" detail=\"false\">Labour Ledger</ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\" class=\"option\">\r\n              <ion-item routerDirection=\"root\"  (click)=\"navigate('sit-overview')\" detail=\"false\">SIT Log</ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\" class=\"option\">\r\n              <ion-item routerDirection=\"root\" (click)=\"navigate('employeeList')\" detail=\"false\">Employee List</ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\" class=\"option\">\r\n              <ion-item routerDirection=\"root\"  (click)=\"navigate('account-page')\" detail=\"false\">Account</ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n          <ion-button color=\"primary\" id=\"logout-button\">Logout <ion-icon slot=\"end\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        <div id=\"footer\">\r\n          <ion-text>\r\n            <h3 id=\"developed-by\">Developed by</h3>\r\n            <p id=\"swayambhu-innovations\">Shreeva Softech Pvt. Ltd.</p>\r\n          </ion-text>\r\n          <button id=\"more-info\">More Info <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n  <div id=\"incompatible\" [ngStyle]=\"{'display': useIncompatible ? 'flex' : 'none'}\">\r\n    <p>\r\n      Application not supported for this resolution.\r\n    </p>\r\n    <button (click)=\"useIncompatible = true\">I still want to use.</button>\r\n  </div>\r\n</ion-app>";

/***/ }),

/***/ 68323:
/*!***************************************************************************!*\
  !*** ./src/app/component/user-image/user-image.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-avatar (click)=\"authService.logout()\" *ngIf=\"dataProvider?.userData\">\n  <img [src]=\"dataProvider?.userData?.photoURL\" />\n</ion-avatar>\n";

/***/ }),

/***/ 82010:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <img src=\"assets/UI/Images/Template.png\">\r\n  <div class=\"bubbleContainer\"></div>\r\n  <div class=\"container\">\r\n    <h1>Hello Again!</h1>\r\n    <p>Welcome back you've</p>\r\n    <p>been missed</p>\r\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"login()\">\r\n      <input type=\"email\" [formControl]=\"emailControl\" placeholder=\"Enter email\">\r\n      <div class=\"text-danger\"\r\n        *ngIf=\"emailControl && emailControl.errors && (emailControl.dirty || emailControl.touched)\">\r\n        <div *ngIf=\"emailControl.errors?.['required']\">\r\n          <small>Email is required</small>\r\n        </div>\r\n        <div *ngIf=\"emailControl.errors?.['email']\">\r\n          <small>Please provide a correct email address</small>\r\n        </div>\r\n      </div>\r\n      <input type=\"password\" [formControl]=\"passwordControl\" placeholder=\"Enter password\">\r\n      <div class=\"text-danger\"\r\n        *ngIf=\"passwordControl && passwordControl.errors && (passwordControl.dirty || passwordControl.touched)\">\r\n        <div *ngIf=\"passwordControl.errors?.['required']\">\r\n          <small>Password is required</small>\r\n        </div>\r\n        <div *ngIf=\"passwordControl.errors?.['minlength']\">\r\n          <small>Minimum length for password is 8</small>\r\n        </div>\r\n        <div *ngIf=\"passwordControl.errors?.['maxlength']\">\r\n          <small>Maximum length for password is 50</small>\r\n        </div>\r\n      </div>\r\n      <p>Recovery Password</p>\r\n      <button type=\"submit\">Sign In</button>\r\n    </form>\r\n    <div class=\"liner\">\r\n      <hr>\r\n      <p>Or Continue With</p>\r\n      <hr>\r\n    </div>\r\n    <!-- <!-- <h5>Forgot Password?</h5> -->\r\n    <div class=\"social\">\r\n      <button (click)=\"authService.signInWithGoogle('Login')\" fill=\"clear\">\r\n        <ion-icon name=\"logo-google\" class=\"logo\"></ion-icon>\r\n      </button>\r\n    </div>\r\n    <h4 class=\"register\">Don't have an account ? <span routerLink=\"../signup\">Sign Up</span></h4>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 18582:
/*!*********************************************************!*\
  !*** ./src/app/signup/signup.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <img src=\"assets/UI/Images/Template.png\">\r\n  <div class=\"bubbleContainer\"></div>\r\n  <div class=\"container\">\r\n    <h1>Register Now!</h1>\r\n    <p>Let's make you</p>\r\n    <p>a part of it</p>\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\r\n      <input type=\"text\" [formControl]=\"fullNameControl\" placeholder=\"Enter name\">\r\n      <div class=\"text-danger\"\r\n        *ngIf=\"fullNameControl && fullNameControl.errors && (fullNameControl.dirty || fullNameControl.touched)\">\r\n        <div *ngIf=\"fullNameControl.errors?.['required']\">\r\n          <small>Name is required</small>\r\n        </div>\r\n        <div *ngIf=\"fullNameControl.errors?.['minlength']\">\r\n          <small>Minimum length for name is 2</small>\r\n        </div>\r\n        <div *ngIf=\"fullNameControl.errors?.['maxlength']\">\r\n          <small>Maximum length for name is 50</small>\r\n        </div>\r\n      </div>\r\n      <input type=\"email\" [formControl]=\"emailControl\" placeholder=\"Enter email\">\r\n      <div class=\"text-danger\"\r\n        *ngIf=\"emailControl && emailControl.errors && (emailControl.dirty || emailControl.touched)\">\r\n        <div *ngIf=\"emailControl.errors?.['required']\">\r\n          <small>Email is required</small>\r\n        </div>\r\n        <div *ngIf=\"emailControl.errors?.['email']\">\r\n          <small>Please provide a correct email address</small>\r\n        </div>\r\n      </div>\r\n      <input type=\"password\" [formControl]=\"passwordControl\" placeholder=\"Enter password\">\r\n      <div class=\"text-danger\"\r\n        *ngIf=\"passwordControl && passwordControl.errors && (passwordControl.dirty || passwordControl.touched)\">\r\n        <div *ngIf=\"passwordControl.errors?.['required']\">\r\n          <small>Password is required</small>\r\n        </div>\r\n        <div *ngIf=\"passwordControl.errors?.['minlength']\">\r\n          <small>Minimum length for password is 8</small>\r\n        </div>\r\n        <div *ngIf=\"passwordControl.errors?.['maxlength']\">\r\n          <small>Maximum length for password is 50</small>\r\n        </div>\r\n      </div>\r\n      <input type=\"password\" [formControl]=\"confirmPasswordControl\" placeholder=\"Confirm password\">\r\n      <div class=\"text-danger\"\r\n        *ngIf=\"confirmPasswordControl && confirmPasswordControl.errors && (confirmPasswordControl.dirty || confirmPasswordControl.touched)\">\r\n        <div *ngIf=\"confirmPasswordControl.errors?.['required']\">\r\n          <small>Please confirm password</small>\r\n        </div>\r\n        <div *ngIf=\"confirmPasswordControl.errors?.['minlength']\">\r\n          <small>Minimum length for password is 8</small>\r\n        </div>\r\n        <div *ngIf=\"confirmPasswordControl.errors?.['maxlength']\">\r\n          <small>Maximum length for password is 50</small>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\">Sign Up</button>\r\n    </form>\r\n    <div class=\"liner\">\r\n      <hr>\r\n      <p>Or Continue With</p>\r\n      <hr>\r\n    </div>\r\n    <!-- <!-- <h5>Forgot Password?</h5> -->\r\n    <div class=\"social\">\r\n      <button (click)=\"authService.signInWithGoogle('Signup')\">\r\n        <ion-icon name=\"logo-google\" class=\"logo\"></ion-icon>\r\n      </button>\r\n    </div>\r\n    <h4 class=\"register\">Already have an account ? <span routerLink=\"../login\">Sign In</span></h4>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 11296:
/*!*******************************************************************!*\
  !*** ./src/app/verifyemail/verifyemail.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"box\">\r\n      <h2>Please Verify Your<br> <span>Email</span></h2>\r\n      <img src=\"/assets/svg1.svg\" alt=\"error loading image\">\r\n      <button>Resend Verification</button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map