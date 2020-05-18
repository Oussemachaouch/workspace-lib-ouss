/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class WidgetsStoreComponent {
    /*  widgetsLibrairies$: Observable<WidgetsLibraryModel[]>;
      selectedLibrary$: Observable<WidgetsLibraryModel>;
    
      screen$: Observable<string>;
      view$: Observable<string>;
    
      private librairySelectionChanges$: Subject<WidgetsLibraryModel> = new Subject<
        WidgetsLibraryModel
      >();
    */
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
}
WidgetsStoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-widgets-store',
                template: "<!--<ng-container\n  *ngIf=\"widgetsLibrairies$ | async as widgetsLibrairies; else loading\"\n>\n  <sc-store-selector\n    *ngIf=\"widgetsLibrairies && widgetsLibrairies.length > 1\"\n    [stores]=\"widgetsLibrairies\"\n    (selectStore)=\"selectStore($event)\"\n  ></sc-store-selector>\n  <ng-container *ngIf=\"view$ | async as view\">\n    <sc-store-displayer\n      [store]=\"selectedLibrary$ | async\"\n      [screen]=\"screen$ | async\"\n      [mask]=\"view !== 'screen' && view !== 'page'\"\n    >\n    </sc-store-displayer>\n  </ng-container>\n</ng-container>\n<ng-template #loading>\n  <div>loading...</div>\n</ng-template>-->\n<div class=\"available-screens\" >\n  <p-panelMenu [transitionOptions]=\"'0ms'\" [model]=\"items\"   [style]=\"{'width':'300px'}\" [multiple]=\"false\" ></p-panelMenu>\n</div>\n",
                styles: [":host ::ng-deep .components-panel .ui-panel .ui-panel-content{border:0!important}::ng-deep .ui-panelmenu .ui-widget{background-color:#c6c6c6!important;font-family:lato}::ng-deep .ui-panelmenu .ui-panelmenu-header .ui-menuitem-text{color:#000;font-family:lato}::ng-deep .ui-menu-list{font-family:lato}.ui-panelmenu .ui-panelmenu-header.ui-state-active a,::ng-deep .ui-panelmenu .ui-panelmenu-header.ui-state-active{background-color:#d83431!important}"]
            }] }
];
/** @nocollapse */
WidgetsStoreComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    WidgetsStoreComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy1zdG9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvd2lkZ2V0cy1zdG9yZS93aWRnZXRzLXN0b3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWtCbEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7Ozs7SUFXaEMsZ0JBTUcsQ0FBQzs7OztJQXNCSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYO2dCQUNFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CO2FBQzdFO1lBQ0Q7Z0JBRUUsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsS0FBSyxFQUFFO29CQUNMLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFDO29CQUN0RixvRkFBb0Y7b0JBQ3BGLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztvQkFDbEYsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUM7b0JBQ3ZGLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO2lCQUN4RjthQUVGO1NBRUYsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWDtnQkFDRSxLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDdkI7WUFDRDtnQkFDRSxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixLQUFLLEVBQUU7b0JBQ0wsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO29CQUNqRixFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUM7b0JBQ2pGLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBQztvQkFDbEYsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUM7aUJBQ3hGO2FBQ0Y7U0FpREYsQ0FBQztJQUNKLENBQUM7OztZQS9IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIseXpCQUE2Qzs7YUFFOUM7Ozs7OztJQXVDQyxzQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXaWRnZXRzTGlicmFyeU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3dpZGdldHMtbGlicmFyeSc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuLi9leHBsb3Jlci9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7XG4gIFdpZGdldHNMaWJyYWlyaWVzU3RhdGUsXG4gIGdldFdpZGdldHNMaWJyYWlyaWVzXG59IGZyb20gJy4uLy4uL2NvcmUvbmdyeC93aWRnZXRzLWxpYnJhaXJpZXMnO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy13aWRnZXRzLXN0b3JlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldHMtc3RvcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXRzLXN0b3JlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRzU3RvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuLyogIHdpZGdldHNMaWJyYWlyaWVzJDogT2JzZXJ2YWJsZTxXaWRnZXRzTGlicmFyeU1vZGVsW10+O1xuICBzZWxlY3RlZExpYnJhcnkkOiBPYnNlcnZhYmxlPFdpZGdldHNMaWJyYXJ5TW9kZWw+O1xuXG4gIHNjcmVlbiQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgdmlldyQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBwcml2YXRlIGxpYnJhaXJ5U2VsZWN0aW9uQ2hhbmdlcyQ6IFN1YmplY3Q8V2lkZ2V0c0xpYnJhcnlNb2RlbD4gPSBuZXcgU3ViamVjdDxcbiAgICBXaWRnZXRzTGlicmFyeU1vZGVsXG4gID4oKTtcbiovXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qXG4gICAgcHJpdmF0ZSBuYXZpZ2F0b3I6IE5hdmlnYXRvcixcbiAgICBwcml2YXRlIHdpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudDogU3RvcmU8V2lkZ2V0c0xpYnJhaXJpZXNTdGF0ZT4sXG4gICAgcHJpdmF0ZSBzY3JlZW5FeHBsb3Jlck1hbmFnZW1lbnQ6IFN0b3JlPFNjcmVlbkV4cGxvcmVyU3RhdGU+XG4gICAgKi9cbiAgKSB7fVxuXG4gLy8gbmdPbkluaXQoKSB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIHRoZSB2aWV3IGZlYXR1cmUvc2NyZWVuXG4gIC8qICB0aGlzLnZpZXckID0gdGhpcy5uYXZpZ2F0b3IudmlldygpO1xuICAgIHRoaXMuc2NyZWVuJCA9IHRoaXMuc2NyZWVuRXhwbG9yZXJNYW5hZ2VtZW50LnNlbGVjdChnZXRTY3JlZW5UZW1wbGF0ZSk7XG5cbiAgICB0aGlzLndpZGdldHNMaWJyYWlyaWVzJCA9IHRoaXMud2lkZ2V0c0xpYnJhaXJpZXNNYW5hZ2VtZW50LnNlbGVjdChcbiAgICAgIGdldFdpZGdldHNMaWJyYWlyaWVzXG4gICAgKTtcbiAgICB0aGlzLnNlbGVjdGVkTGlicmFyeSQgPSBtZXJnZShcbiAgICAgIHRoaXMud2lkZ2V0c0xpYnJhaXJpZXMkLnBpcGUoXG4gICAgICAgIG1hcCh3aWRnZXRzTGlicmFyaWVzID0+IHdpZGdldHNMaWJyYXJpZXMgJiYgd2lkZ2V0c0xpYnJhcmllc1swXSlcbiAgICAgICksXG4gICAgICB0aGlzLmxpYnJhaXJ5U2VsZWN0aW9uQ2hhbmdlcyQuYXNPYnNlcnZhYmxlKClcbiAgICApOyovXG4gIC8vIH1cbi8qXG4gIHNlbGVjdFN0b3JlKHN0b3JlOiBXaWRnZXRzTGlicmFyeU1vZGVsKSB7XG4gICAgdGhpcy5saWJyYWlyeVNlbGVjdGlvbkNoYW5nZXMkLm5leHQoc3RvcmUpO1xuICB9Ki9cbiAgaXRlbXM6IE1lbnVJdGVtW107XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU3RvcmUgTWFuYWdlbWVudCcsIHJvdXRlckxpbms6IFsnL3N0b3JlJ10sIGljb246ICdwaSBwaS1mdyBwaS1taW51cydcbiAgICAgIH0sXG4gICAgICB7XG5cbiAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBNYW5hZ2VtZW50JyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7bGFiZWw6ICdDcmVhdGUgVGVtcGxhdGUnLCByb3V0ZXJMaW5rOiBbJy9jcmVhdGVUZW1wbGF0ZSddLCBpY29uOiAnZmFzIGZhLXBlbmNpbC1hbHQnfSxcbiAgICAgICAgICAvLyAge2xhYmVsOiAnRGVzaWduIFNwYWNlJywgcm91dGVyTGluazogWycvZGVzaWduU3BhY2UnXSxpY29uOiAnZmFzIGZhLXBlbmNpbC1hbHQnfSxcbiAgICAgICAgICB7bGFiZWw6ICdTZWFyY2ggVGVtcGxhdGUnLCByb3V0ZXJMaW5rOiBbJy9zZWFyY2hUZW1wbGF0ZSddLCBpY29uOiAnZmFzIGZhLXNlYXJjaCd9LFxuICAgICAgICAgIHtsYWJlbDogJ0ltcG9ydCBUZW1wbGF0ZScsIHJvdXRlckxpbms6IFsnL2ltcG9ydFRlbXBsYXRlJ10sIGljb246ICdmYXMgZmEtZmlsZS1pbXBvcnQnfSxcbiAgICAgICAgICB7bGFiZWw6ICdTaW11bGF0ZSBUZW1wbGF0ZScsIHJvdXRlckxpbms6IFsnL3NpbXVsYXRlVGVtcGxhdGUnXSwgaWNvbjogJ2ZhYiBmYS13cGZvcm1zJ31cbiAgICAgICAgXVxuXG4gICAgICB9XG5cbiAgICBdO1xuICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU3RvcmUgTWFuYWdlbWVudCcsXG4gICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1taW51cycsXG4gICAgICAgIHJvdXRlckxpbms6IFsnL3N0b3JlJ11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgTWFuYWdlbWVudCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge2xhYmVsOiAnQ3JlYXRlIFRlbXBsYXRlJywgaWNvbjogJ3BpIHBpLXBlbmNpbCcsIHJvdXRlckxpbms6IFsnL2NyZWF0ZVRlbXBsYXRlJ119LFxuICAgICAgICAgIHtsYWJlbDogJ1NlYXJjaCBUZW1wbGF0ZScsIGljb246ICdwaSBwaS1zZWFyY2gnLCByb3V0ZXJMaW5rOiBbJy9zZWFyY2hUZW1wbGF0ZSddfSxcbiAgICAgICAgICB7bGFiZWw6ICdJbXBvcnQgVGVtcGxhdGUnLCBpY29uOiAncGkgcGktc2lnbi1pbicsIHJvdXRlckxpbms6IFsnL2ltcG9ydFRlbXBsYXRlJ119LFxuICAgICAgICAgIHtsYWJlbDogJ1NpbXVsYXRlIFRlbXBsYXRlJywgaWNvbjogJ2ZhYiBmYS13cGZvcm1zJywgcm91dGVyTGluazogWycvc2ltdWxhdGVUZW1wbGF0ZSddfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAvKiB7XG4gICAgICAgIGxhYmVsOiAnSGVscCcsXG4gICAgICAgIGljb246ICdmYS1xdWVzdGlvbicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb250ZW50cycsXG4gICAgICAgICAgICBpY29uOiAnZmEtYmFycydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoJyxcbiAgICAgICAgICAgIGljb246ICdmYS1zZWFyY2gnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVGV4dCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXb3Jrc3BhY2UnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGaWxlJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtZmlsZScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgIGljb246ICdmYS1nZWFyJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0VkaXQnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXJlZnJlc2gnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge2xhYmVsOiAnU2F2ZScsIGljb246ICdmYS1zYXZlJ30sXG4gICAgICAgICAgICAgIHtsYWJlbDogJ1VwZGF0ZScsIGljb246ICdmYS1zYXZlJ30sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgIGljb246ICdmYS1waG9uZScsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7bGFiZWw6ICdEZWxldGUnLCBpY29uOiAnZmEtbWludXMnfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSovXG4gICAgXTtcbiAgfVxufVxuIl19