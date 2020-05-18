/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Renderer2, Directive, Input } from '@angular/core';
export class CachedSrcDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get cachedSrc() {
        return this.elRef.nativeElement.src;
    }
    /**
     * @param {?} src
     * @return {?}
     */
    set cachedSrc(src) {
        if (this.elRef.nativeElement.src !== src) {
            this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
        }
    }
}
CachedSrcDirective.decorators = [
    { type: Directive, args: [{
                selector: 'iframe'
            },] }
];
/** @nocollapse */
CachedSrcDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CachedSrcDirective.propDecorators = {
    cachedSrc: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CachedSrcDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    CachedSrcDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FoZWQtc3JjLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3Ivc2hhcmVkL2RpcmVjdGl2ZXMvY2FoZWQtc3JjLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt4RSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQVc3QixZQUFvQixLQUFpQixFQUFVLFFBQW1CO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQzs7OztJQVZ0RSxJQUNXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxHQUFXO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7YUFDbkI7Ozs7WUFKUSxVQUFVO1lBQUUsU0FBUzs7O3dCQU0zQixLQUFLOzs7Ozs7O0lBVU0sbUNBQXlCOzs7OztJQUFFLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpZnJhbWUnXG59KVxuZXhwb3J0IGNsYXNzIENhY2hlZFNyY0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgY2FjaGVkU3JjKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zcmM7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoZWRTcmMoc3JjOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnNyYyAhPT0gc3JjKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCBzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cbiJdfQ==