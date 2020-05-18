/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { Dialog, ScreenValidationService, DialogService } from '../../../../../core';
var ScreenClonerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ScreenClonerComponent, _super);
    function ScreenClonerComponent(screenValidation, dialogService) {
        var _this = _super.call(this) || this;
        _this.screenValidation = screenValidation;
        _this.dialogService = dialogService;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    ScreenClonerComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.screenToClone = options.screenName;
        this.featureName = options.featureName;
        this.screenName = options.screenName + "0001";
    };
    /**
     * @return {?}
     */
    ScreenClonerComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
    };
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
    ScreenClonerComponent.prototype.cancel = /*apply(): void {
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
    function () {
        this.dialogService.closeDialog();
    };
    /**
     * @return {?}
     */
    ScreenClonerComponent.prototype.disableApplyButton = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @return {?}
     */
    ScreenClonerComponent.prototype.inValidScreen = /**
     * @return {?}
     */
    function () {
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
    };
    ScreenClonerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-feature-cloner',
                    template: "<div class=\"cloner\">\n  <div class=\"cloner-content\">\n    Please provide a name to the new screen\n    <input\n      type=\"text\"\n      pInputText\n      [(ngModel)]=\"screenName\"\n      [ngClass]=\"{\n        'invalid-screen-name': inValidScreen() | async\n      }\"\n      [pTooltip]=\"inValidScreen() | async\"\n    />\n  </div>\n</div>\n<div class=\"buttons\">\n  <p-button\n    (onClick)=\"apply()\"\n    class=\"apply-button\"\n    icon=\"fa fa-fw fa-check\"\n    label=\"Apply\"\n    [disabled]=\"inValidScreen() | async\"\n  >\n  </p-button>\n  <p-button\n    (onClick)=\"cancel()\"\n    class=\"cancel-button\"\n    icon=\"fa fa-fw fa-times\"\n    label=\"Cancel\"\n  >\n  </p-button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host .cloner{height:100px}:host ::ng-deep .apply-button span{background:#e4e4e4;color:#5cb85c}:host ::ng-deep .cancel-button span{color:#d83431}:host .cloner-content{margin:30px}.buttons{float:right}.invalid-screen-name{background:#db7093;border:0}"]
                }] }
    ];
    /** @nocollapse */
    ScreenClonerComponent.ctorParameters = function () { return [
        { type: ScreenValidationService },
        { type: DialogService }
    ]; };
    ScreenClonerComponent.propDecorators = {
        setOptions: [{ type: Input }]
    };
    return ScreenClonerComponent;
}(Dialog));
export { ScreenClonerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWNsb25lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZmVhdHVyZS1leHBsb3Jlci9kaWFsb2cvc2NyZWVuLWNsb25lci9zY3JlZW4tY2xvbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsYUFBYSxFQUNkLE1BQU0scUJBQXFCLENBQUM7QUFFN0I7SUFNMkMsaURBQU07SUFZL0MsK0JBQ1UsZ0JBQXlDLEVBQ3pDLGFBQTRCO1FBRnRDLFlBS0UsaUJBQU8sU0FDUjtRQUxTLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBSXRDLENBQUM7Ozs7O0lBWkQsMENBQVU7Ozs7SUFEVixVQUNXLE9BQW9EO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBTSxPQUFPLENBQUMsVUFBVSxTQUFNLENBQUM7SUFDaEQsQ0FBQzs7OztJQVNELHFDQUFLOzs7SUFBTDtJQUVBLENBQUM7SUFDRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsc0NBQU07Ozs7Ozs7Ozs7Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGtEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkk7UUFDSCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isa3RCQUE2QztvQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUQyx1QkFBdUI7Z0JBQ3ZCLGFBQWE7Ozs2QkFjWixLQUFLOztJQTBEUiw0QkFBQztDQUFBLEFBckVELENBTTJDLE1BQU0sR0ErRGhEO1NBL0RZLHFCQUFxQjs7O0lBQ2hDLDJDQUFtQjs7Ozs7SUFDbkIsOENBQThCOzs7OztJQUM5Qiw0Q0FBNEI7Ozs7O0lBVTFCLGlEQUFpRDs7Ozs7SUFDakQsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBTY3JlZW5WYWxpZGF0aW9uU2VydmljZSxcbiAgRGlhbG9nU2VydmljZVxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2MtZmVhdHVyZS1jbG9uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NyZWVuLWNsb25lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjcmVlbi1jbG9uZXIuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTY3JlZW5DbG9uZXJDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2cge1xuICBzY3JlZW5OYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgc2NyZWVuVG9DbG9uZTogc3RyaW5nO1xuICBwcml2YXRlIGZlYXR1cmVOYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiB7IGZlYXR1cmVOYW1lOiBzdHJpbmc7IHNjcmVlbk5hbWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5zY3JlZW5Ub0Nsb25lID0gb3B0aW9ucy5zY3JlZW5OYW1lO1xuICAgIHRoaXMuZmVhdHVyZU5hbWUgPSBvcHRpb25zLmZlYXR1cmVOYW1lO1xuICAgIHRoaXMuc2NyZWVuTmFtZSA9IGAke29wdGlvbnMuc2NyZWVuTmFtZX0wMDAxYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2NyZWVuVmFsaWRhdGlvbjogU2NyZWVuVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxuICAgIC8vIHByaXZhdGUgZmVhdHVyZXNNYW5hZ2VtZW50OiBTdG9yZTxGZWF0dXJlc1N0YXRlPlxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGFwcGx5KCl7XG5cbiAgfVxuICAvKmFwcGx5KCk6IHZvaWQge1xuICAgIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgY2xvbmVTY3JlZW4oe1xuICAgICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlTmFtZSxcbiAgICAgICAgc2NyZWVuTmFtZTogdGhpcy5zY3JlZW5OYW1lLFxuICAgICAgICBjbG9uZWRTY3JlZW5OYW1lOiB0aGlzLnNjcmVlblRvQ2xvbmVcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2VEaWFsb2coKTtcbiAgfSovXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2VEaWFsb2coKTtcbiAgfVxuXG4gIGRpc2FibGVBcHBseUJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpblZhbGlkU2NyZWVuKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAvKiBpZiAodGhpcy5zY3JlZW5OYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlc01hbmFnZW1lbnRcbiAgICAgICAgLnNlbGVjdChnZXRTY3JlZW5zTmFtZVRvRGlzcGxheUJ5RmVhdHVyZSwge1xuICAgICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChzY3JlZW5zTmFtZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHRoaXMuc2NyZWVuVmFsaWRhdGlvbi52YWxpZGF0ZVNjcmVlbnNOYW1lcyhcbiAgICAgICAgICAgICAgW10uY29uY2F0KHNjcmVlbnNOYW1lcywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXllZDogdGhpcy5zY3JlZW5OYW1lLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc2NyZWVuTmFtZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHRbdGhpcy5zY3JlZW5OYW1lXSAmJlxuICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0W3RoaXMuc2NyZWVuTmFtZV0uZXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9Ki9cbiAgICByZXR1cm4gb2YoJ1RoZSBzY3JlZW4gbmFtZSBpcyBtYW5kYXRvcnknKTtcbiAgfVxufVxuIl19