/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.useCasePolicyMode$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    LayoutService.prototype.enableUcPolicyMode = /**
     * @return {?}
     */
    function () {
        this.useCasePolicyMode$.next(true);
    };
    /**
     * @return {?}
     */
    LayoutService.prototype.disableUcPolicyMode = /**
     * @return {?}
     */
    function () {
        this.useCasePolicyMode$.next(false);
    };
    /**
     * @return {?}
     */
    LayoutService.prototype.isUcPolicyModeActive = /**
     * @return {?}
     */
    function () {
        return this.useCasePolicyMode$.asObservable();
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LayoutService.ctorParameters = function () { return []; };
    return LayoutService;
}());
export { LayoutService };
if (false) {
    /** @type {?} */
    LayoutService.prototype.useCasePolicyMode$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvc2VydmljZXMvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVuRDtJQUdFO1FBREEsdUJBQWtCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFaEIsMENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCwyQ0FBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELDRDQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Z0JBZkYsVUFBVTs7OztJQWdCWCxvQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksYUFBYTs7O0lBQ3hCLDJDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG4gIHVzZUNhc2VQb2xpY3lNb2RlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBlbmFibGVVY1BvbGljeU1vZGUoKSB7XG4gICAgdGhpcy51c2VDYXNlUG9saWN5TW9kZSQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGVVY1BvbGljeU1vZGUoKSB7XG4gICAgdGhpcy51c2VDYXNlUG9saWN5TW9kZSQubmV4dChmYWxzZSk7XG4gIH1cblxuICBpc1VjUG9saWN5TW9kZUFjdGl2ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VDYXNlUG9saWN5TW9kZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==