(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/operators'), require('@palmyra-devkit/core-api/client'), require('@ngrx/store'), require('rxjs'), require('lodash'), require('jsonschema'), require('@ngrx/effects'), require('@angular/common/http'), require('@palmyra-devkit/core-api/client/messages'), require('uuid'), require('@angular/common'), require('@angular/forms'), require('primeng/primeng'), require('primeng/table'), require('primeng/api'), require('@angular/platform-browser'), require('primeng/panelmenu'), require('@palmyra-devkit/core-api/client/workspace.client.api')) :
    typeof define === 'function' && define.amd ? define('workspace-lib-ouss', ['exports', '@angular/core', '@angular/router', 'rxjs/operators', '@palmyra-devkit/core-api/client', '@ngrx/store', 'rxjs', 'lodash', 'jsonschema', '@ngrx/effects', '@angular/common/http', '@palmyra-devkit/core-api/client/messages', 'uuid', '@angular/common', '@angular/forms', 'primeng/primeng', 'primeng/table', 'primeng/api', '@angular/platform-browser', 'primeng/panelmenu', '@palmyra-devkit/core-api/client/workspace.client.api'], factory) :
    (global = global || self, factory(global['workspace-lib-ouss'] = {}, global.ng.core, global.ng.router, global.rxjs.operators, global.client, global.store, global.rxjs, global.lodash, global.jsonschema, global.effects, global.ng.common.http, global.messages, global.uuid, global.ng.common, global.ng.forms, global.primeng, global.table, global.api, global.ng.platformBrowser, global.panelmenu, global.workspace_client_api));
}(this, (function (exports, core, router, operators, client, store, rxjs, lodash, jsonschema, effects, http, messages, uuid, common, forms, primeng, table, api, platformBrowser, panelmenu, workspace_client_api) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    const __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    const __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_WIDEGTS_LIBRAIRIES = store.createAction('[SE - Widgets Libraries] Load Widgets Libraries');
    /** @type {?} */
    var LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY = store.createAction('[SE - Widgets Libraries] Load Widgets Libraries Successfully', store.props());
    /** @type {?} */
    var LOAD_WIDEGTS_LIBRAIRIES_FAILED = store.createAction('[SE - Widgets Libraries] Load Widgets Libraries Failed', store.props());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsLibrairiesAPIService = /** @class */ (function () {
        function WidgetsLibrairiesAPIService(http, api) {
            this.http = http;
            this.api = api;
        }
        /**
         * Get the component library
         * return a multi casting Replay subject
         */
        /**
         * Get the component library
         * return a multi casting Replay subject
         * @return {?}
         */
        WidgetsLibrairiesAPIService.prototype.getAllWidgetsLibraries = /**
         * Get the component library
         * return a multi casting Replay subject
         * @return {?}
         */
        function () {
            return this.http.get(this.api['screen-editor'] + "/components/all");
        };
        WidgetsLibrairiesAPIService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetsLibrairiesAPIService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: String, decorators: [{ type: core.Inject, args: ['API_PATHS',] }] }
        ]; };
        return WidgetsLibrairiesAPIService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WidgetsLibrairiesAPIService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        WidgetsLibrairiesAPIService.prototype.api;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidationStore = /** @class */ (function () {
        function ValidationStore() {
            this.shareWithBehaviour$ = new rxjs.BehaviorSubject(undefined);
        }
        /**
         * @return {?}
         */
        ValidationStore.prototype.select = /**
         * @return {?}
         */
        function () {
            return this.shareWithBehaviour$.asObservable();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        ValidationStore.prototype.next = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.shareWithBehaviour$.next(__spread(value));
        };
        /**
         * @param {?} err
         * @return {?}
         */
        ValidationStore.prototype.error = /**
         * @param {?} err
         * @return {?}
         */
        function (err) { };
        /**
         * @return {?}
         */
        ValidationStore.prototype.complete = /**
         * @return {?}
         */
        function () {
            // Noop
        };
        ValidationStore.decorators = [
            { type: core.Injectable }
        ];
        return ValidationStore;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ValidationStore.prototype.shareWithBehaviour$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PreviewStore = /** @class */ (function () {
        function PreviewStore() {
            this.shareWithBehavior$ = new rxjs.BehaviorSubject(undefined);
        }
        /**
         * @param {?} view
         * @return {?}
         */
        PreviewStore.prototype.next = /**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            this.shareWithBehavior$.next(view);
        };
        /**
         * @return {?}
         */
        PreviewStore.prototype.select = /**
         * @return {?}
         */
        function () {
            return this.shareWithBehavior$.asObservable();
        };
        /**
         * @param {?} err
         * @return {?}
         */
        PreviewStore.prototype.error = /**
         * @param {?} err
         * @return {?}
         */
        function (err) { };
        /**
         * @return {?}
         */
        PreviewStore.prototype.complete = /**
         * @return {?}
         */
        function () {
            // Noop
        };
        /**
         * @return {?}
         */
        PreviewStore.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            throw new Error('Method not implemented.');
        };
        PreviewStore.decorators = [
            { type: core.Injectable }
        ];
        return PreviewStore;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PreviewStore.prototype.shareWithBehavior$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SwaggerServicesStore = /** @class */ (function () {
        function SwaggerServicesStore() {
            this.shareWithBehavior$ = new rxjs.BehaviorSubject(undefined);
            this.services = new Array();
        }
        /**
         * @param {?} services
         * @return {?}
         */
        SwaggerServicesStore.prototype.next = /**
         * @param {?} services
         * @return {?}
         */
        function (services) {
            this.shareWithBehavior$.next(services);
            this.services = __spread(services);
        };
        /**
         * @param {?=} featureName
         * @param {?=} path
         * @return {?}
         */
        SwaggerServicesStore.prototype.select = /**
         * @param {?=} featureName
         * @param {?=} path
         * @return {?}
         */
        function (featureName, path) {
            // if (featureName) {
            //   if (path) {
            //   }
            //   this._shareWithBehavior.asObservable().pipe(map(services=> services.filter()))
            // }
            return this.shareWithBehavior$.asObservable();
        };
        /**
         * @return {?}
         */
        SwaggerServicesStore.prototype.selectCold = /**
         * @return {?}
         */
        function () {
            return this.services;
        };
        /**
         * @param {?} err
         * @return {?}
         */
        SwaggerServicesStore.prototype.error = /**
         * @param {?} err
         * @return {?}
         */
        function (err) { };
        /**
         * @return {?}
         */
        SwaggerServicesStore.prototype.complete = /**
         * @return {?}
         */
        function () {
            // Noop
        };
        SwaggerServicesStore.decorators = [
            { type: core.Injectable }
        ];
        return SwaggerServicesStore;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SwaggerServicesStore.prototype.shareWithBehavior$;
        /**
         * @type {?}
         * @private
         */
        SwaggerServicesStore.prototype.services;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Singleton Loader Service used to change the state of the loader Subject
     */
    var PreviewerLoadingService = /** @class */ (function () {
        function PreviewerLoadingService() {
            this.loaderSubject = new rxjs.BehaviorSubject(false);
        }
        /**
         * @return {?}
         */
        PreviewerLoadingService.prototype.show = /**
         * @return {?}
         */
        function () {
            this.loaderSubject.next(true);
        };
        /**
         * @return {?}
         */
        PreviewerLoadingService.prototype.hide = /**
         * @return {?}
         */
        function () {
            this.loaderSubject.next(false);
        };
        /**
         * @return {?}
         */
        PreviewerLoadingService.prototype.getLoaderState = /**
         * @return {?}
         */
        function () {
            return this.loaderSubject.asObservable();
        };
        PreviewerLoadingService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PreviewerLoadingService.ctorParameters = function () { return []; };
        return PreviewerLoadingService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PreviewerLoadingService.prototype.loaderSubject;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PreviewService = /** @class */ (function () {
        function PreviewService(http, previewStore, slidingMessageService, previewerLodingService) {
            this.http = http;
            this.previewStore = previewStore;
            this.slidingMessageService = slidingMessageService;
            this.previewerLodingService = previewerLodingService;
        }
        PreviewService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PreviewService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: PreviewStore },
            { type: messages.IdeMessageService },
            { type: PreviewerLoadingService }
        ]; };
        return PreviewService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PreviewService.prototype.init$;
        /**
         * @type {?}
         * @private
         */
        PreviewService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        PreviewService.prototype.previewStore;
        /**
         * @type {?}
         * @private
         */
        PreviewService.prototype.slidingMessageService;
        /**
         * @type {?}
         * @private
         */
        PreviewService.prototype.previewerLodingService;
    }
    /**
     * @record
     */
    function View() { }
    if (false) {
        /** @type {?|undefined} */
        View.prototype.html;
        /** @type {?|undefined} */
        View.prototype.componentsLibraryModules;
        /** @type {?|undefined} */
        View.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreensLibrairiesAPIService = /** @class */ (function () {
        function ScreensLibrairiesAPIService(http, api) {
            this.http = http;
            this.api = api;
        }
        /**
         * Get the template library
         * return a multi casting Replay subject
         */
        /**
         * Get the template library
         * return a multi casting Replay subject
         * @return {?}
         */
        ScreensLibrairiesAPIService.prototype.getAllScreensLibrairies = /**
         * Get the template library
         * return a multi casting Replay subject
         * @return {?}
         */
        function () {
            return this.http.get(this.api['screen-editor'] + "/templates/all");
        };
        ScreensLibrairiesAPIService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ScreensLibrairiesAPIService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: String, decorators: [{ type: core.Inject, args: ['API_PATHS',] }] }
        ]; };
        return ScreensLibrairiesAPIService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ScreensLibrairiesAPIService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        ScreensLibrairiesAPIService.prototype.api;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureApi = /** @class */ (function () {
        function FeatureApi(http, api) {
            this.http = http;
            this.api = api;
        }
        FeatureApi.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FeatureApi.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: String, decorators: [{ type: core.Inject, args: ['API_PATHS',] }] }
        ]; };
        return FeatureApi;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FeatureApi.prototype.http;
        /**
         * @type {?}
         * @private
         */
        FeatureApi.prototype.api;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsLibrairiesEffects = /** @class */ (function () {
        function WidgetsLibrairiesEffects(actions$, widgetsLibrariesApi) {
            var _this = this;
            this.actions$ = actions$;
            this.widgetsLibrariesApi = widgetsLibrariesApi;
            this.loadWidgetsLibraries$ = effects.createEffect((/**
             * @return {?}
             */
            function () {
                return _this.actions$.pipe(effects.ofType(LOAD_WIDEGTS_LIBRAIRIES), operators.concatMap((/**
                 * @return {?}
                 */
                function () {
                    return _this.widgetsLibrariesApi.getAllWidgetsLibraries().pipe(operators.map((/**
                     * @param {?} widgetsLibrairies
                     * @return {?}
                     */
                    function (widgetsLibrairies) {
                        return LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY({ widgetsLibrairies: widgetsLibrairies });
                    }), operators.catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return rxjs.of(LOAD_WIDEGTS_LIBRAIRIES_FAILED({ err: err })); }))));
                })));
            }));
        }
        WidgetsLibrairiesEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetsLibrairiesEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: WidgetsLibrairiesAPIService }
        ]; };
        return WidgetsLibrairiesEffects;
    }());
    if (false) {
        /** @type {?} */
        WidgetsLibrairiesEffects.prototype.loadWidgetsLibraries$;
        /**
         * @type {?}
         * @private
         */
        WidgetsLibrairiesEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        WidgetsLibrairiesEffects.prototype.widgetsLibrariesApi;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsLibrairiesState = /** @class */ (function () {
        function WidgetsLibrairiesState() {
        }
        return WidgetsLibrairiesState;
    }());
    if (false) {
        /** @type {?} */
        WidgetsLibrairiesState.prototype.data;
    }
    /** @type {?} */
    var initialState = new WidgetsLibrairiesState();
    var ɵ0 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return (__assign({}, state)); }, ɵ1 = /**
     * @param {?} state
     * @param {?} __1
     * @return {?}
     */
    function (state, _a) {
        var widgetsLibrairies = _a.widgetsLibrairies;
        return (__assign({}, state, { data: __spread(widgetsLibrairies) }));
    };
    /** @type {?} */
    var widgetsLibrairiesReducer = store.createReducer(initialState, store.on(LOAD_WIDEGTS_LIBRAIRIES, (ɵ0)), store.on(LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY, (ɵ1)));
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function reducer(state, action) {
        return widgetsLibrairiesReducer(state, action);
    }
    /** @type {?} */
    var getWidgetsLibrairiesState = store.createFeatureSelector('SE - Widgets Librairies');
    var ɵ2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.data; };
    /** @type {?} */
    var getWidgetsLibrairies = store.createSelector(getWidgetsLibrairiesState, (ɵ2));
    var ɵ3 = /**
     * @param {?} widgetsLibrairies
     * @return {?}
     */
    function (widgetsLibrairies) {
        return widgetsLibrairies
            ? widgetsLibrairies
                .reduce((/**
             * @param {?} result
             * @param {?} item
             * @return {?}
             */
            function (result, item) {
                return result.concat(item.categories);
            }), [])
                .filter(Boolean)
                .map((/**
             * @param {?} category
             * @return {?}
             */
            function (category) { return category.components; }))
                .reduce((/**
             * @param {?} allComponents
             * @param {?} uiComponent
             * @return {?}
             */
            function (allComponents, uiComponent) {
                return allComponents.concat(uiComponent);
            }), [])
            : [];
    };
    /** @type {?} */
    var getAllWidgets = store.createSelector(getWidgetsLibrairies, (ɵ3));
    var ɵ4 = /**
     * @param {?} widgets
     * @param {?} props
     * @return {?}
     */
    function (widgets, props) {
        return widgets.filter((/**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            if (props.screenType && component.rules) {
                /** @type {?} */
                var screenRules = component.rules.filter((/**
                 * @param {?} rule
                 * @return {?}
                 */
                function (rule) {
                    return isScreenAllowed(rule, props.screenType);
                }));
                return screenRules.length > 0 ? true : false;
            }
            return true;
        }));
    };
    /** @type {?} */
    var getAvailableWidgetsForGivenScreenType = store.createSelector(getAllWidgets, (ɵ4));
    var ɵ5 = /**
     * @param {?} widgets
     * @param {?} __1
     * @return {?}
     */
    function (widgets, _a) {
        var screenType = _a.screenType, section = _a.section;
        return widgets &&
            widgets.filter((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) {
                return widget.defaultScreen &&
                    widget.defaultScreen.defaultTypes[screenType] &&
                    widget.scope &&
                    widget.scope.filter((/**
                     * @param {?} scope
                     * @return {?}
                     */
                    function (scope) { return scope.split('.').find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item === section; })) !== undefined; })).length > 0;
            }));
    };
    /** @type {?} */
    var getWidgetsToAutoGenerateSection = store.createSelector(getAvailableWidgetsForGivenScreenType, (ɵ5));
    var ɵ6 = /**
     * @param {?} widgets
     * @return {?}
     */
    function (widgets) {
        return widgets.filter((/**
         * @param {?} widget
         * @return {?}
         */
        function (widget) { return widget.layouts; }));
    };
    /** @type {?} */
    var getAllLayoutsWidgets = store.createSelector(getAllWidgets, (ɵ6));
    var ɵ7 = /**
     * @param {?} widgets
     * @param {?} __1
     * @return {?}
     */
    function (widgets, _a) {
        var name = _a.name;
        return (widgets && widgets.find((/**
         * @param {?} widget
         * @return {?}
         */
        function (widget) { return widget.name.toLowerCase() === name.toLowerCase(); }))) || '';
    };
    /** @type {?} */
    var getWidgetByName = store.createSelector(getAllWidgets, (ɵ7));
    /** @type {?} */
    var key = 'SE - Widgets Librairies';
    /**
     * Verify wether the component is allowed inside the screen or not
     * \@param rule the rule
     * \@param screen the current screen template
     * @type {?}
     */
    var isScreenAllowed = (/**
     * @param {?} rule
     * @param {?} screen
     * @return {?}
     */
    function (rule, screen) {
        return ((rule.includedScreens &&
            rule.includedScreens.includes(screen) &&
            !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
            (rule.includedScreens &&
                rule.includedScreens.length === 0 &&
                rule.excludedScreens &&
                rule.excludedScreens.length === 0));
    });
    var ɵ8 = isScreenAllowed;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_SCREENS_LIBRAIRIES = store.createAction('[SE - Screens Libraries] Load Screens Libraries');
    /** @type {?} */
    var LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY = store.createAction('[SE - Screens Libraries] Load Screens Libraries Successfully', store.props());
    /** @type {?} */
    var LOAD_SCREENS_LIBRAIRIES_FAILED = store.createAction('[SE - Screens Libraries] Load Screens Libraries Failed', store.props());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreensLibrairiesEffects = /** @class */ (function () {
        function ScreensLibrairiesEffects(actions$, screensLibrariesApi) {
            var _this = this;
            this.actions$ = actions$;
            this.screensLibrariesApi = screensLibrariesApi;
            this.loadWidgetsLibraries$ = effects.createEffect((/**
             * @return {?}
             */
            function () {
                return _this.actions$.pipe(effects.ofType(LOAD_SCREENS_LIBRAIRIES), operators.concatMap((/**
                 * @return {?}
                 */
                function () {
                    return _this.screensLibrariesApi.getAllScreensLibrairies().pipe(operators.map((/**
                     * @param {?} screensLibrairies
                     * @return {?}
                     */
                    function (screensLibrairies) {
                        return LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY({ screensLibrairies: screensLibrairies });
                    }), operators.catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return rxjs.of(LOAD_SCREENS_LIBRAIRIES_FAILED({ err: err })); }))));
                })));
            }));
        }
        ScreensLibrairiesEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ScreensLibrairiesEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: ScreensLibrairiesAPIService }
        ]; };
        return ScreensLibrairiesEffects;
    }());
    if (false) {
        /** @type {?} */
        ScreensLibrairiesEffects.prototype.loadWidgetsLibraries$;
        /**
         * @type {?}
         * @private
         */
        ScreensLibrairiesEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        ScreensLibrairiesEffects.prototype.screensLibrariesApi;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreensLibrairiesState = /** @class */ (function () {
        function ScreensLibrairiesState() {
        }
        return ScreensLibrairiesState;
    }());
    if (false) {
        /** @type {?} */
        ScreensLibrairiesState.prototype.data;
    }
    /** @type {?} */
    var initialState$1 = new ScreensLibrairiesState();
    var ɵ0$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return (__assign({}, state)); }, ɵ1$1 = /**
     * @param {?} state
     * @param {?} __1
     * @return {?}
     */
    function (state, _a) {
        var screensLibrairies = _a.screensLibrairies;
        return (__assign({}, state, { data: __spread(screensLibrairies) }));
    };
    /** @type {?} */
    var screensLibrairiesReducer = store.createReducer(initialState$1, store.on(LOAD_SCREENS_LIBRAIRIES, (ɵ0$1)), store.on(LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY, (ɵ1$1)));
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function reducer$1(state, action) {
        return screensLibrairiesReducer(state, action);
    }
    /** @type {?} */
    var getScreenssLibrairiesState = store.createFeatureSelector('SE - Screens Librairies');
    var ɵ2$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.data; };
    /** @type {?} */
    var getScreensLibrairies = store.createSelector(getScreenssLibrairiesState, (ɵ2$1));
    var ɵ3$1 = /**
     * @param {?} screensLibrairies
     * @return {?}
     */
    function (screensLibrairies) {
        return screensLibrairies &&
            screensLibrairies
                .reduce((/**
             * @param {?} result
             * @param {?} item
             * @return {?}
             */
            function (result, item) {
                return result.concat(item.templates);
            }), [])
                .filter(Boolean);
    };
    /** @type {?} */
    var getAllScreens = store.createSelector(getScreensLibrairies, (ɵ3$1));
    var ɵ4$1 = /**
     * @param {?} allScreensTemplates
     * @param {?} __1
     * @return {?}
     */
    function (allScreensTemplates, _a) {
        var screensTemplates = _a.screensTemplates;
        return (allScreensTemplates &&
            allScreensTemplates.filter((/**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                return screensTemplates.includes(template.template);
            }))) ||
            [];
    };
    /** @type {?} */
    var getScreensTemplateForGivenScreens = store.createSelector(getAllScreens, (ɵ4$1));
    var ɵ5$1 = /**
     * @param {?} allScreensTemplates
     * @param {?} __1
     * @return {?}
     */
    function (allScreensTemplates, _a) {
        var templateName = _a.templateName;
        return (allScreensTemplates &&
            allScreensTemplates.find((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return template.template === templateName; }))) ||
            [];
    };
    /** @type {?} */
    var getScreenTemplate = store.createSelector(getAllScreens, (ɵ5$1));
    /** @type {?} */
    var key$1 = 'SE - Screens Librairies';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreenValidationService = /** @class */ (function () {
        function ScreenValidationService(widgetsLibrairiesManagement, screensLibrairiesManagement) {
            this.widgetsLibrairiesManagement = widgetsLibrairiesManagement;
            this.screensLibrairiesManagement = screensLibrairiesManagement;
        }
        /**
         * @param {?} screensNames
         * @return {?}
         */
        ScreenValidationService.prototype.validateScreensNames = /**
         * @param {?} screensNames
         * @return {?}
         */
        function (screensNames) {
            if (screensNames && screensNames.length > 0) {
                return screensNames.reduce((/**
                 * @param {?} result
                 * @param {?} itm
                 * @return {?}
                 */
                function (result, itm) {
                    /** @type {?} */
                    var empty = itm.displayed.length === 0;
                    if (empty) {
                        result[itm.name] = { error: 'The screen name is mandatory' };
                        return result;
                    }
                    /** @type {?} */
                    var occurence = screensNames.filter((/**
                     * @param {?} name
                     * @return {?}
                     */
                    function (name) { return name.displayed === itm.displayed; })).length;
                    /** @type {?} */
                    var pattern = itm.displayed.match(/[^0-9a-zA-Z_-\s]/g);
                    if (occurence > 1) {
                        result[itm.name] = { error: 'This name already exists' };
                    }
                    if (pattern) {
                        result[itm.name] = {
                            error: 'Avoid using special characters'
                        };
                    }
                    return result;
                }), {});
            }
        };
        /**
         * @param {?} screenName
         * @return {?}
         */
        ScreenValidationService.prototype.validateScreenName = /**
         * @param {?} screenName
         * @return {?}
         */
        function (screenName) {
            return (screenName.match(/[^0-9a-zA-Z_-\s]/g) !== null);
        };
        // TODO: refactor to validateScreenSchema
        // TODO: refactor to validateScreenSchema
        /**
         * @param {?} screen
         * @return {?}
         */
        ScreenValidationService.prototype.validateSchema = 
        // TODO: refactor to validateScreenSchema
        /**
         * @param {?} screen
         * @return {?}
         */
        function (screen) {
            var _this = this;
            /** @type {?} */
            var components$ = this.widgetsLibrairiesManagement.select(getAllWidgets);
            /** @type {?} */
            var screenTemplates$ = this.screensLibrairiesManagement.select(getAllScreens);
            return rxjs.zip(components$, screenTemplates$).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), components = _b[0], screenTemplates = _b[1];
                /** @type {?} */
                var sections = screenTemplates.find((/**
                 * @param {?} screenTemplate
                 * @return {?}
                 */
                function (screenTemplate) { return screenTemplate.template === screen.content.template; })).sections;
                return _this._validateScreenSectionsRecursive(sections, screen.content, components);
            })));
        };
        /**
         * @private
         * @param {?} sections
         * @param {?} screen
         * @param {?} components
         * @return {?}
         */
        ScreenValidationService.prototype._validateScreenSectionsRecursive = /**
         * @private
         * @param {?} sections
         * @param {?} screen
         * @param {?} components
         * @return {?}
         */
        function (sections, screen, components) {
            var _this = this;
            return sections.reduce((/**
             * @param {?} result
             * @param {?} section
             * @return {?}
             */
            function (result, section) {
                if (section.sections) {
                    return result.concat(_this._validateScreenSectionsRecursive(section.sections, screen[section.name], components));
                }
                /** @type {?} */
                var screenSectionToValidate = screen[section.name];
                if (Array.isArray(screenSectionToValidate)) {
                    /** @type {?} */
                    var fieldsOccurences = _this.getFielsOccurences(screenSectionToValidate);
                    return result.concat(_this._validateItemsRecursive(screenSectionToValidate, fieldsOccurences, components, section.path || section.name, section.name));
                }
                return result;
            }), new Array());
        };
        /**
         * @private
         * @param {?} items
         * @param {?} fieldsOccurences
         * @param {?} components
         * @param {?} sectionPath
         * @param {?=} section
         * @return {?}
         */
        ScreenValidationService.prototype._validateItemsRecursive = /**
         * @private
         * @param {?} items
         * @param {?} fieldsOccurences
         * @param {?} components
         * @param {?} sectionPath
         * @param {?=} section
         * @return {?}
         */
        function (items, fieldsOccurences, components, sectionPath, section) {
            var _this = this;
            return items.reduce((/**
             * @param {?} result
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (result, item, index) {
                /** @type {?} */
                var deepPath = sectionPath;
                /** @type {?} */
                var sep = sectionPath.indexOf('-') > 0 ? '.' : '-';
                /** @type {?} */
                var componentMetaData = components.find((/**
                 * @param {?} component
                 * @return {?}
                 */
                function (component) { return component.name === item.type; }));
                if (componentMetaData) {
                    /** @type {?} */
                    var jsonSchemaValidator = new jsonschema.Validator();
                    /** @type {?} */
                    var validatorResult = jsonSchemaValidator.validate(item.properties || item, componentMetaData.schema);
                    // check fieldrequired and namerequired
                    if ((componentMetaData.fieldRequired || componentMetaData.nameRequired) &&
                        (!item.name || item.name === '')) {
                        /** @type {?} */
                        var property = componentMetaData.fieldRequired ? 'Field' : 'Name';
                        validatorResult.errors.push(new jsonschema.ValidationError('', '', undefined, '', 'required', property));
                    }
                    // check occurrence
                    if (item.name && fieldsOccurences[item.name] !== 1) {
                        validatorResult.errors.push(new jsonschema.ValidationError('', '', undefined, '', 'unique', ''));
                    }
                    if (validatorResult.errors && validatorResult.errors.length > 0) {
                        /** @type {?} */
                        var validationInfo = {
                            message: _this._getErrorMessage(validatorResult),
                            path: "" + deepPath + sep + index.toString()
                        };
                        result.push(validationInfo);
                    }
                    // handle containers items
                    if (item.components) {
                        if (!deepPath) {
                            deepPath = index.toString();
                        }
                        else {
                            deepPath = "" + deepPath + sep + index;
                        }
                        return result.concat(_this._validateItemsRecursive(item.components, fieldsOccurences, components, deepPath, section));
                    }
                }
                return result;
            }), []);
        };
        /**
         * @private
         * @param {?} items
         * @return {?}
         */
        ScreenValidationService.prototype.getFielsOccurences = /**
         * @private
         * @param {?} items
         * @return {?}
         */
        function (items) {
            /** @type {?} */
            var allComponents = this.getAllComponents(items);
            return lodash.countBy(allComponents, 'name');
        };
        /**
         * @private
         * @param {?} items
         * @return {?}
         */
        ScreenValidationService.prototype.getAllComponents = /**
         * @private
         * @param {?} items
         * @return {?}
         */
        function (items) {
            var _this = this;
            /** @type {?} */
            var allComponents = [];
            items.forEach((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                if (component.components) {
                    allComponents.push.apply(allComponents, __spread(_this.getAllComponents(component.components)));
                }
                allComponents.push(component);
            }));
            return allComponents;
        };
        /**
         * @private
         * @param {?} validatorResult
         * @return {?}
         */
        ScreenValidationService.prototype._getErrorMessage = /**
         * @private
         * @param {?} validatorResult
         * @return {?}
         */
        function (validatorResult) {
            /** @type {?} */
            var requiredPropertiesErrors = validatorResult.errors.filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error.name === 'required'; }));
            /** @type {?} */
            var requiredMessage = '';
            if (requiredPropertiesErrors.length > 0) {
                requiredMessage = requiredPropertiesErrors.reduce((/**
                 * @param {?} requiredMsg
                 * @param {?} error
                 * @return {?}
                 */
                function (requiredMsg, error) {
                    return requiredMsg + " <li> " + error.argument + " </li>";
                }), '');
                /** @type {?} */
                var title = '<span>The properties below are required :</span>';
                requiredMessage = requiredMessage
                    ? title + ("<ul>" + requiredMessage + "</ul>")
                    : '';
            }
            /** @type {?} */
            var invalidTypeErrors = validatorResult.errors.filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error.name === 'type'; }));
            /** @type {?} */
            var invalidTypeMessage = '';
            if (invalidTypeErrors.length > 0) {
                invalidTypeMessage = invalidTypeErrors.reduce((/**
                 * @param {?} invalidMsg
                 * @param {?} error
                 * @return {?}
                 */
                function (invalidMsg, error) {
                    return invalidMsg + " <li> " + error.property.replace('instance.', '') + " " + error.message;
                }), '');
                /** @type {?} */
                var title = '<span>The properties below have invalid type :</span>';
                invalidTypeMessage = invalidTypeMessage
                    ? title + ("<ul>" + invalidTypeMessage + "</ul>")
                    : '';
            }
            /** @type {?} */
            var invalidEnumValuesErrors = validatorResult.errors.filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error.name === 'enum'; }));
            /** @type {?} */
            var invalidEnumValuesMessage = '';
            if (invalidEnumValuesErrors.length > 0) {
                invalidEnumValuesMessage = invalidEnumValuesErrors.reduce((/**
                 * @param {?} invalidValueEnum
                 * @param {?} error
                 * @return {?}
                 */
                function (invalidValueEnum, error) {
                    return invalidValueEnum + " <li> " + error.property.replace('instance.', '') + " " + error.message;
                }), '');
                /** @type {?} */
                var title = '<span>The properties below have invalid value selected :</span>';
                invalidEnumValuesMessage = invalidEnumValuesMessage
                    ? title + ("<ul>" + invalidEnumValuesMessage + "</ul>")
                    : '';
            }
            /** @type {?} */
            var invalidItemName = validatorResult.errors.filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error.name === 'unique'; }));
            /** @type {?} */
            var invalidItemNameMessage = invalidItemName.length > 0 ? '<span>Duplicated name</span><br/>' : '';
            return "" + invalidItemNameMessage + requiredMessage + invalidTypeMessage + invalidEnumValuesMessage;
        };
        ScreenValidationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ScreenValidationService.ctorParameters = function () { return [
            { type: store.Store },
            { type: store.Store }
        ]; };
        return ScreenValidationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ScreenValidationService.prototype.widgetsLibrairiesManagement;
        /**
         * @type {?}
         * @private
         */
        ScreenValidationService.prototype.screensLibrairiesManagement;
    }
    /**
     * @record
     */
    function ValidationInfo() { }
    if (false) {
        /** @type {?} */
        ValidationInfo.prototype.message;
        /** @type {?|undefined} */
        ValidationInfo.prototype.path;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnloadModuleService = /** @class */ (function () {
        function UnloadModuleService(validationStore) {
            this.validationStore = validationStore;
        }
        /**
         * @return {?}
         */
        UnloadModuleService.prototype.unloadModules = /**
         * @return {?}
         */
        function () {
            this.validationStore.complete();
        };
        UnloadModuleService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UnloadModuleService.ctorParameters = function () { return [
            { type: ValidationStore }
        ]; };
        return UnloadModuleService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UnloadModuleService.prototype.validationStore;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutService = /** @class */ (function () {
        function LayoutService() {
            this.useCasePolicyMode$ = new rxjs.BehaviorSubject(false);
        }
        /**
         * @return {?}
         */
        LayoutService.prototype.enableUcPolicyMode = /**
         * @return {?}
         */
        function () {
            this.useCasePolicyMode$.next(true);
        };
        /**
         * @return {?}
         */
        LayoutService.prototype.disableUcPolicyMode = /**
         * @return {?}
         */
        function () {
            this.useCasePolicyMode$.next(false);
        };
        /**
         * @return {?}
         */
        LayoutService.prototype.isUcPolicyModeActive = /**
         * @return {?}
         */
        function () {
            return this.useCasePolicyMode$.asObservable();
        };
        LayoutService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LayoutService.ctorParameters = function () { return []; };
        return LayoutService;
    }());
    if (false) {
        /** @type {?} */
        LayoutService.prototype.useCasePolicyMode$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UuidService = /** @class */ (function () {
        function UuidService() {
        }
        /**
         * @return {?}
         */
        UuidService.prototype.getUuid = /**
         * @return {?}
         */
        function () {
            return uuid.v4();
        };
        UuidService.decorators = [
            { type: core.Injectable }
        ];
        return UuidService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var Device = {
        DESKTOP: 'desktop',
        PHONE: 'phone',
        TABLET: 'tablet',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Navigator = /** @class */ (function () {
        function Navigator(previwerStore) {
            this.previwerStore = previwerStore;
            this.view$ = new rxjs.BehaviorSubject('feature');
        }
        /**
         * @return {?}
         */
        Navigator.prototype.view = /**
         * @return {?}
         */
        function () {
            return this.view$;
        };
        /**
         * @return {?}
         */
        Navigator.prototype.goToScreenExplorer = /**
         * @return {?}
         */
        function () {
            this.view$.next('screen');
        };
        /**
         * @return {?}
         */
        Navigator.prototype.goToPageExplorer = /**
         * @return {?}
         */
        function () {
            this.view$.next('page');
        };
        /**
         * @return {?}
         */
        Navigator.prototype.goToFeatureExplorer = /**
         * @return {?}
         */
        function () {
            this.previwerStore.next(undefined);
            //  this.propertiesManagement.dispatch(editScreenWidgetProperties(undefined));
            this.view$.next('feature');
        };
        Navigator.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        Navigator.ctorParameters = function () { return [
            { type: PreviewStore }
        ]; };
        return Navigator;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        Navigator.prototype.view$;
        /**
         * @type {?}
         * @private
         */
        Navigator.prototype.previwerStore;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreenEditorComponent = /** @class */ (function () {
        function ScreenEditorComponent(unloadModuleService, layoutService, workspaceApi, swaggerServicesStore, navigator) {
            this.unloadModuleService = unloadModuleService;
            this.layoutService = layoutService;
            this.workspaceApi = workspaceApi;
            this.swaggerServicesStore = swaggerServicesStore;
            this.navigator = navigator;
            this.selectedDevice = Device.DESKTOP;
            this.landscapeMode = false;
            this.collapseComponents = false;
            this.collapseProperties = false;
        }
        /**
         * @return {?}
         */
        ScreenEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            //  this.featuresManagementStore.dispatch(loadFeatures());
            // this.widgetsLibrairiesStore.dispatch(LOAD_WIDEGTS_LIBRAIRIES());
            // this.screensLibrairiesStore.dispatch(LOAD_SCREENS_LIBRAIRIES());
            // this.modelsManagementStore.dispatch(LOAD_MODELS());
            var _this = this;
            this.navigator.goToFeatureExplorer();
            this.displayDeviceSwitcher$ = this.layoutService
                .isUcPolicyModeActive()
                .pipe(operators.map((/**
             * @param {?} display
             * @return {?}
             */
            function (display) { return !display; })));
            this.displayUseCasePolicy$ = this.layoutService.isUcPolicyModeActive();
            /*  this.propertiesTitle$ = this.propertiesManagementStore
                .select(getProperties)
                .pipe(
                  map(value =>
                    value && value.data && value.data.type ? value.data.type : ''
                  ),
                  distinctUntilChanged()
                );
          */
            this.swaggerServices$ = this.workspaceApi
                .getServices()
                .subscribe((/**
             * @param {?} services
             * @return {?}
             */
            function (services) {
                _this.swaggerServicesStore.next(services);
            }));
        };
        /**
         * @return {?}
         */
        ScreenEditorComponent.prototype.onCollapseComponents = /**
         * @return {?}
         */
        function () {
            this.collapseComponents = !this.collapseComponents;
        };
        /**
         * @return {?}
         */
        ScreenEditorComponent.prototype.onCollapseProperties = /**
         * @return {?}
         */
        function () {
            this.collapseProperties = !this.collapseProperties;
        };
        /**
         * @param {?} device
         * @return {?}
         */
        ScreenEditorComponent.prototype.selectDevice = /**
         * @param {?} device
         * @return {?}
         */
        function (device) {
            this.selectedDevice = device;
        };
        /**
         * @param {?} landscapeMode
         * @return {?}
         */
        ScreenEditorComponent.prototype.changeLayout = /**
         * @param {?} landscapeMode
         * @return {?}
         */
        function (landscapeMode) {
            this.landscapeMode = landscapeMode;
        };
        /**
         * @return {?}
         */
        ScreenEditorComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unloadModuleService.unloadModules();
            if (this.swaggerServices$) {
                this.swaggerServices$.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        ScreenEditorComponent.prototype.backToPreview = /**
         * @return {?}
         */
        function () {
            this.layoutService.disableUcPolicyMode();
        };
        ScreenEditorComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'screen-editor',
                        template: "<global-layout>\n  <!-- Screens -->\n  <left-container class=\"left-container screen-container\">\n    <p-panel class=\"screen-panel\">\n      <p-header>\n        <div class=\"header-switcher\">\n          <p-button label=\"Data Model\" class=\"selected\"> </p-button>\n        </div>\n      </p-header>\n      <sc-explorer></sc-explorer>\n    </p-panel>\n  </left-container>\n  <!-- Screens -->\n\n  <!-- Preview -->\n  <center-container class=\"center-container\">\n    <p-panel class=\"preview-panel\">\n      <p-header>\n        <div class=\"custom-header\">\n          <div>\n            <span *ngIf=\"(displayDeviceSwitcher$ | async) === true\"\n              >Configuration</span\n            >\n\n            <div\n              *ngIf=\"(displayUseCasePolicy$ | async) === true\"\n              class=\"policy\"\n            >\n              <p-button\n                icon=\"fa fa-fw fa-arrow-left\"\n                class=\"back-button\"\n                pTooltip=\"Back to preview\"\n                tooltipPosition=\"bottom\"\n                showDelay=\"1000\"\n                hideDelay=\"500\"\n                (onClick)=\"backToPreview()\"\n              ></p-button>\n              <span>UseCase policy</span>\n            </div>\n          </div>\n          <div class=\"header-actions\">\n\n          </div>\n        </div>\n      </p-header>\n      <sc-preview\n        [device]=\"selectedDevice\"\n        [landscapeMode]=\"landscapeMode\"\n        [ngClass]=\"{ hide: displayUseCasePolicy$ | async }\"\n      ></sc-preview>\n    </p-panel>\n  </center-container>\n  <!-- Preview -->\n\n  <!-- Properties -->\n  <right-container class=\"right-container\">\n    <div\n      class=\"components-container\"\n      [class.collapse-container]=\"collapseComponents\"\n    >\n      <sc-widgets-to-screen-switcher\n        [collapseProperties]=\"collapseProperties\"\n        (collapse)=\"onCollapseComponents()\"\n      >\n      </sc-widgets-to-screen-switcher>\n    </div>\n    <!--<div\n      class=\"proprties-container\"\n      [class.collapse-container]=\"collapseProperties\"\n    >\n      <p-panel\n        class=\"proprties-panel\"\n        collapseIcon=\"fa fa-angle-down\"\n        expandIcon=\"fa fa-angle-up\"\n        [toggleable]=\"!collapseComponents\"\n        (onBeforeToggle)=\"onCollapseProperties()\"\n      >\n        <p-header>\n          <span>{{ propertiesTitle$ | async }} properties</span>\n        </p-header>\n        <sc-properties></sc-properties>\n      </p-panel>\n    </div>-->\n  </right-container>\n  <!-- Properties -->\n</global-layout>\n\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i);.left-container{width:100%}.left-container sc-explorer{display:block}.right-container{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.components-container{-webkit-box-flex:1;flex:1;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:50%}.components-container .card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:49px}.proprties-container{-webkit-box-flex:1;flex:1;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:50%}.proprties-container .card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:49px}.components-container.collapse-container{-webkit-box-flex:0;flex:0 1 32px;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:32px}.components-container.collapse-container .card-body{display:none;-webkit-transition:.5s linear;transition:.5s linear}.proprties-container.collapse-container{-webkit-box-flex:0;flex:0 1 32px;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:32px}.proprties-container.collapse-container .card-body{display:none;-webkit-transition:.5s linear;transition:.5s linear}sc-preview.hide{display:none}:host ::ng-deep .ui-overlaypanel-close{top:0;right:0}:host ::ng-deep .policy .back-button .ui-button{height:auto}:host ::ng-deep a{color:#848484}:host ::ng-deep a:focus{outline:0!important}:host ::ng-deep a:active{outline:0!important}:host ::ng-deep .ui-button{border:none;border-radius:0;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ui-button:focus{outline:0!important;border:none}:host ::ng-deep .ui-button:active{outline:0!important}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-button:enabled:hover{border:none;border-radius:0}:host ::ng-deep .ui-tree .ui-button-icon-only:focus{outline:0!important}:host ::ng-deep .ui-tree .ui-button-icon-only:active{outline:0!important}:host ::ng-deep .ui-tree .ui-treenode-icon{font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-treenode-children{padding:0 0 0 10px}:host ::ng-deep .ui-widget{font-family:Karla,sans-serif}:host ::ng-deep .screen-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .screen-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .screen-panel .ui-panel .ui-panel-content{padding:10px;height:100%;overflow:auto}:host ::ng-deep .screen-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;width:100%;overflow-y:hidden}:host ::ng-deep .screen-panel .component-panel .ui-panel.ui-widget{width:auto}:host ::ng-deep .components-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .components-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px 5px 20px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .components-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%}:host ::ng-deep .components-panel .ui-panel .ui-panel-content{height:100%;overflow:auto;padding:0}:host ::ng-deep .proprties-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .proprties-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px 5px 20px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .proprties-panel .ui-panel .ui-panel-content{padding:10px;height:100%;overflow:auto}:host ::ng-deep .proprties-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%}:host ::ng-deep .proprties-panel .ui-panel-titlebar span{max-width:270px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ::ng-deep .preview-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;border-left:1px solid #c6c6c6;border-right:1px solid #c6c6c6;padding:0}:host ::ng-deep .preview-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:#eee;height:30px;padding:0 10px;font-size:14px;text-transform:uppercase;background:#eee}:host ::ng-deep .preview-panel .ui-panel .ui-panel-content{padding:5px;height:100%;overflow:auto}:host ::ng-deep .preview-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%;overflow-x:auto}:host ::ng-deep .preview-panel .header-actions .ui-button{border:none;color:#000;background:0 0;border-radius:0;height:30px;width:30px}:host ::ng-deep .ui-dialog{border:none;border-radius:0}:host ::ng-deep .ui-dialog .ui-dialog-content{border:0}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-close{color:#414a4b;font-size:20px;border:none}:host ::ng-deep .ui-dialog .ui-dialog-footer{border:none;margin-top:20px}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-icon{margin-top:3px}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-icon:hover{background:0 0;border:none}:host ::ng-deep .edit-screen-panel .ui-panel.ui-widget .ui-panel-titlebar{text-transform:none}:host ::ng-deep .fa:active{outline:0!important}:host ::ng-deep .fa:focus{outline:0!important}:host ::ng-deep .ui-widget-content{background-color:#fff!important}:host ::ng-deep .ui-panel .ui-panel-content{border:none!important}:host ::ng-deep .ui-panel .ui-panel-titlebar-icon{background:0 0;border:none;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover{border:none;background:0 0;color:#eee}:host ::ng-deep .ui-panel.ui-widget .ui-panel-titlebar-icon span{font-size:16px}:host ::ng-deep .ui-dialog.ui-widget .ui-dialog-titlebar{padding:11px 20px;height:45px;background:#fff;border-bottom:1px solid #f1f1f1}:host ::ng-deep .ui-dialog.ui-widget .ui-dialog-titlebar .ui-dialog-title{color:#414a4b;font-weight:700}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-content{background:#f9f9f9;color:#d83431;margin-top:20px}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-footer .ui-button{background:0 0;color:#414a4b;height:35px}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-footer .ui-button:first-child{background:#eee;color:#4caf50;height:35px}:host ::ng-deep .ui-dropdown{border:none;border-radius:0;box-shadow:none}:host ::ng-deep .ui-dropdown .ui-dropdown-panel{border:none;border-radius:0}:host ::ng-deep .ui-dropdown label.ui-dropdown-label{background:#eee;border-radius:2px;height:30px;width:180px}:host ::ng-deep .ui-dropdown .ui-dropdown-trigger.ui-state-default.ui-corner-right{background-color:#eee;margin-top:0;margin-right:1px;border-bottom:1px solid #c6c6c6;border-top:1px solid #c6c6c6;border-right:1px solid #c6c6c6;border-radius:2px;height:30px}:host ::ng-deep .ui-dropdown-panel .ui-dropdown-list{padding:0}:host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{border-radius:0;padding:5px 7px}:host ::ng-deep .ui-messages-error{border:none;color:#d83431;background:#f9f9f9}:host ::ng-deep .ui-autocomplete-dd input.ui-corner-all{border:none;background:#eee;height:30px}:host ::ng-deep .ui-autocomplete-dd .ui-autocomplete-dropdown.ui-corner-all{background:#eee;color:#222;height:30px}:host ::ng-deep .ui-inputtext{height:30px;border-radius:2px;border:1px solid #c6c6c6}:host ::ng-deep .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .ui-autocomplete .ui-autocomplete-panel{border-radius:0}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list-item{border-radius:0;padding:5px 15px}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list-item.ui-state-highlight{background:#e0e0e0;color:#222}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list{padding:0}:host ::ng-deep .ui-inputswitch{height:14px;width:34px!important;overflow:visible;background-color:#9e9e9e;border-color:#9e9e9e;border-radius:8px}:host ::ng-deep .ui-inputswitch .ui-inputswitch-handle{top:-4px;background-color:#fff;border-radius:50%;-webkit-transition:.3s;transition:.3s;width:20px!important;height:20px!important;box-shadow:rgba(0,0,0,.2) 0 1px 3px 0,rgba(0,0,0,.137255) 0 1px 1px 0,rgba(0,0,0,.117647) 0 2px 1px -1px;border:none}:host ::ng-deep .ui-inputswitch .ui-inputswitch-on{visibility:hidden}:host ::ng-deep .ui-inputswitch .ui-inputswitch-on span{visibility:hidden}:host ::ng-deep .ui-inputswitch .ui-inputswitch-off span{visibility:hidden}:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked{background-color:#efadac;border-color:#efadac}:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-handle{background-color:#d83431;color:#d83431}:host ::ng-deep .header-switcher{margin-top:-2px;display:inline-block}:host ::ng-deep .header-switcher .selected button{background-color:#d83431;color:#eee}:host ::ng-deep .header-switcher button{color:#1b1d1f;background:#d9d9d9;height:27px}:host ::ng-deep .header-switcher button:enabled:hover{background-color:#d83431;color:#eee}.custom-header{height:30px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]
                    }] }
        ];
        /** @nocollapse */
        ScreenEditorComponent.ctorParameters = function () { return [
            { type: UnloadModuleService },
            { type: LayoutService },
            { type: client.WorkspaceClientApi },
            { type: SwaggerServicesStore },
            { type: Navigator }
        ]; };
        return ScreenEditorComponent;
    }());
    if (false) {
        /** @type {?} */
        ScreenEditorComponent.prototype.components;
        /** @type {?} */
        ScreenEditorComponent.prototype.componentLibrary;
        /** @type {?} */
        ScreenEditorComponent.prototype.selectedDevice;
        /** @type {?} */
        ScreenEditorComponent.prototype.landscapeMode;
        /** @type {?} */
        ScreenEditorComponent.prototype.collapseComponents;
        /** @type {?} */
        ScreenEditorComponent.prototype.collapseProperties;
        /** @type {?} */
        ScreenEditorComponent.prototype.componentLibraries$;
        /** @type {?} */
        ScreenEditorComponent.prototype.displayDeviceSwitcher$;
        /** @type {?} */
        ScreenEditorComponent.prototype.displayUseCasePolicy$;
        /** @type {?} */
        ScreenEditorComponent.prototype.propertiesTitle$;
        /**
         * @type {?}
         * @private
         */
        ScreenEditorComponent.prototype.swaggerServices$;
        /**
         * @type {?}
         * @private
         */
        ScreenEditorComponent.prototype.unloadModuleService;
        /**
         * @type {?}
         * @private
         */
        ScreenEditorComponent.prototype.layoutService;
        /**
         * @type {?}
         * @private
         */
        ScreenEditorComponent.prototype.workspaceApi;
        /**
         * @type {?}
         * @private
         */
        ScreenEditorComponent.prototype.swaggerServicesStore;
        /**
         * @type {?}
         * @private
         */
        ScreenEditorComponent.prototype.navigator;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RemoveSpecialCharacterDirective = /** @class */ (function () {
        function RemoveSpecialCharacterDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        RemoveSpecialCharacterDirective.prototype.onChange = /**
         * @return {?}
         */
        function () {
            this.el.nativeElement.value = this.removeSpecialCharactersAndWhiteSpace(this.el.nativeElement.value);
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        RemoveSpecialCharacterDirective.prototype.removeSpecialCharactersAndWhiteSpace = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = value.replace(/\s+/g, '');
            value = value.replace(/[^0-9a-zA-Z_-]/g, '');
            return value;
        };
        RemoveSpecialCharacterDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[remove-special-char]'
                    },] }
        ];
        /** @nocollapse */
        RemoveSpecialCharacterDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        RemoveSpecialCharacterDirective.propDecorators = {
            onChange: [{ type: core.HostListener, args: ['keyup',] }]
        };
        return RemoveSpecialCharacterDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        RemoveSpecialCharacterDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CachedSrcDirective = /** @class */ (function () {
        function CachedSrcDirective(elRef, renderer) {
            this.elRef = elRef;
            this.renderer = renderer;
        }
        Object.defineProperty(CachedSrcDirective.prototype, "cachedSrc", {
            get: /**
             * @return {?}
             */
            function () {
                return this.elRef.nativeElement.src;
            },
            set: /**
             * @param {?} src
             * @return {?}
             */
            function (src) {
                if (this.elRef.nativeElement.src !== src) {
                    this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
                }
            },
            enumerable: true,
            configurable: true
        });
        CachedSrcDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'iframe'
                    },] }
        ];
        /** @nocollapse */
        CachedSrcDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        CachedSrcDirective.propDecorators = {
            cachedSrc: [{ type: core.Input }]
        };
        return CachedSrcDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CachedSrcDirective.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        CachedSrcDirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [RemoveSpecialCharacterDirective, CachedSrcDirective],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            http.HttpClientModule,
                            primeng.AccordionModule,
                            primeng.TooltipModule,
                            primeng.TreeModule,
                            primeng.ButtonModule,
                            primeng.ConfirmDialogModule,
                            primeng.PanelModule,
                            primeng.PickListModule,
                            primeng.DialogModule,
                            primeng.DragDropModule,
                            primeng.MultiSelectModule,
                            primeng.FieldsetModule,
                            primeng.DropdownModule,
                            primeng.MessagesModule,
                            primeng.MessageModule,
                            primeng.InputTextModule,
                            primeng.AutoCompleteModule,
                            primeng.MenuModule,
                            primeng.ChipsModule,
                            primeng.SpinnerModule,
                            primeng.ListboxModule,
                            primeng.CheckboxModule,
                            primeng.InputSwitchModule,
                            primeng.ToggleButtonModule,
                            primeng.ProgressSpinnerModule,
                            primeng.TabViewModule,
                            primeng.OverlayPanelModule
                        ],
                        exports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            http.HttpClientModule,
                            primeng.AccordionModule,
                            primeng.TooltipModule,
                            primeng.TreeModule,
                            primeng.ButtonModule,
                            primeng.ConfirmDialogModule,
                            primeng.PanelModule,
                            primeng.PickListModule,
                            primeng.DialogModule,
                            primeng.DragDropModule,
                            primeng.MultiSelectModule,
                            primeng.FieldsetModule,
                            primeng.DropdownModule,
                            primeng.MessagesModule,
                            primeng.MessageModule,
                            primeng.InputTextModule,
                            primeng.AutoCompleteModule,
                            primeng.MenuModule,
                            primeng.ChipsModule,
                            primeng.SpinnerModule,
                            primeng.ListboxModule,
                            primeng.CheckboxModule,
                            primeng.InputSwitchModule,
                            primeng.ToggleButtonModule,
                            primeng.ProgressSpinnerModule,
                            RemoveSpecialCharacterDirective,
                            primeng.TabViewModule,
                            table.TableModule,
                            primeng.OverlayPanelModule,
                            CachedSrcDirective
                        ]
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureExplorerComponent = /** @class */ (function () {
        function FeatureExplorerComponent(confirmationService) {
            this.confirmationService = confirmationService;
        }
        /* ngOnInit() {
           this.featuresTreeNodes$ = this.featuresManagement
             .select(getFeaturesToDisplay)
             .pipe(
               filter(Boolean),
               map((featuresState: FeatureState[]) =>
                 featuresState.map(featureState =>
                   this.getFeatureTreeNode(featureState, featureState.expaneded)
                 )
               )
             );
         }*/
        /* ngOnInit() {
            this.featuresTreeNodes$ = this.featuresManagement
              .select(getFeaturesToDisplay)
              .pipe(
                filter(Boolean),
                map((featuresState: FeatureState[]) =>
                  featuresState.map(featureState =>
                    this.getFeatureTreeNode(featureState, featureState.expaneded)
                  )
                )
              );
          }*/
        /**
         * @return {?}
         */
        FeatureExplorerComponent.prototype.ngOnInit = /* ngOnInit() {
            this.featuresTreeNodes$ = this.featuresManagement
              .select(getFeaturesToDisplay)
              .pipe(
                filter(Boolean),
                map((featuresState: FeatureState[]) =>
                  featuresState.map(featureState =>
                    this.getFeatureTreeNode(featureState, featureState.expaneded)
                  )
                )
              );
          }*/
        /**
         * @return {?}
         */
        function () { };
        FeatureExplorerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-feature-explorer',
                        template: "<!--<ng-container *ngIf=\"featuresTreeNodes$ | async as featuresTreeNodes; else loading\">\n  <p-tree *ngIf=\"featuresTreeNodes.length > 0; else noFeatureFound\" class=\"features-tree\" [value]=\"featuresTreeNodes\"\n    (onNodeExpand)=\"expandFeatureNode($event.node)\" (onNodeCollapse)=\"collapseFeatureNode($event.node)\"\n    selectionMode=\"single\" [(selection)]=\"selectedNode\">\n    <ng-template let-node pTemplate=\"feature\">\n      <div class=\"custom-node-label\">\n        <div class=\"node-label\">\n          <span>{{ node.label }}</span>\n          <span class=\"node-count\">({{ node.count }})</span>\n        </div>\n        <div *ngIf=\"node.updated\" class=\"node-updated\">\n          <div class=\"indecator\"></div>\n        </div>\n        <div class=\"node-actions\">\n          <p-button class=\"add-screen\" (click)=\"openAddScreensDialog(node)\" icon=\"fa fa-fw fa-plus\"\n            pTooltip=\"Add Screen\" tooltipPosition=\"bottom\"></p-button>\n          <p-button class=\"remove-tree-node\" (click)=\"deleteFeature(node)\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n            tooltipPosition=\"bottom\"></p-button>\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template let-node pTemplate=\"screen\">\n      <div class=\"custom-node-label\">\n        <span class=\"custom-node-icon\">\n          <i class=\"fas fa-link\" *ngIf=\"node.linked\" pTooltip=\"Linked to {{node.linked}} model\"\n            tooltipPosition=\"bottom\"></i>\n          <i class=\"fas fa-unlink\" *ngIf=\"!node.linked\" pTooltip=\"Not linked to a model\" tooltipPosition=\"bottom\"></i>\n        </span>\n        <div class=\"node-label\">\n          <span>{{ node.label }}</span>\n        </div>\n        <div *ngIf=\"node.updated\" class=\"node-updated\">\n          <div class=\"indecator\"></div>\n        </div>\n        <sc-policy-state-indicator [screenContent]=\"node.data\"></sc-policy-state-indicator>\n        <div class=\"node-actions\">\n          <p-button class=\"clone-node\" (click)=\"openCloneScreenDialo(node)\" icon=\"fa fa-fw fa-copy\" pTooltip=\"Clone\"\n            tooltipPosition=\"bottom\"></p-button>\n          <p-button class=\"edit-feature\" (click)=\"editFeatureScreen(node)\" icon=\"fa fa-fw fa-pen\" pTooltip=\"Edit\"\n            tooltipPosition=\"bottom\"></p-button>\n          <p-button class=\"preview-screen\" icon=\"fa fa-fw fa-eye\" (click)=\"preview(node)\" pTooltip=\"Preview\"\n            tooltipPosition=\"bottom\" showDelay=\"1000\" hideDelay=\"500\"></p-button>\n          <p-button class=\"remove-tree-node\" (click)=\"deleteScreen(node)\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n            tooltipPosition=\"bottom\"></p-button>\n        </div>\n      </div>\n    </ng-template>\n  </p-tree>\n  <ng-template #noFeatureFound>\n    <span class=\"no-match-found-msg\">\n      No feature found\n    </span>\n  </ng-template>\n</ng-container>\n<ng-template #loading>\n  <span class=\"no-match-found-msg\">\n    loading\n  </span>\n</ng-template>\n-->\n",
                        styles: [".no-match-found-msg{margin:-20px auto auto;padding:10px 85px;position:absolute;top:50%}:host ::ng-deep .ui-tree{width:100%;border:none}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .add-screen .ui-button{color:#5cb85c;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .remove-tree-node .ui-button{color:#d84315;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .clone-node .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .duplicate-tree-node .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .edit-feature .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .preview-screen .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-treenode-label{width:calc(100% - 38px)}:host ::ng-deep .ui-treenode-children .ui-treenode-label{width:calc(100% - 24px)}:host ::ng-deep .custom-node-label{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:30px}:host ::ng-deep .custom-node-icon{font-size:12px;margin-left:-10px;margin-top:2px;margin-right:2px}:host ::ng-deep .custom-node-icon .fa-unlink{color:#d84315}:host ::ng-deep .node-updated .indecator{width:6px;height:6px;border-radius:50%;background:#78909c;margin-left:2px}:host ::ng-deep .node-label{max-width:190px;overflow:hidden;text-overflow:ellipsis}:host ::ng-deep .node-actions{margin-left:auto;margin-right:0}:host ::ng-deep .node-actions .ui-button{background:0 0;border:none}:host ::ng-deep .node-actions .ui-button:enabled:hover{background:0 0;border:none}:host ::ng-deep .node-actions .ui-button-icon-only{width:20px}:host ::ng-deep .node-actions .edit-feature .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .preview-screen .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .remove-tree-node .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .clone-node .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .add-screen .ui-button{color:#c6c6c6}:host ::ng-deep .ui-panel.ui-widget .ui-panel-titlebar{padding:0 10px;background:#e0e0e0}:host ::ng-deep .actions-container .ui-button-icon-only{width:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        FeatureExplorerComponent.ctorParameters = function () { return [
            { type: api.ConfirmationService }
        ]; };
        return FeatureExplorerComponent;
    }());
    if (false) {
        /** @type {?} */
        FeatureExplorerComponent.prototype.featuresTreeNodes;
        /** @type {?} */
        FeatureExplorerComponent.prototype.selectedNode;
        /** @type {?} */
        FeatureExplorerComponent.prototype.featuresTreeNodes$;
        /**
         * @type {?}
         * @private
         */
        FeatureExplorerComponent.prototype.confirmationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureExplorerToolbarComponent = /** @class */ (function () {
        function FeatureExplorerToolbarComponent(ideActionsSevice) {
            this.ideActionsSevice = ideActionsSevice;
            this.filter = new core.EventEmitter();
            this.addFeature = new core.EventEmitter();
            this.saveFeatures = new core.EventEmitter();
            this.unsubscribe$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FeatureExplorerToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * Used to filter tree nodes.
         * @param event - dom event.
         */
        /**
         * Used to filter tree nodes.
         * @param {?} query
         * @return {?}
         */
        FeatureExplorerToolbarComponent.prototype.doFilter = /**
         * Used to filter tree nodes.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this.filter.emit(query);
        };
        /**
         * @return {?}
         */
        FeatureExplorerToolbarComponent.prototype.openAddFeatureDialog = /**
         * @return {?}
         */
        function () {
            this.addFeature.emit();
        };
        /**
         * @return {?}
         */
        FeatureExplorerToolbarComponent.prototype.doSaveFeatures = /**
         * @return {?}
         */
        function () {
            this.saveFeatures.emit();
        };
        /**
         * Save using keybord shortcut
         * Ctrt + s
         * @param event key board event
         */
        /**
         * Save using keybord shortcut
         * Ctrt + s
         * @param {?} event key board event
         * @return {?}
         */
        FeatureExplorerToolbarComponent.prototype.moveNodeWithKeys = /**
         * Save using keybord shortcut
         * Ctrt + s
         * @param {?} event key board event
         * @return {?}
         */
        function (event) {
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault();
                event.stopPropagation();
                this.doSaveFeatures();
            }
        };
        /**
         * @return {?}
         */
        FeatureExplorerToolbarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        FeatureExplorerToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-feature-explorer-toolbar',
                        template: "<div class=\"actions-container\">\n  <sc-toolbar-finder style=\"width: 100%\" placeHolder=\"Find feature...\" (filter)=\"doFilter($event)\">\n  </sc-toolbar-finder>\n  <div class=\"actions\">\n    <sc-toolbar-add-btn tooltip=\"Add Feature\" (click)=\"addFeaturePanel.toggle($event)\"></sc-toolbar-add-btn>\n  </div>\n</div>\n<div >\n  <span class=\"trash-count\">\n    <p-overlayPanel #addFeaturePanel showCloseIcon=\"true\">\n <!--     <sc-feature-creator *ngIf=\"addFeaturePanel.visible\" (featureAdded)=\"addFeaturePanel.hide()\">\n      </sc-feature-creator>-->\n    </p-overlayPanel>\n  </span>\n</div>\n",
                        styles: [".actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions-container .actions{display:-webkit-inline-box;display:inline-flex}.ui-inputgroup{width:100%}.trash-features-count-display,.trash-screens-count-display{border:1px solid #d83431;padding:5px;border-radius:5px;margin:5px;display:inline-block;top:0}.trash-count{display:block;margin-top:5px}"]
                    }] }
        ];
        /** @nocollapse */
        FeatureExplorerToolbarComponent.ctorParameters = function () { return [
            { type: client.IdeActionsService }
        ]; };
        FeatureExplorerToolbarComponent.propDecorators = {
            filter: [{ type: core.Output }],
            addFeature: [{ type: core.Output }],
            saveFeatures: [{ type: core.Output }],
            moveNodeWithKeys: [{ type: core.HostListener, args: ['window:keydown', ['$event'],] }]
        };
        return FeatureExplorerToolbarComponent;
    }());
    if (false) {
        /** @type {?} */
        FeatureExplorerToolbarComponent.prototype.filter;
        /** @type {?} */
        FeatureExplorerToolbarComponent.prototype.addFeature;
        /** @type {?} */
        FeatureExplorerToolbarComponent.prototype.saveFeatures;
        /** @type {?} */
        FeatureExplorerToolbarComponent.prototype.deletedScreens$;
        /** @type {?} */
        FeatureExplorerToolbarComponent.prototype.deletedFeatureCount$;
        /** @type {?} */
        FeatureExplorerToolbarComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        FeatureExplorerToolbarComponent.prototype.ideActionsSevice;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExplorerToolbarComponent = /** @class */ (function () {
        function ExplorerToolbarComponent(navigator, layoutService) {
            this.navigator = navigator;
            this.layoutService = layoutService;
            this.query = new core.EventEmitter();
            this.screenSaved = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ExplorerToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.view$ = this.navigator.view();
        };
        /**
         * @return {?}
         */
        ExplorerToolbarComponent.prototype.openFeatureSelector = /**
         * @return {?}
         */
        function () {
            // this.featuresManagement.dispatch(openDialogToAddFeature());
        };
        /**
         * @return {?}
         */
        ExplorerToolbarComponent.prototype.doSaveFeatures = /**
         * @return {?}
         */
        function () {
            // this.featuresManagement.dispatch(saveFeaturesUpdates());
        };
        /**
         * @param {?} query
         * @return {?}
         */
        ExplorerToolbarComponent.prototype.doFilter = /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this.query.emit(query);
        };
        ExplorerToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-explorer-toolbar',
                        template: "<!--<div class=\"toolbar\">\n  <sc-feature-explorer-toolbar\n    *ngIf=\"(view$ | async) === 'feature'\"\n    (filter)=\"doFilter($event)\"\n    (addFeature)=\"openFeatureSelector()\"\n    (saveFeatures)=\"doSaveFeatures()\"\n  >\n  </sc-feature-explorer-toolbar>\n  <sc-screen-explorer-toolbar *ngIf=\"(view$ | async) === 'screen'\">\n  </sc-screen-explorer-toolbar>\n</div>\n-->\n",
                        styles: [".toolbar{min-height:30px}"]
                    }] }
        ];
        /** @nocollapse */
        ExplorerToolbarComponent.ctorParameters = function () { return [
            { type: Navigator },
            { type: LayoutService }
        ]; };
        ExplorerToolbarComponent.propDecorators = {
            query: [{ type: core.Output }],
            screenSaved: [{ type: core.Output }]
        };
        return ExplorerToolbarComponent;
    }());
    if (false) {
        /** @type {?} */
        ExplorerToolbarComponent.prototype.query;
        /** @type {?} */
        ExplorerToolbarComponent.prototype.screenSaved;
        /** @type {?} */
        ExplorerToolbarComponent.prototype.view$;
        /**
         * @type {?}
         * @private
         */
        ExplorerToolbarComponent.prototype.navigator;
        /**
         * @type {?}
         * @private
         */
        ExplorerToolbarComponent.prototype.layoutService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToolbarFinderComponent = /** @class */ (function () {
        function ToolbarFinderComponent() {
            this.filterInput$ = new rxjs.Subject();
            this.filter = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ToolbarFinderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.subscription = this.filterInput$
                .asObservable()
                .pipe(operators.debounceTime(300), operators.distinctUntilChanged())
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.filter.emit(value);
            }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ToolbarFinderComponent.prototype.doFilter = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.filterInput$.next(event.target['value']);
        };
        /**
         * @return {?}
         */
        ToolbarFinderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
        ToolbarFinderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-toolbar-finder',
                        template: "<div class=\"ui-inputgroup filter-input\">\n  <input\n    type=\"text\"\n    (keyup)=\"doFilter($event)\"\n    pInputText\n    placeholder=\"{{placeHolder}}\"\n  />\n  <span class=\"ui-inputgroup-addon\">\n    <i class=\"fa fa-search\"></i>\n  </span>\n</div>\n",
                        styles: [".filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}"]
                    }] }
        ];
        ToolbarFinderComponent.propDecorators = {
            filter: [{ type: core.Output }],
            placeHolder: [{ type: core.Input }]
        };
        return ToolbarFinderComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ToolbarFinderComponent.prototype.filterInput$;
        /**
         * @type {?}
         * @private
         */
        ToolbarFinderComponent.prototype.subscription;
        /** @type {?} */
        ToolbarFinderComponent.prototype.filter;
        /** @type {?} */
        ToolbarFinderComponent.prototype.placeHolder;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToolbarAddBtnComponent = /** @class */ (function () {
        function ToolbarAddBtnComponent() {
            this.click = new core.EventEmitter();
        }
        ToolbarAddBtnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-toolbar-add-btn',
                        template: "\n    <p-button\n      icon=\"fa fa-fw fa-plus\"\n      pTooltip=\"{{ tooltip }}\"\n      tooltipPosition=\"bottom\"\n      (click)=\"click.emit($event)\"\n    ></p-button>\n  ",
                        styles: ["\n      :host ::ng-deep .ui-button {\n        color: #d83431;\n        background: transparent;\n        border: none;\n        border-radius: 0;\n        height: 25px;\n        width: 25px;\n        margin-right: 0;\n        margin-left: 2px;\n      }\n    ",
                            "\n      :host ::ng-deep .ui-button:focus,\n      :host ::ng-deep .ui-button:enabled:hover {\n        background: transparent;\n        color: #d83431 !important;\n      }\n    "]
                    }] }
        ];
        ToolbarAddBtnComponent.propDecorators = {
            tooltip: [{ type: core.Input }],
            click: [{ type: core.Output }]
        };
        return ToolbarAddBtnComponent;
    }());
    if (false) {
        /** @type {?} */
        ToolbarAddBtnComponent.prototype.tooltip;
        /** @type {?} */
        ToolbarAddBtnComponent.prototype.click;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToolbarSaveBtnComponent = /** @class */ (function () {
        function ToolbarSaveBtnComponent() {
            this.click = new core.EventEmitter();
        }
        ToolbarSaveBtnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-toolbar-save-btn',
                        template: "\n    <p-button\n      icon=\"fa fa-fw fa-check\"\n      pTooltip=\"{{ tooltip }}\"\n      tooltipPosition=\"bottom\"\n      (click)=\"click.emit()\"\n    ></p-button>\n  ",
                        styles: ["\n      :host ::ng-deep .ui-button {\n        background: transparent;\n        border: none;\n        border-radius: 0;\n        height: 25px;\n        width: 25px;\n        margin-right: 0;\n        margin-left: 2px;\n        color: #4caf50;\n      }\n      :host ::ng-deep .ui-button .ui-button-text {\n        padding: 0px 19px;\n      }\n      :host ::ng-deep .ui-button-text-icon-left .ui-button-icon-left {\n        font-size: 12px;\n        top: 14px;\n        left: 2px;\n      }\n    ",
                            "\n      :host ::ng-deep .ui-button:focus,\n      :host ::ng-deep .ui-button:enabled:hover {\n        color: #4caf50;\n        background: transparent;\n      }\n    "]
                    }] }
        ];
        ToolbarSaveBtnComponent.propDecorators = {
            tooltip: [{ type: core.Input }],
            click: [{ type: core.Output }]
        };
        return ToolbarSaveBtnComponent;
    }());
    if (false) {
        /** @type {?} */
        ToolbarSaveBtnComponent.prototype.tooltip;
        /** @type {?} */
        ToolbarSaveBtnComponent.prototype.click;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExplorerSharedModule = /** @class */ (function () {
        function ExplorerSharedModule() {
        }
        ExplorerSharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule],
                        declarations: [
                            ToolbarFinderComponent,
                            ToolbarAddBtnComponent,
                            ToolbarSaveBtnComponent
                        ],
                        exports: [
                            ToolbarFinderComponent,
                            ToolbarAddBtnComponent,
                            ToolbarSaveBtnComponent
                        ]
                    },] }
        ];
        return ExplorerSharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CenterContainerComponent = /** @class */ (function () {
        function CenterContainerComponent() {
        }
        /**
         * @return {?}
         */
        CenterContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CenterContainerComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'center-container',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        /** @nocollapse */
        CenterContainerComponent.ctorParameters = function () { return []; };
        return CenterContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalLayoutComponent = /** @class */ (function () {
        function GlobalLayoutComponent(layoutService) {
            this.layoutService = layoutService;
            this.leftCollapsed = false;
            this.rightCollapsed = false;
            this.ucPolicyActive = false;
        }
        /**
         * @return {?}
         */
        GlobalLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.layoutService.isUcPolicyModeActive().subscribe((/**
             * @param {?} isActive
             * @return {?}
             */
            function (isActive) {
                _this.rightCollapsed = isActive;
                _this.ucPolicyActive = isActive;
            }));
        };
        /**
         * Collapse/Expand the left container
         *
         */
        /**
         * Collapse/Expand the left container
         *
         * @return {?}
         */
        GlobalLayoutComponent.prototype.collapseLeft = /**
         * Collapse/Expand the left container
         *
         * @return {?}
         */
        function () {
            this.leftCollapsed = !this.leftCollapsed;
        };
        /**
         * Collapse/Expand the right container
         *
         */
        /**
         * Collapse/Expand the right container
         *
         * @return {?}
         */
        GlobalLayoutComponent.prototype.collapseRight = /**
         * Collapse/Expand the right container
         *
         * @return {?}
         */
        function () {
            this.rightCollapsed = !this.rightCollapsed;
        };
        GlobalLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'global-layout',
                        template: "<div class=\"global-layout\">\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"left\" [class.collapse-left]=\"leftCollapsed\">\n      <ng-content select=\"left-container\"></ng-content>\n    </div>\n\n    <div class=\"left-toggle-button\" [ngClass]=\"{'toggeled': leftCollapsed}\">\n      <p-button icon=\"fa fa-angle-double-left\" class=\"collapse-left-button\" [ngClass]=\"{'toggeled': leftCollapsed}\"\n        (click)=\"collapseLeft()\"></p-button>\n    </div>\n\n  </div>\n\n  <div class=\"center\">\n    <ng-content select=\"center-container\" class=\"center-container\"></ng-content>\n  </div>\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"right-toggle-button\" [ngClass]=\"{'toggeled': rightCollapsed}\">\n      <p-button [disabled]=\"ucPolicyActive\" icon=\"fa fa-angle-double-right\" class=\"collapse-right-button\" [ngClass]=\"{'toggeled': rightCollapsed}\"\n        (onClick)=\"collapseRight()\"></p-button>\n    </div>\n\n    <div class=\"right\" [class.collapse-right]=\"rightCollapsed\">\n      <ng-content select=\"right-container\"></ng-content>\n    </div>\n\n  </div>\n\n</div>",
                        styles: [".global-layout{display:-webkit-box;display:flex;height:100%;width:100%;border:1px solid #414a4b;background:#ffffffff}.center{width:100%;overflow:hidden;min-width:430px}.left,.right{width:315px;display:-webkit-box;display:flex;overflow:hidden;visibility:visible;-webkit-transition:.5s;transition:.5s}.left{border-right:1px solid #c6c6c6;box-sizing:content-box}.right{border-left:1px solid #c6c6c6}.collapse-left,.collapse-right{width:0;visibility:hidden}.collapsible-container{display:-webkit-box;display:flex}.left-toggle-button,.right-toggle-button{width:25px;height:30px;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.left-toggle-button{margin-left:-25px}.right-toggle-button{margin-right:-25px}.left-toggle-button.toggeled{margin-left:0}.right-toggle-button.toggeled{margin-right:0}:host ::ng-deep .collapse-left-button .ui-button,:host ::ng-deep .collapse-left-button .ui-button:enabled:active,:host ::ng-deep .collapse-right-button .ui-button,:host ::ng-deep .collapse-right-button .ui-button:enabled:active{background:0 0;border:none;color:#313439;width:25px;height:30px;-webkit-transition:none;transition:none;font-size:12px}:host ::ng-deep .collapse-left-button .ui-button:enabled:hover,:host ::ng-deep .collapse-right-button .ui-button:enabled:hover{color:#424242;background:0 0;border:none}:host ::ng-deep .collapse-left-button.toggeled .ui-button,:host ::ng-deep .collapse-right-button.toggeled .ui-button{color:#424242}:host ::ng-deep .collapse-left-button .ui-button .ui-button-icon-left,:host ::ng-deep .collapse-right-button .ui-button .ui-button-icon-left{font-size:14px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-right-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-left-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;color:#404a4b}"]
                    }] }
        ];
        /** @nocollapse */
        GlobalLayoutComponent.ctorParameters = function () { return [
            { type: LayoutService }
        ]; };
        return GlobalLayoutComponent;
    }());
    if (false) {
        /** @type {?} */
        GlobalLayoutComponent.prototype.leftCollapsed;
        /** @type {?} */
        GlobalLayoutComponent.prototype.rightCollapsed;
        /** @type {?} */
        GlobalLayoutComponent.prototype.ucPolicyActive;
        /**
         * @type {?}
         * @private
         */
        GlobalLayoutComponent.prototype.layoutService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LeftContainerComponent = /** @class */ (function () {
        function LeftContainerComponent() {
        }
        /**
         * @return {?}
         */
        LeftContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        LeftContainerComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'left-container',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        /** @nocollapse */
        LeftContainerComponent.ctorParameters = function () { return []; };
        return LeftContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RightContainerComponent = /** @class */ (function () {
        function RightContainerComponent() {
        }
        /**
         * @return {?}
         */
        RightContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        RightContainerComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'right-container',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        /** @nocollapse */
        RightContainerComponent.ctorParameters = function () { return []; };
        return RightContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule],
                        declarations: [
                            LeftContainerComponent,
                            RightContainerComponent,
                            CenterContainerComponent,
                            GlobalLayoutComponent
                        ],
                        exports: [
                            LeftContainerComponent,
                            RightContainerComponent,
                            CenterContainerComponent,
                            GlobalLayoutComponent
                        ]
                    },] }
        ];
        return LayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogHostDirective = /** @class */ (function () {
        function DialogHostDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        DialogHostDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[dialog-host]'
                    },] }
        ];
        /** @nocollapse */
        DialogHostDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        return DialogHostDirective;
    }());
    if (false) {
        /** @type {?} */
        DialogHostDirective.prototype.viewContainerRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogService = /** @class */ (function () {
        function DialogService() {
            this.shareWithReplay$ = new rxjs.BehaviorSubject(undefined);
        }
        /**
         * @param {?} content
         * @return {?}
         */
        DialogService.prototype.openDialog = /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            this.shareWithReplay$.next(content);
        };
        /**
         * @return {?}
         */
        DialogService.prototype.closeDialog = /**
         * @return {?}
         */
        function () {
            this.shareWithReplay$.next(undefined);
        };
        /**
         * @return {?}
         */
        DialogService.prototype.content = /**
         * @return {?}
         */
        function () {
            return this.shareWithReplay$;
        };
        DialogService.decorators = [
            { type: core.Injectable }
        ];
        return DialogService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DialogService.prototype.shareWithReplay$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogComponent = /** @class */ (function () {
        function DialogComponent(dialogService, componentFactoryResolver) {
            this.dialogService = dialogService;
            this.componentFactoryResolver = componentFactoryResolver;
        }
        /**
         * @return {?}
         */
        DialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dialogService$ = this.dialogService.content().subscribe((/**
             * @param {?} cmp
             * @return {?}
             */
            function (cmp) {
                if (cmp !== undefined) {
                    /** @type {?} */
                    var viewContainerRef = _this.dialogHost.viewContainerRef;
                    viewContainerRef.clear();
                    /** @type {?} */
                    var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(cmp.type);
                    /** @type {?} */
                    var componentRef = viewContainerRef.createComponent(componentFactory);
                    ((/** @type {?} */ (componentRef.instance))).setOptions(cmp.data);
                    componentRef.changeDetectorRef.detectChanges();
                    _this.title = cmp.title || componentRef.instance['title'];
                    _this.showDialog = true;
                }
                else {
                    _this.showDialog = false;
                }
            }));
        };
        /**
         * @return {?}
         */
        DialogComponent.prototype.hideDialog = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var viewContainerRef = this.dialogHost.viewContainerRef;
            viewContainerRef.clear();
        };
        /**
         * @return {?}
         */
        DialogComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.dialogService$) {
                this.dialogService$.unsubscribe();
            }
        };
        DialogComponent.decorators = [
            { type: core.Component, args: [{ selector: 'sc-dialog', template: "<!--<p-dialog\n[modal]=\"true\"\n[header]=\"title\"\n[(visible)]=\"showDialog\"\n(onHide)=\"hideDialog()\"\n[width]=\"800\"\npositionTop=\"50\"\nclosable=\"true\">\n<ng-template dialog-host></ng-template>\n</p-dialog>-->\n" }] }
        ];
        /** @nocollapse */
        DialogComponent.ctorParameters = function () { return [
            { type: DialogService },
            { type: core.ComponentFactoryResolver }
        ]; };
        DialogComponent.propDecorators = {
            dialogHost: [{ type: core.ViewChild, args: [DialogHostDirective, { static: false },] }]
        };
        return DialogComponent;
    }());
    if (false) {
        /** @type {?} */
        DialogComponent.prototype.dialogHost;
        /** @type {?} */
        DialogComponent.prototype.showDialog;
        /** @type {?} */
        DialogComponent.prototype.title;
        /**
         * @type {?}
         * @private
         */
        DialogComponent.prototype.dialogService$;
        /**
         * @type {?}
         * @private
         */
        DialogComponent.prototype.dialogService;
        /**
         * @type {?}
         * @private
         */
        DialogComponent.prototype.componentFactoryResolver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogModule = /** @class */ (function () {
        function DialogModule() {
        }
        DialogModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule],
                        declarations: [DialogHostDirective, DialogComponent],
                        providers: [DialogService],
                        exports: [DialogComponent]
                    },] }
        ];
        return DialogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExplorerHeaderPipe = /** @class */ (function () {
        function ExplorerHeaderPipe() {
        }
        /**
         * @param {?} featureName
         * @param {?=} args
         * @return {?}
         */
        ExplorerHeaderPipe.prototype.transform = /**
         * @param {?} featureName
         * @param {?=} args
         * @return {?}
         */
        function (featureName, args) {
            if (featureName) {
                return 'Feature: ' + featureName;
            }
            return 'Features';
        };
        ExplorerHeaderPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'explorerHeader',
                        pure: false
                    },] }
        ];
        return ExplorerHeaderPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafePipe = /** @class */ (function () {
        function SafePipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        SafePipe.prototype.transform = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        SafePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'safe'
                    },] }
        ];
        /** @nocollapse */
        SafePipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        return SafePipe;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SafePipe.prototype.sanitizer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { PreviewerState, isLoading } from '../../../components/preview/ngrx';
    var PreviewerLoadingComponent = /** @class */ (function () {
        //  constructor(private previewerManagement: Store<PreviewerState>) {}
        function PreviewerLoadingComponent() {
        }
        /**
         * @return {?}
         */
        PreviewerLoadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            //  this.loading$ = this.previewerManagement.select(isLoading);
        };
        PreviewerLoadingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-previewer-loading',
                        template: "<div class=\"previewer-loader-mask\" *ngIf=\"loading$ | async\">\n  <div class=\"loader\">\n    <p-progressSpinner\n      [style]=\"{ width: '70px', height: '70px' }\"\n      strokeWidth=\"6\"\n      fill=\"transparent\"\n      animationDuration=\".5s\"\n    ></p-progressSpinner>\n  </div>\n</div>\n",
                        styles: [".previewer-loader-mask{position:absolute;width:100%;height:100%;z-index:999;display:-webkit-box;display:flex;top:0;background:rgba(102,102,102,.2)}.loader{width:auto;margin:auto}@-webkit-keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}@keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}"]
                    }] }
        ];
        /** @nocollapse */
        PreviewerLoadingComponent.ctorParameters = function () { return []; };
        return PreviewerLoadingComponent;
    }());
    if (false) {
        /** @type {?} */
        PreviewerLoadingComponent.prototype.loading$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingModule = /** @class */ (function () {
        function LoadingModule() {
        }
        LoadingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule, common.CommonModule],
                        exports: [PreviewerLoadingComponent],
                        declarations: [PreviewerLoadingComponent],
                        providers: [PreviewerLoadingService],
                    },] }
        ];
        return LoadingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DndService = /** @class */ (function () {
        function DndService(dragDropService) {
            var _this = this;
            this.dragDropService = dragDropService;
            this.dragDropService.dragStart$.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.dragStartInfo = {
                    dragNodeTree: event.tree,
                    dragNode: event.node,
                    dragNodeSubNodes: event.subNodes,
                    dragNodeIndex: event.index,
                    dragNodeScope: event.scope
                };
                if (event.tree) {
                    /* this.screenExplorerManagement.dispatch(
                       moveWidgetIndex({
                         index: this.getSelectionPath(
                           event.tree.tree.value[0].children,
                           event.node
                         )
                       })
                     );*/
                }
            }));
        }
        /**
         * @return {?}
         */
        DndService.prototype.getDroppedNode = /**
         * @return {?}
         */
        function () {
            return this.dragDropService.dragStop$.pipe(operators.map((/**
             * @param {?} treeNode
             * @return {?}
             */
            function (treeNode) {
                return treeNode;
            })));
        };
        /**
         * apply the tree dnd rules
         * @param dropNode - node to trop inside.
         * @param dragNode - node dragged from the widget store.
         */
        /**
         * apply the tree dnd rules
         * @param {?} dropNode - node to trop inside.
         * @param {?} dragNode - node dragged from the widget store.
         * @return {?}
         */
        DndService.prototype.isDropNotAllowed = /**
         * apply the tree dnd rules
         * @param {?} dropNode - node to trop inside.
         * @param {?} dragNode - node dragged from the widget store.
         * @return {?}
         */
        function (dropNode, dragNode) {
            // drop into the root node
            if (dragNode.parents && dropNode.type === 'rootNode') {
                /** @type {?} */
                var removed = lodash.remove(dropNode.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                return this._addRemovedNode(removed);
            }
            // drop into root node childrens
            if (dropNode.parent &&
                dropNode.parent.type === 'rootNode' &&
                dragNode.parents) {
                /** @type {?} */
                var removed = lodash.remove(dropNode.parent.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                if (removed.length > 0) {
                    return this._addRemovedNode(removed);
                }
            }
            // when parent node have childs
            if (dropNode.parent &&
                dropNode.parent['childs'] &&
                !dropNode.parent['childs'].includes(dragNode.data.type)) {
                /** @type {?} */
                var removed = lodash.remove(dropNode.parent.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                if (removed.length > 0) {
                    return this._addRemovedNode(removed);
                }
            }
            if (dragNode.parents &&
                dropNode.data &&
                !dragNode.parents.includes(dropNode.data.type)) {
                /** @type {?} */
                var removed = lodash.remove(dropNode.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                if (removed.length > 0) {
                    return this._addRemovedNode(removed);
                }
            }
            // drop into node that have childs
            if (dropNode.childs && !dropNode.childs.includes(dragNode.data.type)) {
                /** @type {?} */
                var removed = lodash.remove(dropNode.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                return this._addRemovedNode(removed);
            }
            // drag node have parents
            if (dragNode.parents &&
                dropNode.data &&
                dropNode.data.type &&
                !dragNode.parents.includes(dropNode.data.type)) {
                /** @type {?} */
                var removed = lodash.remove(dropNode.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                if (removed.length > 0) {
                    return this._addRemovedNode(removed);
                }
            }
            if (dragNode.parents &&
                dropNode.parent &&
                dropNode.parent.data &&
                !dragNode.parents.includes(dropNode.parent.data.type)) {
                /** @type {?} */
                var removed = lodash.remove(dropNode.parent.children, (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.data.type === dragNode.data.type; }));
                return this._addRemovedNode(removed);
            }
            return;
        };
        /**
         * @private
         * @param {?} treeItems
         * @param {?} node
         * @param {?=} path
         * @param {?=} parentIndex
         * @return {?}
         */
        DndService.prototype.getSelectionPath = /**
         * @private
         * @param {?} treeItems
         * @param {?} node
         * @param {?=} path
         * @param {?=} parentIndex
         * @return {?}
         */
        function (treeItems, node, path, parentIndex) {
            /** @type {?} */
            var index = treeItems.indexOf(node);
            if (index < 0) {
                /** @type {?} */
                var i = 0;
                while (i < treeItems.length && path === undefined) {
                    /** @type {?} */
                    var children = treeItems[i].children;
                    if (children && children.length > 0) {
                        if (parentIndex) {
                            path = this.getSelectionPath(children, node, path, [parentIndex, i].join('.'));
                        }
                        else {
                            path = this.getSelectionPath(children, node, path, i.toString());
                        }
                    }
                    i += 1;
                }
            }
            if (path) {
                return path;
            }
            if (!parentIndex) {
                return index.toString();
            }
            if (index < 0) {
                return undefined;
            }
            return [parentIndex, index].join('.');
        };
        /**
         * @private
         * @param {?} removed
         * @return {?}
         */
        DndService.prototype._addRemovedNode = /**
         * @private
         * @param {?} removed
         * @return {?}
         */
        function (removed) {
            if (removed.length > 0) {
                return this.dragStartInfo.dragNodeSubNodes.splice(this.dragStartInfo.dragNodeIndex, 0, this.dragStartInfo.dragNode);
            }
            return;
        };
        DndService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DndService.ctorParameters = function () { return [
            { type: api.TreeDragDropService }
        ]; };
        return DndService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DndService.prototype.dragStartInfo;
        /** @type {?} */
        DndService.prototype.dragDropService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_MODELS = store.createAction('[SE Models] Load Models');
    /** @type {?} */
    var LOAD_MODELS_SUCCESSFULLY = store.createAction('[SE Models] Load Models Successfully', store.props());
    /** @type {?} */
    var LOAD_MODELS_FAILED = store.createAction('[SE Models] Load Models Failed', store.props());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModelsEffects = /** @class */ (function () {
        function ModelsEffects(actions$, modelsApi) {
            var _this = this;
            this.actions$ = actions$;
            this.modelsApi = modelsApi;
            this.loadModels$ = effects.createEffect((/**
             * @return {?}
             */
            function () {
                return _this.actions$.pipe(effects.ofType(LOAD_MODELS), operators.concatMap((/**
                 * @return {?}
                 */
                function () {
                    return _this.modelsApi.getModels().pipe(operators.map((/**
                     * @param {?} entities
                     * @return {?}
                     */
                    function (entities) { return LOAD_MODELS_SUCCESSFULLY({ entities: entities }); })), operators.catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return rxjs.of(LOAD_MODELS_FAILED({ err: err })); })));
                })));
            }));
        }
        ModelsEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ModelsEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: client.WorkspaceClientApi }
        ]; };
        return ModelsEffects;
    }());
    if (false) {
        /** @type {?} */
        ModelsEffects.prototype.loadModels$;
        /**
         * @type {?}
         * @private
         */
        ModelsEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        ModelsEffects.prototype.modelsApi;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModelsState = /** @class */ (function () {
        function ModelsState(entities) {
            this.entities = entities;
        }
        return ModelsState;
    }());
    if (false) {
        /** @type {?} */
        ModelsState.prototype.entities;
    }
    /** @type {?} */
    var initialState$2 = new ModelsState();
    var ɵ0$2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return (__assign({}, state)); }, ɵ1$2 = /**
     * @param {?} state
     * @param {?} __1
     * @return {?}
     */
    function (state, _a) {
        var entities = _a.entities;
        return new ModelsState(entities);
    };
    /** @type {?} */
    var modelsReducer = store.createReducer(initialState$2, store.on(LOAD_MODELS, (ɵ0$2)), store.on(LOAD_MODELS_SUCCESSFULLY, (ɵ1$2)));
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function reducer$2(state, action) {
        return modelsReducer(state, action);
    }
    /** @type {?} */
    var getModelsState = store.createFeatureSelector('SE - Models');
    var ɵ2$2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.entities || []; };
    /** @type {?} */
    var getAllModels = store.createSelector(getModelsState, (ɵ2$2));
    var ɵ3$2 = /**
     * @param {?} entities
     * @param {?} __1
     * @return {?}
     */
    function (entities, _a) {
        var entityName = _a.entityName;
        if (entityName) {
            /** @type {?} */
            var model = entities.find((/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return entity.name.toLowerCase() === entityName.toLowerCase(); }));
            if (model) {
                model = attachRelationShipsToModel(model, entities);
            }
            return model;
        }
        return undefined;
    };
    /** @type {?} */
    var getModel = store.createSelector(getAllModels, (ɵ3$2));
    /** @type {?} */
    var key$2 = 'SE - Models';
    // private
    // ToDo need to handle infinite loop in case of circular dependency
    /**
     * @param {?} entity
     * @param {?} allEntities
     * @return {?}
     */
    function attachRelationShipsToModel(entity, allEntities) {
        entity.relationships.forEach((/**
         * @param {?} relationship
         * @return {?}
         */
        function (relationship) {
            if (!relationship.entity) {
                relationship.entity = allEntities.find((/**
                 * @param {?} relationType
                 * @return {?}
                 */
                function (relationType) {
                    return relationType.name.toLowerCase() === relationship.type.toLowerCase();
                }));
                if (relationship.entity && relationship.entity.relationships) {
                    relationship.entity = attachRelationShipsToModel(relationship.entity, allEntities);
                }
            }
        }));
        return entity;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ExplorerHeaderPipe, SafePipe],
                        imports: [
                            SharedModule,
                            LayoutModule,
                            DialogModule,
                            LoadingModule,
                            store.StoreModule.forFeature(key, reducer),
                            store.StoreModule.forFeature(key$1, reducer$1),
                            store.StoreModule.forFeature(key$2, reducer$2),
                            effects.EffectsModule.forFeature([
                                WidgetsLibrairiesEffects,
                                // ScreensLibrairiesEffects,
                                ModelsEffects
                            ])
                        ],
                        exports: [
                            LayoutModule,
                            DialogModule,
                            ExplorerHeaderPipe,
                            SafePipe,
                            LoadingModule
                        ],
                        providers: [
                            api.ConfirmationService,
                            WidgetsLibrairiesAPIService,
                            ScreensLibrairiesAPIService,
                            PreviewService,
                            ScreenValidationService,
                            ValidationStore,
                            PreviewStore,
                            UnloadModuleService,
                            LayoutService,
                            DndService,
                            SwaggerServicesStore,
                            UuidService
                        ]
                    },] }
        ];
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Dialog = /** @class */ (function () {
        function Dialog() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        Dialog.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.options = options;
        };
        return Dialog;
    }());
    if (false) {
        /** @type {?} */
        Dialog.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureCreatorComponent = /** @class */ (function (_super) {
        __extends(FeatureCreatorComponent, _super);
        function FeatureCreatorComponent() {
            var _this = _super.call(this) || this;
            _this.featureAdded = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        FeatureCreatorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /* this.featuresManagement.select(getFeatures).subscribe(features => {
               this.features = features;
             });*/
        };
        /**
         * @param {?} form
         * @return {?}
         */
        FeatureCreatorComponent.prototype.submit = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            var _this = this;
            this.feature = lodash.lowerFirst(this.feature);
            if (form.valid &&
                !Object.keys(this.features).find((/**
                 * @param {?} name
                 * @return {?}
                 */
                function (name) { return name === _this.feature; }))) {
                this.featureAdded.emit(this.feature);
                /* this.featuresManagement.dispatch(
                   addFeature({
                     feature: { name: this.feature, screenscount: 0 }
                   })
                 );*/
                this.feature = undefined;
            }
        };
        FeatureCreatorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-feature-creator',
                        template: "<div class=\"feature-creator\">\n  <form name=\"form\" #frm=\"ngForm\">\n    <label>Feature name:</label>\n    <div class=\"input-container\">\n      <input type=\"text\" pInputText [(ngModel)]=\"feature\" required pattern=\"^[a-zA-Z][a-zA-Z_$0-9-]*$\"\n        name=\"featureName\" placeholder=\"eg. customer-management\" #featureName=\"ngModel\" />\n      <i class=\"fas fa-exclamation error-mark\" *ngIf=\"frm.submitted && featureName.invalid\" tooltipPosition=\"bottom\"\n        [pTooltip]=\"featureName.errors.required ? 'Feature name is required' : 'Feature name should be in Kebab Case'\"></i>\n      <button pButton type=\"submit\" label=\"Add\" class=\"add-button\" (click)=\"submit(frm)\"></button>\n    </div>\n  </form>\n</div>",
                        styles: [".feature-creator .input-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.feature-creator .input-container .error-mark{color:#d84315;padding:0 7px;margin-right:-9px}.feature-creator .input-container input.ng-touched.ng-invalid{border-color:#d84315}.feature-creator .input-container .add-button{background-color:#4caf50;color:#fff;margin-left:10px}"]
                    }] }
        ];
        /** @nocollapse */
        FeatureCreatorComponent.ctorParameters = function () { return []; };
        FeatureCreatorComponent.propDecorators = {
            featureAdded: [{ type: core.Output }]
        };
        return FeatureCreatorComponent;
    }(Dialog));
    if (false) {
        /** @type {?} */
        FeatureCreatorComponent.prototype.featureAdded;
        /** @type {?} */
        FeatureCreatorComponent.prototype.features;
        /** @type {?} */
        FeatureCreatorComponent.prototype.feature;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExplorerToolbarModule = /** @class */ (function () {
        function ExplorerToolbarModule() {
        }
        ExplorerToolbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule, ExplorerSharedModule],
                        declarations: [
                            FeatureExplorerToolbarComponent,
                            ExplorerToolbarComponent,
                            FeatureCreatorComponent
                        ],
                        exports: [
                            FeatureExplorerToolbarComponent,
                            ExplorerToolbarComponent,
                            FeatureCreatorComponent
                        ]
                    },] }
        ];
        return ExplorerToolbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExplorerComponent = /** @class */ (function () {
        function ExplorerComponent(navigator) {
            this.navigator = navigator;
        }
        /**
         * Used to filter tree nodes.
         * @param event - dom event.
         */
        /**
         * Used to filter tree nodes.
         * @param {?} query
         * @return {?}
         */
        ExplorerComponent.prototype.filter = /**
         * Used to filter tree nodes.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            // this.featuresManagement.dispatch(filterFeature({ query }));
        };
        ExplorerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-explorer',
                        template: "<!--<sc-explorer-toolbar (query)=\"filter($event)\"></sc-explorer-toolbar>\n\n<div class=\"tree-container\">\n  <ng-container *ngIf=\"(navigator.view() | async) === 'feature'\">\n    <sc-feature-explorer> </sc-feature-explorer>\n  </ng-container>\n  <ng-container *ngIf=\"(navigator.view() | async) === 'screen'\">\n    <sc-screen-explorer> </sc-screen-explorer>\n  </ng-container>\n</div>-->\n\n<!-- <ng-template #noFeatureContainer>\n  <div class=\"no-feature-container\">\n    <div class=\"no-data-message\">\n      <span>No feature configured.</span>\n    </div>\n    <div class=\"actions\">\n      <p-button\n        class=\"add-Feature\"\n        icon=\"fa fa-fw fa-plus\"\n        label=\"Add feature\"\n        (click)=\"addNewFeature()\"\n      ></p-button>\n    </div>\n  </div>\n</ng-template> -->\n",
                        styles: ["@charset \"UTF-8\";.no-feature-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:calc(100% - 30px);-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;background:#f3f3f3}.no-feature-container .no-data-message{padding-bottom:20px}:host ::ng-deep .tree-container{height:100%}:host ::ng-deep .ui-tree-container{height:100%;margin:0;overflow:auto;padding:.25em!important;white-space:nowrap}:host ::ng-deep .ui-tree{border:none!important;width:100%!important;padding:0}:host ::ng-deep .ui-tree .ui-tree-container{padding:0}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode{padding:.125em 0 0!important}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content{padding:0;border:0 solid transparent}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label.ui-state-highlight{background-color:inherit!important;color:inherit!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-content-selected{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-dragover{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-tree-toggler{font-size:12px}:host ::ng-deep .ui-tree .pi{font-family:\"Font Awesome 5 Free\";font-weight:900}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-right:before{content:\"\uF054\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-button-icon-only{font-size:14px}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-down:before{content:\"\uF078\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content{height:30px;background-color:#f9f9f9;border-left:4px solid #c6c6c6!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover{background-color:#eee}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:active{background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:focus{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable:active{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover{border:none;background:0 0}:host ::ng-deep .ui-tree .ui-treenode-label.ui-state-highlight{border:none;background:0 0;color:#222}:host ::ng-deep .screens-content .ui-tree{border:none}"]
                    }] }
        ];
        /** @nocollapse */
        ExplorerComponent.ctorParameters = function () { return [
            { type: Navigator }
        ]; };
        return ExplorerComponent;
    }());
    if (false) {
        /** @type {?} */
        ExplorerComponent.prototype.navigator;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureUpdatorComponent = /** @class */ (function (_super) {
        __extends(FeatureUpdatorComponent, _super);
        function FeatureUpdatorComponent(dialogService, screensLibrairiesManagement, modelsManagementStore) {
            var _this = _super.call(this) || this;
            _this.dialogService = dialogService;
            _this.screensLibrairiesManagement = screensLibrairiesManagement;
            _this.modelsManagementStore = modelsManagementStore;
            _this.title = '';
            _this.screensCount$ = {};
            return _this;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        FeatureUpdatorComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.featureName = options.featureName;
            this.title = "Screen manager (Feature: " + this.featureName + ")";
            //this.refreshFeatureScreensState(this.featureName);
        };
        /**
         * @return {?}
         */
        FeatureUpdatorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /* this.templates$ = this.screensLibrairiesManagement
               .select(getAllScreens)
               .pipe(
                 filter(Boolean),
                 tap((screensTemplates: ScreenTemplate[]) => {
                   screensTemplates.reduce((result, screenTemplate) => {
                     result[`${screenTemplate.template}`] = this.featuresManagement
                       .select(getScreensToDisplayByType, {
                         featureName: this.featureName,
                         template: screenTemplate.template
                       })
                       .pipe(
                         map(screens => `${screenTemplate.name} (${screens.length})`)
                       );
                     return result;
                   }, this.screensCount$);
                 })
               );
             this.models$ = this.modelsManagementStore.select(getAllModels).pipe(
               map(models =>
                 models.map(model => {
                   return { label: model.name, value: model.name };
                 })
               )
             );*/
        };
        /* screenNameChanges(newName: string, index: any) {
           this.featuresManagement.dispatch(
             renameScreen({
               featureName: this.featureName,
               oldName:
                 this.screens[index]['savedName'] || this.screens[index]['screenName'],
               newName
             })
           );
         }*/
        /* screenDefinitionChanges(
           screenName: string,
           savedName: string,
           modelName: string
         ) {
           this.featuresManagement.dispatch(
             changeScrrenModel({
               featureName: this.featureName,
               screenName,
               savedName,
               modelName
             })
           );
         }
       */
        /**
         * sections may have nested sections
         * @param screen the screen to delete
         */
        /* screenToDelete(screen) {
           this.featuresManagement.dispatch(
             deleteScreenFromFeature({
               featureName: this.featureName,
               screenName: screen.screenName
             })
           );
         }*/
        /**
         * sections may have nested sections
         * @param screen the screen to cancel
         */
        /* cancelDeleteScreen(screen) {
           this.featuresManagement.dispatch(
             cancelDeleteScreenFromFeature({
               featureName: this.featureName,
               screenName: screen.screenName
             })
           );
         }*/
        /**
         * sections may have nested sections
         * @param screenNode the screen node
         */
        /* confirmDeleteScreen(screen) {
           this.featuresManagement.dispatch(
             confirmDeleteScreenFromFeature({
               featureName: this.featureName,
               screenName: screen.screenName
             })
           );
         }*/
        /*addScreen(template: ScreenTemplate) {
          if (this.featureName) {
            this.featuresManagement.dispatch(
              addScreenToFeature({
                featureName: this.featureName,
                template
              })
            );
          }
        }*/
        /*apply() {
          this.featuresManagement.dispatch(
            applyFeatureUpdates({
              featureName: this.featureName
            })
          );
          this.dialogService.closeDialog();
        }*/
        /**
         * Add the 'invalid-screen-name' class name to cells having invalid input text
         * @param name the screen name
         * @param inputRef inputReference of the input text
         * @returns boolean
         */
        /*nameValidityStyle(index: number, inputRef: HTMLElement): boolean {
          const classameExist = includes(
            inputRef.parentElement.parentElement.className,
            'invalid-screen-name'
          );
          const isValid = !this.screens[index].errors;
          if (isValid !== undefined && !isValid) {
            if (!classameExist) {
              inputRef.parentElement.parentElement.className +=
                ' invalid-screen-name';
            }
            return isValid;
          } else {
            if (classameExist) {
              inputRef.parentElement.parentElement.className = inputRef.parentElement.parentElement.className.replace(
                'invalid-screen-name',
                ''
              );
            }
          }
          if (isValid !== undefined && isValid) {
            return isValid;
          }
          return !isValid;
        }*/
        /*nameValidityTooltip(index: number): string {
          return this.screens[index].errors;
        }*/
        /**
         * enabale or disable the Apply button
         */
        /* screenNameChanges(newName: string, index: any) {
            this.featuresManagement.dispatch(
              renameScreen({
                featureName: this.featureName,
                oldName:
                  this.screens[index]['savedName'] || this.screens[index]['screenName'],
                newName
              })
            );
          }*/
        /* screenDefinitionChanges(
            screenName: string,
            savedName: string,
            modelName: string
          ) {
            this.featuresManagement.dispatch(
              changeScrrenModel({
                featureName: this.featureName,
                screenName,
                savedName,
                modelName
              })
            );
          }
        */
        /**
           * sections may have nested sections
           * @param screen the screen to delete
           */
        /* screenToDelete(screen) {
            this.featuresManagement.dispatch(
              deleteScreenFromFeature({
                featureName: this.featureName,
                screenName: screen.screenName
              })
            );
          }*/
        /**
           * sections may have nested sections
           * @param screen the screen to cancel
           */
        /* cancelDeleteScreen(screen) {
            this.featuresManagement.dispatch(
              cancelDeleteScreenFromFeature({
                featureName: this.featureName,
                screenName: screen.screenName
              })
            );
          }*/
        /**
           * sections may have nested sections
           * @param screenNode the screen node
           */
        /* confirmDeleteScreen(screen) {
            this.featuresManagement.dispatch(
              confirmDeleteScreenFromFeature({
                featureName: this.featureName,
                screenName: screen.screenName
              })
            );
          }*/
        /*addScreen(template: ScreenTemplate) {
            if (this.featureName) {
              this.featuresManagement.dispatch(
                addScreenToFeature({
                  featureName: this.featureName,
                  template
                })
              );
            }
          }*/
        /*apply() {
            this.featuresManagement.dispatch(
              applyFeatureUpdates({
                featureName: this.featureName
              })
            );
            this.dialogService.closeDialog();
          }*/
        /**
           * Add the 'invalid-screen-name' class name to cells having invalid input text
           * @param name the screen name
           * @param inputRef inputReference of the input text
           * @returns boolean
           */
        /*nameValidityStyle(index: number, inputRef: HTMLElement): boolean {
            const classameExist = includes(
              inputRef.parentElement.parentElement.className,
              'invalid-screen-name'
            );
            const isValid = !this.screens[index].errors;
            if (isValid !== undefined && !isValid) {
              if (!classameExist) {
                inputRef.parentElement.parentElement.className +=
                  ' invalid-screen-name';
              }
              return isValid;
            } else {
              if (classameExist) {
                inputRef.parentElement.parentElement.className = inputRef.parentElement.parentElement.className.replace(
                  'invalid-screen-name',
                  ''
                );
              }
            }
            if (isValid !== undefined && isValid) {
              return isValid;
            }
            return !isValid;
          }*/
        /*nameValidityTooltip(index: number): string {
            return this.screens[index].errors;
          }*/
        /**
         * enabale or disable the Apply button
         * @return {?}
         */
        FeatureUpdatorComponent.prototype.disableApplyButton = /* screenNameChanges(newName: string, index: any) {
            this.featuresManagement.dispatch(
              renameScreen({
                featureName: this.featureName,
                oldName:
                  this.screens[index]['savedName'] || this.screens[index]['screenName'],
                newName
              })
            );
          }*/
        /* screenDefinitionChanges(
            screenName: string,
            savedName: string,
            modelName: string
          ) {
            this.featuresManagement.dispatch(
              changeScrrenModel({
                featureName: this.featureName,
                screenName,
                savedName,
                modelName
              })
            );
          }
        */
        /**
           * sections may have nested sections
           * @param screen the screen to delete
           */
        /* screenToDelete(screen) {
            this.featuresManagement.dispatch(
              deleteScreenFromFeature({
                featureName: this.featureName,
                screenName: screen.screenName
              })
            );
          }*/
        /**
           * sections may have nested sections
           * @param screen the screen to cancel
           */
        /* cancelDeleteScreen(screen) {
            this.featuresManagement.dispatch(
              cancelDeleteScreenFromFeature({
                featureName: this.featureName,
                screenName: screen.screenName
              })
            );
          }*/
        /**
           * sections may have nested sections
           * @param screenNode the screen node
           */
        /* confirmDeleteScreen(screen) {
            this.featuresManagement.dispatch(
              confirmDeleteScreenFromFeature({
                featureName: this.featureName,
                screenName: screen.screenName
              })
            );
          }*/
        /*addScreen(template: ScreenTemplate) {
            if (this.featureName) {
              this.featuresManagement.dispatch(
                addScreenToFeature({
                  featureName: this.featureName,
                  template
                })
              );
            }
          }*/
        /*apply() {
            this.featuresManagement.dispatch(
              applyFeatureUpdates({
                featureName: this.featureName
              })
            );
            this.dialogService.closeDialog();
          }*/
        /**
           * Add the 'invalid-screen-name' class name to cells having invalid input text
           * @param name the screen name
           * @param inputRef inputReference of the input text
           * @returns boolean
           */
        /*nameValidityStyle(index: number, inputRef: HTMLElement): boolean {
            const classameExist = includes(
              inputRef.parentElement.parentElement.className,
              'invalid-screen-name'
            );
            const isValid = !this.screens[index].errors;
            if (isValid !== undefined && !isValid) {
              if (!classameExist) {
                inputRef.parentElement.parentElement.className +=
                  ' invalid-screen-name';
              }
              return isValid;
            } else {
              if (classameExist) {
                inputRef.parentElement.parentElement.className = inputRef.parentElement.parentElement.className.replace(
                  'invalid-screen-name',
                  ''
                );
              }
            }
            if (isValid !== undefined && isValid) {
              return isValid;
            }
            return !isValid;
          }*/
        /*nameValidityTooltip(index: number): string {
            return this.screens[index].errors;
          }*/
        /**
         * enabale or disable the Apply button
         * @return {?}
         */
        function () {
            // require screens validated
            return this.disableApplyButton$;
        };
        FeatureUpdatorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-feature-updator',
                        template: "<!--<div class=\"templates-group\" *ngIf=\"templates$ | async as templates\">\n  <span class=\"title\">Screen types:</span>\n  <div class=\"ui-g-3\" *ngFor=\"let template of templates\">\n    <p-button [label]=\"screensCount$[template.template] | async\" (click)=\"addScreen(template)\"></p-button>\n  </div>\n</div>\n<span class=\"title\">Feature screens:</span>\n<ng-container *ngIf=\"featureScreensState$ | async\">\n  <div class=\"screens\">\n    <p-table [value]=\"screens\" [scrollable]=\"true\" scrollHeight=\"200px\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Template</th>\n          <th>Definition</th>\n          <th style=\"width:65px;text-align: center\">\n            <ng-container *ngIf=\"screensInTrashCount$ | async as screensInTrashCount\">\n              <span *ngIf=\"screensInTrashCount > 0\"><i\n                  class=\"fa fa-fw fa-trash\"></i><sup>({{ screensInTrashCount }})</sup></span></ng-container>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-screen let-ri=\"rowIndex\">\n        <tr>\n          <td pEditableColumn>\n            <p-cellEditor [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n              <ng-template pTemplate=\"input\">\n                <input type=\"text\" [ngModel]=\"screen.screenName\" (blur)=\"screenNameChanges($event.target.value, ri)\"\n                  (keydown.enter)=\"screenNameChanges($event.target.value, ri)\" [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\" />\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <span [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n                  {{ screen.screenName }} <i class=\"fas fa-pen edit-cell-icon\"></i></span>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td>{{ screen.template.template }}</td>\n          <td pEditableColumn>\n\n            <p-cellEditor>\n              <ng-template pTemplate=\"input\">\n                <p-dropdown [options]=\"models$ | async\"\n                  [(ngModel)]=\"screen.modelChanged ? screen.modelChangedValue : screen.modelName\" filter=\"true\"\n                  filterPlaceholder=\"Search model\" placeholder=\"Select model\" showClear=\"true\"\n                  (onChange)=\"screenDefinitionChanges(screen.screenName,screen.savedName,$event.value)\" appendTo=\"body\"\n                  panelStyleClass=\"sc-ui-dropdown\"></p-dropdown>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{screen.modelChanged ? screen.modelChangedValue : screen.modelName}} <i\n                  class=\"fas fa-pen edit-cell-icon\"></i>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td style=\"width: 65px;text-align: center;\">\n            <p-button *ngIf=\"!screen.toBeDeleted\" class=\"delete-button\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n              tooltipPosition=\"bottom\" (click)=\"screenToDelete(screen)\"></p-button>\n            <div class=\"actions\" *ngIf=\"screen.toBeDeleted\">\n              <p-button class=\"save-button\" icon=\"fa fa-fw fa-check\" pTooltip=\"Confirm\" tooltipPosition=\"bottom\"\n                (click)=\"confirmDeleteScreen(screen)\"></p-button>\n              <p-button class=\"add-Feature\" icon=\"fa fa-fw fa-close\" pTooltip=\"Cancel\" tooltipPosition=\"bottom\"\n                (click)=\"cancelDeleteScreen(screen)\"></p-button>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns=\"columns\">\n        <tr>\n          <td [attr.colspan]=\"columns?.length\">\n            No screen configured\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  <div class=\"apply-button\">\n    <p-button (onClick)=\"apply()\" icon=\"fa fa-fw fa-check\" label=\"Apply\" [disabled]=\"disableApplyButton() | async\">\n    </p-button>\n  </div>\n</ng-container>-->\n",
                        styles: [".title{display:block;font-weight:700;font-size:16px}:host ::ng-deep .apply-button .ui-button,:host ::ng-deep .apply-button .ui-button:hover{background:#eee;color:#5cb85c;float:right;height:35px}:host ::ng-deep .apply-button{float:right;margin-top:20px}:host ::ng-deep .delete-button .ui-button,:host ::ng-deep .delete-button .ui-button:hover{background:0 0;color:#d84315}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-table .edit-cell-icon{font-size:14px}:host ::ng-deep .ui-table .ui-widget-header{background-color:transparent;width:100%}:host ::ng-deep .ui-table .ui-table-thead>tr>th{padding:5px;border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4;border-bottom:none;font-size:14px}:host ::ng-deep .ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}:host ::ng-deep .ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8;padding:2px 5px}:host ::ng-deep .templates-group{display:inline-block;margin-bottom:5px}:host ::ng-deep .templates-group .ui-g-3{padding:3px}:host ::ng-deep .templates-group .ui-button{color:#d83431;background:#eee;width:175px;height:30px}:host ::ng-deep .templates-group .ui-button:hover{background-color:#e0e0e0;color:#dc3545;width:175px}:host ::ng-deep .ui-widget-header{background:repeat-x #ececec}:host ::ng-deep .ui-editable-column .invalid-screen-name{background:#db7093;border:0}:host ::ng-deep .ui-table .ui-table-data>tr>td.ui-editable-column.invalid-screen-name{background:#db7093}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .actions .ui-button{border:none;border-radius:0;height:25px;width:25px;margin-right:0;margin-left:2px}:host ::ng-deep .actions .add-Feature .ui-button{color:#d83431;background:0 0}:host ::ng-deep .actions .save-button .ui-button{color:#4caf50;background:0 0}.actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions{display:-webkit-inline-box;display:inline-flex}.filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        FeatureUpdatorComponent.ctorParameters = function () { return [
            { type: DialogService },
            { type: store.Store },
            { type: store.Store }
        ]; };
        FeatureUpdatorComponent.propDecorators = {
            setOptions: [{ type: core.Input }]
        };
        return FeatureUpdatorComponent;
    }(Dialog));
    if (false) {
        /** @type {?} */
        FeatureUpdatorComponent.prototype.featureName;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.featureScreensState$;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.screensInTrashCount$;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.disableApplyButton$;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.templates$;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.models$;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.title;
        /** @type {?} */
        FeatureUpdatorComponent.prototype.screensCount$;
        /**
         * @type {?}
         * @private
         */
        FeatureUpdatorComponent.prototype.dialogService;
        /**
         * @type {?}
         * @private
         */
        FeatureUpdatorComponent.prototype.screensLibrairiesManagement;
        /**
         * @type {?}
         * @private
         */
        FeatureUpdatorComponent.prototype.modelsManagementStore;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureSelectorComponent = /** @class */ (function (_super) {
        __extends(FeatureSelectorComponent, _super);
        function FeatureSelectorComponent(modelsManagementStore) {
            var _this = _super.call(this) || this;
            _this.modelsManagementStore = modelsManagementStore;
            return _this;
        }
        /**
         * @return {?}
         */
        FeatureSelectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /* this.features$ = this.featuresManagement.select(getFeaturesAsData);
             this.models$ = this.modelsManagementStore.select(getAllModels).pipe(
               withLatestFrom(this.features$, (entities, features) => ({
                 entities,
                 features
               })),
               map(({ entities, features }) => {
                 const featuresNames = features.map(feature =>
                   feature.name.toLocaleLowerCase()
                 );
                 return entities.filter(
                   entity => !featuresNames.includes(entity.name.toLocaleLowerCase())
                 );
               })
             );*/
        };
        /**
         * @return {?}
         */
        FeatureSelectorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.selectFeature();
        };
        /**
         * @return {?}
         */
        FeatureSelectorComponent.prototype.selectFeature = /**
         * @return {?}
         */
        function () {
            if (this.selectedFeature) {
                this.updator.setOptions({
                    featureName: this.selectedFeature.name.charAt(0).toLowerCase() +
                        this.selectedFeature.name.slice(1)
                });
            }
        };
        FeatureSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-feature-selector',
                        template: "<div style=\"height: 50vh;\">\n<!--  <label for=\"models\">Choose a feature: </label>-->\n  <p-dropdown\n    #featureInput=\"ngModel\"\n    [options]=\"models$ | async\"\n    optionLabel=\"name\"\n    [(ngModel)]=\"selectedFeature\"\n    (onChange)=\"selectFeature()\"\n    filter=\"true\"\n    filterPlaceholder=\"Search feature\"\n    placeholder=\"Select a feature\"\n    required=\"true\"\n  >\n  </p-dropdown>\n  <sc-feature-updator #featureUpdator></sc-feature-updator>\n</div>\n",
                        styles: [".ui-dialog .apply-button .ui-button{background:#e4e4e4;color:#5cb85c}"]
                    }] }
        ];
        /** @nocollapse */
        FeatureSelectorComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        FeatureSelectorComponent.propDecorators = {
            feature: [{ type: core.ViewChild, args: ['featureInput', { static: false },] }],
            updator: [{ type: core.ViewChild, args: ['featureUpdator', { static: false },] }]
        };
        return FeatureSelectorComponent;
    }(Dialog));
    if (false) {
        /** @type {?} */
        FeatureSelectorComponent.prototype.feature;
        /** @type {?} */
        FeatureSelectorComponent.prototype.updator;
        /** @type {?} */
        FeatureSelectorComponent.prototype.models$;
        /** @type {?} */
        FeatureSelectorComponent.prototype.features$;
        /** @type {?} */
        FeatureSelectorComponent.prototype.options;
        /** @type {?} */
        FeatureSelectorComponent.prototype.selectedFeature;
        /**
         * @type {?}
         * @private
         */
        FeatureSelectorComponent.prototype.modelsManagementStore;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreenClonerComponent = /** @class */ (function (_super) {
        __extends(ScreenClonerComponent, _super);
        function ScreenClonerComponent(screenValidation, dialogService) {
            var _this = _super.call(this) || this;
            _this.screenValidation = screenValidation;
            _this.dialogService = dialogService;
            return _this;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        ScreenClonerComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.screenToClone = options.screenName;
            this.featureName = options.featureName;
            this.screenName = options.screenName + "0001";
        };
        /**
         * @return {?}
         */
        ScreenClonerComponent.prototype.apply = /**
         * @return {?}
         */
        function () {
        };
        /*apply(): void {
          this.featuresManagement.dispatch(
            cloneScreen({
              featureName: this.featureName,
              screenName: this.screenName,
              clonedScreenName: this.screenToClone
            })
          );
          this.dialogService.closeDialog();
        }*/
        /*apply(): void {
            this.featuresManagement.dispatch(
              cloneScreen({
                featureName: this.featureName,
                screenName: this.screenName,
                clonedScreenName: this.screenToClone
              })
            );
            this.dialogService.closeDialog();
          }*/
        /**
         * @return {?}
         */
        ScreenClonerComponent.prototype.cancel = /*apply(): void {
            this.featuresManagement.dispatch(
              cloneScreen({
                featureName: this.featureName,
                screenName: this.screenName,
                clonedScreenName: this.screenToClone
              })
            );
            this.dialogService.closeDialog();
          }*/
        /**
         * @return {?}
         */
        function () {
            this.dialogService.closeDialog();
        };
        /**
         * @return {?}
         */
        ScreenClonerComponent.prototype.disableApplyButton = /**
         * @return {?}
         */
        function () {
            return false;
        };
        /**
         * @return {?}
         */
        ScreenClonerComponent.prototype.inValidScreen = /**
         * @return {?}
         */
        function () {
            /* if (this.screenName) {
               return this.featuresManagement
                 .select(getScreensNameToDisplayByFeature, {
                   featureName: this.featureName
                 })
                 .pipe(
                   map(screensNames => {
                     const validationResult = this.screenValidation.validateScreensNames(
                       [].concat(screensNames, {
                         displayed: this.screenName,
                         name: this.screenName
                       })
                     );
                     return (
                       validationResult[this.screenName] &&
                       validationResult[this.screenName].error
                     );
                   })
                 );
             }*/
            return rxjs.of('The screen name is mandatory');
        };
        ScreenClonerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-feature-cloner',
                        template: "<div class=\"cloner\">\n  <div class=\"cloner-content\">\n    Please provide a name to the new screen\n    <input\n      type=\"text\"\n      pInputText\n      [(ngModel)]=\"screenName\"\n      [ngClass]=\"{\n        'invalid-screen-name': inValidScreen() | async\n      }\"\n      [pTooltip]=\"inValidScreen() | async\"\n    />\n  </div>\n</div>\n<div class=\"buttons\">\n  <p-button\n    (onClick)=\"apply()\"\n    class=\"apply-button\"\n    icon=\"fa fa-fw fa-check\"\n    label=\"Apply\"\n    [disabled]=\"inValidScreen() | async\"\n  >\n  </p-button>\n  <p-button\n    (onClick)=\"cancel()\"\n    class=\"cancel-button\"\n    icon=\"fa fa-fw fa-times\"\n    label=\"Cancel\"\n  >\n  </p-button>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host .cloner{height:100px}:host ::ng-deep .apply-button span{background:#e4e4e4;color:#5cb85c}:host ::ng-deep .cancel-button span{color:#d83431}:host .cloner-content{margin:30px}.buttons{float:right}.invalid-screen-name{background:#db7093;border:0}"]
                    }] }
        ];
        /** @nocollapse */
        ScreenClonerComponent.ctorParameters = function () { return [
            { type: ScreenValidationService },
            { type: DialogService }
        ]; };
        ScreenClonerComponent.propDecorators = {
            setOptions: [{ type: core.Input }]
        };
        return ScreenClonerComponent;
    }(Dialog));
    if (false) {
        /** @type {?} */
        ScreenClonerComponent.prototype.screenName;
        /**
         * @type {?}
         * @private
         */
        ScreenClonerComponent.prototype.screenToClone;
        /**
         * @type {?}
         * @private
         */
        ScreenClonerComponent.prototype.featureName;
        /**
         * @type {?}
         * @private
         */
        ScreenClonerComponent.prototype.screenValidation;
        /**
         * @type {?}
         * @private
         */
        ScreenClonerComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExplorerModule = /** @class */ (function () {
        function ExplorerModule() {
        }
        ExplorerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            SharedModule,
                            // UsecasePolicyModule,
                            ExplorerToolbarModule,
                            CoreModule,
                            // StoreModule.forFeature(featuresManagement.key, featuresManagement.reducer),
                            /*StoreModule.forFeature(
                        
                              screenExplorerManagement.reducerKey,
                              screenExplorerManagement.reducer
                            ),*/
                            // EffectsModule.forFeature([FeaturesEffects, ScreenExplorerEffects])
                            effects.EffectsModule.forFeature([])
                        ],
                        declarations: [
                            //  ScreenExplorerComponent,
                            FeatureExplorerComponent,
                            // SectionExplorerComponent,
                            FeatureSelectorComponent,
                            FeatureUpdatorComponent,
                            ScreenClonerComponent,
                            ExplorerComponent
                        ],
                        exports: [ExplorerComponent],
                        providers: [Navigator],
                        entryComponents: [
                            FeatureSelectorComponent,
                            FeatureUpdatorComponent,
                            ScreenClonerComponent
                        ]
                    },] }
        ];
        return ExplorerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsStoreComponent = /** @class */ (function () {
        /*  widgetsLibrairies$: Observable<WidgetsLibraryModel[]>;
          selectedLibrary$: Observable<WidgetsLibraryModel>;
        
          screen$: Observable<string>;
          view$: Observable<string>;
        
          private librairySelectionChanges$: Subject<WidgetsLibraryModel> = new Subject<
            WidgetsLibraryModel
          >();
        */
        function WidgetsStoreComponent() {
        }
        /**
         * @return {?}
         */
        WidgetsStoreComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.items = [
                {
                    label: 'Store Management', routerLink: ['/store'], icon: 'pi pi-fw pi-minus'
                },
                {
                    label: 'Template Management',
                    items: [
                        { label: 'Create Template', routerLink: ['/createTemplate'], icon: 'fas fa-pencil-alt' },
                        //  {label: 'Design Space', routerLink: ['/designSpace'],icon: 'fas fa-pencil-alt'},
                        { label: 'Search Template', routerLink: ['/searchTemplate'], icon: 'fas fa-search' },
                        { label: 'Import Template', routerLink: ['/importTemplate'], icon: 'fas fa-file-import' },
                        { label: 'Simulate Template', routerLink: ['/simulateTemplate'], icon: 'fab fa-wpforms' }
                    ]
                }
            ];
            this.items = [
                {
                    label: 'Store Management',
                    icon: 'pi pi-fw pi-minus',
                    routerLink: ['/store']
                },
                {
                    label: 'Template Management',
                    items: [
                        { label: 'Create Template', icon: 'pi pi-pencil', routerLink: ['/createTemplate'] },
                        { label: 'Search Template', icon: 'pi pi-search', routerLink: ['/searchTemplate'] },
                        { label: 'Import Template', icon: 'pi pi-sign-in', routerLink: ['/importTemplate'] },
                        { label: 'Simulate Template', icon: 'fab fa-wpforms', routerLink: ['/simulateTemplate'] }
                    ]
                },
            ];
        };
        WidgetsStoreComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-widgets-store',
                        template: "<!--<ng-container\n  *ngIf=\"widgetsLibrairies$ | async as widgetsLibrairies; else loading\"\n>\n  <sc-store-selector\n    *ngIf=\"widgetsLibrairies && widgetsLibrairies.length > 1\"\n    [stores]=\"widgetsLibrairies\"\n    (selectStore)=\"selectStore($event)\"\n  ></sc-store-selector>\n  <ng-container *ngIf=\"view$ | async as view\">\n    <sc-store-displayer\n      [store]=\"selectedLibrary$ | async\"\n      [screen]=\"screen$ | async\"\n      [mask]=\"view !== 'screen' && view !== 'page'\"\n    >\n    </sc-store-displayer>\n  </ng-container>\n</ng-container>\n<ng-template #loading>\n  <div>loading...</div>\n</ng-template>-->\n<div class=\"available-screens\" >\n  <p-panelMenu [transitionOptions]=\"'0ms'\" [model]=\"items\"   [style]=\"{'width':'300px'}\" [multiple]=\"false\" ></p-panelMenu>\n</div>\n",
                        styles: [":host ::ng-deep .components-panel .ui-panel .ui-panel-content{border:0!important}::ng-deep .ui-panelmenu .ui-widget{background-color:#c6c6c6!important;font-family:lato}::ng-deep .ui-panelmenu .ui-panelmenu-header .ui-menuitem-text{color:#000;font-family:lato}::ng-deep .ui-menu-list{font-family:lato}.ui-panelmenu .ui-panelmenu-header.ui-state-active a,::ng-deep .ui-panelmenu .ui-panelmenu-header.ui-state-active{background-color:#d83431!important}"]
                    }] }
        ];
        /** @nocollapse */
        WidgetsStoreComponent.ctorParameters = function () { return []; };
        return WidgetsStoreComponent;
    }());
    if (false) {
        /** @type {?} */
        WidgetsStoreComponent.prototype.items;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetComponent = /** @class */ (function () {
        function WidgetComponent() {
        }
        WidgetComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-widget',
                        template: "<div class=\"component\" pTooltip=\"{{component?.name}}\" tooltipPosition=\"bottom\" showDelay=\"1000\" hideDelay=\"500\">\n  <div class=\"component-image\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n      <path [attr.d]=\"component.icon\"/>\n    </svg>\n  </div>\n  <div class=\"name\">\n    <span>{{component.name}}</span>\n  </div>\n</div>\n",
                        styles: [".component{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;cursor:pointer}.component-image{color:#626774;width:22px;height:22px}.component-image svg{fill:#474554}.name{font-size:12px;margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        WidgetComponent.ctorParameters = function () { return []; };
        WidgetComponent.propDecorators = {
            component: [{ type: core.Input }]
        };
        return WidgetComponent;
    }());
    if (false) {
        /** @type {?} */
        WidgetComponent.prototype.component;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PreviewComponent = /** @class */ (function () {
        function PreviewComponent() {
            this.device = Device.DESKTOP;
            this.landscapeMode = false;
            this.desktopWidth = '100%';
            this.iframeLoaded$ = new rxjs.Subject();
            this.unsubscribe = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        PreviewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.previewerManagement.dispatch(initPreviewer());
            /*this.previewerState$ = this.previewerManagement
              .select(getPreviewerState)
              .pipe(filter(Boolean));
        
            zip(
              this.previewerManagement
                .select(getWidgetsLibrariesModules)
                .pipe(filter(Boolean)),
              this.previewerManagement.select(getPreviewerUrl).pipe(filter(Boolean)),
              this.previewerManagement
                .select(getPreviewerThemeUrl)
                .pipe(filter(Boolean)),
              this.iframeLoaded$.asObservable()
            )
              .pipe(takeUntil(this.unsubscribe))
              .subscribe(([componentsLibraryModules, previewerUrl, themeUrl]) => {
                if (!this.iframe) {
                  return;
                }
                this.previewerUrl = previewerUrl;
                this.themeUrl = themeUrl as string;
                this.widgetsModules = componentsLibraryModules as any[];
                this.iframe.nativeElement.contentWindow.postMessage(
                  {
                    themeUrl,
                    widgetsModules: componentsLibraryModules
                  },
                  `${window.location.href}/${previewerUrl}`
                );
                this.setDeskTopWitdth('100%');
              });
        
            this.previewerManagement
              .select(getScreenToPreview)
              .pipe(
                withLatestFrom(this.previewerManagement.select(getPreviewerUrl)),
                takeUntil(this.unsubscribe)
              )
              .subscribe(([screenRenderResult, previewerUrl]) => {
                if (!this.iframe) {
                  return;
                }
                if (screenRenderResult) {
                  screenRenderResult.widgetsModules = this.widgetsModules;
                  screenRenderResult.themeUrl = this.themeUrl;
                  this.iframe.nativeElement.contentWindow.postMessage(
                    screenRenderResult,
                    `${window.location.href}/${previewerUrl}`
                  );
                } else {
                  this.iframe.nativeElement.contentWindow.postMessage(
                    'NO_SCREEN',
                    `${window.location.href}/${previewerUrl}`
                  );
                }
                this.setDeskTopWitdth('1200px');
              });
        
            this.previewerManagement
              .select(getError)
              .pipe(
                filter(Boolean),
                withLatestFrom(this.previewerManagement.select(getPreviewerUrl)),
                takeUntil(this.unsubscribe)
              )
              .subscribe(([error, previewerUrl]) => {
                if (!this.iframe) {
                  return;
                }
                this.iframe.nativeElement.contentWindow.postMessage(
                  error,
                  `${window.location.href}/${previewerUrl}`
                );
                this.setDeskTopWitdth('100%');
              });
        
            this.subscribeToHighlightComonent();
            // recieve messages from the previewer iframe
            this.registerMessageEventListener();
          }
        */
            /**
             * notify the previewer to highlight the selected
             * component
             */
            /*private subscribeToHighlightComonent() {
              this.propertiesManagement.select(getProperties).subscribe(property => {
                const componentName =
                  property && property.scopeToUpdate
                    ? kebabCase(property.data.name)
                    : undefined;
                const parentName = property && kebabCase(property.parentName);
                if (this.iframe && this.iframe.nativeElement) {
                  this.iframe.nativeElement.contentWindow.postMessage(
                    { HIGHTLIGHT_COMPONENT: { name: componentName, parentName } },
                    `${window.location.href}/${this.previewerUrl}`
                  );
                }
              });
            }
          */
            /**
             * registers a method from the given sevice as a MessageEvent listener.
             * @param previwerService: PreviewerService
             */
            /*registerMessageEventListener(): void {
              const thisComponent = this;
              if (window.addEventListener) {
                // For standards-compliant web browsers
                window.addEventListener('message', e => {
                  if (e.data && e.data.from === 'previewer') {
                    if (e.data.widgetsLibrariesLoaded) {
                      thisComponent.previewerManagement.dispatch(
                        loadPreviewerLibrairiesSuccessfully()
                      );
                    }
                    if (e.data.renderingSuccess) {
                      thisComponent.previewerManagement.dispatch(
                        renderScreenClientSuccessfully()
                      );
                    } else if (!e.data.renderingSuccess) {
                      thisComponent.previewerManagement.dispatch(
                        renderScreenClientFailed()
                      );
                    }
                  }
                });
              }
            }
          
            previewerFrameLoaded($event) {
              if (this.iframe) {
                this.iframeLoaded$.next();
                this.previewerManagement.dispatch(previewerLoadedSuccessfully());
              }
            }
          
            rotate() {
              this.landscapeMode = !this.landscapeMode;
            }
          
            getDeskTopWitdth() {
              return this.device === Device.DESKTOP ? this.desktopWidth : '100%';
            }
          
            setDeskTopWitdth(width) {
              this.desktopWidth = width;
            }
          
            ngOnDestroy(): void {
              if (this.unsubscribe) {
                this.unsubscribe.next();
                this.unsubscribe.complete();
              }*/
        };
        /**
         * @return {?}
         */
        PreviewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
        };
        PreviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-preview',
                        template: "<!--<div class=\"preview-screen\">\n  <div class=\"device\" [ngClass]=\"device\" [class.landscape]=\"landscapeMode\">\n    <div class=\"app-frame\">\n      <sc-previewer-loading></sc-previewer-loading>\n      <sc-status-bar *ngIf=\"device != 'desktop'\"></sc-status-bar>\n      <ng-container *ngIf=\"previewerState$ | async as previewerState\">\n        <iframe *ngIf=\"previewerState.initialized\" class=\"viewer\" #iframe cachedSrc=\"{{previewerState.routePath}}\"\n          (load)=\"previewerFrameLoaded($event)\" [style.min-width]=\"getDeskTopWitdth()\"></iframe>\n        <div *ngIf=\"!previewerState.initialized && !previewerState.loading\" class=\"viewer\">\n          <p class=\"viewer-err-msg\">\n            <i class=\"fa fa-exclamation-triangle\"> </i>Previewer is not\n            installed or can not be loaded\n          </p>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>-->\n<router-outlet></router-outlet>\n",
                        styles: [".app-frame,.device.desktop,.no-preview,.preview-screen,.preview-screen .viewer,iframe{width:100%;height:100%;position:relative}.preview-screen .device.phone .viewer,.preview-screen .device.tablet .viewer{height:calc(100% - 20px)}.no-preview{background-color:#343a4063;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.devices .icon i{font-size:110px}.devices{display:-webkit-box;display:flex}.device-name{padding:5px 41px}.preview-screen .viewer{border:none}.device.phone .app-frame{height:600px;width:360px;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:.25s ease-out;transition:.25s ease-out;-webkit-transform-origin:center top 0;transform-origin:center top 0;margin-top:75px;margin-left:auto;margin-right:auto}.device.phone.landscape .app-frame{width:620px;height:355px;margin-top:16px}.device.tablet .app-frame{height:995px;width:776px;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:.25s ease-out;transition:.25s ease-out;-webkit-transform-origin:center top 0;transform-origin:center top 0;margin-top:81px;margin-left:auto;margin-right:auto}.device.tablet.landscape .app-frame{height:777px;width:1014px;margin-top:45px}.device.phone{height:770px;width:100%;overflow:hidden;-webkit-transition:.25s ease-out;transition:.25s ease-out;margin-top:30px;margin-bottom:30px;margin-left:0;background-repeat:no-repeat;background-position:50% 0;background-size:387px 765px}.device.phone.landscape{background-size:765px 387px;height:416px;min-width:863px;width:100%}.preview-screen .device.phone .viewer{border:1px solid #050405;border-radius:0 0 2px 2px;border-top:none}.device.tablet{height:1180px;width:100%;min-width:880px;overflow:hidden;-webkit-transition:ease-out;transition:ease-out;margin-top:30px;margin-bottom:30px;margin-left:0;background-repeat:no-repeat;background-position:50% 0;background-size:864px 1174px}.device.tablet.landscape{height:870px;width:1200px;background-size:1174px 864px}.preview-screen .device.tablet .viewer{border:1px solid #000;border-radius:0 0 2px 2px;border-top:none}.viewer .viewer-err-msg{text-align:center}.viewer-err-msg{color:#fb8c00;padding:10px;font-size:18px}.viewer-err-msg i{margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        PreviewComponent.ctorParameters = function () { return []; };
        PreviewComponent.propDecorators = {
            device: [{ type: core.Input }],
            landscapeMode: [{ type: core.Input }],
            iframe: [{ type: core.ViewChild, args: ['iframe', { static: false },] }]
        };
        return PreviewComponent;
    }());
    if (false) {
        /** @type {?} */
        PreviewComponent.prototype.device;
        /** @type {?} */
        PreviewComponent.prototype.landscapeMode;
        /** @type {?} */
        PreviewComponent.prototype.desktopWidth;
        /** @type {?} */
        PreviewComponent.prototype.iframe;
        /** @type {?} */
        PreviewComponent.prototype.previewerUrl;
        /**
         * @type {?}
         * @private
         */
        PreviewComponent.prototype.iframeLoaded$;
        /**
         * @type {?}
         * @private
         */
        PreviewComponent.prototype.unsubscribe;
        /** @type {?} */
        PreviewComponent.prototype.widgetsModules;
        /** @type {?} */
        PreviewComponent.prototype.themeUrl;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CreateTemplateComponent = /** @class */ (function () {
        function CreateTemplateComponent() {
            this.title = "Create Store Component";
        }
        /**
         * @return {?}
         */
        CreateTemplateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CreateTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-create-template',
                        template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CreateTemplateComponent.ctorParameters = function () { return []; };
        return CreateTemplateComponent;
    }());
    if (false) {
        /** @type {?} */
        CreateTemplateComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DesignSpaceComponent = /** @class */ (function () {
        function DesignSpaceComponent() {
            this.title = "Design Space Component";
        }
        /**
         * @return {?}
         */
        DesignSpaceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        DesignSpaceComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-design-space',
                        template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DesignSpaceComponent.ctorParameters = function () { return []; };
        return DesignSpaceComponent;
    }());
    if (false) {
        /** @type {?} */
        DesignSpaceComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImportTemplateComponent = /** @class */ (function () {
        function ImportTemplateComponent() {
            this.title = "Import Template Component";
        }
        /**
         * @return {?}
         */
        ImportTemplateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ImportTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-import-template',
                        template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ImportTemplateComponent.ctorParameters = function () { return []; };
        return ImportTemplateComponent;
    }());
    if (false) {
        /** @type {?} */
        ImportTemplateComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchTemplateComponent = /** @class */ (function () {
        function SearchTemplateComponent() {
            this.title = "Search Template Component";
        }
        /**
         * @return {?}
         */
        SearchTemplateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SearchTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-search-template',
                        template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SearchTemplateComponent.ctorParameters = function () { return []; };
        return SearchTemplateComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchTemplateComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimulateTemplateComponent = /** @class */ (function () {
        function SimulateTemplateComponent() {
            this.title = "Simulate Template Component";
        }
        /**
         * @return {?}
         */
        SimulateTemplateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SimulateTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-simulate-template',
                        template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SimulateTemplateComponent.ctorParameters = function () { return []; };
        return SimulateTemplateComponent;
    }());
    if (false) {
        /** @type {?} */
        SimulateTemplateComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreManagementComponent = /** @class */ (function () {
        function StoreManagementComponent() {
            this.title = "Store Management Component";
        }
        /**
         * @return {?}
         */
        StoreManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        StoreManagementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-store-management',
                        template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        StoreManagementComponent.ctorParameters = function () { return []; };
        return StoreManagementComponent;
    }());
    if (false) {
        /** @type {?} */
        StoreManagementComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PreviewModule = /** @class */ (function () {
        function PreviewModule() {
        }
        PreviewModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CoreModule,
                            SharedModule
                        ],
                        declarations: [PreviewComponent, CreateTemplateComponent, DesignSpaceComponent, ImportTemplateComponent, SearchTemplateComponent, SimulateTemplateComponent, StoreManagementComponent],
                        exports: [PreviewComponent]
                    },] }
        ];
        return PreviewModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreSelectorComponent = /** @class */ (function () {
        function StoreSelectorComponent() {
            this.selectStore = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        StoreSelectorComponent.prototype.select = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.selectStore.emit(event.value);
        };
        StoreSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-store-selector',
                        template: "<p-dropdown\n  [options]=\"stores\"\n  optionLabel=\"name\"\n  (onChange)=\"select($event)\"\n></p-dropdown>\n",
                        styles: [".store-tabs{display:-webkit-box;display:flex;overflow-y:auto;padding:0;font-size:xx-small}::ng-deep .tab-header button{width:180px;max-width:180px;height:25px;max-height:25px}.store-tabs::-webkit-scrollbar{height:0}.store-tabs::-webkit-scrollbar-thumb{display:none}:host ::ng-deep .ui-dropdown{width:100%!important}"]
                    }] }
        ];
        StoreSelectorComponent.propDecorators = {
            stores: [{ type: core.Input }],
            selectStore: [{ type: core.Output }]
        };
        return StoreSelectorComponent;
    }());
    if (false) {
        /** @type {?} */
        StoreSelectorComponent.prototype.stores;
        /** @type {?} */
        StoreSelectorComponent.prototype.selectStore;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreDisplayerComponent = /** @class */ (function () {
        function StoreDisplayerComponent(treeDragDropService, uuidService) {
            this.treeDragDropService = treeDragDropService;
            this.uuidService = uuidService;
            this.categories = [];
            this.components = [];
        }
        /**
         * Init the component treeNode
         * when start dragging
         * @param component - Component
         */
        /**
         * Init the component treeNode
         * when start dragging
         * @param {?} changes
         * @return {?}
         */
        StoreDisplayerComponent.prototype.ngOnChanges = /**
         * Init the component treeNode
         * when start dragging
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.store || changes.screen) {
                this.categories = this.filterComponents(this.store && this.store.categories);
                this.components = lodash.flatten(this.categories.map((/**
                 * @param {?} category
                 * @return {?}
                 */
                function (category) { return category.components; })));
            }
        };
        /**
         * @param {?} component
         * @return {?}
         */
        StoreDisplayerComponent.prototype.startDragComponent = /**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            var _this = this;
            /** @type {?} */
            var componentDnDNode;
            if (!component['defaultContent']) {
                componentDnDNode = this.initDraggableComponentNode(component);
                componentDnDNode = this.addComponentMetaData(component, componentDnDNode);
            }
            else {
                componentDnDNode = this.buildNodeTree([component['defaultContent']], this.components)[0];
            }
            this.treeDragDropService.startDrag({
                tree: null,
                node: componentDnDNode,
                subNodes: [componentDnDNode],
                index: 1,
                scope: component.scope
                    ? component.scope.filter((/**
                     * @param {?} scope
                     * @return {?}
                     */
                    function (scope) {
                        return scope.split('.').find((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) { return item === _this.screen; })) !== undefined;
                    }))
                    : ''
            });
        };
        /**
         * @private
         * @param {?} component
         * @return {?}
         */
        StoreDisplayerComponent.prototype.initDraggableComponentNode = /**
         * @private
         * @param {?} component
         * @return {?}
         */
        function (component) {
            /** @type {?} */
            var hasChild = component.container && component.childs && component.childs.length > 0;
            /** @type {?} */
            var data = { type: component.name, properties: {} };
            if (component.container) {
                /** @type {?} */
                var randomName = Date.now().toString();
                data['components'] = [];
                data['componentsBreakpoints'] = { xs: 12, sm: 12, md: 6, lg: 4 };
                data['name'] = component.name + "-" + randomName.substr(8);
            }
            /** @type {?} */
            var draggableNode = {
                label: component.name,
                leaf: component.container ? false : true,
                children: component.container ? [] : undefined,
                data: data,
                rules: component['rules'],
                droppable: component.container ? true : false,
                type: 'sectionItem',
                expanded: component.container ? true : false,
                styleClass: hasChild ? 'child-item-container' : null,
                customicon: component.icon
            };
            if (component['defaultChilds']) {
                this.addDefaultChilds(draggableNode, component);
            }
            return draggableNode;
        };
        /**
         * Build component node that have default content.
         */
        /**
         * Build component node that have default content.
         * @param {?} content
         * @param {?} allComponent
         * @return {?}
         */
        StoreDisplayerComponent.prototype.buildNodeTree = /**
         * Build component node that have default content.
         * @param {?} content
         * @param {?} allComponent
         * @return {?}
         */
        function (content, allComponent) {
            var _this = this;
            return content.map((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var component = allComponent.find((/**
                 * @param {?} cmp
                 * @return {?}
                 */
                function (cmp) { return cmp.name === element.type; }));
                /** @type {?} */
                var node = _this.initDraggableComponentNode(component);
                node = _this.addComponentMetaData(component, node);
                node.data = element;
                node.children =
                    element.components && element.components.length > 0
                        ? _this.buildNodeTree(element.components, allComponent)
                        : [];
                return node;
            }));
        };
        /**
         * @private
         * @param {?} draggableNode
         * @param {?} component
         * @return {?}
         */
        StoreDisplayerComponent.prototype.addDefaultChilds = /**
         * @private
         * @param {?} draggableNode
         * @param {?} component
         * @return {?}
         */
        function (draggableNode, component) {
            /** @type {?} */
            var childComponentName = component['defaultChilds'].child;
            /** @type {?} */
            var childNumber = +component['defaultChilds'].number;
            /** @type {?} */
            var breakPointsRequired = component['defaultChilds'].breakpointsRequired;
            /** @type {?} */
            var childComponent = this.components.find((/**
             * @param {?} cmp
             * @return {?}
             */
            function (cmp) { return cmp.name === childComponentName; }));
            childComponent.breakpointsRequired = breakPointsRequired;
            draggableNode['noComponentsBreakpoints'] =
                component['noComponentsBreakpoints'];
            draggableNode['defaultChilds'] = component['defaultChilds'];
            draggableNode['childComponentsBreakpoints'] = breakPointsRequired;
            if (childComponent) {
                for (var index = 0; index < childNumber; index++) {
                    /** @type {?} */
                    var childNode = this.initDraggableComponentNode(childComponent);
                    childNode = this.addComponentMetaData(childComponent, childNode);
                    draggableNode.children.push(childNode);
                }
            }
        };
        /**
         * @private
         * @param {?} component
         * @param {?} node
         * @return {?}
         */
        StoreDisplayerComponent.prototype.addComponentMetaData = /**
         * @private
         * @param {?} component
         * @param {?} node
         * @return {?}
         */
        function (component, node) {
            return __assign({}, node, { childs: component.childs, parents: component.parents });
        };
        /**
         * @private
         * @param {?} categories
         * @return {?}
         */
        StoreDisplayerComponent.prototype.filterComponents = /**
         * @private
         * @param {?} categories
         * @return {?}
         */
        function (categories) {
            var _this = this;
            if (!categories) {
                return [];
            }
            return categories
                .map((/**
             * @param {?} category
             * @return {?}
             */
            function (category) {
                return __assign({}, category, { components: lodash.orderBy(category.components.filter((/**
                     * @param {?} component
                     * @return {?}
                     */
                    function (component) {
                        if (_this.screen && component.rules) {
                            /** @type {?} */
                            var screenRules = component.rules.filter((/**
                             * @param {?} rule
                             * @return {?}
                             */
                            function (rule) {
                                return _this.isScreenAllowed(rule, _this.screen);
                            }));
                            return screenRules.length > 0 ? true : false;
                        }
                        return true;
                    })), 'displayOrder') });
            }))
                .filter((/**
             * @param {?} category
             * @return {?}
             */
            function (category) { return category.components.length > 0; }));
        };
        /**
         * @private
         * @param {?} rule
         * @param {?} screen
         * @return {?}
         */
        StoreDisplayerComponent.prototype.isScreenAllowed = /**
         * @private
         * @param {?} rule
         * @param {?} screen
         * @return {?}
         */
        function (rule, screen) {
            return ((rule.includedScreens &&
                rule.includedScreens.includes(screen) &&
                !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
                (rule.includedScreens &&
                    rule.includedScreens.length === 0 &&
                    rule.excludedScreens &&
                    rule.excludedScreens.length === 0));
        };
        StoreDisplayerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-store-displayer',
                        template: "<div class=\"components-list\">\n  <div *ngIf=\"mask\" class=\"components-mask\"></div>\n  <p-accordion\n    expandIcon=\"fa fa-fw fa-angle-right\"\n    collapseIcon=\"fa fa-fw fa-angle-down\"\n    *ngIf=\"categories && categories.length > 0; else displayError\"\n  >\n    <div *ngFor=\"let category of categories; let i = index\">\n      <p-accordionTab\n        [selected]=\"i === 0\"\n        header=\"{{ category.name | titlecase }}\"\n      >\n        <ul class=\"components\">\n          <li\n            class=\"ui-component\"\n            *ngFor=\"let component of category.components\"\n            pDraggable\n            (onDragStart)=\"startDragComponent(component)\"\n          >\n            <sc-widget [component]=\"component\"></sc-widget>\n          </li>\n        </ul>\n      </p-accordionTab>\n    </div>\n  </p-accordion>\n</div>\n\n<ng-template #displayError>\n  <div *ngIf=\"store.error; else displayMessage\" class=\"message\">\n    {{ store.error }}\n  </div>\n</ng-template>\n<ng-template #displayMessage>\n  <div class=\"message\">No component found to display</div>\n</ng-template>\n",
                        styles: [".components-list{margin-top:-1px;height:calc(100% - 24px);position:relative}.components{display:-webkit-box;display:flex;padding-left:0;flex-wrap:wrap;margin:0}.ui-component.selected,.ui-component:hover{background-color:rgba(0,0,0,.1);-webkit-transition:450ms cubic-bezier(.23,1,.32,1);transition:450ms cubic-bezier(.23,1,.32,1)}:host ::ng-deep .ui-component:hover .component-image{-webkit-transform:scale(1.1);transform:scale(1.1)}:host ::ng-deep .ui-component:hover .component-image svg{fill:#00a2ff}:host ::ng-deep .ui-component:hover .name{color:#00a2ff}.components li{list-style:none;max-width:90px;width:86px;height:60px;margin-right:2px;margin-left:0;position:relative;padding:10px}.components-mask{background:rgba(102,102,102,.2);position:absolute;width:314px;height:100%;z-index:9}.mask-message{margin:5px 39px;text-align:center;color:#212121;font-size:18px;background:rgba(102,102,102,.5);border-radius:3px}:host ::ng-deep .ui-accordion .ui-accordion-header a:active,:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:active,:host ::ng-deep .ui-accordion .ui-accordion-header:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:hover{border:0;border-top:0;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-header{background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a{text-decoration:none;padding:.5em!important;background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a .ui-accordion-toggle-icon{color:#1b1d1f}:host ::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a .ui-accordion-toggle-icon{color:#d83531!important}:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:active,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:focus{border:none}:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a{color:#d83531!important;font-weight:700;background-color:inherit!important;border:0!important;outline:0!important}:host ::ng-deep a:active,:host ::ng-deep a:focus{border:0!important;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-content{padding:1em;border-top:0;border:0}.message{text-align:center;align-content:center}"]
                    }] }
        ];
        /** @nocollapse */
        StoreDisplayerComponent.ctorParameters = function () { return [
            { type: api.TreeDragDropService },
            { type: UuidService }
        ]; };
        StoreDisplayerComponent.propDecorators = {
            store: [{ type: core.Input }],
            mask: [{ type: core.Input }],
            screen: [{ type: core.Input }]
        };
        return StoreDisplayerComponent;
    }());
    if (false) {
        /** @type {?} */
        StoreDisplayerComponent.prototype.store;
        /** @type {?} */
        StoreDisplayerComponent.prototype.mask;
        /** @type {?} */
        StoreDisplayerComponent.prototype.screen;
        /** @type {?} */
        StoreDisplayerComponent.prototype.categories;
        /** @type {?} */
        StoreDisplayerComponent.prototype.components;
        /**
         * @type {?}
         * @private
         */
        StoreDisplayerComponent.prototype.treeDragDropService;
        /**
         * @type {?}
         * @private
         */
        StoreDisplayerComponent.prototype.uuidService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsToScreenSwitcherService = /** @class */ (function () {
        function WidgetsToScreenSwitcherService() {
            this.switcher = new rxjs.BehaviorSubject('components');
        }
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherService.prototype.stat = /**
         * @return {?}
         */
        function () {
            return this.switcher.asObservable();
        };
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherService.prototype.switchToComponents = /**
         * @return {?}
         */
        function () {
            this.switcher.next('components');
        };
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherService.prototype.switchToScreens = /**
         * @return {?}
         */
        function () {
            this.switcher.next('screens');
        };
        WidgetsToScreenSwitcherService.decorators = [
            { type: core.Injectable }
        ];
        return WidgetsToScreenSwitcherService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WidgetsToScreenSwitcherService.prototype.switcher;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsToScreenSwitcherComponent = /** @class */ (function () {
        function WidgetsToScreenSwitcherComponent(switcher) {
            this.switcher = switcher;
            this.collapse = new core.EventEmitter();
            this.unsubscribe$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.switcher
                .stat()
                .pipe(operators.takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return (_this.switcherState = state); }));
        };
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherComponent.prototype.moveToComponents = /**
         * @return {?}
         */
        function () {
            this.switcher.switchToComponents();
        };
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherComponent.prototype.moveToScreens = /**
         * @return {?}
         */
        function () {
            this.switcher.switchToScreens();
        };
        /**
         * @return {?}
         */
        WidgetsToScreenSwitcherComponent.prototype.collapseComponents = /**
         * @return {?}
         */
        function () {
            this.collapse.emit();
        };
        WidgetsToScreenSwitcherComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-widgets-to-screen-switcher',
                        template: "<p-panel\n  class=\"components-panel\"\n  expandIcon=\"fa fa-angle-down\"\n  collapseIcon=\"fa fa-angle-up\"\n  [toggleable]=\"!collapseProperties\"\n  (onBeforeToggle)=\"collapseComponents()\"\n>\n  <p-header>\n    <div class=\"header-switcher\">\n      <p-button\n        label=\"Menu\"\n        (onClick)=\"moveToComponents()\"\n        [ngClass]=\"{ selected: switcherState === 'components' }\"\n      >\n      </p-button>\n      <!-- <p-button label=\"Screens\" (onClick)=\"moveToScreens()\" [ngClass]=\"{selected: switcherState === 'screens'}\">\n      </p-button> -->\n    </div>\n  </p-header>\n  <div>\n    <sc-widgets-store>\n    </sc-widgets-store>\n  </div>\n\n</p-panel>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        WidgetsToScreenSwitcherComponent.ctorParameters = function () { return [
            { type: WidgetsToScreenSwitcherService }
        ]; };
        WidgetsToScreenSwitcherComponent.propDecorators = {
            collapseProperties: [{ type: core.Input }],
            collapse: [{ type: core.Output }]
        };
        return WidgetsToScreenSwitcherComponent;
    }());
    if (false) {
        /** @type {?} */
        WidgetsToScreenSwitcherComponent.prototype.collapseProperties;
        /** @type {?} */
        WidgetsToScreenSwitcherComponent.prototype.collapse;
        /** @type {?} */
        WidgetsToScreenSwitcherComponent.prototype.unsubscribe$;
        /** @type {?} */
        WidgetsToScreenSwitcherComponent.prototype.switcherState;
        /**
         * @type {?}
         * @private
         */
        WidgetsToScreenSwitcherComponent.prototype.switcher;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScreensStoreComponent = /** @class */ (function () {
        function ScreensStoreComponent(workspaceService, treeDragDropService) {
            this.workspaceService = workspaceService;
            this.treeDragDropService = treeDragDropService;
        }
        /**
         * @return {?}
         */
        ScreensStoreComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.screens$ = this.workspaceService.getAllScreens().pipe(operators.filter(Boolean), operators.map((/**
             * @param {?} screens
             * @return {?}
             */
            function (screens) {
                return screens.map((/**
                 * @param {?} screen
                 * @return {?}
                 */
                function (screen) {
                    return { label: screen.title || screen.name, value: screen };
                }));
            })));
        };
        /**
         * Init the screen treeNode when start dragging
         * @param screen - Screen
         */
        /**
         * Init the screen treeNode when start dragging
         * @param {?} screen - Screen
         * @param {?} event
         * @return {?}
         */
        ScreensStoreComponent.prototype.startDragScreen = /**
         * Init the screen treeNode when start dragging
         * @param {?} screen - Screen
         * @param {?} event
         * @return {?}
         */
        function (screen, event) {
            /** @type {?} */
            var screenDnDNode = this.initDraggableScreenNode(screen);
            event.dataTransfer.setData('dragNode', JSON.stringify(screenDnDNode));
            this.treeDragDropService.startDrag({
                tree: null,
                node: screenDnDNode,
                subNodes: [screenDnDNode],
                scope: 'menu'
            });
        };
        /**
         * Init the screen node.
         * @param screen the screen
         */
        /**
         * Init the screen node.
         * @private
         * @param {?} screen the screen
         * @return {?}
         */
        ScreensStoreComponent.prototype.initDraggableScreenNode = /**
         * Init the screen node.
         * @private
         * @param {?} screen the screen
         * @return {?}
         */
        function (screen) {
            return undefined;
        };
        ScreensStoreComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sc-screens-store',
                        template: "<div class=\"screens-store\" *ngIf=\"(screens$ | async) as screensItems\">\n  <p-listbox *ngIf=\"screensItems.length >0\" [options]=\"screensItems\" filter=\"true\" [(ngModel)]=\"selectedScreen\"\n    [listStyle]=\"{'max-height':'100%'}\">\n    <ng-template let-screen pTemplate=\"item\">\n      <div class=\"screen-item\" pDraggable (onDragStart)=\"startDragScreen(screen.value,$event)\">\n        <i class=\"fa fa-desktop\"></i> <span>{{ screen.label }}</span>\n        <span class=\"feature-name\">({{ screen.value.featureName }} - {{screen.value.name}})</span>\n      </div>\n    </ng-template>\n  </p-listbox>\n  <div class=\"no-element\" *ngIf=\"(screensItems.length === 0)\">\n    <span class=\"no-element-msg\">\n      No screens configured\n    </span>\n  </div>\n</div>",
                        styles: [".screens-store{height:100%}:host ::ng-deep .screens-store .ui-listbox.ui-widget{width:100%;height:100%;padding:0;border:none}:host ::ng-deep .screens-store .ui-listbox-header .ui-inputtext{height:25px;border:none;border-bottom:2px solid #8d9293;padding-left:0}:host ::ng-deep .screens-store .ui-listbox-header{padding:2px 8px 0;border:none;background:#fff}::ng-deep screens-store .no-element{margin-top:50%;width:100%}:host ::ng-deep .screens-store .no-element .no-element-msg{margin:-20px auto auto;padding:10px 61px;position:absolute;width:100%;top:50%}:host ::ng-deep .screens-store .ui-listbox-header .ui-listbox-filter-container .fa{left:auto;right:.25em}:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item{margin-bottom:2px;height:auto;background-color:#f9f9f9;border-radius:0;padding:2px 5px}:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item.ui-state-highlight,:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item:not(.ui-state-highlight):hover{background-color:#eee;color:#00a2ff}:host ::ng-deep .feature-name{font-size:8pt}"]
                    }] }
        ];
        /** @nocollapse */
        ScreensStoreComponent.ctorParameters = function () { return [
            { type: client.WorkspaceClientApi },
            { type: api.TreeDragDropService }
        ]; };
        return ScreensStoreComponent;
    }());
    if (false) {
        /** @type {?} */
        ScreensStoreComponent.prototype.screens$;
        /** @type {?} */
        ScreensStoreComponent.prototype.selectedScreen;
        /**
         * @type {?}
         * @private
         */
        ScreensStoreComponent.prototype.workspaceService;
        /**
         * @type {?}
         * @private
         */
        ScreensStoreComponent.prototype.treeDragDropService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var appRoutes = [
        { path: 'createTemplate', component: CreateTemplateComponent },
        { path: 'searchTemplate', component: SearchTemplateComponent },
        { path: 'simulateTemplate', component: SimulateTemplateComponent },
        { path: 'designSpace', component: DesignSpaceComponent },
        { path: 'importTemplate', component: ImportTemplateComponent },
        { path: 'store', component: StoreManagementComponent },
        { path: '', component: PreviewComponent }
    ];
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule, ExplorerModule, CoreModule,
                            panelmenu.PanelMenuModule,
                            router.RouterModule.forRoot(appRoutes)],
                        declarations: [
                            WidgetComponent,
                            WidgetsStoreComponent,
                            StoreSelectorComponent,
                            StoreDisplayerComponent,
                            WidgetsToScreenSwitcherComponent,
                            ScreensStoreComponent
                        ],
                        exports: [
                            ExplorerModule,
                            ExplorerToolbarModule,
                            WidgetsStoreComponent,
                            WidgetsToScreenSwitcherComponent,
                            PreviewModule,
                        ],
                        providers: [WidgetsToScreenSwitcherService]
                    },] }
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainModule = /** @class */ (function () {
        function MainModule() {
        }
        MainModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [SharedModule, CoreModule, ComponentsModule],
                        declarations: [ScreenEditorComponent],
                        exports: [ScreenEditorComponent]
                    },] }
        ];
        return MainModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENT_LIBRARY = {
        id: 0,
        name: 'PrimeNG Lib',
        version: '1.0.1',
        categories: [
            {
                name: 'input',
                components: [
                    {
                        name: 'Label',
                        category: 'Input',
                        icon: '',
                        scope: [
                            'view.components',
                            'edit.components',
                            'selector.filter.components',
                            'selector.grid.components'
                        ],
                        rules: [
                            {
                                includedScreens: ['edit'],
                                excludedUseCases: [],
                                includedTypes: ['numeric', 'boolean'],
                                excludedTypes: [],
                                includedRelation: [],
                                excludedRelation: []
                            },
                            {
                                includedScreens: ['selector'],
                                excludedUseCases: [],
                                includedTypes: ['numeric', 'boolean', 'date'],
                                excludedTypes: [],
                                includedRelation: [],
                                excludedRelation: []
                            }
                        ],
                        container: false,
                        fieldRequired: false,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed label menu item'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                readOnlyCondition: {
                                    type: 'string',
                                    description: 'If the condition is verified, it specifies that the component should be disabled'
                                },
                                visibilityCondition: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                },
                                wordSize: {
                                    type: 'integer',
                                    minimum: 0,
                                    description: ''
                                },
                                mandatory: {
                                    type: 'boolean',
                                    description: 'To indicate whether the field is mandatory or no'
                                }
                            },
                            required: ['label']
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label'
                                    },
                                    {
                                        key: 'mandatory'
                                    },
                                    {
                                        key: 'readOnly'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'visibilityCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'wordSize'
                                    },
                                    {
                                        key: 'styleName'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'TextField',
                        category: 'Input',
                        scope: ['edit.components'],
                        icon: 'M16 32h416c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96H261.743v128H296c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H152c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm427.315 340.682l-80.001-79.995C353.991 283.365 336 288.362 336 304v48H112v-47.99c0-14.307-17.307-21.319-27.314-11.313L4.685 372.692c-6.245 6.245-6.247 16.379 0 22.626l80.001 79.995C94.009 484.635 112 479.638 112 464v-48h224v47.99c0 14.307 17.307 21.319 27.314 11.313l80.001-79.995c6.245-6.245 6.248-16.379 0-22.626z',
                        rules: [
                            {
                                includedScreens: ['searchInput', 'edit'],
                                includedTypes: ['numeric', 'string', 'relation']
                            },
                            {
                                includedScreens: ['searchInput'],
                                includedTypes: ['double']
                            },
                            {
                                includedScreens: ['edit', 'view'],
                                includedTypes: ['numeric', 'string', 'date']
                            },
                            {
                                excludedUseCases: ['searchInput'],
                                includedTypes: ['long']
                            }
                        ],
                        container: false,
                        fieldRequired: true,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                readOnlyCondition: {
                                    type: 'string',
                                    description: 'If the condition is verified, it specifies that the component should be disabled'
                                },
                                role: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                },
                                maxLength: {
                                    type: 'integer',
                                    minimum: 0
                                },
                                prefix: {
                                    type: 'string'
                                },
                                suffix: {
                                    type: 'string'
                                },
                                mask: {
                                    type: 'string'
                                },
                                max: {
                                    type: 'integer',
                                    minimum: 0
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed Text menu item'
                                },
                                screen: {
                                    type: 'string',
                                    enum: [''],
                                    description: 'To indicate whether the field is mandatory or not'
                                },
                                feature: {
                                    type: 'string',
                                    enum: ['Hello'],
                                    description: 'To specify whether to set the field label visible or not.'
                                },
                                hideOperator: {
                                    type: 'boolean',
                                    description: 'To indicate that the operator can be hidden'
                                },
                                keys: {
                                    type: 'array',
                                    description: 'key of the field',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            key: {
                                                type: 'string'
                                            }
                                        },
                                        required: ['key']
                                    }
                                },
                                caseSensitive: {
                                    type: 'string',
                                    enum: ['uppercase', 'lowercase', 'default']
                                },
                                defaultOperator: {
                                    type: 'string',
                                    description: 'To default operator when the option hideOperator is enabled '
                                }
                            },
                            required: ['label', 'keys']
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label',
                                        value: '$screensByFeature',
                                        deps: 'field'
                                    },
                                    {
                                        key: 'feature',
                                        value: '$Features'
                                    },
                                    {
                                        key: 'screen',
                                        value: '$Screens',
                                        deps: 'feature'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'role',
                                        value: '$Roles',
                                        deps: 'feature'
                                    },
                                    {
                                        key: 'hideOperator',
                                        rules: [
                                            {
                                                includedScreens: ['searchInput'],
                                                excludedUseCases: [],
                                                includedTypes: [],
                                                excludedTypes: [],
                                                includedRelation: [],
                                                excludedRelation: []
                                            }
                                        ]
                                    },
                                    {
                                        key: 'defaultOperator',
                                        rules: [
                                            {
                                                includedScreens: ['searchInput'],
                                                excludedUseCases: [],
                                                includedTypes: [],
                                                excludedTypes: [],
                                                includedRelation: [],
                                                excludedRelation: []
                                            }
                                        ]
                                    },
                                    {
                                        key: 'caseSensitive'
                                    },
                                    {
                                        key: 'maxLength'
                                    },
                                    {
                                        key: 'max'
                                    },
                                    {
                                        key: 'prefix'
                                    },
                                    {
                                        key: 'suffix'
                                    },
                                    {
                                        key: 'mask'
                                    },
                                    {
                                        key: 'keys',
                                        type: 'array',
                                        rules: [
                                            {
                                                includedScreens: [],
                                                excludedUseCases: [],
                                                includedTypes: ['relation'],
                                                excludedTypes: [],
                                                includedRelation: ['composition'],
                                                excludedRelation: []
                                            }
                                        ],
                                        items: [
                                            {
                                                key: 'keys[].key',
                                                notitle: true,
                                                placeholder: 'key'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'styleName'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Password',
                        category: 'Input',
                        scope: ['edit.components'],
                        icon: 'M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z',
                        rules: [
                            {
                                includedScreens: ['searchInput', 'edit'],
                                excludedUseCases: [],
                                includedTypes: [],
                                excludedTypes: [],
                                includedRelation: [],
                                excludedRelation: []
                            }
                        ],
                        container: false,
                        fieldRequired: true,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed ComboBox menu item '
                                },
                                readOnlyCondition: {
                                    type: 'string',
                                    description: 'If the condition is verified, it specifies that the component should be disabled'
                                },
                                visibilityCondition: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                },
                                mandatory: {
                                    type: 'boolean',
                                    description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form'
                                },
                                showLabel: {
                                    type: 'boolean',
                                    description: 'To specify whether to set the field label visible or not.'
                                }
                            },
                            required: ['label']
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label'
                                    },
                                    {
                                        key: 'showLabel'
                                    },
                                    {
                                        key: 'mandatory'
                                    },
                                    {
                                        key: 'readOnly'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'visibilityCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'styleName'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'DateField',
                        category: 'Input',
                        scope: ['edit.components'],
                        icon: 'M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z',
                        rules: [
                            {
                                includedScreens: [],
                                excludedUseCases: [],
                                includedTypes: ['string', 'date'],
                                excludedTypes: [],
                                includedRelation: [],
                                excludedRelation: []
                            }
                        ],
                        container: false,
                        fieldRequired: true,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                format: {
                                    type: 'string',
                                    description: 'Applicable in case of TextFieldCalendarLayout and FromToLayout'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                readOnlyCondition: {
                                    type: 'string',
                                    description: 'If the condition is verified, it specifies that the component should be disabled'
                                },
                                visibilityCondition: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed ComboBox menu item '
                                },
                                mandatory: {
                                    type: 'boolean',
                                    description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form'
                                },
                                showLabel: {
                                    type: 'boolean',
                                    description: 'To specify whether to set the field label visible or not.'
                                },
                                datePrecision: {
                                    type: 'string'
                                }
                            },
                            required: ['label', 'format']
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label'
                                    },
                                    {
                                        key: 'showLabel'
                                    },
                                    {
                                        key: 'mandatory'
                                    },
                                    {
                                        key: 'readOnly'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'visibilityCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'datePrecision'
                                    },
                                    {
                                        key: 'style'
                                    },
                                    {
                                        key: 'format'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Combobox',
                        category: 'Input',
                        scope: ['edit.components'],
                        icon: 'M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z',
                        rules: [
                            {
                                includedScreens: ['searchInput', 'edit'],
                                excludedUseCases: [],
                                includedTypes: ['numeric', 'string', 'relation', 'boolean'],
                                excludedTypes: [],
                                includedRelation: ['composition one', 'aggregation one'],
                                excludedRelation: []
                            }
                        ],
                        container: false,
                        fieldRequired: true,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                displayFilter: {
                                    type: 'boolean',
                                    description: '*true- displays an input field to filter the items on keyup.*false - displays an input field to filter the items on keyup. (The filter mode is always Contains mode.)'
                                },
                                lazy: {
                                    type: 'boolean',
                                    description: 'true - retrieved values only when the user click on the Combox. (onFocus Event).* false -  retrieved values when initializing the screen (ngOnInit)'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                readOnlyCondition: {
                                    type: 'string',
                                    description: 'If the condition is verified, it specifies that the component should be disabled'
                                },
                                visibilityCondition: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed ComboBox menu item '
                                },
                                sortType: {
                                    type: 'string',
                                    enum: ['Asc', 'Desc', 'None']
                                },
                                mandatory: {
                                    type: 'boolean',
                                    description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form '
                                },
                                showLabel: {
                                    type: 'boolean',
                                    description: 'To specify whether to set the field label visible or not.'
                                },
                                keys: {
                                    type: 'array',
                                    description: 'key of the field',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            key: {
                                                type: 'string'
                                            }
                                        },
                                        required: ['key']
                                    }
                                }
                            },
                            required: [
                                'label',
                                'readOnlyCondition',
                                'autoWidth',
                                'displayFilter'
                            ]
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label'
                                    },
                                    {
                                        key: 'showLabel'
                                    },
                                    {
                                        key: 'mandatory'
                                    },
                                    {
                                        key: 'readOnly'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'visibilityCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'sortType'
                                    },
                                    {
                                        key: 'styleName'
                                    },
                                    {
                                        key: 'lazy'
                                    },
                                    {
                                        key: 'displayFilter'
                                    },
                                    {
                                        key: 'keys',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'keys[].key',
                                                notitle: true,
                                                placeholder: 'key'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Checkbox',
                        category: 'Input',
                        scope: ['edit.components'],
                        icon: 'M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z',
                        rules: [
                            {
                                includedScreens: ['edit', 'searchInput'],
                                excludedUseCases: [],
                                includedTypes: ['boolean'],
                                excludedTypes: [],
                                includedRelation: [],
                                excludedRelation: []
                            }
                        ],
                        container: false,
                        fieldRequired: true,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed ComboBox menu item '
                                },
                                mandatory: {
                                    type: 'boolean',
                                    description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form '
                                },
                                showLabel: {
                                    type: 'boolean',
                                    description: 'To specify whether to set the field label visible or not.'
                                },
                                readOnlyCondition: {
                                    type: 'string',
                                    description: 'If the condition is verified, it specifies that the component should be disabled'
                                },
                                visibilityCondition: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                }
                            },
                            required: ['readOnly', 'mandatory']
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label'
                                    },
                                    {
                                        key: 'showLabel'
                                    },
                                    {
                                        key: 'mandatory'
                                    },
                                    {
                                        key: 'readOnly'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'visibilityCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'styleName'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Radio',
                        category: 'Input',
                        scope: ['edit.components'],
                        icon: 'M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z',
                        rules: [
                            {
                                includedScreens: ['searchInput', 'edit'],
                                excludedUseCases: [],
                                includedTypes: ['boolean'],
                                excludedTypes: [],
                                includedRelation: [],
                                excludedRelation: []
                            }
                        ],
                        container: false,
                        fieldRequired: true,
                        schema: {
                            type: 'object',
                            properties: {
                                styleName: {
                                    type: 'string',
                                    description: 'can be used to customize the style'
                                },
                                readOnly: {
                                    type: 'boolean',
                                    description: 'Specify if the field is read only or not'
                                },
                                label: {
                                    type: 'string',
                                    description: 'The label key of the displayed ComboBox menu item '
                                },
                                sortType: {
                                    type: 'string',
                                    enum: ['Asc', 'Desc', 'None']
                                },
                                showLabel: {
                                    type: 'boolean',
                                    description: 'To specify whether to set the field label visible or not.'
                                },
                                readOnlyCondition: {
                                    type: 'string'
                                },
                                visibilityCondition: {
                                    type: 'string',
                                    description: "makes the component visible if the expression's evaluation is true."
                                },
                                mandatory: {
                                    type: 'boolean'
                                }
                            },
                            required: ['readOnly']
                        },
                        layout: [
                            {
                                items: [
                                    {
                                        key: 'label'
                                    },
                                    {
                                        key: 'showLabel'
                                    },
                                    {
                                        key: 'mandatory'
                                    },
                                    {
                                        key: 'readOnly'
                                    },
                                    {
                                        key: 'readOnlyCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'visibilityCondition',
                                        type: 'textarea'
                                    },
                                    {
                                        key: 'sortType'
                                    },
                                    {
                                        key: 'styleName'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'actions',
                components: [
                    {
                        name: 'Button',
                        scope: [
                            'edit.actions',
                            'selector.filter.actions',
                            'selector.grid.actions'
                        ],
                        icon: 'M 2.898438 8 C 1.316406 8 0 9.316406 0 10.902344 L 0 22.097656 C 0 23.632813 1.253906 25 2.898438 25 L 29.097656 25 C 30.632813 25 32 23.746094 32 22.097656 L 32 10.902344 C 32 9.316406 30.683594 8 29.097656 8 Z M 2.898438 10 L 29.097656 10 C 29.714844 10 30 10.285156 30 10.902344 L 30 22.097656 C 30 22.652344 29.566406 23 29.097656 23 L 2.898438 23 C 2.347656 23 2 22.566406 2 22.097656 L 2 10.902344 C 2 10.285156 2.285156 10 2.898438 10 Z M 9.5 15 C 8.671875 15 8 15.671875 8 16.5 C 8 17.328125 8.671875 18 9.5 18 C 10.328125 18 11 17.328125 11 16.5 C 11 15.671875 10.328125 15 9.5 15 Z M 15.5 15 C 14.671875 15 14 15.671875 14 16.5 C 14 17.328125 14.671875 18 15.5 18 C 16.328125 18 17 17.328125 17 16.5 C 17 15.671875 16.328125 15 15.5 15 Z M 21.5 15 C 20.671875 15 20 15.671875 20 16.5 C 20 17.328125 20.671875 18 21.5 18 C 22.328125 18 23 17.328125 23 16.5 C 23 15.671875 22.328125 15 21.5 15 Z ',
                        include: ['edit', 'view', 'search-input', 'searchResult'],
                        fieldRequired: false,
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'ButtonContainer',
                        container: true,
                        icon: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z',
                        include: ['edit', 'view', 'search-input', 'searchResult'],
                        fieldRequired: false,
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'data',
                components: [
                    {
                        name: 'DataTable',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z',
                        include: ['searchResult'],
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'panel',
                components: [
                    {
                        name: 'TabPanel',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                        container: true,
                        include: ['edit', 'view'],
                        childs: ['TabItem', 'TabItem'],
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'Group',
                        icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                        container: true,
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'other',
                components: [
                    {
                        name: 'TabPanel',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'Group',
                        icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'other1',
                components: [
                    {
                        name: 'TabPanel',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'Group',
                        icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'other2',
                components: [
                    {
                        name: 'TabPanel',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'Group',
                        icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'other3',
                components: [
                    {
                        name: 'TabPanel',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'Group',
                        icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    }
                ]
            },
            {
                name: 'other4',
                components: [
                    {
                        name: 'TabPanel',
                        icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    },
                    {
                        name: 'Group',
                        icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                        include: ['edit', 'view'],
                        exclude: [],
                        properties: {}
                    }
                ]
            }
        ]
    };
    /** @type {?} */
    var TEMPLATE_LIBRARY = {
        name: 'PalmyraAngularTemplates',
        version: '1.0.1',
        templates: [
            {
                name: 'Edit',
                template: 'edit',
                title: 'Edit',
                sections: [
                    {
                        name: 'components',
                        title: 'Components'
                    },
                    {
                        name: 'actions',
                        title: 'Actions'
                    }
                ],
                icon: '',
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        labelAlignement: {
                            type: 'string',
                            enum: ['horizontal', 'vertical']
                        },
                        featureName: {
                            type: 'string'
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        componentsBreakpoints: {
                            type: 'object',
                            properties: {
                                xs: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                sm: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                md: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                lg: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'labelAlignement'
                            },
                            {
                                key: 'componentsBreakpoints.xs'
                            },
                            {
                                key: 'componentsBreakpoints.sm'
                            },
                            {
                                key: 'componentsBreakpoints.md'
                            },
                            {
                                key: 'componentsBreakpoints.lg'
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'showTitle'
                            }
                        ]
                    }
                ]
            },
            {
                template: 'selector',
                name: 'Selector',
                sections: [
                    {
                        name: 'filter',
                        title: 'Filter',
                        sections: [
                            {
                                name: 'components',
                                title: 'Components'
                            },
                            {
                                name: 'actions',
                                title: 'Actions'
                            }
                        ]
                    },
                    {
                        name: 'grid',
                        title: 'Grid',
                        sections: [
                            {
                                name: 'columns',
                                title: 'Columns'
                            },
                            {
                                name: 'actions',
                                title: 'Actions'
                            }
                        ]
                    }
                ],
                icon: '',
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        labelAlignement: {
                            type: 'string',
                            enum: ['horizontal', 'vertical']
                        },
                        featureName: {
                            type: 'string'
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        componentsBreakpoints: {
                            type: 'object',
                            properties: {
                                xs: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                sm: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                md: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                lg: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'labelAlignement'
                            },
                            {
                                key: 'componentsBreakpoints.xs'
                            },
                            {
                                key: 'componentsBreakpoints.sm'
                            },
                            {
                                key: 'componentsBreakpoints.md'
                            },
                            {
                                key: 'componentsBreakpoints.lg'
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'showTitle'
                            }
                        ]
                    }
                ]
            },
            {
                template: 'search',
                name: 'Search',
                sections: [
                    {
                        name: 'columns',
                        title: 'Columns'
                    },
                    {
                        name: 'actions',
                        title: 'Actions'
                    }
                ],
                icon: '',
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        showCheckBoxOnRow: {
                            type: 'boolean'
                        },
                        fitWidth: {
                            type: 'boolean'
                        },
                        enableSorting: {
                            type: 'boolean'
                        },
                        pagination: {
                            type: 'object',
                            properties: {
                                pageSize: {
                                    type: 'string'
                                },
                                showCombo: {
                                    type: 'boolean'
                                },
                                position: {
                                    type: 'string'
                                },
                                pagePossibleSizes: {
                                    type: 'array',
                                    items: {
                                        type: 'number'
                                    }
                                }
                            }
                        },
                        featureName: {
                            type: 'string'
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'pagination.pageSize'
                            },
                            {
                                key: 'pagination.position'
                            },
                            {
                                key: 'pagination.pagePossibleSizes',
                                type: 'array',
                                items: [
                                    {
                                        key: 'pagination.pagePossibleSizes[]',
                                        placeholder: 'Page Possible Size'
                                    }
                                ]
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'pagination.showCombo'
                            },
                            {
                                key: 'showCheckBoxOnRow'
                            },
                            {
                                key: 'fitWidth'
                            },
                            {
                                key: 'enableSorting'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'searchInput',
                title: 'Search Input',
                sections: [
                    {
                        name: 'components',
                        title: 'Components'
                    },
                    {
                        name: 'actions',
                        title: 'Actions'
                    }
                ],
                icon: '',
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        defaultCriteria: {
                            type: 'string'
                        },
                        featureName: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        hideOperators: {
                            type: 'boolean'
                        },
                        labelAlignement: {
                            type: 'string',
                            enum: ['horizontal', 'vertical']
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        componentsBreakpoints: {
                            type: 'object',
                            properties: {
                                xs: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                sm: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                md: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                lg: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'defaultCriteria'
                            },
                            {
                                key: 'labelAlignement'
                            },
                            {
                                key: 'componentsBreakpoints.xs'
                            },
                            {
                                key: 'componentsBreakpoints.sm'
                            },
                            {
                                key: 'componentsBreakpoints.md'
                            },
                            {
                                key: 'componentsBreakpoints.lg'
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'showTitle'
                            },
                            {
                                key: 'hideOperators'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'edit-collection',
                title: 'Edit Collection',
                sections: [
                    {
                        name: 'columns',
                        title: 'Columns'
                    },
                    {
                        name: 'actions',
                        title: 'Actions'
                    }
                ],
                icon: '',
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        showCheckBoxOnRow: {
                            type: 'boolean'
                        },
                        fitWidth: {
                            type: 'boolean'
                        },
                        enableSorting: {
                            type: 'boolean'
                        },
                        pagination: {
                            type: 'object',
                            properties: {
                                pageSize: {
                                    type: 'string'
                                },
                                showCombo: {
                                    type: 'boolean'
                                },
                                position: {
                                    type: 'string'
                                },
                                pagePossibleSizes: {
                                    type: 'array',
                                    items: {
                                        type: 'number'
                                    }
                                }
                            }
                        },
                        featureName: {
                            type: 'string'
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'pagination.pageSize'
                            },
                            {
                                key: 'pagination.position'
                            },
                            {
                                key: 'pagination.pagePossibleSizes',
                                type: 'array',
                                items: [
                                    {
                                        key: 'pagination.pagePossibleSizes[]',
                                        placeholder: 'Page Possible Size'
                                    }
                                ]
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'pagination.showCombo'
                            },
                            {
                                key: 'showCheckBoxOnRow'
                            },
                            {
                                key: 'fitWidth'
                            },
                            {
                                key: 'enableSorting'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'view-collection',
                title: 'View Collection',
                sections: [
                    {
                        name: 'columns',
                        title: 'Columns'
                    },
                    {
                        name: 'actions',
                        title: 'Actions'
                    }
                ],
                icon: '',
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        showCheckBoxOnRow: {
                            type: 'boolean'
                        },
                        fitWidth: {
                            type: 'boolean'
                        },
                        enableSorting: {
                            type: 'boolean'
                        },
                        pagination: {
                            type: 'object',
                            properties: {
                                pageSize: {
                                    type: 'string'
                                },
                                showCombo: {
                                    type: 'boolean'
                                },
                                position: {
                                    type: 'string'
                                },
                                pagePossibleSizes: {
                                    type: 'array',
                                    items: {
                                        type: 'number'
                                    }
                                }
                            }
                        },
                        featureName: {
                            type: 'string'
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'pagination.pageSize'
                            },
                            {
                                key: 'pagination.position'
                            },
                            {
                                key: 'pagination.pagePossibleSizes',
                                type: 'array',
                                items: [
                                    {
                                        key: 'pagination.pagePossibleSizes[]',
                                        placeholder: 'Page Possible Size'
                                    }
                                ]
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'pagination.showCombo'
                            },
                            {
                                key: 'showCheckBoxOnRow'
                            },
                            {
                                key: 'fitWidth'
                            },
                            {
                                key: 'enableSorting'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'view',
                title: 'View',
                icon: '',
                sections: [
                    {
                        name: 'components',
                        title: 'Components'
                    },
                    {
                        name: 'actions',
                        title: 'Actions'
                    }
                ],
                schema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        showTitle: {
                            type: 'boolean'
                        },
                        labelAlignement: {
                            type: 'string',
                            enum: ['horizontal', 'vertical']
                        },
                        featureName: {
                            type: 'string'
                        },
                        actions: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    template: {
                                        type: 'string'
                                    },
                                    servicePaths: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string'
                                                },
                                                httpMethod: {
                                                    type: 'string',
                                                    enum: [
                                                        'GET',
                                                        'POST',
                                                        'PUT',
                                                        'HEAD',
                                                        'DELETE',
                                                        'CONNECT',
                                                        'OPTIONS'
                                                    ]
                                                },
                                                includeBody: {
                                                    type: 'boolean'
                                                },
                                                condition: {
                                                    type: 'object',
                                                    properties: {
                                                        expression: {
                                                            type: 'string'
                                                        },
                                                        evaluationType: {
                                                            type: 'string',
                                                            enum: ['client', 'server']
                                                        },
                                                        calculationBase: {
                                                            type: 'array',
                                                            items: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    screens: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                path: {
                                                    type: 'string'
                                                },
                                                navigationType: {
                                                    type: 'string',
                                                    enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        componentsBreakpoints: {
                            type: 'object',
                            properties: {
                                xs: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                sm: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                md: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                },
                                lg: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 12
                                }
                            }
                        }
                    },
                    required: []
                },
                layout: [
                    {
                        items: [
                            {
                                key: 'title'
                            },
                            {
                                key: 'labelAlignement'
                            },
                            {
                                key: 'componentsBreakpoints.xs'
                            },
                            {
                                key: 'componentsBreakpoints.sm'
                            },
                            {
                                key: 'componentsBreakpoints.md'
                            },
                            {
                                key: 'componentsBreakpoints.lg'
                            },
                            {
                                key: 'actions',
                                type: 'array',
                                items: [
                                    {
                                        key: 'actions[].name',
                                        notitle: true,
                                        placeholder: 'name'
                                    },
                                    {
                                        key: 'actions[].template',
                                        notitle: true,
                                        placeholder: 'template'
                                    },
                                    {
                                        key: 'actions[].servicePaths',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].servicePaths[].url',
                                                notitle: true,
                                                placeholder: 'url'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].httpMethod',
                                                notitle: true,
                                                placeholder: 'http Method'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.expression',
                                                notitle: true,
                                                placeholder: 'condition expression'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.evaluationType',
                                                notitle: true,
                                                placeholder: 'condition evaluation Type'
                                            },
                                            {
                                                key: 'actions[].servicePaths[].condition.calculationBase',
                                                type: 'array',
                                                items: [
                                                    {
                                                        key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                        notitle: true,
                                                        placeholder: 'calculation Base'
                                                    }
                                                ]
                                            },
                                            {
                                                key: 'actions[].servicePaths[].includeBody',
                                                title: 'include Body',
                                                placeholder: 'include Body'
                                            }
                                        ]
                                    },
                                    {
                                        key: 'actions[].screens',
                                        type: 'array',
                                        items: [
                                            {
                                                key: 'actions[].screens[].path',
                                                notitle: true,
                                                placeholder: 'Screen Path'
                                            },
                                            {
                                                key: 'actions[].screens[].navigationType',
                                                notitle: true,
                                                placeholder: 'Navigation Type'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'showTitle'
                            }
                        ]
                    }
                ]
            }
        ]
    };
    /** @type {?} */
    var ROLES = [
        { name: 'admin' },
        { name: 'vermeg_user' },
        { name: 'simple_user' },
        { name: 'role1' },
        { name: 'role2' },
        { name: 'role3' },
        { name: 'role4' },
        { name: 'role5' },
        { name: 'role6' },
        { name: 'role7' },
        { name: 'role8' },
        { name: 'role9' },
        { name: 'role10' },
        { name: 'role11' },
        { name: 'role12' },
        { name: 'role13' },
        { name: 'role14' },
        { name: 'role15' },
        { name: 'role16' },
        { name: 'role17' },
        { name: 'role18' },
        { name: 'role19' },
        { name: 'role20' },
        { name: 'role21' },
        { name: 'role22' },
        { name: 'role23' }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SecurityClientApiImpl = /** @class */ (function () {
        function SecurityClientApiImpl() {
        }
        /**
         * @return {?}
         */
        SecurityClientApiImpl.prototype.getRoles = /**
         * @return {?}
         */
        function () {
            return rxjs.of(ROLES);
        };
        return SecurityClientApiImpl;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var API_BASE_PATH = '/api';
    var WorkspaceClientApiImpl = /** @class */ (function (_super) {
        __extends(WorkspaceClientApiImpl, _super);
        function WorkspaceClientApiImpl(http) {
            var _this = _super.call(this) || this;
            _this.http = http;
            return _this;
        }
        /**
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getCurrentProjectInfo = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.shareProjectWithReplay) {
                return this.shareProjectWithReplay;
            }
            else {
                this.shareProjectWithReplay = new rxjs.ReplaySubject();
                return this.http
                    .get(API_BASE_PATH + "/workspace/project/info")
                    .pipe(operators.tap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.shareProjectWithReplay.next(data);
                })));
                // shareReplay
            }
        };
        /**
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getServices = /**
         * @return {?}
         */
        function () {
            return this.http.get(API_BASE_PATH + "/workspace/services");
        };
        /**
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getModels = /**
         * @return {?}
         */
        function () {
            return this.http.get(API_BASE_PATH + "/workspace/models");
        };
        /**
         * @param {?} featureName
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getModel = /**
         * @param {?} featureName
         * @return {?}
         */
        function (featureName) {
            if (featureName === undefined ||
                featureName === null ||
                featureName === '') {
                throw new Error('Required parameter featureName was empty, null or undefined.');
            }
            return this.http
                .get(API_BASE_PATH + "/workspace/models/" + featureName)
                .pipe(operators.shareReplay());
        };
        /**
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getAllFeatures = /**
         * @return {?}
         */
        function () {
            return this.http.get(API_BASE_PATH + "/workspace/features/all");
        };
        /**
         * @param {?} featureName
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getFeature = /**
         * @param {?} featureName
         * @return {?}
         */
        function (featureName) {
            if (featureName === undefined ||
                featureName === null ||
                featureName === '') {
                throw new Error('Required parameter featureName was empty, null or undefined.');
            }
            return this.http.get(API_BASE_PATH + "/workspace/features/" + featureName);
        };
        /**
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getAllScreens = /**
         * @return {?}
         */
        function () {
            return this.http.get(API_BASE_PATH + "/workspace/screens/all");
        };
        /**
         * @param {?} name
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getPage = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return undefined;
        };
        /**
         * @return {?}
         */
        WorkspaceClientApiImpl.prototype.getAllPages = /**
         * @return {?}
         */
        function () {
            /*const data = [
              {
                label: 'Dashboard',
                name: 'Dashboard',
                template: 'page',
                routePath: '/dashboard',
                expandedIcon: 'fa fa-folder-open',
                collapsedIcon: 'fa fa-file',
                content: {
                  name: 'Dashboard',
                  template: 'page',
                  components: [
                    {
                      name: 'updatorUserId',
                      type: 'Label',
                      properties: {
                        readOnly: true,
                        label: 'updatorUserId',
                        wordSize: 0,
                        mandatory: false,
                        showLabel: true
                      }
                    },
                    {
                      name: 'updateDate',
                      type: 'Label',
                      properties: {
                        readOnly: true,
                        label: 'updateDate',
                        wordSize: 0,
                        mandatory: false,
                        showLabel: true
                      }
                    },
                    {
                      name: 'creatorUserId',
                      type: 'Label',
                      properties: {
                        readOnly: true,
                        label: 'creatorUserId',
                        wordSize: 0,
                        mandatory: false,
                        showLabel: true
                      }
                    },
                    {
                      name: 'creationDate',
                      type: 'Label',
                      properties: {
                        readOnly: true,
                        label: 'creationDate',
                        wordSize: 0,
                        mandatory: false,
                        showLabel: true
                      }
                    }
                  ]
                }
              },
              {
                label: 'Data Visualization',
                name: 'Data Visualization',
                template: 'page',
                routePath: '/data-visualization',
                expandedIcon: 'fa fa-folder-open',
                collapsedIcon: 'fa fa-file'
              },
              {
                label: 'Currency exchange',
                name: 'Currency exchange',
                template: 'page',
                routePath: '/currency',
                expandedIcon: 'fa fa-file',
                collapsedIcon: 'fa fa-file'
              }
            ];*/
            return this.http.get(API_BASE_PATH + "/workspace/pages/all");
        };
        WorkspaceClientApiImpl.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WorkspaceClientApiImpl.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        return WorkspaceClientApiImpl;
    }(client.WorkspaceClientApi));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WorkspaceClientApiImpl.prototype.shareProjectWithReplay;
        /**
         * @type {?}
         * @private
         */
        WorkspaceClientApiImpl.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IDEMessageService = /** @class */ (function (_super) {
        __extends(IDEMessageService, _super);
        function IDEMessageService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} message
         * @return {?}
         */
        IDEMessageService.prototype.pushSuccess = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            console.log('Success : ' + message.detail);
        };
        /**
         * @param {?} message
         * @return {?}
         */
        IDEMessageService.prototype.pushError = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            console.log('Error : ' + message.detail);
        };
        /**
         * @param {?} message
         * @return {?}
         */
        IDEMessageService.prototype.pushInfo = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            console.log('Info : ' + message.detail);
        };
        /**
         * @param {?} message
         * @return {?}
         */
        IDEMessageService.prototype.pushWarning = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            console.log('Warning : ' + message.detail);
        };
        return IDEMessageService;
    }(messages.IdeMessageService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IdeActionsServiceImpl = /** @class */ (function (_super) {
        __extends(IdeActionsServiceImpl, _super);
        function IdeActionsServiceImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        IdeActionsServiceImpl.prototype.doSave = /**
         * @return {?}
         */
        function () {
            this.save$.next();
        };
        /**
         * @return {?}
         */
        IdeActionsServiceImpl.prototype.save = /**
         * @return {?}
         */
        function () {
            return this.save$.asObservable();
        };
        IdeActionsServiceImpl.decorators = [
            { type: core.Injectable }
        ];
        return IdeActionsServiceImpl;
    }(client.IdeActionsService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [{ path: '', component: ScreenEditorComponent }];
    /** @type {?} */
    var modulesApiPaths = { 'screen-editor': '/api/screen-editor/1.5.0-beta.67' };
    var ɵ0$3 = modulesApiPaths;
    var ScreenEditorModule = /** @class */ (function () {
        function ScreenEditorModule() {
        }
        ScreenEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes), store.StoreModule.forRoot({}),
                            effects.EffectsModule.forRoot([])],
                        exports: [MainModule],
                        providers: [{ provide: 'API_PATHS', useValue: ɵ0$3 },
                            { provide: workspace_client_api.WorkspaceClientApi, useClass: WorkspaceClientApiImpl },
                            { provide: client.SecurityClientApi, useClass: SecurityClientApiImpl },
                            { provide: messages.IdeMessageService, useClass: IDEMessageService },
                            { provide: client.IdeActionsService, useClass: IdeActionsServiceImpl }]
                    },] }
        ];
        return ScreenEditorModule;
    }());

    exports.ScreenEditorComponent = ScreenEditorComponent;
    exports.ScreenEditorModule = ScreenEditorModule;
    exports.ɵa = UnloadModuleService;
    exports.ɵb = LayoutService;
    exports.ɵba = FeatureUpdatorComponent;
    exports.ɵbb = DialogService;
    exports.ɵbc = ScreenClonerComponent;
    exports.ɵbd = ScreenValidationService;
    exports.ɵbe = ExplorerComponent;
    exports.ɵbf = CreateTemplateComponent;
    exports.ɵbg = SearchTemplateComponent;
    exports.ɵbh = SimulateTemplateComponent;
    exports.ɵbi = DesignSpaceComponent;
    exports.ɵbj = ImportTemplateComponent;
    exports.ɵbk = StoreManagementComponent;
    exports.ɵbl = PreviewComponent;
    exports.ɵbm = WidgetComponent;
    exports.ɵbn = WidgetsStoreComponent;
    exports.ɵbo = StoreSelectorComponent;
    exports.ɵbp = StoreDisplayerComponent;
    exports.ɵbq = UuidService;
    exports.ɵbr = WidgetsToScreenSwitcherComponent;
    exports.ɵbs = WidgetsToScreenSwitcherService;
    exports.ɵbt = ScreensStoreComponent;
    exports.ɵbu = PreviewModule;
    exports.ɵbv = WorkspaceClientApiImpl;
    exports.ɵbw = SecurityClientApiImpl;
    exports.ɵbx = IDEMessageService;
    exports.ɵby = IdeActionsServiceImpl;
    exports.ɵc = SwaggerServicesStore;
    exports.ɵd = Navigator;
    exports.ɵe = PreviewStore;
    exports.ɵf = MainModule;
    exports.ɵg = SharedModule;
    exports.ɵh = RemoveSpecialCharacterDirective;
    exports.ɵi = CachedSrcDirective;
    exports.ɵj = CoreModule;
    exports.ɵk = ComponentsModule;
    exports.ɵl = ExplorerModule;
    exports.ɵm = ExplorerToolbarModule;
    exports.ɵn = ExplorerSharedModule;
    exports.ɵo = ToolbarFinderComponent;
    exports.ɵp = ToolbarAddBtnComponent;
    exports.ɵq = ToolbarSaveBtnComponent;
    exports.ɵr = FeatureExplorerToolbarComponent;
    exports.ɵs = ExplorerToolbarComponent;
    exports.ɵt = LayoutService;
    exports.ɵu = FeatureCreatorComponent;
    exports.ɵv = Dialog;
    exports.ɵw = FeatureExplorerComponent;
    exports.ɵx = FeatureSelectorComponent;
    exports.ɵy = Dialog;
    exports.ɵz = ModelsState;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=workspace-lib-ouss.umd.js.map
