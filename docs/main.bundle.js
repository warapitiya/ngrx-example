webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<section class=\"section\">\n    <div class=\"container\">\n        <h1 class=\"title\">\n            Welcome to {{title}}\n        </h1>\n        <p class=\"subtitle\">\n            Experimental repo for <strong>ngrx</strong>!\n        </p>\n        <img width=\"200\"\n             src=\"https://cdn-images-1.medium.com/max/1600/1*gSBFvuLWky8Mgb8gLIZeSg.png\">\n    </div>\n    <app-home-page></app-home-page>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ngrx';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_store_effects_person_effects__ = __webpack_require__("../../../../../src/app/home/+store/effects/person.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_reducer__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_8__home_store_effects_person_effects__["a" /* PersonEffects */]]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                }),
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_store_reducers_person__ = __webpack_require__("../../../../../src/app/home/+store/reducers/person.ts");

var reducers = {
    person: __WEBPACK_IMPORTED_MODULE_0__home_store_reducers_person__["a" /* personReducer */]
};


/***/ }),

/***/ "../../../../../src/app/home/+store/actions/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_SUCCESS; });
/* unused harmony export LOAD_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INSERT; });
/* unused harmony export REMOVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoadSuccess; });
/* unused harmony export LoadFail */
/* unused harmony export Insert */
/* unused harmony export Remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Reset; });
var LOAD = '[Person] Load';
var LOAD_SUCCESS = '[Person] Load success';
var LOAD_FAIL = '[Person] Load fail';
var INSERT = '[Person] Insert';
var REMOVE = '[Person] Remove';
var RESET = '[Counter] Reset';
var Load = (function () {
    function Load() {
        this.type = LOAD;
    }
    return Load;
}());

var LoadSuccess = (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadFail = (function () {
    function LoadFail() {
        this.type = LOAD_FAIL;
    }
    return LoadFail;
}());

var Insert = (function () {
    function Insert(payload) {
        this.payload = payload;
        this.type = INSERT;
    }
    return Insert;
}());

var Remove = (function () {
    function Remove(payload) {
        this.payload = payload;
        this.type = REMOVE;
    }
    return Remove;
}());

var Reset = (function () {
    function Reset() {
        this.type = RESET;
    }
    return Reset;
}());



/***/ }),

/***/ "../../../../../src/app/home/+store/effects/person.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_person__ = __webpack_require__("../../../../../src/app/home/+store/actions/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PersonEffects = (function () {
    function PersonEffects(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.load$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_person__["b" /* LOAD */])
            .switchMap(function () {
            return _this.http.get('https://uinames.com/api/?ext')
                .map(function (result) { return (__assign({
                id: new Date().getTime()
            }, result)); })
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_4__actions_person__["e" /* LoadSuccess */](result); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], PersonEffects.prototype, "load$", void 0);
    PersonEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]])
    ], PersonEffects);
    return PersonEffects;
}());



/***/ }),

/***/ "../../../../../src/app/home/+store/reducers/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export personAdapter */
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = personReducer;
/* unused harmony export getPersonState */
/* unused harmony export selectIds */
/* unused harmony export selectEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectAll; });
/* unused harmony export selectTotal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__("../../../../@ngrx/entity/@ngrx/entity.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_person__ = __webpack_require__("../../../../../src/app/home/+store/actions/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");



var personAdapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])();
var defaultPerson = {};
var initialState = personAdapter.getInitialState(defaultPerson);
function personReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_person__["c" /* LOAD_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_1__actions_person__["a" /* INSERT */]:
            return personAdapter.addOne(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_person__["f" /* RESET */]:
            return personAdapter.removeAll(state);
        default:
            return state;
    }
}
// Create the default selectors
var getPersonState = Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["l" /* createFeatureSelector */])('person');
var selectIds = (_a = personAdapter.getSelectors(getPersonState), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
var _a;


/***/ }),

/***/ "../../../../../src/app/home/containers/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_reducers_person__ = __webpack_require__("../../../../../src/app/home/+store/reducers/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions_person__ = __webpack_require__("../../../../../src/app/home/+store/actions/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = (function () {
    function HomePageComponent(store) {
        this.store = store;
        this.person$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store_reducers_person__["b" /* selectAll */]);
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions_person__["d" /* Load */]());
    };
    /**
     * Add person Item
     */
    HomePageComponent.prototype.add = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions_person__["d" /* Load */]());
    };
    /**
     * Clear Person store
     */
    HomePageComponent.prototype.clear = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions_person__["g" /* Reset */]());
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home-page',
            template: "\n        <section class=\"section\">\n            <div class=\"columns\">\n                <div class=\"column\">\n                    <div class=\"title\">\n                        <h2>Manage</h2>\n                    </div>\n                    <button class=\"button is-primary\" (click)=\"add()\">ADD</button>\n                    <button class=\"button is-warning\" (click)=\"clear()\">CLEAR</button>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column\">\n                    <div class=\"title\">\n                        <h2>Collections</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"columns\" *ngFor=\"let person of person$ | async\">\n                <div class=\"column\">\n                    <img [src]=\"person.photo\" width=\"64\" alt=\"\">\n                </div>\n                <div class=\"column\">\n                    <p [innerHtml]=\"person.name\"></p>\n                </div>\n                <div class=\"column\">\n                    <div class=\"tags has-addons\">\n                        <span class=\"tag is-black\">age</span>\n                        <span class=\"tag is-primary\" [innerHtml]=\"person.age\"></span>\n                    </div>\n                </div>\n                <div class=\"column\">\n                    <p><span class=\"tag\"\n                             [ngClass]=\"{'is-info': person.gender === 'male', 'is-danger': person.gender === 'female'}\"\n                             [innerHtml]=\"person.gender\"></span></p>\n                </div>\n                <div class=\"column\">\n                    <p [innerHtml]=\"person.region\"></p>\n                </div>\n            </div>\n        </section>\n    ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home/containers/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_reducers_person__ = __webpack_require__("../../../../../src/app/home/+store/reducers/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('person', __WEBPACK_IMPORTED_MODULE_4__store_reducers_person__["a" /* personReducer */]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__containers_home_page_home_page_component__["a" /* HomePageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__containers_home_page_home_page_component__["a" /* HomePageComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map