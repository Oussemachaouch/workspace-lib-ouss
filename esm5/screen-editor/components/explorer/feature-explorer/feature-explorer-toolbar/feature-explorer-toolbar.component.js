/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { IdeActionsService } from '@palmyra-devkit/core-api/client';
var FeatureExplorerToolbarComponent = /** @class */ (function () {
    function FeatureExplorerToolbarComponent(ideActionsSevice) {
        this.ideActionsSevice = ideActionsSevice;
        this.filter = new EventEmitter();
        this.addFeature = new EventEmitter();
        this.saveFeatures = new EventEmitter();
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    FeatureExplorerToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * Used to filter tree nodes.
     * @param event - dom event.
     */
    /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    FeatureExplorerToolbarComponent.prototype.doFilter = /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.filter.emit(query);
    };
    /**
     * @return {?}
     */
    FeatureExplorerToolbarComponent.prototype.openAddFeatureDialog = /**
     * @return {?}
     */
    function () {
        this.addFeature.emit();
    };
    /**
     * @return {?}
     */
    FeatureExplorerToolbarComponent.prototype.doSaveFeatures = /**
     * @return {?}
     */
    function () {
        this.saveFeatures.emit();
    };
    /**
     * Save using keybord shortcut
     * Ctrt + s
     * @param event key board event
     */
    /**
     * Save using keybord shortcut
     * Ctrt + s
     * @param {?} event key board event
     * @return {?}
     */
    FeatureExplorerToolbarComponent.prototype.moveNodeWithKeys = /**
     * Save using keybord shortcut
     * Ctrt + s
     * @param {?} event key board event
     * @return {?}
     */
    function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            event.stopPropagation();
            this.doSaveFeatures();
        }
    };
    /**
     * @return {?}
     */
    FeatureExplorerToolbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    FeatureExplorerToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-feature-explorer-toolbar',
                    template: "<div class=\"actions-container\">\n  <sc-toolbar-finder style=\"width: 100%\" placeHolder=\"Find feature...\" (filter)=\"doFilter($event)\">\n  </sc-toolbar-finder>\n  <div class=\"actions\">\n    <sc-toolbar-add-btn tooltip=\"Add Feature\" (click)=\"addFeaturePanel.toggle($event)\"></sc-toolbar-add-btn>\n  </div>\n</div>\n<div >\n  <span class=\"trash-count\">\n    <p-overlayPanel #addFeaturePanel showCloseIcon=\"true\">\n <!--     <sc-feature-creator *ngIf=\"addFeaturePanel.visible\" (featureAdded)=\"addFeaturePanel.hide()\">\n      </sc-feature-creator>-->\n    </p-overlayPanel>\n  </span>\n</div>\n",
                    styles: [".actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions-container .actions{display:-webkit-inline-box;display:inline-flex}.ui-inputgroup{width:100%}.trash-features-count-display,.trash-screens-count-display{border:1px solid #d83431;padding:5px;border-radius:5px;margin:5px;display:inline-block;top:0}.trash-count{display:block;margin-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    FeatureExplorerToolbarComponent.ctorParameters = function () { return [
        { type: IdeActionsService }
    ]; };
    FeatureExplorerToolbarComponent.propDecorators = {
        filter: [{ type: Output }],
        addFeature: [{ type: Output }],
        saveFeatures: [{ type: Output }],
        moveNodeWithKeys: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
    };
    return FeatureExplorerToolbarComponent;
}());
export { FeatureExplorerToolbarComponent };
if (false) {
    /** @type {?} */
    FeatureExplorerToolbarComponent.prototype.filter;
    /** @type {?} */
    FeatureExplorerToolbarComponent.prototype.addFeature;
    /** @type {?} */
    FeatureExplorerToolbarComponent.prototype.saveFeatures;
    /** @type {?} */
    FeatureExplorerToolbarComponent.prototype.deletedScreens$;
    /** @type {?} */
    FeatureExplorerToolbarComponent.prototype.deletedFeatureCount$;
    /** @type {?} */
    FeatureExplorerToolbarComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    FeatureExplorerToolbarComponent.prototype.ideActionsSevice;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy9leHBsb3Jlci9mZWF0dXJlLWV4cGxvcmVyL2ZlYXR1cmUtZXhwbG9yZXItdG9vbGJhci9mZWF0dXJlLWV4cGxvcmVyLXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBRVosWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFcEU7SUFrQkUseUNBRVUsZ0JBQW1DO1FBQW5DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFiN0MsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzFELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTFELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUsxQixDQUFDOzs7O0lBRUosa0RBQVE7OztJQUFSO0lBbUJBLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNILGtEQUFROzs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsOERBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCx3REFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBRUgsMERBQWdCOzs7Ozs7SUFEaEIsVUFDaUIsS0FBb0I7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQ3pELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVELHFEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDZtQkFBd0Q7O2lCQUV6RDs7OztnQkFOUSxpQkFBaUI7Ozt5QkFRdkIsTUFBTTs2QkFHTixNQUFNOytCQUVOLE1BQU07bUNBcUROLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFhNUMsc0NBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQXhFWSwrQkFBK0I7OztJQUMxQyxpREFDMEQ7O0lBRTFELHFEQUN3RDs7SUFDeEQsdURBQzBEOztJQUUxRCwwREFBb0M7O0lBQ3BDLCtEQUF5Qzs7SUFDekMsdURBQTZCOzs7OztJQUkzQiwyREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLy8gU2ltcG9ydCB7IEZlYXR1cmVzU3RhdGUsIGdldEZlYXR1cmVJblRyYXNoLCBnZXRTY3JlZW5zSW5UcmFzaCB9IGZyb20gJy4uL25ncngnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJZGVBY3Rpb25zU2VydmljZSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9jbGllbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1mZWF0dXJlLWV4cGxvcmVyLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS1leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRXhwbG9yZXJUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgZmlsdGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBPdXRwdXQoKVxuICBhZGRGZWF0dXJlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZUZlYXR1cmVzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGRlbGV0ZWRTY3JlZW5zJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBkZWxldGVkRmVhdHVyZUNvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuIC8vICAgcHJpdmF0ZSBmZWF0dXJlc01hbmFnZW1lbnQ6IFN0b3JlPEZlYXR1cmVzU3RhdGU+LFxuICAgIHByaXZhdGUgaWRlQWN0aW9uc1NldmljZTogSWRlQWN0aW9uc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkgey8qXG4gICAgdGhpcy5kZWxldGVkU2NyZWVucyQgPSB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudFxuICAgICAgLnNlbGVjdChnZXRTY3JlZW5zSW5UcmFzaClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIG1hcCgoc2NyZWVuczogW10pID0+IHNjcmVlbnMubGVuZ3RoKVxuICAgICAgKTtcblxuICAgIHRoaXMuZGVsZXRlZEZlYXR1cmVDb3VudCQgPSB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudFxuICAgICAgLnNlbGVjdChnZXRGZWF0dXJlSW5UcmFzaClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIG1hcChmZWF0dXJlc0luVHJhc2ggPT4gT2JqZWN0LmtleXMoZmVhdHVyZXNJblRyYXNoKS5sZW5ndGgpXG4gICAgICApO1xuXG4gICAgdGhpcy5pZGVBY3Rpb25zU2V2aWNlXG4gICAgICAuc2F2ZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZShfID0+IHRoaXMuZG9TYXZlRmVhdHVyZXMoKSk7Ki9cbiAgfVxuICAvKipcbiAgICogVXNlZCB0byBmaWx0ZXIgdHJlZSBub2Rlcy5cbiAgICogQHBhcmFtIGV2ZW50IC0gZG9tIGV2ZW50LlxuICAgKi9cbiAgZG9GaWx0ZXIocXVlcnk6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQocXVlcnkpO1xuICB9XG5cbiAgb3BlbkFkZEZlYXR1cmVEaWFsb2coKSB7XG4gICAgdGhpcy5hZGRGZWF0dXJlLmVtaXQoKTtcbiAgfVxuXG4gIGRvU2F2ZUZlYXR1cmVzKCkge1xuICAgIHRoaXMuc2F2ZUZlYXR1cmVzLmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHVzaW5nIGtleWJvcmQgc2hvcnRjdXRcbiAgICogQ3RydCArIHNcbiAgICogQHBhcmFtIGV2ZW50IGtleSBib2FyZCBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBtb3ZlTm9kZVdpdGhLZXlzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIGV2ZW50LmtleSA9PT0gJ3MnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmRvU2F2ZUZlYXR1cmVzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==