/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * Singleton Loader Service used to change the state of the loader Subject
 */
export class PreviewerLoadingService {
    constructor() {
        this.loaderSubject = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    show() {
        this.loaderSubject.next(true);
    }
    /**
     * @return {?}
     */
    hide() {
        this.loaderSubject.next(false);
    }
    /**
     * @return {?}
     */
    getLoaderState() {
        return this.loaderSubject.asObservable();
    }
}
PreviewerLoadingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PreviewerLoadingService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PreviewerLoadingService.prototype.loaderSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlld2VyLWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9sb2FkaW5nL3NlcnZpY2VzL3ByZXZpZXdlci1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtuRCxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDO1FBRlEsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUU3QyxDQUFDOzs7O0lBRWhCLElBQUk7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7OztZQWhCRixVQUFVOzs7Ozs7Ozs7SUFFVCxnREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8qKlxuICogU2luZ2xldG9uIExvYWRlciBTZXJ2aWNlIHVzZWQgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgbG9hZGVyIFN1YmplY3RcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByZXZpZXdlckxvYWRpbmdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2FkZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubG9hZGVyU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIGdldExvYWRlclN0YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==