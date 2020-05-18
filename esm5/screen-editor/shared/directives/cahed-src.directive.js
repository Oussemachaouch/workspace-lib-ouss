/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Renderer2, Directive, Input } from '@angular/core';
var CachedSrcDirective = /** @class */ (function () {
    function CachedSrcDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    Object.defineProperty(CachedSrcDirective.prototype, "cachedSrc", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elRef.nativeElement.src;
        },
        set: /**
         * @param {?} src
         * @return {?}
         */
        function (src) {
            if (this.elRef.nativeElement.src !== src) {
                this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
            }
        },
        enumerable: true,
        configurable: true
    });
    CachedSrcDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'iframe'
                },] }
    ];
    /** @nocollapse */
    CachedSrcDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CachedSrcDirective.propDecorators = {
        cachedSrc: [{ type: Input }]
    };
    return CachedSrcDirective;
}());
export { CachedSrcDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FoZWQtc3JjLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3Ivc2hhcmVkL2RpcmVjdGl2ZXMvY2FoZWQtc3JjLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RTtJQWNFLDRCQUFvQixLQUFpQixFQUFVLFFBQW1CO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQVZ0RSxzQkFDVyx5Q0FBUzs7OztRQURwQjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3RDLENBQUM7Ozs7O1FBQ0QsVUFBcUIsR0FBVztZQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNsRTtRQUNILENBQUM7OztPQUxBOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQUpRLFVBQVU7Z0JBQUUsU0FBUzs7OzRCQU0zQixLQUFLOztJQVdSLHlCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksa0JBQWtCOzs7Ozs7SUFXakIsbUNBQXlCOzs7OztJQUFFLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpZnJhbWUnXG59KVxuZXhwb3J0IGNsYXNzIENhY2hlZFNyY0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgY2FjaGVkU3JjKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zcmM7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoZWRTcmMoc3JjOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnNyYyAhPT0gc3JjKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCBzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cbiJdfQ==