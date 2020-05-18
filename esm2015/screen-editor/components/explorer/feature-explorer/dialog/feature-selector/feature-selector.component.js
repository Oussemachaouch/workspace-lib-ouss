/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dialog } from '../../../../../core/dialog/dialog';
import { FeatureUpdatorComponent } from '../feature-updator/feature-updator.component';
export class FeatureSelectorComponent extends Dialog {
    /**
     * @param {?} modelsManagementStore
     */
    constructor(modelsManagementStore) {
        super();
        this.modelsManagementStore = modelsManagementStore;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.selectFeature();
    }
    /**
     * @return {?}
     */
    selectFeature() {
        if (this.selectedFeature) {
            this.updator.setOptions({
                featureName: this.selectedFeature.name.charAt(0).toLowerCase() +
                    this.selectedFeature.name.slice(1)
            });
        }
    }
}
FeatureSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-selector',
                template: "<div style=\"height: 50vh;\">\n<!--  <label for=\"models\">Choose a feature: </label>-->\n  <p-dropdown\n    #featureInput=\"ngModel\"\n    [options]=\"models$ | async\"\n    optionLabel=\"name\"\n    [(ngModel)]=\"selectedFeature\"\n    (onChange)=\"selectFeature()\"\n    filter=\"true\"\n    filterPlaceholder=\"Search feature\"\n    placeholder=\"Select a feature\"\n    required=\"true\"\n  >\n  </p-dropdown>\n  <sc-feature-updator #featureUpdator></sc-feature-updator>\n</div>\n",
                styles: [".ui-dialog .apply-button .ui-button{background:#e4e4e4;color:#5cb85c}"]
            }] }
];
/** @nocollapse */
FeatureSelectorComponent.ctorParameters = () => [
    { type: Store }
];
FeatureSelectorComponent.propDecorators = {
    feature: [{ type: ViewChild, args: ['featureInput', { static: false },] }],
    updator: [{ type: ViewChild, args: ['featureUpdator', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZmVhdHVyZS1leHBsb3Jlci9kaWFsb2cvZmVhdHVyZS1zZWxlY3Rvci9mZWF0dXJlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBUXZGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxNQUFNOzs7O0lBWWxELFlBQ1UscUJBQXlDO1FBR2pELEtBQUssRUFBRSxDQUFDO1FBSEEsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFvQjtJQUluRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQOzs7Ozs7Ozs7Ozs7OzthQWNLO0lBQ04sQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RCLFdBQVcsRUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO29CQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3JDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixpZkFBZ0Q7O2FBRWpEOzs7O1lBZFEsS0FBSzs7O3NCQWlCWCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtzQkFDM0MsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUQ5QywyQ0FBc0Q7O0lBQ3RELDJDQUNpQzs7SUFFakMsMkNBQThCOztJQUM5Qiw2Q0FBaUM7O0lBQ2pDLDJDQUFZOztJQUVaLG1EQUF3Qjs7Ozs7SUFHdEIseURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB3aXRoTGF0ZXN0RnJvbSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlLCBFbnRpdHkgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcblxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kaWFsb2cvZGlhbG9nJztcbmltcG9ydCB7IEZlYXR1cmVVcGRhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS11cGRhdG9yL2ZlYXR1cmUtdXBkYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kZWxzU3RhdGUsIGdldEFsbE1vZGVscyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvbmdyeC9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1mZWF0dXJlLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWF0dXJlLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdmZWF0dXJlSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmVhdHVyZTtcbiAgQFZpZXdDaGlsZCgnZmVhdHVyZVVwZGF0b3InLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgdXBkYXRvcjogRmVhdHVyZVVwZGF0b3JDb21wb25lbnQ7XG5cbiAgbW9kZWxzJDogT2JzZXJ2YWJsZTxFbnRpdHlbXT47XG4gIGZlYXR1cmVzJDogT2JzZXJ2YWJsZTxGZWF0dXJlW10+O1xuICBvcHRpb25zOiB7fTtcblxuICBzZWxlY3RlZEZlYXR1cmU6IEVudGl0eTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGVsc01hbmFnZW1lbnRTdG9yZTogU3RvcmU8TW9kZWxzU3RhdGU+LFxuICAgIC8vIHByaXZhdGUgZmVhdHVyZXNNYW5hZ2VtZW50OiBTdG9yZTxGZWF0dXJlc1N0YXRlPlxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAvKiB0aGlzLmZlYXR1cmVzJCA9IHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LnNlbGVjdChnZXRGZWF0dXJlc0FzRGF0YSk7XG4gICAgdGhpcy5tb2RlbHMkID0gdGhpcy5tb2RlbHNNYW5hZ2VtZW50U3RvcmUuc2VsZWN0KGdldEFsbE1vZGVscykucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuZmVhdHVyZXMkLCAoZW50aXRpZXMsIGZlYXR1cmVzKSA9PiAoe1xuICAgICAgICBlbnRpdGllcyxcbiAgICAgICAgZmVhdHVyZXNcbiAgICAgIH0pKSxcbiAgICAgIG1hcCgoeyBlbnRpdGllcywgZmVhdHVyZXMgfSkgPT4ge1xuICAgICAgICBjb25zdCBmZWF0dXJlc05hbWVzID0gZmVhdHVyZXMubWFwKGZlYXR1cmUgPT5cbiAgICAgICAgICBmZWF0dXJlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW50aXRpZXMuZmlsdGVyKFxuICAgICAgICAgIGVudGl0eSA9PiAhZmVhdHVyZXNOYW1lcy5pbmNsdWRlcyhlbnRpdHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApOyovXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RGZWF0dXJlKCk7XG4gIH1cblxuICBzZWxlY3RGZWF0dXJlKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgdGhpcy51cGRhdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICBmZWF0dXJlTmFtZTpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZS5uYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZS5uYW1lLnNsaWNlKDEpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==