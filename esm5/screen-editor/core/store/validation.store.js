/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var ValidationStore = /** @class */ (function () {
    function ValidationStore() {
        this.shareWithBehaviour$ = new BehaviorSubject(undefined);
    }
    /**
     * @return {?}
     */
    ValidationStore.prototype.select = /**
     * @return {?}
     */
    function () {
        return this.shareWithBehaviour$.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationStore.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.shareWithBehaviour$.next(tslib_1.__spread(value));
    };
    /**
     * @param {?} err
     * @return {?}
     */
    ValidationStore.prototype.error = /**
     * @param {?} err
     * @return {?}
     */
    function (err) { };
    /**
     * @return {?}
     */
    ValidationStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        // Noop
    };
    ValidationStore.decorators = [
        { type: Injectable }
    ];
    return ValidationStore;
}());
export { ValidationStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidationStore.prototype.shareWithBehaviour$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zdG9yZS92YWxpZGF0aW9uLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdCLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUk3RDtJQUFBO1FBRVUsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQy9DLFNBQVMsQ0FDVixDQUFDO0lBYUosQ0FBQzs7OztJQVpDLGdDQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsOEJBQUk7Ozs7SUFBSixVQUFLLEtBQXVCO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLGtCQUFLLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBQ0QsK0JBQUs7Ozs7SUFBTCxVQUFNLEdBQVEsSUFBRyxDQUFDOzs7O0lBRWxCLGtDQUFROzs7SUFBUjtRQUNFLE9BQU87SUFDVCxDQUFDOztnQkFoQkYsVUFBVTs7SUFpQlgsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxlQUFlOzs7Ozs7SUFDMUIsOENBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFZhbGlkYXRpb25JbmZvIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU3RvcmUgaW1wbGVtZW50cyBPYnNlcnZlcjxWYWxpZGF0aW9uSW5mb1tdPiB7XG4gIHByaXZhdGUgc2hhcmVXaXRoQmVoYXZpb3VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VmFsaWRhdGlvbkluZm9bXT4oXG4gICAgdW5kZWZpbmVkXG4gICk7XG4gIHNlbGVjdCgpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25JbmZvW10+IHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZVdpdGhCZWhhdmlvdXIkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVmFsaWRhdGlvbkluZm9bXSkge1xuICAgIHRoaXMuc2hhcmVXaXRoQmVoYXZpb3VyJC5uZXh0KFsuLi52YWx1ZV0pO1xuICB9XG4gIGVycm9yKGVycjogYW55KSB7fVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vIE5vb3BcbiAgfVxufVxuIl19