/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { Dialog, ScreenValidationService, DialogService } from '../../../../../core';
export class ScreenClonerComponent extends Dialog {
    /**
     * @param {?} screenValidation
     * @param {?} dialogService
     */
    constructor(screenValidation, dialogService) {
        super();
        this.screenValidation = screenValidation;
        this.dialogService = dialogService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.screenToClone = options.screenName;
        this.featureName = options.featureName;
        this.screenName = `${options.screenName}0001`;
    }
    /**
     * @return {?}
     */
    apply() {
    }
    /*apply(): void {
        this.featuresManagement.dispatch(
          cloneScreen({
            featureName: this.featureName,
            screenName: this.screenName,
            clonedScreenName: this.screenToClone
          })
        );
        this.dialogService.closeDialog();
      }*/
    /**
     * @return {?}
     */
    cancel() {
        this.dialogService.closeDialog();
    }
    /**
     * @return {?}
     */
    disableApplyButton() {
        return false;
    }
    /**
     * @return {?}
     */
    inValidScreen() {
        /* if (this.screenName) {
           return this.featuresManagement
             .select(getScreensNameToDisplayByFeature, {
               featureName: this.featureName
             })
             .pipe(
               map(screensNames => {
                 const validationResult = this.screenValidation.validateScreensNames(
                   [].concat(screensNames, {
                     displayed: this.screenName,
                     name: this.screenName
                   })
                 );
                 return (
                   validationResult[this.screenName] &&
                   validationResult[this.screenName].error
                 );
               })
             );
         }*/
        return of('The screen name is mandatory');
    }
}
ScreenClonerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-cloner',
                template: "<div class=\"cloner\">\n  <div class=\"cloner-content\">\n    Please provide a name to the new screen\n    <input\n      type=\"text\"\n      pInputText\n      [(ngModel)]=\"screenName\"\n      [ngClass]=\"{\n        'invalid-screen-name': inValidScreen() | async\n      }\"\n      [pTooltip]=\"inValidScreen() | async\"\n    />\n  </div>\n</div>\n<div class=\"buttons\">\n  <p-button\n    (onClick)=\"apply()\"\n    class=\"apply-button\"\n    icon=\"fa fa-fw fa-check\"\n    label=\"Apply\"\n    [disabled]=\"inValidScreen() | async\"\n  >\n  </p-button>\n  <p-button\n    (onClick)=\"cancel()\"\n    class=\"cancel-button\"\n    icon=\"fa fa-fw fa-times\"\n    label=\"Cancel\"\n  >\n  </p-button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .cloner{height:100px}:host ::ng-deep .apply-button span{background:#e4e4e4;color:#5cb85c}:host ::ng-deep .cancel-button span{color:#d83431}:host .cloner-content{margin:30px}.buttons{float:right}.invalid-screen-name{background:#db7093;border:0}"]
            }] }
];
/** @nocollapse */
ScreenClonerComponent.ctorParameters = () => [
    { type: ScreenValidationService },
    { type: DialogService }
];
ScreenClonerComponent.propDecorators = {
    setOptions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ScreenClonerComponent.prototype.screenName;
    /**
     * @type {?}
     * @private
     */
    ScreenClonerComponent.prototype.screenToClone;
    /**
     * @type {?}
     * @private
     */
    ScreenClonerComponent.prototype.featureName;
    /**
     * @type {?}
     * @private
     */
    ScreenClonerComponent.prototype.screenValidation;
    /**
     * @type {?}
     * @private
     */
    ScreenClonerComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWNsb25lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZmVhdHVyZS1leHBsb3Jlci9kaWFsb2cvc2NyZWVuLWNsb25lci9zY3JlZW4tY2xvbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLHVCQUF1QixFQUN2QixhQUFhLEVBQ2QsTUFBTSxxQkFBcUIsQ0FBQztBQVE3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsTUFBTTs7Ozs7SUFZL0MsWUFDVSxnQkFBeUMsRUFDekMsYUFBNEI7UUFHcEMsS0FBSyxFQUFFLENBQUM7UUFKQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBSXRDLENBQUM7Ozs7O0lBWkQsVUFBVSxDQUFDLE9BQW9EO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLE1BQU0sQ0FBQztJQUNoRCxDQUFDOzs7O0lBU0QsS0FBSztJQUVMLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBV0QsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkk7UUFDSCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isa3RCQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVEMsdUJBQXVCO1lBQ3ZCLGFBQWE7Ozt5QkFjWixLQUFLOzs7O0lBSk4sMkNBQW1COzs7OztJQUNuQiw4Q0FBOEI7Ozs7O0lBQzlCLDRDQUE0Qjs7Ozs7SUFVMUIsaURBQWlEOzs7OztJQUNqRCw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEaWFsb2csXG4gIFNjcmVlblZhbGlkYXRpb25TZXJ2aWNlLFxuICBEaWFsb2dTZXJ2aWNlXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1mZWF0dXJlLWNsb25lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY3JlZW4tY2xvbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NyZWVuLWNsb25lci5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNjcmVlbkNsb25lckNvbXBvbmVudCBleHRlbmRzIERpYWxvZyB7XG4gIHNjcmVlbk5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBzY3JlZW5Ub0Nsb25lOiBzdHJpbmc7XG4gIHByaXZhdGUgZmVhdHVyZU5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXRPcHRpb25zKG9wdGlvbnM6IHsgZmVhdHVyZU5hbWU6IHN0cmluZzsgc2NyZWVuTmFtZTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNjcmVlblRvQ2xvbmUgPSBvcHRpb25zLnNjcmVlbk5hbWU7XG4gICAgdGhpcy5mZWF0dXJlTmFtZSA9IG9wdGlvbnMuZmVhdHVyZU5hbWU7XG4gICAgdGhpcy5zY3JlZW5OYW1lID0gYCR7b3B0aW9ucy5zY3JlZW5OYW1lfTAwMDFgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY3JlZW5WYWxpZGF0aW9uOiBTY3JlZW5WYWxpZGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXG4gICAgLy8gcHJpdmF0ZSBmZWF0dXJlc01hbmFnZW1lbnQ6IFN0b3JlPEZlYXR1cmVzU3RhdGU+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYXBwbHkoKXtcblxuICB9XG4gIC8qYXBwbHkoKTogdm9pZCB7XG4gICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICBjbG9uZVNjcmVlbih7XG4gICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lLFxuICAgICAgICBzY3JlZW5OYW1lOiB0aGlzLnNjcmVlbk5hbWUsXG4gICAgICAgIGNsb25lZFNjcmVlbk5hbWU6IHRoaXMuc2NyZWVuVG9DbG9uZVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZURpYWxvZygpO1xuICB9Ki9cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZURpYWxvZygpO1xuICB9XG5cbiAgZGlzYWJsZUFwcGx5QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGluVmFsaWRTY3JlZW4oKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgIC8qIGlmICh0aGlzLnNjcmVlbk5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudFxuICAgICAgICAuc2VsZWN0KGdldFNjcmVlbnNOYW1lVG9EaXNwbGF5QnlGZWF0dXJlLCB7XG4gICAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWVcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHNjcmVlbnNOYW1lcyA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdGhpcy5zY3JlZW5WYWxpZGF0aW9uLnZhbGlkYXRlU2NyZWVuc05hbWVzKFxuICAgICAgICAgICAgICBbXS5jb25jYXQoc2NyZWVuc05hbWVzLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheWVkOiB0aGlzLnNjcmVlbk5hbWUsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zY3JlZW5OYW1lXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdFt0aGlzLnNjcmVlbk5hbWVdICYmXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHRbdGhpcy5zY3JlZW5OYW1lXS5lcnJvclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0qL1xuICAgIHJldHVybiBvZignVGhlIHNjcmVlbiBuYW1lIGlzIG1hbmRhdG9yeScpO1xuICB9XG59XG4iXX0=