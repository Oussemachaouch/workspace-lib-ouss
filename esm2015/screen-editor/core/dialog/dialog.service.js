/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class DialogService {
    constructor() {
        this.shareWithReplay$ = new BehaviorSubject(undefined);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    openDialog(content) {
        this.shareWithReplay$.next(content);
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.shareWithReplay$.next(undefined);
    }
    /**
     * @return {?}
     */
    content() {
        return this.shareWithReplay$;
    }
}
DialogService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogService.prototype.shareWithReplay$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR25ELE1BQU0sT0FBTyxhQUFhO0lBRDFCO1FBRVUscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBSTNDLFNBQVMsQ0FBQyxDQUFDO0lBaUJoQixDQUFDOzs7OztJQWZDLFVBQVUsQ0FBQyxPQUFZO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxPQUFPO1FBS0wsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7O1lBdEJGLFVBQVU7Ozs7Ozs7SUFFVCx5Q0FJYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzaGFyZVdpdGhSZXBsYXkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7XG4gICAgdHlwZTogVHlwZTxDb21wb25lbnQ+O1xuICAgIGRhdGE6IGFueTtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgfT4odW5kZWZpbmVkKTtcblxuICBvcGVuRGlhbG9nKGNvbnRlbnQ6IGFueSkge1xuICAgIHRoaXMuc2hhcmVXaXRoUmVwbGF5JC5uZXh0KGNvbnRlbnQpO1xuICB9XG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5zaGFyZVdpdGhSZXBsYXkkLm5leHQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIGNvbnRlbnQoKTogT2JzZXJ2YWJsZTx7XG4gICAgdHlwZTogVHlwZTxDb21wb25lbnQ+O1xuICAgIGRhdGE6IGFueTtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgfT4ge1xuICAgIHJldHVybiB0aGlzLnNoYXJlV2l0aFJlcGxheSQ7XG4gIH1cbn1cbiJdfQ==