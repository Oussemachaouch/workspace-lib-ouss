/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var WidgetsStoreComponent = /** @class */ (function () {
    /*  widgetsLibrairies$: Observable<WidgetsLibraryModel[]>;
      selectedLibrary$: Observable<WidgetsLibraryModel>;
    
      screen$: Observable<string>;
      view$: Observable<string>;
    
      private librairySelectionChanges$: Subject<WidgetsLibraryModel> = new Subject<
        WidgetsLibraryModel
      >();
    */
    function WidgetsStoreComponent() {
    }
    /**
     * @return {?}
     */
    WidgetsStoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.items = [
            {
                label: 'Store Management', routerLink: ['/store'], icon: 'pi pi-fw pi-minus'
            },
            {
                label: 'Template Management',
                items: [
                    { label: 'Create Template', routerLink: ['/createTemplate'], icon: 'fas fa-pencil-alt' },
                    //  {label: 'Design Space', routerLink: ['/designSpace'],icon: 'fas fa-pencil-alt'},
                    { label: 'Search Template', routerLink: ['/searchTemplate'], icon: 'fas fa-search' },
                    { label: 'Import Template', routerLink: ['/importTemplate'], icon: 'fas fa-file-import' },
                    { label: 'Simulate Template', routerLink: ['/simulateTemplate'], icon: 'fab fa-wpforms' }
                ]
            }
        ];
        this.items = [
            {
                label: 'Store Management',
                icon: 'pi pi-fw pi-minus',
                routerLink: ['/store']
            },
            {
                label: 'Template Management',
                items: [
                    { label: 'Create Template', icon: 'pi pi-pencil', routerLink: ['/createTemplate'] },
                    { label: 'Search Template', icon: 'pi pi-search', routerLink: ['/searchTemplate'] },
                    { label: 'Import Template', icon: 'pi pi-sign-in', routerLink: ['/importTemplate'] },
                    { label: 'Simulate Template', icon: 'fab fa-wpforms', routerLink: ['/simulateTemplate'] }
                ]
            },
        ];
    };
    WidgetsStoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-widgets-store',
                    template: "<!--<ng-container\n  *ngIf=\"widgetsLibrairies$ | async as widgetsLibrairies; else loading\"\n>\n  <sc-store-selector\n    *ngIf=\"widgetsLibrairies && widgetsLibrairies.length > 1\"\n    [stores]=\"widgetsLibrairies\"\n    (selectStore)=\"selectStore($event)\"\n  ></sc-store-selector>\n  <ng-container *ngIf=\"view$ | async as view\">\n    <sc-store-displayer\n      [store]=\"selectedLibrary$ | async\"\n      [screen]=\"screen$ | async\"\n      [mask]=\"view !== 'screen' && view !== 'page'\"\n    >\n    </sc-store-displayer>\n  </ng-container>\n</ng-container>\n<ng-template #loading>\n  <div>loading...</div>\n</ng-template>-->\n<div class=\"available-screens\" >\n  <p-panelMenu [transitionOptions]=\"'0ms'\" [model]=\"items\"   [style]=\"{'width':'300px'}\" [multiple]=\"false\" ></p-panelMenu>\n</div>\n",
                    styles: [":host ::ng-deep .components-panel .ui-panel .ui-panel-content{border:0!important}::ng-deep .ui-panelmenu .ui-widget{background-color:#c6c6c6!important;font-family:lato}::ng-deep .ui-panelmenu .ui-panelmenu-header .ui-menuitem-text{color:#000;font-family:lato}::ng-deep .ui-menu-list{font-family:lato}.ui-panelmenu .ui-panelmenu-header.ui-state-active a,::ng-deep .ui-panelmenu .ui-panelmenu-header.ui-state-active{background-color:#d83431!important}"]
                }] }
    ];
    /** @nocollapse */
    WidgetsStoreComponent.ctorParameters = function () { return []; };
    return WidgetsStoreComponent;
}());
export { WidgetsStoreComponent };
if (false) {
    /** @type {?} */
    WidgetsStoreComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy1zdG9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvd2lkZ2V0cy1zdG9yZS93aWRnZXRzLXN0b3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWFsRDtJQU1BOzs7Ozs7Ozs7TUFTRTtJQUNBO0lBTUcsQ0FBQzs7OztJQXNCSix3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1g7Z0JBQ0UsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUI7YUFDN0U7WUFDRDtnQkFFRSxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixLQUFLLEVBQUU7b0JBQ0wsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUM7b0JBQ3RGLG9GQUFvRjtvQkFDcEYsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO29CQUNsRixFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBQztvQkFDdkYsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7aUJBQ3hGO2FBRUY7U0FFRixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN2QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLEtBQUssRUFBRTtvQkFDTCxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUM7b0JBQ2pGLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBQztvQkFDakYsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO29CQUNsRixFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBQztpQkFDeEY7YUFDRjtTQWlERixDQUFDO0lBQ0osQ0FBQzs7Z0JBL0hGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix5ekJBQTZDOztpQkFFOUM7Ozs7SUE0SEQsNEJBQUM7Q0FBQSxBQWhJRCxJQWdJQztTQTNIWSxxQkFBcUI7OztJQXNDaEMsc0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgV2lkZ2V0c0xpYnJhcnlNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy93aWRnZXRzLWxpYnJhcnknO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi4vZXhwbG9yZXIvbmF2aWdhdG9yL25hdmlnYXRvcic7XG5pbXBvcnQge1xuICBXaWRnZXRzTGlicmFpcmllc1N0YXRlLFxuICBnZXRXaWRnZXRzTGlicmFpcmllc1xufSBmcm9tICcuLi8uLi9jb3JlL25ncngvd2lkZ2V0cy1saWJyYWlyaWVzJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Mtd2lkZ2V0cy1zdG9yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXRzLXN0b3JlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2lkZ2V0cy1zdG9yZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0c1N0b3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbi8qICB3aWRnZXRzTGlicmFpcmllcyQ6IE9ic2VydmFibGU8V2lkZ2V0c0xpYnJhcnlNb2RlbFtdPjtcbiAgc2VsZWN0ZWRMaWJyYXJ5JDogT2JzZXJ2YWJsZTxXaWRnZXRzTGlicmFyeU1vZGVsPjtcblxuICBzY3JlZW4kOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHZpZXckOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgcHJpdmF0ZSBsaWJyYWlyeVNlbGVjdGlvbkNoYW5nZXMkOiBTdWJqZWN0PFdpZGdldHNMaWJyYXJ5TW9kZWw+ID0gbmV3IFN1YmplY3Q8XG4gICAgV2lkZ2V0c0xpYnJhcnlNb2RlbFxuICA+KCk7XG4qL1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKlxuICAgIHByaXZhdGUgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsXG4gICAgcHJpdmF0ZSB3aWRnZXRzTGlicmFpcmllc01hbmFnZW1lbnQ6IFN0b3JlPFdpZGdldHNMaWJyYWlyaWVzU3RhdGU+LFxuICAgIHByaXZhdGUgc2NyZWVuRXhwbG9yZXJNYW5hZ2VtZW50OiBTdG9yZTxTY3JlZW5FeHBsb3JlclN0YXRlPlxuICAgICovXG4gICkge31cblxuIC8vIG5nT25Jbml0KCkge1xuICAgIC8vIHN1YnNjcmliZSB0byB0aGUgdmlldyBmZWF0dXJlL3NjcmVlblxuICAvKiAgdGhpcy52aWV3JCA9IHRoaXMubmF2aWdhdG9yLnZpZXcoKTtcbiAgICB0aGlzLnNjcmVlbiQgPSB0aGlzLnNjcmVlbkV4cGxvcmVyTWFuYWdlbWVudC5zZWxlY3QoZ2V0U2NyZWVuVGVtcGxhdGUpO1xuXG4gICAgdGhpcy53aWRnZXRzTGlicmFpcmllcyQgPSB0aGlzLndpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudC5zZWxlY3QoXG4gICAgICBnZXRXaWRnZXRzTGlicmFpcmllc1xuICAgICk7XG4gICAgdGhpcy5zZWxlY3RlZExpYnJhcnkkID0gbWVyZ2UoXG4gICAgICB0aGlzLndpZGdldHNMaWJyYWlyaWVzJC5waXBlKFxuICAgICAgICBtYXAod2lkZ2V0c0xpYnJhcmllcyA9PiB3aWRnZXRzTGlicmFyaWVzICYmIHdpZGdldHNMaWJyYXJpZXNbMF0pXG4gICAgICApLFxuICAgICAgdGhpcy5saWJyYWlyeVNlbGVjdGlvbkNoYW5nZXMkLmFzT2JzZXJ2YWJsZSgpXG4gICAgKTsqL1xuICAvLyB9XG4vKlxuICBzZWxlY3RTdG9yZShzdG9yZTogV2lkZ2V0c0xpYnJhcnlNb2RlbCkge1xuICAgIHRoaXMubGlicmFpcnlTZWxlY3Rpb25DaGFuZ2VzJC5uZXh0KHN0b3JlKTtcbiAgfSovXG4gIGl0ZW1zOiBNZW51SXRlbVtdO1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLml0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1N0b3JlIE1hbmFnZW1lbnQnLCByb3V0ZXJMaW5rOiBbJy9zdG9yZSddLCBpY29uOiAncGkgcGktZncgcGktbWludXMnXG4gICAgICB9LFxuICAgICAge1xuXG4gICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgTWFuYWdlbWVudCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge2xhYmVsOiAnQ3JlYXRlIFRlbXBsYXRlJywgcm91dGVyTGluazogWycvY3JlYXRlVGVtcGxhdGUnXSwgaWNvbjogJ2ZhcyBmYS1wZW5jaWwtYWx0J30sXG4gICAgICAgICAgLy8gIHtsYWJlbDogJ0Rlc2lnbiBTcGFjZScsIHJvdXRlckxpbms6IFsnL2Rlc2lnblNwYWNlJ10saWNvbjogJ2ZhcyBmYS1wZW5jaWwtYWx0J30sXG4gICAgICAgICAge2xhYmVsOiAnU2VhcmNoIFRlbXBsYXRlJywgcm91dGVyTGluazogWycvc2VhcmNoVGVtcGxhdGUnXSwgaWNvbjogJ2ZhcyBmYS1zZWFyY2gnfSxcbiAgICAgICAgICB7bGFiZWw6ICdJbXBvcnQgVGVtcGxhdGUnLCByb3V0ZXJMaW5rOiBbJy9pbXBvcnRUZW1wbGF0ZSddLCBpY29uOiAnZmFzIGZhLWZpbGUtaW1wb3J0J30sXG4gICAgICAgICAge2xhYmVsOiAnU2ltdWxhdGUgVGVtcGxhdGUnLCByb3V0ZXJMaW5rOiBbJy9zaW11bGF0ZVRlbXBsYXRlJ10sIGljb246ICdmYWIgZmEtd3Bmb3Jtcyd9XG4gICAgICAgIF1cblxuICAgICAgfVxuXG4gICAgXTtcbiAgICB0aGlzLml0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1N0b3JlIE1hbmFnZW1lbnQnLFxuICAgICAgICBpY29uOiAncGkgcGktZncgcGktbWludXMnLFxuICAgICAgICByb3V0ZXJMaW5rOiBbJy9zdG9yZSddXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIE1hbmFnZW1lbnQnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtsYWJlbDogJ0NyZWF0ZSBUZW1wbGF0ZScsIGljb246ICdwaSBwaS1wZW5jaWwnLCByb3V0ZXJMaW5rOiBbJy9jcmVhdGVUZW1wbGF0ZSddfSxcbiAgICAgICAgICB7bGFiZWw6ICdTZWFyY2ggVGVtcGxhdGUnLCBpY29uOiAncGkgcGktc2VhcmNoJywgcm91dGVyTGluazogWycvc2VhcmNoVGVtcGxhdGUnXX0sXG4gICAgICAgICAge2xhYmVsOiAnSW1wb3J0IFRlbXBsYXRlJywgaWNvbjogJ3BpIHBpLXNpZ24taW4nLCByb3V0ZXJMaW5rOiBbJy9pbXBvcnRUZW1wbGF0ZSddfSxcbiAgICAgICAgICB7bGFiZWw6ICdTaW11bGF0ZSBUZW1wbGF0ZScsIGljb246ICdmYWIgZmEtd3Bmb3JtcycsIHJvdXRlckxpbms6IFsnL3NpbXVsYXRlVGVtcGxhdGUnXX1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgLyoge1xuICAgICAgICBsYWJlbDogJ0hlbHAnLFxuICAgICAgICBpY29uOiAnZmEtcXVlc3Rpb24nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29udGVudHMnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWJhcnMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlYXJjaCcsXG4gICAgICAgICAgICBpY29uOiAnZmEtc2VhcmNoJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RleHQnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV29ya3NwYWNlJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRmlsZScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWZpbGUnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0FjdGlvbnMnLFxuICAgICAgICBpY29uOiAnZmEtZ2VhcicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdFZGl0JyxcbiAgICAgICAgICAgIGljb246ICdmYS1yZWZyZXNoJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtsYWJlbDogJ1NhdmUnLCBpY29uOiAnZmEtc2F2ZSd9LFxuICAgICAgICAgICAgICB7bGFiZWw6ICdVcGRhdGUnLCBpY29uOiAnZmEtc2F2ZSd9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICBpY29uOiAnZmEtcGhvbmUnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge2xhYmVsOiAnRGVsZXRlJywgaWNvbjogJ2ZhLW1pbnVzJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0qL1xuICAgIF07XG4gIH1cbn1cbiJdfQ==