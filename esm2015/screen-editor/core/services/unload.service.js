/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ValidationStore } from '../../core/store';
export class UnloadModuleService {
    /**
     * @param {?} validationStore
     */
    constructor(validationStore) {
        this.validationStore = validationStore;
    }
    /**
     * @return {?}
     */
    unloadModules() {
        this.validationStore.complete();
    }
}
UnloadModuleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnloadModuleService.ctorParameters = () => [
    { type: ValidationStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnloadModuleService.prototype.validationStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvc2VydmljZXMvdW5sb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR25ELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7OztJQUV4RCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUFORixVQUFVOzs7O1lBRkYsZUFBZTs7Ozs7OztJQUlWLDhDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRpb25TdG9yZSB9IGZyb20gJy4uLy4uL2NvcmUvc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5sb2FkTW9kdWxlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblN0b3JlOiBWYWxpZGF0aW9uU3RvcmUpIHt9XG5cbiAgdW5sb2FkTW9kdWxlcygpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25TdG9yZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=