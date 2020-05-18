/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ScreensLibrairiesAPIService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: ['API_PATHS',] }] }
    ]; };
    return ScreensLibrairiesAPIService;
}());
export { ScreensLibrairiesAPIService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy1saWJyYWlyaWVzLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb3JlL3NlcnZpY2VzL2FwaS9zY3JlZW5zLWxpYnJhaXJpZXMtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUtsRDtJQUVFLHFDQUNVLElBQWdCLEVBQ0ssR0FBVztRQURoQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ0ssUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUN2QyxDQUFDO0lBRUo7OztPQUdHOzs7Ozs7SUFDSCw2REFBdUI7Ozs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDZixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQkFBZ0IsQ0FDN0MsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFVBQVU7Ozs7Z0JBTEYsVUFBVTs2Q0FTZCxNQUFNLFNBQUMsV0FBVzs7SUFZdkIsa0NBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWZZLDJCQUEyQjs7Ozs7O0lBRXBDLDJDQUF3Qjs7Ozs7SUFDeEIsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTY3JlZW5zTGlicmFyeU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3NjcmVlbnMtbGlicmFyeS9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JlZW5zTGlicmFpcmllc0FQSVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdCgnQVBJX1BBVEhTJykgcHJpdmF0ZSBhcGk6IHN0cmluZ1xuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdGVtcGxhdGUgbGlicmFyeVxuICAgKiByZXR1cm4gYSBtdWx0aSBjYXN0aW5nIFJlcGxheSBzdWJqZWN0XG4gICAqL1xuICBnZXRBbGxTY3JlZW5zTGlicmFpcmllcygpOiBPYnNlcnZhYmxlPEFycmF5PFNjcmVlbnNMaWJyYXJ5TW9kZWw+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QXJyYXk8U2NyZWVuc0xpYnJhcnlNb2RlbD4+KFxuICAgICAgYCR7dGhpcy5hcGlbJ3NjcmVlbi1lZGl0b3InXX0vdGVtcGxhdGVzL2FsbGBcbiAgICApO1xuICB9XG59XG4iXX0=