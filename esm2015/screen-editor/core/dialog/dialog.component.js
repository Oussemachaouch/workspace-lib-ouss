/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DialogHostDirective } from './dialog-host/dialog-host.directive';
import { DialogService } from './dialog.service';
export class DialogComponent {
    /**
     * @param {?} dialogService
     * @param {?} componentFactoryResolver
     */
    constructor(dialogService, componentFactoryResolver) {
        this.dialogService = dialogService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dialogService$ = this.dialogService.content().subscribe((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => {
            if (cmp !== undefined) {
                /** @type {?} */
                const viewContainerRef = this.dialogHost.viewContainerRef;
                viewContainerRef.clear();
                /** @type {?} */
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cmp.type);
                /** @type {?} */
                const componentRef = viewContainerRef.createComponent(componentFactory);
                ((/** @type {?} */ (componentRef.instance))).setOptions(cmp.data);
                componentRef.changeDetectorRef.detectChanges();
                this.title = cmp.title || componentRef.instance['title'];
                this.showDialog = true;
            }
            else {
                this.showDialog = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    hideDialog() {
        /** @type {?} */
        const viewContainerRef = this.dialogHost.viewContainerRef;
        viewContainerRef.clear();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dialogService$) {
            this.dialogService$.unsubscribe();
        }
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{ selector: 'sc-dialog', template: "<!--<p-dialog\n[modal]=\"true\"\n[header]=\"title\"\n[(visible)]=\"showDialog\"\n(onHide)=\"hideDialog()\"\n[width]=\"800\"\npositionTop=\"50\"\nclosable=\"true\">\n<ng-template dialog-host></ng-template>\n</p-dialog>-->\n" }] }
];
/** @nocollapse */
DialogComponent.ctorParameters = () => [
    { type: DialogService },
    { type: ComponentFactoryResolver }
];
DialogComponent.propDecorators = {
    dialogHost: [{ type: ViewChild, args: [DialogHostDirective, { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1Qsd0JBQXdCLEVBR3pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFTMUIsWUFDVSxhQUE0QixFQUM1Qix3QkFBa0Q7UUFEbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUN6RCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakUsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFOztzQkFDZixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtnQkFDekQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O3NCQUNuQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQ1Q7O3NCQUNLLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZFLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCO1FBQ3pELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSwwT0FBc0MsRUFBRTs7OztZQUhuRSxhQUFhO1lBUHBCLHdCQUF3Qjs7O3lCQVl2QixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBQWpELHFDQUNnQzs7SUFFaEMscUNBQW9COztJQUNwQixnQ0FBYzs7Ozs7SUFFZCx5Q0FBcUM7Ozs7O0lBR25DLHdDQUFvQzs7Ozs7SUFDcEMsbURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGlhbG9nSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlhbG9nLWhvc3QvZGlhbG9nLWhvc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uLy4uL2NvcmUvZGlhbG9nL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogJ3NjLWRpYWxvZycsIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnIH0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKERpYWxvZ0hvc3REaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBkaWFsb2dIb3N0OiBEaWFsb2dIb3N0RGlyZWN0aXZlO1xuXG4gIHNob3dEaWFsb2c6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UkID0gdGhpcy5kaWFsb2dTZXJ2aWNlLmNvbnRlbnQoKS5zdWJzY3JpYmUoY21wID0+IHtcbiAgICAgIGlmIChjbXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5kaWFsb2dIb3N0LnZpZXdDb250YWluZXJSZWY7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICAgIGNtcC50eXBlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgICAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIERpYWxvZykuc2V0T3B0aW9ucyhjbXAuZGF0YSk7XG4gICAgICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBjbXAudGl0bGUgfHwgY29tcG9uZW50UmVmLmluc3RhbmNlWyd0aXRsZSddO1xuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoaWRlRGlhbG9nKCkge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmRpYWxvZ0hvc3Qudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5kaWFsb2dTZXJ2aWNlJCkge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19