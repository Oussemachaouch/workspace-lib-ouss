/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WidgetsToScreenSwitcherService } from './widgets-to-screen-switcher.service';
var WidgetsToScreenSwitcherComponent = /** @class */ (function () {
    function WidgetsToScreenSwitcherComponent(switcher) {
        this.switcher = switcher;
        this.collapse = new EventEmitter();
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    WidgetsToScreenSwitcherComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.switcher
            .stat()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return (_this.switcherState = state); }));
    };
    /**
     * @return {?}
     */
    WidgetsToScreenSwitcherComponent.prototype.moveToComponents = /**
     * @return {?}
     */
    function () {
        this.switcher.switchToComponents();
    };
    /**
     * @return {?}
     */
    WidgetsToScreenSwitcherComponent.prototype.moveToScreens = /**
     * @return {?}
     */
    function () {
        this.switcher.switchToScreens();
    };
    /**
     * @return {?}
     */
    WidgetsToScreenSwitcherComponent.prototype.collapseComponents = /**
     * @return {?}
     */
    function () {
        this.collapse.emit();
    };
    WidgetsToScreenSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-widgets-to-screen-switcher',
                    template: "<p-panel\n  class=\"components-panel\"\n  expandIcon=\"fa fa-angle-down\"\n  collapseIcon=\"fa fa-angle-up\"\n  [toggleable]=\"!collapseProperties\"\n  (onBeforeToggle)=\"collapseComponents()\"\n>\n  <p-header>\n    <div class=\"header-switcher\">\n      <p-button\n        label=\"Menu\"\n        (onClick)=\"moveToComponents()\"\n        [ngClass]=\"{ selected: switcherState === 'components' }\"\n      >\n      </p-button>\n      <!-- <p-button label=\"Screens\" (onClick)=\"moveToScreens()\" [ngClass]=\"{selected: switcherState === 'screens'}\">\n      </p-button> -->\n    </div>\n  </p-header>\n  <div>\n    <sc-widgets-store>\n    </sc-widgets-store>\n  </div>\n\n</p-panel>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    WidgetsToScreenSwitcherComponent.ctorParameters = function () { return [
        { type: WidgetsToScreenSwitcherService }
    ]; };
    WidgetsToScreenSwitcherComponent.propDecorators = {
        collapseProperties: [{ type: Input }],
        collapse: [{ type: Output }]
    };
    return WidgetsToScreenSwitcherComponent;
}());
export { WidgetsToScreenSwitcherComponent };
if (false) {
    /** @type {?} */
    WidgetsToScreenSwitcherComponent.prototype.collapseProperties;
    /** @type {?} */
    WidgetsToScreenSwitcherComponent.prototype.collapse;
    /** @type {?} */
    WidgetsToScreenSwitcherComponent.prototype.unsubscribe$;
    /** @type {?} */
    WidgetsToScreenSwitcherComponent.prototype.switcherState;
    /**
     * @type {?}
     * @private
     */
    WidgetsToScreenSwitcherComponent.prototype.switcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL3dpZGdldHMtc3RvcmUvd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIvd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3RGO0lBWUUsMENBQW9CLFFBQXdDO1FBQXhDLGFBQVEsR0FBUixRQUFRLENBQWdDO1FBSDVELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRW9CLENBQUM7Ozs7SUFFaEUsbURBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsUUFBUTthQUNWLElBQUksRUFBRTthQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCwyREFBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsd0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsNkRBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMseXJCQUEwRDs7aUJBRTNEOzs7O2dCQVBRLDhCQUE4Qjs7O3FDQVNwQyxLQUFLOzJCQUVMLE1BQU07O0lBd0JULHVDQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksZ0NBQWdDOzs7SUFDM0MsOERBQzRCOztJQUM1QixvREFDaUQ7O0lBQ2pELHdEQUEyQzs7SUFDM0MseURBQXNCOzs7OztJQUNWLG9EQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgV2lkZ2V0c1RvU2NyZWVuU3dpdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi93aWRnZXRzLXRvLXNjcmVlbi1zd2l0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpZGdldHNMaWJyYXJ5TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy13aWRnZXRzLXRvLXNjcmVlbi1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXRzLXRvLXNjcmVlbi1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRzVG9TY3JlZW5Td2l0Y2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNlUHJvcGVydGllczogYm9vbGVhbjtcbiAgQE91dHB1dCgpXG4gIGNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBzd2l0Y2hlclN0YXRlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3dpdGNoZXI6IFdpZGdldHNUb1NjcmVlblN3aXRjaGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN3aXRjaGVyXG4gICAgICAuc3RhdCgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZShzdGF0ZSA9PiAodGhpcy5zd2l0Y2hlclN0YXRlID0gc3RhdGUpKTtcbiAgfVxuXG4gIG1vdmVUb0NvbXBvbmVudHMoKSB7XG4gICAgdGhpcy5zd2l0Y2hlci5zd2l0Y2hUb0NvbXBvbmVudHMoKTtcbiAgfVxuXG4gIG1vdmVUb1NjcmVlbnMoKSB7XG4gICAgdGhpcy5zd2l0Y2hlci5zd2l0Y2hUb1NjcmVlbnMoKTtcbiAgfVxuXG4gIGNvbGxhcHNlQ29tcG9uZW50cygpIHtcbiAgICB0aGlzLmNvbGxhcHNlLmVtaXQoKTtcbiAgfVxufVxuIl19