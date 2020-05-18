/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TreeDragDropService } from 'primeng/api';
import { flatten, orderBy } from 'lodash';
import { UuidService } from '../../../core';
export class StoreDisplayerComponent {
    /**
     * @param {?} treeDragDropService
     * @param {?} uuidService
     */
    constructor(treeDragDropService, uuidService) {
        this.treeDragDropService = treeDragDropService;
        this.uuidService = uuidService;
        this.categories = [];
        this.components = [];
    }
    /**
     * Init the component treeNode
     * when start dragging
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.store || changes.screen) {
            this.categories = this.filterComponents(this.store && this.store.categories);
            this.components = flatten(this.categories.map((/**
             * @param {?} category
             * @return {?}
             */
            category => category.components)));
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    startDragComponent(component) {
        /** @type {?} */
        let componentDnDNode;
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
                scope => scope.split('.').find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item === this.screen)) !== undefined))
                : ''
        });
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    initDraggableComponentNode(component) {
        /** @type {?} */
        const hasChild = component.container && component.childs && component.childs.length > 0;
        /** @type {?} */
        const data = { type: component.name, properties: {} };
        if (component.container) {
            /** @type {?} */
            const randomName = Date.now().toString();
            data['components'] = [];
            data['componentsBreakpoints'] = { xs: 12, sm: 12, md: 6, lg: 4 };
            data['name'] = `${component.name}-${randomName.substr(8)}`;
        }
        /** @type {?} */
        const draggableNode = {
            label: component.name,
            leaf: component.container ? false : true,
            children: component.container ? [] : undefined,
            data,
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
    }
    /**
     * Build component node that have default content.
     * @param {?} content
     * @param {?} allComponent
     * @return {?}
     */
    buildNodeTree(content, allComponent) {
        return content.map((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            const component = allComponent.find((/**
             * @param {?} cmp
             * @return {?}
             */
            cmp => cmp.name === element.type));
            /** @type {?} */
            let node = this.initDraggableComponentNode(component);
            node = this.addComponentMetaData(component, node);
            node.data = element;
            node.children =
                element.components && element.components.length > 0
                    ? this.buildNodeTree(element.components, allComponent)
                    : [];
            return node;
        }));
    }
    /**
     * @private
     * @param {?} draggableNode
     * @param {?} component
     * @return {?}
     */
    addDefaultChilds(draggableNode, component) {
        /** @type {?} */
        const childComponentName = component['defaultChilds'].child;
        /** @type {?} */
        const childNumber = +component['defaultChilds'].number;
        /** @type {?} */
        const breakPointsRequired = component['defaultChilds'].breakpointsRequired;
        /** @type {?} */
        const childComponent = this.components.find((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => cmp.name === childComponentName));
        childComponent.breakpointsRequired = breakPointsRequired;
        draggableNode['noComponentsBreakpoints'] =
            component['noComponentsBreakpoints'];
        draggableNode['defaultChilds'] = component['defaultChilds'];
        draggableNode['childComponentsBreakpoints'] = breakPointsRequired;
        if (childComponent) {
            for (let index = 0; index < childNumber; index++) {
                /** @type {?} */
                let childNode = this.initDraggableComponentNode(childComponent);
                childNode = this.addComponentMetaData(childComponent, childNode);
                draggableNode.children.push(childNode);
            }
        }
    }
    /**
     * @private
     * @param {?} component
     * @param {?} node
     * @return {?}
     */
    addComponentMetaData(component, node) {
        return Object.assign({}, node, { childs: component.childs, parents: component.parents });
    }
    /**
     * @private
     * @param {?} categories
     * @return {?}
     */
    filterComponents(categories) {
        if (!categories) {
            return [];
        }
        return categories
            .map((/**
         * @param {?} category
         * @return {?}
         */
        category => {
            return Object.assign({}, category, { components: orderBy(category.components.filter((/**
                 * @param {?} component
                 * @return {?}
                 */
                component => {
                    if (this.screen && component.rules) {
                        /** @type {?} */
                        const screenRules = component.rules.filter((/**
                         * @param {?} rule
                         * @return {?}
                         */
                        rule => this.isScreenAllowed(rule, this.screen)));
                        return screenRules.length > 0 ? true : false;
                    }
                    return true;
                })), 'displayOrder') });
        }))
            .filter((/**
         * @param {?} category
         * @return {?}
         */
        category => category.components.length > 0));
    }
    /**
     * @private
     * @param {?} rule
     * @param {?} screen
     * @return {?}
     */
    isScreenAllowed(rule, screen) {
        return ((rule.includedScreens &&
            rule.includedScreens.includes(screen) &&
            !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
            (rule.includedScreens &&
                rule.includedScreens.length === 0 &&
                rule.excludedScreens &&
                rule.excludedScreens.length === 0));
    }
}
StoreDisplayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-store-displayer',
                template: "<div class=\"components-list\">\n  <div *ngIf=\"mask\" class=\"components-mask\"></div>\n  <p-accordion\n    expandIcon=\"fa fa-fw fa-angle-right\"\n    collapseIcon=\"fa fa-fw fa-angle-down\"\n    *ngIf=\"categories && categories.length > 0; else displayError\"\n  >\n    <div *ngFor=\"let category of categories; let i = index\">\n      <p-accordionTab\n        [selected]=\"i === 0\"\n        header=\"{{ category.name | titlecase }}\"\n      >\n        <ul class=\"components\">\n          <li\n            class=\"ui-component\"\n            *ngFor=\"let component of category.components\"\n            pDraggable\n            (onDragStart)=\"startDragComponent(component)\"\n          >\n            <sc-widget [component]=\"component\"></sc-widget>\n          </li>\n        </ul>\n      </p-accordionTab>\n    </div>\n  </p-accordion>\n</div>\n\n<ng-template #displayError>\n  <div *ngIf=\"store.error; else displayMessage\" class=\"message\">\n    {{ store.error }}\n  </div>\n</ng-template>\n<ng-template #displayMessage>\n  <div class=\"message\">No component found to display</div>\n</ng-template>\n",
                styles: [".components-list{margin-top:-1px;height:calc(100% - 24px);position:relative}.components{display:-webkit-box;display:flex;padding-left:0;flex-wrap:wrap;margin:0}.ui-component.selected,.ui-component:hover{background-color:rgba(0,0,0,.1);-webkit-transition:450ms cubic-bezier(.23,1,.32,1);transition:450ms cubic-bezier(.23,1,.32,1)}:host ::ng-deep .ui-component:hover .component-image{-webkit-transform:scale(1.1);transform:scale(1.1)}:host ::ng-deep .ui-component:hover .component-image svg{fill:#00a2ff}:host ::ng-deep .ui-component:hover .name{color:#00a2ff}.components li{list-style:none;max-width:90px;width:86px;height:60px;margin-right:2px;margin-left:0;position:relative;padding:10px}.components-mask{background:rgba(102,102,102,.2);position:absolute;width:314px;height:100%;z-index:9}.mask-message{margin:5px 39px;text-align:center;color:#212121;font-size:18px;background:rgba(102,102,102,.5);border-radius:3px}:host ::ng-deep .ui-accordion .ui-accordion-header a:active,:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:active,:host ::ng-deep .ui-accordion .ui-accordion-header:focus,:host ::ng-deep .ui-accordion .ui-accordion-header:hover{border:0;border-top:0;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-header{background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a{text-decoration:none;padding:.5em!important;background-color:#f9f9f9!important;border-radius:0;margin:0;border:0;border-top:0}:host ::ng-deep .ui-accordion .ui-accordion-header a .ui-accordion-toggle-icon{color:#1b1d1f}:host ::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a .ui-accordion-toggle-icon{color:#d83531!important}:host ::ng-deep .ui-accordion .ui-accordion-header a:focus,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:active,:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a:focus{border:none}:host ::ng-deep .ui-accordion .ui-accordion-header.ui-state-active a{color:#d83531!important;font-weight:700;background-color:inherit!important;border:0!important;outline:0!important}:host ::ng-deep a:active,:host ::ng-deep a:focus{border:0!important;outline:0!important}:host ::ng-deep .ui-accordion .ui-accordion-content{padding:1em;border-top:0;border:0}.message{text-align:center;align-content:center}"]
            }] }
];
/** @nocollapse */
StoreDisplayerComponent.ctorParameters = () => [
    { type: TreeDragDropService },
    { type: UuidService }
];
StoreDisplayerComponent.propDecorators = {
    store: [{ type: Input }],
    mask: [{ type: Input }],
    screen: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGlzcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy93aWRnZXRzLXN0b3JlL3N0b3JlLWRpc3BsYXllci9zdG9yZS1kaXNwbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBUTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPNUMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFRbEMsWUFDVSxtQkFBd0MsRUFDeEMsV0FBd0I7UUFEeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxsQyxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBSzVCLENBQUM7Ozs7Ozs7SUFNSixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ3BDLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLENBQ3JELENBQUM7U0FDSDtJQUNILENBQUM7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QUs7cUJBQ0wsS0FBSzs7OztJQUZOLHdDQUFvQzs7SUFDcEMsdUNBQXVCOztJQUN2Qix5Q0FBd0I7O0lBRXhCLDZDQUE0Qjs7SUFDNUIsNkNBQStCOzs7OztJQUc3QixzREFBZ0Q7Ozs7O0lBQ2hELDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZURyYWdEcm9wU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IGZsYXR0ZW4sIG9yZGVyQnkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuICBVaUNvbXBvbmVudCxcbiAgV2lkZ2V0c0xpYnJhcnlNb2RlbCxcbiAgVWlUcmVlTm9kZSxcbiAgQ2F0ZWdvcnlcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IFV1aWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXN0b3JlLWRpc3BsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1kaXNwbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1kaXNwbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRGlzcGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc3RvcmU6IFdpZGdldHNMaWJyYXJ5TW9kZWw7XG4gIEBJbnB1dCgpIG1hc2s6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNjcmVlbjogc3RyaW5nO1xuXG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgY29tcG9uZW50czogVWlDb21wb25lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJlZURyYWdEcm9wU2VydmljZTogVHJlZURyYWdEcm9wU2VydmljZSxcbiAgICBwcml2YXRlIHV1aWRTZXJ2aWNlOiBVdWlkU2VydmljZVxuICApIHt9XG4gIC8qKlxuICAgKiBJbml0IHRoZSBjb21wb25lbnQgdHJlZU5vZGVcbiAgICogd2hlbiBzdGFydCBkcmFnZ2luZ1xuICAgKiBAcGFyYW0gY29tcG9uZW50IC0gQ29tcG9uZW50XG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc3RvcmUgfHwgY2hhbmdlcy5zY3JlZW4pIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuZmlsdGVyQ29tcG9uZW50cyhcbiAgICAgICAgdGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlLmNhdGVnb3JpZXNcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBmbGF0dGVuKFxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmNvbXBvbmVudHMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RHJhZ0NvbXBvbmVudChjb21wb25lbnQ6IFVpQ29tcG9uZW50KSB7XG4gICAgbGV0IGNvbXBvbmVudERuRE5vZGU7XG4gICAgaWYgKCFjb21wb25lbnRbJ2RlZmF1bHRDb250ZW50J10pIHtcbiAgICAgIGNvbXBvbmVudERuRE5vZGUgPSB0aGlzLmluaXREcmFnZ2FibGVDb21wb25lbnROb2RlKGNvbXBvbmVudCk7XG4gICAgICBjb21wb25lbnREbkROb2RlID0gdGhpcy5hZGRDb21wb25lbnRNZXRhRGF0YShjb21wb25lbnQsIGNvbXBvbmVudERuRE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnREbkROb2RlID0gdGhpcy5idWlsZE5vZGVUcmVlKFxuICAgICAgICBbY29tcG9uZW50WydkZWZhdWx0Q29udGVudCddXSxcbiAgICAgICAgdGhpcy5jb21wb25lbnRzXG4gICAgICApWzBdO1xuICAgIH1cbiAgICB0aGlzLnRyZWVEcmFnRHJvcFNlcnZpY2Uuc3RhcnREcmFnKHtcbiAgICAgIHRyZWU6IG51bGwsXG4gICAgICBub2RlOiBjb21wb25lbnREbkROb2RlLFxuICAgICAgc3ViTm9kZXM6IFtjb21wb25lbnREbkROb2RlXSxcbiAgICAgIGluZGV4OiAxLFxuICAgICAgc2NvcGU6IGNvbXBvbmVudC5zY29wZVxuICAgICAgICA/IGNvbXBvbmVudC5zY29wZS5maWx0ZXIoXG4gICAgICAgICAgICBzY29wZSA9PlxuICAgICAgICAgICAgICBzY29wZS5zcGxpdCgnLicpLmZpbmQoaXRlbSA9PiBpdGVtID09PSB0aGlzLnNjcmVlbikgIT09IHVuZGVmaW5lZFxuICAgICAgICAgIClcbiAgICAgICAgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RHJhZ2dhYmxlQ29tcG9uZW50Tm9kZShjb21wb25lbnQ6IFVpQ29tcG9uZW50KTogVWlUcmVlTm9kZSB7XG4gICAgY29uc3QgaGFzQ2hpbGQgPVxuICAgICAgY29tcG9uZW50LmNvbnRhaW5lciAmJiBjb21wb25lbnQuY2hpbGRzICYmIGNvbXBvbmVudC5jaGlsZHMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBkYXRhID0geyB0eXBlOiBjb21wb25lbnQubmFtZSwgcHJvcGVydGllczoge30gfTtcbiAgICBpZiAoY29tcG9uZW50LmNvbnRhaW5lcikge1xuICAgICAgY29uc3QgcmFuZG9tTmFtZSA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgIGRhdGFbJ2NvbXBvbmVudHMnXSA9IFtdO1xuICAgICAgZGF0YVsnY29tcG9uZW50c0JyZWFrcG9pbnRzJ10gPSB7IHhzOiAxMiwgc206IDEyLCBtZDogNiwgbGc6IDQgfTtcbiAgICAgIGRhdGFbJ25hbWUnXSA9IGAke2NvbXBvbmVudC5uYW1lfS0ke3JhbmRvbU5hbWUuc3Vic3RyKDgpfWA7XG4gICAgfVxuICAgIGNvbnN0IGRyYWdnYWJsZU5vZGUgPSB7XG4gICAgICBsYWJlbDogY29tcG9uZW50Lm5hbWUsXG4gICAgICBsZWFmOiBjb21wb25lbnQuY29udGFpbmVyID8gZmFsc2UgOiB0cnVlLFxuICAgICAgY2hpbGRyZW46IGNvbXBvbmVudC5jb250YWluZXIgPyBbXSA6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGEsXG4gICAgICBydWxlczogY29tcG9uZW50WydydWxlcyddLFxuICAgICAgZHJvcHBhYmxlOiBjb21wb25lbnQuY29udGFpbmVyID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgdHlwZTogJ3NlY3Rpb25JdGVtJyxcbiAgICAgIGV4cGFuZGVkOiBjb21wb25lbnQuY29udGFpbmVyID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgc3R5bGVDbGFzczogaGFzQ2hpbGQgPyAnY2hpbGQtaXRlbS1jb250YWluZXInIDogbnVsbCxcbiAgICAgIGN1c3RvbWljb246IGNvbXBvbmVudC5pY29uXG4gICAgfTtcblxuICAgIGlmIChjb21wb25lbnRbJ2RlZmF1bHRDaGlsZHMnXSkge1xuICAgICAgdGhpcy5hZGREZWZhdWx0Q2hpbGRzKGRyYWdnYWJsZU5vZGUsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiBkcmFnZ2FibGVOb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNvbXBvbmVudCBub2RlIHRoYXQgaGF2ZSBkZWZhdWx0IGNvbnRlbnQuXG4gICAqL1xuICBidWlsZE5vZGVUcmVlKGNvbnRlbnQsIGFsbENvbXBvbmVudCkge1xuICAgIHJldHVybiBjb250ZW50Lm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGFsbENvbXBvbmVudC5maW5kKGNtcCA9PiBjbXAubmFtZSA9PT0gZWxlbWVudC50eXBlKTtcbiAgICAgIGxldCBub2RlID0gdGhpcy5pbml0RHJhZ2dhYmxlQ29tcG9uZW50Tm9kZShjb21wb25lbnQpO1xuICAgICAgbm9kZSA9IHRoaXMuYWRkQ29tcG9uZW50TWV0YURhdGEoY29tcG9uZW50LCBub2RlKTtcbiAgICAgIG5vZGUuZGF0YSA9IGVsZW1lbnQ7XG4gICAgICBub2RlLmNoaWxkcmVuID1cbiAgICAgICAgZWxlbWVudC5jb21wb25lbnRzICYmIGVsZW1lbnQuY29tcG9uZW50cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0aGlzLmJ1aWxkTm9kZVRyZWUoZWxlbWVudC5jb21wb25lbnRzLCBhbGxDb21wb25lbnQpXG4gICAgICAgICAgOiBbXTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGREZWZhdWx0Q2hpbGRzKGRyYWdnYWJsZU5vZGU6IFVpVHJlZU5vZGUsIGNvbXBvbmVudDogVWlDb21wb25lbnQpIHtcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudE5hbWUgPSBjb21wb25lbnRbJ2RlZmF1bHRDaGlsZHMnXS5jaGlsZDtcbiAgICBjb25zdCBjaGlsZE51bWJlciA9ICtjb21wb25lbnRbJ2RlZmF1bHRDaGlsZHMnXS5udW1iZXI7XG4gICAgY29uc3QgYnJlYWtQb2ludHNSZXF1aXJlZCA9IGNvbXBvbmVudFsnZGVmYXVsdENoaWxkcyddLmJyZWFrcG9pbnRzUmVxdWlyZWQ7XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHMuZmluZChcbiAgICAgIGNtcCA9PiBjbXAubmFtZSA9PT0gY2hpbGRDb21wb25lbnROYW1lXG4gICAgKTtcbiAgICBjaGlsZENvbXBvbmVudC5icmVha3BvaW50c1JlcXVpcmVkID0gYnJlYWtQb2ludHNSZXF1aXJlZDtcbiAgICBkcmFnZ2FibGVOb2RlWydub0NvbXBvbmVudHNCcmVha3BvaW50cyddID1cbiAgICAgIGNvbXBvbmVudFsnbm9Db21wb25lbnRzQnJlYWtwb2ludHMnXTtcbiAgICBkcmFnZ2FibGVOb2RlWydkZWZhdWx0Q2hpbGRzJ10gPSBjb21wb25lbnRbJ2RlZmF1bHRDaGlsZHMnXTtcbiAgICBkcmFnZ2FibGVOb2RlWydjaGlsZENvbXBvbmVudHNCcmVha3BvaW50cyddID0gYnJlYWtQb2ludHNSZXF1aXJlZDtcbiAgICBpZiAoY2hpbGRDb21wb25lbnQpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlsZE51bWJlcjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgY2hpbGROb2RlID0gdGhpcy5pbml0RHJhZ2dhYmxlQ29tcG9uZW50Tm9kZShjaGlsZENvbXBvbmVudCk7XG4gICAgICAgIGNoaWxkTm9kZSA9IHRoaXMuYWRkQ29tcG9uZW50TWV0YURhdGEoY2hpbGRDb21wb25lbnQsIGNoaWxkTm9kZSk7XG4gICAgICAgIGRyYWdnYWJsZU5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29tcG9uZW50TWV0YURhdGEoXG4gICAgY29tcG9uZW50OiBVaUNvbXBvbmVudCxcbiAgICBub2RlOiBVaVRyZWVOb2RlXG4gICk6IFVpVHJlZU5vZGUge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5ub2RlLFxuICAgICAgY2hpbGRzOiBjb21wb25lbnQuY2hpbGRzLFxuICAgICAgcGFyZW50czogY29tcG9uZW50LnBhcmVudHNcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb21wb25lbnRzKGNhdGVnb3JpZXM6IENhdGVnb3J5W10pOiBDYXRlZ29yeVtdIHtcbiAgICBpZiAoIWNhdGVnb3JpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGNhdGVnb3JpZXNcbiAgICAgIC5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNhdGVnb3J5LFxuICAgICAgICAgIGNvbXBvbmVudHM6IG9yZGVyQnkoXG4gICAgICAgICAgICBjYXRlZ29yeS5jb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgY29tcG9uZW50LnJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuUnVsZXMgPSBjb21wb25lbnQucnVsZXMuZmlsdGVyKHJ1bGUgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JlZW5BbGxvd2VkKHJ1bGUsIHRoaXMuc2NyZWVuKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjcmVlblJ1bGVzLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICdkaXNwbGF5T3JkZXInXG4gICAgICAgICAgKVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuY29tcG9uZW50cy5sZW5ndGggPiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTY3JlZW5BbGxvd2VkKHJ1bGU6IGFueSwgc2NyZWVuOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHJ1bGUuaW5jbHVkZWRTY3JlZW5zICYmXG4gICAgICAgIHJ1bGUuaW5jbHVkZWRTY3JlZW5zLmluY2x1ZGVzKHNjcmVlbikgJiZcbiAgICAgICAgIShydWxlLmV4Y2x1ZGVkU2NyZWVucyAmJiBydWxlLmV4Y2x1ZGVkU2NyZWVucy5pbmNsdWRlcyhzY3JlZW4pKSkgfHxcbiAgICAgIChydWxlLmluY2x1ZGVkU2NyZWVucyAmJlxuICAgICAgICBydWxlLmluY2x1ZGVkU2NyZWVucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgcnVsZS5leGNsdWRlZFNjcmVlbnMgJiZcbiAgICAgICAgcnVsZS5leGNsdWRlZFNjcmVlbnMubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==