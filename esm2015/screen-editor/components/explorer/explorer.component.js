/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Navigator } from './navigator/navigator';
export class ExplorerComponent {
    /**
     * @param {?} navigator
     */
    constructor(navigator) {
        this.navigator = navigator;
    }
    /**
     * Used to filter tree nodes.
     * @param {?} query
     * @return {?}
     */
    filter(query) {
        // this.featuresManagement.dispatch(filterFeature({ query }));
    }
}
ExplorerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-explorer',
                template: "<!--<sc-explorer-toolbar (query)=\"filter($event)\"></sc-explorer-toolbar>\n\n<div class=\"tree-container\">\n  <ng-container *ngIf=\"(navigator.view() | async) === 'feature'\">\n    <sc-feature-explorer> </sc-feature-explorer>\n  </ng-container>\n  <ng-container *ngIf=\"(navigator.view() | async) === 'screen'\">\n    <sc-screen-explorer> </sc-screen-explorer>\n  </ng-container>\n</div>-->\n\n<!-- <ng-template #noFeatureContainer>\n  <div class=\"no-feature-container\">\n    <div class=\"no-data-message\">\n      <span>No feature configured.</span>\n    </div>\n    <div class=\"actions\">\n      <p-button\n        class=\"add-Feature\"\n        icon=\"fa fa-fw fa-plus\"\n        label=\"Add feature\"\n        (click)=\"addNewFeature()\"\n      ></p-button>\n    </div>\n  </div>\n</ng-template> -->\n",
                styles: ["@charset \"UTF-8\";.no-feature-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:calc(100% - 30px);-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;background:#f3f3f3}.no-feature-container .no-data-message{padding-bottom:20px}:host ::ng-deep .tree-container{height:100%}:host ::ng-deep .ui-tree-container{height:100%;margin:0;overflow:auto;padding:.25em!important;white-space:nowrap}:host ::ng-deep .ui-tree{border:none!important;width:100%!important;padding:0}:host ::ng-deep .ui-tree .ui-tree-container{padding:0}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode{padding:.125em 0 0!important}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content{padding:0;border:0 solid transparent}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label.ui-state-highlight{background-color:inherit!important;color:inherit!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-content-selected{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content.ui-treenode-dragover{border-left:4px solid #d83431!important;background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-tree-toggler{font-size:12px}:host ::ng-deep .ui-tree .pi{font-family:\"Font Awesome 5 Free\";font-weight:900}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-right:before{content:\"\uF054\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-button-icon-only{font-size:14px}:host ::ng-deep .ui-tree .ui-tree-toggler.pi-caret-down:before{content:\"\uF078\"!important;font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content{height:30px;background-color:#f9f9f9;border-left:4px solid #c6c6c6!important}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:hover{background-color:#eee}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:active{background-color:#eee;border-color:#d83431;outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable.ui-treenode-content:focus{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-selectable:active{outline-width:0}:host ::ng-deep .ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover{border:none;background:0 0}:host ::ng-deep .ui-tree .ui-treenode-label.ui-state-highlight{border:none;background:0 0;color:#222}:host ::ng-deep .screens-content .ui-tree{border:none}"]
            }] }
];
/** @nocollapse */
ExplorerComponent.ctorParameters = () => [
    { type: Navigator }
];
if (false) {
    /** @type {?} */
    ExplorerComponent.prototype.navigator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT2xELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFDUyxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBRTFCLENBQUM7Ozs7OztJQU1KLE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLDhEQUE4RDtJQUNoRSxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixzekJBQXdDOzthQUV6Qzs7OztZQU5RLFNBQVM7Ozs7SUFTZCxzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmVhdHVyZSwgU2NyZWVuIH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL3NoYXJlZCc7XG5cbmltcG9ydCB7IFNjcmVlblRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLWV4cGxvcmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGxvcmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwbG9yZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBsb3JlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYXZpZ2F0b3I6IE5hdmlnYXRvcixcbiAgICAvLyBwcml2YXRlIGZlYXR1cmVzTWFuYWdlbWVudDogU3RvcmU8RmVhdHVyZXNTdGF0ZT5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpbHRlciB0cmVlIG5vZGVzLlxuICAgKiBAcGFyYW0gZXZlbnQgLSBkb20gZXZlbnQuXG4gICAqL1xuICBmaWx0ZXIocXVlcnk6IHN0cmluZykge1xuICAgIC8vIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKGZpbHRlckZlYXR1cmUoeyBxdWVyeSB9KSk7XG4gIH1cbn1cbiJdfQ==