/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dialog } from '../../../../../core/dialog/dialog';
import { FeatureUpdatorComponent } from '../feature-updator/feature-updator.component';
var FeatureSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FeatureSelectorComponent, _super);
    function FeatureSelectorComponent(modelsManagementStore) {
        var _this = _super.call(this) || this;
        _this.modelsManagementStore = modelsManagementStore;
        return _this;
    }
    /**
     * @return {?}
     */
    FeatureSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /* this.features$ = this.featuresManagement.select(getFeaturesAsData);
         this.models$ = this.modelsManagementStore.select(getAllModels).pipe(
           withLatestFrom(this.features$, (entities, features) => ({
             entities,
             features
           })),
           map(({ entities, features }) => {
             const featuresNames = features.map(feature =>
               feature.name.toLocaleLowerCase()
             );
             return entities.filter(
               entity => !featuresNames.includes(entity.name.toLocaleLowerCase())
             );
           })
         );*/
    };
    /**
     * @return {?}
     */
    FeatureSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.selectFeature();
    };
    /**
     * @return {?}
     */
    FeatureSelectorComponent.prototype.selectFeature = /**
     * @return {?}
     */
    function () {
        if (this.selectedFeature) {
            this.updator.setOptions({
                featureName: this.selectedFeature.name.charAt(0).toLowerCase() +
                    this.selectedFeature.name.slice(1)
            });
        }
    };
    FeatureSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-feature-selector',
                    template: "<div style=\"height: 50vh;\">\n<!--  <label for=\"models\">Choose a feature: </label>-->\n  <p-dropdown\n    #featureInput=\"ngModel\"\n    [options]=\"models$ | async\"\n    optionLabel=\"name\"\n    [(ngModel)]=\"selectedFeature\"\n    (onChange)=\"selectFeature()\"\n    filter=\"true\"\n    filterPlaceholder=\"Search feature\"\n    placeholder=\"Select a feature\"\n    required=\"true\"\n  >\n  </p-dropdown>\n  <sc-feature-updator #featureUpdator></sc-feature-updator>\n</div>\n",
                    styles: [".ui-dialog .apply-button .ui-button{background:#e4e4e4;color:#5cb85c}"]
                }] }
    ];
    /** @nocollapse */
    FeatureSelectorComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    FeatureSelectorComponent.propDecorators = {
        feature: [{ type: ViewChild, args: ['featureInput', { static: false },] }],
        updator: [{ type: ViewChild, args: ['featureUpdator', { static: false },] }]
    };
    return FeatureSelectorComponent;
}(Dialog));
export { FeatureSelectorComponent };
if (false) {
    /** @type {?} */
    FeatureSelectorComponent.prototype.feature;
    /** @type {?} */
    FeatureSelectorComponent.prototype.updator;
    /** @type {?} */
    FeatureSelectorComponent.prototype.models$;
    /** @type {?} */
    FeatureSelectorComponent.prototype.features$;
    /** @type {?} */
    FeatureSelectorComponent.prototype.options;
    /** @type {?} */
    FeatureSelectorComponent.prototype.selectedFeature;
    /**
     * @type {?}
     * @private
     */
    FeatureSelectorComponent.prototype.modelsManagementStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZmVhdHVyZS1leHBsb3Jlci9kaWFsb2cvZmVhdHVyZS1zZWxlY3Rvci9mZWF0dXJlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXBDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUd2RjtJQUs4QyxvREFBTTtJQVlsRCxrQ0FDVSxxQkFBeUM7UUFEbkQsWUFJRSxpQkFBTyxTQUNSO1FBSlMsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUFvQjs7SUFJbkQsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNDOzs7Ozs7Ozs7Ozs7OzthQWNLO0lBQ04sQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZ0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUN0QixXQUFXLEVBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQkFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNyQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsaWZBQWdEOztpQkFFakQ7Ozs7Z0JBZFEsS0FBSzs7OzBCQWlCWCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTswQkFDM0MsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUErQ2hELCtCQUFDO0NBQUEsQUF2REQsQ0FLOEMsTUFBTSxHQWtEbkQ7U0FsRFksd0JBQXdCOzs7SUFFbkMsMkNBQXNEOztJQUN0RCwyQ0FDaUM7O0lBRWpDLDJDQUE4Qjs7SUFDOUIsNkNBQWlDOztJQUNqQywyQ0FBWTs7SUFFWixtREFBd0I7Ozs7O0lBR3RCLHlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgd2l0aExhdGVzdEZyb20sIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmVhdHVyZSwgRW50aXR5IH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL3NoYXJlZCc7XG5cbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZGlhbG9nL2RpYWxvZyc7XG5pbXBvcnQgeyBGZWF0dXJlVXBkYXRvckNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUtdXBkYXRvci9mZWF0dXJlLXVwZGF0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsc1N0YXRlLCBnZXRBbGxNb2RlbHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL25ncngvbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2MtZmVhdHVyZS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZVNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnZmVhdHVyZUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGZlYXR1cmU7XG4gIEBWaWV3Q2hpbGQoJ2ZlYXR1cmVVcGRhdG9yJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHVwZGF0b3I6IEZlYXR1cmVVcGRhdG9yQ29tcG9uZW50O1xuXG4gIG1vZGVscyQ6IE9ic2VydmFibGU8RW50aXR5W10+O1xuICBmZWF0dXJlcyQ6IE9ic2VydmFibGU8RmVhdHVyZVtdPjtcbiAgb3B0aW9uczoge307XG5cbiAgc2VsZWN0ZWRGZWF0dXJlOiBFbnRpdHk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RlbHNNYW5hZ2VtZW50U3RvcmU6IFN0b3JlPE1vZGVsc1N0YXRlPixcbiAgICAvLyBwcml2YXRlIGZlYXR1cmVzTWFuYWdlbWVudDogU3RvcmU8RmVhdHVyZXNTdGF0ZT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgLyogdGhpcy5mZWF0dXJlcyQgPSB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudC5zZWxlY3QoZ2V0RmVhdHVyZXNBc0RhdGEpO1xuICAgIHRoaXMubW9kZWxzJCA9IHRoaXMubW9kZWxzTWFuYWdlbWVudFN0b3JlLnNlbGVjdChnZXRBbGxNb2RlbHMpLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmZlYXR1cmVzJCwgKGVudGl0aWVzLCBmZWF0dXJlcykgPT4gKHtcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICAgIGZlYXR1cmVzXG4gICAgICB9KSksXG4gICAgICBtYXAoKHsgZW50aXRpZXMsIGZlYXR1cmVzIH0pID0+IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXNOYW1lcyA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+XG4gICAgICAgICAgZmVhdHVyZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihcbiAgICAgICAgICBlbnRpdHkgPT4gIWZlYXR1cmVzTmFtZXMuaW5jbHVkZXMoZW50aXR5Lm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTsqL1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2VsZWN0RmVhdHVyZSgpO1xuICB9XG5cbiAgc2VsZWN0RmVhdHVyZSgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZlYXR1cmUpIHtcbiAgICAgIHRoaXMudXBkYXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgZmVhdHVyZU5hbWU6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUubmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUubmFtZS5zbGljZSgxKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=