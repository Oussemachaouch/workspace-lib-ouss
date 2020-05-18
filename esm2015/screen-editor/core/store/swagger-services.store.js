/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class SwaggerServicesStore {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1zZXJ2aWNlcy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zdG9yZS9zd2FnZ2VyLXNlcnZpY2VzLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQXdCLE1BQU0sTUFBTSxDQUFDO0FBSzdELE1BQU0sT0FBTyxvQkFBb0I7SUFEakM7UUFFVSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBWSxTQUFTLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztJQTBCMUMsQ0FBQzs7Ozs7SUF6QkMsSUFBSSxDQUFDLFFBQW1CO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLFdBQW9CLEVBQUUsSUFBYTtRQUN4QyxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLE1BQU07UUFDTixtRkFBbUY7UUFDbkYsSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQVEsSUFBRyxDQUFDOzs7O0lBQ2xCLFFBQVE7UUFDTixPQUFPO0lBQ1QsQ0FBQzs7O1lBNUJGLFVBQVU7Ozs7Ozs7SUFFVCxrREFBdUU7Ozs7O0lBQ3ZFLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2ZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3dhZ2dlclNlcnZpY2VzU3RvcmUgaW1wbGVtZW50cyBPYnNlcnZlcjxTZXJ2aWNlW10+IHtcbiAgcHJpdmF0ZSBzaGFyZVdpdGhCZWhhdmlvciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNlcnZpY2VbXT4odW5kZWZpbmVkKTtcbiAgcHJpdmF0ZSBzZXJ2aWNlcyA9IG5ldyBBcnJheTxTZXJ2aWNlPigpO1xuICBuZXh0KHNlcnZpY2VzOiBTZXJ2aWNlW10pIHtcbiAgICB0aGlzLnNoYXJlV2l0aEJlaGF2aW9yJC5uZXh0KHNlcnZpY2VzKTtcbiAgICB0aGlzLnNlcnZpY2VzID0gWy4uLnNlcnZpY2VzXTtcbiAgfVxuXG4gIHNlbGVjdCgpO1xuICBzZWxlY3QoZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8U2VydmljZVtdPjtcbiAgc2VsZWN0KGZlYXR1cmVOYW1lOiBzdHJpbmcsIHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8U2VydmljZT47XG4gIHNlbGVjdChmZWF0dXJlTmFtZT86IHN0cmluZywgcGF0aD86IHN0cmluZyk6IE9ic2VydmFibGU8U2VydmljZVtdIHwgU2VydmljZT4ge1xuICAgIC8vIGlmIChmZWF0dXJlTmFtZSkge1xuICAgIC8vICAgaWYgKHBhdGgpIHtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuX3NoYXJlV2l0aEJlaGF2aW9yLmFzT2JzZXJ2YWJsZSgpLnBpcGUobWFwKHNlcnZpY2VzPT4gc2VydmljZXMuZmlsdGVyKCkpKVxuICAgIC8vIH1cbiAgICByZXR1cm4gdGhpcy5zaGFyZVdpdGhCZWhhdmlvciQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZWxlY3RDb2xkKCk6IEFycmF5PFNlcnZpY2U+IHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlcztcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7fVxuICBjb21wbGV0ZSgpIHtcbiAgICAvLyBOb29wXG4gIH1cbn1cbiJdfQ==