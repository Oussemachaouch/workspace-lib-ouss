/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Navigator } from './navigator/navigator';
var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(navigator) {
        this.navigator = navigator;
    }
    /**
     * Used to filter tree nodes.
     * @param event - dom event.
     */
    /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    ExplorerComponent.prototype.filter = /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        // this.featuresManagement.dispatch(filterFeature({ query }));
    };
    ExplorerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-explorer',
                    template: "<!--<sc-explorer-toolbar (query)=\"filter($event)\"></sc-explorer-toolbar>\n\n<div class=\"tree-container\">\n  <ng-container *ngIf=\"(navigator.view() | async) === 'feature'\">\n    <sc-feature-explorer> </sc-feature-explorer>\n  </ng-container>\n  <ng-container *ngIf=\"(navigator.view() | async) === 'screen'\">\n    <sc-screen-explorer> </sc-screen-explorer>\n  </ng-container>\n</div>-->\n\n<!-- <ng-template #noFeatureContainer>\n  <div class=\"no-feature-container\">\n    <div class=\"no-data-message\">\n      <span>No feature configured.</span>\n    </div>\n    <div class=\"actions\">\n      <p-button\n        class=\"add-Feature\"\n        icon=\"fa fa-fw fa-plus\"\n        label=\"Add feature\"\n        (click)=\"addNewFeature()\"\n      ></p-button>\n    </div>\n  </div>\n</ng-template> -->\n",
                    styles: ["@charset \"UTF-8\";.no-feature-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:calc(100% - 30px);-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;background:#f3f3f3}.no-feature-container .no-data-message{padding-bottom:20px}:host ::ng-deep .tree-container{height:100%}:host ::ng-deep .ui-tree-container{height:100%;margin:0;overflow:auto;padding:.25em!important;white-space:nowrap}:host ::ng-deep .ui-tree{border:none!important;width:100%!important;padding:0}:host ::ng-deep .ui-tree .ui-tree-container{padding:0}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode{padding:.125em 0 0!important}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content{padding:0;border:0 solid transparent}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label.ui-state-highlight{background-color:inherit!important;color:inherit!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-content-selected{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-dragover{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-tree-toggler{font-size:12px}:host ::ng-deep .ui-tree .pi{font-family:\"Font Awesome 5 Free\";font-weight:900}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-right:before{content:\"\uF054\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-button-icon-only{font-size:14px}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-down:before{content:\"\uF078\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content{height:30px;background-color:#f9f9f9;border-left:4px solid #c6c6c6!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover{background-color:#eee}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:active{background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:focus{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable:active{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover{border:none;background:0 0}:host ::ng-deep .ui-tree .ui-treenode-label.ui-state-highlight{border:none;background:0 0;color:#222}:host ::ng-deep .screens-content .ui-tree{border:none}"]
                }] }
    ];
    /** @nocollapse */
    ExplorerComponent.ctorParameters = function () { return [
        { type: Navigator }
    ]; };
    return ExplorerComponent;
}());
export { ExplorerComponent };
if (false) {
    /** @type {?} */
    ExplorerComponent.prototype.navigator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWxEO0lBTUUsMkJBQ1MsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUUxQixDQUFDO0lBRUo7OztPQUdHOzs7Ozs7SUFDSCxrQ0FBTTs7Ozs7SUFBTixVQUFPLEtBQWE7UUFDbEIsOERBQThEO0lBQ2hFLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHN6QkFBd0M7O2lCQUV6Qzs7OztnQkFOUSxTQUFTOztJQW9CbEIsd0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLGlCQUFpQjs7O0lBRTFCLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlLCBTY3JlZW4gfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcblxuaW1wb3J0IHsgU2NyZWVuVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2MtZXhwbG9yZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwbG9yZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBsb3Jlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4cGxvcmVyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hdmlnYXRvcjogTmF2aWdhdG9yLFxuICAgIC8vIHByaXZhdGUgZmVhdHVyZXNNYW5hZ2VtZW50OiBTdG9yZTxGZWF0dXJlc1N0YXRlPlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlsdGVyIHRyZWUgbm9kZXMuXG4gICAqIEBwYXJhbSBldmVudCAtIGRvbSBldmVudC5cbiAgICovXG4gIGZpbHRlcihxdWVyeTogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goZmlsdGVyRmVhdHVyZSh7IHF1ZXJ5IH0pKTtcbiAgfVxufVxuIl19