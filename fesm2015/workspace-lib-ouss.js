import { Injectable, Inject, Component, Directive, ElementRef, HostListener, Renderer2, Input, NgModule, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild, Pipe, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { concatMap, map, catchError, debounceTime, distinctUntilChanged, takeUntil, filter, tap, shareReplay } from 'rxjs/operators';
import { WorkspaceClientApi, IdeActionsService, SecurityClientApi } from '@palmyra-devkit/core-api/client';
import { createAction, props, createReducer, on, createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject, of, zip, Subject, ReplaySubject } from 'rxjs';
import { countBy, remove, lowerFirst, flatten, orderBy } from 'lodash';
import { Validator, ValidationError } from 'jsonschema';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
import { v4 } from 'uuid';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, TooltipModule, TreeModule, ButtonModule, ConfirmDialogModule, PanelModule, PickListModule, DialogModule as DialogModule$1, DragDropModule, MultiSelectModule, FieldsetModule, DropdownModule, MessagesModule, MessageModule, InputTextModule, AutoCompleteModule, MenuModule, ChipsModule, SpinnerModule, ListboxModule, CheckboxModule, InputSwitchModule, ToggleButtonModule, ProgressSpinnerModule, TabViewModule, OverlayPanelModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ConfirmationService, TreeDragDropService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { PanelMenuModule } from 'primeng/panelmenu';
import { WorkspaceClientApi as WorkspaceClientApi$1 } from '@palmyra-devkit/core-api/client/workspace.client.api';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_WIDEGTS_LIBRAIRIES = createAction('[SE - Widgets Libraries] Load Widgets Libraries');
/** @type {?} */
const LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY = createAction('[SE - Widgets Libraries] Load Widgets Libraries Successfully', props());
/** @type {?} */
const LOAD_WIDEGTS_LIBRAIRIES_FAILED = createAction('[SE - Widgets Libraries] Load Widgets Libraries Failed', props());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetsLibrairiesAPIService {
    /**
     * @param {?} http
     * @param {?} api
     */
    constructor(http, api) {
        this.http = http;
        this.api = api;
    }
    /**
     * Get the component library
     * return a multi casting Replay subject
     * @return {?}
     */
    getAllWidgetsLibraries() {
        return this.http.get(`${this.api['screen-editor']}/components/all`);
    }
}
WidgetsLibrairiesAPIService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetsLibrairiesAPIService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: ['API_PATHS',] }] }
];
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
class ValidationStore {
    constructor() {
        this.shareWithBehaviour$ = new BehaviorSubject(undefined);
    }
    /**
     * @return {?}
     */
    select() {
        return this.shareWithBehaviour$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.shareWithBehaviour$.next([...value]);
    }
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) { }
    /**
     * @return {?}
     */
    complete() {
        // Noop
    }
}
ValidationStore.decorators = [
    { type: Injectable }
];
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
class PreviewStore {
    constructor() {
        this.shareWithBehavior$ = new BehaviorSubject(undefined);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    next(view) {
        this.shareWithBehavior$.next(view);
    }
    /**
     * @return {?}
     */
    select() {
        return this.shareWithBehavior$.asObservable();
    }
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) { }
    /**
     * @return {?}
     */
    complete() {
        // Noop
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        throw new Error('Method not implemented.');
    }
}
PreviewStore.decorators = [
    { type: Injectable }
];
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
class SwaggerServicesStore {
    constructor() {
        this.shareWithBehavior$ = new BehaviorSubject(undefined);
        this.services = new Array();
    }
    /**
     * @param {?} services
     * @return {?}
     */
    next(services) {
        this.shareWithBehavior$.next(services);
        this.services = [...services];
    }
    /**
     * @param {?=} featureName
     * @param {?=} path
     * @return {?}
     */
    select(featureName, path) {
        // if (featureName) {
        //   if (path) {
        //   }
        //   this._shareWithBehavior.asObservable().pipe(map(services=> services.filter()))
        // }
        return this.shareWithBehavior$.asObservable();
    }
    /**
     * @return {?}
     */
    selectCold() {
        return this.services;
    }
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) { }
    /**
     * @return {?}
     */
    complete() {
        // Noop
    }
}
SwaggerServicesStore.decorators = [
    { type: Injectable }
];
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
class PreviewerLoadingService {
    constructor() {
        this.loaderSubject = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    show() {
        this.loaderSubject.next(true);
    }
    /**
     * @return {?}
     */
    hide() {
        this.loaderSubject.next(false);
    }
    /**
     * @return {?}
     */
    getLoaderState() {
        return this.loaderSubject.asObservable();
    }
}
PreviewerLoadingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PreviewerLoadingService.ctorParameters = () => [];
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
class PreviewService {
    /**
     * @param {?} http
     * @param {?} previewStore
     * @param {?} slidingMessageService
     * @param {?} previewerLodingService
     */
    constructor(http, previewStore, slidingMessageService, previewerLodingService) {
        this.http = http;
        this.previewStore = previewStore;
        this.slidingMessageService = slidingMessageService;
        this.previewerLodingService = previewerLodingService;
    }
}
PreviewService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PreviewService.ctorParameters = () => [
    { type: HttpClient },
    { type: PreviewStore },
    { type: IdeMessageService },
    { type: PreviewerLoadingService }
];
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
class ScreensLibrairiesAPIService {
    /**
     * @param {?} http
     * @param {?} api
     */
    constructor(http, api) {
        this.http = http;
        this.api = api;
    }
    /**
     * Get the template library
     * return a multi casting Replay subject
     * @return {?}
     */
    getAllScreensLibrairies() {
        return this.http.get(`${this.api['screen-editor']}/templates/all`);
    }
}
ScreensLibrairiesAPIService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScreensLibrairiesAPIService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: ['API_PATHS',] }] }
];
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
class FeatureApi {
    /**
     * @param {?} http
     * @param {?} api
     */
    constructor(http, api) {
        this.http = http;
        this.api = api;
    }
}
FeatureApi.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FeatureApi.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: ['API_PATHS',] }] }
];
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
class WidgetsLibrairiesEffects {
    /**
     * @param {?} actions$
     * @param {?} widgetsLibrariesApi
     */
    constructor(actions$, widgetsLibrariesApi) {
        this.actions$ = actions$;
        this.widgetsLibrariesApi = widgetsLibrariesApi;
        this.loadWidgetsLibraries$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(LOAD_WIDEGTS_LIBRAIRIES), concatMap((/**
         * @return {?}
         */
        () => this.widgetsLibrariesApi.getAllWidgetsLibraries().pipe(map((/**
         * @param {?} widgetsLibrairies
         * @return {?}
         */
        widgetsLibrairies => LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY({ widgetsLibrairies })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(LOAD_WIDEGTS_LIBRAIRIES_FAILED({ err })))))))))));
    }
}
WidgetsLibrairiesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetsLibrairiesEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetsLibrairiesAPIService }
];
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
class WidgetsLibrairiesState {
}
if (false) {
    /** @type {?} */
    WidgetsLibrairiesState.prototype.data;
}
/** @type {?} */
const initialState = new WidgetsLibrairiesState();
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => (Object.assign({}, state)), ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { widgetsLibrairies }) => (Object.assign({}, state, { data: [...widgetsLibrairies] }));
/** @type {?} */
const widgetsLibrairiesReducer = createReducer(initialState, on(LOAD_WIDEGTS_LIBRAIRIES, (ɵ0)), on(LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function reducer(state, action) {
    return widgetsLibrairiesReducer(state, action);
}
/** @type {?} */
const getWidgetsLibrairiesState = createFeatureSelector('SE - Widgets Librairies');
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.data;
/** @type {?} */
const getWidgetsLibrairies = createSelector(getWidgetsLibrairiesState, (ɵ2));
const ɵ3 = /**
 * @param {?} widgetsLibrairies
 * @return {?}
 */
widgetsLibrairies => widgetsLibrairies
    ? widgetsLibrairies
        .reduce((/**
     * @param {?} result
     * @param {?} item
     * @return {?}
     */
    (result, item) => {
        return result.concat(item.categories);
    }), [])
        .filter(Boolean)
        .map((/**
     * @param {?} category
     * @return {?}
     */
    category => category.components))
        .reduce((/**
     * @param {?} allComponents
     * @param {?} uiComponent
     * @return {?}
     */
    (allComponents, uiComponent) => {
        return allComponents.concat(uiComponent);
    }), [])
    : [];
/** @type {?} */
const getAllWidgets = createSelector(getWidgetsLibrairies, (ɵ3));
const ɵ4 = /**
 * @param {?} widgets
 * @param {?} props
 * @return {?}
 */
(widgets, props) => widgets.filter((/**
 * @param {?} component
 * @return {?}
 */
component => {
    if (props.screenType && component.rules) {
        /** @type {?} */
        const screenRules = component.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        rule => isScreenAllowed(rule, props.screenType)));
        return screenRules.length > 0 ? true : false;
    }
    return true;
}));
/** @type {?} */
const getAvailableWidgetsForGivenScreenType = createSelector(getAllWidgets, (ɵ4));
const ɵ5 = /**
 * @param {?} widgets
 * @param {?} __1
 * @return {?}
 */
(widgets, { screenType, section }) => widgets &&
    widgets.filter((/**
     * @param {?} widget
     * @return {?}
     */
    widget => widget.defaultScreen &&
        widget.defaultScreen.defaultTypes[screenType] &&
        widget.scope &&
        widget.scope.filter((/**
         * @param {?} scope
         * @return {?}
         */
        scope => scope.split('.').find((/**
         * @param {?} item
         * @return {?}
         */
        item => item === section)) !== undefined)).length > 0));
/** @type {?} */
const getWidgetsToAutoGenerateSection = createSelector(getAvailableWidgetsForGivenScreenType, (ɵ5));
const ɵ6 = /**
 * @param {?} widgets
 * @return {?}
 */
widgets => widgets.filter((/**
 * @param {?} widget
 * @return {?}
 */
widget => widget.layouts));
/** @type {?} */
const getAllLayoutsWidgets = createSelector(getAllWidgets, (ɵ6));
const ɵ7 = /**
 * @param {?} widgets
 * @param {?} __1
 * @return {?}
 */
(widgets, { name }) => (widgets && widgets.find((/**
 * @param {?} widget
 * @return {?}
 */
widget => widget.name.toLowerCase() === name.toLowerCase()))) || '';
/** @type {?} */
const getWidgetByName = createSelector(getAllWidgets, (ɵ7));
/** @type {?} */
const key = 'SE - Widgets Librairies';
/**
 * Verify wether the component is allowed inside the screen or not
 * \@param rule the rule
 * \@param screen the current screen template
 * @type {?}
 */
const isScreenAllowed = (/**
 * @param {?} rule
 * @param {?} screen
 * @return {?}
 */
(rule, screen) => {
    return ((rule.includedScreens &&
        rule.includedScreens.includes(screen) &&
        !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
        (rule.includedScreens &&
            rule.includedScreens.length === 0 &&
            rule.excludedScreens &&
            rule.excludedScreens.length === 0));
});
const ɵ8 = isScreenAllowed;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_SCREENS_LIBRAIRIES = createAction('[SE - Screens Libraries] Load Screens Libraries');
/** @type {?} */
const LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY = createAction('[SE - Screens Libraries] Load Screens Libraries Successfully', props());
/** @type {?} */
const LOAD_SCREENS_LIBRAIRIES_FAILED = createAction('[SE - Screens Libraries] Load Screens Libraries Failed', props());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScreensLibrairiesEffects {
    /**
     * @param {?} actions$
     * @param {?} screensLibrariesApi
     */
    constructor(actions$, screensLibrariesApi) {
        this.actions$ = actions$;
        this.screensLibrariesApi = screensLibrariesApi;
        this.loadWidgetsLibraries$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(LOAD_SCREENS_LIBRAIRIES), concatMap((/**
         * @return {?}
         */
        () => this.screensLibrariesApi.getAllScreensLibrairies().pipe(map((/**
         * @param {?} screensLibrairies
         * @return {?}
         */
        screensLibrairies => LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY({ screensLibrairies })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(LOAD_SCREENS_LIBRAIRIES_FAILED({ err })))))))))));
    }
}
ScreensLibrairiesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScreensLibrairiesEffects.ctorParameters = () => [
    { type: Actions },
    { type: ScreensLibrairiesAPIService }
];
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
class ScreensLibrairiesState {
}
if (false) {
    /** @type {?} */
    ScreensLibrairiesState.prototype.data;
}
/** @type {?} */
const initialState$1 = new ScreensLibrairiesState();
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
state => (Object.assign({}, state)), ɵ1$1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { screensLibrairies }) => (Object.assign({}, state, { data: [...screensLibrairies] }));
/** @type {?} */
const screensLibrairiesReducer = createReducer(initialState$1, on(LOAD_SCREENS_LIBRAIRIES, (ɵ0$1)), on(LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY, (ɵ1$1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function reducer$1(state, action) {
    return screensLibrairiesReducer(state, action);
}
/** @type {?} */
const getScreenssLibrairiesState = createFeatureSelector('SE - Screens Librairies');
const ɵ2$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.data;
/** @type {?} */
const getScreensLibrairies = createSelector(getScreenssLibrairiesState, (ɵ2$1));
const ɵ3$1 = /**
 * @param {?} screensLibrairies
 * @return {?}
 */
screensLibrairies => screensLibrairies &&
    screensLibrairies
        .reduce((/**
     * @param {?} result
     * @param {?} item
     * @return {?}
     */
    (result, item) => {
        return result.concat(item.templates);
    }), [])
        .filter(Boolean);
/** @type {?} */
const getAllScreens = createSelector(getScreensLibrairies, (ɵ3$1));
const ɵ4$1 = /**
 * @param {?} allScreensTemplates
 * @param {?} __1
 * @return {?}
 */
(allScreensTemplates, { screensTemplates }) => (allScreensTemplates &&
    allScreensTemplates.filter((/**
     * @param {?} template
     * @return {?}
     */
    template => screensTemplates.includes(template.template)))) ||
    [];
/** @type {?} */
const getScreensTemplateForGivenScreens = createSelector(getAllScreens, (ɵ4$1));
const ɵ5$1 = /**
 * @param {?} allScreensTemplates
 * @param {?} __1
 * @return {?}
 */
(allScreensTemplates, { templateName }) => (allScreensTemplates &&
    allScreensTemplates.find((/**
     * @param {?} template
     * @return {?}
     */
    template => template.template === templateName))) ||
    [];
/** @type {?} */
const getScreenTemplate = createSelector(getAllScreens, (ɵ5$1));
/** @type {?} */
const key$1 = 'SE - Screens Librairies';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: refactor to ValidationService validate page/screen
class ScreenValidationService {
    /**
     * @param {?} widgetsLibrairiesManagement
     * @param {?} screensLibrairiesManagement
     */
    constructor(widgetsLibrairiesManagement, screensLibrairiesManagement) {
        this.widgetsLibrairiesManagement = widgetsLibrairiesManagement;
        this.screensLibrairiesManagement = screensLibrairiesManagement;
    }
    /**
     * @param {?} screensNames
     * @return {?}
     */
    validateScreensNames(screensNames) {
        if (screensNames && screensNames.length > 0) {
            return screensNames.reduce((/**
             * @param {?} result
             * @param {?} itm
             * @return {?}
             */
            (result, itm) => {
                /** @type {?} */
                const empty = itm.displayed.length === 0;
                if (empty) {
                    result[itm.name] = { error: 'The screen name is mandatory' };
                    return result;
                }
                /** @type {?} */
                const occurence = screensNames.filter((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => name.displayed === itm.displayed)).length;
                /** @type {?} */
                const pattern = itm.displayed.match(/[^0-9a-zA-Z_-\s]/g);
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
    }
    /**
     * @param {?} screenName
     * @return {?}
     */
    validateScreenName(screenName) {
        return (screenName.match(/[^0-9a-zA-Z_-\s]/g) !== null);
    }
    // TODO: refactor to validateScreenSchema
    /**
     * @param {?} screen
     * @return {?}
     */
    validateSchema(screen) {
        /** @type {?} */
        const components$ = this.widgetsLibrairiesManagement.select(getAllWidgets);
        /** @type {?} */
        const screenTemplates$ = this.screensLibrairiesManagement.select(getAllScreens);
        return zip(components$, screenTemplates$).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([components, screenTemplates]) => {
            /** @type {?} */
            const sections = screenTemplates.find((/**
             * @param {?} screenTemplate
             * @return {?}
             */
            screenTemplate => screenTemplate.template === screen.content.template)).sections;
            return this._validateScreenSectionsRecursive(sections, screen.content, components);
        })));
    }
    /**
     * @private
     * @param {?} sections
     * @param {?} screen
     * @param {?} components
     * @return {?}
     */
    _validateScreenSectionsRecursive(sections, screen, components) {
        return sections.reduce((/**
         * @param {?} result
         * @param {?} section
         * @return {?}
         */
        (result, section) => {
            if (section.sections) {
                return result.concat(this._validateScreenSectionsRecursive(section.sections, screen[section.name], components));
            }
            /** @type {?} */
            const screenSectionToValidate = screen[section.name];
            if (Array.isArray(screenSectionToValidate)) {
                /** @type {?} */
                const fieldsOccurences = this.getFielsOccurences(screenSectionToValidate);
                return result.concat(this._validateItemsRecursive(screenSectionToValidate, fieldsOccurences, components, section.path || section.name, section.name));
            }
            return result;
        }), new Array());
    }
    /**
     * @private
     * @param {?} items
     * @param {?} fieldsOccurences
     * @param {?} components
     * @param {?} sectionPath
     * @param {?=} section
     * @return {?}
     */
    _validateItemsRecursive(items, fieldsOccurences, components, sectionPath, section) {
        return items.reduce((/**
         * @param {?} result
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (result, item, index) => {
            /** @type {?} */
            let deepPath = sectionPath;
            /** @type {?} */
            const sep = sectionPath.indexOf('-') > 0 ? '.' : '-';
            /** @type {?} */
            const componentMetaData = components.find((/**
             * @param {?} component
             * @return {?}
             */
            component => component.name === item.type));
            if (componentMetaData) {
                /** @type {?} */
                const jsonSchemaValidator = new Validator();
                /** @type {?} */
                const validatorResult = jsonSchemaValidator.validate(item.properties || item, componentMetaData.schema);
                // check fieldrequired and namerequired
                if ((componentMetaData.fieldRequired || componentMetaData.nameRequired) &&
                    (!item.name || item.name === '')) {
                    /** @type {?} */
                    const property = componentMetaData.fieldRequired ? 'Field' : 'Name';
                    validatorResult.errors.push(new ValidationError('', '', undefined, '', 'required', property));
                }
                // check occurrence
                if (item.name && fieldsOccurences[item.name] !== 1) {
                    validatorResult.errors.push(new ValidationError('', '', undefined, '', 'unique', ''));
                }
                if (validatorResult.errors && validatorResult.errors.length > 0) {
                    /** @type {?} */
                    const validationInfo = {
                        message: this._getErrorMessage(validatorResult),
                        path: `${deepPath}${sep}${index.toString()}`
                    };
                    result.push(validationInfo);
                }
                // handle containers items
                if (item.components) {
                    if (!deepPath) {
                        deepPath = index.toString();
                    }
                    else {
                        deepPath = `${deepPath}${sep}${index}`;
                    }
                    return result.concat(this._validateItemsRecursive(item.components, fieldsOccurences, components, deepPath, section));
                }
            }
            return result;
        }), []);
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    getFielsOccurences(items) {
        /** @type {?} */
        const allComponents = this.getAllComponents(items);
        return countBy(allComponents, 'name');
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    getAllComponents(items) {
        /** @type {?} */
        const allComponents = [];
        items.forEach((/**
         * @param {?} component
         * @return {?}
         */
        component => {
            if (component.components) {
                allComponents.push(...this.getAllComponents(component.components));
            }
            allComponents.push(component);
        }));
        return allComponents;
    }
    /**
     * @private
     * @param {?} validatorResult
     * @return {?}
     */
    _getErrorMessage(validatorResult) {
        /** @type {?} */
        const requiredPropertiesErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'required'));
        /** @type {?} */
        let requiredMessage = '';
        if (requiredPropertiesErrors.length > 0) {
            requiredMessage = requiredPropertiesErrors.reduce((/**
             * @param {?} requiredMsg
             * @param {?} error
             * @return {?}
             */
            (requiredMsg, error) => {
                return `${requiredMsg} <li> ${error.argument} </li>`;
            }), '');
            /** @type {?} */
            const title = '<span>The properties below are required :</span>';
            requiredMessage = requiredMessage
                ? title + `<ul>${requiredMessage}</ul>`
                : '';
        }
        /** @type {?} */
        const invalidTypeErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'type'));
        /** @type {?} */
        let invalidTypeMessage = '';
        if (invalidTypeErrors.length > 0) {
            invalidTypeMessage = invalidTypeErrors.reduce((/**
             * @param {?} invalidMsg
             * @param {?} error
             * @return {?}
             */
            (invalidMsg, error) => {
                return `${invalidMsg} <li> ${error.property.replace('instance.', '')} ${error.message}`;
            }), '');
            /** @type {?} */
            const title = '<span>The properties below have invalid type :</span>';
            invalidTypeMessage = invalidTypeMessage
                ? title + `<ul>${invalidTypeMessage}</ul>`
                : '';
        }
        /** @type {?} */
        const invalidEnumValuesErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'enum'));
        /** @type {?} */
        let invalidEnumValuesMessage = '';
        if (invalidEnumValuesErrors.length > 0) {
            invalidEnumValuesMessage = invalidEnumValuesErrors.reduce((/**
             * @param {?} invalidValueEnum
             * @param {?} error
             * @return {?}
             */
            (invalidValueEnum, error) => {
                return `${invalidValueEnum} <li> ${error.property.replace('instance.', '')} ${error.message}`;
            }), '');
            /** @type {?} */
            const title = '<span>The properties below have invalid value selected :</span>';
            invalidEnumValuesMessage = invalidEnumValuesMessage
                ? title + `<ul>${invalidEnumValuesMessage}</ul>`
                : '';
        }
        /** @type {?} */
        const invalidItemName = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'unique'));
        /** @type {?} */
        const invalidItemNameMessage = invalidItemName.length > 0 ? '<span>Duplicated name</span><br/>' : '';
        return `${invalidItemNameMessage}${requiredMessage}${invalidTypeMessage}${invalidEnumValuesMessage}`;
    }
}
ScreenValidationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScreenValidationService.ctorParameters = () => [
    { type: Store },
    { type: Store }
];
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
class UnloadModuleService {
    /**
     * @param {?} validationStore
     */
    constructor(validationStore) {
        this.validationStore = validationStore;
    }
    /**
     * @return {?}
     */
    unloadModules() {
        this.validationStore.complete();
    }
}
UnloadModuleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnloadModuleService.ctorParameters = () => [
    { type: ValidationStore }
];
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
class LayoutService {
    constructor() {
        this.useCasePolicyMode$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    enableUcPolicyMode() {
        this.useCasePolicyMode$.next(true);
    }
    /**
     * @return {?}
     */
    disableUcPolicyMode() {
        this.useCasePolicyMode$.next(false);
    }
    /**
     * @return {?}
     */
    isUcPolicyModeActive() {
        return this.useCasePolicyMode$.asObservable();
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LayoutService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LayoutService.prototype.useCasePolicyMode$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UuidService {
    /**
     * @return {?}
     */
    getUuid() {
        return v4();
    }
}
UuidService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Device = {
    DESKTOP: 'desktop',
    PHONE: 'phone',
    TABLET: 'tablet',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Navigator {
    /**
     * @param {?} previwerStore
     */
    constructor(previwerStore) {
        this.previwerStore = previwerStore;
        this.view$ = new BehaviorSubject('feature');
    }
    /**
     * @return {?}
     */
    view() {
        return this.view$;
    }
    /**
     * @return {?}
     */
    goToScreenExplorer() {
        this.view$.next('screen');
    }
    /**
     * @return {?}
     */
    goToPageExplorer() {
        this.view$.next('page');
    }
    /**
     * @return {?}
     */
    goToFeatureExplorer() {
        this.previwerStore.next(undefined);
        //  this.propertiesManagement.dispatch(editScreenWidgetProperties(undefined));
        this.view$.next('feature');
    }
}
Navigator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Navigator.ctorParameters = () => [
    { type: PreviewStore }
];
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
class ScreenEditorComponent {
    /**
     * @param {?} unloadModuleService
     * @param {?} layoutService
     * @param {?} workspaceApi
     * @param {?} swaggerServicesStore
     * @param {?} navigator
     */
    constructor(unloadModuleService, layoutService, workspaceApi, swaggerServicesStore, navigator) {
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
    ngOnInit() {
        //  this.featuresManagementStore.dispatch(loadFeatures());
        // this.widgetsLibrairiesStore.dispatch(LOAD_WIDEGTS_LIBRAIRIES());
        // this.screensLibrairiesStore.dispatch(LOAD_SCREENS_LIBRAIRIES());
        // this.modelsManagementStore.dispatch(LOAD_MODELS());
        this.navigator.goToFeatureExplorer();
        this.displayDeviceSwitcher$ = this.layoutService
            .isUcPolicyModeActive()
            .pipe(map((/**
         * @param {?} display
         * @return {?}
         */
        display => !display)));
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
        services => {
            this.swaggerServicesStore.next(services);
        }));
    }
    /**
     * @return {?}
     */
    onCollapseComponents() {
        this.collapseComponents = !this.collapseComponents;
    }
    /**
     * @return {?}
     */
    onCollapseProperties() {
        this.collapseProperties = !this.collapseProperties;
    }
    /**
     * @param {?} device
     * @return {?}
     */
    selectDevice(device) {
        this.selectedDevice = device;
    }
    /**
     * @param {?} landscapeMode
     * @return {?}
     */
    changeLayout(landscapeMode) {
        this.landscapeMode = landscapeMode;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unloadModuleService.unloadModules();
        if (this.swaggerServices$) {
            this.swaggerServices$.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    backToPreview() {
        this.layoutService.disableUcPolicyMode();
    }
}
ScreenEditorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'screen-editor',
                template: "<global-layout>\n  <!-- Screens -->\n  <left-container class=\"left-container screen-container\">\n    <p-panel class=\"screen-panel\">\n      <p-header>\n        <div class=\"header-switcher\">\n          <p-button label=\"Data Model\" class=\"selected\"> </p-button>\n        </div>\n      </p-header>\n      <sc-explorer></sc-explorer>\n    </p-panel>\n  </left-container>\n  <!-- Screens -->\n\n  <!-- Preview -->\n  <center-container class=\"center-container\">\n    <p-panel class=\"preview-panel\">\n      <p-header>\n        <div class=\"custom-header\">\n          <div>\n            <span *ngIf=\"(displayDeviceSwitcher$ | async) === true\"\n              >Configuration</span\n            >\n\n            <div\n              *ngIf=\"(displayUseCasePolicy$ | async) === true\"\n              class=\"policy\"\n            >\n              <p-button\n                icon=\"fa fa-fw fa-arrow-left\"\n                class=\"back-button\"\n                pTooltip=\"Back to preview\"\n                tooltipPosition=\"bottom\"\n                showDelay=\"1000\"\n                hideDelay=\"500\"\n                (onClick)=\"backToPreview()\"\n              ></p-button>\n              <span>UseCase policy</span>\n            </div>\n          </div>\n          <div class=\"header-actions\">\n\n          </div>\n        </div>\n      </p-header>\n      <sc-preview\n        [device]=\"selectedDevice\"\n        [landscapeMode]=\"landscapeMode\"\n        [ngClass]=\"{ hide: displayUseCasePolicy$ | async }\"\n      ></sc-preview>\n    </p-panel>\n  </center-container>\n  <!-- Preview -->\n\n  <!-- Properties -->\n  <right-container class=\"right-container\">\n    <div\n      class=\"components-container\"\n      [class.collapse-container]=\"collapseComponents\"\n    >\n      <sc-widgets-to-screen-switcher\n        [collapseProperties]=\"collapseProperties\"\n        (collapse)=\"onCollapseComponents()\"\n      >\n      </sc-widgets-to-screen-switcher>\n    </div>\n    <!--<div\n      class=\"proprties-container\"\n      [class.collapse-container]=\"collapseProperties\"\n    >\n      <p-panel\n        class=\"proprties-panel\"\n        collapseIcon=\"fa fa-angle-down\"\n        expandIcon=\"fa fa-angle-up\"\n        [toggleable]=\"!collapseComponents\"\n        (onBeforeToggle)=\"onCollapseProperties()\"\n      >\n        <p-header>\n          <span>{{ propertiesTitle$ | async }} properties</span>\n        </p-header>\n        <sc-properties></sc-properties>\n      </p-panel>\n    </div>-->\n  </right-container>\n  <!-- Properties -->\n</global-layout>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i);.left-container{width:100%}.left-container sc-explorer{display:block}.right-container{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.components-container{-webkit-box-flex:1;flex:1;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:50%}.components-container .card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:49px}.proprties-container{-webkit-box-flex:1;flex:1;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:50%}.proprties-container .card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:49px}.components-container.collapse-container{-webkit-box-flex:0;flex:0 1 32px;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:32px}.components-container.collapse-container .card-body{display:none;-webkit-transition:.5s linear;transition:.5s linear}.proprties-container.collapse-container{-webkit-box-flex:0;flex:0 1 32px;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:32px}.proprties-container.collapse-container .card-body{display:none;-webkit-transition:.5s linear;transition:.5s linear}sc-preview.hide{display:none}:host ::ng-deep .ui-overlaypanel-close{top:0;right:0}:host ::ng-deep .policy .back-button .ui-button{height:auto}:host ::ng-deep a{color:#848484}:host ::ng-deep a:focus{outline:0!important}:host ::ng-deep a:active{outline:0!important}:host ::ng-deep .ui-button{border:none;border-radius:0;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ui-button:focus{outline:0!important;border:none}:host ::ng-deep .ui-button:active{outline:0!important}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-button:enabled:hover{border:none;border-radius:0}:host ::ng-deep .ui-tree .ui-button-icon-only:focus{outline:0!important}:host ::ng-deep .ui-tree .ui-button-icon-only:active{outline:0!important}:host ::ng-deep .ui-tree .ui-treenode-icon{font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-treenode-children{padding:0 0 0 10px}:host ::ng-deep .ui-widget{font-family:Karla,sans-serif}:host ::ng-deep .screen-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .screen-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .screen-panel .ui-panel .ui-panel-content{padding:10px;height:100%;overflow:auto}:host ::ng-deep .screen-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;width:100%;overflow-y:hidden}:host ::ng-deep .screen-panel .component-panel .ui-panel.ui-widget{width:auto}:host ::ng-deep .components-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .components-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px 5px 20px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .components-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%}:host ::ng-deep .components-panel .ui-panel .ui-panel-content{height:100%;overflow:auto;padding:0}:host ::ng-deep .proprties-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .proprties-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px 5px 20px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .proprties-panel .ui-panel .ui-panel-content{padding:10px;height:100%;overflow:auto}:host ::ng-deep .proprties-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%}:host ::ng-deep .proprties-panel .ui-panel-titlebar span{max-width:270px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ::ng-deep .preview-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;border-left:1px solid #c6c6c6;border-right:1px solid #c6c6c6;padding:0}:host ::ng-deep .preview-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:#eee;height:30px;padding:0 10px;font-size:14px;text-transform:uppercase;background:#eee}:host ::ng-deep .preview-panel .ui-panel .ui-panel-content{padding:5px;height:100%;overflow:auto}:host ::ng-deep .preview-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%;overflow-x:auto}:host ::ng-deep .preview-panel .header-actions .ui-button{border:none;color:#000;background:0 0;border-radius:0;height:30px;width:30px}:host ::ng-deep .ui-dialog{border:none;border-radius:0}:host ::ng-deep .ui-dialog .ui-dialog-content{border:0}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-close{color:#414a4b;font-size:20px;border:none}:host ::ng-deep .ui-dialog .ui-dialog-footer{border:none;margin-top:20px}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-icon{margin-top:3px}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-icon:hover{background:0 0;border:none}:host ::ng-deep .edit-screen-panel .ui-panel.ui-widget .ui-panel-titlebar{text-transform:none}:host ::ng-deep .fa:active{outline:0!important}:host ::ng-deep .fa:focus{outline:0!important}:host ::ng-deep .ui-widget-content{background-color:#fff!important}:host ::ng-deep .ui-panel .ui-panel-content{border:none!important}:host ::ng-deep .ui-panel .ui-panel-titlebar-icon{background:0 0;border:none;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover{border:none;background:0 0;color:#eee}:host ::ng-deep .ui-panel.ui-widget .ui-panel-titlebar-icon span{font-size:16px}:host ::ng-deep .ui-dialog.ui-widget .ui-dialog-titlebar{padding:11px 20px;height:45px;background:#fff;border-bottom:1px solid #f1f1f1}:host ::ng-deep .ui-dialog.ui-widget .ui-dialog-titlebar .ui-dialog-title{color:#414a4b;font-weight:700}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-content{background:#f9f9f9;color:#d83431;margin-top:20px}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-footer .ui-button{background:0 0;color:#414a4b;height:35px}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-footer .ui-button:first-child{background:#eee;color:#4caf50;height:35px}:host ::ng-deep .ui-dropdown{border:none;border-radius:0;box-shadow:none}:host ::ng-deep .ui-dropdown .ui-dropdown-panel{border:none;border-radius:0}:host ::ng-deep .ui-dropdown label.ui-dropdown-label{background:#eee;border-radius:2px;height:30px;width:180px}:host ::ng-deep .ui-dropdown .ui-dropdown-trigger.ui-state-default.ui-corner-right{background-color:#eee;margin-top:0;margin-right:1px;border-bottom:1px solid #c6c6c6;border-top:1px solid #c6c6c6;border-right:1px solid #c6c6c6;border-radius:2px;height:30px}:host ::ng-deep .ui-dropdown-panel .ui-dropdown-list{padding:0}:host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{border-radius:0;padding:5px 7px}:host ::ng-deep .ui-messages-error{border:none;color:#d83431;background:#f9f9f9}:host ::ng-deep .ui-autocomplete-dd input.ui-corner-all{border:none;background:#eee;height:30px}:host ::ng-deep .ui-autocomplete-dd .ui-autocomplete-dropdown.ui-corner-all{background:#eee;color:#222;height:30px}:host ::ng-deep .ui-inputtext{height:30px;border-radius:2px;border:1px solid #c6c6c6}:host ::ng-deep .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .ui-autocomplete .ui-autocomplete-panel{border-radius:0}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list-item{border-radius:0;padding:5px 15px}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list-item.ui-state-highlight{background:#e0e0e0;color:#222}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list{padding:0}:host ::ng-deep .ui-inputswitch{height:14px;width:34px!important;overflow:visible;background-color:#9e9e9e;border-color:#9e9e9e;border-radius:8px}:host ::ng-deep .ui-inputswitch .ui-inputswitch-handle{top:-4px;background-color:#fff;border-radius:50%;-webkit-transition:.3s;transition:.3s;width:20px!important;height:20px!important;box-shadow:rgba(0,0,0,.2) 0 1px 3px 0,rgba(0,0,0,.137255) 0 1px 1px 0,rgba(0,0,0,.117647) 0 2px 1px -1px;border:none}:host ::ng-deep .ui-inputswitch .ui-inputswitch-on{visibility:hidden}:host ::ng-deep .ui-inputswitch .ui-inputswitch-on span{visibility:hidden}:host ::ng-deep .ui-inputswitch .ui-inputswitch-off span{visibility:hidden}:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked{background-color:#efadac;border-color:#efadac}:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-handle{background-color:#d83431;color:#d83431}:host ::ng-deep .header-switcher{margin-top:-2px;display:inline-block}:host ::ng-deep .header-switcher .selected button{background-color:#d83431;color:#eee}:host ::ng-deep .header-switcher button{color:#1b1d1f;background:#d9d9d9;height:27px}:host ::ng-deep .header-switcher button:enabled:hover{background-color:#d83431;color:#eee}.custom-header{height:30px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]
            }] }
];
/** @nocollapse */
ScreenEditorComponent.ctorParameters = () => [
    { type: UnloadModuleService },
    { type: LayoutService },
    { type: WorkspaceClientApi },
    { type: SwaggerServicesStore },
    { type: Navigator }
];
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
class RemoveSpecialCharacterDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    onChange() {
        this.el.nativeElement.value = this.removeSpecialCharactersAndWhiteSpace(this.el.nativeElement.value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    removeSpecialCharactersAndWhiteSpace(value) {
        value = value.replace(/\s+/g, '');
        value = value.replace(/[^0-9a-zA-Z_-]/g, '');
        return value;
    }
}
RemoveSpecialCharacterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[remove-special-char]'
            },] }
];
/** @nocollapse */
RemoveSpecialCharacterDirective.ctorParameters = () => [
    { type: ElementRef }
];
RemoveSpecialCharacterDirective.propDecorators = {
    onChange: [{ type: HostListener, args: ['keyup',] }]
};
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
class CachedSrcDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get cachedSrc() {
        return this.elRef.nativeElement.src;
    }
    /**
     * @param {?} src
     * @return {?}
     */
    set cachedSrc(src) {
        if (this.elRef.nativeElement.src !== src) {
            this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
        }
    }
}
CachedSrcDirective.decorators = [
    { type: Directive, args: [{
                selector: 'iframe'
            },] }
];
/** @nocollapse */
CachedSrcDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CachedSrcDirective.propDecorators = {
    cachedSrc: [{ type: Input }]
};
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
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RemoveSpecialCharacterDirective, CachedSrcDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    AccordionModule,
                    TooltipModule,
                    TreeModule,
                    ButtonModule,
                    ConfirmDialogModule,
                    PanelModule,
                    PickListModule,
                    DialogModule$1,
                    DragDropModule,
                    MultiSelectModule,
                    FieldsetModule,
                    DropdownModule,
                    MessagesModule,
                    MessageModule,
                    InputTextModule,
                    AutoCompleteModule,
                    MenuModule,
                    ChipsModule,
                    SpinnerModule,
                    ListboxModule,
                    CheckboxModule,
                    InputSwitchModule,
                    ToggleButtonModule,
                    ProgressSpinnerModule,
                    TabViewModule,
                    OverlayPanelModule
                ],
                exports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    AccordionModule,
                    TooltipModule,
                    TreeModule,
                    ButtonModule,
                    ConfirmDialogModule,
                    PanelModule,
                    PickListModule,
                    DialogModule$1,
                    DragDropModule,
                    MultiSelectModule,
                    FieldsetModule,
                    DropdownModule,
                    MessagesModule,
                    MessageModule,
                    InputTextModule,
                    AutoCompleteModule,
                    MenuModule,
                    ChipsModule,
                    SpinnerModule,
                    ListboxModule,
                    CheckboxModule,
                    InputSwitchModule,
                    ToggleButtonModule,
                    ProgressSpinnerModule,
                    RemoveSpecialCharacterDirective,
                    TabViewModule,
                    TableModule,
                    OverlayPanelModule,
                    CachedSrcDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureExplorerComponent {
    /**
     * @param {?} confirmationService
     */
    constructor(confirmationService) {
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
    /**
     * @return {?}
     */
    ngOnInit() { }
}
FeatureExplorerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-explorer',
                template: "<!--<ng-container *ngIf=\"featuresTreeNodes$ | async as featuresTreeNodes; else loading\">\n  <p-tree *ngIf=\"featuresTreeNodes.length > 0; else noFeatureFound\" class=\"features-tree\" [value]=\"featuresTreeNodes\"\n    (onNodeExpand)=\"expandFeatureNode($event.node)\" (onNodeCollapse)=\"collapseFeatureNode($event.node)\"\n    selectionMode=\"single\" [(selection)]=\"selectedNode\">\n    <ng-template let-node pTemplate=\"feature\">\n      <div class=\"custom-node-label\">\n        <div class=\"node-label\">\n          <span>{{ node.label }}</span>\n          <span class=\"node-count\">({{ node.count }})</span>\n        </div>\n        <div *ngIf=\"node.updated\" class=\"node-updated\">\n          <div class=\"indecator\"></div>\n        </div>\n        <div class=\"node-actions\">\n          <p-button class=\"add-screen\" (click)=\"openAddScreensDialog(node)\" icon=\"fa fa-fw fa-plus\"\n            pTooltip=\"Add Screen\" tooltipPosition=\"bottom\"></p-button>\n          <p-button class=\"remove-tree-node\" (click)=\"deleteFeature(node)\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n            tooltipPosition=\"bottom\"></p-button>\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template let-node pTemplate=\"screen\">\n      <div class=\"custom-node-label\">\n        <span class=\"custom-node-icon\">\n          <i class=\"fas fa-link\" *ngIf=\"node.linked\" pTooltip=\"Linked to {{node.linked}} model\"\n            tooltipPosition=\"bottom\"></i>\n          <i class=\"fas fa-unlink\" *ngIf=\"!node.linked\" pTooltip=\"Not linked to a model\" tooltipPosition=\"bottom\"></i>\n        </span>\n        <div class=\"node-label\">\n          <span>{{ node.label }}</span>\n        </div>\n        <div *ngIf=\"node.updated\" class=\"node-updated\">\n          <div class=\"indecator\"></div>\n        </div>\n        <sc-policy-state-indicator [screenContent]=\"node.data\"></sc-policy-state-indicator>\n        <div class=\"node-actions\">\n          <p-button class=\"clone-node\" (click)=\"openCloneScreenDialo(node)\" icon=\"fa fa-fw fa-copy\" pTooltip=\"Clone\"\n            tooltipPosition=\"bottom\"></p-button>\n          <p-button class=\"edit-feature\" (click)=\"editFeatureScreen(node)\" icon=\"fa fa-fw fa-pen\" pTooltip=\"Edit\"\n            tooltipPosition=\"bottom\"></p-button>\n          <p-button class=\"preview-screen\" icon=\"fa fa-fw fa-eye\" (click)=\"preview(node)\" pTooltip=\"Preview\"\n            tooltipPosition=\"bottom\" showDelay=\"1000\" hideDelay=\"500\"></p-button>\n          <p-button class=\"remove-tree-node\" (click)=\"deleteScreen(node)\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n            tooltipPosition=\"bottom\"></p-button>\n        </div>\n      </div>\n    </ng-template>\n  </p-tree>\n  <ng-template #noFeatureFound>\n    <span class=\"no-match-found-msg\">\n      No feature found\n    </span>\n  </ng-template>\n</ng-container>\n<ng-template #loading>\n  <span class=\"no-match-found-msg\">\n    loading\n  </span>\n</ng-template>\n-->\n",
                styles: [".no-match-found-msg{margin:-20px auto auto;padding:10px 85px;position:absolute;top:50%}:host ::ng-deep .ui-tree{width:100%;border:none}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .add-screen .ui-button{color:#5cb85c;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .remove-tree-node .ui-button{color:#d84315;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .clone-node .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .duplicate-tree-node .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .edit-feature .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover .node-actions .preview-screen .ui-button{color:#2399e5;-webkit-transition-duration:0s;transition-duration:0s}:host ::ng-deep .ui-treenode-label{width:calc(100% - 38px)}:host ::ng-deep .ui-treenode-children .ui-treenode-label{width:calc(100% - 24px)}:host ::ng-deep .custom-node-label{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:30px}:host ::ng-deep .custom-node-icon{font-size:12px;margin-left:-10px;margin-top:2px;margin-right:2px}:host ::ng-deep .custom-node-icon .fa-unlink{color:#d84315}:host ::ng-deep .node-updated .indecator{width:6px;height:6px;border-radius:50%;background:#78909c;margin-left:2px}:host ::ng-deep .node-label{max-width:190px;overflow:hidden;text-overflow:ellipsis}:host ::ng-deep .node-actions{margin-left:auto;margin-right:0}:host ::ng-deep .node-actions .ui-button{background:0 0;border:none}:host ::ng-deep .node-actions .ui-button:enabled:hover{background:0 0;border:none}:host ::ng-deep .node-actions .ui-button-icon-only{width:20px}:host ::ng-deep .node-actions .edit-feature .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .preview-screen .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .remove-tree-node .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .clone-node .ui-button{color:#c6c6c6}:host ::ng-deep .node-actions .add-screen .ui-button{color:#c6c6c6}:host ::ng-deep .ui-panel.ui-widget .ui-panel-titlebar{padding:0 10px;background:#e0e0e0}:host ::ng-deep .actions-container .ui-button-icon-only{width:1.5em}"]
            }] }
];
/** @nocollapse */
FeatureExplorerComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
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
class FeatureExplorerToolbarComponent {
    /**
     * @param {?} ideActionsSevice
     */
    constructor(ideActionsSevice) {
        this.ideActionsSevice = ideActionsSevice;
        this.filter = new EventEmitter();
        this.addFeature = new EventEmitter();
        this.saveFeatures = new EventEmitter();
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    doFilter(query) {
        this.filter.emit(query);
    }
    /**
     * @return {?}
     */
    openAddFeatureDialog() {
        this.addFeature.emit();
    }
    /**
     * @return {?}
     */
    doSaveFeatures() {
        this.saveFeatures.emit();
    }
    /**
     * Save using keybord shortcut
     * Ctrt + s
     * @param {?} event key board event
     * @return {?}
     */
    moveNodeWithKeys(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            event.stopPropagation();
            this.doSaveFeatures();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
FeatureExplorerToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-explorer-toolbar',
                template: "<div class=\"actions-container\">\n  <sc-toolbar-finder style=\"width: 100%\" placeHolder=\"Find feature...\" (filter)=\"doFilter($event)\">\n  </sc-toolbar-finder>\n  <div class=\"actions\">\n    <sc-toolbar-add-btn tooltip=\"Add Feature\" (click)=\"addFeaturePanel.toggle($event)\"></sc-toolbar-add-btn>\n  </div>\n</div>\n<div >\n  <span class=\"trash-count\">\n    <p-overlayPanel #addFeaturePanel showCloseIcon=\"true\">\n <!--     <sc-feature-creator *ngIf=\"addFeaturePanel.visible\" (featureAdded)=\"addFeaturePanel.hide()\">\n      </sc-feature-creator>-->\n    </p-overlayPanel>\n  </span>\n</div>\n",
                styles: [".actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions-container .actions{display:-webkit-inline-box;display:inline-flex}.ui-inputgroup{width:100%}.trash-features-count-display,.trash-screens-count-display{border:1px solid #d83431;padding:5px;border-radius:5px;margin:5px;display:inline-block;top:0}.trash-count{display:block;margin-top:5px}"]
            }] }
];
/** @nocollapse */
FeatureExplorerToolbarComponent.ctorParameters = () => [
    { type: IdeActionsService }
];
FeatureExplorerToolbarComponent.propDecorators = {
    filter: [{ type: Output }],
    addFeature: [{ type: Output }],
    saveFeatures: [{ type: Output }],
    moveNodeWithKeys: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
};
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
class ExplorerToolbarComponent {
    /**
     * @param {?} navigator
     * @param {?} layoutService
     */
    constructor(navigator, layoutService) {
        this.navigator = navigator;
        this.layoutService = layoutService;
        this.query = new EventEmitter();
        this.screenSaved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view$ = this.navigator.view();
    }
    /**
     * @return {?}
     */
    openFeatureSelector() {
        // this.featuresManagement.dispatch(openDialogToAddFeature());
    }
    /**
     * @return {?}
     */
    doSaveFeatures() {
        // this.featuresManagement.dispatch(saveFeaturesUpdates());
    }
    /**
     * @param {?} query
     * @return {?}
     */
    doFilter(query) {
        this.query.emit(query);
    }
}
ExplorerToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-explorer-toolbar',
                template: "<!--<div class=\"toolbar\">\n  <sc-feature-explorer-toolbar\n    *ngIf=\"(view$ | async) === 'feature'\"\n    (filter)=\"doFilter($event)\"\n    (addFeature)=\"openFeatureSelector()\"\n    (saveFeatures)=\"doSaveFeatures()\"\n  >\n  </sc-feature-explorer-toolbar>\n  <sc-screen-explorer-toolbar *ngIf=\"(view$ | async) === 'screen'\">\n  </sc-screen-explorer-toolbar>\n</div>\n-->\n",
                styles: [".toolbar{min-height:30px}"]
            }] }
];
/** @nocollapse */
ExplorerToolbarComponent.ctorParameters = () => [
    { type: Navigator },
    { type: LayoutService }
];
ExplorerToolbarComponent.propDecorators = {
    query: [{ type: Output }],
    screenSaved: [{ type: Output }]
};
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
class ToolbarFinderComponent {
    constructor() {
        this.filterInput$ = new Subject();
        this.filter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.filterInput$
            .asObservable()
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.filter.emit(value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    doFilter(event) {
        this.filterInput$.next(event.target['value']);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ToolbarFinderComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-toolbar-finder',
                template: "<div class=\"ui-inputgroup filter-input\">\n  <input\n    type=\"text\"\n    (keyup)=\"doFilter($event)\"\n    pInputText\n    placeholder=\"{{placeHolder}}\"\n  />\n  <span class=\"ui-inputgroup-addon\">\n    <i class=\"fa fa-search\"></i>\n  </span>\n</div>\n",
                styles: [".filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}"]
            }] }
];
ToolbarFinderComponent.propDecorators = {
    filter: [{ type: Output }],
    placeHolder: [{ type: Input }]
};
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
class ToolbarAddBtnComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
ToolbarAddBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-toolbar-add-btn',
                template: `
    <p-button
      icon="fa fa-fw fa-plus"
      pTooltip="{{ tooltip }}"
      tooltipPosition="bottom"
      (click)="click.emit($event)"
    ></p-button>
  `,
                styles: [`
      :host ::ng-deep .ui-button {
        color: #d83431;
        background: transparent;
        border: none;
        border-radius: 0;
        height: 25px;
        width: 25px;
        margin-right: 0;
        margin-left: 2px;
      }
    `,
                    `
      :host ::ng-deep .ui-button:focus,
      :host ::ng-deep .ui-button:enabled:hover {
        background: transparent;
        color: #d83431 !important;
      }
    `]
            }] }
];
ToolbarAddBtnComponent.propDecorators = {
    tooltip: [{ type: Input }],
    click: [{ type: Output }]
};
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
class ToolbarSaveBtnComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
ToolbarSaveBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-toolbar-save-btn',
                template: `
    <p-button
      icon="fa fa-fw fa-check"
      pTooltip="{{ tooltip }}"
      tooltipPosition="bottom"
      (click)="click.emit()"
    ></p-button>
  `,
                styles: [`
      :host ::ng-deep .ui-button {
        background: transparent;
        border: none;
        border-radius: 0;
        height: 25px;
        width: 25px;
        margin-right: 0;
        margin-left: 2px;
        color: #4caf50;
      }
      :host ::ng-deep .ui-button .ui-button-text {
        padding: 0px 19px;
      }
      :host ::ng-deep .ui-button-text-icon-left .ui-button-icon-left {
        font-size: 12px;
        top: 14px;
        left: 2px;
      }
    `,
                    `
      :host ::ng-deep .ui-button:focus,
      :host ::ng-deep .ui-button:enabled:hover {
        color: #4caf50;
        background: transparent;
      }
    `]
            }] }
];
ToolbarSaveBtnComponent.propDecorators = {
    tooltip: [{ type: Input }],
    click: [{ type: Output }]
};
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
class ExplorerSharedModule {
}
ExplorerSharedModule.decorators = [
    { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CenterContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CenterContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'center-container',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
CenterContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalLayoutComponent {
    /**
     * @param {?} layoutService
     */
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.leftCollapsed = false;
        this.rightCollapsed = false;
        this.ucPolicyActive = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.layoutService.isUcPolicyModeActive().subscribe((/**
         * @param {?} isActive
         * @return {?}
         */
        isActive => {
            this.rightCollapsed = isActive;
            this.ucPolicyActive = isActive;
        }));
    }
    /**
     * Collapse/Expand the left container
     *
     * @return {?}
     */
    collapseLeft() {
        this.leftCollapsed = !this.leftCollapsed;
    }
    /**
     * Collapse/Expand the right container
     *
     * @return {?}
     */
    collapseRight() {
        this.rightCollapsed = !this.rightCollapsed;
    }
}
GlobalLayoutComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'global-layout',
                template: "<div class=\"global-layout\">\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"left\" [class.collapse-left]=\"leftCollapsed\">\n      <ng-content select=\"left-container\"></ng-content>\n    </div>\n\n    <div class=\"left-toggle-button\" [ngClass]=\"{'toggeled': leftCollapsed}\">\n      <p-button icon=\"fa fa-angle-double-left\" class=\"collapse-left-button\" [ngClass]=\"{'toggeled': leftCollapsed}\"\n        (click)=\"collapseLeft()\"></p-button>\n    </div>\n\n  </div>\n\n  <div class=\"center\">\n    <ng-content select=\"center-container\" class=\"center-container\"></ng-content>\n  </div>\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"right-toggle-button\" [ngClass]=\"{'toggeled': rightCollapsed}\">\n      <p-button [disabled]=\"ucPolicyActive\" icon=\"fa fa-angle-double-right\" class=\"collapse-right-button\" [ngClass]=\"{'toggeled': rightCollapsed}\"\n        (onClick)=\"collapseRight()\"></p-button>\n    </div>\n\n    <div class=\"right\" [class.collapse-right]=\"rightCollapsed\">\n      <ng-content select=\"right-container\"></ng-content>\n    </div>\n\n  </div>\n\n</div>",
                styles: [".global-layout{display:-webkit-box;display:flex;height:100%;width:100%;border:1px solid #414a4b;background:#ffffffff}.center{width:100%;overflow:hidden;min-width:430px}.left,.right{width:315px;display:-webkit-box;display:flex;overflow:hidden;visibility:visible;-webkit-transition:.5s;transition:.5s}.left{border-right:1px solid #c6c6c6;box-sizing:content-box}.right{border-left:1px solid #c6c6c6}.collapse-left,.collapse-right{width:0;visibility:hidden}.collapsible-container{display:-webkit-box;display:flex}.left-toggle-button,.right-toggle-button{width:25px;height:30px;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.left-toggle-button{margin-left:-25px}.right-toggle-button{margin-right:-25px}.left-toggle-button.toggeled{margin-left:0}.right-toggle-button.toggeled{margin-right:0}:host ::ng-deep .collapse-left-button .ui-button,:host ::ng-deep .collapse-left-button .ui-button:enabled:active,:host ::ng-deep .collapse-right-button .ui-button,:host ::ng-deep .collapse-right-button .ui-button:enabled:active{background:0 0;border:none;color:#313439;width:25px;height:30px;-webkit-transition:none;transition:none;font-size:12px}:host ::ng-deep .collapse-left-button .ui-button:enabled:hover,:host ::ng-deep .collapse-right-button .ui-button:enabled:hover{color:#424242;background:0 0;border:none}:host ::ng-deep .collapse-left-button.toggeled .ui-button,:host ::ng-deep .collapse-right-button.toggeled .ui-button{color:#424242}:host ::ng-deep .collapse-left-button .ui-button .ui-button-icon-left,:host ::ng-deep .collapse-right-button .ui-button .ui-button-icon-left{font-size:14px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-right-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-left-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;color:#404a4b}"]
            }] }
];
/** @nocollapse */
GlobalLayoutComponent.ctorParameters = () => [
    { type: LayoutService }
];
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
class LeftContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LeftContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'left-container',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
LeftContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RightContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RightContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'right-container',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
RightContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogHostDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
DialogHostDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[dialog-host]'
            },] }
];
/** @nocollapse */
DialogHostDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
if (false) {
    /** @type {?} */
    DialogHostDirective.prototype.viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogService {
    constructor() {
        this.shareWithReplay$ = new BehaviorSubject(undefined);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    openDialog(content) {
        this.shareWithReplay$.next(content);
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.shareWithReplay$.next(undefined);
    }
    /**
     * @return {?}
     */
    content() {
        return this.shareWithReplay$;
    }
}
DialogService.decorators = [
    { type: Injectable }
];
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
class DialogComponent {
    /**
     * @param {?} dialogService
     * @param {?} componentFactoryResolver
     */
    constructor(dialogService, componentFactoryResolver) {
        this.dialogService = dialogService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dialogService$ = this.dialogService.content().subscribe((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => {
            if (cmp !== undefined) {
                /** @type {?} */
                const viewContainerRef = this.dialogHost.viewContainerRef;
                viewContainerRef.clear();
                /** @type {?} */
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cmp.type);
                /** @type {?} */
                const componentRef = viewContainerRef.createComponent(componentFactory);
                ((/** @type {?} */ (componentRef.instance))).setOptions(cmp.data);
                componentRef.changeDetectorRef.detectChanges();
                this.title = cmp.title || componentRef.instance['title'];
                this.showDialog = true;
            }
            else {
                this.showDialog = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    hideDialog() {
        /** @type {?} */
        const viewContainerRef = this.dialogHost.viewContainerRef;
        viewContainerRef.clear();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dialogService$) {
            this.dialogService$.unsubscribe();
        }
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{ selector: 'sc-dialog', template: "<!--<p-dialog\n[modal]=\"true\"\n[header]=\"title\"\n[(visible)]=\"showDialog\"\n(onHide)=\"hideDialog()\"\n[width]=\"800\"\npositionTop=\"50\"\nclosable=\"true\">\n<ng-template dialog-host></ng-template>\n</p-dialog>-->\n" }] }
];
/** @nocollapse */
DialogComponent.ctorParameters = () => [
    { type: DialogService },
    { type: ComponentFactoryResolver }
];
DialogComponent.propDecorators = {
    dialogHost: [{ type: ViewChild, args: [DialogHostDirective, { static: false },] }]
};
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
class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [SharedModule],
                declarations: [DialogHostDirective, DialogComponent],
                providers: [DialogService],
                exports: [DialogComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExplorerHeaderPipe {
    /**
     * @param {?} featureName
     * @param {?=} args
     * @return {?}
     */
    transform(featureName, args) {
        if (featureName) {
            return 'Feature: ' + featureName;
        }
        return 'Features';
    }
}
ExplorerHeaderPipe.decorators = [
    { type: Pipe, args: [{
                name: 'explorerHeader',
                pure: false
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'safe'
            },] }
];
/** @nocollapse */
SafePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
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
/**
 * Loader Component to show a spinner when the state's show equals to true
 *
 */
class PreviewerLoadingComponent {
    //  constructor(private previewerManagement: Store<PreviewerState>) {}
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //  this.loading$ = this.previewerManagement.select(isLoading);
    }
}
PreviewerLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-previewer-loading',
                template: "<div class=\"previewer-loader-mask\" *ngIf=\"loading$ | async\">\n  <div class=\"loader\">\n    <p-progressSpinner\n      [style]=\"{ width: '70px', height: '70px' }\"\n      strokeWidth=\"6\"\n      fill=\"transparent\"\n      animationDuration=\".5s\"\n    ></p-progressSpinner>\n  </div>\n</div>\n",
                styles: [".previewer-loader-mask{position:absolute;width:100%;height:100%;z-index:999;display:-webkit-box;display:flex;top:0;background:rgba(102,102,102,.2)}.loader{width:auto;margin:auto}@-webkit-keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}@keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}"]
            }] }
];
/** @nocollapse */
PreviewerLoadingComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    PreviewerLoadingComponent.prototype.loading$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingModule {
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [SharedModule, CommonModule],
                exports: [PreviewerLoadingComponent],
                declarations: [PreviewerLoadingComponent],
                providers: [PreviewerLoadingService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DndService {
    /**
     * @param {?} dragDropService
     */
    constructor(dragDropService) {
        this.dragDropService = dragDropService;
        this.dragDropService.dragStart$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dragStartInfo = {
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
    getDroppedNode() {
        return this.dragDropService.dragStop$.pipe(map((/**
         * @param {?} treeNode
         * @return {?}
         */
        treeNode => {
            return treeNode;
        })));
    }
    /**
     * apply the tree dnd rules
     * @param {?} dropNode - node to trop inside.
     * @param {?} dragNode - node dragged from the widget store.
     * @return {?}
     */
    isDropNotAllowed(dropNode, dragNode) {
        // drop into the root node
        if (dragNode.parents && dropNode.type === 'rootNode') {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            return this._addRemovedNode(removed);
        }
        // drop into root node childrens
        if (dropNode.parent &&
            dropNode.parent.type === 'rootNode' &&
            dragNode.parents) {
            /** @type {?} */
            const removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        // when parent node have childs
        if (dropNode.parent &&
            dropNode.parent['childs'] &&
            !dropNode.parent['childs'].includes(dragNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        if (dragNode.parents &&
            dropNode.data &&
            !dragNode.parents.includes(dropNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        // drop into node that have childs
        if (dropNode.childs && !dropNode.childs.includes(dragNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            return this._addRemovedNode(removed);
        }
        // drag node have parents
        if (dragNode.parents &&
            dropNode.data &&
            dropNode.data.type &&
            !dragNode.parents.includes(dropNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        if (dragNode.parents &&
            dropNode.parent &&
            dropNode.parent.data &&
            !dragNode.parents.includes(dropNode.parent.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            return this._addRemovedNode(removed);
        }
        return;
    }
    /**
     * @private
     * @param {?} treeItems
     * @param {?} node
     * @param {?=} path
     * @param {?=} parentIndex
     * @return {?}
     */
    getSelectionPath(treeItems, node, path, parentIndex) {
        /** @type {?} */
        const index = treeItems.indexOf(node);
        if (index < 0) {
            /** @type {?} */
            let i = 0;
            while (i < treeItems.length && path === undefined) {
                /** @type {?} */
                const children = treeItems[i].children;
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
    }
    /**
     * @private
     * @param {?} removed
     * @return {?}
     */
    _addRemovedNode(removed) {
        if (removed.length > 0) {
            return this.dragStartInfo.dragNodeSubNodes.splice(this.dragStartInfo.dragNodeIndex, 0, this.dragStartInfo.dragNode);
        }
        return;
    }
}
DndService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DndService.ctorParameters = () => [
    { type: TreeDragDropService }
];
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
const LOAD_MODELS = createAction('[SE Models] Load Models');
/** @type {?} */
const LOAD_MODELS_SUCCESSFULLY = createAction('[SE Models] Load Models Successfully', props());
/** @type {?} */
const LOAD_MODELS_FAILED = createAction('[SE Models] Load Models Failed', props());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModelsEffects {
    /**
     * @param {?} actions$
     * @param {?} modelsApi
     */
    constructor(actions$, modelsApi) {
        this.actions$ = actions$;
        this.modelsApi = modelsApi;
        this.loadModels$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(LOAD_MODELS), concatMap((/**
         * @return {?}
         */
        () => {
            return this.modelsApi.getModels().pipe(map((/**
             * @param {?} entities
             * @return {?}
             */
            entities => LOAD_MODELS_SUCCESSFULLY({ entities }))), catchError((/**
             * @param {?} err
             * @return {?}
             */
            err => of(LOAD_MODELS_FAILED({ err })))));
        })))));
    }
}
ModelsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ModelsEffects.ctorParameters = () => [
    { type: Actions },
    { type: WorkspaceClientApi }
];
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
class ModelsState {
    /**
     * @param {?=} entities
     */
    constructor(entities) {
        this.entities = entities;
    }
}
if (false) {
    /** @type {?} */
    ModelsState.prototype.entities;
}
/** @type {?} */
const initialState$2 = new ModelsState();
const ɵ0$2 = /**
 * @param {?} state
 * @return {?}
 */
state => (Object.assign({}, state)), ɵ1$2 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { entities }) => new ModelsState(entities);
/** @type {?} */
const modelsReducer = createReducer(initialState$2, on(LOAD_MODELS, (ɵ0$2)), on(LOAD_MODELS_SUCCESSFULLY, (ɵ1$2)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function reducer$2(state, action) {
    return modelsReducer(state, action);
}
/** @type {?} */
const getModelsState = createFeatureSelector('SE - Models');
const ɵ2$2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities || [];
/** @type {?} */
const getAllModels = createSelector(getModelsState, (ɵ2$2));
const ɵ3$2 = /**
 * @param {?} entities
 * @param {?} __1
 * @return {?}
 */
(entities, { entityName }) => {
    if (entityName) {
        /** @type {?} */
        let model = entities.find((/**
         * @param {?} entity
         * @return {?}
         */
        entity => entity.name.toLowerCase() === entityName.toLowerCase()));
        if (model) {
            model = attachRelationShipsToModel(model, entities);
        }
        return model;
    }
    return undefined;
};
/** @type {?} */
const getModel = createSelector(getAllModels, (ɵ3$2));
/** @type {?} */
const key$2 = 'SE - Models';
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
    relationship => {
        if (!relationship.entity) {
            relationship.entity = allEntities.find((/**
             * @param {?} relationType
             * @return {?}
             */
            relationType => relationType.name.toLowerCase() === relationship.type.toLowerCase()));
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
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ExplorerHeaderPipe, SafePipe],
                imports: [
                    SharedModule,
                    LayoutModule,
                    DialogModule,
                    LoadingModule,
                    StoreModule.forFeature(key, reducer),
                    StoreModule.forFeature(key$1, reducer$1),
                    StoreModule.forFeature(key$2, reducer$2),
                    EffectsModule.forFeature([
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
                    ConfirmationService,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Dialog {
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
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
class FeatureCreatorComponent extends Dialog {
    constructor() {
        super();
        this.featureAdded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /* this.featuresManagement.select(getFeatures).subscribe(features => {
           this.features = features;
         });*/
    }
    /**
     * @param {?} form
     * @return {?}
     */
    submit(form) {
        this.feature = lowerFirst(this.feature);
        if (form.valid &&
            !Object.keys(this.features).find((/**
             * @param {?} name
             * @return {?}
             */
            name => name === this.feature))) {
            this.featureAdded.emit(this.feature);
            /* this.featuresManagement.dispatch(
               addFeature({
                 feature: { name: this.feature, screenscount: 0 }
               })
             );*/
            this.feature = undefined;
        }
    }
}
FeatureCreatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-creator',
                template: "<div class=\"feature-creator\">\n  <form name=\"form\" #frm=\"ngForm\">\n    <label>Feature name:</label>\n    <div class=\"input-container\">\n      <input type=\"text\" pInputText [(ngModel)]=\"feature\" required pattern=\"^[a-zA-Z][a-zA-Z_$0-9-]*$\"\n        name=\"featureName\" placeholder=\"eg. customer-management\" #featureName=\"ngModel\" />\n      <i class=\"fas fa-exclamation error-mark\" *ngIf=\"frm.submitted && featureName.invalid\" tooltipPosition=\"bottom\"\n        [pTooltip]=\"featureName.errors.required ? 'Feature name is required' : 'Feature name should be in Kebab Case'\"></i>\n      <button pButton type=\"submit\" label=\"Add\" class=\"add-button\" (click)=\"submit(frm)\"></button>\n    </div>\n  </form>\n</div>",
                styles: [".feature-creator .input-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.feature-creator .input-container .error-mark{color:#d84315;padding:0 7px;margin-right:-9px}.feature-creator .input-container input.ng-touched.ng-invalid{border-color:#d84315}.feature-creator .input-container .add-button{background-color:#4caf50;color:#fff;margin-left:10px}"]
            }] }
];
/** @nocollapse */
FeatureCreatorComponent.ctorParameters = () => [];
FeatureCreatorComponent.propDecorators = {
    featureAdded: [{ type: Output }]
};
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
class ExplorerToolbarModule {
}
ExplorerToolbarModule.decorators = [
    { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExplorerComponent {
    /**
     * @param {?} navigator
     */
    constructor(navigator) {
        this.navigator = navigator;
    }
    /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    filter(query) {
        // this.featuresManagement.dispatch(filterFeature({ query }));
    }
}
ExplorerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-explorer',
                template: "<!--<sc-explorer-toolbar (query)=\"filter($event)\"></sc-explorer-toolbar>\n\n<div class=\"tree-container\">\n  <ng-container *ngIf=\"(navigator.view() | async) === 'feature'\">\n    <sc-feature-explorer> </sc-feature-explorer>\n  </ng-container>\n  <ng-container *ngIf=\"(navigator.view() | async) === 'screen'\">\n    <sc-screen-explorer> </sc-screen-explorer>\n  </ng-container>\n</div>-->\n\n<!-- <ng-template #noFeatureContainer>\n  <div class=\"no-feature-container\">\n    <div class=\"no-data-message\">\n      <span>No feature configured.</span>\n    </div>\n    <div class=\"actions\">\n      <p-button\n        class=\"add-Feature\"\n        icon=\"fa fa-fw fa-plus\"\n        label=\"Add feature\"\n        (click)=\"addNewFeature()\"\n      ></p-button>\n    </div>\n  </div>\n</ng-template> -->\n",
                styles: ["@charset \"UTF-8\";.no-feature-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:calc(100% - 30px);-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;background:#f3f3f3}.no-feature-container .no-data-message{padding-bottom:20px}:host ::ng-deep .tree-container{height:100%}:host ::ng-deep .ui-tree-container{height:100%;margin:0;overflow:auto;padding:.25em!important;white-space:nowrap}:host ::ng-deep .ui-tree{border:none!important;width:100%!important;padding:0}:host ::ng-deep .ui-tree .ui-tree-container{padding:0}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode{padding:.125em 0 0!important}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content{padding:0;border:0 solid transparent}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label.ui-state-highlight{background-color:inherit!important;color:inherit!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-content-selected{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-dragover{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-tree-toggler{font-size:12px}:host ::ng-deep .ui-tree .pi{font-family:\"Font Awesome 5 Free\";font-weight:900}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-right:before{content:\"\uF054\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-button-icon-only{font-size:14px}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-down:before{content:\"\uF078\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content{height:30px;background-color:#f9f9f9;border-left:4px solid #c6c6c6!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover{background-color:#eee}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:active{background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:focus{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable:active{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover{border:none;background:0 0}:host ::ng-deep .ui-tree .ui-treenode-label.ui-state-highlight{border:none;background:0 0;color:#222}:host ::ng-deep .screens-content .ui-tree{border:none}"]
            }] }
];
/** @nocollapse */
ExplorerComponent.ctorParameters = () => [
    { type: Navigator }
];
if (false) {
    /** @type {?} */
    ExplorerComponent.prototype.navigator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureUpdatorComponent extends Dialog {
    /**
     * @param {?} dialogService
     * @param {?} screensLibrairiesManagement
     * @param {?} modelsManagementStore
     */
    constructor(dialogService, screensLibrairiesManagement, modelsManagementStore) {
        super();
        this.dialogService = dialogService;
        this.screensLibrairiesManagement = screensLibrairiesManagement;
        this.modelsManagementStore = modelsManagementStore;
        this.title = '';
        this.screensCount$ = {};
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.featureName = options.featureName;
        this.title = `Screen manager (Feature: ${this.featureName})`;
        //this.refreshFeatureScreensState(this.featureName);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
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
    disableApplyButton() {
        // require screens validated
        return this.disableApplyButton$;
    }
}
FeatureUpdatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-updator',
                template: "<!--<div class=\"templates-group\" *ngIf=\"templates$ | async as templates\">\n  <span class=\"title\">Screen types:</span>\n  <div class=\"ui-g-3\" *ngFor=\"let template of templates\">\n    <p-button [label]=\"screensCount$[template.template] | async\" (click)=\"addScreen(template)\"></p-button>\n  </div>\n</div>\n<span class=\"title\">Feature screens:</span>\n<ng-container *ngIf=\"featureScreensState$ | async\">\n  <div class=\"screens\">\n    <p-table [value]=\"screens\" [scrollable]=\"true\" scrollHeight=\"200px\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Template</th>\n          <th>Definition</th>\n          <th style=\"width:65px;text-align: center\">\n            <ng-container *ngIf=\"screensInTrashCount$ | async as screensInTrashCount\">\n              <span *ngIf=\"screensInTrashCount > 0\"><i\n                  class=\"fa fa-fw fa-trash\"></i><sup>({{ screensInTrashCount }})</sup></span></ng-container>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-screen let-ri=\"rowIndex\">\n        <tr>\n          <td pEditableColumn>\n            <p-cellEditor [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n              <ng-template pTemplate=\"input\">\n                <input type=\"text\" [ngModel]=\"screen.screenName\" (blur)=\"screenNameChanges($event.target.value, ri)\"\n                  (keydown.enter)=\"screenNameChanges($event.target.value, ri)\" [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\" />\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <span [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n                  {{ screen.screenName }} <i class=\"fas fa-pen edit-cell-icon\"></i></span>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td>{{ screen.template.template }}</td>\n          <td pEditableColumn>\n\n            <p-cellEditor>\n              <ng-template pTemplate=\"input\">\n                <p-dropdown [options]=\"models$ | async\"\n                  [(ngModel)]=\"screen.modelChanged ? screen.modelChangedValue : screen.modelName\" filter=\"true\"\n                  filterPlaceholder=\"Search model\" placeholder=\"Select model\" showClear=\"true\"\n                  (onChange)=\"screenDefinitionChanges(screen.screenName,screen.savedName,$event.value)\" appendTo=\"body\"\n                  panelStyleClass=\"sc-ui-dropdown\"></p-dropdown>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{screen.modelChanged ? screen.modelChangedValue : screen.modelName}} <i\n                  class=\"fas fa-pen edit-cell-icon\"></i>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td style=\"width: 65px;text-align: center;\">\n            <p-button *ngIf=\"!screen.toBeDeleted\" class=\"delete-button\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n              tooltipPosition=\"bottom\" (click)=\"screenToDelete(screen)\"></p-button>\n            <div class=\"actions\" *ngIf=\"screen.toBeDeleted\">\n              <p-button class=\"save-button\" icon=\"fa fa-fw fa-check\" pTooltip=\"Confirm\" tooltipPosition=\"bottom\"\n                (click)=\"confirmDeleteScreen(screen)\"></p-button>\n              <p-button class=\"add-Feature\" icon=\"fa fa-fw fa-close\" pTooltip=\"Cancel\" tooltipPosition=\"bottom\"\n                (click)=\"cancelDeleteScreen(screen)\"></p-button>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns=\"columns\">\n        <tr>\n          <td [attr.colspan]=\"columns?.length\">\n            No screen configured\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  <div class=\"apply-button\">\n    <p-button (onClick)=\"apply()\" icon=\"fa fa-fw fa-check\" label=\"Apply\" [disabled]=\"disableApplyButton() | async\">\n    </p-button>\n  </div>\n</ng-container>-->\n",
                styles: [".title{display:block;font-weight:700;font-size:16px}:host ::ng-deep .apply-button .ui-button,:host ::ng-deep .apply-button .ui-button:hover{background:#eee;color:#5cb85c;float:right;height:35px}:host ::ng-deep .apply-button{float:right;margin-top:20px}:host ::ng-deep .delete-button .ui-button,:host ::ng-deep .delete-button .ui-button:hover{background:0 0;color:#d84315}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-table .edit-cell-icon{font-size:14px}:host ::ng-deep .ui-table .ui-widget-header{background-color:transparent;width:100%}:host ::ng-deep .ui-table .ui-table-thead>tr>th{padding:5px;border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4;border-bottom:none;font-size:14px}:host ::ng-deep .ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}:host ::ng-deep .ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8;padding:2px 5px}:host ::ng-deep .templates-group{display:inline-block;margin-bottom:5px}:host ::ng-deep .templates-group .ui-g-3{padding:3px}:host ::ng-deep .templates-group .ui-button{color:#d83431;background:#eee;width:175px;height:30px}:host ::ng-deep .templates-group .ui-button:hover{background-color:#e0e0e0;color:#dc3545;width:175px}:host ::ng-deep .ui-widget-header{background:repeat-x #ececec}:host ::ng-deep .ui-editable-column .invalid-screen-name{background:#db7093;border:0}:host ::ng-deep .ui-table .ui-table-data>tr>td.ui-editable-column.invalid-screen-name{background:#db7093}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .actions .ui-button{border:none;border-radius:0;height:25px;width:25px;margin-right:0;margin-left:2px}:host ::ng-deep .actions .add-Feature .ui-button{color:#d83431;background:0 0}:host ::ng-deep .actions .save-button .ui-button{color:#4caf50;background:0 0}.actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions{display:-webkit-inline-box;display:inline-flex}.filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}"]
            }] }
];
/** @nocollapse */
FeatureUpdatorComponent.ctorParameters = () => [
    { type: DialogService },
    { type: Store },
    { type: Store }
];
FeatureUpdatorComponent.propDecorators = {
    setOptions: [{ type: Input }]
};
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
class FeatureSelectorComponent extends Dialog {
    /**
     * @param {?} modelsManagementStore
     */
    constructor(modelsManagementStore) {
        super();
        this.modelsManagementStore = modelsManagementStore;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.selectFeature();
    }
    /**
     * @return {?}
     */
    selectFeature() {
        if (this.selectedFeature) {
            this.updator.setOptions({
                featureName: this.selectedFeature.name.charAt(0).toLowerCase() +
                    this.selectedFeature.name.slice(1)
            });
        }
    }
}
FeatureSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-selector',
                template: "<div style=\"height: 50vh;\">\n<!--  <label for=\"models\">Choose a feature: </label>-->\n  <p-dropdown\n    #featureInput=\"ngModel\"\n    [options]=\"models$ | async\"\n    optionLabel=\"name\"\n    [(ngModel)]=\"selectedFeature\"\n    (onChange)=\"selectFeature()\"\n    filter=\"true\"\n    filterPlaceholder=\"Search feature\"\n    placeholder=\"Select a feature\"\n    required=\"true\"\n  >\n  </p-dropdown>\n  <sc-feature-updator #featureUpdator></sc-feature-updator>\n</div>\n",
                styles: [".ui-dialog .apply-button .ui-button{background:#e4e4e4;color:#5cb85c}"]
            }] }
];
/** @nocollapse */
FeatureSelectorComponent.ctorParameters = () => [
    { type: Store }
];
FeatureSelectorComponent.propDecorators = {
    feature: [{ type: ViewChild, args: ['featureInput', { static: false },] }],
    updator: [{ type: ViewChild, args: ['featureUpdator', { static: false },] }]
};
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
class ScreenClonerComponent extends Dialog {
    /**
     * @param {?} screenValidation
     * @param {?} dialogService
     */
    constructor(screenValidation, dialogService) {
        super();
        this.screenValidation = screenValidation;
        this.dialogService = dialogService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.screenToClone = options.screenName;
        this.featureName = options.featureName;
        this.screenName = `${options.screenName}0001`;
    }
    /**
     * @return {?}
     */
    apply() {
    }
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
    cancel() {
        this.dialogService.closeDialog();
    }
    /**
     * @return {?}
     */
    disableApplyButton() {
        return false;
    }
    /**
     * @return {?}
     */
    inValidScreen() {
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
        return of('The screen name is mandatory');
    }
}
ScreenClonerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-cloner',
                template: "<div class=\"cloner\">\n  <div class=\"cloner-content\">\n    Please provide a name to the new screen\n    <input\n      type=\"text\"\n      pInputText\n      [(ngModel)]=\"screenName\"\n      [ngClass]=\"{\n        'invalid-screen-name': inValidScreen() | async\n      }\"\n      [pTooltip]=\"inValidScreen() | async\"\n    />\n  </div>\n</div>\n<div class=\"buttons\">\n  <p-button\n    (onClick)=\"apply()\"\n    class=\"apply-button\"\n    icon=\"fa fa-fw fa-check\"\n    label=\"Apply\"\n    [disabled]=\"inValidScreen() | async\"\n  >\n  </p-button>\n  <p-button\n    (onClick)=\"cancel()\"\n    class=\"cancel-button\"\n    icon=\"fa fa-fw fa-times\"\n    label=\"Cancel\"\n  >\n  </p-button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .cloner{height:100px}:host ::ng-deep .apply-button span{background:#e4e4e4;color:#5cb85c}:host ::ng-deep .cancel-button span{color:#d83431}:host .cloner-content{margin:30px}.buttons{float:right}.invalid-screen-name{background:#db7093;border:0}"]
            }] }
];
/** @nocollapse */
ScreenClonerComponent.ctorParameters = () => [
    { type: ScreenValidationService },
    { type: DialogService }
];
ScreenClonerComponent.propDecorators = {
    setOptions: [{ type: Input }]
};
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
class ExplorerModule {
}
ExplorerModule.decorators = [
    { type: NgModule, args: [{
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
                    EffectsModule.forFeature([])
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetsStoreComponent {
    /*  widgetsLibrairies$: Observable<WidgetsLibraryModel[]>;
      selectedLibrary$: Observable<WidgetsLibraryModel>;
    
      screen$: Observable<string>;
      view$: Observable<string>;
    
      private librairySelectionChanges$: Subject<WidgetsLibraryModel> = new Subject<
        WidgetsLibraryModel
      >();
    */
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
}
WidgetsStoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-widgets-store',
                template: "<!--<ng-container\n  *ngIf=\"widgetsLibrairies$ | async as widgetsLibrairies; else loading\"\n>\n  <sc-store-selector\n    *ngIf=\"widgetsLibrairies && widgetsLibrairies.length > 1\"\n    [stores]=\"widgetsLibrairies\"\n    (selectStore)=\"selectStore($event)\"\n  ></sc-store-selector>\n  <ng-container *ngIf=\"view$ | async as view\">\n    <sc-store-displayer\n      [store]=\"selectedLibrary$ | async\"\n      [screen]=\"screen$ | async\"\n      [mask]=\"view !== 'screen' && view !== 'page'\"\n    >\n    </sc-store-displayer>\n  </ng-container>\n</ng-container>\n<ng-template #loading>\n  <div>loading...</div>\n</ng-template>-->\n<div class=\"available-screens\" >\n  <p-panelMenu [transitionOptions]=\"'0ms'\" [model]=\"items\"   [style]=\"{'width':'300px'}\" [multiple]=\"false\" ></p-panelMenu>\n</div>\n",
                styles: [":host ::ng-deep .components-panel .ui-panel .ui-panel-content{border:0!important}::ng-deep .ui-panelmenu .ui-widget{background-color:#c6c6c6!important;font-family:lato}::ng-deep .ui-panelmenu .ui-panelmenu-header .ui-menuitem-text{color:#000;font-family:lato}::ng-deep .ui-menu-list{font-family:lato}.ui-panelmenu .ui-panelmenu-header.ui-state-active a,::ng-deep .ui-panelmenu .ui-panelmenu-header.ui-state-active{background-color:#d83431!important}"]
            }] }
];
/** @nocollapse */
WidgetsStoreComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    WidgetsStoreComponent.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetComponent {
    constructor() { }
}
WidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-widget',
                template: "<div class=\"component\" pTooltip=\"{{component?.name}}\" tooltipPosition=\"bottom\" showDelay=\"1000\" hideDelay=\"500\">\n  <div class=\"component-image\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n      <path [attr.d]=\"component.icon\"/>\n    </svg>\n  </div>\n  <div class=\"name\">\n    <span>{{component.name}}</span>\n  </div>\n</div>\n",
                styles: [".component{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;cursor:pointer}.component-image{color:#626774;width:22px;height:22px}.component-image svg{fill:#474554}.name{font-size:12px;margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }] }
];
/** @nocollapse */
WidgetComponent.ctorParameters = () => [];
WidgetComponent.propDecorators = {
    component: [{ type: Input }]
};
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
class PreviewComponent {
    constructor() {
        this.device = Device.DESKTOP;
        this.landscapeMode = false;
        this.desktopWidth = '100%';
        this.iframeLoaded$ = new Subject();
        this.unsubscribe = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
PreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-preview',
                template: "<!--<div class=\"preview-screen\">\n  <div class=\"device\" [ngClass]=\"device\" [class.landscape]=\"landscapeMode\">\n    <div class=\"app-frame\">\n      <sc-previewer-loading></sc-previewer-loading>\n      <sc-status-bar *ngIf=\"device != 'desktop'\"></sc-status-bar>\n      <ng-container *ngIf=\"previewerState$ | async as previewerState\">\n        <iframe *ngIf=\"previewerState.initialized\" class=\"viewer\" #iframe cachedSrc=\"{{previewerState.routePath}}\"\n          (load)=\"previewerFrameLoaded($event)\" [style.min-width]=\"getDeskTopWitdth()\"></iframe>\n        <div *ngIf=\"!previewerState.initialized && !previewerState.loading\" class=\"viewer\">\n          <p class=\"viewer-err-msg\">\n            <i class=\"fa fa-exclamation-triangle\"> </i>Previewer is not\n            installed or can not be loaded\n          </p>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>-->\n<router-outlet></router-outlet>\n",
                styles: [".app-frame,.device.desktop,.no-preview,.preview-screen,.preview-screen .viewer,iframe{width:100%;height:100%;position:relative}.preview-screen .device.phone .viewer,.preview-screen .device.tablet .viewer{height:calc(100% - 20px)}.no-preview{background-color:#343a4063;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.devices .icon i{font-size:110px}.devices{display:-webkit-box;display:flex}.device-name{padding:5px 41px}.preview-screen .viewer{border:none}.device.phone .app-frame{height:600px;width:360px;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:.25s ease-out;transition:.25s ease-out;-webkit-transform-origin:center top 0;transform-origin:center top 0;margin-top:75px;margin-left:auto;margin-right:auto}.device.phone.landscape .app-frame{width:620px;height:355px;margin-top:16px}.device.tablet .app-frame{height:995px;width:776px;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:.25s ease-out;transition:.25s ease-out;-webkit-transform-origin:center top 0;transform-origin:center top 0;margin-top:81px;margin-left:auto;margin-right:auto}.device.tablet.landscape .app-frame{height:777px;width:1014px;margin-top:45px}.device.phone{height:770px;width:100%;overflow:hidden;-webkit-transition:.25s ease-out;transition:.25s ease-out;margin-top:30px;margin-bottom:30px;margin-left:0;background-repeat:no-repeat;background-position:50% 0;background-size:387px 765px}.device.phone.landscape{background-size:765px 387px;height:416px;min-width:863px;width:100%}.preview-screen .device.phone .viewer{border:1px solid #050405;border-radius:0 0 2px 2px;border-top:none}.device.tablet{height:1180px;width:100%;min-width:880px;overflow:hidden;-webkit-transition:ease-out;transition:ease-out;margin-top:30px;margin-bottom:30px;margin-left:0;background-repeat:no-repeat;background-position:50% 0;background-size:864px 1174px}.device.tablet.landscape{height:870px;width:1200px;background-size:1174px 864px}.preview-screen .device.tablet .viewer{border:1px solid #000;border-radius:0 0 2px 2px;border-top:none}.viewer .viewer-err-msg{text-align:center}.viewer-err-msg{color:#fb8c00;padding:10px;font-size:18px}.viewer-err-msg i{margin-right:10px}"]
            }] }
];
/** @nocollapse */
PreviewComponent.ctorParameters = () => [];
PreviewComponent.propDecorators = {
    device: [{ type: Input }],
    landscapeMode: [{ type: Input }],
    iframe: [{ type: ViewChild, args: ['iframe', { static: false },] }]
};
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
class CreateTemplateComponent {
    constructor() {
        this.title = "Create Store Component";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CreateTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-create-template',
                template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CreateTemplateComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    CreateTemplateComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DesignSpaceComponent {
    constructor() {
        this.title = "Design Space Component";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DesignSpaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-design-space',
                template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DesignSpaceComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DesignSpaceComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImportTemplateComponent {
    constructor() {
        this.title = "Import Template Component";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ImportTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-import-template',
                template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ImportTemplateComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ImportTemplateComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchTemplateComponent {
    constructor() {
        this.title = "Search Template Component";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SearchTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-search-template',
                template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SearchTemplateComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    SearchTemplateComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimulateTemplateComponent {
    constructor() {
        this.title = "Simulate Template Component";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SimulateTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-simulate-template',
                template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SimulateTemplateComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    SimulateTemplateComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreManagementComponent {
    constructor() {
        this.title = "Store Management Component";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
StoreManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-store-management',
                template: "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
StoreManagementComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    StoreManagementComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PreviewModule {
}
PreviewModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                    SharedModule
                ],
                declarations: [PreviewComponent, CreateTemplateComponent, DesignSpaceComponent, ImportTemplateComponent, SearchTemplateComponent, SimulateTemplateComponent, StoreManagementComponent],
                exports: [PreviewComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreSelectorComponent {
    constructor() {
        this.selectStore = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    select(event) {
        this.selectStore.emit(event.value);
    }
}
StoreSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-store-selector',
                template: "<p-dropdown\n  [options]=\"stores\"\n  optionLabel=\"name\"\n  (onChange)=\"select($event)\"\n></p-dropdown>\n",
                styles: [".store-tabs{display:-webkit-box;display:flex;overflow-y:auto;padding:0;font-size:xx-small}::ng-deep .tab-header button{width:180px;max-width:180px;height:25px;max-height:25px}.store-tabs::-webkit-scrollbar{height:0}.store-tabs::-webkit-scrollbar-thumb{display:none}:host ::ng-deep .ui-dropdown{width:100%!important}"]
            }] }
];
StoreSelectorComponent.propDecorators = {
    stores: [{ type: Input }],
    selectStore: [{ type: Output }]
};
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
class StoreDisplayerComponent {
    /**
     * @param {?} treeDragDropService
     * @param {?} uuidService
     */
    constructor(treeDragDropService, uuidService) {
        this.treeDragDropService = treeDragDropService;
        this.uuidService = uuidService;
        this.categories = [];
        this.components = [];
    }
    /**
     * Init the component treeNode
     * when start dragging
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.store || changes.screen) {
            this.categories = this.filterComponents(this.store && this.store.categories);
            this.components = flatten(this.categories.map((/**
             * @param {?} category
             * @return {?}
             */
            category => category.components)));
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    startDragComponent(component) {
        /** @type {?} */
        let componentDnDNode;
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
                scope => scope.split('.').find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item === this.screen)) !== undefined))
                : ''
        });
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    initDraggableComponentNode(component) {
        /** @type {?} */
        const hasChild = component.container && component.childs && component.childs.length > 0;
        /** @type {?} */
        const data = { type: component.name, properties: {} };
        if (component.container) {
            /** @type {?} */
            const randomName = Date.now().toString();
            data['components'] = [];
            data['componentsBreakpoints'] = { xs: 12, sm: 12, md: 6, lg: 4 };
            data['name'] = `${component.name}-${randomName.substr(8)}`;
        }
        /** @type {?} */
        const draggableNode = {
            label: component.name,
            leaf: component.container ? false : true,
            children: component.container ? [] : undefined,
            data,
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
    }
    /**
     * Build component node that have default content.
     * @param {?} content
     * @param {?} allComponent
     * @return {?}
     */
    buildNodeTree(content, allComponent) {
        return content.map((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            const component = allComponent.find((/**
             * @param {?} cmp
             * @return {?}
             */
            cmp => cmp.name === element.type));
            /** @type {?} */
            let node = this.initDraggableComponentNode(component);
            node = this.addComponentMetaData(component, node);
            node.data = element;
            node.children =
                element.components && element.components.length > 0
                    ? this.buildNodeTree(element.components, allComponent)
                    : [];
            return node;
        }));
    }
    /**
     * @private
     * @param {?} draggableNode
     * @param {?} component
     * @return {?}
     */
    addDefaultChilds(draggableNode, component) {
        /** @type {?} */
        const childComponentName = component['defaultChilds'].child;
        /** @type {?} */
        const childNumber = +component['defaultChilds'].number;
        /** @type {?} */
        const breakPointsRequired = component['defaultChilds'].breakpointsRequired;
        /** @type {?} */
        const childComponent = this.components.find((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => cmp.name === childComponentName));
        childComponent.breakpointsRequired = breakPointsRequired;
        draggableNode['noComponentsBreakpoints'] =
            component['noComponentsBreakpoints'];
        draggableNode['defaultChilds'] = component['defaultChilds'];
        draggableNode['childComponentsBreakpoints'] = breakPointsRequired;
        if (childComponent) {
            for (let index = 0; index < childNumber; index++) {
                /** @type {?} */
                let childNode = this.initDraggableComponentNode(childComponent);
                childNode = this.addComponentMetaData(childComponent, childNode);
                draggableNode.children.push(childNode);
            }
        }
    }
    /**
     * @private
     * @param {?} component
     * @param {?} node
     * @return {?}
     */
    addComponentMetaData(component, node) {
        return Object.assign({}, node, { childs: component.childs, parents: component.parents });
    }
    /**
     * @private
     * @param {?} categories
     * @return {?}
     */
    filterComponents(categories) {
        if (!categories) {
            return [];
        }
        return categories
            .map((/**
         * @param {?} category
         * @return {?}
         */
        category => {
            return Object.assign({}, category, { components: orderBy(category.components.filter((/**
                 * @param {?} component
                 * @return {?}
                 */
                component => {
                    if (this.screen && component.rules) {
                        /** @type {?} */
                        const screenRules = component.rules.filter((/**
                         * @param {?} rule
                         * @return {?}
                         */
                        rule => this.isScreenAllowed(rule, this.screen)));
                        return screenRules.length > 0 ? true : false;
                    }
                    return true;
                })), 'displayOrder') });
        }))
            .filter((/**
         * @param {?} category
         * @return {?}
         */
        category => category.components.length > 0));
    }
    /**
     * @private
     * @param {?} rule
     * @param {?} screen
     * @return {?}
     */
    isScreenAllowed(rule, screen) {
        return ((rule.includedScreens &&
            rule.includedScreens.includes(screen) &&
            !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
            (rule.includedScreens &&
                rule.includedScreens.length === 0 &&
                rule.excludedScreens &&
                rule.excludedScreens.length === 0));
    }
}
StoreDisplayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-store-displayer',
                template: "<div class=\"components-list\">\n  <div *ngIf=\"mask\" class=\"components-mask\"></div>\n  <p-accordion\n    expandIcon=\"fa fa-fw fa-angle-right\"\n    collapseIcon=\"fa fa-fw fa-angle-down\"\n    *ngIf=\"categories && categories.length > 0; else displayError\"\n  >\n    <div *ngFor=\"let category of categories; let i = index\">\n      <p-accordionTab\n        [selected]=\"i === 0\"\n        header=\"{{ category.name | titlecase }}\"\n      >\n        <ul class=\"components\">\n          <li\n            class=\"ui-component\"\n            *ngFor=\"let component of category.components\"\n            pDraggable\n            (onDragStart)=\"startDragComponent(component)\"\n          >\n            <sc-widget [component]=\"component\"></sc-widget>\n          </li>\n        </ul>\n      </p-accordionTab>\n    </div>\n  </p-accordion>\n</div>\n\n<ng-template #displayError>\n  <div *ngIf=\"store.error; else displayMessage\" class=\"message\">\n    {{ store.error }}\n  </div>\n</ng-template>\n<ng-template #displayMessage>\n  <div class=\"message\">No component found to display</div>\n</ng-template>\n",
                styles: [".components-list{margin-top:-1px;height:calc(100% - 24px);position:relative}.components{display:-webkit-box;display:flex;padding-left:0;flex-wrap:wrap;margin:0}.ui-component.selected,.ui-component:hover{background-color:rgba(0,0,0,.1);-webkit-transition:450ms cubic-bezier(.23,1,.32,1);transition:450ms cubic-bezier(.23,1,.32,1)}:host ::ng-deep .ui-component:hover .component-image{-webkit-transform:scale(1.1);transform:scale(1.1)}:host ::ng-deep .ui-component:hover .component-image svg{fill:#00a2ff}:host ::ng-deep .ui-component:hover .name{color:#00a2ff}.components li{list-style:none;max-width:90px;width:86px;height:60px;margin-right:2px;margin-left:0;position:relative;padding:10px}.components-mask{background:rgba(102,102,102,.2);position:absolute;width:314px;height:100%;z-index:9}.mask-message{margin:5px 39px;text-align:center;color:#212121;font-size:18px;background:rgba(102,102,102,.5);border-radius:3px}:host ::ng-deep .ui-accordion .ui-accordion-header a:active,:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:active,:host ::ng-deep .ui-accordion .ui-accordion-header:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:hover{border:0;border-top:0;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-header{background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a{text-decoration:none;padding:.5em!important;background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a .ui-accordion-toggle-icon{color:#1b1d1f}:host ::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a .ui-accordion-toggle-icon{color:#d83531!important}:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:active,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:focus{border:none}:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a{color:#d83531!important;font-weight:700;background-color:inherit!important;border:0!important;outline:0!important}:host ::ng-deep a:active,:host ::ng-deep a:focus{border:0!important;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-content{padding:1em;border-top:0;border:0}.message{text-align:center;align-content:center}"]
            }] }
];
/** @nocollapse */
StoreDisplayerComponent.ctorParameters = () => [
    { type: TreeDragDropService },
    { type: UuidService }
];
StoreDisplayerComponent.propDecorators = {
    store: [{ type: Input }],
    mask: [{ type: Input }],
    screen: [{ type: Input }]
};
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
class WidgetsToScreenSwitcherService {
    constructor() {
        this.switcher = new BehaviorSubject('components');
    }
    /**
     * @return {?}
     */
    stat() {
        return this.switcher.asObservable();
    }
    /**
     * @return {?}
     */
    switchToComponents() {
        this.switcher.next('components');
    }
    /**
     * @return {?}
     */
    switchToScreens() {
        this.switcher.next('screens');
    }
}
WidgetsToScreenSwitcherService.decorators = [
    { type: Injectable }
];
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
class WidgetsToScreenSwitcherComponent {
    /**
     * @param {?} switcher
     */
    constructor(switcher) {
        this.switcher = switcher;
        this.collapse = new EventEmitter();
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.switcher
            .stat()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => (this.switcherState = state)));
    }
    /**
     * @return {?}
     */
    moveToComponents() {
        this.switcher.switchToComponents();
    }
    /**
     * @return {?}
     */
    moveToScreens() {
        this.switcher.switchToScreens();
    }
    /**
     * @return {?}
     */
    collapseComponents() {
        this.collapse.emit();
    }
}
WidgetsToScreenSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-widgets-to-screen-switcher',
                template: "<p-panel\n  class=\"components-panel\"\n  expandIcon=\"fa fa-angle-down\"\n  collapseIcon=\"fa fa-angle-up\"\n  [toggleable]=\"!collapseProperties\"\n  (onBeforeToggle)=\"collapseComponents()\"\n>\n  <p-header>\n    <div class=\"header-switcher\">\n      <p-button\n        label=\"Menu\"\n        (onClick)=\"moveToComponents()\"\n        [ngClass]=\"{ selected: switcherState === 'components' }\"\n      >\n      </p-button>\n      <!-- <p-button label=\"Screens\" (onClick)=\"moveToScreens()\" [ngClass]=\"{selected: switcherState === 'screens'}\">\n      </p-button> -->\n    </div>\n  </p-header>\n  <div>\n    <sc-widgets-store>\n    </sc-widgets-store>\n  </div>\n\n</p-panel>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
WidgetsToScreenSwitcherComponent.ctorParameters = () => [
    { type: WidgetsToScreenSwitcherService }
];
WidgetsToScreenSwitcherComponent.propDecorators = {
    collapseProperties: [{ type: Input }],
    collapse: [{ type: Output }]
};
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
class ScreensStoreComponent {
    /**
     * @param {?} workspaceService
     * @param {?} treeDragDropService
     */
    constructor(workspaceService, treeDragDropService) {
        this.workspaceService = workspaceService;
        this.treeDragDropService = treeDragDropService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.screens$ = this.workspaceService.getAllScreens().pipe(filter(Boolean), map((/**
         * @param {?} screens
         * @return {?}
         */
        (screens) => {
            return screens.map((/**
             * @param {?} screen
             * @return {?}
             */
            screen => {
                return { label: screen.title || screen.name, value: screen };
            }));
        })));
    }
    /**
     * Init the screen treeNode when start dragging
     * @param {?} screen - Screen
     * @param {?} event
     * @return {?}
     */
    startDragScreen(screen, event) {
        /** @type {?} */
        const screenDnDNode = this.initDraggableScreenNode(screen);
        event.dataTransfer.setData('dragNode', JSON.stringify(screenDnDNode));
        this.treeDragDropService.startDrag({
            tree: null,
            node: screenDnDNode,
            subNodes: [screenDnDNode],
            scope: 'menu'
        });
    }
    /**
     * Init the screen node.
     * @private
     * @param {?} screen the screen
     * @return {?}
     */
    initDraggableScreenNode(screen) {
        return undefined;
    }
}
ScreensStoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-screens-store',
                template: "<div class=\"screens-store\" *ngIf=\"(screens$ | async) as screensItems\">\n  <p-listbox *ngIf=\"screensItems.length >0\" [options]=\"screensItems\" filter=\"true\" [(ngModel)]=\"selectedScreen\"\n    [listStyle]=\"{'max-height':'100%'}\">\n    <ng-template let-screen pTemplate=\"item\">\n      <div class=\"screen-item\" pDraggable (onDragStart)=\"startDragScreen(screen.value,$event)\">\n        <i class=\"fa fa-desktop\"></i> <span>{{ screen.label }}</span>\n        <span class=\"feature-name\">({{ screen.value.featureName }} - {{screen.value.name}})</span>\n      </div>\n    </ng-template>\n  </p-listbox>\n  <div class=\"no-element\" *ngIf=\"(screensItems.length === 0)\">\n    <span class=\"no-element-msg\">\n      No screens configured\n    </span>\n  </div>\n</div>",
                styles: [".screens-store{height:100%}:host ::ng-deep .screens-store .ui-listbox.ui-widget{width:100%;height:100%;padding:0;border:none}:host ::ng-deep .screens-store .ui-listbox-header .ui-inputtext{height:25px;border:none;border-bottom:2px solid #8d9293;padding-left:0}:host ::ng-deep .screens-store .ui-listbox-header{padding:2px 8px 0;border:none;background:#fff}::ng-deep screens-store .no-element{margin-top:50%;width:100%}:host ::ng-deep .screens-store .no-element .no-element-msg{margin:-20px auto auto;padding:10px 61px;position:absolute;width:100%;top:50%}:host ::ng-deep .screens-store .ui-listbox-header .ui-listbox-filter-container .fa{left:auto;right:.25em}:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item{margin-bottom:2px;height:auto;background-color:#f9f9f9;border-radius:0;padding:2px 5px}:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item.ui-state-highlight,:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item:not(.ui-state-highlight):hover{background-color:#eee;color:#00a2ff}:host ::ng-deep .feature-name{font-size:8pt}"]
            }] }
];
/** @nocollapse */
ScreensStoreComponent.ctorParameters = () => [
    { type: WorkspaceClientApi },
    { type: TreeDragDropService }
];
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
const appRoutes = [
    { path: 'createTemplate', component: CreateTemplateComponent },
    { path: 'searchTemplate', component: SearchTemplateComponent },
    { path: 'simulateTemplate', component: SimulateTemplateComponent },
    { path: 'designSpace', component: DesignSpaceComponent },
    { path: 'importTemplate', component: ImportTemplateComponent },
    { path: 'store', component: StoreManagementComponent },
    { path: '', component: PreviewComponent }
];
class ComponentsModule {
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [SharedModule, ExplorerModule, CoreModule,
                    PanelMenuModule,
                    RouterModule.forRoot(appRoutes)],
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainModule {
}
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [SharedModule, CoreModule, ComponentsModule],
                declarations: [ScreenEditorComponent],
                exports: [ScreenEditorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENT_LIBRARY = {
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
const TEMPLATE_LIBRARY = {
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
const ROLES = [
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
class SecurityClientApiImpl {
    /**
     * @return {?}
     */
    getRoles() {
        return of(ROLES);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const API_BASE_PATH = '/api';
class WorkspaceClientApiImpl extends WorkspaceClientApi {
    /**
     * @param {?} http
     */
    constructor(http) {
        super();
        this.http = http;
    }
    /**
     * @return {?}
     */
    getCurrentProjectInfo() {
        if (this.shareProjectWithReplay) {
            return this.shareProjectWithReplay;
        }
        else {
            this.shareProjectWithReplay = new ReplaySubject();
            return this.http
                .get(`${API_BASE_PATH}/workspace/project/info`)
                .pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.shareProjectWithReplay.next(data);
            })));
            // shareReplay
        }
    }
    /**
     * @return {?}
     */
    getServices() {
        return this.http.get(`${API_BASE_PATH}/workspace/services`);
    }
    /**
     * @return {?}
     */
    getModels() {
        return this.http.get(`${API_BASE_PATH}/workspace/models`);
    }
    /**
     * @param {?} featureName
     * @return {?}
     */
    getModel(featureName) {
        if (featureName === undefined ||
            featureName === null ||
            featureName === '') {
            throw new Error('Required parameter featureName was empty, null or undefined.');
        }
        return this.http
            .get(`${API_BASE_PATH}/workspace/models/${featureName}`)
            .pipe(shareReplay());
    }
    /**
     * @return {?}
     */
    getAllFeatures() {
        return this.http.get(`${API_BASE_PATH}/workspace/features/all`);
    }
    /**
     * @param {?} featureName
     * @return {?}
     */
    getFeature(featureName) {
        if (featureName === undefined ||
            featureName === null ||
            featureName === '') {
            throw new Error('Required parameter featureName was empty, null or undefined.');
        }
        return this.http.get(`${API_BASE_PATH}/workspace/features/${featureName}`);
    }
    /**
     * @return {?}
     */
    getAllScreens() {
        return this.http.get(`${API_BASE_PATH}/workspace/screens/all`);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getPage(name) {
        return undefined;
    }
    /**
     * @return {?}
     */
    getAllPages() {
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
        return this.http.get(`${API_BASE_PATH}/workspace/pages/all`);
    }
}
WorkspaceClientApiImpl.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WorkspaceClientApiImpl.ctorParameters = () => [
    { type: HttpClient }
];
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
class IDEMessageService extends IdeMessageService {
    /**
     * @param {?} message
     * @return {?}
     */
    pushSuccess(message) {
        console.log('Success : ' + message.detail);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    pushError(message) {
        console.log('Error : ' + message.detail);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    pushInfo(message) {
        console.log('Info : ' + message.detail);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    pushWarning(message) {
        console.log('Warning : ' + message.detail);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IdeActionsServiceImpl extends IdeActionsService {
    /**
     * @return {?}
     */
    doSave() {
        this.save$.next();
    }
    /**
     * @return {?}
     */
    save() {
        return this.save$.asObservable();
    }
}
IdeActionsServiceImpl.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [{ path: '', component: ScreenEditorComponent }];
/** @type {?} */
const modulesApiPaths = { 'screen-editor': '/api/screen-editor/1.5.0-beta.67' };
const ɵ0$3 = modulesApiPaths;
class ScreenEditorModule {
}
ScreenEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes), StoreModule.forRoot({}),
                    EffectsModule.forRoot([])],
                exports: [MainModule],
                providers: [{ provide: 'API_PATHS', useValue: ɵ0$3 },
                    { provide: WorkspaceClientApi$1, useClass: WorkspaceClientApiImpl },
                    { provide: SecurityClientApi, useClass: SecurityClientApiImpl },
                    { provide: IdeMessageService, useClass: IDEMessageService },
                    { provide: IdeActionsService, useClass: IdeActionsServiceImpl }]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ScreenEditorComponent, ScreenEditorModule, UnloadModuleService as ɵa, LayoutService as ɵb, FeatureUpdatorComponent as ɵba, DialogService as ɵbb, ScreenClonerComponent as ɵbc, ScreenValidationService as ɵbd, ExplorerComponent as ɵbe, CreateTemplateComponent as ɵbf, SearchTemplateComponent as ɵbg, SimulateTemplateComponent as ɵbh, DesignSpaceComponent as ɵbi, ImportTemplateComponent as ɵbj, StoreManagementComponent as ɵbk, PreviewComponent as ɵbl, WidgetComponent as ɵbm, WidgetsStoreComponent as ɵbn, StoreSelectorComponent as ɵbo, StoreDisplayerComponent as ɵbp, UuidService as ɵbq, WidgetsToScreenSwitcherComponent as ɵbr, WidgetsToScreenSwitcherService as ɵbs, ScreensStoreComponent as ɵbt, PreviewModule as ɵbu, WorkspaceClientApiImpl as ɵbv, SecurityClientApiImpl as ɵbw, IDEMessageService as ɵbx, IdeActionsServiceImpl as ɵby, SwaggerServicesStore as ɵc, Navigator as ɵd, PreviewStore as ɵe, MainModule as ɵf, SharedModule as ɵg, RemoveSpecialCharacterDirective as ɵh, CachedSrcDirective as ɵi, CoreModule as ɵj, ComponentsModule as ɵk, ExplorerModule as ɵl, ExplorerToolbarModule as ɵm, ExplorerSharedModule as ɵn, ToolbarFinderComponent as ɵo, ToolbarAddBtnComponent as ɵp, ToolbarSaveBtnComponent as ɵq, FeatureExplorerToolbarComponent as ɵr, ExplorerToolbarComponent as ɵs, LayoutService as ɵt, FeatureCreatorComponent as ɵu, Dialog as ɵv, FeatureExplorerComponent as ɵw, FeatureSelectorComponent as ɵx, Dialog as ɵy, ModelsState as ɵz };
//# sourceMappingURL=workspace-lib-ouss.js.map
