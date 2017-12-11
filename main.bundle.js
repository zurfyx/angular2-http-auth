webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
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

/***/ "../../../../../example/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <div>\n    <h1><a class=\"neat\" href=\"https://github.com/zurfyx/angular2-http-auth\" rel=\"noopener\">Angular HTTP Auth</a></h1>\n    <div>\n      <button (click)=\"onClickUnauthenticated()\">Unauthenticated</button>\n      <button (click)=\"onClickAuthenticated()\">Authenticated</button>\n      <p [style.visibility]=\"showTip ? 'visible' : 'hidden'\">F12 -> Network to see request details</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans);", ""]);

// module
exports.push([module.i, "html, body {\n  color: #eee;\n  font-family: 'Open Sans', sans-serif;\n  background: #262626;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\nh1 {\n  font-family: 'Montserrat';\n  font-weight: 200;\n  padding: 30px;\n  margin: 0; }\n\na.neat {\n  color: inherit;\n  text-decoration: none; }\n\na.shadowy {\n  padding: .5rem 1rem;\n  transition: .2s all ease-in; }\n  a.shadowy:hover {\n    color: #4aabc9;\n    background-color: #fff; }\n\nbutton {\n  cursor: pointer;\n  font-size: 1rem;\n  color: #eee;\n  border: 2px solid #eee;\n  border-radius: 2px;\n  background-color: transparent;\n  padding: 0.75rem 1rem;\n  transition: all 0.2s ease-in;\n  outline: none; }\n  button:hover {\n    color: #333;\n    background-color: #eee; }\n\nbutton + button {\n  margin-left: 1rem; }\n\n.greetings {\n  color: #fff; }\n\n.center {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../example/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.showTip = false;
    }
    AppComponent.prototype.onClickUnauthenticated = function () {
        this.appService.unauthenticatedCall().subscribe(function (response) { });
        this.showTip = true;
    };
    AppComponent.prototype.onClickAuthenticated = function () {
        this.appService.authenticatedCall().subscribe(function (response) { });
        this.showTip = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../example/app/app.component.html"),
            styles: [__webpack_require__("../../../../../example/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_http_module__ = __webpack_require__("../../../../../example/app/auth-http.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../example/app/app.service.ts");
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
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_http_module__["a" /* AuthHttpModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../example/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    AppService.prototype.unauthenticatedCall = function () {
        return this.http.get(window.location.href);
    };
    AppService.prototype.authenticatedCall = function () {
        return this.authHttp.get(window.location.href);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__src__["b" /* AuthHttp */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../example/app/auth-http.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_2__src__["b" /* AuthHttp */](new __WEBPACK_IMPORTED_MODULE_2__src__["a" /* AuthConfig */]({
        headers: {
            'Content-Type': 'application/json',
            Authorization: function () { return 'authorization_code'; },
        },
    }), http);
}
var AuthHttpModule = (function () {
    function AuthHttpModule() {
    }
    AuthHttpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__src__["b" /* AuthHttp */],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]
                }
            ]
        })
    ], AuthHttpModule);
    return AuthHttpModule;
}());



/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/auth-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthConfig; });
/* unused harmony export AuthConfigArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthConfig = (function () {
    function AuthConfig(args) {
        this.args = args;
    }
    AuthConfig.prototype.getHeaders = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](Object.keys(this.args.headers).reduce(function (acc, curr) {
            var val = _this.args.headers[curr];
            return Object.assign(acc, (_a = {}, _a[curr] = typeof val === 'function' ? val() : val, _a));
            var _a;
        }, {}));
    };
    AuthConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [AuthConfigArgs])
    ], AuthConfig);
    return AuthConfig;
}());

var AuthConfigArgs = (function () {
    function AuthConfigArgs() {
    }
    return AuthConfigArgs;
}());



/***/ }),

/***/ "../../../../../src/auth-http.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__("../../../../../src/auth-config.ts");
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



var AuthHttp = (function () {
    function AuthHttp(defaults, http) {
        this.defaults = defaults;
        this.http = http;
    }
    AuthHttp.prototype.get = function (url, options) {
        return this.request(this.http.get, { url: url, options: options });
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return this.request(this.http.post, { url: url, body: body, options: options });
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return this.request(this.http.put, { url: url, body: body, options: options });
    };
    AuthHttp.prototype.delete = function (url, options) {
        return this.request(this.http.delete, { url: url, options: options });
    };
    AuthHttp.prototype.patch = function (url, body, options) {
        return this.request(this.http.patch, { url: url, body: body, options: options });
    };
    AuthHttp.prototype.head = function (url, options) {
        return this.request(this.http.head, { url: url, options: options });
    };
    AuthHttp.prototype.options = function (url, options) {
        return this.request(this.http.options, { url: url, options: options });
    };
    AuthHttp.prototype.request = function (httpMethod, _a) {
        var url = _a.url, body = _a.body, _b = _a.options, options = _b === void 0 ? {} : _b;
        var headers = this.requestHeaders(options);
        var newOptions = __assign({}, options, { headers: headers });
        var newArgs = body ? [url, body, newOptions] : [url, newOptions];
        return httpMethod.apply(this.http, newArgs);
    };
    AuthHttp.prototype.requestHeaders = function (requestOptions) {
        if (!requestOptions.headers) {
            return this.defaults.getHeaders();
        }
        var requestHeaders = requestOptions.headers;
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](Object.assign({}, this.defaults.getHeaders().toJSON(), requestHeaders.toJSON()));
    };
    AuthHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AuthConfig */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthHttp);
    return AuthHttp;
}());



/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_config__ = __webpack_require__("../../../../../src/auth-config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_http__ = __webpack_require__("../../../../../src/auth-http.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_http__["a"]; });




/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map