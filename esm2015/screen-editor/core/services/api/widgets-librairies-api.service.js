/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class WidgetsLibrairiesAPIService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy1saWJyYWlyaWVzLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb3JlL3NlcnZpY2VzL2FwaS93aWRnZXRzLWxpYnJhaXJpZXMtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU1sRCxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUN0QyxZQUNVLElBQWdCLEVBQ0ssR0FBVztRQURoQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ0ssUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUN2QyxDQUFDOzs7Ozs7SUFNSixzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FDOUMsQ0FBQztJQUNKLENBQUM7OztZQWZGLFVBQVU7Ozs7WUFMRixVQUFVO3lDQVNkLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBRG5CLDJDQUF3Qjs7Ozs7SUFDeEIsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBXaWRnZXRzTGlicmFyeU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3dpZGdldHMtbGlicmFyeS9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRzTGlicmFpcmllc0FQSVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdCgnQVBJX1BBVEhTJykgcHJpdmF0ZSBhcGk6IHN0cmluZ1xuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29tcG9uZW50IGxpYnJhcnlcbiAgICogcmV0dXJuIGEgbXVsdGkgY2FzdGluZyBSZXBsYXkgc3ViamVjdFxuICAgKi9cbiAgZ2V0QWxsV2lkZ2V0c0xpYnJhcmllcygpOiBPYnNlcnZhYmxlPEFycmF5PFdpZGdldHNMaWJyYXJ5TW9kZWw+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QXJyYXk8V2lkZ2V0c0xpYnJhcnlNb2RlbD4+KFxuICAgICAgYCR7dGhpcy5hcGlbJ3NjcmVlbi1lZGl0b3InXX0vY29tcG9uZW50cy9hbGxgXG4gICAgKTtcbiAgfVxufVxuIl19