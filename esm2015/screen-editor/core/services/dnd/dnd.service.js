/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { remove } from 'lodash';
import { TreeDragDropService } from 'primeng/api';
export class DndService {
    /**
     * @param {?} dragDropService
     */
    constructor(dragDropService) {
        this.dragDropService = dragDropService;
        this.dragDropService.dragStart$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dragStartInfo = {
                dragNodeTree: event.tree,
                dragNode: event.node,
                dragNodeSubNodes: event.subNodes,
                dragNodeIndex: event.index,
                dragNodeScope: event.scope
            };
            if (event.tree) {
                /* this.screenExplorerManagement.dispatch(
                   moveWidgetIndex({
                     index: this.getSelectionPath(
                       event.tree.tree.value[0].children,
                       event.node
                     )
                   })
                 );*/
            }
        }));
    }
    /**
     * @return {?}
     */
    getDroppedNode() {
        return this.dragDropService.dragStop$.pipe(map((/**
         * @param {?} treeNode
         * @return {?}
         */
        treeNode => {
            return treeNode;
        })));
    }
    /**
     * apply the tree dnd rules
     * @param {?} dropNode - node to trop inside.
     * @param {?} dragNode - node dragged from the widget store.
     * @return {?}
     */
    isDropNotAllowed(dropNode, dragNode) {
        // drop into the root node
        if (dragNode.parents && dropNode.type === 'rootNode') {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            return this._addRemovedNode(removed);
        }
        // drop into root node childrens
        if (dropNode.parent &&
            dropNode.parent.type === 'rootNode' &&
            dragNode.parents) {
            /** @type {?} */
            const removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        // when parent node have childs
        if (dropNode.parent &&
            dropNode.parent['childs'] &&
            !dropNode.parent['childs'].includes(dragNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        if (dragNode.parents &&
            dropNode.data &&
            !dragNode.parents.includes(dropNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        // drop into node that have childs
        if (dropNode.childs && !dropNode.childs.includes(dragNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            return this._addRemovedNode(removed);
        }
        // drag node have parents
        if (dragNode.parents &&
            dropNode.data &&
            dropNode.data.type &&
            !dragNode.parents.includes(dropNode.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        if (dragNode.parents &&
            dropNode.parent &&
            dropNode.parent.data &&
            !dragNode.parents.includes(dropNode.parent.data.type)) {
            /** @type {?} */
            const removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.data.type === dragNode.data.type));
            return this._addRemovedNode(removed);
        }
        return;
    }
    /**
     * @private
     * @param {?} treeItems
     * @param {?} node
     * @param {?=} path
     * @param {?=} parentIndex
     * @return {?}
     */
    getSelectionPath(treeItems, node, path, parentIndex) {
        /** @type {?} */
        const index = treeItems.indexOf(node);
        if (index < 0) {
            /** @type {?} */
            let i = 0;
            while (i < treeItems.length && path === undefined) {
                /** @type {?} */
                const children = treeItems[i].children;
                if (children && children.length > 0) {
                    if (parentIndex) {
                        path = this.getSelectionPath(children, node, path, [parentIndex, i].join('.'));
                    }
                    else {
                        path = this.getSelectionPath(children, node, path, i.toString());
                    }
                }
                i += 1;
            }
        }
        if (path) {
            return path;
        }
        if (!parentIndex) {
            return index.toString();
        }
        if (index < 0) {
            return undefined;
        }
        return [parentIndex, index].join('.');
    }
    /**
     * @private
     * @param {?} removed
     * @return {?}
     */
    _addRemovedNode(removed) {
        if (removed.length > 0) {
            return this.dragStartInfo.dragNodeSubNodes.splice(this.dragStartInfo.dragNodeIndex, 0, this.dragStartInfo.dragNode);
        }
        return;
    }
}
DndService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DndService.ctorParameters = () => [
    { type: TreeDragDropService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DndService.prototype.dragStartInfo;
    /** @type {?} */
    DndService.prototype.dragDropService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvc2VydmljZXMvZG5kL2RuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtsRCxNQUFNLE9BQU8sVUFBVTs7OztJQUVyQixZQUNTLGVBQW9DO1FBQXBDLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUczQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRztnQkFDbkIsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ3BCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxLQUFLLENBQUMsS0FBSzthQUMzQixDQUFDO1lBQ0YsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNmOzs7Ozs7O3FCQU9LO2FBQ0w7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3hDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUNiLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7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QU87SUFDVCxDQUFDOzs7WUEvS0YsVUFBVTs7OztZQUpGLG1CQUFtQjs7Ozs7OztJQU0xQixtQ0FBMkI7O0lBRXpCLHFDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRyZWVEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbmltcG9ydCB7IFVpVHJlZU5vZGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdHJlZS1ub2RlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERuZFNlcnZpY2Uge1xuICBwcml2YXRlIGRyYWdTdGFydEluZm86IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRyYWdEcm9wU2VydmljZTogVHJlZURyYWdEcm9wU2VydmljZSxcbi8vICAgIHByaXZhdGUgc2NyZWVuRXhwbG9yZXJNYW5hZ2VtZW50OiBTdG9yZTxTY3JlZW5FeHBsb3JlclN0YXRlPlxuICApIHtcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnU3RhcnQkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICB0aGlzLmRyYWdTdGFydEluZm8gPSB7XG4gICAgICAgIGRyYWdOb2RlVHJlZTogZXZlbnQudHJlZSxcbiAgICAgICAgZHJhZ05vZGU6IGV2ZW50Lm5vZGUsXG4gICAgICAgIGRyYWdOb2RlU3ViTm9kZXM6IGV2ZW50LnN1Yk5vZGVzLFxuICAgICAgICBkcmFnTm9kZUluZGV4OiBldmVudC5pbmRleCxcbiAgICAgICAgZHJhZ05vZGVTY29wZTogZXZlbnQuc2NvcGVcbiAgICAgIH07XG4gICAgICBpZiAoZXZlbnQudHJlZSkge1xuICAgICAgIC8qIHRoaXMuc2NyZWVuRXhwbG9yZXJNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgICAgIG1vdmVXaWRnZXRJbmRleCh7XG4gICAgICAgICAgICBpbmRleDogdGhpcy5nZXRTZWxlY3Rpb25QYXRoKFxuICAgICAgICAgICAgICBldmVudC50cmVlLnRyZWUudmFsdWVbMF0uY2hpbGRyZW4sXG4gICAgICAgICAgICAgIGV2ZW50Lm5vZGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICApOyovXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXREcm9wcGVkTm9kZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnU3RvcCQucGlwZShcbiAgICAgIG1hcCh0cmVlTm9kZSA9PiB7XG4gICAgICAgIHJldHVybiB0cmVlTm9kZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogYXBwbHkgdGhlIHRyZWUgZG5kIHJ1bGVzXG4gICAqIEBwYXJhbSBkcm9wTm9kZSAtIG5vZGUgdG8gdHJvcCBpbnNpZGUuXG4gICAqIEBwYXJhbSBkcmFnTm9kZSAtIG5vZGUgZHJhZ2dlZCBmcm9tIHRoZSB3aWRnZXQgc3RvcmUuXG4gICAqL1xuICBpc0Ryb3BOb3RBbGxvd2VkKGRyb3BOb2RlOiBVaVRyZWVOb2RlLCBkcmFnTm9kZTogVWlUcmVlTm9kZSk6IGFueSB7XG4gICAgLy8gZHJvcCBpbnRvIHRoZSByb290IG5vZGVcbiAgICBpZiAoZHJhZ05vZGUucGFyZW50cyAmJiBkcm9wTm9kZS50eXBlID09PSAncm9vdE5vZGUnKSB7XG4gICAgICBjb25zdCByZW1vdmVkID0gcmVtb3ZlKFxuICAgICAgICBkcm9wTm9kZS5jaGlsZHJlbixcbiAgICAgICAgKG5vZGU6IFVpVHJlZU5vZGUpID0+IG5vZGUuZGF0YS50eXBlID09PSBkcmFnTm9kZS5kYXRhLnR5cGVcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy5fYWRkUmVtb3ZlZE5vZGUocmVtb3ZlZCk7XG4gICAgfVxuICAgIC8vIGRyb3AgaW50byByb290IG5vZGUgY2hpbGRyZW5zXG4gICAgaWYgKFxuICAgICAgZHJvcE5vZGUucGFyZW50ICYmXG4gICAgICBkcm9wTm9kZS5wYXJlbnQudHlwZSA9PT0gJ3Jvb3ROb2RlJyAmJlxuICAgICAgZHJhZ05vZGUucGFyZW50c1xuICAgICkge1xuICAgICAgY29uc3QgcmVtb3ZlZCA9IHJlbW92ZShcbiAgICAgICAgZHJvcE5vZGUucGFyZW50LmNoaWxkcmVuLFxuICAgICAgICAobm9kZTogVWlUcmVlTm9kZSkgPT4gbm9kZS5kYXRhLnR5cGUgPT09IGRyYWdOb2RlLmRhdGEudHlwZVxuICAgICAgKTtcbiAgICAgIGlmIChyZW1vdmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudCBub2RlIGhhdmUgY2hpbGRzXG4gICAgaWYgKFxuICAgICAgZHJvcE5vZGUucGFyZW50ICYmXG4gICAgICBkcm9wTm9kZS5wYXJlbnRbJ2NoaWxkcyddICYmXG4gICAgICAhZHJvcE5vZGUucGFyZW50WydjaGlsZHMnXS5pbmNsdWRlcyhkcmFnTm9kZS5kYXRhLnR5cGUpXG4gICAgKSB7XG4gICAgICBjb25zdCByZW1vdmVkID0gcmVtb3ZlKFxuICAgICAgICBkcm9wTm9kZS5wYXJlbnQuY2hpbGRyZW4sXG4gICAgICAgIChub2RlOiBVaVRyZWVOb2RlKSA9PiBub2RlLmRhdGEudHlwZSA9PT0gZHJhZ05vZGUuZGF0YS50eXBlXG4gICAgICApO1xuICAgICAgaWYgKHJlbW92ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkUmVtb3ZlZE5vZGUocmVtb3ZlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGRyYWdOb2RlLnBhcmVudHMgJiZcbiAgICAgIGRyb3BOb2RlLmRhdGEgJiZcbiAgICAgICFkcmFnTm9kZS5wYXJlbnRzLmluY2x1ZGVzKGRyb3BOb2RlLmRhdGEudHlwZSlcbiAgICApIHtcbiAgICAgIGNvbnN0IHJlbW92ZWQgPSByZW1vdmUoXG4gICAgICAgIGRyb3BOb2RlLmNoaWxkcmVuLFxuICAgICAgICAobm9kZTogVWlUcmVlTm9kZSkgPT4gbm9kZS5kYXRhLnR5cGUgPT09IGRyYWdOb2RlLmRhdGEudHlwZVxuICAgICAgKTtcbiAgICAgIGlmIChyZW1vdmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBkcm9wIGludG8gbm9kZSB0aGF0IGhhdmUgY2hpbGRzXG4gICAgaWYgKGRyb3BOb2RlLmNoaWxkcyAmJiAhZHJvcE5vZGUuY2hpbGRzLmluY2x1ZGVzKGRyYWdOb2RlLmRhdGEudHlwZSkpIHtcbiAgICAgIGNvbnN0IHJlbW92ZWQgPSByZW1vdmUoXG4gICAgICAgIGRyb3BOb2RlLmNoaWxkcmVuLFxuICAgICAgICAobm9kZTogVWlUcmVlTm9kZSkgPT4gbm9kZS5kYXRhLnR5cGUgPT09IGRyYWdOb2RlLmRhdGEudHlwZVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLl9hZGRSZW1vdmVkTm9kZShyZW1vdmVkKTtcbiAgICB9XG4gICAgLy8gZHJhZyBub2RlIGhhdmUgcGFyZW50c1xuICAgIGlmIChcbiAgICAgIGRyYWdOb2RlLnBhcmVudHMgJiZcbiAgICAgIGRyb3BOb2RlLmRhdGEgJiZcbiAgICAgIGRyb3BOb2RlLmRhdGEudHlwZSAmJlxuICAgICAgIWRyYWdOb2RlLnBhcmVudHMuaW5jbHVkZXMoZHJvcE5vZGUuZGF0YS50eXBlKVxuICAgICkge1xuICAgICAgY29uc3QgcmVtb3ZlZCA9IHJlbW92ZShcbiAgICAgICAgZHJvcE5vZGUuY2hpbGRyZW4sXG4gICAgICAgIChub2RlOiBVaVRyZWVOb2RlKSA9PiBub2RlLmRhdGEudHlwZSA9PT0gZHJhZ05vZGUuZGF0YS50eXBlXG4gICAgICApO1xuICAgICAgaWYgKHJlbW92ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkUmVtb3ZlZE5vZGUocmVtb3ZlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGRyYWdOb2RlLnBhcmVudHMgJiZcbiAgICAgIGRyb3BOb2RlLnBhcmVudCAmJlxuICAgICAgZHJvcE5vZGUucGFyZW50LmRhdGEgJiZcbiAgICAgICFkcmFnTm9kZS5wYXJlbnRzLmluY2x1ZGVzKGRyb3BOb2RlLnBhcmVudC5kYXRhLnR5cGUpXG4gICAgKSB7XG4gICAgICBjb25zdCByZW1vdmVkID0gcmVtb3ZlKFxuICAgICAgICBkcm9wTm9kZS5wYXJlbnQuY2hpbGRyZW4sXG4gICAgICAgIChub2RlOiBVaVRyZWVOb2RlKSA9PiBub2RlLmRhdGEudHlwZSA9PT0gZHJhZ05vZGUuZGF0YS50eXBlXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdGlvblBhdGgoXG4gICAgdHJlZUl0ZW1zOiBhbnlbXSxcbiAgICBub2RlOiBhbnksXG4gICAgcGF0aD86IHN0cmluZyxcbiAgICBwYXJlbnRJbmRleD86IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGluZGV4ID0gdHJlZUl0ZW1zLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCB0cmVlSXRlbXMubGVuZ3RoICYmIHBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRyZWVJdGVtc1tpXS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocGFyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLmdldFNlbGVjdGlvblBhdGgoXG4gICAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICBbcGFyZW50SW5kZXgsIGldLmpvaW4oJy4nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMuZ2V0U2VsZWN0aW9uUGF0aChjaGlsZHJlbiwgbm9kZSwgcGF0aCwgaS50b1N0cmluZygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIGlmICghcGFyZW50SW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleC50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gW3BhcmVudEluZGV4LCBpbmRleF0uam9pbignLicpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkUmVtb3ZlZE5vZGUocmVtb3ZlZDogYW55W10pIHtcbiAgICBpZiAocmVtb3ZlZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnU3RhcnRJbmZvLmRyYWdOb2RlU3ViTm9kZXMuc3BsaWNlKFxuICAgICAgICB0aGlzLmRyYWdTdGFydEluZm8uZHJhZ05vZGVJbmRleCxcbiAgICAgICAgMCxcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRJbmZvLmRyYWdOb2RlXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==