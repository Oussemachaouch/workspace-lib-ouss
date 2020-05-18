/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
// import { PreviewerState, isLoading } from '../../../components/preview/ngrx';
var PreviewerLoadingComponent = /** @class */ (function () {
    //  constructor(private previewerManagement: Store<PreviewerState>) {}
    function PreviewerLoadingComponent() {
    }
    /**
     * @return {?}
     */
    PreviewerLoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //  this.loading$ = this.previewerManagement.select(isLoading);
    };
    PreviewerLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-previewer-loading',
                    template: "<div class=\"previewer-loader-mask\" *ngIf=\"loading$ | async\">\n  <div class=\"loader\">\n    <p-progressSpinner\n      [style]=\"{ width: '70px', height: '70px' }\"\n      strokeWidth=\"6\"\n      fill=\"transparent\"\n      animationDuration=\".5s\"\n    ></p-progressSpinner>\n  </div>\n</div>\n",
                    styles: [".previewer-loader-mask{position:absolute;width:100%;height:100%;z-index:999;display:-webkit-box;display:flex;top:0;background:rgba(102,102,102,.2)}.loader{width:auto;margin:auto}@-webkit-keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}@keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}"]
                }] }
    ];
    /** @nocollapse */
    PreviewerLoadingComponent.ctorParameters = function () { return []; };
    return PreviewerLoadingComponent;
}());
export { PreviewerLoadingComponent };
if (false) {
    /** @type {?} */
    PreviewerLoadingComponent.prototype.loading$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlld2VyLWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb3JlL2xvYWRpbmcvcHJldmlld2VyLWxvYWRpbmcvcHJldmlld2VyLWxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQU1sRDtJQVlBLHNFQUFzRTtJQUNwRTtJQUNBLENBQUM7Ozs7SUFDRCw0Q0FBUTs7O0lBQVI7UUFDQSwrREFBK0Q7SUFDL0QsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3VEFBaUQ7O2lCQUVsRDs7OztJQWNELGdDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FUWSx5QkFBeUI7OztJQUNwQyw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8vIGltcG9ydCB7IFByZXZpZXdlclN0YXRlLCBpc0xvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3ByZXZpZXcvbmdyeCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXByZXZpZXdlci1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXdlci1sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJldmlld2VyLWxvYWRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuLyoqXG4gKiBMb2FkZXIgQ29tcG9uZW50IHRvIHNob3cgYSBzcGlubmVyIHdoZW4gdGhlIHN0YXRlJ3Mgc2hvdyBlcXVhbHMgdG8gdHJ1ZVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXZpZXdlckxvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuLy8gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJldmlld2VyTWFuYWdlbWVudDogU3RvcmU8UHJldmlld2VyU3RhdGU+KSB7fVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgLy8gIHRoaXMubG9hZGluZyQgPSB0aGlzLnByZXZpZXdlck1hbmFnZW1lbnQuc2VsZWN0KGlzTG9hZGluZyk7XG4gIH1cbn1cbiJdfQ==