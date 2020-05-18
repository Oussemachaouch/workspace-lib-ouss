/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DialogHostDirective } from './dialog-host/dialog-host.directive';
import { DialogService } from './dialog.service';
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogService, componentFactoryResolver) {
        this.dialogService = dialogService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dialogService$ = this.dialogService.content().subscribe((/**
         * @param {?} cmp
         * @return {?}
         */
        function (cmp) {
            if (cmp !== undefined) {
                /** @type {?} */
                var viewContainerRef = _this.dialogHost.viewContainerRef;
                viewContainerRef.clear();
                /** @type {?} */
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(cmp.type);
                /** @type {?} */
                var componentRef = viewContainerRef.createComponent(componentFactory);
                ((/** @type {?} */ (componentRef.instance))).setOptions(cmp.data);
                componentRef.changeDetectorRef.detectChanges();
                _this.title = cmp.title || componentRef.instance['title'];
                _this.showDialog = true;
            }
            else {
                _this.showDialog = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.hideDialog = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewContainerRef = this.dialogHost.viewContainerRef;
        viewContainerRef.clear();
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dialogService$) {
            this.dialogService$.unsubscribe();
        }
    };
    DialogComponent.decorators = [
        { type: Component, args: [{ selector: 'sc-dialog', template: "<!--<p-dialog\n[modal]=\"true\"\n[header]=\"title\"\n[(visible)]=\"showDialog\"\n(onHide)=\"hideDialog()\"\n[width]=\"800\"\npositionTop=\"50\"\nclosable=\"true\">\n<ng-template dialog-host></ng-template>\n</p-dialog>-->\n" }] }
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: DialogService },
        { type: ComponentFactoryResolver }
    ]; };
    DialogComponent.propDecorators = {
        dialogHost: [{ type: ViewChild, args: [DialogHostDirective, { static: false },] }]
    };
    return DialogComponent;
}());
export { DialogComponent };
if (false) {
    /** @type {?} */
    DialogComponent.prototype.dialogHost;
    /** @type {?} */
    DialogComponent.prototype.showDialog;
    /** @type {?} */
    DialogComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.dialogService$;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.dialogService;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1Qsd0JBQXdCLEVBR3pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQVVFLHlCQUNVLGFBQTRCLEVBQzVCLHdCQUFrRDtRQURsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3pELENBQUM7Ozs7SUFFSixrQ0FBUTs7O0lBQVI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDOUQsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFOztvQkFDZixnQkFBZ0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtnQkFDekQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O29CQUNuQixnQkFBZ0IsR0FBRyxLQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQ1Q7O29CQUNLLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZFLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekQsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7O1lBQ1EsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0I7UUFDekQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Z0JBM0NGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsME9BQXNDLEVBQUU7Ozs7Z0JBSG5FLGFBQWE7Z0JBUHBCLHdCQUF3Qjs7OzZCQVl2QixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTBDbkQsc0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTNDWSxlQUFlOzs7SUFDMUIscUNBQ2dDOztJQUVoQyxxQ0FBb0I7O0lBQ3BCLGdDQUFjOzs7OztJQUVkLHlDQUFxQzs7Ozs7SUFHbkMsd0NBQW9DOzs7OztJQUNwQyxtREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEaWFsb2dIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaWFsb2ctaG9zdC9kaWFsb2ctaG9zdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29yZS9kaWFsb2cvZGlhbG9nJztcblxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiAnc2MtZGlhbG9nJywgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcgfSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoRGlhbG9nSG9zdERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGRpYWxvZ0hvc3Q6IERpYWxvZ0hvc3REaXJlY3RpdmU7XG5cbiAgc2hvd0RpYWxvZzogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcblxuICBwcml2YXRlIGRpYWxvZ1NlcnZpY2UkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZSQgPSB0aGlzLmRpYWxvZ1NlcnZpY2UuY29udGVudCgpLnN1YnNjcmliZShjbXAgPT4ge1xuICAgICAgaWYgKGNtcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmRpYWxvZ0hvc3Qudmlld0NvbnRhaW5lclJlZjtcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgICAgY21wLnR5cGVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgRGlhbG9nKS5zZXRPcHRpb25zKGNtcC5kYXRhKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IGNtcC50aXRsZSB8fCBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ3RpdGxlJ107XG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZGlhbG9nSG9zdC52aWV3Q29udGFpbmVyUmVmO1xuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmRpYWxvZ1NlcnZpY2UkKSB7XG4gICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=