/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { remove } from 'lodash';
import { TreeDragDropService } from 'primeng/api';
var DndService = /** @class */ (function () {
    function DndService(dragDropService) {
        var _this = this;
        this.dragDropService = dragDropService;
        this.dragDropService.dragStart$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dragStartInfo = {
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
    DndService.prototype.getDroppedNode = /**
     * @return {?}
     */
    function () {
        return this.dragDropService.dragStop$.pipe(map((/**
         * @param {?} treeNode
         * @return {?}
         */
        function (treeNode) {
            return treeNode;
        })));
    };
    /**
     * apply the tree dnd rules
     * @param dropNode - node to trop inside.
     * @param dragNode - node dragged from the widget store.
     */
    /**
     * apply the tree dnd rules
     * @param {?} dropNode - node to trop inside.
     * @param {?} dragNode - node dragged from the widget store.
     * @return {?}
     */
    DndService.prototype.isDropNotAllowed = /**
     * apply the tree dnd rules
     * @param {?} dropNode - node to trop inside.
     * @param {?} dragNode - node dragged from the widget store.
     * @return {?}
     */
    function (dropNode, dragNode) {
        // drop into the root node
        if (dragNode.parents && dropNode.type === 'rootNode') {
            /** @type {?} */
            var removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            return this._addRemovedNode(removed);
        }
        // drop into root node childrens
        if (dropNode.parent &&
            dropNode.parent.type === 'rootNode' &&
            dragNode.parents) {
            /** @type {?} */
            var removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        // when parent node have childs
        if (dropNode.parent &&
            dropNode.parent['childs'] &&
            !dropNode.parent['childs'].includes(dragNode.data.type)) {
            /** @type {?} */
            var removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        if (dragNode.parents &&
            dropNode.data &&
            !dragNode.parents.includes(dropNode.data.type)) {
            /** @type {?} */
            var removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        // drop into node that have childs
        if (dropNode.childs && !dropNode.childs.includes(dragNode.data.type)) {
            /** @type {?} */
            var removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            return this._addRemovedNode(removed);
        }
        // drag node have parents
        if (dragNode.parents &&
            dropNode.data &&
            dropNode.data.type &&
            !dragNode.parents.includes(dropNode.data.type)) {
            /** @type {?} */
            var removed = remove(dropNode.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            if (removed.length > 0) {
                return this._addRemovedNode(removed);
            }
        }
        if (dragNode.parents &&
            dropNode.parent &&
            dropNode.parent.data &&
            !dragNode.parents.includes(dropNode.parent.data.type)) {
            /** @type {?} */
            var removed = remove(dropNode.parent.children, (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.data.type === dragNode.data.type; }));
            return this._addRemovedNode(removed);
        }
        return;
    };
    /**
     * @private
     * @param {?} treeItems
     * @param {?} node
     * @param {?=} path
     * @param {?=} parentIndex
     * @return {?}
     */
    DndService.prototype.getSelectionPath = /**
     * @private
     * @param {?} treeItems
     * @param {?} node
     * @param {?=} path
     * @param {?=} parentIndex
     * @return {?}
     */
    function (treeItems, node, path, parentIndex) {
        /** @type {?} */
        var index = treeItems.indexOf(node);
        if (index < 0) {
            /** @type {?} */
            var i = 0;
            while (i < treeItems.length && path === undefined) {
                /** @type {?} */
                var children = treeItems[i].children;
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
    };
    /**
     * @private
     * @param {?} removed
     * @return {?}
     */
    DndService.prototype._addRemovedNode = /**
     * @private
     * @param {?} removed
     * @return {?}
     */
    function (removed) {
        if (removed.length > 0) {
            return this.dragStartInfo.dragNodeSubNodes.splice(this.dragStartInfo.dragNodeIndex, 0, this.dragStartInfo.dragNode);
        }
        return;
    };
    DndService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DndService.ctorParameters = function () { return [
        { type: TreeDragDropService }
    ]; };
    return DndService;
}());
export { DndService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DndService.prototype.dragStartInfo;
    /** @type {?} */
    DndService.prototype.dragDropService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvc2VydmljZXMvZG5kL2RuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlsRDtJQUdFLG9CQUNTLGVBQW9DO1FBRDdDLGlCQXVCQztRQXRCUSxvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7UUFHM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUM3QyxLQUFJLENBQUMsYUFBYSxHQUFHO2dCQUNuQixZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDcEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ2hDLGFBQWEsRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDMUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxLQUFLO2FBQzNCLENBQUM7WUFDRixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2Y7Ozs7Ozs7cUJBT0s7YUFDTDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG1DQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ1YsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7OztPQUlH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QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDaEMsQ0FBQyxFQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUM1QixDQUFDO1NBQ0g7UUFDRCxPQUFPO0lBQ1QsQ0FBQzs7Z0JBL0tGLFVBQVU7Ozs7Z0JBSkYsbUJBQW1COztJQW9MNUIsaUJBQUM7Q0FBQSxBQWhMRCxJQWdMQztTQS9LWSxVQUFVOzs7Ozs7SUFDckIsbUNBQTJCOztJQUV6QixxQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBUcmVlRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5pbXBvcnQgeyBVaVRyZWVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3RyZWUtbm9kZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEbmRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRJbmZvOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IFRyZWVEcmFnRHJvcFNlcnZpY2UsXG4vLyAgICBwcml2YXRlIHNjcmVlbkV4cGxvcmVyTWFuYWdlbWVudDogU3RvcmU8U2NyZWVuRXhwbG9yZXJTdGF0ZT5cbiAgKSB7XG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ1N0YXJ0JC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5kcmFnU3RhcnRJbmZvID0ge1xuICAgICAgICBkcmFnTm9kZVRyZWU6IGV2ZW50LnRyZWUsXG4gICAgICAgIGRyYWdOb2RlOiBldmVudC5ub2RlLFxuICAgICAgICBkcmFnTm9kZVN1Yk5vZGVzOiBldmVudC5zdWJOb2RlcyxcbiAgICAgICAgZHJhZ05vZGVJbmRleDogZXZlbnQuaW5kZXgsXG4gICAgICAgIGRyYWdOb2RlU2NvcGU6IGV2ZW50LnNjb3BlXG4gICAgICB9O1xuICAgICAgaWYgKGV2ZW50LnRyZWUpIHtcbiAgICAgICAvKiB0aGlzLnNjcmVlbkV4cGxvcmVyTWFuYWdlbWVudC5kaXNwYXRjaChcbiAgICAgICAgICBtb3ZlV2lkZ2V0SW5kZXgoe1xuICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0U2VsZWN0aW9uUGF0aChcbiAgICAgICAgICAgICAgZXZlbnQudHJlZS50cmVlLnZhbHVlWzBdLmNoaWxkcmVuLFxuICAgICAgICAgICAgICBldmVudC5ub2RlXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKTsqL1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RHJvcHBlZE5vZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ1N0b3AkLnBpcGUoXG4gICAgICBtYXAodHJlZU5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gdHJlZU5vZGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIGFwcGx5IHRoZSB0cmVlIGRuZCBydWxlc1xuICAgKiBAcGFyYW0gZHJvcE5vZGUgLSBub2RlIHRvIHRyb3AgaW5zaWRlLlxuICAgKiBAcGFyYW0gZHJhZ05vZGUgLSBub2RlIGRyYWdnZWQgZnJvbSB0aGUgd2lkZ2V0IHN0b3JlLlxuICAgKi9cbiAgaXNEcm9wTm90QWxsb3dlZChkcm9wTm9kZTogVWlUcmVlTm9kZSwgZHJhZ05vZGU6IFVpVHJlZU5vZGUpOiBhbnkge1xuICAgIC8vIGRyb3AgaW50byB0aGUgcm9vdCBub2RlXG4gICAgaWYgKGRyYWdOb2RlLnBhcmVudHMgJiYgZHJvcE5vZGUudHlwZSA9PT0gJ3Jvb3ROb2RlJykge1xuICAgICAgY29uc3QgcmVtb3ZlZCA9IHJlbW92ZShcbiAgICAgICAgZHJvcE5vZGUuY2hpbGRyZW4sXG4gICAgICAgIChub2RlOiBVaVRyZWVOb2RlKSA9PiBub2RlLmRhdGEudHlwZSA9PT0gZHJhZ05vZGUuZGF0YS50eXBlXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQpO1xuICAgIH1cbiAgICAvLyBkcm9wIGludG8gcm9vdCBub2RlIGNoaWxkcmVuc1xuICAgIGlmIChcbiAgICAgIGRyb3BOb2RlLnBhcmVudCAmJlxuICAgICAgZHJvcE5vZGUucGFyZW50LnR5cGUgPT09ICdyb290Tm9kZScgJiZcbiAgICAgIGRyYWdOb2RlLnBhcmVudHNcbiAgICApIHtcbiAgICAgIGNvbnN0IHJlbW92ZWQgPSByZW1vdmUoXG4gICAgICAgIGRyb3BOb2RlLnBhcmVudC5jaGlsZHJlbixcbiAgICAgICAgKG5vZGU6IFVpVHJlZU5vZGUpID0+IG5vZGUuZGF0YS50eXBlID09PSBkcmFnTm9kZS5kYXRhLnR5cGVcbiAgICAgICk7XG4gICAgICBpZiAocmVtb3ZlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRSZW1vdmVkTm9kZShyZW1vdmVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnQgbm9kZSBoYXZlIGNoaWxkc1xuICAgIGlmIChcbiAgICAgIGRyb3BOb2RlLnBhcmVudCAmJlxuICAgICAgZHJvcE5vZGUucGFyZW50WydjaGlsZHMnXSAmJlxuICAgICAgIWRyb3BOb2RlLnBhcmVudFsnY2hpbGRzJ10uaW5jbHVkZXMoZHJhZ05vZGUuZGF0YS50eXBlKVxuICAgICkge1xuICAgICAgY29uc3QgcmVtb3ZlZCA9IHJlbW92ZShcbiAgICAgICAgZHJvcE5vZGUucGFyZW50LmNoaWxkcmVuLFxuICAgICAgICAobm9kZTogVWlUcmVlTm9kZSkgPT4gbm9kZS5kYXRhLnR5cGUgPT09IGRyYWdOb2RlLmRhdGEudHlwZVxuICAgICAgKTtcbiAgICAgIGlmIChyZW1vdmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBkcmFnTm9kZS5wYXJlbnRzICYmXG4gICAgICBkcm9wTm9kZS5kYXRhICYmXG4gICAgICAhZHJhZ05vZGUucGFyZW50cy5pbmNsdWRlcyhkcm9wTm9kZS5kYXRhLnR5cGUpXG4gICAgKSB7XG4gICAgICBjb25zdCByZW1vdmVkID0gcmVtb3ZlKFxuICAgICAgICBkcm9wTm9kZS5jaGlsZHJlbixcbiAgICAgICAgKG5vZGU6IFVpVHJlZU5vZGUpID0+IG5vZGUuZGF0YS50eXBlID09PSBkcmFnTm9kZS5kYXRhLnR5cGVcbiAgICAgICk7XG4gICAgICBpZiAocmVtb3ZlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRSZW1vdmVkTm9kZShyZW1vdmVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJvcCBpbnRvIG5vZGUgdGhhdCBoYXZlIGNoaWxkc1xuICAgIGlmIChkcm9wTm9kZS5jaGlsZHMgJiYgIWRyb3BOb2RlLmNoaWxkcy5pbmNsdWRlcyhkcmFnTm9kZS5kYXRhLnR5cGUpKSB7XG4gICAgICBjb25zdCByZW1vdmVkID0gcmVtb3ZlKFxuICAgICAgICBkcm9wTm9kZS5jaGlsZHJlbixcbiAgICAgICAgKG5vZGU6IFVpVHJlZU5vZGUpID0+IG5vZGUuZGF0YS50eXBlID09PSBkcmFnTm9kZS5kYXRhLnR5cGVcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy5fYWRkUmVtb3ZlZE5vZGUocmVtb3ZlZCk7XG4gICAgfVxuICAgIC8vIGRyYWcgbm9kZSBoYXZlIHBhcmVudHNcbiAgICBpZiAoXG4gICAgICBkcmFnTm9kZS5wYXJlbnRzICYmXG4gICAgICBkcm9wTm9kZS5kYXRhICYmXG4gICAgICBkcm9wTm9kZS5kYXRhLnR5cGUgJiZcbiAgICAgICFkcmFnTm9kZS5wYXJlbnRzLmluY2x1ZGVzKGRyb3BOb2RlLmRhdGEudHlwZSlcbiAgICApIHtcbiAgICAgIGNvbnN0IHJlbW92ZWQgPSByZW1vdmUoXG4gICAgICAgIGRyb3BOb2RlLmNoaWxkcmVuLFxuICAgICAgICAobm9kZTogVWlUcmVlTm9kZSkgPT4gbm9kZS5kYXRhLnR5cGUgPT09IGRyYWdOb2RlLmRhdGEudHlwZVxuICAgICAgKTtcbiAgICAgIGlmIChyZW1vdmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBkcmFnTm9kZS5wYXJlbnRzICYmXG4gICAgICBkcm9wTm9kZS5wYXJlbnQgJiZcbiAgICAgIGRyb3BOb2RlLnBhcmVudC5kYXRhICYmXG4gICAgICAhZHJhZ05vZGUucGFyZW50cy5pbmNsdWRlcyhkcm9wTm9kZS5wYXJlbnQuZGF0YS50eXBlKVxuICAgICkge1xuICAgICAgY29uc3QgcmVtb3ZlZCA9IHJlbW92ZShcbiAgICAgICAgZHJvcE5vZGUucGFyZW50LmNoaWxkcmVuLFxuICAgICAgICAobm9kZTogVWlUcmVlTm9kZSkgPT4gbm9kZS5kYXRhLnR5cGUgPT09IGRyYWdOb2RlLmRhdGEudHlwZVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLl9hZGRSZW1vdmVkTm9kZShyZW1vdmVkKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3Rpb25QYXRoKFxuICAgIHRyZWVJdGVtczogYW55W10sXG4gICAgbm9kZTogYW55LFxuICAgIHBhdGg/OiBzdHJpbmcsXG4gICAgcGFyZW50SW5kZXg/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbmRleCA9IHRyZWVJdGVtcy5pbmRleE9mKG5vZGUpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgdHJlZUl0ZW1zLmxlbmd0aCAmJiBwYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0cmVlSXRlbXNbaV0uY2hpbGRyZW47XG4gICAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHBhcmVudEluZGV4KSB7XG4gICAgICAgICAgICBwYXRoID0gdGhpcy5nZXRTZWxlY3Rpb25QYXRoKFxuICAgICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgW3BhcmVudEluZGV4LCBpXS5qb2luKCcuJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLmdldFNlbGVjdGlvblBhdGgoY2hpbGRyZW4sIG5vZGUsIHBhdGgsIGkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICBpZiAoIXBhcmVudEluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIFtwYXJlbnRJbmRleCwgaW5kZXhdLmpvaW4oJy4nKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZFJlbW92ZWROb2RlKHJlbW92ZWQ6IGFueVtdKSB7XG4gICAgaWYgKHJlbW92ZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ1N0YXJ0SW5mby5kcmFnTm9kZVN1Yk5vZGVzLnNwbGljZShcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRJbmZvLmRyYWdOb2RlSW5kZXgsXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0SW5mby5kcmFnTm9kZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=