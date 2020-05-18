/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PreviewStore } from '../../../core/store';
var Navigator = /** @class */ (function () {
    function Navigator(previwerStore) {
        this.previwerStore = previwerStore;
        this.view$ = new BehaviorSubject('feature');
    }
    /**
     * @return {?}
     */
    Navigator.prototype.view = /**
     * @return {?}
     */
    function () {
        return this.view$;
    };
    /**
     * @return {?}
     */
    Navigator.prototype.goToScreenExplorer = /**
     * @return {?}
     */
    function () {
        this.view$.next('screen');
    };
    /**
     * @return {?}
     */
    Navigator.prototype.goToPageExplorer = /**
     * @return {?}
     */
    function () {
        this.view$.next('page');
    };
    /**
     * @return {?}
     */
    Navigator.prototype.goToFeatureExplorer = /**
     * @return {?}
     */
    function () {
        this.previwerStore.next(undefined);
        //  this.propertiesManagement.dispatch(editScreenWidgetProperties(undefined));
        this.view$.next('feature');
    };
    Navigator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Navigator.ctorParameters = function () { return [
        { type: PreviewStore }
    ]; };
    return Navigator;
}());
export { Navigator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.view$;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.previwerStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL2V4cGxvcmVyL25hdmlnYXRvci9uYXZpZ2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUduRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHbkQ7SUFJRSxtQkFDVSxhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUg3QixVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBS3JFLENBQUM7Ozs7SUFFSix3QkFBSTs7O0lBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELG9DQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHVDQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsOEVBQThFO1FBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXpCRixVQUFVOzs7O2dCQUhGLFlBQVk7O0lBNkJyQixnQkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLFNBQVM7Ozs7OztJQUNwQiwwQkFBd0U7Ozs7O0lBR3RFLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFByZXZpZXdTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuICBwcml2YXRlIHZpZXckOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ2ZlYXR1cmUnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByZXZpd2VyU3RvcmU6IFByZXZpZXdTdG9yZSxcbi8vICAgIHByaXZhdGUgcHJvcGVydGllc01hbmFnZW1lbnQ6IFN0b3JlPFByb3BlcnRpZXNTdGF0ZT5cbiAgKSB7fVxuXG4gIHZpZXcoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy52aWV3JDtcbiAgfVxuXG4gIGdvVG9TY3JlZW5FeHBsb3JlcigpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXckLm5leHQoJ3NjcmVlbicpO1xuICB9XG5cbiAgZ29Ub1BhZ2VFeHBsb3JlcigpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXckLm5leHQoJ3BhZ2UnKTtcbiAgfVxuXG4gIGdvVG9GZWF0dXJlRXhwbG9yZXIoKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aXdlclN0b3JlLm5leHQodW5kZWZpbmVkKTtcbiAgLy8gIHRoaXMucHJvcGVydGllc01hbmFnZW1lbnQuZGlzcGF0Y2goZWRpdFNjcmVlbldpZGdldFByb3BlcnRpZXModW5kZWZpbmVkKSk7XG4gICAgdGhpcy52aWV3JC5uZXh0KCdmZWF0dXJlJyk7XG4gIH1cbn1cbiJdfQ==