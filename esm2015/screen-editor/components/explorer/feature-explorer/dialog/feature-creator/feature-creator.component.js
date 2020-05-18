/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { Dialog } from '../../../../../core';
import * as _ from 'lodash';
export class FeatureCreatorComponent extends Dialog {
    constructor() {
        super();
        this.featureAdded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /* this.featuresManagement.select(getFeatures).subscribe(features => {
           this.features = features;
         });*/
    }
    /**
     * @param {?} form
     * @return {?}
     */
    submit(form) {
        this.feature = _.lowerFirst(this.feature);
        if (form.valid &&
            !Object.keys(this.features).find((/**
             * @param {?} name
             * @return {?}
             */
            name => name === this.feature))) {
            this.featureAdded.emit(this.feature);
            /* this.featuresManagement.dispatch(
               addFeature({
                 feature: { name: this.feature, screenscount: 0 }
               })
             );*/
            this.feature = undefined;
        }
    }
}
FeatureCreatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-creator',
                template: "<div class=\"feature-creator\">\n  <form name=\"form\" #frm=\"ngForm\">\n    <label>Feature name:</label>\n    <div class=\"input-container\">\n      <input type=\"text\" pInputText [(ngModel)]=\"feature\" required pattern=\"^[a-zA-Z][a-zA-Z_$0-9-]*$\"\n        name=\"featureName\" placeholder=\"eg. customer-management\" #featureName=\"ngModel\" />\n      <i class=\"fas fa-exclamation error-mark\" *ngIf=\"frm.submitted && featureName.invalid\" tooltipPosition=\"bottom\"\n        [pTooltip]=\"featureName.errors.required ? 'Feature name is required' : 'Feature name should be in Kebab Case'\"></i>\n      <button pButton type=\"submit\" label=\"Add\" class=\"add-button\" (click)=\"submit(frm)\"></button>\n    </div>\n  </form>\n</div>",
                styles: [".feature-creator .input-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.feature-creator .input-container .error-mark{color:#d84315;padding:0 7px;margin-right:-9px}.feature-creator .input-container input.ng-touched.ng-invalid{border-color:#d84315}.feature-creator .input-container .add-button{background-color:#4caf50;color:#fff;margin-left:10px}"]
            }] }
];
/** @nocollapse */
FeatureCreatorComponent.ctorParameters = () => [];
FeatureCreatorComponent.propDecorators = {
    featureAdded: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FeatureCreatorComponent.prototype.featureAdded;
    /** @type {?} */
    FeatureCreatorComponent.prototype.features;
    /** @type {?} */
    FeatureCreatorComponent.prototype.feature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jcmVhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy9leHBsb3Jlci9mZWF0dXJlLWV4cGxvcmVyL2RpYWxvZy9mZWF0dXJlLWNyZWF0b3IvZmVhdHVyZS1jcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUc3QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQU81QixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsTUFBTTtJQUtqRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSlYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBSzFDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1A7O2NBRU07SUFDUCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFDRSxJQUFJLENBQUMsS0FBSztZQUNWLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFDL0Q7WUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEM7Ozs7aUJBSUs7WUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsZ3ZCQUErQzs7YUFFaEQ7Ozs7OzJCQUVFLE1BQU07Ozs7SUFBUCwrQ0FDMEM7O0lBQzFDLDJDQUFTOztJQUNULDBDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2MtZmVhdHVyZS1jcmVhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUtY3JlYXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZlYXR1cmUtY3JlYXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDcmVhdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpXG4gIGZlYXR1cmVBZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBmZWF0dXJlcztcbiAgZmVhdHVyZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAvKiB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudC5zZWxlY3QoZ2V0RmVhdHVyZXMpLnN1YnNjcmliZShmZWF0dXJlcyA9PiB7XG4gICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZXM7XG4gICAgfSk7Ki9cbiAgfVxuXG4gIHN1Ym1pdChmb3JtOiBOZ0Zvcm0pIHtcbiAgICB0aGlzLmZlYXR1cmUgPSBfLmxvd2VyRmlyc3QodGhpcy5mZWF0dXJlKTtcbiAgICBpZiAoXG4gICAgICBmb3JtLnZhbGlkICYmXG4gICAgICAhT2JqZWN0LmtleXModGhpcy5mZWF0dXJlcykuZmluZChuYW1lID0+IG5hbWUgPT09IHRoaXMuZmVhdHVyZSlcbiAgICApIHtcbiAgICAgIHRoaXMuZmVhdHVyZUFkZGVkLmVtaXQodGhpcy5mZWF0dXJlKTtcbiAgICAgLyogdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICAgIGFkZEZlYXR1cmUoe1xuICAgICAgICAgIGZlYXR1cmU6IHsgbmFtZTogdGhpcy5mZWF0dXJlLCBzY3JlZW5zY291bnQ6IDAgfVxuICAgICAgICB9KVxuICAgICAgKTsqL1xuICAgICAgdGhpcy5mZWF0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19