/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { LOAD_WIDEGTS_LIBRAIRIES, LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY } from './actions';
export class WidgetsLibrairiesState {
}
if (false) {
    /** @type {?} */
    WidgetsLibrairiesState.prototype.data;
}
/** @type {?} */
export const initialState = new WidgetsLibrairiesState();
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
export function reducer(state, action) {
    return widgetsLibrairiesReducer(state, action);
}
/** @type {?} */
export const getWidgetsLibrairiesState = createFeatureSelector('SE - Widgets Librairies');
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.data;
/** @type {?} */
export const getWidgetsLibrairies = createSelector(getWidgetsLibrairiesState, (ɵ2));
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
export const getAllWidgets = createSelector(getWidgetsLibrairies, (ɵ3));
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
export const getAvailableWidgetsForGivenScreenType = createSelector(getAllWidgets, (ɵ4));
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
export const getWidgetsToAutoGenerateSection = createSelector(getAvailableWidgetsForGivenScreenType, (ɵ5));
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
export const getAllLayoutsWidgets = createSelector(getAllWidgets, (ɵ6));
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
export const getWidgetByName = createSelector(getAllWidgets, (ɵ7));
/** @type {?} */
export const key = 'SE - Widgets Librairies';
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L3dpZGdldHMtbGlicmFpcmllcy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLEVBQUUsRUFDRixxQkFBcUIsRUFDckIsY0FBYyxFQUNmLE1BQU0sYUFBYSxDQUFDO0FBRXJCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsb0NBQW9DLEVBQ3JDLE1BQU0sV0FBVyxDQUFDO0FBR25CLE1BQU0sT0FBTyxzQkFBc0I7Q0FFbEM7OztJQURDLHNDQUE0Qjs7O0FBRzlCLE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxzQkFBc0IsRUFBRTs7Ozs7QUFJMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLEVBQUc7Ozs7O0FBQ1YsQ0FBQyxLQUFLLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxtQkFDdEUsS0FBSyxJQUNSLElBQUksRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsSUFDNUI7O01BTkUsd0JBQXdCLEdBQUcsYUFBYSxDQUM1QyxZQUFZLEVBQ1osRUFBRSxDQUFDLHVCQUF1QixPQUEwQixFQUNwRCxFQUFFLENBQUMsb0NBQW9DLE9BR3BDLENBQ0o7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBNkIsRUFBRSxNQUFNO0lBQzNELE9BQU8sd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHFCQUFxQixDQUM1RCx5QkFBeUIsQ0FDMUI7Ozs7O0FBSUMsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSTs7QUFGL0MsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGNBQWMsQ0FDaEQseUJBQXlCLE9BRTFC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RTtJQUM3RCxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZUFBZTtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3JDLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVSZWR1Y2VyLFxuICBvbixcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvclxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7XG4gIExPQURfV0lERUdUU19MSUJSQUlSSUVTLFxuICBMT0FEX1dJREVHVFNfTElCUkFJUklFU19TVUNDRVNTRlVMTFlcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IFdpZGdldHNMaWJyYXJ5TW9kZWwsIFVpQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFdpZGdldHNMaWJyYWlyaWVzU3RhdGUge1xuICBkYXRhOiBXaWRnZXRzTGlicmFyeU1vZGVsW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSBuZXcgV2lkZ2V0c0xpYnJhaXJpZXNTdGF0ZSgpO1xuXG5jb25zdCB3aWRnZXRzTGlicmFpcmllc1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKFxuICBpbml0aWFsU3RhdGUsXG4gIG9uKExPQURfV0lERUdUU19MSUJSQUlSSUVTLCBzdGF0ZSA9PiAoeyAuLi5zdGF0ZSB9KSksXG4gIG9uKExPQURfV0lERUdUU19MSUJSQUlSSUVTX1NVQ0NFU1NGVUxMWSwgKHN0YXRlLCB7IHdpZGdldHNMaWJyYWlyaWVzIH0pID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgZGF0YTogWy4uLndpZGdldHNMaWJyYWlyaWVzXVxuICB9KSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBXaWRnZXRzTGlicmFpcmllc1N0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHdpZGdldHNMaWJyYWlyaWVzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpZGdldHNMaWJyYWlyaWVzU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3IoXG4gICdTRSAtIFdpZGdldHMgTGlicmFpcmllcydcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRzTGlicmFpcmllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRXaWRnZXRzTGlicmFpcmllc1N0YXRlLFxuICAoc3RhdGU6IFdpZGdldHNMaWJyYWlyaWVzU3RhdGUpID0+IHN0YXRlLmRhdGFcbik7XG5leHBvcnQgY29uc3QgZ2V0QWxsV2lkZ2V0cyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRXaWRnZXRzTGlicmFpcmllcyxcbiAgd2lkZ2V0c0xpYnJhaXJpZXMgPT5cbiAgICB3aWRnZXRzTGlicmFpcmllc1xuICAgICAgPyB3aWRnZXRzTGlicmFpcmllc1xuICAgICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQoaXRlbS5jYXRlZ29yaWVzKTtcbiAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS5jb21wb25lbnRzKVxuICAgICAgICAgIC5yZWR1Y2UoKGFsbENvbXBvbmVudHMsIHVpQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWxsQ29tcG9uZW50cy5jb25jYXQodWlDb21wb25lbnQpO1xuICAgICAgICAgIH0sIFtdKVxuICAgICAgOiBbXVxuKTtcbmV4cG9ydCBjb25zdCBnZXRBdmFpbGFibGVXaWRnZXRzRm9yR2l2ZW5TY3JlZW5UeXBlID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFsbFdpZGdldHMsXG4gICh3aWRnZXRzLCBwcm9wcykgPT5cbiAgICB3aWRnZXRzLmZpbHRlcihjb21wb25lbnQgPT4ge1xuICAgICAgaWYgKHByb3BzLnNjcmVlblR5cGUgJiYgY29tcG9uZW50LnJ1bGVzKSB7XG4gICAgICAgIGNvbnN0IHNjcmVlblJ1bGVzID0gY29tcG9uZW50LnJ1bGVzLmZpbHRlcihydWxlID0+XG4gICAgICAgICAgaXNTY3JlZW5BbGxvd2VkKHJ1bGUsIHByb3BzLnNjcmVlblR5cGUpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBzY3JlZW5SdWxlcy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRzVG9BdXRvR2VuZXJhdGVTZWN0aW9uID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEF2YWlsYWJsZVdpZGdldHNGb3JHaXZlblNjcmVlblR5cGUsXG4gICh3aWRnZXRzOiBVaUNvbXBvbmVudFtdLCB7IHNjcmVlblR5cGUsIHNlY3Rpb24gfSkgPT5cbiAgICB3aWRnZXRzICYmXG4gICAgd2lkZ2V0cy5maWx0ZXIoXG4gICAgICB3aWRnZXQgPT5cbiAgICAgICAgd2lkZ2V0LmRlZmF1bHRTY3JlZW4gJiZcbiAgICAgICAgd2lkZ2V0LmRlZmF1bHRTY3JlZW4uZGVmYXVsdFR5cGVzW3NjcmVlblR5cGVdICYmXG4gICAgICAgIHdpZGdldC5zY29wZSAmJlxuICAgICAgICB3aWRnZXQuc2NvcGUuZmlsdGVyKFxuICAgICAgICAgIHNjb3BlID0+IHNjb3BlLnNwbGl0KCcuJykuZmluZChpdGVtID0+IGl0ZW0gPT09IHNlY3Rpb24pICE9PSB1bmRlZmluZWRcbiAgICAgICAgKS5sZW5ndGggPiAwXG4gICAgKVxuKTtcbmV4cG9ydCBjb25zdCBnZXRBbGxMYXlvdXRzV2lkZ2V0cyA9IGNyZWF0ZVNlbGVjdG9yKGdldEFsbFdpZGdldHMsIHdpZGdldHMgPT5cbiAgd2lkZ2V0cy5maWx0ZXIod2lkZ2V0ID0+IHdpZGdldC5sYXlvdXRzKVxuKTtcbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRCeU5hbWUgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWxsV2lkZ2V0cyxcbiAgKHdpZGdldHMsIHsgbmFtZSB9KSA9PlxuICAgICh3aWRnZXRzICYmIHdpZGdldHMuZmluZCh3aWRnZXQgPT4gd2lkZ2V0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSkgfHwgJydcbik7XG5leHBvcnQgY29uc3Qga2V5ID0gJ1NFIC0gV2lkZ2V0cyBMaWJyYWlyaWVzJztcblxuLyoqXG4gKiBWZXJpZnkgd2V0aGVyIHRoZSBjb21wb25lbnQgaXMgYWxsb3dlZCBpbnNpZGUgdGhlIHNjcmVlbiBvciBub3RcbiAqIEBwYXJhbSBydWxlIHRoZSBydWxlXG4gKiBAcGFyYW0gc2NyZWVuIHRoZSBjdXJyZW50IHNjcmVlbiB0ZW1wbGF0ZVxuICovXG5jb25zdCBpc1NjcmVlbkFsbG93ZWQgPSAocnVsZTogYW55LCBzY3JlZW46IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gKFxuICAgIChydWxlLmluY2x1ZGVkU2NyZWVucyAmJlxuICAgICAgcnVsZS5pbmNsdWRlZFNjcmVlbnMuaW5jbHVkZXMoc2NyZWVuKSAmJlxuICAgICAgIShydWxlLmV4Y2x1ZGVkU2NyZWVucyAmJiBydWxlLmV4Y2x1ZGVkU2NyZWVucy5pbmNsdWRlcyhzY3JlZW4pKSkgfHxcbiAgICAocnVsZS5pbmNsdWRlZFNjcmVlbnMgJiZcbiAgICAgIHJ1bGUuaW5jbHVkZWRTY3JlZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgcnVsZS5leGNsdWRlZFNjcmVlbnMgJiZcbiAgICAgIHJ1bGUuZXhjbHVkZWRTY3JlZW5zLmxlbmd0aCA9PT0gMClcbiAgKTtcbn07XG4iXX0=