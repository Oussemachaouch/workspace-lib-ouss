/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class WidgetsToScreenSwitcherService {
    constructor() {
        this.switcher = new BehaviorSubject('components');
    }
    /**
     * @return {?}
     */
    stat() {
        return this.switcher.asObservable();
    }
    /**
     * @return {?}
     */
    switchToComponents() {
        this.switcher.next('components');
    }
    /**
     * @return {?}
     */
    switchToScreens() {
        this.switcher.next('screens');
    }
}
WidgetsToScreenSwitcherService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetsToScreenSwitcherService.prototype.switcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy93aWRnZXRzLXN0b3JlL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUduRCxNQUFNLE9BQU8sOEJBQThCO0lBRDNDO1FBRVUsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FDN0QsWUFBWSxDQUNiLENBQUM7SUFhSixDQUFDOzs7O0lBWEMsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBaEJGLFVBQVU7Ozs7Ozs7SUFFVCxrREFFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0c1RvU2NyZWVuU3dpdGNoZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzd2l0Y2hlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oXG4gICAgJ2NvbXBvbmVudHMnXG4gICk7XG5cbiAgc3RhdCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN3aXRjaGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc3dpdGNoVG9Db21wb25lbnRzKCkge1xuICAgIHRoaXMuc3dpdGNoZXIubmV4dCgnY29tcG9uZW50cycpO1xuICB9XG5cbiAgc3dpdGNoVG9TY3JlZW5zKCkge1xuICAgIHRoaXMuc3dpdGNoZXIubmV4dCgnc2NyZWVucycpO1xuICB9XG59XG4iXX0=