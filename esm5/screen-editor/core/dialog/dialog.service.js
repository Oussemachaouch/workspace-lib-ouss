/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var DialogService = /** @class */ (function () {
    function DialogService() {
        this.shareWithReplay$ = new BehaviorSubject(undefined);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    DialogService.prototype.openDialog = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.shareWithReplay$.next(content);
    };
    /**
     * @return {?}
     */
    DialogService.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.shareWithReplay$.next(undefined);
    };
    /**
     * @return {?}
     */
    DialogService.prototype.content = /**
     * @return {?}
     */
    function () {
        return this.shareWithReplay$;
    };
    DialogService.decorators = [
        { type: Injectable }
    ];
    return DialogService;
}());
export { DialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogService.prototype.shareWithReplay$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5EO0lBQUE7UUFFVSxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FJM0MsU0FBUyxDQUFDLENBQUM7SUFpQmhCLENBQUM7Ozs7O0lBZkMsa0NBQVU7Ozs7SUFBVixVQUFXLE9BQVk7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsK0JBQU87OztJQUFQO1FBS0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Z0JBdEJGLFVBQVU7O0lBdUJYLG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksYUFBYTs7Ozs7O0lBQ3hCLHlDQUljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIHNoYXJlV2l0aFJlcGxheSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtcbiAgICB0eXBlOiBUeXBlPENvbXBvbmVudD47XG4gICAgZGF0YTogYW55O1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICB9Pih1bmRlZmluZWQpO1xuXG4gIG9wZW5EaWFsb2coY29udGVudDogYW55KSB7XG4gICAgdGhpcy5zaGFyZVdpdGhSZXBsYXkkLm5leHQoY29udGVudCk7XG4gIH1cblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNoYXJlV2l0aFJlcGxheSQubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgY29udGVudCgpOiBPYnNlcnZhYmxlPHtcbiAgICB0eXBlOiBUeXBlPENvbXBvbmVudD47XG4gICAgZGF0YTogYW55O1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICB9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVXaXRoUmVwbGF5JDtcbiAgfVxufVxuIl19