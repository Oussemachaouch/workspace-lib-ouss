/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * Singleton Loader Service used to change the state of the loader Subject
 */
var PreviewerLoadingService = /** @class */ (function () {
    function PreviewerLoadingService() {
        this.loaderSubject = new BehaviorSubject(false);
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
        { type: Injectable }
    ];
    /** @nocollapse */
    PreviewerLoadingService.ctorParameters = function () { return []; };
    return PreviewerLoadingService;
}());
export { PreviewerLoadingService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PreviewerLoadingService.prototype.loaderSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlld2VyLWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9sb2FkaW5nL3NlcnZpY2VzL3ByZXZpZXdlci1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUluRDtJQUlFO1FBRlEsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUU3QyxDQUFDOzs7O0lBRWhCLHNDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxzQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsZ0RBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7O2dCQWhCRixVQUFVOzs7O0lBaUJYLDhCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksdUJBQXVCOzs7Ozs7SUFDbEMsZ0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIFNpbmdsZXRvbiBMb2FkZXIgU2VydmljZSB1c2VkIHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGxvYWRlciBTdWJqZWN0XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmV2aWV3ZXJMb2FkaW5nU2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGVyU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzaG93KCkge1xuICAgIHRoaXMubG9hZGVyU3ViamVjdC5uZXh0KHRydWUpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmxvYWRlclN1YmplY3QubmV4dChmYWxzZSk7XG4gIH1cblxuICBnZXRMb2FkZXJTdGF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=