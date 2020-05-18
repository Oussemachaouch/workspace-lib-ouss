/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
export class GlobalLayoutComponent {
    /**
     * @param {?} layoutService
     */
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.leftCollapsed = false;
        this.rightCollapsed = false;
        this.ucPolicyActive = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.layoutService.isUcPolicyModeActive().subscribe((/**
         * @param {?} isActive
         * @return {?}
         */
        isActive => {
            this.rightCollapsed = isActive;
            this.ucPolicyActive = isActive;
        }));
    }
    /**
     * Collapse/Expand the left container
     *
     * @return {?}
     */
    collapseLeft() {
        this.leftCollapsed = !this.leftCollapsed;
    }
    /**
     * Collapse/Expand the right container
     *
     * @return {?}
     */
    collapseRight() {
        this.rightCollapsed = !this.rightCollapsed;
    }
}
GlobalLayoutComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'global-layout',
                template: "<div class=\"global-layout\">\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"left\" [class.collapse-left]=\"leftCollapsed\">\n      <ng-content select=\"left-container\"></ng-content>\n    </div>\n\n    <div class=\"left-toggle-button\" [ngClass]=\"{'toggeled': leftCollapsed}\">\n      <p-button icon=\"fa fa-angle-double-left\" class=\"collapse-left-button\" [ngClass]=\"{'toggeled': leftCollapsed}\"\n        (click)=\"collapseLeft()\"></p-button>\n    </div>\n\n  </div>\n\n  <div class=\"center\">\n    <ng-content select=\"center-container\" class=\"center-container\"></ng-content>\n  </div>\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"right-toggle-button\" [ngClass]=\"{'toggeled': rightCollapsed}\">\n      <p-button [disabled]=\"ucPolicyActive\" icon=\"fa fa-angle-double-right\" class=\"collapse-right-button\" [ngClass]=\"{'toggeled': rightCollapsed}\"\n        (onClick)=\"collapseRight()\"></p-button>\n    </div>\n\n    <div class=\"right\" [class.collapse-right]=\"rightCollapsed\">\n      <ng-content select=\"right-container\"></ng-content>\n    </div>\n\n  </div>\n\n</div>",
                styles: [".global-layout{display:-webkit-box;display:flex;height:100%;width:100%;border:1px solid #414a4b;background:#ffffffff}.center{width:100%;overflow:hidden;min-width:430px}.left,.right{width:315px;display:-webkit-box;display:flex;overflow:hidden;visibility:visible;-webkit-transition:.5s;transition:.5s}.left{border-right:1px solid #c6c6c6;box-sizing:content-box}.right{border-left:1px solid #c6c6c6}.collapse-left,.collapse-right{width:0;visibility:hidden}.collapsible-container{display:-webkit-box;display:flex}.left-toggle-button,.right-toggle-button{width:25px;height:30px;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.left-toggle-button{margin-left:-25px}.right-toggle-button{margin-right:-25px}.left-toggle-button.toggeled{margin-left:0}.right-toggle-button.toggeled{margin-right:0}:host ::ng-deep .collapse-left-button .ui-button,:host ::ng-deep .collapse-left-button .ui-button:enabled:active,:host ::ng-deep .collapse-right-button .ui-button,:host ::ng-deep .collapse-right-button .ui-button:enabled:active{background:0 0;border:none;color:#313439;width:25px;height:30px;-webkit-transition:none;transition:none;font-size:12px}:host ::ng-deep .collapse-left-button .ui-button:enabled:hover,:host ::ng-deep .collapse-right-button .ui-button:enabled:hover{color:#424242;background:0 0;border:none}:host ::ng-deep .collapse-left-button.toggeled .ui-button,:host ::ng-deep .collapse-right-button.toggeled .ui-button{color:#424242}:host ::ng-deep .collapse-left-button .ui-button .ui-button-icon-left,:host ::ng-deep .collapse-right-button .ui-button .ui-button-icon-left{font-size:14px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-right-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-left-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;color:#404a4b}"]
            }] }
];
/** @nocollapse */
GlobalLayoutComponent.ctorParameters = () => [
    { type: LayoutService }
];
if (false) {
    /** @type {?} */
    GlobalLayoutComponent.prototype.leftCollapsed;
    /** @type {?} */
    GlobalLayoutComponent.prototype.rightCollapsed;
    /** @type {?} */
    GlobalLayoutComponent.prototype.ucPolicyActive;
    /**
     * @type {?}
     * @private
     */
    GlobalLayoutComponent.prototype.layoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvbGF5b3V0L2dsb2JhbC1sYXlvdXQvZ2xvYmFsLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTlELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJaEMsWUFDVSxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUp0QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUduQixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBTUQsYUFBYTtRQUNYLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7OztZQW5DRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtbkNBQTZDOzthQUU5Qzs7OztZQVBRLGFBQWE7Ozs7SUFTcEIsOENBQXNCOztJQUN0QiwrQ0FBdUI7O0lBQ3ZCLCtDQUF1Qjs7Ozs7SUFFckIsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dsb2JhbC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsb2JhbC1sYXlvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxlZnRDb2xsYXBzZWQgPSBmYWxzZTtcbiAgcmlnaHRDb2xsYXBzZWQgPSBmYWxzZTtcbiAgdWNQb2xpY3lBY3RpdmUgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmlzVWNQb2xpY3lNb2RlQWN0aXZlKCkuc3Vic2NyaWJlKGlzQWN0aXZlID0+IHtcbiAgICAgIHRoaXMucmlnaHRDb2xsYXBzZWQgPSBpc0FjdGl2ZTtcbiAgICAgIHRoaXMudWNQb2xpY3lBY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZS9FeHBhbmQgdGhlIGxlZnQgY29udGFpbmVyXG4gICAqXG4gICAqL1xuICBjb2xsYXBzZUxlZnQoKSB7XG4gICAgdGhpcy5sZWZ0Q29sbGFwc2VkID0gIXRoaXMubGVmdENvbGxhcHNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZS9FeHBhbmQgdGhlIHJpZ2h0IGNvbnRhaW5lclxuICAgKlxuICAgKi9cbiAgY29sbGFwc2VSaWdodCgpIHtcbiAgICB0aGlzLnJpZ2h0Q29sbGFwc2VkID0gIXRoaXMucmlnaHRDb2xsYXBzZWQ7XG4gIH1cblxufVxuIl19