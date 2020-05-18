/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { TreeDragDropService } from 'primeng/api';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
export class ScreensStoreComponent {
    /**
     * @param {?} workspaceService
     * @param {?} treeDragDropService
     */
    constructor(workspaceService, treeDragDropService) {
        this.workspaceService = workspaceService;
        this.treeDragDropService = treeDragDropService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.screens$ = this.workspaceService.getAllScreens().pipe(filter(Boolean), map((/**
         * @param {?} screens
         * @return {?}
         */
        (screens) => {
            return screens.map((/**
             * @param {?} screen
             * @return {?}
             */
            screen => {
                return { label: screen.title || screen.name, value: screen };
            }));
        })));
    }
    /**
     * Init the screen treeNode when start dragging
     * @param {?} screen - Screen
     * @param {?} event
     * @return {?}
     */
    startDragScreen(screen, event) {
        /** @type {?} */
        const screenDnDNode = this.initDraggableScreenNode(screen);
        event.dataTransfer.setData('dragNode', JSON.stringify(screenDnDNode));
        this.treeDragDropService.startDrag({
            tree: null,
            node: screenDnDNode,
            subNodes: [screenDnDNode],
            scope: 'menu'
        });
    }
    /**
     * Init the screen node.
     * @private
     * @param {?} screen the screen
     * @return {?}
     */
    initDraggableScreenNode(screen) {
        return undefined;
    }
}
ScreensStoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-screens-store',
                template: "<div class=\"screens-store\" *ngIf=\"(screens$ | async) as screensItems\">\n  <p-listbox *ngIf=\"screensItems.length >0\" [options]=\"screensItems\" filter=\"true\" [(ngModel)]=\"selectedScreen\"\n    [listStyle]=\"{'max-height':'100%'}\">\n    <ng-template let-screen pTemplate=\"item\">\n      <div class=\"screen-item\" pDraggable (onDragStart)=\"startDragScreen(screen.value,$event)\">\n        <i class=\"fa fa-desktop\"></i> <span>{{ screen.label }}</span>\n        <span class=\"feature-name\">({{ screen.value.featureName }} - {{screen.value.name}})</span>\n      </div>\n    </ng-template>\n  </p-listbox>\n  <div class=\"no-element\" *ngIf=\"(screensItems.length === 0)\">\n    <span class=\"no-element-msg\">\n      No screens configured\n    </span>\n  </div>\n</div>",
                styles: [".screens-store{height:100%}:host ::ng-deep .screens-store .ui-listbox.ui-widget{width:100%;height:100%;padding:0;border:none}:host ::ng-deep .screens-store .ui-listbox-header .ui-inputtext{height:25px;border:none;border-bottom:2px solid #8d9293;padding-left:0}:host ::ng-deep .screens-store .ui-listbox-header{padding:2px 8px 0;border:none;background:#fff}::ng-deep screens-store .no-element{margin-top:50%;width:100%}:host ::ng-deep .screens-store .no-element .no-element-msg{margin:-20px auto auto;padding:10px 61px;position:absolute;width:100%;top:50%}:host ::ng-deep .screens-store .ui-listbox-header .ui-listbox-filter-container .fa{left:auto;right:.25em}:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item{margin-bottom:2px;height:auto;background-color:#f9f9f9;border-radius:0;padding:2px 5px}:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item.ui-state-highlight,:host ::ng-deep .screens-store .ui-listbox .ui-listbox-item:not(.ui-state-highlight):hover{background-color:#eee;color:#00a2ff}:host ::ng-deep .feature-name{font-size:8pt}"]
            }] }
];
/** @nocollapse */
ScreensStoreComponent.ctorParameters = () => [
    { type: WorkspaceClientApi },
    { type: TreeDragDropService }
];
if (false) {
    /** @type {?} */
    ScreensStoreComponent.prototype.screens$;
    /** @type {?} */
    ScreensStoreComponent.prototype.selectedScreen;
    /**
     * @type {?}
     * @private
     */
    ScreensStoreComponent.prototype.workspaceService;
    /**
     * @type {?}
     * @private
     */
    ScreensStoreComponent.prototype.treeDragDropService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy1zdG9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvd2lkZ2V0cy1zdG9yZS9zY3JlZW5zLXN0b3JlL3NjcmVlbnMtc3RvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBVXJFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBSWhDLFlBQ1UsZ0JBQW9DLEVBQ3BDLG1CQUF3QztRQUR4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ3BDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxPQUFpQixFQUFFLEVBQUU7WUFDeEIsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU1ELGVBQWUsQ0FBQyxNQUFjLEVBQUUsS0FBSzs7Y0FDN0IsYUFBYSxHQUFlLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7UUFDdEUsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1lBQ2pDLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLGFBQWE7WUFDbkIsUUFBUSxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQU1PLHVCQUF1QixDQUFDLE1BQWM7UUFDNUMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix1eEJBQTZDOzthQUU5Qzs7OztZQVRRLGtCQUFrQjtZQUZsQixtQkFBbUI7Ozs7SUFhMUIseUNBQWlDOztJQUNqQywrQ0FBdUI7Ozs7O0lBR3JCLGlEQUE0Qzs7Ozs7SUFDNUMsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJlZURyYWdEcm9wU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuaW1wb3J0IHsgV29ya3NwYWNlQ2xpZW50QXBpIH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL2NsaWVudCc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcblxuaW1wb3J0IHsgVWlUcmVlTm9kZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXNjcmVlbnMtc3RvcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NyZWVucy1zdG9yZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjcmVlbnMtc3RvcmUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjcmVlbnNTdG9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNjcmVlbnMkOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+O1xuICBzZWxlY3RlZFNjcmVlbjogU2NyZWVuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgd29ya3NwYWNlU2VydmljZTogV29ya3NwYWNlQ2xpZW50QXBpLFxuICAgIHByaXZhdGUgdHJlZURyYWdEcm9wU2VydmljZTogVHJlZURyYWdEcm9wU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zY3JlZW5zJCA9IHRoaXMud29ya3NwYWNlU2VydmljZS5nZXRBbGxTY3JlZW5zKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoc2NyZWVuczogU2NyZWVuW10pID0+IHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbnMubWFwKHNjcmVlbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgbGFiZWw6IHNjcmVlbi50aXRsZSB8fCBzY3JlZW4ubmFtZSwgdmFsdWU6IHNjcmVlbiB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHRoZSBzY3JlZW4gdHJlZU5vZGUgd2hlbiBzdGFydCBkcmFnZ2luZ1xuICAgKiBAcGFyYW0gc2NyZWVuIC0gU2NyZWVuXG4gICAqL1xuICBzdGFydERyYWdTY3JlZW4oc2NyZWVuOiBTY3JlZW4sIGV2ZW50KSB7XG4gICAgY29uc3Qgc2NyZWVuRG5ETm9kZTogVWlUcmVlTm9kZSA9IHRoaXMuaW5pdERyYWdnYWJsZVNjcmVlbk5vZGUoc2NyZWVuKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnZHJhZ05vZGUnLCBKU09OLnN0cmluZ2lmeShzY3JlZW5EbkROb2RlKSk7XG4gICAgdGhpcy50cmVlRHJhZ0Ryb3BTZXJ2aWNlLnN0YXJ0RHJhZyh7XG4gICAgICB0cmVlOiBudWxsLFxuICAgICAgbm9kZTogc2NyZWVuRG5ETm9kZSxcbiAgICAgIHN1Yk5vZGVzOiBbc2NyZWVuRG5ETm9kZV0sXG4gICAgICBzY29wZTogJ21lbnUnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCB0aGUgc2NyZWVuIG5vZGUuXG4gICAqIEBwYXJhbSBzY3JlZW4gdGhlIHNjcmVlblxuICAgKi9cbiAgcHJpdmF0ZSBpbml0RHJhZ2dhYmxlU2NyZWVuTm9kZShzY3JlZW46IFNjcmVlbik6IFVpVHJlZU5vZGUge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==