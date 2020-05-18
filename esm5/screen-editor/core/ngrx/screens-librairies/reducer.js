/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { LOAD_SCREENS_LIBRAIRIES, LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY } from './actions';
var ScreensLibrairiesState = /** @class */ (function () {
    function ScreensLibrairiesState() {
    }
    return ScreensLibrairiesState;
}());
export { ScreensLibrairiesState };
if (false) {
    /** @type {?} */
    ScreensLibrairiesState.prototype.data;
}
/** @type {?} */
export var initialState = new ScreensLibrairiesState();
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
    var screensLibrairies = _a.screensLibrairies;
    return (tslib_1.__assign({}, state, { data: tslib_1.__spread(screensLibrairies) }));
};
/** @type {?} */
var screensLibrairiesReducer = createReducer(initialState, on(LOAD_SCREENS_LIBRAIRIES, (ɵ0)), on(LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function reducer(state, action) {
    return screensLibrairiesReducer(state, action);
}
/** @type {?} */
export var getScreenssLibrairiesState = createFeatureSelector('SE - Screens Librairies');
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; };
/** @type {?} */
export var getScreensLibrairies = createSelector(getScreenssLibrairiesState, (ɵ2));
var ɵ3 = /**
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
export var getAllScreens = createSelector(getScreensLibrairies, (ɵ3));
var ɵ4 = /**
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
export var getScreensTemplateForGivenScreens = createSelector(getAllScreens, (ɵ4));
var ɵ5 = /**
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
export var getScreenTemplate = createSelector(getAllScreens, (ɵ5));
/** @type {?} */
export var key = 'SE - Screens Librairies';
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L3NjcmVlbnMtbGlicmFpcmllcy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixFQUFFLEVBQ0YscUJBQXFCLEVBQ3JCLGNBQWMsRUFDZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLG9DQUFvQyxFQUNyQyxNQUFNLFdBQVcsQ0FBQztBQUduQjtJQUFBO0lBRUEsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxzQ0FBNEI7OztBQUc5QixNQUFNLEtBQU8sWUFBWSxHQUFHLElBQUksc0JBQXNCLEVBQUU7Ozs7O0FBSTFCLFVBQUEsS0FBSyxJQUFJLE9BQUEsc0JBQU0sS0FBSyxFQUFHLEVBQWQsQ0FBYzs7Ozs7QUFDVixVQUFDLEtBQUssRUFBRSxFQUFxQjtRQUFuQix3Q0FBaUI7SUFBTyxPQUFBLHNCQUN0RSxLQUFLLElBQ1IsSUFBSSxtQkFBTSxpQkFBaUIsS0FDM0I7QUFIeUUsQ0FHekU7O0lBTkUsd0JBQXdCLEdBQUcsYUFBYSxDQUM1QyxZQUFZLEVBQ1osRUFBRSxDQUFDLHVCQUF1QixPQUEwQixFQUNwRCxFQUFFLENBQUMsb0NBQW9DLE9BR3BDLENBQ0o7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBNkIsRUFBRSxNQUFNO0lBQzNELE9BQU8sd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQixHQUFHLHFCQUFxQixDQUM3RCx5QkFBeUIsQ0FDMUI7Ozs7O0FBSUMsVUFBQyxLQUE2QixJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVOztBQUYvQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsY0FBYyxDQUNoRCwwQkFBMEIsT0FFM0I7Ozs7O0FBR0MsVUFBQSxpQkFBaUI7SUFDZixPQUFBLGlCQUFpQjtRQUNqQixpQkFBaUI7YUFDZCxNQUFNOzs7OztRQUFDLFVBQUMsTUFBTSxFQUFFLElBQUk7WUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxDQUFDLEdBQUUsRUFBRSxDQUFDO2FBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUxsQixDQUtrQjs7QUFSdEIsTUFBTSxLQUFPLGFBQWEsR0FBRyxjQUFjLENBQ3pDLG9CQUFvQixPQVFyQjs7Ozs7O0FBR0MsVUFBQyxtQkFBbUIsRUFBRSxFQUFvQjtRQUFsQixzQ0FBZ0I7SUFDdEMsT0FBQSxDQUFDLG1CQUFtQjtRQUNsQixtQkFBbUIsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ2pDLE9BQUEsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFBNUMsQ0FBNEMsRUFDN0MsQ0FBQztRQUNKLEVBQUU7QUFKRixDQUlFOztBQVBOLE1BQU0sS0FBTyxpQ0FBaUMsR0FBRyxjQUFjLENBQzdELGFBQWEsT0FPZDs7Ozs7O0FBR0MsVUFBQyxtQkFBbUIsRUFBRSxFQUFnQjtRQUFkLDhCQUFZO0lBQ2xDLE9BQUEsQ0FBQyxtQkFBbUI7UUFDbEIsbUJBQW1CLENBQUMsSUFBSTs7OztRQUN0QixVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFsQyxDQUFrQyxFQUMvQyxDQUFDO1FBQ0osRUFBRTtBQUpGLENBSUU7O0FBUE4sTUFBTSxLQUFPLGlCQUFpQixHQUFHLGNBQWMsQ0FDN0MsYUFBYSxPQU9kOztBQUNELE1BQU0sS0FBTyxHQUFHLEdBQUcseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlUmVkdWNlcixcbiAgb24sXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3Jcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBMT0FEX1NDUkVFTlNfTElCUkFJUklFUyxcbiAgTE9BRF9TQ1JFRU5TX0xJQlJBSVJJRVNfU1VDQ0VTU0ZVTExZXG59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBTY3JlZW5zTGlicmFyeU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFNjcmVlbnNMaWJyYWlyaWVzU3RhdGUge1xuICBkYXRhOiBTY3JlZW5zTGlicmFyeU1vZGVsW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSBuZXcgU2NyZWVuc0xpYnJhaXJpZXNTdGF0ZSgpO1xuXG5jb25zdCBzY3JlZW5zTGlicmFpcmllc1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKFxuICBpbml0aWFsU3RhdGUsXG4gIG9uKExPQURfU0NSRUVOU19MSUJSQUlSSUVTLCBzdGF0ZSA9PiAoeyAuLi5zdGF0ZSB9KSksXG4gIG9uKExPQURfU0NSRUVOU19MSUJSQUlSSUVTX1NVQ0NFU1NGVUxMWSwgKHN0YXRlLCB7IHNjcmVlbnNMaWJyYWlyaWVzIH0pID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgZGF0YTogWy4uLnNjcmVlbnNMaWJyYWlyaWVzXVxuICB9KSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTY3JlZW5zTGlicmFpcmllc1N0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHNjcmVlbnNMaWJyYWlyaWVzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNjcmVlbnNzTGlicmFpcmllc1N0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yKFxuICAnU0UgLSBTY3JlZW5zIExpYnJhaXJpZXMnXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2NyZWVuc0xpYnJhaXJpZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0U2NyZWVuc3NMaWJyYWlyaWVzU3RhdGUsXG4gIChzdGF0ZTogU2NyZWVuc0xpYnJhaXJpZXNTdGF0ZSkgPT4gc3RhdGUuZGF0YVxuKTtcbmV4cG9ydCBjb25zdCBnZXRBbGxTY3JlZW5zID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFNjcmVlbnNMaWJyYWlyaWVzLFxuICBzY3JlZW5zTGlicmFpcmllcyA9PlxuICAgIHNjcmVlbnNMaWJyYWlyaWVzICYmXG4gICAgc2NyZWVuc0xpYnJhaXJpZXNcbiAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChpdGVtLnRlbXBsYXRlcyk7XG4gICAgICB9LCBbXSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbik7XG5leHBvcnQgY29uc3QgZ2V0U2NyZWVuc1RlbXBsYXRlRm9yR2l2ZW5TY3JlZW5zID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFsbFNjcmVlbnMsXG4gIChhbGxTY3JlZW5zVGVtcGxhdGVzLCB7IHNjcmVlbnNUZW1wbGF0ZXMgfSkgPT5cbiAgICAoYWxsU2NyZWVuc1RlbXBsYXRlcyAmJlxuICAgICAgYWxsU2NyZWVuc1RlbXBsYXRlcy5maWx0ZXIodGVtcGxhdGUgPT5cbiAgICAgICAgc2NyZWVuc1RlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZS50ZW1wbGF0ZSlcbiAgICAgICkpIHx8XG4gICAgW11cbik7XG5leHBvcnQgY29uc3QgZ2V0U2NyZWVuVGVtcGxhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWxsU2NyZWVucyxcbiAgKGFsbFNjcmVlbnNUZW1wbGF0ZXMsIHsgdGVtcGxhdGVOYW1lIH0pID0+XG4gICAgKGFsbFNjcmVlbnNUZW1wbGF0ZXMgJiZcbiAgICAgIGFsbFNjcmVlbnNUZW1wbGF0ZXMuZmluZChcbiAgICAgICAgdGVtcGxhdGUgPT4gdGVtcGxhdGUudGVtcGxhdGUgPT09IHRlbXBsYXRlTmFtZVxuICAgICAgKSkgfHxcbiAgICBbXVxuKTtcbmV4cG9ydCBjb25zdCBrZXkgPSAnU0UgLSBTY3JlZW5zIExpYnJhaXJpZXMnO1xuIl19