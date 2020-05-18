/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
var GlobalLayoutComponent = /** @class */ (function () {
    function GlobalLayoutComponent(layoutService) {
        this.layoutService = layoutService;
        this.leftCollapsed = false;
        this.rightCollapsed = false;
        this.ucPolicyActive = false;
    }
    /**
     * @return {?}
     */
    GlobalLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.layoutService.isUcPolicyModeActive().subscribe((/**
         * @param {?} isActive
         * @return {?}
         */
        function (isActive) {
            _this.rightCollapsed = isActive;
            _this.ucPolicyActive = isActive;
        }));
    };
    /**
     * Collapse/Expand the left container
     *
     */
    /**
     * Collapse/Expand the left container
     *
     * @return {?}
     */
    GlobalLayoutComponent.prototype.collapseLeft = /**
     * Collapse/Expand the left container
     *
     * @return {?}
     */
    function () {
        this.leftCollapsed = !this.leftCollapsed;
    };
    /**
     * Collapse/Expand the right container
     *
     */
    /**
     * Collapse/Expand the right container
     *
     * @return {?}
     */
    GlobalLayoutComponent.prototype.collapseRight = /**
     * Collapse/Expand the right container
     *
     * @return {?}
     */
    function () {
        this.rightCollapsed = !this.rightCollapsed;
    };
    GlobalLayoutComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'global-layout',
                    template: "<div class=\"global-layout\">\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"left\" [class.collapse-left]=\"leftCollapsed\">\n      <ng-content select=\"left-container\"></ng-content>\n    </div>\n\n    <div class=\"left-toggle-button\" [ngClass]=\"{'toggeled': leftCollapsed}\">\n      <p-button icon=\"fa fa-angle-double-left\" class=\"collapse-left-button\" [ngClass]=\"{'toggeled': leftCollapsed}\"\n        (click)=\"collapseLeft()\"></p-button>\n    </div>\n\n  </div>\n\n  <div class=\"center\">\n    <ng-content select=\"center-container\" class=\"center-container\"></ng-content>\n  </div>\n\n  <div class=\"collapsible-container\">\n\n    <div class=\"right-toggle-button\" [ngClass]=\"{'toggeled': rightCollapsed}\">\n      <p-button [disabled]=\"ucPolicyActive\" icon=\"fa fa-angle-double-right\" class=\"collapse-right-button\" [ngClass]=\"{'toggeled': rightCollapsed}\"\n        (onClick)=\"collapseRight()\"></p-button>\n    </div>\n\n    <div class=\"right\" [class.collapse-right]=\"rightCollapsed\">\n      <ng-content select=\"right-container\"></ng-content>\n    </div>\n\n  </div>\n\n</div>",
                    styles: [".global-layout{display:-webkit-box;display:flex;height:100%;width:100%;border:1px solid #414a4b;background:#ffffffff}.center{width:100%;overflow:hidden;min-width:430px}.left,.right{width:315px;display:-webkit-box;display:flex;overflow:hidden;visibility:visible;-webkit-transition:.5s;transition:.5s}.left{border-right:1px solid #c6c6c6;box-sizing:content-box}.right{border-left:1px solid #c6c6c6}.collapse-left,.collapse-right{width:0;visibility:hidden}.collapsible-container{display:-webkit-box;display:flex}.left-toggle-button,.right-toggle-button{width:25px;height:30px;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.left-toggle-button{margin-left:-25px}.right-toggle-button{margin-right:-25px}.left-toggle-button.toggeled{margin-left:0}.right-toggle-button.toggeled{margin-right:0}:host ::ng-deep .collapse-left-button .ui-button,:host ::ng-deep .collapse-left-button .ui-button:enabled:active,:host ::ng-deep .collapse-right-button .ui-button,:host ::ng-deep .collapse-right-button .ui-button:enabled:active{background:0 0;border:none;color:#313439;width:25px;height:30px;-webkit-transition:none;transition:none;font-size:12px}:host ::ng-deep .collapse-left-button .ui-button:enabled:hover,:host ::ng-deep .collapse-right-button .ui-button:enabled:hover{color:#424242;background:0 0;border:none}:host ::ng-deep .collapse-left-button.toggeled .ui-button,:host ::ng-deep .collapse-right-button.toggeled .ui-button{color:#424242}:host ::ng-deep .collapse-left-button .ui-button .ui-button-icon-left,:host ::ng-deep .collapse-right-button .ui-button .ui-button-icon-left{font-size:14px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-right-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}:host ::ng-deep .collapse-left-button.toggeled .ui-button .ui-button-icon-left{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;color:#404a4b}"]
                }] }
    ];
    /** @nocollapse */
    GlobalLayoutComponent.ctorParameters = function () { return [
        { type: LayoutService }
    ]; };
    return GlobalLayoutComponent;
}());
export { GlobalLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvbGF5b3V0L2dsb2JhbC1sYXlvdXQvZ2xvYmFsLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlEO0lBVUUsK0JBQ1UsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKdEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFHbkIsQ0FBQzs7OztJQUVMLHdDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDMUQsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDL0IsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw0Q0FBWTs7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDZDQUFhOzs7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0MsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG1uQ0FBNkM7O2lCQUU5Qzs7OztnQkFQUSxhQUFhOztJQXVDdEIsNEJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQS9CWSxxQkFBcUI7OztJQUNoQyw4Q0FBc0I7O0lBQ3RCLCtDQUF1Qjs7SUFDdkIsK0NBQXVCOzs7OztJQUVyQiw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ2xvYmFsLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2xvYmFsLWxheW91dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGVmdENvbGxhcHNlZCA9IGZhbHNlO1xuICByaWdodENvbGxhcHNlZCA9IGZhbHNlO1xuICB1Y1BvbGljeUFjdGl2ZSA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxheW91dFNlcnZpY2UuaXNVY1BvbGljeU1vZGVBY3RpdmUoKS5zdWJzY3JpYmUoaXNBY3RpdmUgPT4ge1xuICAgICAgdGhpcy5yaWdodENvbGxhcHNlZCA9IGlzQWN0aXZlO1xuICAgICAgdGhpcy51Y1BvbGljeUFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlL0V4cGFuZCB0aGUgbGVmdCBjb250YWluZXJcbiAgICpcbiAgICovXG4gIGNvbGxhcHNlTGVmdCgpIHtcbiAgICB0aGlzLmxlZnRDb2xsYXBzZWQgPSAhdGhpcy5sZWZ0Q29sbGFwc2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlL0V4cGFuZCB0aGUgcmlnaHQgY29udGFpbmVyXG4gICAqXG4gICAqL1xuICBjb2xsYXBzZVJpZ2h0KCkge1xuICAgIHRoaXMucmlnaHRDb2xsYXBzZWQgPSAhdGhpcy5yaWdodENvbGxhcHNlZDtcbiAgfVxuXG59XG4iXX0=