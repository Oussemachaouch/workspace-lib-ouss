/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { Navigator } from '../navigator/navigator';
import { LayoutService } from '../../../core/services/layout.service';
var ExplorerToolbarComponent = /** @class */ (function () {
    function ExplorerToolbarComponent(navigator, layoutService) {
        this.navigator = navigator;
        this.layoutService = layoutService;
        this.query = new EventEmitter();
        this.screenSaved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ExplorerToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view$ = this.navigator.view();
    };
    /**
     * @return {?}
     */
    ExplorerToolbarComponent.prototype.openFeatureSelector = /**
     * @return {?}
     */
    function () {
        // this.featuresManagement.dispatch(openDialogToAddFeature());
    };
    /**
     * @return {?}
     */
    ExplorerToolbarComponent.prototype.doSaveFeatures = /**
     * @return {?}
     */
    function () {
        // this.featuresManagement.dispatch(saveFeaturesUpdates());
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ExplorerToolbarComponent.prototype.doFilter = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.query.emit(query);
    };
    ExplorerToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-explorer-toolbar',
                    template: "<!--<div class=\"toolbar\">\n  <sc-feature-explorer-toolbar\n    *ngIf=\"(view$ | async) === 'feature'\"\n    (filter)=\"doFilter($event)\"\n    (addFeature)=\"openFeatureSelector()\"\n    (saveFeatures)=\"doSaveFeatures()\"\n  >\n  </sc-feature-explorer-toolbar>\n  <sc-screen-explorer-toolbar *ngIf=\"(view$ | async) === 'screen'\">\n  </sc-screen-explorer-toolbar>\n</div>\n-->\n",
                    styles: [".toolbar{min-height:30px}"]
                }] }
    ];
    /** @nocollapse */
    ExplorerToolbarComponent.ctorParameters = function () { return [
        { type: Navigator },
        { type: LayoutService }
    ]; };
    ExplorerToolbarComponent.propDecorators = {
        query: [{ type: Output }],
        screenSaved: [{ type: Output }]
    };
    return ExplorerToolbarComponent;
}());
export { ExplorerToolbarComponent };
if (false) {
    /** @type {?} */
    ExplorerToolbarComponent.prototype.query;
    /** @type {?} */
    ExplorerToolbarComponent.prototype.screenSaved;
    /** @type {?} */
    ExplorerToolbarComponent.prototype.view$;
    /**
     * @type {?}
     * @private
     */
    ExplorerToolbarComponent.prototype.navigator;
    /**
     * @type {?}
     * @private
     */
    ExplorerToolbarComponent.prototype.layoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXItdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZXhwbG9yZXItdG9vbGJhci9leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS3hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFdEU7SUFhRSxrQ0FDVSxTQUFvQixFQUNwQixhQUE0QjtRQUQ1QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBUnRDLFVBQUssR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV6RCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBUTVELENBQUM7Ozs7SUFFSiwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHNEQUFtQjs7O0lBQW5CO1FBQ0MsOERBQThEO0lBQy9ELENBQUM7Ozs7SUFFRCxpREFBYzs7O0lBQWQ7UUFDQywyREFBMkQ7SUFDNUQsQ0FBQzs7Ozs7SUFFRCwyQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDBZQUFnRDs7aUJBRWpEOzs7O2dCQVBRLFNBQVM7Z0JBQ1QsYUFBYTs7O3dCQVFuQixNQUFNOzhCQUVOLE1BQU07O0lBMEJULCtCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3Qlksd0JBQXdCOzs7SUFDbkMseUNBQ3lEOztJQUN6RCwrQ0FDK0Q7O0lBRS9ELHlDQUEwQjs7Ozs7SUFHeEIsNkNBQTRCOzs7OztJQUM1QixpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4uL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvbGF5b3V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1leHBsb3Jlci10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGxvcmVyLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBsb3JlclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KClcbiAgcXVlcnk6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKVxuICBzY3JlZW5TYXZlZDogRXZlbnRFbWl0dGVyPFNjcmVlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNjcmVlbj4oKTtcblxuICB2aWV3JDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsXG4gICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxuICAgLy8gcHJpdmF0ZSBmZWF0dXJlc01hbmFnZW1lbnQ6IFN0b3JlPEZlYXR1cmVzU3RhdGU+XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXckID0gdGhpcy5uYXZpZ2F0b3IudmlldygpO1xuICB9XG5cbiAgb3BlbkZlYXR1cmVTZWxlY3RvcigpIHtcbiAgIC8vIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKG9wZW5EaWFsb2dUb0FkZEZlYXR1cmUoKSk7XG4gIH1cblxuICBkb1NhdmVGZWF0dXJlcygpIHtcbiAgIC8vIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKHNhdmVGZWF0dXJlc1VwZGF0ZXMoKSk7XG4gIH1cblxuICBkb0ZpbHRlcihxdWVyeTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeS5lbWl0KHF1ZXJ5KTtcbiAgfVxufVxuIl19