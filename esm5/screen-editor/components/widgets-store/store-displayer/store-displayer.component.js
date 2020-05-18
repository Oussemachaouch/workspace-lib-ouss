/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TreeDragDropService } from 'primeng/api';
import { flatten, orderBy } from 'lodash';
import { UuidService } from '../../../core';
var StoreDisplayerComponent = /** @class */ (function () {
    function StoreDisplayerComponent(treeDragDropService, uuidService) {
        this.treeDragDropService = treeDragDropService;
        this.uuidService = uuidService;
        this.categories = [];
        this.components = [];
    }
    /**
     * Init the component treeNode
     * when start dragging
     * @param component - Component
     */
    /**
     * Init the component treeNode
     * when start dragging
     * @param {?} changes
     * @return {?}
     */
    StoreDisplayerComponent.prototype.ngOnChanges = /**
     * Init the component treeNode
     * when start dragging
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.store || changes.screen) {
            this.categories = this.filterComponents(this.store && this.store.categories);
            this.components = flatten(this.categories.map((/**
             * @param {?} category
             * @return {?}
             */
            function (category) { return category.components; })));
        }
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StoreDisplayerComponent.prototype.startDragComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        /** @type {?} */
        var componentDnDNode;
        if (!component['defaultContent']) {
            componentDnDNode = this.initDraggableComponentNode(component);
            componentDnDNode = this.addComponentMetaData(component, componentDnDNode);
        }
        else {
            componentDnDNode = this.buildNodeTree([component['defaultContent']], this.components)[0];
        }
        this.treeDragDropService.startDrag({
            tree: null,
            node: componentDnDNode,
            subNodes: [componentDnDNode],
            index: 1,
            scope: component.scope
                ? component.scope.filter((/**
                 * @param {?} scope
                 * @return {?}
                 */
                function (scope) {
                    return scope.split('.').find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item === _this.screen; })) !== undefined;
                }))
                : ''
        });
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    StoreDisplayerComponent.prototype.initDraggableComponentNode = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var hasChild = component.container && component.childs && component.childs.length > 0;
        /** @type {?} */
        var data = { type: component.name, properties: {} };
        if (component.container) {
            /** @type {?} */
            var randomName = Date.now().toString();
            data['components'] = [];
            data['componentsBreakpoints'] = { xs: 12, sm: 12, md: 6, lg: 4 };
            data['name'] = component.name + "-" + randomName.substr(8);
        }
        /** @type {?} */
        var draggableNode = {
            label: component.name,
            leaf: component.container ? false : true,
            children: component.container ? [] : undefined,
            data: data,
            rules: component['rules'],
            droppable: component.container ? true : false,
            type: 'sectionItem',
            expanded: component.container ? true : false,
            styleClass: hasChild ? 'child-item-container' : null,
            customicon: component.icon
        };
        if (component['defaultChilds']) {
            this.addDefaultChilds(draggableNode, component);
        }
        return draggableNode;
    };
    /**
     * Build component node that have default content.
     */
    /**
     * Build component node that have default content.
     * @param {?} content
     * @param {?} allComponent
     * @return {?}
     */
    StoreDisplayerComponent.prototype.buildNodeTree = /**
     * Build component node that have default content.
     * @param {?} content
     * @param {?} allComponent
     * @return {?}
     */
    function (content, allComponent) {
        var _this = this;
        return content.map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var component = allComponent.find((/**
             * @param {?} cmp
             * @return {?}
             */
            function (cmp) { return cmp.name === element.type; }));
            /** @type {?} */
            var node = _this.initDraggableComponentNode(component);
            node = _this.addComponentMetaData(component, node);
            node.data = element;
            node.children =
                element.components && element.components.length > 0
                    ? _this.buildNodeTree(element.components, allComponent)
                    : [];
            return node;
        }));
    };
    /**
     * @private
     * @param {?} draggableNode
     * @param {?} component
     * @return {?}
     */
    StoreDisplayerComponent.prototype.addDefaultChilds = /**
     * @private
     * @param {?} draggableNode
     * @param {?} component
     * @return {?}
     */
    function (draggableNode, component) {
        /** @type {?} */
        var childComponentName = component['defaultChilds'].child;
        /** @type {?} */
        var childNumber = +component['defaultChilds'].number;
        /** @type {?} */
        var breakPointsRequired = component['defaultChilds'].breakpointsRequired;
        /** @type {?} */
        var childComponent = this.components.find((/**
         * @param {?} cmp
         * @return {?}
         */
        function (cmp) { return cmp.name === childComponentName; }));
        childComponent.breakpointsRequired = breakPointsRequired;
        draggableNode['noComponentsBreakpoints'] =
            component['noComponentsBreakpoints'];
        draggableNode['defaultChilds'] = component['defaultChilds'];
        draggableNode['childComponentsBreakpoints'] = breakPointsRequired;
        if (childComponent) {
            for (var index = 0; index < childNumber; index++) {
                /** @type {?} */
                var childNode = this.initDraggableComponentNode(childComponent);
                childNode = this.addComponentMetaData(childComponent, childNode);
                draggableNode.children.push(childNode);
            }
        }
    };
    /**
     * @private
     * @param {?} component
     * @param {?} node
     * @return {?}
     */
    StoreDisplayerComponent.prototype.addComponentMetaData = /**
     * @private
     * @param {?} component
     * @param {?} node
     * @return {?}
     */
    function (component, node) {
        return tslib_1.__assign({}, node, { childs: component.childs, parents: component.parents });
    };
    /**
     * @private
     * @param {?} categories
     * @return {?}
     */
    StoreDisplayerComponent.prototype.filterComponents = /**
     * @private
     * @param {?} categories
     * @return {?}
     */
    function (categories) {
        var _this = this;
        if (!categories) {
            return [];
        }
        return categories
            .map((/**
         * @param {?} category
         * @return {?}
         */
        function (category) {
            return tslib_1.__assign({}, category, { components: orderBy(category.components.filter((/**
                 * @param {?} component
                 * @return {?}
                 */
                function (component) {
                    if (_this.screen && component.rules) {
                        /** @type {?} */
                        var screenRules = component.rules.filter((/**
                         * @param {?} rule
                         * @return {?}
                         */
                        function (rule) {
                            return _this.isScreenAllowed(rule, _this.screen);
                        }));
                        return screenRules.length > 0 ? true : false;
                    }
                    return true;
                })), 'displayOrder') });
        }))
            .filter((/**
         * @param {?} category
         * @return {?}
         */
        function (category) { return category.components.length > 0; }));
    };
    /**
     * @private
     * @param {?} rule
     * @param {?} screen
     * @return {?}
     */
    StoreDisplayerComponent.prototype.isScreenAllowed = /**
     * @private
     * @param {?} rule
     * @param {?} screen
     * @return {?}
     */
    function (rule, screen) {
        return ((rule.includedScreens &&
            rule.includedScreens.includes(screen) &&
            !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
            (rule.includedScreens &&
                rule.includedScreens.length === 0 &&
                rule.excludedScreens &&
                rule.excludedScreens.length === 0));
    };
    StoreDisplayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-store-displayer',
                    template: "<div class=\"components-list\">\n  <div *ngIf=\"mask\" class=\"components-mask\"></div>\n  <p-accordion\n    expandIcon=\"fa fa-fw fa-angle-right\"\n    collapseIcon=\"fa fa-fw fa-angle-down\"\n    *ngIf=\"categories && categories.length > 0; else displayError\"\n  >\n    <div *ngFor=\"let category of categories; let i = index\">\n      <p-accordionTab\n        [selected]=\"i === 0\"\n        header=\"{{ category.name | titlecase }}\"\n      >\n        <ul class=\"components\">\n          <li\n            class=\"ui-component\"\n            *ngFor=\"let component of category.components\"\n            pDraggable\n            (onDragStart)=\"startDragComponent(component)\"\n          >\n            <sc-widget [component]=\"component\"></sc-widget>\n          </li>\n        </ul>\n      </p-accordionTab>\n    </div>\n  </p-accordion>\n</div>\n\n<ng-template #displayError>\n  <div *ngIf=\"store.error; else displayMessage\" class=\"message\">\n    {{ store.error }}\n  </div>\n</ng-template>\n<ng-template #displayMessage>\n  <div class=\"message\">No component found to display</div>\n</ng-template>\n",
                    styles: [".components-list{margin-top:-1px;height:calc(100% - 24px);position:relative}.components{display:-webkit-box;display:flex;padding-left:0;flex-wrap:wrap;margin:0}.ui-component.selected,.ui-component:hover{background-color:rgba(0,0,0,.1);-webkit-transition:450ms cubic-bezier(.23,1,.32,1);transition:450ms cubic-bezier(.23,1,.32,1)}:host ::ng-deep .ui-component:hover .component-image{-webkit-transform:scale(1.1);transform:scale(1.1)}:host ::ng-deep .ui-component:hover .component-image svg{fill:#00a2ff}:host ::ng-deep .ui-component:hover .name{color:#00a2ff}.components li{list-style:none;max-width:90px;width:86px;height:60px;margin-right:2px;margin-left:0;position:relative;padding:10px}.components-mask{background:rgba(102,102,102,.2);position:absolute;width:314px;height:100%;z-index:9}.mask-message{margin:5px 39px;text-align:center;color:#212121;font-size:18px;background:rgba(102,102,102,.5);border-radius:3px}:host ::ng-deep .ui-accordion .ui-accordion-header a:active,:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:active,:host ::ng-deep .ui-accordion .ui-accordion-header:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:hover{border:0;border-top:0;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-header{background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a{text-decoration:none;padding:.5em!important;background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a .ui-accordion-toggle-icon{color:#1b1d1f}:host ::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a .ui-accordion-toggle-icon{color:#d83531!important}:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:active,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:focus{border:none}:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a{color:#d83531!important;font-weight:700;background-color:inherit!important;border:0!important;outline:0!important}:host ::ng-deep a:active,:host ::ng-deep a:focus{border:0!important;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-content{padding:1em;border-top:0;border:0}.message{text-align:center;align-content:center}"]
                }] }
    ];
    /** @nocollapse */
    StoreDisplayerComponent.ctorParameters = function () { return [
        { type: TreeDragDropService },
        { type: UuidService }
    ]; };
    StoreDisplayerComponent.propDecorators = {
        store: [{ type: Input }],
        mask: [{ type: Input }],
        screen: [{ type: Input }]
    };
    return StoreDisplayerComponent;
}());
export { StoreDisplayerComponent };
if (false) {
    /** @type {?} */
    StoreDisplayerComponent.prototype.store;
    /** @type {?} */
    StoreDisplayerComponent.prototype.mask;
    /** @type {?} */
    StoreDisplayerComponent.prototype.screen;
    /** @type {?} */
    StoreDisplayerComponent.prototype.categories;
    /** @type {?} */
    StoreDisplayerComponent.prototype.components;
    /**
     * @type {?}
     * @private
     */
    StoreDisplayerComponent.prototype.treeDragDropService;
    /**
     * @type {?}
     * @private
     */
    StoreDisplayerComponent.prototype.uuidService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGlzcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy93aWRnZXRzLXN0b3JlL3N0b3JlLWRpc3BsYXllci9zdG9yZS1kaXNwbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQVExQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDO0lBYUUsaUNBQ1UsbUJBQXdDLEVBQ3hDLFdBQXdCO1FBRHhCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMbEMsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQWtCLEVBQUUsQ0FBQztJQUs1QixDQUFDO0lBQ0o7Ozs7T0FJRzs7Ozs7OztJQUNILDZDQUFXOzs7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFVBQVUsRUFBbkIsQ0FBbUIsRUFBQyxDQUNyRCxDQUFD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Q2pDLElBQUksQ0FBQyxlQUFlO2dCQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDckMsQ0FBQztJQUNKLENBQUM7O2dCQTNLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbW1DQUErQzs7aUJBRWhEOzs7O2dCQWZRLG1CQUFtQjtnQkFTbkIsV0FBVzs7O3dCQVFqQixLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFvS1IsOEJBQUM7Q0FBQSxBQTVLRCxJQTRLQztTQXZLWSx1QkFBdUI7OztJQUNsQyx3Q0FBb0M7O0lBQ3BDLHVDQUF1Qjs7SUFDdkIseUNBQXdCOztJQUV4Qiw2Q0FBNEI7O0lBQzVCLDZDQUErQjs7Ozs7SUFHN0Isc0RBQWdEOzs7OztJQUNoRCw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBmbGF0dGVuLCBvcmRlckJ5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgVWlDb21wb25lbnQsXG4gIFdpZGdldHNMaWJyYXJ5TW9kZWwsXG4gIFVpVHJlZU5vZGUsXG4gIENhdGVnb3J5XG59IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBVdWlkU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1zdG9yZS1kaXNwbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZGlzcGxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RvcmUtZGlzcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZURpc3BsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHN0b3JlOiBXaWRnZXRzTGlicmFyeU1vZGVsO1xuICBASW5wdXQoKSBtYXNrOiBib29sZWFuO1xuICBASW5wdXQoKSBzY3JlZW46IHN0cmluZztcblxuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XG4gIGNvbXBvbmVudHM6IFVpQ29tcG9uZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyZWVEcmFnRHJvcFNlcnZpY2U6IFRyZWVEcmFnRHJvcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1dWlkU2VydmljZTogVXVpZFNlcnZpY2VcbiAgKSB7fVxuICAvKipcbiAgICogSW5pdCB0aGUgY29tcG9uZW50IHRyZWVOb2RlXG4gICAqIHdoZW4gc3RhcnQgZHJhZ2dpbmdcbiAgICogQHBhcmFtIGNvbXBvbmVudCAtIENvbXBvbmVudFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnN0b3JlIHx8IGNoYW5nZXMuc2NyZWVuKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmZpbHRlckNvbXBvbmVudHMoXG4gICAgICAgIHRoaXMuc3RvcmUgJiYgdGhpcy5zdG9yZS5jYXRlZ29yaWVzXG4gICAgICApO1xuICAgICAgdGhpcy5jb21wb25lbnRzID0gZmxhdHRlbihcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS5jb21wb25lbnRzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdGFydERyYWdDb21wb25lbnQoY29tcG9uZW50OiBVaUNvbXBvbmVudCkge1xuICAgIGxldCBjb21wb25lbnREbkROb2RlO1xuICAgIGlmICghY29tcG9uZW50WydkZWZhdWx0Q29udGVudCddKSB7XG4gICAgICBjb21wb25lbnREbkROb2RlID0gdGhpcy5pbml0RHJhZ2dhYmxlQ29tcG9uZW50Tm9kZShjb21wb25lbnQpO1xuICAgICAgY29tcG9uZW50RG5ETm9kZSA9IHRoaXMuYWRkQ29tcG9uZW50TWV0YURhdGEoY29tcG9uZW50LCBjb21wb25lbnREbkROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50RG5ETm9kZSA9IHRoaXMuYnVpbGROb2RlVHJlZShcbiAgICAgICAgW2NvbXBvbmVudFsnZGVmYXVsdENvbnRlbnQnXV0sXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1xuICAgICAgKVswXTtcbiAgICB9XG4gICAgdGhpcy50cmVlRHJhZ0Ryb3BTZXJ2aWNlLnN0YXJ0RHJhZyh7XG4gICAgICB0cmVlOiBudWxsLFxuICAgICAgbm9kZTogY29tcG9uZW50RG5ETm9kZSxcbiAgICAgIHN1Yk5vZGVzOiBbY29tcG9uZW50RG5ETm9kZV0sXG4gICAgICBpbmRleDogMSxcbiAgICAgIHNjb3BlOiBjb21wb25lbnQuc2NvcGVcbiAgICAgICAgPyBjb21wb25lbnQuc2NvcGUuZmlsdGVyKFxuICAgICAgICAgICAgc2NvcGUgPT5cbiAgICAgICAgICAgICAgc2NvcGUuc3BsaXQoJy4nKS5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5zY3JlZW4pICE9PSB1bmRlZmluZWRcbiAgICAgICAgICApXG4gICAgICAgIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERyYWdnYWJsZUNvbXBvbmVudE5vZGUoY29tcG9uZW50OiBVaUNvbXBvbmVudCk6IFVpVHJlZU5vZGUge1xuICAgIGNvbnN0IGhhc0NoaWxkID1cbiAgICAgIGNvbXBvbmVudC5jb250YWluZXIgJiYgY29tcG9uZW50LmNoaWxkcyAmJiBjb21wb25lbnQuY2hpbGRzLmxlbmd0aCA+IDA7XG4gICAgY29uc3QgZGF0YSA9IHsgdHlwZTogY29tcG9uZW50Lm5hbWUsIHByb3BlcnRpZXM6IHt9IH07XG4gICAgaWYgKGNvbXBvbmVudC5jb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHJhbmRvbU5hbWUgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICBkYXRhWydjb21wb25lbnRzJ10gPSBbXTtcbiAgICAgIGRhdGFbJ2NvbXBvbmVudHNCcmVha3BvaW50cyddID0geyB4czogMTIsIHNtOiAxMiwgbWQ6IDYsIGxnOiA0IH07XG4gICAgICBkYXRhWyduYW1lJ10gPSBgJHtjb21wb25lbnQubmFtZX0tJHtyYW5kb21OYW1lLnN1YnN0cig4KX1gO1xuICAgIH1cbiAgICBjb25zdCBkcmFnZ2FibGVOb2RlID0ge1xuICAgICAgbGFiZWw6IGNvbXBvbmVudC5uYW1lLFxuICAgICAgbGVhZjogY29tcG9uZW50LmNvbnRhaW5lciA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiBjb21wb25lbnQuY29udGFpbmVyID8gW10gOiB1bmRlZmluZWQsXG4gICAgICBkYXRhLFxuICAgICAgcnVsZXM6IGNvbXBvbmVudFsncnVsZXMnXSxcbiAgICAgIGRyb3BwYWJsZTogY29tcG9uZW50LmNvbnRhaW5lciA/IHRydWUgOiBmYWxzZSxcbiAgICAgIHR5cGU6ICdzZWN0aW9uSXRlbScsXG4gICAgICBleHBhbmRlZDogY29tcG9uZW50LmNvbnRhaW5lciA/IHRydWUgOiBmYWxzZSxcbiAgICAgIHN0eWxlQ2xhc3M6IGhhc0NoaWxkID8gJ2NoaWxkLWl0ZW0tY29udGFpbmVyJyA6IG51bGwsXG4gICAgICBjdXN0b21pY29uOiBjb21wb25lbnQuaWNvblxuICAgIH07XG5cbiAgICBpZiAoY29tcG9uZW50WydkZWZhdWx0Q2hpbGRzJ10pIHtcbiAgICAgIHRoaXMuYWRkRGVmYXVsdENoaWxkcyhkcmFnZ2FibGVOb2RlLCBjb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZHJhZ2dhYmxlTm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjb21wb25lbnQgbm9kZSB0aGF0IGhhdmUgZGVmYXVsdCBjb250ZW50LlxuICAgKi9cbiAgYnVpbGROb2RlVHJlZShjb250ZW50LCBhbGxDb21wb25lbnQpIHtcbiAgICByZXR1cm4gY29udGVudC5tYXAoZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBhbGxDb21wb25lbnQuZmluZChjbXAgPT4gY21wLm5hbWUgPT09IGVsZW1lbnQudHlwZSk7XG4gICAgICBsZXQgbm9kZSA9IHRoaXMuaW5pdERyYWdnYWJsZUNvbXBvbmVudE5vZGUoY29tcG9uZW50KTtcbiAgICAgIG5vZGUgPSB0aGlzLmFkZENvbXBvbmVudE1ldGFEYXRhKGNvbXBvbmVudCwgbm9kZSk7XG4gICAgICBub2RlLmRhdGEgPSBlbGVtZW50O1xuICAgICAgbm9kZS5jaGlsZHJlbiA9XG4gICAgICAgIGVsZW1lbnQuY29tcG9uZW50cyAmJiBlbGVtZW50LmNvbXBvbmVudHMubGVuZ3RoID4gMFxuICAgICAgICAgID8gdGhpcy5idWlsZE5vZGVUcmVlKGVsZW1lbnQuY29tcG9uZW50cywgYWxsQ29tcG9uZW50KVxuICAgICAgICAgIDogW107XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkRGVmYXVsdENoaWxkcyhkcmFnZ2FibGVOb2RlOiBVaVRyZWVOb2RlLCBjb21wb25lbnQ6IFVpQ29tcG9uZW50KSB7XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnROYW1lID0gY29tcG9uZW50WydkZWZhdWx0Q2hpbGRzJ10uY2hpbGQ7XG4gICAgY29uc3QgY2hpbGROdW1iZXIgPSArY29tcG9uZW50WydkZWZhdWx0Q2hpbGRzJ10ubnVtYmVyO1xuICAgIGNvbnN0IGJyZWFrUG9pbnRzUmVxdWlyZWQgPSBjb21wb25lbnRbJ2RlZmF1bHRDaGlsZHMnXS5icmVha3BvaW50c1JlcXVpcmVkO1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmZpbmQoXG4gICAgICBjbXAgPT4gY21wLm5hbWUgPT09IGNoaWxkQ29tcG9uZW50TmFtZVxuICAgICk7XG4gICAgY2hpbGRDb21wb25lbnQuYnJlYWtwb2ludHNSZXF1aXJlZCA9IGJyZWFrUG9pbnRzUmVxdWlyZWQ7XG4gICAgZHJhZ2dhYmxlTm9kZVsnbm9Db21wb25lbnRzQnJlYWtwb2ludHMnXSA9XG4gICAgICBjb21wb25lbnRbJ25vQ29tcG9uZW50c0JyZWFrcG9pbnRzJ107XG4gICAgZHJhZ2dhYmxlTm9kZVsnZGVmYXVsdENoaWxkcyddID0gY29tcG9uZW50WydkZWZhdWx0Q2hpbGRzJ107XG4gICAgZHJhZ2dhYmxlTm9kZVsnY2hpbGRDb21wb25lbnRzQnJlYWtwb2ludHMnXSA9IGJyZWFrUG9pbnRzUmVxdWlyZWQ7XG4gICAgaWYgKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpbGROdW1iZXI7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZSA9IHRoaXMuaW5pdERyYWdnYWJsZUNvbXBvbmVudE5vZGUoY2hpbGRDb21wb25lbnQpO1xuICAgICAgICBjaGlsZE5vZGUgPSB0aGlzLmFkZENvbXBvbmVudE1ldGFEYXRhKGNoaWxkQ29tcG9uZW50LCBjaGlsZE5vZGUpO1xuICAgICAgICBkcmFnZ2FibGVOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENvbXBvbmVudE1ldGFEYXRhKFxuICAgIGNvbXBvbmVudDogVWlDb21wb25lbnQsXG4gICAgbm9kZTogVWlUcmVlTm9kZVxuICApOiBVaVRyZWVOb2RlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubm9kZSxcbiAgICAgIGNoaWxkczogY29tcG9uZW50LmNoaWxkcyxcbiAgICAgIHBhcmVudHM6IGNvbXBvbmVudC5wYXJlbnRzXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ29tcG9uZW50cyhjYXRlZ29yaWVzOiBDYXRlZ29yeVtdKTogQ2F0ZWdvcnlbXSB7XG4gICAgaWYgKCFjYXRlZ29yaWVzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBjYXRlZ29yaWVzXG4gICAgICAubWFwKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jYXRlZ29yeSxcbiAgICAgICAgICBjb21wb25lbnRzOiBvcmRlckJ5KFxuICAgICAgICAgICAgY2F0ZWdvcnkuY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2NyZWVuICYmIGNvbXBvbmVudC5ydWxlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlblJ1bGVzID0gY29tcG9uZW50LnJ1bGVzLmZpbHRlcihydWxlID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzU2NyZWVuQWxsb3dlZChydWxlLCB0aGlzLnNjcmVlbilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY3JlZW5SdWxlcy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAnZGlzcGxheU9yZGVyJ1xuICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmNvbXBvbmVudHMubGVuZ3RoID4gMCk7XG4gIH1cblxuICBwcml2YXRlIGlzU2NyZWVuQWxsb3dlZChydWxlOiBhbnksIHNjcmVlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIChydWxlLmluY2x1ZGVkU2NyZWVucyAmJlxuICAgICAgICBydWxlLmluY2x1ZGVkU2NyZWVucy5pbmNsdWRlcyhzY3JlZW4pICYmXG4gICAgICAgICEocnVsZS5leGNsdWRlZFNjcmVlbnMgJiYgcnVsZS5leGNsdWRlZFNjcmVlbnMuaW5jbHVkZXMoc2NyZWVuKSkpIHx8XG4gICAgICAocnVsZS5pbmNsdWRlZFNjcmVlbnMgJiZcbiAgICAgICAgcnVsZS5pbmNsdWRlZFNjcmVlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgIHJ1bGUuZXhjbHVkZWRTY3JlZW5zICYmXG4gICAgICAgIHJ1bGUuZXhjbHVkZWRTY3JlZW5zLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG59XG4iXX0=