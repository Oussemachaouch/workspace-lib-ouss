/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { LOAD_WIDEGTS_LIBRAIRIES, LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY } from './actions';
var WidgetsLibrairiesState = /** @class */ (function () {
    function WidgetsLibrairiesState() {
    }
    return WidgetsLibrairiesState;
}());
export { WidgetsLibrairiesState };
if (false) {
    /** @type {?} */
    WidgetsLibrairiesState.prototype.data;
}
/** @type {?} */
export var initialState = new WidgetsLibrairiesState();
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return (tslib_1.__assign({}, state)); }, ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
function (state, _a) {
    var widgetsLibrairies = _a.widgetsLibrairies;
    return (tslib_1.__assign({}, state, { data: tslib_1.__spread(widgetsLibrairies) }));
};
/** @type {?} */
var widgetsLibrairiesReducer = createReducer(initialState, on(LOAD_WIDEGTS_LIBRAIRIES, (ɵ0)), on(LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function reducer(state, action) {
    return widgetsLibrairiesReducer(state, action);
}
/** @type {?} */
export var getWidgetsLibrairiesState = createFeatureSelector('SE - Widgets Librairies');
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; };
/** @type {?} */
export var getWidgetsLibrairies = createSelector(getWidgetsLibrairiesState, (ɵ2));
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
export var getAllWidgets = createSelector(getWidgetsLibrairies, (ɵ3));
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
export var getAvailableWidgetsForGivenScreenType = createSelector(getAllWidgets, (ɵ4));
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
export var getWidgetsToAutoGenerateSection = createSelector(getAvailableWidgetsForGivenScreenType, (ɵ5));
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
export var getAllLayoutsWidgets = createSelector(getAllWidgets, (ɵ6));
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
export var getWidgetByName = createSelector(getAllWidgets, (ɵ7));
/** @type {?} */
export var key = 'SE - Widgets Librairies';
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L3dpZGdldHMtbGlicmFpcmllcy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixFQUFFLEVBQ0YscUJBQXFCLEVBQ3JCLGNBQWMsRUFDZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLG9DQUFvQyxFQUNyQyxNQUFNLFdBQVcsQ0FBQztBQUduQjtJQUFBO0lBRUEsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxzQ0FBNEI7OztBQUc5QixNQUFNLEtBQU8sWUFBWSxHQUFHLElBQUksc0JBQXNCLEVBQUU7Ozs7O0FBSTFCLFVBQUEsS0FBSyxJQUFJLE9BQUEsc0JBQU0sS0FBSyxFQUFHLEVBQWQsQ0FBYzs7Ozs7QUFDVixVQUFDLEtBQUssRUFBRSxFQUFxQjtRQUFuQix3Q0FBaUI7SUFBTyxPQUFBLHNCQUN0RSxLQUFLLElBQ1IsSUFBSSxtQkFBTSxpQkFBaUIsS0FDM0I7QUFIeUUsQ0FHekU7O0lBTkUsd0JBQXdCLEdBQUcsYUFBYSxDQUM1QyxZQUFZLEVBQ1osRUFBRSxDQUFDLHVCQUF1QixPQUEwQixFQUNwRCxFQUFFLENBQUMsb0NBQW9DLE9BR3BDLENBQ0o7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBNkIsRUFBRSxNQUFNO0lBQzNELE9BQU8sd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxLQUFPLHlCQUF5QixHQUFHLHFCQUFxQixDQUM1RCx5QkFBeUIsQ0FDMUI7Ozs7O0FBSUMsVUFBQyxLQUE2QixJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVOztBQUYvQyxNQUFNLEtBQU8s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Rjs7QUFIL0YsTUFBTSxLQUFPLGVBQWUsR0FBRyxjQUFjLENBQzNDLGFBQWEsT0FHZDs7QUFDRCxNQUFNLEtBQU8sR0FBRyxHQUFHLHlCQUF5Qjs7Ozs7OztJQU90QyxlQUFlOzs7OztBQUFHLFVBQUMsSUFBUyxFQUFFLE1BQWM7SUFDaEQsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGVBQWU7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUNyQyxDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlUmVkdWNlcixcbiAgb24sXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3Jcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBMT0FEX1dJREVHVFNfTElCUkFJUklFUyxcbiAgTE9BRF9XSURFR1RTX0xJQlJBSVJJRVNfU1VDQ0VTU0ZVTExZXG59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBXaWRnZXRzTGlicmFyeU1vZGVsLCBVaUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRzTGlicmFpcmllc1N0YXRlIHtcbiAgZGF0YTogV2lkZ2V0c0xpYnJhcnlNb2RlbFtdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gbmV3IFdpZGdldHNMaWJyYWlyaWVzU3RhdGUoKTtcblxuY29uc3Qgd2lkZ2V0c0xpYnJhaXJpZXNSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcbiAgaW5pdGlhbFN0YXRlLFxuICBvbihMT0FEX1dJREVHVFNfTElCUkFJUklFUywgc3RhdGUgPT4gKHsgLi4uc3RhdGUgfSkpLFxuICBvbihMT0FEX1dJREVHVFNfTElCUkFJUklFU19TVUNDRVNTRlVMTFksIChzdGF0ZSwgeyB3aWRnZXRzTGlicmFpcmllcyB9KSA9PiAoe1xuICAgIC4uLnN0YXRlLFxuICAgIGRhdGE6IFsuLi53aWRnZXRzTGlicmFpcmllc11cbiAgfSkpXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogV2lkZ2V0c0xpYnJhaXJpZXNTdGF0ZSwgYWN0aW9uKSB7XG4gIHJldHVybiB3aWRnZXRzTGlicmFpcmllc1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRzTGlicmFpcmllc1N0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yKFxuICAnU0UgLSBXaWRnZXRzIExpYnJhaXJpZXMnXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0c0xpYnJhaXJpZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0V2lkZ2V0c0xpYnJhaXJpZXNTdGF0ZSxcbiAgKHN0YXRlOiBXaWRnZXRzTGlicmFpcmllc1N0YXRlKSA9PiBzdGF0ZS5kYXRhXG4pO1xuZXhwb3J0IGNvbnN0IGdldEFsbFdpZGdldHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0V2lkZ2V0c0xpYnJhaXJpZXMsXG4gIHdpZGdldHNMaWJyYWlyaWVzID0+XG4gICAgd2lkZ2V0c0xpYnJhaXJpZXNcbiAgICAgID8gd2lkZ2V0c0xpYnJhaXJpZXNcbiAgICAgICAgICAucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuY29uY2F0KGl0ZW0uY2F0ZWdvcmllcyk7XG4gICAgICAgICAgfSwgW10pXG4gICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIC5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuY29tcG9uZW50cylcbiAgICAgICAgICAucmVkdWNlKChhbGxDb21wb25lbnRzLCB1aUNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFsbENvbXBvbmVudHMuY29uY2F0KHVpQ29tcG9uZW50KTtcbiAgICAgICAgICB9LCBbXSlcbiAgICAgIDogW11cbik7XG5leHBvcnQgY29uc3QgZ2V0QXZhaWxhYmxlV2lkZ2V0c0ZvckdpdmVuU2NyZWVuVHlwZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBbGxXaWRnZXRzLFxuICAod2lkZ2V0cywgcHJvcHMpID0+XG4gICAgd2lkZ2V0cy5maWx0ZXIoY29tcG9uZW50ID0+IHtcbiAgICAgIGlmIChwcm9wcy5zY3JlZW5UeXBlICYmIGNvbXBvbmVudC5ydWxlcykge1xuICAgICAgICBjb25zdCBzY3JlZW5SdWxlcyA9IGNvbXBvbmVudC5ydWxlcy5maWx0ZXIocnVsZSA9PlxuICAgICAgICAgIGlzU2NyZWVuQWxsb3dlZChydWxlLCBwcm9wcy5zY3JlZW5UeXBlKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc2NyZWVuUnVsZXMubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0c1RvQXV0b0dlbmVyYXRlU2VjdGlvbiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBdmFpbGFibGVXaWRnZXRzRm9yR2l2ZW5TY3JlZW5UeXBlLFxuICAod2lkZ2V0czogVWlDb21wb25lbnRbXSwgeyBzY3JlZW5UeXBlLCBzZWN0aW9uIH0pID0+XG4gICAgd2lkZ2V0cyAmJlxuICAgIHdpZGdldHMuZmlsdGVyKFxuICAgICAgd2lkZ2V0ID0+XG4gICAgICAgIHdpZGdldC5kZWZhdWx0U2NyZWVuICYmXG4gICAgICAgIHdpZGdldC5kZWZhdWx0U2NyZWVuLmRlZmF1bHRUeXBlc1tzY3JlZW5UeXBlXSAmJlxuICAgICAgICB3aWRnZXQuc2NvcGUgJiZcbiAgICAgICAgd2lkZ2V0LnNjb3BlLmZpbHRlcihcbiAgICAgICAgICBzY29wZSA9PiBzY29wZS5zcGxpdCgnLicpLmZpbmQoaXRlbSA9PiBpdGVtID09PSBzZWN0aW9uKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICkubGVuZ3RoID4gMFxuICAgIClcbik7XG5leHBvcnQgY29uc3QgZ2V0QWxsTGF5b3V0c1dpZGdldHMgPSBjcmVhdGVTZWxlY3RvcihnZXRBbGxXaWRnZXRzLCB3aWRnZXRzID0+XG4gIHdpZGdldHMuZmlsdGVyKHdpZGdldCA9PiB3aWRnZXQubGF5b3V0cylcbik7XG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0QnlOYW1lID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFsbFdpZGdldHMsXG4gICh3aWRnZXRzLCB7IG5hbWUgfSkgPT5cbiAgICAod2lkZ2V0cyAmJiB3aWRnZXRzLmZpbmQod2lkZ2V0ID0+IHdpZGdldC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkpIHx8ICcnXG4pO1xuZXhwb3J0IGNvbnN0IGtleSA9ICdTRSAtIFdpZGdldHMgTGlicmFpcmllcyc7XG5cbi8qKlxuICogVmVyaWZ5IHdldGhlciB0aGUgY29tcG9uZW50IGlzIGFsbG93ZWQgaW5zaWRlIHRoZSBzY3JlZW4gb3Igbm90XG4gKiBAcGFyYW0gcnVsZSB0aGUgcnVsZVxuICogQHBhcmFtIHNjcmVlbiB0aGUgY3VycmVudCBzY3JlZW4gdGVtcGxhdGVcbiAqL1xuY29uc3QgaXNTY3JlZW5BbGxvd2VkID0gKHJ1bGU6IGFueSwgc2NyZWVuOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIChcbiAgICAocnVsZS5pbmNsdWRlZFNjcmVlbnMgJiZcbiAgICAgIHJ1bGUuaW5jbHVkZWRTY3JlZW5zLmluY2x1ZGVzKHNjcmVlbikgJiZcbiAgICAgICEocnVsZS5leGNsdWRlZFNjcmVlbnMgJiYgcnVsZS5leGNsdWRlZFNjcmVlbnMuaW5jbHVkZXMoc2NyZWVuKSkpIHx8XG4gICAgKHJ1bGUuaW5jbHVkZWRTY3JlZW5zICYmXG4gICAgICBydWxlLmluY2x1ZGVkU2NyZWVucy5sZW5ndGggPT09IDAgJiZcbiAgICAgIHJ1bGUuZXhjbHVkZWRTY3JlZW5zICYmXG4gICAgICBydWxlLmV4Y2x1ZGVkU2NyZWVucy5sZW5ndGggPT09IDApXG4gICk7XG59O1xuIl19