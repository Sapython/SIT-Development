"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 47306:
/*!***********************************************************!*\
  !*** ./src/app/base-components/base-components.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponentsModule": () => (/* binding */ BaseComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 23205);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/component.module */ 55051);






const comps = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
];
let BaseComponentsModule = class BaseComponentsModule {
};
BaseComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            comps
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        ],
        exports: [
            comps
        ]
    })
], BaseComponentsModule);



/***/ }),

/***/ 23205:
/*!************************************************************!*\
  !*** ./src/app/base-components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 70015);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 97927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/data.provider */ 47991);






let HeaderComponent = class HeaderComponent {
    constructor(dataProvider, router) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.title = "";
        this.username = "Sajan Pandey";
    }
    navigateToAccount() {
        this.router.navigateByUrl('/main/app/account-page');
    }
    ngOnInit() { }
    navigate(path) {
        this.router.navigateByUrl('/main/app/' + path);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_providers_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 71550:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 57358:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e2988509.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ chevronBack),
/* harmony export */   "b": () => (/* binding */ chevronForward),
/* harmony export */   "c": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "d": () => (/* binding */ chevronDown),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ caretUpSharp),
/* harmony export */   "g": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 23966:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-163ed7fb.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 97927:
/*!*************************************************************************!*\
  !*** ./src/app/base-components/header/header.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: white;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 60px;\n  --background:var(--ion-color-primary);\n  border-radius: 0px 0px 15px 15px;\n  box-shadow: 0px 5px 10px rgba(20, 20, 20, 0.2);\n}\nion-toolbar ion-chip {\n  --background:var(--ion-color-primary-contrast);\n}\n.container {\n  height: 40px;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: flex;\n  flex-direction: row;\n  margin-left: 10px;\n}\n.photo {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: var(--ion-color-primary);\n  margin-top: -5px;\n  cursor: pointer;\n}\n.container p {\n  margin-top: -1px;\n  margin-left: 10px;\n  color: var(--ion-color-primary);\n}\nion-back-button {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsOENBQUE7QUFDSjtBQUFJO0VBQ0ksOENBQUE7QUFFUjtBQUNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtBQUlKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDIwLDIwLDIwLDAuMik7XHJcbiAgICBpb24tY2hpcHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgfVxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5waG90b3tcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG59XHJcbi5jb250YWluZXIgcHtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */";

/***/ }),

/***/ 70015:
/*!*************************************************************************!*\
  !*** ./src/app/base-components/header/header.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\r\n  <ion-back-button defaultHref=\"/main/app/home\" slot=\"start\">Back</ion-back-button>\r\n  <ion-chip slot=\"end\" (click)=\"navigateToAccount()\">\r\n    <ion-avatar>\r\n      <img [src]=\"dataProvider?.userData?.photoURL\">\r\n    </ion-avatar>\r\n    <ion-label color=\"primary\">{{dataProvider?.userData?.displayName}}</ion-label>\r\n  </ion-chip>\r\n</ion-toolbar>\r\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map