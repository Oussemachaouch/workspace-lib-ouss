/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef } from '@angular/core';
export class RemoveSpecialCharacterDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    onChange() {
        this.el.nativeElement.value = this.removeSpecialCharactersAndWhiteSpace(this.el.nativeElement.value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    removeSpecialCharactersAndWhiteSpace(value) {
        value = value.replace(/\s+/g, '');
        value = value.replace(/[^0-9a-zA-Z_-]/g, '');
        return value;
    }
}
RemoveSpecialCharacterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[remove-special-char]'
            },] }
];
/** @nocollapse */
RemoveSpecialCharacterDirective.ctorParameters = () => [
    { type: ElementRef }
];
RemoveSpecialCharacterDirective.propDecorators = {
    onChange: [{ type: HostListener, args: ['keyup',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveSpecialCharacterDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNwZWNpYWwtY2hhcmFjdGVycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL3NoYXJlZC9kaXJlY3RpdmVzL3JlbW92ZS1zcGVjaWFsLWNoYXJhY3RlcnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNcEUsTUFBTSxPQUFPLCtCQUErQjs7OztJQUMxQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFHdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0NBQW9DLENBQ3JFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDNUIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG9DQUFvQyxDQUFDLEtBQWE7UUFDeEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7OztZQUxpQyxVQUFVOzs7dUJBU3pDLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBRlQsNkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3JlbW92ZS1zcGVjaWFsLWNoYXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW1vdmVTcGVjaWFsQ2hhcmFjdGVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpXG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNBbmRXaGl0ZVNwYWNlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNBbmRXaGl0ZVNwYWNlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOWEtekEtWl8tXS9nLCAnJyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=