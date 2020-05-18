/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WidgetsToScreenSwitcherService } from './widgets-to-screen-switcher.service';
export class WidgetsToScreenSwitcherComponent {
    /**
     * @param {?} switcher
     */
    constructor(switcher) {
        this.switcher = switcher;
        this.collapse = new EventEmitter();
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.switcher
            .stat()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => (this.switcherState = state)));
    }
    /**
     * @return {?}
     */
    moveToComponents() {
        this.switcher.switchToComponents();
    }
    /**
     * @return {?}
     */
    moveToScreens() {
        this.switcher.switchToScreens();
    }
    /**
     * @return {?}
     */
    collapseComponents() {
        this.collapse.emit();
    }
}
WidgetsToScreenSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-widgets-to-screen-switcher',
                template: "<p-panel\n  class=\"components-panel\"\n  expandIcon=\"fa fa-angle-down\"\n  collapseIcon=\"fa fa-angle-up\"\n  [toggleable]=\"!collapseProperties\"\n  (onBeforeToggle)=\"collapseComponents()\"\n>\n  <p-header>\n    <div class=\"header-switcher\">\n      <p-button\n        label=\"Menu\"\n        (onClick)=\"moveToComponents()\"\n        [ngClass]=\"{ selected: switcherState === 'components' }\"\n      >\n      </p-button>\n      <!-- <p-button label=\"Screens\" (onClick)=\"moveToScreens()\" [ngClass]=\"{selected: switcherState === 'screens'}\">\n      </p-button> -->\n    </div>\n  </p-header>\n  <div>\n    <sc-widgets-store>\n    </sc-widgets-store>\n  </div>\n\n</p-panel>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
WidgetsToScreenSwitcherComponent.ctorParameters = () => [
    { type: WidgetsToScreenSwitcherService }
];
WidgetsToScreenSwitcherComponent.propDecorators = {
    collapseProperties: [{ type: Input }],
    collapse: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL3dpZGdldHMtc3RvcmUvd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIvd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBUXRGLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFPM0MsWUFBb0IsUUFBd0M7UUFBeEMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0M7UUFINUQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFFb0IsQ0FBQzs7OztJQUVoRSxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVE7YUFDVixJQUFJLEVBQUU7YUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6Qyx5ckJBQTBEOzthQUUzRDs7OztZQVBRLDhCQUE4Qjs7O2lDQVNwQyxLQUFLO3VCQUVMLE1BQU07Ozs7SUFGUCw4REFDNEI7O0lBQzVCLG9EQUNpRDs7SUFDakQsd0RBQTJDOztJQUMzQyx5REFBc0I7Ozs7O0lBQ1Ysb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXaWRnZXRzVG9TY3JlZW5Td2l0Y2hlclNlcnZpY2UgfSBmcm9tICcuL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2lkZ2V0c0xpYnJhcnlNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXdpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldHNUb1NjcmVlblN3aXRjaGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29sbGFwc2VQcm9wZXJ0aWVzOiBib29sZWFuO1xuICBAT3V0cHV0KClcbiAgY29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHN3aXRjaGVyU3RhdGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzd2l0Y2hlcjogV2lkZ2V0c1RvU2NyZWVuU3dpdGNoZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3dpdGNoZXJcbiAgICAgIC5zdGF0KClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKHN0YXRlID0+ICh0aGlzLnN3aXRjaGVyU3RhdGUgPSBzdGF0ZSkpO1xuICB9XG5cbiAgbW92ZVRvQ29tcG9uZW50cygpIHtcbiAgICB0aGlzLnN3aXRjaGVyLnN3aXRjaFRvQ29tcG9uZW50cygpO1xuICB9XG5cbiAgbW92ZVRvU2NyZWVucygpIHtcbiAgICB0aGlzLnN3aXRjaGVyLnN3aXRjaFRvU2NyZWVucygpO1xuICB9XG5cbiAgY29sbGFwc2VDb21wb25lbnRzKCkge1xuICAgIHRoaXMuY29sbGFwc2UuZW1pdCgpO1xuICB9XG59XG4iXX0=