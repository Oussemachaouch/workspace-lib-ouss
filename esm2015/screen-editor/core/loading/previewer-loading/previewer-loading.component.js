/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
// import { PreviewerState, isLoading } from '../../../components/preview/ngrx';
/**
 * Loader Component to show a spinner when the state's show equals to true
 *
 */
export class PreviewerLoadingComponent {
    //  constructor(private previewerManagement: Store<PreviewerState>) {}
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //  this.loading$ = this.previewerManagement.select(isLoading);
    }
}
PreviewerLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-previewer-loading',
                template: "<div class=\"previewer-loader-mask\" *ngIf=\"loading$ | async\">\n  <div class=\"loader\">\n    <p-progressSpinner\n      [style]=\"{ width: '70px', height: '70px' }\"\n      strokeWidth=\"6\"\n      fill=\"transparent\"\n      animationDuration=\".5s\"\n    ></p-progressSpinner>\n  </div>\n</div>\n",
                styles: [".previewer-loader-mask{position:absolute;width:100%;height:100%;z-index:999;display:-webkit-box;display:flex;top:0;background:rgba(102,102,102,.2)}.loader{width:auto;margin:auto}@-webkit-keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}@keyframes ui-progress-spinner-color{0%,100%{stroke:#c6c6c6}40%{stroke:#4caf50}66%{stroke:#313439}80%,90%{stroke:#d63431}}"]
            }] }
];
/** @nocollapse */
PreviewerLoadingComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    PreviewerLoadingComponent.prototype.loading$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlld2VyLWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb3JlL2xvYWRpbmcvcHJldmlld2VyLWxvYWRpbmcvcHJldmlld2VyLWxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQVdsRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8seUJBQXlCOztJQUlwQztJQUNBLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ1IsK0RBQStEO0lBQy9ELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsd1RBQWlEOzthQUVsRDs7Ozs7O0lBTUMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vLyBpbXBvcnQgeyBQcmV2aWV3ZXJTdGF0ZSwgaXNMb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wcmV2aWV3L25ncngnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1wcmV2aWV3ZXItbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmV2aWV3ZXItbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ByZXZpZXdlci1sb2FkaW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbi8qKlxuICogTG9hZGVyIENvbXBvbmVudCB0byBzaG93IGEgc3Bpbm5lciB3aGVuIHRoZSBzdGF0ZSdzIHNob3cgZXF1YWxzIHRvIHRydWVcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV2aWV3ZXJMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbi8vICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZXZpZXdlck1hbmFnZW1lbnQ6IFN0b3JlPFByZXZpZXdlclN0YXRlPikge31cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gIC8vICB0aGlzLmxvYWRpbmckID0gdGhpcy5wcmV2aWV3ZXJNYW5hZ2VtZW50LnNlbGVjdChpc0xvYWRpbmcpO1xuICB9XG59XG4iXX0=