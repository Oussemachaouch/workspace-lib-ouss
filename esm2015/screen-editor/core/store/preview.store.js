/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
export class PreviewStore {
    constructor() {
        this.shareWithBehavior$ = new BehaviorSubject(undefined);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    next(view) {
        this.shareWithBehavior$.next(view);
    }
    /**
     * @return {?}
     */
    select() {
        return this.shareWithBehavior$.asObservable();
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        throw new Error('Method not implemented.');
    }
}
PreviewStore.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PreviewStore.prototype.shareWithBehavior$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zdG9yZS9wcmV2aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUF3QixNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RELE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVUsdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7SUFpQnBFLENBQUM7Ozs7O0lBZkMsSUFBSSxDQUFDLElBQVU7UUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBUSxJQUFHLENBQUM7Ozs7SUFDbEIsUUFBUTtRQUNOLE9BQU87SUFDVCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFsQkYsVUFBVTs7Ozs7OztJQUVULDBDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXcgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmV2aWV3U3RvcmUgaW1wbGVtZW50cyBPYnNlcnZlcjxWaWV3PiwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzaGFyZVdpdGhCZWhhdmlvciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZpZXc+KHVuZGVmaW5lZCk7XG5cbiAgbmV4dCh2aWV3OiBWaWV3KSB7XG4gICAgdGhpcy5zaGFyZVdpdGhCZWhhdmlvciQubmV4dCh2aWV3KTtcbiAgfVxuXG4gIHNlbGVjdCgpOiBPYnNlcnZhYmxlPFZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZVdpdGhCZWhhdmlvciQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge31cbiAgY29tcGxldGUoKSB7XG4gICAgLy8gTm9vcFxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxufVxuIl19