/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef } from '@angular/core';
var RemoveSpecialCharacterDirective = /** @class */ (function () {
    function RemoveSpecialCharacterDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    RemoveSpecialCharacterDirective.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.value = this.removeSpecialCharactersAndWhiteSpace(this.el.nativeElement.value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    RemoveSpecialCharacterDirective.prototype.removeSpecialCharactersAndWhiteSpace = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = value.replace(/\s+/g, '');
        value = value.replace(/[^0-9a-zA-Z_-]/g, '');
        return value;
    };
    RemoveSpecialCharacterDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[remove-special-char]'
                },] }
    ];
    /** @nocollapse */
    RemoveSpecialCharacterDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    RemoveSpecialCharacterDirective.propDecorators = {
        onChange: [{ type: HostListener, args: ['keyup',] }]
    };
    return RemoveSpecialCharacterDirective;
}());
export { RemoveSpecialCharacterDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveSpecialCharacterDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNwZWNpYWwtY2hhcmFjdGVycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL3NoYXJlZC9kaXJlY3RpdmVzL3JlbW92ZS1zcGVjaWFsLWNoYXJhY3RlcnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEU7SUFLRSx5Q0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDOzs7O0lBR3RDLGtEQUFROzs7SUFEUjtRQUVFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0NBQW9DLENBQ3JFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDNUIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDhFQUFvQzs7Ozs7SUFBNUMsVUFBNkMsS0FBYTtRQUN4RCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFsQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzs7OztnQkFMaUMsVUFBVTs7OzJCQVN6QyxZQUFZLFNBQUMsT0FBTzs7SUFZdkIsc0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWZZLCtCQUErQjs7Ozs7O0lBQzlCLDZDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tyZW1vdmUtc3BlY2lhbC1jaGFyXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVtb3ZlU3BlY2lhbENoYXJhY3RlckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKVxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzQW5kV2hpdGVTcGFjZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzQW5kV2hpdGVTcGFjZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpO1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW14wLTlhLXpBLVpfLV0vZywgJycpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19