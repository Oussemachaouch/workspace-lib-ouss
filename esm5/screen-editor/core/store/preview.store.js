/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
var PreviewStore = /** @class */ (function () {
    function PreviewStore() {
        this.shareWithBehavior$ = new BehaviorSubject(undefined);
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
        { type: Injectable }
    ];
    return PreviewStore;
}());
export { PreviewStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PreviewStore.prototype.shareWithBehavior$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zdG9yZS9wcmV2aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUF3QixNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXREO0lBQUE7UUFFVSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQztJQWlCcEUsQ0FBQzs7Ozs7SUFmQywyQkFBSTs7OztJQUFKLFVBQUssSUFBVTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEdBQVEsSUFBRyxDQUFDOzs7O0lBQ2xCLCtCQUFROzs7SUFBUjtRQUNFLE9BQU87SUFDVCxDQUFDOzs7O0lBQ0Qsa0NBQVc7OztJQUFYO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQWxCRixVQUFVOztJQW1CWCxtQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbEJZLFlBQVk7Ozs7OztJQUN2QiwwQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2ZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9uRGVzdHJveSwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJldmlld1N0b3JlIGltcGxlbWVudHMgT2JzZXJ2ZXI8Vmlldz4sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc2hhcmVXaXRoQmVoYXZpb3IkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWaWV3Pih1bmRlZmluZWQpO1xuXG4gIG5leHQodmlldzogVmlldykge1xuICAgIHRoaXMuc2hhcmVXaXRoQmVoYXZpb3IkLm5leHQodmlldyk7XG4gIH1cblxuICBzZWxlY3QoKTogT2JzZXJ2YWJsZTxWaWV3PiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVXaXRoQmVoYXZpb3IkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHt9XG4gIGNvbXBsZXRlKCkge1xuICAgIC8vIE5vb3BcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cbn1cbiJdfQ==