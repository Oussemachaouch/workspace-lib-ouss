/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class ValidationStore {
    constructor() {
        this.shareWithBehaviour$ = new BehaviorSubject(undefined);
    }
    /**
     * @return {?}
     */
    select() {
        return this.shareWithBehaviour$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.shareWithBehaviour$.next([...value]);
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
ValidationStore.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidationStore.prototype.shareWithBehaviour$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zdG9yZS92YWxpZGF0aW9uLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBd0IsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzdELE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBRVUsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQy9DLFNBQVMsQ0FDVixDQUFDO0lBYUosQ0FBQzs7OztJQVpDLE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUF1QjtRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBQ0QsS0FBSyxDQUFDLEdBQVEsSUFBRyxDQUFDOzs7O0lBRWxCLFFBQVE7UUFDTixPQUFPO0lBQ1QsQ0FBQzs7O1lBaEJGLFVBQVU7Ozs7Ozs7SUFFVCw4Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVmFsaWRhdGlvbkluZm8gfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TdG9yZSBpbXBsZW1lbnRzIE9ic2VydmVyPFZhbGlkYXRpb25JbmZvW10+IHtcbiAgcHJpdmF0ZSBzaGFyZVdpdGhCZWhhdmlvdXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWYWxpZGF0aW9uSW5mb1tdPihcbiAgICB1bmRlZmluZWRcbiAgKTtcbiAgc2VsZWN0KCk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkluZm9bXT4ge1xuICAgIHJldHVybiB0aGlzLnNoYXJlV2l0aEJlaGF2aW91ciQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBWYWxpZGF0aW9uSW5mb1tdKSB7XG4gICAgdGhpcy5zaGFyZVdpdGhCZWhhdmlvdXIkLm5leHQoWy4uLnZhbHVlXSk7XG4gIH1cbiAgZXJyb3IoZXJyOiBhbnkpIHt9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8gTm9vcFxuICB9XG59XG4iXX0=