/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { LOAD_SCREENS_LIBRAIRIES, LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY } from './actions';
export class ScreensLibrairiesState {
}
if (false) {
    /** @type {?} */
    ScreensLibrairiesState.prototype.data;
}
/** @type {?} */
export const initialState = new ScreensLibrairiesState();
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => (Object.assign({}, state)), ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { screensLibrairies }) => (Object.assign({}, state, { data: [...screensLibrairies] }));
/** @type {?} */
const screensLibrairiesReducer = createReducer(initialState, on(LOAD_SCREENS_LIBRAIRIES, (ɵ0)), on(LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function reducer(state, action) {
    return screensLibrairiesReducer(state, action);
}
/** @type {?} */
export const getScreenssLibrairiesState = createFeatureSelector('SE - Screens Librairies');
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.data;
/** @type {?} */
export const getScreensLibrairies = createSelector(getScreenssLibrairiesState, (ɵ2));
const ɵ3 = /**
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
export const getAllScreens = createSelector(getScreensLibrairies, (ɵ3));
const ɵ4 = /**
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
export const getScreensTemplateForGivenScreens = createSelector(getAllScreens, (ɵ4));
const ɵ5 = /**
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
export const getScreenTemplate = createSelector(getAllScreens, (ɵ5));
/** @type {?} */
export const key = 'SE - Screens Librairies';
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L3NjcmVlbnMtbGlicmFpcmllcy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLEVBQUUsRUFDRixxQkFBcUIsRUFDckIsY0FBYyxFQUNmLE1BQU0sYUFBYSxDQUFDO0FBRXJCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsb0NBQW9DLEVBQ3JDLE1BQU0sV0FBVyxDQUFDO0FBR25CLE1BQU0sT0FBTyxzQkFBc0I7Q0FFbEM7OztJQURDLHNDQUE0Qjs7O0FBRzlCLE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxzQkFBc0IsRUFBRTs7Ozs7QUFJMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLEVBQUc7Ozs7O0FBQ1YsQ0FBQyxLQUFLLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxtQkFDdEUsS0FBSyxJQUNSLElBQUksRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsSUFDNUI7O01BTkUsd0JBQXdCLEdBQUcsYUFBYSxDQUM1QyxZQUFZLEVBQ1osRUFBRSxDQUFDLHVCQUF1QixPQUEwQixFQUNwRCxFQUFFLENBQUMsb0NBQW9DLE9BR3BDLENBQ0o7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBNkIsRUFBRSxNQUFNO0lBQzNELE9BQU8sd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxPQUFPLDBCQUEwQixHQUFHLHFCQUFxQixDQUM3RCx5QkFBeUIsQ0FDMUI7Ozs7O0FBSUMsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSTs7QUFGL0MsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGNBQWMsQ0FDaEQsMEJBQTBCLE9BRTNCOzs7OztBQUdDLGlCQUFpQixDQUFDLEVBQUUsQ0FDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtTQUNkLE1BQU07Ozs7O0lBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDdkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDLEdBQUUsRUFBRSxDQUFDO1NBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7QUFSdEIsTUFBTSxPQUFPLGFBQWEsR0FBRyxjQUFjLENBQ3pDLG9CQUFvQixPQVFyQjs7Ozs7O0FBR0MsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxDQUM1QyxDQUFDLG1CQUFtQjtJQUNsQixtQkFBbUIsQ0FBQyxNQUFNOzs7O0lBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDcEMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDN0MsQ0FBQztJQUNKLEVBQUU7O0FBUE4sTUFBTSxPQUFPLGlDQUFpQyxHQUFHLGNBQWMsQ0FDN0QsYUFBYSxPQU9kOzs7Ozs7QUFHQyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUN4QyxDQUFDLG1CQUFtQjtJQUNsQixtQkFBbUIsQ0FBQyxJQUFJOzs7O0lBQ3RCLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQy9DLENBQUM7SUFDSixFQUFFOztBQVBOLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxjQUFjLENBQzdDLGFBQWEsT0FPZDs7QUFDRCxNQUFNLE9BQU8sR0FBRyxHQUFHLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZVJlZHVjZXIsXG4gIG9uLFxuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgTE9BRF9TQ1JFRU5TX0xJQlJBSVJJRVMsXG4gIExPQURfU0NSRUVOU19MSUJSQUlSSUVTX1NVQ0NFU1NGVUxMWVxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgU2NyZWVuc0xpYnJhcnlNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5zTGlicmFpcmllc1N0YXRlIHtcbiAgZGF0YTogU2NyZWVuc0xpYnJhcnlNb2RlbFtdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gbmV3IFNjcmVlbnNMaWJyYWlyaWVzU3RhdGUoKTtcblxuY29uc3Qgc2NyZWVuc0xpYnJhaXJpZXNSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcbiAgaW5pdGlhbFN0YXRlLFxuICBvbihMT0FEX1NDUkVFTlNfTElCUkFJUklFUywgc3RhdGUgPT4gKHsgLi4uc3RhdGUgfSkpLFxuICBvbihMT0FEX1NDUkVFTlNfTElCUkFJUklFU19TVUNDRVNTRlVMTFksIChzdGF0ZSwgeyBzY3JlZW5zTGlicmFpcmllcyB9KSA9PiAoe1xuICAgIC4uLnN0YXRlLFxuICAgIGRhdGE6IFsuLi5zY3JlZW5zTGlicmFpcmllc11cbiAgfSkpXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogU2NyZWVuc0xpYnJhaXJpZXNTdGF0ZSwgYWN0aW9uKSB7XG4gIHJldHVybiBzY3JlZW5zTGlicmFpcmllc1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JlZW5zc0xpYnJhaXJpZXNTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcihcbiAgJ1NFIC0gU2NyZWVucyBMaWJyYWlyaWVzJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNjcmVlbnNMaWJyYWlyaWVzID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFNjcmVlbnNzTGlicmFpcmllc1N0YXRlLFxuICAoc3RhdGU6IFNjcmVlbnNMaWJyYWlyaWVzU3RhdGUpID0+IHN0YXRlLmRhdGFcbik7XG5leHBvcnQgY29uc3QgZ2V0QWxsU2NyZWVucyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRTY3JlZW5zTGlicmFpcmllcyxcbiAgc2NyZWVuc0xpYnJhaXJpZXMgPT5cbiAgICBzY3JlZW5zTGlicmFpcmllcyAmJlxuICAgIHNjcmVlbnNMaWJyYWlyaWVzXG4gICAgICAucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQoaXRlbS50ZW1wbGF0ZXMpO1xuICAgICAgfSwgW10pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4pO1xuZXhwb3J0IGNvbnN0IGdldFNjcmVlbnNUZW1wbGF0ZUZvckdpdmVuU2NyZWVucyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBbGxTY3JlZW5zLFxuICAoYWxsU2NyZWVuc1RlbXBsYXRlcywgeyBzY3JlZW5zVGVtcGxhdGVzIH0pID0+XG4gICAgKGFsbFNjcmVlbnNUZW1wbGF0ZXMgJiZcbiAgICAgIGFsbFNjcmVlbnNUZW1wbGF0ZXMuZmlsdGVyKHRlbXBsYXRlID0+XG4gICAgICAgIHNjcmVlbnNUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGUudGVtcGxhdGUpXG4gICAgICApKSB8fFxuICAgIFtdXG4pO1xuZXhwb3J0IGNvbnN0IGdldFNjcmVlblRlbXBsYXRlID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFsbFNjcmVlbnMsXG4gIChhbGxTY3JlZW5zVGVtcGxhdGVzLCB7IHRlbXBsYXRlTmFtZSB9KSA9PlxuICAgIChhbGxTY3JlZW5zVGVtcGxhdGVzICYmXG4gICAgICBhbGxTY3JlZW5zVGVtcGxhdGVzLmZpbmQoXG4gICAgICAgIHRlbXBsYXRlID0+IHRlbXBsYXRlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZU5hbWVcbiAgICAgICkpIHx8XG4gICAgW11cbik7XG5leHBvcnQgY29uc3Qga2V5ID0gJ1NFIC0gU2NyZWVucyBMaWJyYWlyaWVzJztcbiJdfQ==