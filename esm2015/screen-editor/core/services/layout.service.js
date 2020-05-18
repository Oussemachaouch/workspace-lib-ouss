/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class LayoutService {
    constructor() {
        this.useCasePolicyMode$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    enableUcPolicyMode() {
        this.useCasePolicyMode$.next(true);
    }
    /**
     * @return {?}
     */
    disableUcPolicyMode() {
        this.useCasePolicyMode$.next(false);
    }
    /**
     * @return {?}
     */
    isUcPolicyModeActive() {
        return this.useCasePolicyMode$.asObservable();
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LayoutService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LayoutService.prototype.useCasePolicyMode$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvc2VydmljZXMvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUduRCxNQUFNLE9BQU8sYUFBYTtJQUV4QjtRQURBLHVCQUFrQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRWhCLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7OztZQWZGLFVBQVU7Ozs7OztJQUVULDJDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG4gIHVzZUNhc2VQb2xpY3lNb2RlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBlbmFibGVVY1BvbGljeU1vZGUoKSB7XG4gICAgdGhpcy51c2VDYXNlUG9saWN5TW9kZSQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGVVY1BvbGljeU1vZGUoKSB7XG4gICAgdGhpcy51c2VDYXNlUG9saWN5TW9kZSQubmV4dChmYWxzZSk7XG4gIH1cblxuICBpc1VjUG9saWN5TW9kZUFjdGl2ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VDYXNlUG9saWN5TW9kZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==