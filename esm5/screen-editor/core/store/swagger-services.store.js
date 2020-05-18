/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var SwaggerServicesStore = /** @class */ (function () {
    function SwaggerServicesStore() {
        this.shareWithBehavior$ = new BehaviorSubject(undefined);
        this.services = new Array();
    }
    /**
     * @param {?} services
     * @return {?}
     */
    SwaggerServicesStore.prototype.next = /**
     * @param {?} services
     * @return {?}
     */
    function (services) {
        this.shareWithBehavior$.next(services);
        this.services = tslib_1.__spread(services);
    };
    /**
     * @param {?=} featureName
     * @param {?=} path
     * @return {?}
     */
    SwaggerServicesStore.prototype.select = /**
     * @param {?=} featureName
     * @param {?=} path
     * @return {?}
     */
    function (featureName, path) {
        // if (featureName) {
        //   if (path) {
        //   }
        //   this._shareWithBehavior.asObservable().pipe(map(services=> services.filter()))
        // }
        return this.shareWithBehavior$.asObservable();
    };
    /**
     * @return {?}
     */
    SwaggerServicesStore.prototype.selectCold = /**
     * @return {?}
     */
    function () {
        return this.services;
    };
    /**
     * @param {?} err
     * @return {?}
     */
    SwaggerServicesStore.prototype.error = /**
     * @param {?} err
     * @return {?}
     */
    function (err) { };
    /**
     * @return {?}
     */
    SwaggerServicesStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        // Noop
    };
    SwaggerServicesStore.decorators = [
        { type: Injectable }
    ];
    return SwaggerServicesStore;
}());
export { SwaggerServicesStore };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1zZXJ2aWNlcy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zdG9yZS9zd2FnZ2VyLXNlcnZpY2VzLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUF3QixNQUFNLE1BQU0sQ0FBQztBQUk3RDtJQUFBO1FBRVUsdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLENBQUM7UUFDL0QsYUFBUSxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7SUEwQjFDLENBQUM7Ozs7O0lBekJDLG1DQUFJOzs7O0lBQUosVUFBSyxRQUFtQjtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLG9CQUFPLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUtELHFDQUFNOzs7OztJQUFOLFVBQU8sV0FBb0IsRUFBRSxJQUFhO1FBQ3hDLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsTUFBTTtRQUNOLG1GQUFtRjtRQUNuRixJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELG9DQUFLOzs7O0lBQUwsVUFBTSxHQUFRLElBQUcsQ0FBQzs7OztJQUNsQix1Q0FBUTs7O0lBQVI7UUFDRSxPQUFPO0lBQ1QsQ0FBQzs7Z0JBNUJGLFVBQVU7O0lBNkJYLDJCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1Qlksb0JBQW9COzs7Ozs7SUFDL0Isa0RBQXVFOzs7OztJQUN2RSx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN3YWdnZXJTZXJ2aWNlc1N0b3JlIGltcGxlbWVudHMgT2JzZXJ2ZXI8U2VydmljZVtdPiB7XG4gIHByaXZhdGUgc2hhcmVXaXRoQmVoYXZpb3IkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTZXJ2aWNlW10+KHVuZGVmaW5lZCk7XG4gIHByaXZhdGUgc2VydmljZXMgPSBuZXcgQXJyYXk8U2VydmljZT4oKTtcbiAgbmV4dChzZXJ2aWNlczogU2VydmljZVtdKSB7XG4gICAgdGhpcy5zaGFyZVdpdGhCZWhhdmlvciQubmV4dChzZXJ2aWNlcyk7XG4gICAgdGhpcy5zZXJ2aWNlcyA9IFsuLi5zZXJ2aWNlc107XG4gIH1cblxuICBzZWxlY3QoKTtcbiAgc2VsZWN0KGZlYXR1cmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlcnZpY2VbXT47XG4gIHNlbGVjdChmZWF0dXJlTmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlcnZpY2U+O1xuICBzZWxlY3QoZmVhdHVyZU5hbWU/OiBzdHJpbmcsIHBhdGg/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlcnZpY2VbXSB8IFNlcnZpY2U+IHtcbiAgICAvLyBpZiAoZmVhdHVyZU5hbWUpIHtcbiAgICAvLyAgIGlmIChwYXRoKSB7XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLl9zaGFyZVdpdGhCZWhhdmlvci5hc09ic2VydmFibGUoKS5waXBlKG1hcChzZXJ2aWNlcz0+IHNlcnZpY2VzLmZpbHRlcigpKSlcbiAgICAvLyB9XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVXaXRoQmVoYXZpb3IkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2VsZWN0Q29sZCgpOiBBcnJheTxTZXJ2aWNlPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZXM7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge31cbiAgY29tcGxldGUoKSB7XG4gICAgLy8gTm9vcFxuICB9XG59XG4iXX0=